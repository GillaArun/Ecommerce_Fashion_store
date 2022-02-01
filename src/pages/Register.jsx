import styled from "styled-components";

const Container=styled.div`

`;

export const Register = () => {
  return (
 <Container>
     <Wrapper>
         <Title>
             Create An Account
         </Title>
         <Form>
             <Input placeholder="name"/>
             <Input placeholder="last name"/>
             <Input placeholder="username"/>
             <Input placeholder="email"/>
             <Input placeholder="password"/>
             <Input placeholder="confirm password"/>
         </Form>
     </Wrapper>
  </Container>
  )
};

export default Register;