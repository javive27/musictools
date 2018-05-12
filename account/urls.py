from django.urls import include, path
from . import views

app_name = 'account'

urlpatterns = [
        path('', views.post_list),
    ]