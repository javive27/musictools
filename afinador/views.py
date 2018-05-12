from django.shortcuts import render
def afinador(request):
    return render(request, 'afinador/afinador.html', {})