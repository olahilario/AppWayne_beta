import { Box } from "@mui/material"

const MyMessage = ({text, color}) =>{
  return(
    <Box sx={{
      backgroundColor: color,
      fontFamily: 'monospace',
      fontWeight: 'bold',
      fontSize: '15px',
      color:'#ffd101',
      width: '100%',
      height: '40px',
      position: 'absolute',
      top: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>

      {text}

    </Box>
  )
}

export default MyMessage