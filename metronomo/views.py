from django.shortcuts import render
def metronomo(request):
    return render(request, 'metronomo/metronomo.html', {})