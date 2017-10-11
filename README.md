#1043 calculo de potencia instantánea#

<pre>node ./app nombre_fichero_datos.txt</pre>

##Fichero##

# numero de cores
cores=5
# potencia en watios base procesador (float)
wbase=10
# potencia en watios core inactivo (float)
wcoreinactivo=3
# constante de C por core (float)
coreC=1.07
# frecuencias trabajo core (float)
frecuencias=3,34;2,11;2,34
# voltajes trabajo core (float)
voltajes=1,23;1,012;0,98
#############################################
#duraccion en segundos aplicación secuencial (int)
tiempo_secuencial=123
#indice de paralelizacion (int)
grado_paralelizacion=4
# distribución de paralelizacion en % (float)
division_trabajo=12; 28;   60

