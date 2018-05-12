from django.urls import include, path
from . import views

app_name = 'afinadorG'

urlpatterns = [
        path('', views.afinador),
    ]