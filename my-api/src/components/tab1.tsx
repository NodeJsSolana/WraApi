import { Component} from 'react';





class Tab extends Component<any>{

    
    componentDidMount(){
        console.log(this.props.match.params.id)
    }

    render(){
        return(
            <div>
            </div>
        )
    }

}

export default Tab