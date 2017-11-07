import { Component, OnInit } from '@angular/core';
import { Ihome } from './ihome';

@Component({
    selector: 'app-homes',
    templateUrl: './home-list.component.html',
    styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {
    pageTitle: string = 'Homes for Sale';
    imageWidth: number = 200;
    imageMargin: number = 1 ;
    listFilter: string='cart';
    showImage: boolean= true;
    
    homes: Ihome [] = [
        {
            'homeId':2,
            'homeMLS': 'ABCD-123',
            'homePrice': 599000,
            'homeAddress': '5758 Las Virgense Rd, Calabasa, CAs',
            'homeBed': 4,
            'homeBath':2,
            'imageUrl': 'http://www.lmrblaw.com/wp-content/uploads/2015/01/selling-your-home-cedar-shingle-home.jpg'
        },
        {
            'homeId':9,
            'homeMLS': 'ZXCV-123',
            'homePrice':1199000,
            'homeAddress': '75758 Santa Clause Street, North Pole, CA',
            'homeBed': 14,
            'homeBath':5,
            'imageUrl': 'https://www.alairhomes.com/wp-content/uploads/sites/28/2015/02/alair-homes-custom-home-builders-canada.jpg'
        },
        {
            'homeId':10,
            'homeMLS': 'JUYH-123',
            'homePrice': 499000,
            'homeAddress': '28558 Michael Jackson Rd, Encino, CA',
            'homeBed': 4,
            'homeBath':2,
            'imageUrl': 'https://www.alairhomes.com/wp-content/uploads/sites/28/2015/02/alair-homes-custom-home-builders-canada.jpg'
        },
        {
            'homeId':4,
            'homeMLS': 'EFGH-123',
            'homePrice': 359000,
            'homeAddress': '5676 Shoup Ave, West Hills, CA',
            'homeBed': 3,
            'homeBath':2,
            'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAfd-sAUGOMpa0xApfJuXGxVjBVbeUCvfmR6owMIRt9cE7515'
        },
        {
            'homeId':8,
            'homeMLS': 'IJKL-123',
            'homePrice': 959000,
            'homeAddress': '15676 Chales Ave, Prime Hills, CA',
            'homeBed': 6,
            'homeBath':3,
            'imageUrl': 'https://brightcove.hs.llnwd.net/e1/pd/1078702682/1078702682_5507929451001_5507906224001-vs.jpg?pubId=1078702682'
        },
        {
            'homeId':8,
            'homeMLS': 'MNOP-4599',
            'homePrice': 745000,
            'homeAddress': '45836 Kings Street, Kingston, CA',
            'homeBed': 4,
            'homeBath':3,
            'imageUrl': 'http://khudothivinhomestimescity.com/wp-content/uploads/2017/04/Smart-Home.jpg'
        }
    ];

    toggleImage():void{
        
        this.showImage=!this.showImage;
    }

    ngOnInit(): void {
        console.log ('In OnInit');
    }
    
}