import { Card, Container, Row, Col, Button } from "react-bootstrap";
import {connect} from "react-redux"
import {removejobfromfavourites} from "../actions"

const read = state => ({
    favarray: state.favourites.Fav
})

const write = (dispatch) => ({
    removefromFavourites: (job) => {
        dispatch(removejobfromfavourites(job))
    }
})

const Favourites = ({favarray, removefromFavourites }) => {

    return (
        <Container>
            {
            favarray.map(job => <Row className='mt-5 ml-5'>
                <Card style={{ width: '18rem' }} shadow>
                    <Card.Body>
                        <Card.Title>{job.company_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                        <Card.Text>
                        {job.title}
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>

                    <Button variant='danger' onClick={() => removefromFavourites(job)}>Remove</Button>

                </Card>
            </Row>  )
            }
        </Container>
    )
}

export default connect(read, write)(Favourites);