from django.urls import include, path
from . import views

app_name = 'afinador'

urlpatterns = [
        path('', views.afinador),
    ]