import { Component } from "react";
import { Form, Button, ListGroup, Row, Col } from "react-bootstrap";

class Thoughts extends Component{
    constructor() {
        super();
        this.state = {
            ThoughtsList: [] // default empty array
        }
    }
    // addTodo: add a new task inside the state
    addThoughts = (event)=> {
        event.preventDefault(); // stop default behaviour
        //console.log(event.target.taskTitle.value);
        const data = event.target,
        newThoughts = {
            thoughtsTitle: data.thoughtsTitle.value,
            date: data.date.value,
            time: data.time.value
        }
        //console.log(newTodo);
        // updating the array but not re-rendering
        this.state.ThoughtsList.push(newThoughts);
        // updating state and re-render
        this.setState({
            ThoughtsList: this.state.ThoughtsList
        })
    }
    // delete todo from the array
    deleteThoughts = (event)=> {
        // splice(indexNumber, howmanyTodelete)
        this.state.ThoughtsList.splice(event.target.value, 1)
        this.setState({
            ThoughtsList: this.state.ThoughtsList
        })
    }
    render() {
        console.log(this.state.ThoughtsList)
        return(
            <>
            <Form onSubmit={this.addThoughts}>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicThoughtsTitle">
                            <Form.Label className="text-light">Thoughts Title:</Form.Label>
                            <Form.Control type="text" placeholder="What's on your mind?" name="thoughtsTitle"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicDate">
                            <Form.Label className="text-light">Date:</Form.Label>
                            <Form.Control type="date" placeholder="mm/dd/yyyy" name="date"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicTime">
                            <Form.Label className="text-light">Time:</Form.Label>
                            <Form.Control type="time" placeholder="Enter the Time" name="time"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" className="btn btn-success mt-3">
                    Add+
                </Button>
            </Form>

            <ListGroup>
                {
                    this.state.ThoughtsList.map((thoughts, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                 {thoughts.thoughtsTitle} {thoughts.time}, Date: {thoughts.date} 
                                 <Button type="button" variant="danger" onClick={this.deleteThoughts} value={index}>
                                     Delete
                                 </Button>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            </>
        )
    }
}

export default Thoughts;