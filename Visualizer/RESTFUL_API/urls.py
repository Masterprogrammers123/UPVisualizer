from django.urls import path 
from .views import *


urlpatterns = [
    path("visualize", Visualizer.as_view())
]
