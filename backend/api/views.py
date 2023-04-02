from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products
# Create your views here.

@api_view(['Get'])
def helloWorld(request):
    return Response("testing view-url config")


@api_view(['Get'])
def getRoutes(request):
    routes = [...
    ]
    return Response(routes)

# function view to get all products
@api_view(['Get'])
def getProducts(request):
    return Response(products)

# function view to get a product by id
@api_view(['Get'])
def getProduct(request, pk):
    product = None
    for item in products:
        if item["_id"] == pk:
            product = item
            break
    
    return Response(product)