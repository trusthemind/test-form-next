'use client'
import s from "./style.module.scss";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async () => {
    // Validate all form items
    const temp = await form.validateFields();

    if (temp) {
      message.success("Successfully!");
      router.push("/dashboard")
    }
  }

  const onFinishFailed = () => {
    message.error('Fill the form!');
  };
  
  return (
    <div className={s.loginBlock + " container"}>
      <h2>
        Welcome Back <span className={s.hand}>👋🏼</span>
      </h2>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        wrapperCol={{ offset: 0, span: 12 }}
        className={s.loginForm}
      >
        <Form.Item
          label=""
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
             {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/m,
              message: 'Invalid e-mail!',
          },
          ]}
        >
          <MailOutlined className={s.mailIcon} />
          <Input placeholder="Email" className={s.emailInput} onChange={(e)=>form.setFieldValue('email',e.target.value)}/>
        </Form.Item>
        <Form.Item
          label=""
          name="password"
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              pattern: /^(?=.*[a-z]).{8,}$/g,
              message: "Invalid password",
            },
          ]}
        >
          <LockOutlined className={s.mailIcon} />
          <Input.Password placeholder="Password" className={s.passwordInput} onChange={(e)=>form.setFieldValue('password',e.target.value)}/>
        </Form.Item>
        <Link href={"#"} className={s.forgotPassword}>
          Forgot ur password?
        </Link>
        <Form.Item className={s.buttonsBlock}>
          <Button type="primary" htmlType="submit" className={s.buttonSubmits}>
            Login
          </Button>
          <div className={s.hrblock}>
          <hr/>
          <p className={s.hrtext}>or</p>
          </div>
          <Button type="primary" htmlType="submit" className={s.buttonSubmits}>
            <GoogleOutlined />
            Sign in with Google
          </Button>
        </Form.Item>
        <Link href={"#"} className={s.registerAcc}>
          Dont have an account?<b>Register</b>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
