from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Desire, BatGuest, Patent, Task
from .serializer import DesireSerializer, BatGuestSerializer, PatentSerializer, TaskSerializer

# Create your views here.

@api_view(['GET'])
def get_desire(request, pk=None):
  if (pk != None):
    try:
      desire = Desire.objects.get(pk=pk)
      serializedData = DesireSerializer(desire).data
      return Response(serializedData)
    
    except Desire.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
  desires = Desire.objects.all()
  serializedData = DesireSerializer(desires, many=True).data
  return Response(serializedData)

@api_view(['POST'])
def create_desire(request):
  data = request.data
  serializer = DesireSerializer(data=data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def desire_detail(request, pk):
  try:
    desire = Desire.objects.get(pk=pk)
  except Desire.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'DELETE':
    desire.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  elif request.method == 'PUT':
    data = request.data
    serializer = DesireSerializer(desire, data=data)
    if serializer.is_valid():
      serializer.save()
    return Response(serializer.data)
  return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_guests(request, pk=None):
  if (pk != None):
    try:
      guest = BatGuest.objects.get(pk=pk)
      serializedData = BatGuestSerializer(guest).data
      return Response(serializedData)
    
    except BatGuest.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
  guests = BatGuest.objects.all()
  serializedData = BatGuestSerializer(guests, many=True).data
  return Response(serializedData)

@api_view(['POST'])
def create_guest(request):
  data = request.data
  serializer = BatGuestSerializer(data=data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def guest_detail(request, pk):
  try:
    guest = BatGuest.objects.get(pk=pk)
  except BatGuest.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'DELETE':
    guest.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  elif request.method == 'PUT':
    data = request.data
    serializer = BatGuestSerializer(guest, data=data)
    if serializer.is_valid():
      serializer.save()
    return Response(serializer.data)
  return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_tasks(request, pk=None):
  if (pk != None):
    try:
      tasks = Task.objects.get(pk=pk)
      serializedData = TaskSerializer(tasks).data
      return Response(serializedData)
    
    except Task.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
  tasks = Task.objects.all()
  serializedData = TaskSerializer(tasks, many=True).data
  return Response(serializedData)

@api_view(['POST'])
def create_task(request):
  data = request.data
  serializer = TaskSerializer(data=data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def task_detail(request, pk):
  try:
    task = Task.objects.get(pk=pk)
  except Task.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'DELETE':
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  elif request.method == 'PUT':
    data = request.data
    serializer = TaskSerializer(task, data=data)
    if serializer.is_valid():
      serializer.save()
    return Response(serializer.data)
  return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def get_patent(request, pk=None):
  if (pk != None):
    try:
      patent = Patent.objects.get(pk=pk)
      serializedData = PatentSerializer(patent).data
      return Response(serializedData)
    
    except Patent.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
  patents = Patent.objects.all()
  serializedData = PatentSerializer(patents, many=True).data
  return Response(serializedData)

@api_view(['POST'])
def create_patent(request):
  data = request.data
  serializer = PatentSerializer(data=data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def patent_detail(request, pk):
  try:
    patent = Patent.objects.get(pk=pk)
  except Patent.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'DELETE':
    patent.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  elif request.method == 'PUT':
    data = request.data
    serializer = PatentSerializer(patent, data=data)
    if serializer.is_valid():
      serializer.save()
    return Response(serializer.data)
  return Response(serializer.data, status=status.HTTP_201_CREATED)

