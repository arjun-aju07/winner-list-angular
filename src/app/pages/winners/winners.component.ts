import { Component } from '@angular/core';

import { db, collection, onSnapshot, query } from '../../firebase/index'

@Component({
    selector: 'app-winners',
    templateUrl: './winners.component.html',
    styleUrls: ['./winners.component.css']
})
export class WinnersComponent {
    async ngOnInit () {
        this.getWinnersList()
    }

    displayedColumns = ['no', 'name', 'score']

    winnerList: any[] = []
    dataSource: any[] = []

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

            this.dataSource = this.winnerList
        })
    }
}
