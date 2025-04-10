# sistema/urls.py
from django.contrib import admin
from django.urls import path
from sistema.views import Login  # Esta importação deve corresponder exatamente

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Login.as_view(), name='login')
]