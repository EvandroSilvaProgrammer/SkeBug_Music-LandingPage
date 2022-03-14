/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect, useRef } from 'react';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  
  
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    console.log('entrei front');

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Sucesso!! 🎉 🥳');
  };


  return (

    < Flex as="form" sx={styles.form} onSubmit={subscribe} >
          <Label variant="styles.srOnly">
            Email
          </Label>
          <Input
            id="email-input"
            name="email"
            ref={inputEl}
            type="email"
            placeholder="Digite aqui o seu email"
          />
          <Button>{buttonLabel ?? 'Subscrever'}</Button>
          <p>
          {message ? message : `Obrigado`}
        </p>
    </Flex>

    
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
      color: '#fff',
    },
    button: {
      ml: [3],
    },
  },
};
