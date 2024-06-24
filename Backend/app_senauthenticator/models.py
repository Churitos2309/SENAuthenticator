from djongo import models


tipo_documento_usuario=[
    ('Tarjeta de Identidad','Tarjeta de Identidad'),
    ('Cedula de ciudadania','Cedula de ciudadania'),
    ('Cedula de extranjeria','Cedula de extranjeria'),
]

tipo_documento_contacto_emergencia=[
    ('Cedula de ciudadania','Cedula de ciudadania'),
    ('Cedula de extranjeria','Cedula de extranjeria'),
]

tipo_rol=[
    ('Administrador','Administrador'),
    ('Guardia','Guardia'),
    ('Instructor','Instructor'),
    ('Aprendiz','Aprendiz'),
]

jornada_ficha=[
    ('Mañana','Mañana'),
    ('Tarde','Tarde'),
    ('Noche','Noche'),
]

tipo_formacion=[
    ('Tecnico','Tecnico'),
    ('Tecnologo','Tecnologo'),
]

genero = [
    ('Masculino', 'Masculino'),
    ('Femenino', 'Femenino'),
]
    

class RegistroFacial(models.Model):
    datos_biometricos_registro=models.ImageField(upload_to=f'datos_biometricos_registro')
    fecha_hora_registro=models.DateTimeField(auto_now_add=True)    
    

class Programa(models.Model):
    nombre_programa=models.CharField(max_length=100)
    tipo_formacion_programa=models.CharField(max_length=30,choices=tipo_formacion)

    def __str__(self) -> str:
        return self.nombre_programa
    

class Ficha(models.Model):
    numero_ficha=models.CharField(max_length=20,unique=True)
    aprendices_matriculados_ficha=models.IntegerField()
    aprendices_actuales_ficha=models.IntegerField()
    jornada_ficha=models.CharField(max_length=50, choices=jornada_ficha)
    programa_ficha=models.ForeignKey(Programa, on_delete=models.PROTECT, null=True)

    def __str__(self) -> str:
        return self.numero_ficha
    

class Usuario(models.Model):
    nombre_usuario=models.CharField(max_length=50)
    apellidos_usuario=models.CharField(max_length=50)
    genero_usuario=models.CharField(max_length=20, choices=genero)  
    correo_institucional_usuario=models.CharField(max_length=50) 
    correo_personal_usuario=models.CharField(max_length=50) 
    tipo_documento_usuario=models.CharField(max_length=50, choices=tipo_documento_usuario, default='')
    numero_documento_usuario=models.CharField(max_length=20, unique=True, default='')
    contrasenia_usuario=models.CharField(max_length=30)
    rol_usuario = models.CharField(max_length=13, choices=tipo_rol) 
    registro_facial_usuario=models.ForeignKey(RegistroFacial, on_delete=models.PROTECT, null=True)
    ficha_usuario=models.ForeignKey(Ficha,on_delete=models.PROTECT, null=True)

    def __str__(self) -> str:
        return f'{self.nombre_usuario} {self.apellidos_usuario}'


class Objeto(models.Model):
    marca_objeto=models.CharField(max_length=20)
    modelo_objeto=models.CharField(max_length=20)
    descripcion_objeto=models.TextField(max_length=1000)
    foto_objeto=models.ImageField(upload_to=f"foto_objeto",blank=True)
    usuario_objeto=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True)

    def __str__(self) -> str:
        return f'{self.marca_objeto} {self.modelo_objeto}'


class ContactoEmergencia(models.Model):
    nombre_cntEmerg=models.CharField(max_length=50)
    apellido_cntEmerg=models.CharField(max_length=50)
    genero_cntEmerg=models.CharField(max_length=20, choices=genero)  
    celular_cntEmerg=models.CharField(max_length=12)
    tipo_documento_cntEmerg=models.CharField(max_length=50, choices=tipo_documento_contacto_emergencia, default='')
    numero_documento_cntEmerg=models.CharField(max_length=20, unique=True, default='')
    parentezco_cntEmerg=models.CharField(max_length=30)
    usuario_cntEmerg=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True)

    def __str__(self) -> str:
        return f'{self.nombre_cntEmerg} {self.apellido_cntEmerg}'


class Ingreso(models.Model):
    datos_biometricos_ingreso=models.ImageField(upload_to=f'datos_biometricos_ingreso')    
    fecha_hora_ingreso=models.DateTimeField(auto_now_add=True)
    usuario_ingreso=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True)