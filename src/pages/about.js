import React from "react";
import { Hfive, Hone, ImageRepo, Repo2, Repo3, Reposit } from "./pages.styled";
import "../components/assets/css/mobile.css";
import Header from "../components/header";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import kiwi from "../assests/images/kiwi.jpg";
export default function About() {
  return (
    <div>
      <Header />
      <div className="space-third"></div>
      <div className="space-third"></div>
      <div className="space-third"></div>

      <Container>
        <h1
          style={{
            color: "white",
            fontSize: "36px",
            textAlign: "center",
          }}
        >
          Long Life Coin
        </h1>
        <h2
          style={{
            color: "white",
            fontSize: "27px",
            textAlign: "center",
          }}
        >
          Our coin was created by reflecting the wishes of people who wish for
          longevity.
        </h2>
        <h2
          style={{
            color: "white",
            fontSize: "27px",
            textAlign: "center",
          }}
        >
          Buy our tokens and get the secret to longevity
        </h2>

        <Repo3>
          <Hfive pad="15px 0px">
            Five kinds of green vegetables, such as bitter gourd, cucumber,
            green pepper, celery and apple, have their own effects. Generally
            speaking, drinking five green vegetable juice has the functions of
            clearing dryness and heat, clearing toxins, clearing stool, clearing
            storage, clearing blood lipids
          </Hfive>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Green Apple</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Prevent obesity: Compared with other fruits, apples provide
                  negligible fat. It has almost no protein and an average 100
                  grams contains only 60 calories. And it is rich in malic acid,
                  which can effectively disperse the fat accumulated in the
                  body, thereby preventing obesity.
                </p>
                <p>
                  2. Detoxification and beauty: Apple is rich in pectin, which
                  helps to regulate intestinal peristalsis, and the fiber it
                  contains can help remove waste in the body, thereby helping
                  you detoxify and beautify your face.
                </p>
                <p>
                  3. Skin whitening: Apples contain a lot of vitamin C. Eating
                  apples often can help eliminate skin freckles and dark spots,
                  and keep the skin tender and rosy.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Celery</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Weight loss: A large celery tree contains only about 4 to 5
                  calories. Eating celery will not lead to high calorie intake
                  and gain weight, which is conducive to maintaining weight.
                </p>
                <p>
                  2. Digestion aid: The fiber content in celery is extremely
                  high, which can effectively promote gastrointestinal motility,
                  promote digestion and metabolism, and digest fat.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>3. Cucumber</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Beauty: Cucumber is a vegetable that can blindly beautify,
                  and is called "beauty agent in the kitchen". Regular
                  consumption of cucumber can not only effectively resist skin
                  aging, reduce wrinkles, but also prevent cheilitis and angular
                  cheilitis.
                </p>
                <p>
                  2. Weight loss: Fresh cucumber contains a substance called
                  propanedioic acid, which has the effect of inhibiting the
                  conversion of sugar into fat. Therefore, cucumber is a good
                  weight loss product.
                </p>
                <p>
                  3. Speed up metabolism: cucumber is famous for its fragrance
                  and juiciness, and contains a lot of protein and potassium
                  salt. Potassium salt has the effect of accelerating blood
                  metabolism and excreting excess salt in the body.
                </p>
                <p>
                  4. Promote excretion and improve human immune function: Fresh
                  cucumber contains very delicate cellulose, which can not only
                  accelerate the excretion of intestinal spoilage, but also
                  reduce the function of cholesterol in the blood. For patients
                  with cholesterol and arteriosclerosis, eating cucumbers is
                  very beneficial.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>4. Momordica charantia</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Weight loss: Bitter melon is rich in bitter melon, which
                  can reduce the intake of fat. Therefore, drinking more bitter
                  melon tea and eating more bitter melon can reduce body fat and
                  maintain a healthy body.
                </p>
                <p>
                  2. Improve immunity: bitter gourd is rich in vitamin C,
                  vitamin C can treat scurvy, prevent gum bleeding, and improve
                  the body's immunity, so eat more bitter gourd, supplement
                  vitamin C, prevent diseases and also improve immunity force
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>5. Green pepper</Accordion.Header>
              <Accordion.Body>
                <p>
                  1. Digestion aid: The strong spicy taste of pepper can
                  stimulate the secretion of saliva and gastric juice, promote
                  intestinal peristalsis and help digestion.
                </p>
                <p>
                  2. Lowering lipids and weight loss: The capsaicin contained in
                  peppers can promote the metabolism of fat, prevent the
                  accumulation of fat in the body, and is conducive to lowering
                  lipids and reducing weight and preventing diseases.
                </p>
                <p>
                  3. Beauty: Green pepper can activate the function of skin
                  cells and tissue, promote skin metabolism, and make the skin
                  smooth and tender, so as to achieve the purpose of beauty.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Repo3>
      </Container>
      <div className="space-third"></div>
      <Container>
        <Row>
          <Col md={6}>
            <ImageRepo border="3px solid white">
              <img src={kiwi} alt="kiwi" width={"100%"} />
            </ImageRepo>
          </Col>
          <Col md={6}>
            <Hfive>
              Kiwi is known in China as "the king of fruits" and "healthy
              miracle fruit". Why Can Kiwis Be Called "The King of Fruits"? The
              flesh contains a lot of vitamin C and vitamin E, of which 100g of
              fresh fruit contains 100~420mg of vitamin C, which is 80 times
              that of an apple. Both of these vitamins have strong antioxidant
              effects, so kiwi can prevent diseases such as arteriosclerosis,
              diabetes, and liver dysfunction, as well as have good effects on
              patients with the 'Trinity' (hyperlipidemia, high blood pressure,
              and high blood sugar).
            </Hfive>
          </Col>
          <Col>
            <Hfive>
              Summary: Here is one of the Chinese herbal medicines that have
              been provided for thousands of years in China is Wucai Juice or
              Liucai Juice. Medical Treasure is a treasure handed down from
              Chinese ancestors and is now freely available to the world as a
              reference. The reader may or may not use it. So we are not set up
              a answering service or answering any of your questions. Because it
              was not created by us, Because it was created by the ancestors of
              the Chinese people.
            </Hfive>
          </Col>
        </Row>
      </Container>
      <div className="space-third"></div>
      <div className="space-third"></div>
      <div className="space-third"></div>
    </div>
  );
}
