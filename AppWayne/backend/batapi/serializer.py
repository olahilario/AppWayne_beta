from rest_framework import serializers
from .models import Desire, BatGuest, Patent, Task

class DesireSerializer(serializers.ModelSerializer):
  class Meta:
    model = Desire
    fields = '__all__'

class BatGuestSerializer(serializers.ModelSerializer):
  class Meta:
    model = BatGuest
    fields = '__all__'

class PatentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Patent
    fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    fields = '__all__'