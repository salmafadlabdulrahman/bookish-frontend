"use client";

import { useState } from "react";
import style from "../styles/navbar.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Books", "Kids", "Contact"].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className={style.nav}>
      <div className={style.logo_icons_container}>
        <p className={style.logo}>Bookish</p>

        <p className={style.menu_Icon}>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </p>

        <div className={style.icons}>
          <p>
            <FavoriteBorderIcon />
          </p>
          <p>
            <ShoppingCartIcon />
          </p>
          <p>
            <AdminPanelSettingsIcon />
          </p>
        </div>
      </div>

      <ul className={style.navItems}>
        <li>Home</li>
        <li>Books</li>
        <li>Kids</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
