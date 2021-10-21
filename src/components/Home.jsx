import { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Displayjobs from "./DisplayJobs";

const Home = ({setjobdetail}) => {

    const [query, setquery] = useState('writing')
    const [jobs, setjobs] = useState([])
    const [queryvar, setqueryvar] = useState('search')
    const [mediator, setmediator] = useState('')

    //const url = `https://strive-jobs-api.herokuapp.com/jobs?${queryvar}=${query}`

    const fetchfunc = async () => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?${queryvar}=${query}`)

            if (response.ok) {
                const convertedtojson = await response.json()
                setjobs(convertedtojson.data.slice(0, 15))

            }
        } catch (error) {
            console.log(error)
        }
    }

    const controlfunc = (e) => {
        e.preventDefault()
        setmediator(e.target.value)
    }

    const changestate = () => {
        setquery(mediator)
    }

    useEffect(() => {
        fetchfunc()
        console.log(jobs)
    }, [])

    useEffect(() => {
        fetchfunc()
        console.log(jobs)
    }, [query])

    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Choose search types</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={queryvar}
                                    onChange={(e) => {
                                        setqueryvar(e.target.value)
                                    }}
                                >
                                    <option>search</option>
                                    <option>title</option>
                                    <option>category</option>
                                    <option>company</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>type search string</Form.Label>
                                <Form.Control
                                    onChange={(e) => { controlfunc(e) }}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Button onClick={(e) => changestate()}> Click </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {
                jobs && <Displayjobs jobs={jobs} setjobdetail={setjobdetail}/>
            }
        </>
    )
}

export default Home;