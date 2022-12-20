from django.shortcuts import render, redirect

from .models import Student

from .models import Task

from datetime import datetime, date as dt

# Create your views here.


def index(request):
    return render(request, 'index.html')


def registration(request):
    return render(request, 'registration.html')


def login(request):
    return render(request, 'login.html')


def success(request):
    return render(request, 'succes.html')


def student(request):
    student_data = Student.objects.all()
    return render(request, 'student.html', {'data': student_data})


def todo(request):

    to_data = Task.objects.all()
    return render(request, 'todo.html', {'data': to_data})


# add data to model


def add_data(request):
    if request.method == 'POST':
        reg = request.POST['reg']
        name = request.POST['name']
        department = request.POST['department']
        address = request.POST['address']

        data = Student(reg=reg, name=name,
                       department=department, address=address)
        data.save()

        student_data = Student.objects.all()
        return render(request, 'student.html', {'data': student_data})
    else:
        return render(request, 'student.html')



# function for delete


def delete(request, del_id):
    delete = Student.objects.get(id=del_id)
    delete.delete()
    return redirect('student')


# def refresh(request,id):

#     # date=Task.objects.get(id=id)

#     # now = datetime.now()

#     # date2 = datetime.strptime(d, '%Y-%m-%d')
#     # res = date2-now
#     # res_f=res.days

#     to_data = Task(expire=res_f)
#     to_data.save()
#     to_data = Task.objects.all()
#     return render(request, 'todo.html', {'data': to_data})






# edit function


def edit(request, id):
    user_data = Student.objects.get(id=id)
    return render(request, 'edit.html', {'data': user_data})



# updation on edit page


def update(request, id):
    if request.method == 'POST':
        add = Student.objects.get(id=id)
        add.reg = request.POST['reg']
        add.name = request.POST['name']
        add.address = request.POST['address']
        add.department = request.POST['department']
        add.save()
        return redirect('student')




# functions for to do

def add_todo(request):

    if request.method == 'POST':
        task = request.POST['task']
        date = request.POST['date']

       # date calculation

        now = datetime.now()
        date2 = datetime.strptime(date, '%Y-%m-%d')
        res = date2-now
        res_f=res.days

        to_data = Task(task=task, date=date, expire=res_f)
        to_data.save()
        todo = Task.objects.all()


        return render(request, 'todo.html', {"data": todo})
    else:
        return render(request, 'todo.html')



# function for delete to do


def delete_todo(request, to_id):
    del_todo = Task.objects.get(id=to_id)
    del_todo.delete()
    return redirect('todo')


# edit to do

def edit_todo(request, id):
    u_data = Task.objects.get(id=id)
    return render(request, 'edittodo.html', {'data': u_data})


def update_todo(request, id):
    if request.method == 'POST':
        add = Task.objects.get(id=id)
        add.task = request.POST['task']
        add.date = request.POST['date']
        add.save()
        return redirect('todo')
