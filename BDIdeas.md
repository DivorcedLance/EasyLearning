# Entidades

## Institución
fullName
displayName
logoLink
mainColor
secundaryColor

## Alumno
dni
email
password
lastname
firstname
sex
age
grade
section
profilePictureLink

tutorId: Calculado a partir de grade+section


## Docente
dni
email
password
lastname
firstname
sex
age
codDocente
tutorOfGrade
tutorOfSection
profilePictureLink

## Course
courseId
courseName

## TestQuestion:
	statement:
	options: [5]
	correctOption: 

## Test:
	testId
	week
	duration
	weeklyQuestions [5]

# Manejo de Información a grandes rasgos

## Material:
	course
	grade

## Alumnos:
	course
	grade
	section
