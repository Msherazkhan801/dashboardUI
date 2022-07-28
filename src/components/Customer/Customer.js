
import React from 'react'
import "../Order /Orderlist.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicModal from "../Modal/Modal"
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
function createData(pic,name, trackingId, date, status) {
  return {pic, name, trackingId, date, status };
}

const rows = [
  createData(img1,"Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData(img2,"Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData(img3,"Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData(img2,"Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData(img1,"Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData(img2,"Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData(img3,"tea", 18908421, "3 March 2022", "Delivered"),
  createData(img2,"cake", 18908421, "2 March 2022", "Delivered"),
  createData(img1,"Cup", 18908421, "2 March 2022", "Delivered"),
  createData(img2,"Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData(img3,"Rollcake", 18908421, "2 March 2022", "Delivered"),
  createData(img2,"Rollcake", 18908421, "2 March 2022", "Delivered"),
  createData(img3,"Rollcake", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function Customer() {
  return (
      <div className="Table">
      <h3>Recent Orders</h3>
        <TableContainer
          component={Paper}
      style={{ boxShadow: "0px 13px 20px 0px #80808029",
      overflow:"scroll"
     ,width: "100%",
      height: "90vh",
       }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                   <img src={row.pic} alt="pic" style={{width:"40px"}}/>
                  </TableCell>
                    <TableCell component="th" scope="row" >
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                      <BasicModal title="Customer Detail" paragraph="soon will be updated.."/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
