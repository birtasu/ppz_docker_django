from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from protocols import views

urlpatterns = [
    url(r'^', include('protocols.urls')),
    path('admin/', admin.site.urls),
]
