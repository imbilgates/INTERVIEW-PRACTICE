import { Alert, Button } from 'react-bootstrap';
import { useCountdownAlert } from '../hooks/useCountdownAlert';
import { useEffect } from 'react';

const CuzAlert = ({ showAlert, Close }) => {
    const { startCountdown, valueRef } = useCountdownAlert(6, 1000);

    useEffect(() => {
        if (showAlert) {
            startCountdown();
        }
    }, [showAlert]);

    return (
        <Alert show={showAlert} variant="success" onClose={Close} dismissible>
            <Alert.Heading>Well done!</Alert.Heading>
            <p>
                This alert will disappear in <strong ref={valueRef}>6</strong> seconds.
            </p>``
            <hr />
            <div className="d-flex justify-content-end">
                <Button onClick={Close} variant="outline-success">
                    Close me y'all!
                </Button>
            </div>
        </Alert>
    );
};

export default CuzAlert;
