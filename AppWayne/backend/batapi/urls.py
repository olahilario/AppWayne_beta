from django.urls import path
from .views import get_desire, create_desire, desire_detail
from .views import get_guests, create_guest, guest_detail 
from .views import get_patent, create_patent, patent_detail
from .views import get_tasks, create_task, task_detail

urlpatterns = [
  path('desires/', get_desire, name='get_desires'),
  path('desire/<int:pk>/', get_desire, name='get_desire_by_id'),
  path('desires/create/', create_desire, name='create_desire'),
  path('desires/<int:pk>/', desire_detail, name='desire_detail'),

  path('guests/', get_guests, name='get_guests'),
  path('guest/<int:pk>/', get_guests, name='get_guest_by_id'),
  path('guests/create/', create_guest, name='create_guest'),
  path('guests/<int:pk>/', guest_detail, name='guest_detail'),

  path('patents/', get_patent, name='get_patent'),
  path('patent/<int:pk>/', get_patent, name='get_patent_by_id'),
  path('patent/create/', create_patent, name='create_patent'),
  path('patents/<int:pk>/', patent_detail, name='patent_detail'),

  path('tarefas/', get_tasks, name='get_tasks'),
  path('tarefa/<int:pk>/', get_tasks, name='get_task_by_id'),
  path('tarefa/create/', create_task, name='create_task'),
  path('tarefas/<int:pk>/', task_detail, name='task_detail'),
  

  
]