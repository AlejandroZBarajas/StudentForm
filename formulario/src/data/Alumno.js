export class Alumno{
    #studentName
    #studentLastName
    #studentSemester
    #studentGroup
    #studentContactNumber
    #studentBirthDay

    constructor(){

    }

    setStudentName(name){
        this.#studentName=name
    }

    getStudenName(){
        return this.#studentName
    }

    setStudentLastName(lastname){
        this.#studentLastName=lastname
    }

    getStudentLastName(){
        return this.#studentLastName
    }

    setStudentSemester(semester){
        this.#studentSemester=semester
    }

    getStudentSemester(){
        return this.#studentSemester
    }

    setStudentGroup(group){
        this.#studentGroup=group
    }

    getStudentGroup(){
        return this.#studentGroup
    }

    setStudentContactNumber(number){
        this.#studentContactNumber=number
    }

    getStudentContactNumber(){
        return this.#studentContactNumber
    }

    setStudentBirthDay(bday){
        this.#studentBirthDay=bday
    }
    getStudentBirthDay(){
        return this.#studentBirthDay
    }
}