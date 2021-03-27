from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
import json
from pprint import pprint
from github import Github
from decouple import config

# Create your views here.

class Visualizer(APIView):

    def visualize(self, _owner, _name):
        if _name == "" or _owner == "":
            return Response({"Error": "Invalid Info"}, status=status.HTTP_400_BAD_REQUEST)

        owner, name = _owner.replace(" ", "-").lower(), _name.replace(" ", "-").lower()
        print(f"Owner: {owner}\nName: {name}")
        token = config("TOKEN")
        print(token)

        self.repo = self.g.get_repo(f'{owner}/{name}')
        collaborators = self.repo.get_collaborators()
        for collaborator in collaborators:
            print(collaborator.login)
        repo_json = requests.get(f"https://api.github.com/repos/{owner}/{name}").json()
        

        # self.repo = self.g.search_repositories(name)
        # print(self.repo.full_name)   
        
        # return JsonResponse({"Result:": "result"}, status=status.HTTP_100_CONTINUE)    

    def post(self, _request, format=None):
        self.g = Github()
        request = json.loads(_request.body.decode('utf-8'))
        print(request)
        print(request["repoOwner"])
        print(request["repoName"])
        # self.visualize(request["repoName"])
        self.visualize(request["repoOwner"], request["repoName"])
        return JsonResponse({"[<to be changed>]": "[info]"}, status=status.HTTP_200_OK)
