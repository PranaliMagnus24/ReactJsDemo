import { useActionState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UseActionState(){
    const handleSubmit=async (previousData,formData)=>{
        let email=formData.get('email');
        let password=formData.get('password');
        await new Promise(res=>setTimeout(res,2000))
        if(email && password){
            return{message: "Data submitted",email,password}
        }else{
            return{error: "Faield data",email,password}
        }

    }
    const [data,action,pending]=useActionState(handleSubmit,undefined)
    return(
        <>
        <h3 style={{color: "red"}}>using of useActionState</h3>
        <Card style={{width: "300px", margin: "50px"}}>
            <Card.Body>
         <Form action={action}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={pending}>
        Submit
      </Button>
      
    </Form>
    {
        data?.error && <span style={{color: "red"}}>{data?.error}</span>
      }
      {
        data?.message && <span style={{color: "green"}}>{data?.message}</span>
      }

      <h3>Email: {data?.email}</h3>
      <h3>Password: {data?.password}</h3>
    </Card.Body>
    </Card>
        </>
    )
}
export default UseActionState