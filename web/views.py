from django.shortcuts import render
from django.shortcuts import redirect, HttpResponse
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.hashers import make_password
from django.core.paginator import Paginator, InvalidPage, EmptyPage, PageNotAnInteger
from django.db.models import Count
from django.contrib.auth.models import User
from web.models import *
# Create your views here.

def index(request):
    Category_all = UserInfo.objects.filter(name='')
    return render(request, 'index.html')