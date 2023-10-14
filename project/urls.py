from django.contrib import admin  
from django.urls import path  
from project import views  
urlpatterns = [  
    path('admin/', admin.site.urls),  
    path('emp', views.emp),  
    path('users',views.users),  
    path('edit/<int:id>', views.edit),  
    path('update/<int:id>', views.update),  
    path('delete/<int:id>', views.destroy),  
]  