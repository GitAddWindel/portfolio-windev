import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'react-bootstrap';

function Email() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const targetEmail = 'hecksyou889@gmail.com';

    if (email === targetEmail) {
      console.log(`Email submitted: ${email}`);
      console.log(`Message submitted: ${message}`);
      setToastMessage('success');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);

    } else {
      setToastMessage('error');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  return (
    <div className="container mt-5 position-relative">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        <h2 className="card-title text-center">Contact</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={'Email'}
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder='Message'
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className='bi bi-send'></i> Send Message
            </button>
          </form>
        </div>
      </div>
      <Toast show={showToast} onClose={handleToastClose} className="position-fixed top-0 end-0 p-3">
        <Toast.Body>
          {toastMessage === 'success' ? `Email successfully sent to ${email}!` : 'Error sending email.'}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Email;
