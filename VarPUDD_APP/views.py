from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

'''
Render index.html on the home page
'''
@csrf_exempt
def index(request):
    return render(request, 'index.html')


'''
On request for /data-sub, render data_submission.html with context=request.POST
'''
@csrf_exempt
def data_submission(request):
    #TODO filter empty fields
    if request.method == 'POST':
        print(request.POST)
        context = request.POST
        #TODO do something with context
        return render(request, 'data_submission.html', context=context)
    else:
        return HttpResponse('Data not received')