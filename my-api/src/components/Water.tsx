import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,  IonCardContent, IonItem} from '@ionic/react';
import React,{useState,useEffect, Component} from 'react';
import axios from 'axios';
import { person, personSharp } from 'ionicons/icons';

class Water extends Component{
    
    // API_URL = 'https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo?$top=30'

    state = {
        persons: [],
    }

    componentDidMount() {
        axios.get(`https://fhy.wra.gov.tw/WraApi/v1/Water/Station`)
        .then(res => {
        console.log(res)
        const persons = res.data;
        this.setState({ persons });
        })
    }

    render(){

        const { persons } = this.state;

        return(
            <IonContent>
                

                
            </IonContent>
        )
    }

}

export default Water;

//https://www.techiediaries.com/react-ionic-axios-tutorial/