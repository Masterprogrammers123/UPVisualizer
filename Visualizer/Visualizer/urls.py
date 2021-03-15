from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("rest/", include("RESTFUL_API.urls")),
    path("", include("frontend.urls")),
]
