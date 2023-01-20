import styles from "../../styles/dashboard/companyDetails.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import huawei from "../../assets/dashboard/huawei.png";
import Rating from "@mui/material/Rating";
// import StarIcon from "@mui/icons-material/Star";
import { MdStarOutline } from "react-icons/md";
import phone from "../../assets/dashboard/phone.svg";
import map from "../../assets/dashboard/map-pin2.svg";
export default function CompanyDetails({ setCounter }) {
  return (
    <div className={styles.flex}>
      <Box
        sx={{
          width: { xs: "92%", md: "70%" },
          p: { xs: "12px", md: 4, l: 8 },
          //   "&:hover": {
          //     backgroundColor: "primary.main",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 2,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <img src={huawei} alt="" />
          <Box
            sx={{ pl: { xs: "8px", md: 4 }, pr: { xs: "4px", md: 1 } }}
            onClick={() => setCounter((prev) => prev + 1)}
          >
            <Typography variant="h3" sx={{ fontWeight: 400, fontSize: "50px" }}>
              Huawei
            </Typography>
            <a
              href="www.huawei.com"
              style={{ color: "#171717", textDecoration: "none" }}
            >
              www.huawei.com
            </a>
          </Box>
          <Rating
            value={3}
            name="read-only"
            readOnly
            size="large"
            sx={{ color: "#FFED4E" }}
            emptyIcon={<MdStarOutline style={{ opacity: 0 }} />}
          />
          <Box sx={{}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center !important",
                width: 300,
                mt: 1,
              }}
            >
              <img src={map} alt="" style={{ margin: "8px" }} />
              <Typography variant="span">
                Huawei Base, Bantian, Longgang District, Shenzhen, China
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center !important" }}>
              <img src={phone} alt="" style={{ margin: "8px" }} />
              <Typography variant="span">03994033044</Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          component="p"
          sx={{
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "182%",
            letterSpacing: "0.01em",
            color: "#171717",
            mb: 3,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          Huawei Technologies Co., Ltd. is a Chinese multinational technology
          corporation headquartered in Shenzhen, Guangdong, China. It designs,
          develops, produces and sells telecommunications equipment, consumer
          electronics and various smart devices. Huawei has deployed its
          products and services in more than 170 countries and areas.[7] It
          overtook Ericsson in 2012 as the largest telecommunications equipment
          manufacturer in the world,[8] and overtook Apple in 2018 as the
          second-largest manufacturer of smartphones in the world, behind
          Samsung Electronics.[9] In 2018, Huawei reported annual revenue of
          US$108.5 billion.[10] In July 2020, Huawei surpassed Samsung and Apple
          in the number of phones shipped worldwide for the first time.[11] This
          was primarily due to a drop in Samsung's global sales in the second
          quarter of 2020, owing to the impact of the COVID-19 pandemic.
        </Typography>
        {/* rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} */}
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            ORG Structure
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Financial Profile
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            News & Update
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Product & services
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Vendors & Partnerships
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Technology stack
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Contact center operations
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Back office
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Pain points & priorities
          </Grid>
          <Grid item xs={6} sm={3} md={2.4} sx={{ color: "#1A5CB0" }}>
            Pandora's box
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: { xs: "auto", md: "30%" },
          p: { xs: "12px", md: 4, l: 8 },
          bgcolor: "#F1F1F1",
          boxShadow: "4px 4px 21px rgba(244, 244, 244, 0.19)",
          borderRadius: "20px 0px 0px 0",
          p: 4,
        }}
      >
        <Typography
          component="p"
          variant="h2"
          sx={{ fontSize: "30px", color: "#3C69A4" }}
        >
          Company overview
        </Typography>
        <div className={styles.textGroup}>
          <p className={styles.statsHeading}>Operates manufacturing plants</p>
          <p className={styles.stats}>Eight countries</p>
        </div>
        <div className={styles.textGroup}>
          <p className={styles.statsHeading}>Founded on</p>
          <p className={styles.stats}>September 15, 1987</p>
        </div>
        <div className={styles.textGroup}>
          <p className={styles.statsHeading}>Products and services</p>
          <p className={styles.stats}>20+</p>
        </div>

        <div className={styles.textGroup}>
          <p className={styles.statsHeading}>Employees</p>
          <p className={styles.stats}>5000+</p>
        </div>
        <div className={styles.textGroup}>
          <p className={styles.statsHeading}>Revenue</p>
          <p className={styles.stats}>¥636.8 billion (US$99.9 billion)</p>
        </div>
        <div className={styles.textGroup}>
          <p className={styles.statsHeading}>Stock price on today</p>
          <p className={styles.stats}>3.5900 (+2.57%)</p>
        </div>
      </Box>

      {/* <div className={styles.leftSection}></div> */}
      {/* <div className={styles.rightSection}></div> */}
    </div>
  );
}
