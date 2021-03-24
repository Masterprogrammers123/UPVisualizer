from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
from bs4 import BeautifulSoup

# Create your views here.

def visualize():

    link = requests.get(info.link)
    scraper = soup = BeautifulSoup(link.text, 'html.parser')

    return 
class Visualizer(APIView):
    visualized = visualize() # since it will return something and there will be visualized.commits

    def post(self, request, format=None):
        return Response(visualized, status=status.HTTP_200_OK)
