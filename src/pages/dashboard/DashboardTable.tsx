import * as React from 'react'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

interface FoodData{
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
}

const rows = [
    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },

    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },

    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },

    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },

    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },
    
    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },

    {
        name: 'Frozen yoghurt', 
        calories: 159, 
        fat: 6.0, 
        carbs: 24, 
        protein: 4.0
    },
    
    {
        name: 'Ice cream sandwich', 
        calories: 159, 
        fat: 3.0, 
        carbs: 56, 
        protein: 10.0
    },
    

    {
        name: 'Eclair', 
        calories: 259, 
        fat: 9.0, 
        carbs: 12, 
        protein: 98.0
    },
    

    {
        name: 'Cupcake', 
        calories: 300, 
        fat: 45.0, 
        carbs: 67, 
        protein: 34.0
    },
    

    {
        name: 'Gingerbread', 
        calories: 556, 
        fat: 32.0, 
        carbs: 66, 
        protein: 21.0
    },
    
 
];


export const DashboardTable = () => {


const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


const filterBtnRef = React.useRef<null | HTMLElement>(null);

const handleKeyDown = () => {
     // filterBtnRef.click()
    //  filterBtnRef.click()
    filterBtnRef.current?.click()
}




  return (
    <div>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving) 
                    <Tooltip title="Filter list" ref={filterBtnRef}>
                    <IconButton id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            
                            >
                        <FilterListIcon />
                    </IconButton>
                    </Tooltip>
                </TableCell>

                {/* <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Dashboard
            </Button> */}


       
               

                <TableCell align="right">Calories

                    <Tooltip title="Filter list">
                        <IconButton onClick={handleKeyDown}>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                
                </TableCell>
                <TableCell align="right">Fat

                    <Tooltip title="Filter list">
                        <IconButton onClick={handleKeyDown}>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                
                
                </TableCell>
                <TableCell align="right">Carbs
                    <Tooltip title="Filter list">
                        <IconButton onClick={handleKeyDown}>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                
                </TableCell>
                <TableCell align="right">Protein
                    <Tooltip title="Filter list">
                        <IconButton onClick={handleKeyDown}>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <Menu 
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                  
                    PaperProps={{
                        style: {
                        width: '30ch',
                        height: '45ch'
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>


            {rows.map((row: FoodData) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

    </div>
  )
}
