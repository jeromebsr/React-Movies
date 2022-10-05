import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';

function FormSearch() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <Container className='mb-5 offset-2'>
                <Row>
                    <Col>
                        <InputGroup size="lg">
                            <FormControl 
                                type="text"
                                aria-label="Large" 
                                placeholder='Search a movie...' 
                                onChange={(e) => setSearch(e.target.value)} 
                                aria-describedby="inputGroup-sizing-sm"
                                required
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <Button size='lg' href={"/search/"+search} variant="primary">Search 🔎</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FormSearch;