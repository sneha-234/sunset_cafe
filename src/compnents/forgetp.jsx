
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const ForgotPasswordForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex items-center justify-between w-3/4 px-8">
        <div className="w-1/2 pr-8">
          <img src="https://s3-alpha-sig.figma.com/img/ba62/ba36/ea0ebd41066a590387ac65d984fb6726?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=avvVRcsSJa9OBlMK707JbcqqFJruLKaq0LAGqijn~gfLioWavC0wSN7c0s5xzGYPz7w2U-7TK7rtQln4Ua8NDelrt2idDEVnA4zb7c40DjD06oRZHM1UFOHqXCoL5OOs5m20CisV-0YtbiY33wd1KDWZWtl2cQYu3JgC-Gi5a1rBr13ch4VjGlQe1DFaonlSMRaTOI3P8YUgox8CwfB1EUuN6Ho50y59dcPHfmUiw-mot70B6KXMXvfE2uSOJLjHC~e4FEn6gJpvRw44DeQEf0G10FzmfMFiBzPvXGqUJou4LTje~lcW6PstoZRBFcPf~W77Xka3dS2Iqqv-LO4~bg__" alt="Forgot Password" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="mb-8 text-3xl font-bold">Forgot Password ?</h1>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="border border-black p-8 rounded-lg bg-gray-100 shadow-md">
                <div className="mb-4">
                <h2 className="text-l mb-4 text-center" style={{ color: "#D16E43" }}>Enter the Email address associated with your <br/> account to get a code.</h2>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className={`w-full p-2 border rounded bg-gray-200 ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage component="div" name="email" className="text-red-500 text-sm mt-1" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full text-white p-2 rounded" style={{ background: "#D16E43" }}>
                  {isSubmitting ? 'Sending...' : 'Send Code'}
                </button>
                <div className="mt-4 text-center">
                  <Link to="/login" className="text-black  font-bold">Back to Login</Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

