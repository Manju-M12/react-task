import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsInfoCircle, BsCheckCircle, BsExclamationTriangle, BsXCircle } from 'react-icons/bs'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export function Task1() {
  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="primary" size="md">
          <BsInfoCircle className="me-2" /> 
          Information
        </Button>
        <Button variant="success" size="md">
          <BsCheckCircle className="me-2" />
          Success Message
        </Button>
        <Button variant="warning" size="md">
          <BsExclamationTriangle className="me-2" />
          Warning Message
        </Button>
        <Button variant="danger" size="md">
          <BsXCircle className="me-2" />
          Error Message
        </Button>
      </div>
    </>
  );
}
