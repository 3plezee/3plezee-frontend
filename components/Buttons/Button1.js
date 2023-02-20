import React from 'react';
import { Button } from '@nextui-org/react';

const Button1 = (params) => {
//   const handleConfetti = () => {
//     confetti({...});
//   };

  return (
    <Button
      auto
      rounded
      ripple={true}
      size="md"
      
    //   onClick={handleConfetti}
      css={{
        background: '#b59677',
        fontWeight: '$semibold',
        boxShadow: '$md',
        position: 'relative',
        overflow: 'visible',
        color: 'white',
        px: '$14',
        py: '$10',
        '&:before':{
          background: '#b59677',
        },
        
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '40%',
          height: '40%',
          background: '#b59677',
          opacity: 1,
          borderRadius: '$pill',
          transition: 'all 0.4s ease',
          color: '$White'
        },
        '&:hover': {
          transform: 'translateY(-5px)',
          color: 'White',
          '&:after': {
            transform: 'scaleX(1.5) scaleY(1.6)',
            opacity: 0, 
          }
        },
        '&:active': {
          transform: 'translateY(-2px)',
        }
      }}
    >
      {params.text}
    </Button>
  );
};

export default Button1;