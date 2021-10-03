import urllib.request
import requests
from django.conf import settings
from django.http import HttpResponse
from django.template import engines
from django.views.generic import TemplateView
import requests



class catchall_prod(TemplateView):
    template_name = 'base.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['DEBUG'] = settings.DEBUG
        return context

catchall = catchall_prod.as_view()
# catchall = catchall_dev if settings.DEBUG else catchall_prod