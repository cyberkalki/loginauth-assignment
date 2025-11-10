import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../services/auth'

export default function Layout({ children }) {
  const navigate = useNavigate()
  const user = getCurrentUser()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
              LoginAuth
            </Typography>

            {user ? (
              <>
                <Typography sx={{ mr: 2 }}>{user.username}</Typography>
                {user.roles.includes('ADMIN') && (
                  <Button color="inherit" component={RouterLink} to="/admin">Admin</Button>
                )}
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={RouterLink} to="/login">Login</Button>
                <Button color="inherit" component={RouterLink} to="/register">Register</Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </>
  )
}
