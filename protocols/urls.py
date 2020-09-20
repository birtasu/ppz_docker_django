from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^new_protocol/$', views.new_protocol, name='new_protocol'),
    url(r'^add_protocol/$', views.add_protocol, name='add_protocol'),
    url(r'^preview_del_row/$', views.preview_del_row, name='preview_del_row'),

]