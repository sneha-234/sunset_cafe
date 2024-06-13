
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <h1 className="text-4xl text-center mt-12 mb-0">Register</h1>
      <div className="flex justify-center items-center h-screen mt-0">
    
        <div className="border-black border-2 p-6 w-1/2">
          <h2 className="text-l mb-4 text-center" style={{ color: "#D16E43" }}>Signup now and get full access to our app.</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-96 ml-20">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <Field type="text" name="firstName" placeholder="First Name" className="w-full bg-gray-200 p-2 border border-gray-300 rounded-xl" />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="w-1/2 ml-2">
                    <Field type="text" name="lastName" placeholder="Last Name" className="w-full bg-gray-200 p-2 border border-gray-300 rounded-xl" />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
                <Field type="email" name="email" placeholder="Email" className="w-full bg-gray-200 p-2 border border-gray-300 mb-4 rounded-xl" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                <Field type="password" name="password" placeholder="Password" className="w-full bg-gray-200 p-2 border border-gray-300 mb-4 rounded-xl" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full bg-gray-200 p-2 border border-gray-300 mb-4 rounded-xl" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                <div className="flex justify-center">
                  <button type="submit" disabled={isSubmitting} className=" text-white px-6 py-3 rounded-xl disabled:bg-gray-500 disabled:cursor-not-allowed" style={{background:"#D16E43"}}>
                    Submit
                  </button>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <p className="mr-2">Already have an account?</p>
                  <a href="/login" className="bg-gray-500 text-white px-4 py-2 rounded-xl"style={{background:"#D16E43"}} >
                    Login
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
