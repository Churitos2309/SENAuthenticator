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
    

class Programa(models.Model):
    nombre_programa=models.CharField(max_length=100, db_column='nombre_programa')
    tipo_formacion_programa=models.CharField(max_length=30,choices=tipo_formacion, db_column='tipo_formacion_programa')

    def __str__(self) -> str:
        return self.nombre_programa
    

class Ficha(models.Model):
    numero_ficha=models.CharField(max_length=20, unique=True, db_column='numero_ficha')
    aprendices_matriculados_ficha=models.IntegerField(db_column='aprendices_matriculados_ficha')
    aprendices_actuales_ficha=models.IntegerField(db_column='aprendices_actuales_ficha')
    jornada_ficha=models.CharField(max_length=50, choices=jornada_ficha, db_column='jornada_ficha')
    programa_ficha=models.ForeignKey(Programa, on_delete=models.PROTECT, null=True, db_column='programa_ficha')

    def __str__(self) -> str:
        return self.numero_ficha
    

class Usuario(models.Model):
    nombre_usuario=models.CharField(max_length=50, db_column='nombre_usuario')
    apellidos_usuario=models.CharField(max_length=50, db_column='apellidos_usuario')
    genero_usuario=models.CharField(max_length=20, choices=genero, db_column='genero_usuario')  
    correo_institucional_usuario=models.CharField(max_length=50, db_column='correo_institucional_usuario') 
    correo_personal_usuario=models.CharField(max_length=50, db_column='correo_personal_usuario') 
    tipo_documento_usuario=models.CharField(max_length=50, choices=tipo_documento_usuario, default='', db_column='tipo_documento_usuario')
    numero_documento_usuario=models.CharField(max_length=20, unique=True, default='', db_column='numero_documento_usuario')
    contrasenia_usuario=models.CharField(max_length=30, db_column='contrasenia_usuario')
    rol_usuario = models.CharField(max_length=13, choices=tipo_rol, db_column='rol_usuario') 
    ficha_usuario=models.ForeignKey(Ficha,on_delete=models.PROTECT, null=True, db_column='ficha_usuario')

    def __str__(self) -> str:
        return f'{self.nombre_usuario} {self.apellidos_usuario}'
    

class RegistroFacial(models.Model):
    datos_biometricos_registro=models.ImageField(upload_to=f'datos_biometricos_registro', db_column='datos_biometricos_registro')
    fecha_hora_registro=models.DateTimeField(auto_now_add=True, db_column='fecha_hora_registro') 
    usuario_registro_facial=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True, db_column='usuario_registro_facial')


class Objeto(models.Model):
    marca_objeto=models.CharField(max_length=20, db_column='marca_objeto')
    modelo_objeto=models.CharField(max_length=20, db_column='modelo_objeto')
    descripcion_objeto=models.TextField(max_length=1000, db_column='descripcion_objeto')
    foto_objeto=models.ImageField(upload_to=f"foto_objeto",blank=True, db_column='foto_objeto')
    usuario_objeto=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True, db_column='usuario_objeto')

    def __str__(self) -> str:
        return f'{self.marca_objeto} {self.modelo_objeto}'


class ContactoEmergencia(models.Model):
    nombre_cntEmerg=models.CharField(max_length=50, db_column='nombre_cntEmerg')
    apellido_cntEmerg=models.CharField(max_length=50, db_column='apellido_cntEmerg')
    genero_cntEmerg=models.CharField(max_length=20, choices=genero, db_column='genero_cntEmerg')  
    celular_cntEmerg=models.CharField(max_length=12, db_column='celular_cntEmerg')
    tipo_documento_cntEmerg=models.CharField(max_length=50, choices=tipo_documento_contacto_emergencia, default='', db_column='tipo_documento_cntEmerg')
    numero_documento_cntEmerg=models.CharField(max_length=20, unique=True, default='', db_column='numero_documento_cntEmerg')
    parentezco_cntEmerg=models.CharField(max_length=30, db_column='parentezco_cntEmerg')
    usuario_cntEmerg=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True, db_column='usuario_cntEmerg')

    def __str__(self) -> str:
        return f'{self.nombre_cntEmerg} {self.apellido_cntEmerg}'


class Ingreso(models.Model):
    datos_biometricos_ingreso=models.ImageField(upload_to=f'datos_biometricos_ingreso', db_column='datos_biometricos_ingreso')    
    fecha_hora_ingreso=models.DateTimeField(auto_now_add=True, db_column='fecha_hora_ingreso')
    usuario_ingreso=models.ForeignKey(Usuario, on_delete=models.PROTECT, null=True, db_column='usuario_ingreso')
