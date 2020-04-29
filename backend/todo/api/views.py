from rest_framework import viewsets
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView

from .models import Task
from .serializers import TaskSerializer


class TaskListView(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


# class TaskListView(ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#
#
# class TaskDetailView(RetrieveAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#
#
# class TaskUpdateView(UpdateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
