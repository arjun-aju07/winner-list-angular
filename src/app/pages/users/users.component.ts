import { Component, ViewChild } from '@angular/core';

import { db, collection, onSnapshot, addDoc, query } from '../../firebase/index'

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {
    @ViewChild('confirmationModal') modal: any

    async ngOnInit () {
        this.getStudentsList()
        this.getWinnersList()
    }

    displayedColumns = ['no', 'name', 'score', 'addToWinner']

    studentList: any[] = []
    winnerList: any[] = []
    dataSource: any[] = []

    async addToWinner(student: any) {
        const data = {
            name: student.name,
            age: student.age,
            score: student.score
        }

        if (this.winnerList.find((item) => item.name.toLowerCase() === data.name.toLowerCase())) {
            return
        }

        await addDoc(collection(db, 'winners'), data)
    }

    getStudentsList () {
        const studentsListQuery = query(collection(db, 'studentList'))

        let index = 0

        onSnapshot(studentsListQuery, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.studentList.push({
                    id: doc.id,
                    index: ++index,
                    name: doc.data()['name'],
                    age: doc.data()['age'],
                    score: doc.data()['score'],
                })
            })

            this.dataSource = this.studentList
        })
    }

    getWinnersList () {
        const studentsListQuery = query(collection(db, 'winners'))

        let index = 0

        onSnapshot(studentsListQuery, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.winnerList.push({
                    id: doc.id,
                    index: ++index,
                    name: doc.data()['name'],
                    age: doc.data()['age'],
                    score: doc.data()['score'],
                })
            })
        })
    }

    applyScoreFilter(event: Event) {
        const filterValue = parseInt((event.target as HTMLInputElement).value)

        if(!filterValue) {
            this.dataSource = this.studentList
            return
        }

        this.dataSource = this.studentList.filter((item) => item.score === filterValue)
    }
}
