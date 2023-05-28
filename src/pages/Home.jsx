import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function Home() {

  const [blog, setBlog] = useState([]);




  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await data.json();
    setBlog(jsonData)
  }





  useEffect(() => {
    getData();
  }, [])




  return (
    <div>
      <Container>



        <Row>
          {
            blog.map((item, index) => {
              return (
                <Col key={index}>
                  <Card className='mt-3' style={{ width: '18rem', maxHeight: '100rem', height: '33rem' }}>
                  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwm9rviaDT3XEVlW02HKzKXycL6zIdOM3f-g&usqp=CAU" />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
                      <Button variant="primary">FOR MORE</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}