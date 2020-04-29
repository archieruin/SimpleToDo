from django.urls import path

from .views import TaskListView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'', TaskListView, basename='task')

urlpatterns = router.urls
print(f'{urlpatterns=}')
