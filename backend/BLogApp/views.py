from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def Hello(request):
  return JsonResponse({'message': 'Hello World'})
