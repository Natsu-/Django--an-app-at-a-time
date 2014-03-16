# -*- coding: utf-8 -*-

import json

from django.http import HttpResponse
from django.shortcuts import render


def index(request):

    if request.is_ajax() and request.method == 'POST':

        data = {}
        data['getlist'] = unicode(request.POST.getlist('params'))
        data['get'] = unicode(request.POST.get('params'))
        data['get_paramlist'] = unicode(request.POST.get('params[]'))

        return HttpResponse(json.dumps(data), content_type="application/json")

    return render(request, 'index.html')
