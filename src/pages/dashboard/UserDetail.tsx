

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getUserData } from '../../store/user/UserSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hook'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { selectUser } from '../../store/user/UserSlice';
import { PageLoader } from '../../utilities/PageLoader';
import './user-detail.scss'


export const UserDetail = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      dispatch(getUserData(id));
  },[dispatch]);

    const goBack = () => {
      navigate(-1)
    }

    const { userDetails }  = useSelector(selectUser);
    const { fulfilled }  = useSelector(selectUser);
    const { loading }  = useSelector(selectUser);
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setTabIndex(newValue);
    };


  return (


    <div>
      <div className='nav-section'>

        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D"/>
        </svg>

          <span onClick={goBack}>Back to Users</span>
      </div>

      <div className='detail-text-wrapper'>
        <div>
          <h5>User Detail</h5>
        </div>

        { fulfilled &&
          <div className='detail-btn-wrapper'>
            <button>Blacklist User</button>
            <button>Activate User</button>
          </div>
        }

      </div>


      { loading &&
       <> 
          <PageLoader />
      </>}

    

      { fulfilled && userDetails !== null ?
        <>
          <Card>
            <div className='avatar-wrapper'>
              <div>
                {userDetails?.profile.avatar &&
                    <img src={userDetails.profile.avatar} className='img-fluid rounded-circle' />

                }
              </div>

              <div>
                <h2>{userDetails.profile.firstName} {userDetails.profile.lastName}</h2>
                <p>{userDetails.accountNumber}</p>
              </div>

              <div>
                <h3>User’s Tier</h3>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z" fill="#E9B200"/>
                </svg>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_5530_1564)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5530_1564">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_5530_1564)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z" fill="#E9B200"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5530_1564">
                  <rect width="16" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>


              </div>

              <div>
                <h2>{userDetails.profile.currency} {userDetails.accountBalance}</h2>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>


            <Tabs
                value={tabIndex}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  value={0}
                  label="General Details"
                  className='tab-btn'
                />
                <Tab value={1}  className='tab-btn' label="Documents" />
                <Tab value={2}  className='tab-btn' label="Bank Details" />
                <Tab value={3}  className='tab-btn' label="Loans" />
                <Tab value={4}  className='tab-btn' label="Savings" />
                <Tab value={5}  className='tab-btn' label="App and System" />
            </Tabs>
            
          </Card>

          <div className='tab-content-wrapper'>

            {tabIndex === 0 && (
              <div>
                <h5 className='info-title'>Personal Information</h5>
                <div className='info-grid'>
                  <div>
                    <p>full Name</p>
                    <h5>{userDetails.profile.firstName} {userDetails.profile.lastName}</h5>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <h5>{userDetails.phoneNumber}</h5>
                  </div> 
                  <div>
                    <p>Email Address</p>
                    <h5>{userDetails.email}</h5>
                  </div> 
                  <div>
                    <p>Bvn</p>
                    <h5>{userDetails.profile.bvn}</h5>
                  </div> 
                  <div>
                    <p>Gender</p>
                    <h5>{userDetails.profile.gender}</h5>
                  </div> 
                  <div>
                    <p>Children</p>
                    <h5>Grace Effiom</h5>
                  </div>
                  <div>
                    <p>Type of residence</p>
                    <h5>Grace Effiom</h5>
                  </div>
                </div>
                <Divider className='divider-custom' />

                <h5 className='info-title'>Education and Employment</h5>
                <div className='info-grid'>
                  <div>
                    <p>level of education</p>
                    <h5>{userDetails.education.level}</h5>
                  </div>
                  <div>
                    <p>employment status</p>
                    <h5>{userDetails.education.employmentStatus}</h5>
                  </div> 
                  <div>
                    <p>sector of employment</p>
                    <h5>{userDetails.education.sector}</h5>
                  </div> 
                  <div>
                    <p>Duration of employment</p>
                    <h5>{userDetails.education.duration}</h5>
                  </div> 
                  <div>
                    <p>office email</p>
                    <h5>{userDetails.education.officeEmail}</h5>
                  </div> 
                  <div>
                    <p>Monthly income</p>
                    <h5>
                      {userDetails.profile.currency}
                      {userDetails.education.monthlyIncome[0] && userDetails.education.monthlyIncome[0]}
                      <br />
                      {userDetails.profile.currency}
                      {userDetails.education.monthlyIncome[1] && userDetails.education.monthlyIncome[1]}
                    </h5>
                  
                  </div>
                  <div>
                    <p>loan repayment</p>
                    <h5>{userDetails.education.loanRepayment}</h5>
                  </div>
                </div>
                <Divider />


                <h5 className='info-title'>Socials</h5>
                <div className='info-grid'>
                  <div>
                    <p>Twitter</p>
                    <h5>{userDetails.socials.twitter}</h5>
                  </div>
                  <div>
                    <p>Facebook</p>
                    <h5>{userDetails.socials.facebook}</h5>
                  </div> 
                  <div>
                    <p>Instagram</p>
                    <h5>{userDetails.socials.instagram}</h5>
                  </div> 
                </div>
                <Divider />

                <h5 className='info-title'>Guarantor</h5>
                <div className='info-grid'>
                  <div>
                    <p>full Name</p>
                    <h5>{userDetails.guarantor.firstName} {userDetails.guarantor.lastName}</h5>
                  </div>
                  <div>
                    <p>Phone Number</p>
                    <h5>{userDetails.guarantor.phoneNumber}</h5>
                  </div> 
                  <div>
                    <p>Gender</p>
                    <h5>{userDetails.guarantor.gender}</h5>
                  </div> 

                  <div>
                    <p>Address</p>
                    <h5>{userDetails.guarantor.address}</h5>
                  </div> 
                </div>
              </div>
            
            )}
            {tabIndex === 1 && (
              <Box>
                  <Card>Documents</Card>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Card>Bank Details</Card>
              </Box>
            )}

            {tabIndex === 3 && (
              <Box>
                <Card>Loans</Card>
              </Box>
            )}

            {tabIndex === 4 && (
              <Box>
                <Card>Savings</Card>
              </Box>
            )}

            {tabIndex === 5 && (
              <Box>
                <Card>App and System</Card>
              </Box>
            )}

          </div>
        </>
        : ''

    }






    </div>
  )
}
