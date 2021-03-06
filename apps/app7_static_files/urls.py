# -*- coding: utf-8 -*-

from django.conf.urls import patterns, url
from django.views.generic import TemplateView

urlpatterns = patterns('',

    # We put the template files in a directory named against the application.
    # This way we "namespace" it, and other application can call their
    # template this way. It also allows any other application to
    # override specifically these templates if they want to.
    url(r'basics/',
        TemplateView.as_view(template_name="app7_static_files/basics.html"),
        name="static_files_basics"),

    url(r'flexible/',
        TemplateView.as_view(template_name="app7_static_files/flexible_layout.html"),
        name="flexible_layout"),

    url(r'production/', 'app7_static_files.views.production',
        name="prod_static_files"),

    url(r'',
        TemplateView.as_view(template_name="app7_static_files/index.html")),
)
