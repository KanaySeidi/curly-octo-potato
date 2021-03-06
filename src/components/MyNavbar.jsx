import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import mlogo from "../images/medusa.png";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { ClientContext } from "../contexts/ClientProvider";
import { AuthContext } from "../contexts/AuthProvider";

const pages = ["Products", "Pricing", "Blog"];

const MyNavbar = () => {
  const { cartCount } = React.useContext(ClientContext);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="navbar">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img width={60} src={mlogo} alt="logo" />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img width={25} src={mlogo} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/admin">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                ?????????? ????????????
              </Button>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/admin/add">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  ???????????? ??????????????
                </Button>
              </Link>
              <Link to="/">
                <h2>
                  <strong>medusa Gargona</strong>
                </h2>
              </Link>
            </Box>
          </Box>

          <div className="navbar-right">
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/cart">
                <IconButton size="large" color="inherit">
                  <Badge color="error" badgeContent={cartCount}>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
              {user ? (
                <>
                  <IconButton size="small" color="inherit">
                    {user.displayName}
                  </IconButton>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                  <IconButton onClick={logout} size="large" color="inherit">
                    <Logout />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={authWithGoogle}
                  size="small"
                  color="inherit"
                >
                  ??????????
                </IconButton>
              )}
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNavbar;
