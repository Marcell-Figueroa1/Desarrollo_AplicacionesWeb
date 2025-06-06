"""
Ejercicio 1

Crea una función llamada mostrar_componentes que reciba una cantidad
variable de argumentos y los imprima como una lista de componentes de
una computadora.

"""

def mostrar_componentes(*datos): # Definir una función que reciba como parametro la función *args 
	
	for componente in datos:
		print(f"-> {componente}\n")
        
print("==== Ejercicio 1 ====")

mostrar_componentes("GPU", "CPU", "RAM", "ROM")


"""
Ejercicio 2

Crea una función llamada detalles_componente que reciba un nombre de
componente y luego detalles variables como marca, capacidad, velocidad,
etc., usando **kwargs.

"""

def detalles_componente(**datos):
    
	for clave, valor in datos.items():
		print(f"{clave}: {valor}")

print("==== Ejercicio 2 ====")

detalles_componente(Nombre_componente = "RAM", Marca = "Acer", capacidad = "8gb", velocidad = "2.4hz") 


"""
Ejercicio 3

Crea una función llamada ensamblar_computadora que reciba:
-> Una lista variable de nombres de partes (*args).
-> Además de detalles generales del tecnico(**kwargs), como técnico, fecha,
tipo de gabinete, etc.

"""

def ensablar_computadora (*nombres, **detalles):
    
    print("==== Lista de partes ====")
    for nombre in nombres:
        print(f"- {nombre}")
        
    print("==== Detalles ====")
    for clave, valor in detalles.items():
        print(f"{clave}: {valor}")

ensablar_computadora("CPU", "RAM", "GPU", Tecnico = "Marcell", Fecha = "05/06/2025")