from django.urls import include, path
from . import views

app_name = 'metronomo'

urlpatterns = [
        path('', views.metronomo),
    ]