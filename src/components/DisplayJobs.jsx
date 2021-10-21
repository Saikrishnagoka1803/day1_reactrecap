import { useState } from "react";
import {  Row,  ListGroup, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import {connect} from "react-redux"



const Displayjobs = ({jobs, setjobdetail}) => {

    

    return (
        
        jobs.map((job) =>  {
            return (
                <Container className='mt-3'>
            <Row className='mt-2'>
            <ListGroup horizontal>
                <ListGroup.Item style={{"color": "white", "backgroundColor": "blue"}}> Title: {job.title}</ListGroup.Item>
                <ListGroup.Item>{job.category}</ListGroup.Item>
                <ListGroup.Item style={{"color": "white", "backgroundColor": "green"}}> Company: {job.company_name}</ListGroup.Item>
                <ListGroup.Item >{job.job_type}</ListGroup.Item>
                <ListGroup.Item style={{"color": "white", "backgroundColor": "Grey"}}>Location: {job.candidate_required_location}</ListGroup.Item>
            </ListGroup>
                <Link to = "/details">
            <Button className='ml-2' size="sm" variant='dark'
            onClick = {e => setjobdetail(job)}>View Details</Button>
                </Link>
        </Row>
        </Container>
        )
        }
        )
        
    )
}

export default Displayjobs;