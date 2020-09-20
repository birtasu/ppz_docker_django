from django.http import JsonResponse
from django.shortcuts import render
from .models import Protocol

def home(request):
    prot = Protocol.objects.all()
    return render(request, 'home.html', locals())

def new_protocol(request):
    return_dict = dict()
    data = request.POST
    n_instrument = data.get('instrument')
    n_shift = data.get('shift')
    n_theme = data.get('theme')
    n_unique_nmb = data.get('unique_nmb')
    new_protocol = Protocol.objects.create(instrument=n_instrument, shift=n_shift, theme=n_theme, unique_nmb=n_unique_nmb)
    return_dict['status'] = "Normal"
    return JsonResponse(return_dict)

def add_protocol(request):
    return render(request, 'add_protocol.html', locals())

def preview_del_row(request):
    return_dict = dict()
    data = request.POST
    unique_nmb = data.get('unique_nmb')
    Protocol.objects.get(unique_nmb=unique_nmb).delete()
    return_dict['status'] = unique_nmb
    return JsonResponse(return_dict)