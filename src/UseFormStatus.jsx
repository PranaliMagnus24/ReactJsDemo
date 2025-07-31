import { useFormStatus } from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
function UseFormStatus(){
    const useForm=async()=>{
        await new Promise(res=>setTimeout(res,2000));
        console.log("submit")

    }
    // custome form for useformstatus
    function CustomForm(){
        const {pending}= useFormStatus()
        return(
            <div>
                <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" id="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={pending}>
            {pending? 'Submitting...':'Submit'}
          </Button>

            </div>
        )
    }
    return(
        <>
        <h3>Use of useFormStatus</h3>
        <Card style={{ width: "300px", padding: "40px", margin: "60px" }}>
        <Form action={useForm}>
            <CustomForm/>
          
        </Form>
      </Card>
        </>
    )
}
export default UseFormStatus