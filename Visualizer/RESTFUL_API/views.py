from django.shortcuts import render
from django.http import HttpResponse # TODO: Delete

# Create your views here.

def TestView(request):
    return HttpResponse("TestView")