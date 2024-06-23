import pymysql

db_host = 'database-vet.cngkqius2dwz.us-east-1.rds.amazonaws.com'
db_user = 'admin'
db_password = 'Tienda123'
db_database = 'db_nexovet'
db_table = 'users'

def connectionSQL():
    try:
        connection_sql = pymysql.connect(
            host = db_host,
            user = db_user,
            password = db_password,
            database = db_database
        )
        print("Sucessfull connection to the Database")
        return connection_sql
    except Exception as err:
        print("Error connecting to the database")
        print(err)
        return None
        
def add_user(id, Nombre, Apellidos, Telefono, Mascota, Nacimiento, Clase):
    instruction_sql = "INSERT INTO " + db_table + "(id, Nombre, Apellidos, Telefono, Mascota, Nacimiento, Clase) VALUES ("+id+", '"+Nombre+"', '"+Apellidos+"', '"+Telefono+"', '"+Mascota+"', '"+Nacimiento+"', '"+Clase+"')"
    connection_sql = connectionSQL()
    try:
        if connection_sql != None:
            cursor = connection_sql.cursor()
            cursor.execute(instruction_sql)
            connection_sql.commit()
            print("User added")
            return True
        else:
            print("Error connecting to the database")
            return False
    except Exception as err:
        print("Error creating the user")
        print(err)
        return False
    
def consult_user(id):
    instruction_sql = "SELECT * FROM users WHERE id = " + id
    connection_sql = connectionSQL()
    try:
        cursor = connection_sql.cursor()
        cursor.execute(instruction_sql)
        result_data = cursor.fetchall()
        return result_data
    except Exception as err:
        print("Error", err)
        return False