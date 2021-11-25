import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import wow from 'wowjs'
import { Card, Col, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillHeart } from 'react-icons/ai'

export default function MyCard({ title, description, img, url, github }) {
  new wow.WOW().init()

  return (
    <Col>
      <Card className='wow m-5  animate__animated animate__fadeInRight animate__slow text-center h-100'>
        <Card.Img variant='top' src={`img/${img}`} />
        <Card.Body className='d-flex flex-column  justify-content-around'>
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
          <div>
            <a href={url} rel='noreferrer' target='_blank'>
              <Button className='m-2 bg-dark'>
                Ver proyecto
                <AiFillHeart
                  style={{ fontSize: 30, cursor: 'pointer', margin: 5 }}
                />
              </Button>
            </a>
            <a href={github} rel='noreferrer' target='_blank'>
              <Button className='m-2 bg-dark'>
                Ver código
                <AiFillGithub
                  style={{ fontSize: 30, cursor: 'pointer', margin: 5 }}
                />
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
