import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

const PaginationComponent = (props) => {
    const numberOfPages = Math.ceil(props.count/12); // 12 = number of objects in 1 page
    console.log(numberOfPages)
    let paginationItems = []
    for(let i = 1; i<=numberOfPages; i++)
    {
        if(i===props.activePageIndex)
        {
            paginationItems.push(<PaginationItem active>
            <PaginationLink onClick={()=>{props.handleClick(i)}}>{i}</PaginationLink>
            </PaginationItem>)
        }
        else
        {
            paginationItems.push(
            <PaginationItem>
            <PaginationLink onClick={()=>{props.handleClick(i)}}>{i}</PaginationLink>
            </PaginationItem>)
        }
    }
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="24" md="24">
                            <Pagination size="lg" aria-label="Page navigation example">
                                {paginationItems}
                            </Pagination>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default PaginationComponent;
