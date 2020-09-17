import React from 'react';
import covid from '../assets/images/covid.jpg';
import interior from '../assets/images/interior.jpg';
import ecommerce from '../assets/images/ecommerce.jpg';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id: 0,
                    title: 'Covid Tracker',
                    subTitle: 'Covid tracker to track the positive cases, deaths and recoveries worldwise',
                    imgSrc: covid,
                    link: 'https://github.com/DivyanshiSingh/CovidTracker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Interior Design',
                    subTitle: 'Android app for interior designing',
                    imgSrc: interior,
                    link: 'https://github.com/DivyanshiSingh/Interior_Design',
                    selected: false
                },
                {
                    id: 2,
                    title: 'E-Commerce',
                    subTitle: 'Android app for selling goods',
                    imgSrc: ecommerce,
                    link: 'https://github.com/DivyanshiSingh/e-commerce',
                    selected: false
                },
            ]

        }
    }
    handleCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}> 
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel
