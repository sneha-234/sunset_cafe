
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center w-3/4 px-8">
        <h1 className="mb-8 text-3xl font-bold">Login</h1>
        <div className="flex items-center">
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
              username: Yup.string().required('Required'),
              password: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="w-3/5 border p-8 rounded-lg bg-gray-100 shadow-md flex flex-col items-center">
                <h2 className="text-l mb-4 text-center" style={{ color: "#D16E43" }}>Log in to your Account</h2>
                <div className="mb-6 w-full">
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    className={`w-full p-2 border rounded bg-gray-200 ${touched.username && errors.username ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage component="div" name="username" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-6 w-full relative">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={`w-full p-2 border rounded bg-gray-200 ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage component="div" name="password" className="text-red-500 text-sm mt-1" />
                  <div className="absolute right-0 top-12 text-sm">
                    <a href="/forgetpassword" className="text-blue-500">Forgot Password?</a>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-1/2 text-white p-2 rounded" style={{ background: "#D16E43" }}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="ml-8 w-2/5" style={{ height: '500px' }}>
            <img src="https://s3-alpha-sig.figma.com/img/35c1/2e2b/6fd6f8cf02bf1638f737374283f56b74?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkfeuYY3tsgJSDJu0zg3km61bCKWMnkMmbGjLGZFKokRupOn~6nxFSxUz2Rlx13EyVXMb5rdDYXJIBPIJJiwYElGvb16NSDpTfkZLRnTk76VrEBwBiJn2GA9ASrM7eqX8h1uYOcp8O3bi9Lf325nTCfc6vpGS-epLcq9x-~gbcjv3vP03ziX2DkBD3Jw7PkULTzx99H6GfwEUtFNpg9u0Jkbxc0NXLxXf-6pWMJG7-Ki3vxNQRiAjQYRFAUf05vhIf91fIT9-fII21W~fes~VisREopH35WJ2Y6-gHLq0KVq1bHNVCYyYVpB9c~tRW94XbNUHQyMpvzJcbvegLo7yg__" alt="Login" className="w-full h-full rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
