from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/") # el '/' significa ruta raiz
def home():
    
    return render_template('home.html')
    
@app.route("/register_page") 
def register_page():
    return render_template('register.html')

@app.route("/consult_page") 
def consult_page():
    return render_template('consult.html')
    
    
@app.route("/register_user", methods = ["post"]) #el metodo corresponde a los usados en html son , get post, etc
def register_user():
    Nombre = request.form["Nombre"]
    Apellidos = request.form["Apellidos"]
    Telefono = request.form["Telefono"]
    Mascota = request.form["Mascota"]
    Nacimiento = request.form["Nacimiento"]
    Clase = request.form["Clase"]
    print(Nombre, Apellidos, Telefono, Mascota, Nacimiento, Clase)
    return "Ok"
        

if __name__ =="__main__":
    host = "127.0.0.1"
    port = "8080"
    app.run(host, port) #este es un metodo de flask para correr un server