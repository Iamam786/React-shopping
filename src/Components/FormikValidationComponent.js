import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import  * as yup from 'yup';

export default function FormikValidationComponent()
{
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <Formik
             initialValues={
                 {
                     Name: '',
                     Email: '',
                     Age: 0,
                     City:''
                 }
             }
             
             validationSchema={
                yup.object({
                    Name: yup.string().min(4,"Name too Short").max(10, "Name too long").required("Name Required"),
                    Email: yup.string().required("Email Required").email("Invalid Email"),
                    Age: yup.number().required("Age Required")
                })
             }

             onSubmit={
                 values=> {
                     alert(JSON.stringify(values))
                 }
             }
             
            >
                {
                    props => (
                        <Form>
                        {
                               <div>
                                    <dl>
                                   <dt>User Name</dt>
                                   <dd> <Field type="text" name="Name" ></Field> </dd>
                                   <dd className="text-danger"> <ErrorMessage name="Name"></ErrorMessage> </dd>
                                   <dt>Email</dt>
                                   <dd>
                                       <Field type="text" name="Email" ></Field>
                                   </dd>
                                   <dd className="text-danger">
                                       <ErrorMessage name="Email" ></ErrorMessage>
                                   </dd>
                                   <dt>Age</dt>
                                   <dd>
                                       <Field type="text" name="Age"></Field>
                                   </dd>
                                   <dd className="text-danger">
                                       <ErrorMessage name="Age"></ErrorMessage>
                                   </dd>
                                   <dt>Select City</dt>
                                   <dd>
                                       <Field as="select" name="City">
                                           <option>Delhi</option>
                                           <option>Hyd</option>
                                       </Field>
                                   </dd>
                               </dl>
                               <button disabled={(props.isValid==true)?false:true} >Submit</button>
                             
                               </div>
                        }
                     </Form>
   
                    )
                }

            </Formik>
        </div>
    )
}