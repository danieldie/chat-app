import {
  Stack,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import CatLogo from "../../assets/icons/logo/TwinkConnect.png";

const WelcomePage = () => {

  return (
    <Box widht={"100%"} sx={{ py: 4 }}>
      <Stack
        justifyContent={"center"}
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
          gap: 2,
          alignItems: "center",
          backgroundColor: (theme) => theme.palette.background.paper,
          borderRadius: { xs: "20px 20px 0px 0px", md: "20px" },
          minHeight: { xs: 480, md: 430 },
        }}
        px={4}
      >
        <Box>
          <Typography
            component="h1"
            variant="h1"
            sx={{ fontSize: { xs: 35, md: 45 }, textAlign: "center" }}
          >
            Welcome to ChatConnect 😺
          </Typography>
          <Typography
            component="h2"
            variant="subtitle2"
            color="primary"
            sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}
          >
            A robust web-based Real-Time Chat App developed by Vaibhaw Mishra.
          </Typography>

          <Button
            fullWidth
            component={Link}
            to={"/"}
            size="large"
            variant="contained"
            sx={{
              mt: 4,
              display: { xs: "none", md: "flex" },
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
              "&:hover": {
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.white" : "grey.800",
              },
            }}
          >
            Join Now To Start Chatting With Your Friends!
          </Button>
        </Box>

        {/* Image and enclosed Box */}
        <Box
          component="img"
          src={CatLogo}
          alt={"TwinkConnect Logo"}
          sx={{ width: { xs: 200, md: 400 }, height: "100%" }}
        />
      </Stack>
      <Stack alignItems={"center"}>
        <Button
          component={Link}
          to={"/"}
          size="large"
          variant="contained"
          sx={{
            borderRadius: "0px 0px 20px 20px",
            width: { xs: "100%", md: "50%" },
          }}
        >
          Lets Get You Logged In!
        </Button>
      </Stack>
    </Box>
  );
};

export default WelcomePage;
