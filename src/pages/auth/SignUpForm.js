import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username </Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-non">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-non">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
              />
            </Form.Group>

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.bright}`}
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://api12.iloveimg.com/v1/download/g53f078nzhny9f70l3qq33f561vyzAlfm9y8dlyzll1p9wl3ph1wqyy163zxk4v0xjfnlAwt4ttjcgrzzxg94h1z5ks58f7dy06yxrcc7kp3847AAgv7yk4zw1kv4fcmpcbqj2gxc9qv0nsm9drb8l1cb2sk78pdrpkp3p92xddlzbk37rcq"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
