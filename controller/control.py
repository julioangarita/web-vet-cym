from flask import render_template, request
from database.db import *
from controller.admin_s3 import * #nuevo agregado s3

def func_home_page():
    return render_template('home.html')

def func_register_page():
    return render_template('register.html')

def func_consult_page():
    return render_template('consult.html')

def func_register_user():
    id = request.form["id"]
    Nombre = request.form["Nombre"]
    Apellidos = request.form["Apellidos"]
    Telefono = request.form["Telefono"]
    Mascota = request.form["Mascota"]
    Nacimiento = request.form["Nacimiento"]
    Clase = request.form["Clase"]
    photo = request.files["photo"] #linea nueva agregada s3
    print(id, Nombre, Apellidos, Telefono, Mascota, Nacimiento, Clase) #lo muestra en consola
    confirm_user = add_user(id, Nombre, Apellidos, Telefono, Mascota, Nacimiento, Clase)
    if confirm_user:
        s3_resource = connection_s3() #linea nueva S3 agregada
        photo_path_local = save_file(photo)
        confirm_photo = upload_file(s3_resource, photo, photo_path_local, id)
        print(photo.filename)
        if confirm_photo:
            return "<h1>The user and the photo were saved succesfully</h1>"
        else:
            return "<h1>The user was saved without photo</h1>"
    else:
        return "<h1>Error: The user was not created</h1>"

    
def func_consult_user():
    obj_user = request.get_json()
    id = obj_user["id"]
    result_data = consult_user(id)
    if result_data != False and len(result_data) != 0:
        s3_resource = connection_s3()
        file_found = consult_file(s3_resource, id)
        if file_found != None:
            url_file = "https://bucket-vet.s3.amazonaws.com/"  + file_found
            print(url_file)
        else:
            url_file = ""
        response = {
            'status': "ok",
            'Nombre': result_data[0][1],
            'Apellidos': result_data[0][2],
            'Telefono': result_data[0][3],
            'Mascota': result_data[0][4],
            'Nacimiento': result_data[0][5],
            'Clase': result_data[0][6],
            'photo': url_file
            }
        
    
    else:
        response = {
             'status':"error"
            
        }
        
    return response