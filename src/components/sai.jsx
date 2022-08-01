import { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Displayjobs from "./DisplayJobs";
import { connect } from "react-redux";
import { goingtogetjobsfromaction } from "../actions";

const read = state => ({
    jobs: state.jobs.job
})

const write = (dispatch) => ({

    getjobs: (queryvar, queryvartwo) => {
        dispatch(goingtogetjobsfromaction(queryvar, queryvartwo))
    },
    // setqueries: (queryvar, queryvartwo) => {
    //     dispatch(settingqueriesinactions(queryvar, queryvartwo))
    // }
})

const Home = ({ jobs, getjobs, setqueries, setjobdetail }) => {

    const [query, setquery] = useState('writing')
    // const [jobs, setjobs] = useState([])
    const [queryvar, setqueryvar] = useState('search')
    const [queryvartwo, setqueryvartwo] = useState('')


    useEffect(() => {
        getjobs(queryvar, queryvartwo)

    }, [])

    // useEffect(() => {
    //     fetchfunc()
    //     console.log(jobs)
    // }, [query])

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
                                    value={query}
                                    onChange={e => setquery(e.target.value)}
                                    onKeyDown={e => {
                                        if (e.key === 'k') {
                                            setqueryvartwo(query)
                                            setqueries(queryvar, queryvartwo)
                                        }
                                    }}
                                >
                                </Form.Control>
                            </Form.Group>

                        </Form>
                    </Col>
                </Row>
            </Container>
            {
                jobs && <Displayjobs jobs={jobs} setjobdetail={setjobdetail} />
            }
        </>
    )
}

export default connect(read, write)(Home);