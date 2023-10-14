from django import forms  
from project.models import Users
class UserForm(forms.ModelForm):  
    class Meta:  
        model = Users  
        fields = "__all__"  