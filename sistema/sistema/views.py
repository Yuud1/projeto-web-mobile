# sistema/views.py
from django.views.generic import View
from django.shortcuts import render

class Login(View):  # Note que o nome da classe deve ser exatamente 'Login'
    def get(self, request):
        contexto = {'mensagem': 'Sistema de cadastro de veículos'}
        return render(request, 'autenticacao.html', contexto)