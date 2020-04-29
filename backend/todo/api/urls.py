from .views import TaskListView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', TaskListView, basename='task')

urlpatterns = router.urls

