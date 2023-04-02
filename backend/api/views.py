from django.shortcuts import render
from django.http import JsonResponse
from .products import products
# Create your views here.

def helloWorld(request):
    return JsonResponse("Hello world", safe=False)

def getProducts(request):
    return JsonResponse(products, safe=False)


# def getRoutes(request):
#     return JsonResponse("Hello", safe=False)

