import { IonContent,IonList, IonItem, IonLabel, IonListHeader} from '@ionic/react';
import React, { Component} from 'react';
import axios from 'axios';


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

        

        return(
            <IonContent>
                <IonListHeader>
                    <IonLabel><h1>測站名稱</h1></IonLabel>
                </IonListHeader>
                
                <IonList>
                    <IonItem>
                        <IonLabel>
                            {
                                this.state.persons.map((post:any, key) =>{
                                return(
                                    <li key={key}>{post.StationName}</li>
                                )
                                })
                            }
                        </IonLabel>
                    </IonItem>
                </IonList>    
            </IonContent>
        )
    }

}

export default Water;
