from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products
from .serializers import ProductSerializer
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
    # all the products will be stored in the produtct varialble from the get request
    products = Product.objects.all()
    #after we get our queryset which will be an object we serialize it
    serializer = ProductSerializer(products, many=True)   
    return Response(serializer.data)

# function view to get a product by id
@api_view(['Get'])
def getProduct(request, pk):
    product = None
    for item in products:
        if item["_id"] == pk:
            product = item
            break
    
    return Response(product)