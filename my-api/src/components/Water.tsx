import { IonContent,IonList, IonItem, IonLabel, IonListHeader, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItemSliding, IonItemOptions, IonItemOption, IonCardContent, IonButton, IonPage, IonGrid, IonRow, IonCol} from '@ionic/react';
import { Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./Water.css"
import tab1 from './tab1'



class Water extends Component{
    
    // API_URL = 'https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo?$top=30'

    state = {
        item: []
    }

    componentDidMount() {
        axios.get(`https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station?$orderby=StationNo`)
        .then(res => {
        console.log(res)
        const item = res.data;
        this.setState({ item });
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
                                            
                                                <IonButton expand="full" key={key}>
                                                    <Link to= {`/tab1/${post.StationNo}`}>
                                                        <h2>{post.StationName}</h2>
                                                    </Link>
                                                </IonButton>
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