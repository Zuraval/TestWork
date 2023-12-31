/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './components/Example';

import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap'


export default class ContactForm extends Component {
	render() {
		return (
			<Container style={{ width: '500px' }}>
				<h1 className='text-center'>Contact Us</h1>
				<Form collapseOnSelect expand="md" bg="dark" variant="dark">
					<Form.Group>
						<Form.Label>Name</Form.Label>
      					<Form.Control type="text" placeholder='Enter name'/>
          			</Form.Group>
					<Form.Group controlId='formBasicEmail' className='mt-sm-2'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Group controlId='formBasicPhone' className='mt-sm-2'>
						<Form.Label>Phone</Form.Label>
      					<Form.Control class='phone' type="text" placeholder='+7(___)___-__-__'/>
          			</Form.Group>
					<Form.Group inline controlId='formBasicFile' className='mt-sm-2'>
						<Form.Label>File</Form.Label>
						<Form.Group>
							<input type='file'/>
						</Form.Group>
          			</Form.Group>
					<Button style={{ width: '100%' }} className='mt-sm-3' variant='primary' type='submit'>Submit</Button>
				</Form>
			</Container>
		)
	}
}