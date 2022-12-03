from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('events', views.EventViewSet)
router.register('locations', views.LocationViewSet)
router.register('students', views.StudentViewSet)
router.register('orders', views.OrderViewSet)
router.register('orderItem', views.OrderItemViewSet)
router.register('signUp', views.SignupItemViewSet)
router.register('login', views.accountViewSet)

# URLConf
urlpatterns=router.urls
