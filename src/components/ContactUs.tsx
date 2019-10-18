import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

export default function ContactUs() {
    return(
        <div className="main">
            <h1 className="main-heading">Contact Us</h1>
            <small>Questons not answers yet? We are here to help you.</small>
            <FormGroup className="main-form form">
                <Label for='exampleSelect'>HOW CAN WE HELP YOU TODAY?</Label>
                <Input type ='select' name ='select' id ='exampleSelect' className="form-input">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
        

        
            <footer className="main-footer footer">
                <p className="footer-text">
                    QUESTION NOT ANSWERED YET ?
                </p>
                <Button outline color="secondary" className="footer-btn">Click Me To Know More</Button>{' '}
            </footer>

        </div>
           
            
    )
}