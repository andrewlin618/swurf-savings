import React from 'react';
import Card from 'react-bootstrap/Card'
import './style.css'

export default function ShiftCard(props) {
    return (
        <Card className="mb-5 card-shift mx-auto" bsClass="card-shift">
            <Card.Body>
                <Card.Title>{props.shiftEnd - props.shiftStart} hours</Card.Title>
                <Card.Title>${props.earnings} earned</Card.Title>
                <Card.Text>
                    
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
