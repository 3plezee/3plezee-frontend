import { styled, Button } from '@nextui-org/react';

const Button2=(params) => {
    const MyStyledButton = styled(Button, {
      boxShadow: '$md', // shadows.md
      variants: {
        size: {
          mysize: {
            height: '$12', // space[12]
            borderRadius: '$xs', // radii.xs
            fontSize:'large'
          }
        },
        color: {
          mycolor: {
            background: '$linkColor', // colors.green800
            color: 'white', 
            
            border: '$space$1 solid transparent',
            '&:hover': {
              background: '#c5ac93',
              
              border:'$linkColor solid 2px'
            },
            '&:active': {
              background: '$linkColor',
            },
            '&:focus': {
              borderColor: '#c5ac93',
            },
          }
        }
      }
    });
    return (
        <MyStyledButton 
          type={params.type ?? 'button'}
          // disabled= {params.disabled ?? false}
          auto 
          css={{height:params.height ?? "40px", width: params.width ?? "30%", fontSize: params.fontSize ?? "auto"}}
          size="mysize"
          color="mycolor">
            {params.text}
        </MyStyledButton>
      ) 
    }

export default Button2;