import { Container, Row, Col, Button } from "react-bootstrap"
import {connect} from "react-redux"
import {Addjobtofavourites} from "../actions"


 
const mapDispatchToProps = (dispatch) => ({

    AddtoFavourites: (job) => {
        dispatch(Addjobtofavourites(job))
    }
})
// const mapDispatchToProps = (dispatch) => ({
//     removeFromCart: (index) => {
//       dispatch(removeItemFromCartAction(index))
//     }
//   })

const Details = ({ job, AddtoFavourites }) => {

    return (

        <Container>
            <Row>
                <Col md={10} style={{justifyContent:"center"}}>

                    <Button variant='warning' className='mt-5' 
                    onClick = {(e) => {AddtoFavourites(job)} }>Add to Favourites</Button>

                    <p className='mt-3' style={{color:"Blue", fontSize:'60px'}}>Company: {job.company_name}</p>
                    <p className='mt-3'>{job.title}</p>
                    <p className='mt-3'>{job.category}</p>
                    <p className='mt-3'>{job.candidate_required_location}</p>
                    <a href={job.url}><Button>Apply Here</Button></a>
                    <p className='mt-3' style={{color:"Blue", fontSize:'60px'}}>About Us</p>
                    <p className='mt-3'>{job.description}</p>


                </Col>
            </Row>
        </Container>
    )
}

export default connect(s=>s, mapDispatchToProps)(Details);
