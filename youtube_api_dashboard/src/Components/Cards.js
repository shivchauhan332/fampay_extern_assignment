import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';


const Cards = ({data}) => {
    console.log(data)
    return (
        <div>
            <Row>
                {data && data.map((card)=>(
                    <Col xs="8" md="3">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardImg top width="100%" src={card.thumbnail_url_h} />
                        <CardBody>
                            <CardTitle>{card.video_title}</CardTitle>
                            <CardSubtitle>{card.channel_title}</CardSubtitle>
                            <CardText>{card.description}</CardText>
                            <Button className="btn btn-blue mr-2"><a href={`https://www.youtube.com/watch?v=${card.video_id}`}>Open</a></Button>
                            <CardFooter>{card.publishing_datetime}</CardFooter>
                        </CardBody>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    );
}

export default Cards;


