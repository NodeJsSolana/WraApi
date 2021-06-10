import { IonContent,IonList, IonItem, IonLabel, IonListHeader, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItemSliding, IonItemOptions, IonItemOption, IonCardContent, IonButton, IonPage, IonGrid, IonRow, IonCol} from '@ionic/react';
import React, { Component} from 'react';
import axios from 'axios';
import "./Water.css"


class Water extends Component{
    
    // API_URL = 'https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo?$top=30'

    state = {
        item: [],
        item2: [],
        item3: []
    }

    componentDidMount() {
        axios.get(`https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station?$orderby=StationNo`)
        .then(res => {
        console.log(res)
        const item = res.data;
        this.setState({ item });
        })

        axios.get(`https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Daily?$orderby=StationNo`)
        .then(res => {
        console.log(res)
        const item2 = res.data;
        this.setState({ item2 });
        })
        
    }

    render(){
        return(
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div>
                                <h5>水庫名稱</h5>
                                {
                                    this.state.item.map((post:any, key) =>{
                                        return(
                                            <li key={key}>{post.StationName}</li>
                                            )
                                        })
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div>
                                <h5>本日總進水量(萬立方公尺) </h5>
                                {
                                    this.state.item2.map((post:any, key) =>{
                                        return(
                                            <li key={key}>{post.InflowTotal}</li>
                                            )
                                        })
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div>
                                <h5>本日總出水量(萬立方公尺)</h5>
                                {
                                    this.state.item2.map((post:any, key) =>{
                                        return(
                                            <li key={key}>{post.OutflowTotal }</li>
                                            )
                                        })
                                }
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        )
    }

}

export default Water;

// {
//     this.state.item.map((post:any, key) =>{
//     return(
//         <li key={key}>{post.StationName}</li>
//         )
//     })
// }
