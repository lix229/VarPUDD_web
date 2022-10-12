from django.urls import path
from . import views

'''
App side url mapping
'''

urlpatterns = [
    # Defualt index page
    path('', views.index, name='index'),
    # Defualt page after data submission
    path('data_sub', views.data_submission, name='data_submission'),
]
