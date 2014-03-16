# -*- coding: utf-8 -*-

from django.conf.urls import patterns, url


urlpatterns = patterns(
    '',

    # This says to django to call the function
    # 'home' in the module 'views' of the app 'app1_hello'" for any URL
    url(r'', 'blog1_post_ajax_multiple_values.views.index'),

)


# This url pattern is included in project/urls.py, this is why it works.
# You will want to read this file to understand url routing better.
