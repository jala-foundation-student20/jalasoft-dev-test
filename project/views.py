# Create your views here.
from django.shortcuts import render, redirect  
from project.forms import UserForm  
from project.models import Users  
# Create your views here.  
def emp(request):  
    if request.method == "POST":  
        form = UserForm(request.POST)  
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('users')  
            except:  
                pass  
    else:  
        form = UserForm()  
    return render(request,'index.html',{'form':form})  
def users(request):  
    users = Users.objects.all()  
    return render(request,"users.html",{'users':users})  
def edit(request, id):  
    user = Users.objects.get(id=id)  
    return render(request,'edit.html', {'user':user})  
def update(request, id):  
    user = Users.objects.get(id=id)  
    form = UserForm(request.POST, instance = user)  
    if form.is_valid():  
        form.save()  
        return redirect("users")  
    return render(request, 'edit.html', {'user': user})  
def destroy(request, id):  
    user = Users.objects.get(id=id)  
    user.delete()  
    return redirect("users")  