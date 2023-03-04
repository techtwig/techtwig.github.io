import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import techtwigImg from "../public/logo.png";


const HomePage = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent={"center"}>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={techtwigImg}
                alt="Picture of the author"
                width={150}
                height={180}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <q>
                <i style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Code For Others
                </i>
              </q>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid item xs={4}>
              <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
                Our Objectives:
              </h1>
              <p style={{ fontSize: "19px", textAlign: "justify" }}>
                Our main goal is to help freshers after passing from university
                get into the job. Besides, to provide a platform for young
                software engineers to develop their skills, share their
                knowledge, and collaborate on open-source projects. We believe
                that by fostering a strong community of learners and
                contributors, we can create a more innovative and inclusive tech
                industry. After all, We want to make it helpful for any
                individual who is in the industry or going to join the industry.
              </p>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid item xs={4}>
              <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
                How You Can Contribute:
              </h1>
              <p style={{ fontSize: "19px", textAlign: "justify" }}>
                We welcome contributions from anyone who is interested in
                helping to build and grow our community. Whether you are a
                beginner or an experienced developer, there are many ways to get
                involved:
              </p>
              <ul>
                <li className="li">
                  Contribute to our open-source projects on GitHub.
                </li>
                <li>
                  Participate in our community forum and help answer questions.
                </li>
                <li>
                  Share your knowledge by writing articles or tutorials for our
                  blog.
                </li>
                <li>
                  Organize or attend meetups and events in your local area.
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid item xs={4}>
              <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
                Benefits:
              </h1>
              <ul>
                <li>
                  It allows young software engineers to get industry experience.
                </li>
                <li>
                  It will give you an opportunity to work on a real-world
                  project.
                </li>
                <li>
                  Contributing to an open-source project can lead you to learn
                  from other developers.
                </li>
                <li>
                  It will help you to build a strong networking opportunity with
                  other developers and industry experts.
                </li>
                <li>
                  It will be helpful for building a strong portfolio for any
                  contributor.
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <Grid item xs={4}>
              <h1 style={{ textAlign: "center", marginBottom: "12px" }}>
                Contact Us:
              </h1>
              <p
                style={{
                  fontSize: "19px",
                  textAlign: "justify",
                  wordSpacing: "-3px",
                }}
              >
                If you have any questions or comments about Tech Twig, please
                contact us at techtwig14@gmail.com. You can also follow us on
                Twitter and LinkedIn. Thank you for your interest in Tech Twig!
                We look forward to building a great community with you.
              </p>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} mt={2}>
            <h5 style={{ fontSize: "15px", textAlign: "justify" }}>
              &copy; {currentYear} Tech Twig
            </h5>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
