import { Component } from '@angular/core';

import { db, collection, onSnapshot, query } from '../../firebase/index'

@Component({
    selector: 'app-toppers',
    templateUrl: './toppers.component.html',
    styleUrls: ['./toppers.component.css']
})
export class ToppersComponent {
    async ngOnInit () {
        this.getStudentsList()
    }

    displayedColumns = ['no', 'name']

    toppersList: any[] = []
    dataSource: any[] = []

    getStudentsList () {
        const studentsListQuery = query(collection(db, 'studentList'))

        let index = 0

        onSnapshot(studentsListQuery, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data()['score']<=90) {
                    return
                }

                this.toppersList.push({
                    id: doc.id,
                    index: ++index,
                    name: doc.data()['name'],
                    age: doc.data()['age'],
                    score: doc.data()['score'],
                })
            })

            this.dataSource = this.toppersList
        })
    }
}
