import { useContext } from "react";

const LoginScreen = () => {
  const login = (values) => {
    console.log(values); // { email: '', password: '' }
  };

  return (
    <Form
      onSubmit={login}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <FormInput name="email" />
      <FormInput name="password" />
      <Button />
    </Form>
  );
};

const Context = React.createContext({});

const Form = ({ onSubmit, initialValues, children }) => {
  const [values, setValues] = useState(initialValues); //{email: "",password: "",}

  return (
    <Context.Provider value={{ values, setValues }}>
      {children}
    </Context.Provider>
  );
};

const FormInput = ({ name }) => {
  const context = useContext(Context);
  const { values, setValues } = context;

  return (
    <input
      value={values[name]}
      onChange={(event) => setValues({ ...values, [name]: event.target.value })}
    />
  );
};

const Button = () => {};
