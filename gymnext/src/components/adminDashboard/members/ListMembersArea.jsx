"use client"; // cause don't need speed or user interaction

import  { useEffect, useState }   from "react";
/*** service to get all members, to use it in members list table *****/
import { GetAllMembersService } from "./getAllMembersService"
import { useDeleteMemberMutation } from "../../../redux/features/apis/memberApi";
/** to build search component */
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
/*** Notify toast */
import { notifyError, notifySuccess } from "@/utils/toast";
/****Search area */
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Pagination from '@/components/common/Pagination';
import { PaginationControl } from 'react-bootstrap-pagination-control';

// icons
import { IoSearch } from "react-icons/io5";

const ListMembersArea = () => {

    const BackendURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const router = useRouter();
// local const handle with useState hook
  
  const [selected, setSelected] = useState(null);

  const searchParams = useSearchParams();
  const [searchdata, setSearchdata] = useState("");

     // local const handle with useState hook
  const [members, setMembers] = useState([]);
  const [ daysLeft_mathFloor, SetDaysLeft_mathFloor] = useState([]);

  // vars to handle days left color class
  let c=0;
  const isPositive = daysLeft_mathFloor[c] > 0;
  const colorClass = isPositive ? 'text-success' : 'text-danger';

// function to get all members data from backend
// get all members from backend
 const GetAllmembers =  () => { GetAllMembersService(setMembers, SetDaysLeft_mathFloor); };

// handle the member delete
  const [RDdeleteMember, {}] =  useDeleteMemberMutation();

//**** vars to handle pagination */

  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(5);

  // vars to handle pagination
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMember = members?.slice(indexOfFirstMember, indexOfLastMember);

 const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

// function to handle member delete
// Delete member func
    const deleteMember = (member) => {
   
     // alert('member._id - ListMembersAreea - line 64:'+member._id);
     // alert('member.imageUser - ListMembersAreea - line 65:'+member.imageUser);
   
// function to delete the image in backend     
 const ImageDel = member.imageUser;   
DeleteImage(
        
        ImageDel
        //ImagetoErase
  // you get the result from memberApi - function useDeleteMemberImageMutation(), mutation for post request
    ).then((result) => {
      if (result?.error) {
        notifyError("Delete Image Failed");
      } else {
        notifySuccess(result?.data?.message);
      }
    });

    //DeleteMemberService(member._id);
    RDdeleteMember(member._id).then((result) => {
      if (result?.error) {
        notifySuccess("Deleted Member Failed");
      } else {
        notifySuccess(result?.data?.message);
        //this will reload the page without doing SSR
       router.reload(window.location.pathname);
        //router.push(redirect || "/");
      }
    })

    // refresh page - after deleting member - It only reloaded the client and not the server.
    //window.location.reload();
    //this will reload the page without doing SSR
       router.reload(window.location.pathname);
  
  }; // end of delete member func block


useEffect(() => { GetAllmembers(); }, []);


  return (
    <>
  <div style={{display:'flex', flexDirection:'row', justifyContent:'center',border:'5px double grey', height:'121vh',background: 'linear-gradient(139deg, rgba(22,103,184,1) 2%, rgba(9,83,121,1) 11%, rgba(0,193,255,0.9191876579733456) 58%)'}}>

 {/*** CENTER RECTANGULO STYLES */}
 <div style={{width:'80vw', border:'3px double gray', height:'100vh',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', background:'radial-gradient(circle, rgba(219,215,217,1) 0%, rgba(155,197,246,1) 100%)', marginTop:30,borderRadius:20, boxShadow: '10px 10px'}}>

<div className="container d-flex flex-column justify-content-center align-content-center" style={{marginTop:'3em'}}>
   <div style={{margin:'3em'}}>
   {/*****Search area beging */}  

     <MDBInputGroup>
      <MDBInput
         placeholder="Search Product Item By Code"
         onChange={(e) =>{setSearchdata(e.target.value)}}
         defaultValue={searchParams?.searchTerm?.toString()}
        name="searchTerm"
         />
      <MDBBtn rippleColor='dark'>
        {/*<MDBIcon icon='search' />*/}
        <IoSearch size="20px" style={{color:'black'}}/>
      </MDBBtn>
    </MDBInputGroup>
   
    {/*****SEarch area End */} 

     <h3 className="text-center" style={{marginBottom:40, marginTop:20}}>Members Table</h3>
   </div>

  <div style={{marginBottom:20}} >
   
  {/*************  table area block Begining ****************** */}
  <span>
  {/*** SearchData block ********/}
   <div className="table-responsive" style={{overflowY:'scroll',
                           maxHeight:'64vh', overflowX:'scroll'}}>
        <table className="table table-responsive" style={{borderRadius:10}}>
          <thead className="table-dark" style={{position:'sticky', top:0}}>
            <tr>
              <th scope="col" className="text-center sftables" >#</th>
              <th scope="col" className="text-center sftables">Name</th>
              <th scope="col" className="text-center sftables">Client CI</th>
              <th scope="col" className="text-center sftables">Image</th>
              <th scope="col" className="text-center sftables">email</th>
              <th scope="col" className="text-center sftables">phone</th>
              <th scope="col" className="text-center sftables">Plan Name</th>
              <th scope="col" className="text-center sftables">Time Days</th>
              <th scope="col" className="text-center sftables">Cost</th>
               <th scope="col" className="text-center sftables">Code</th>
              <th scope="col" className="text-center sftables">Status</th>
              <th scope="col" className="text-center sftables">Days Left</th>
              <th scope="col" className="text-center sftables">Action</th>
            </tr>
          </thead>
          <tbody>

            {/***if there are products - show table */}
            {currentMember.filter((Member) => {
            if (searchdata == null) {
                return Member
            } else if (Member.code.toLowerCase().includes(searchdata.toLowerCase())) {
                return Member
            }
        }).map((Member, index) => (
           
              <tr key={Member._id}>
                <td className="text-center sftables">{index+1}</td>
                <td className="text-center sftables">{Member.namemember}</td>
                <td className="text-center sftables">{Member.client_CI}</td>
                <td className="text-center"><img src={`${BackendURL}`+Member?.imageUser} height='70' width='60' style={{borderRadius:5}}/></td>
                <td className="text-center sftables">{Member.email}</td>
                <td className="text-center sftables">{Member.phone}</td>
                <td className="text-center sftables">{Member.nameplan}</td>
                <td className="text-center sftables">{Member.timedays}</td>
                <td className="text-center sftables">{Member.cost}</td>
                <td className="text-center sftables">{Member.code}</td>
                <td className="text-center sftables">{Member.status}</td>
                <td className="text-center sftables"> <em className={`p-2 ${colorClass}`}>{daysLeft_mathFloor[index]}</em></td>
                <td className="text-center">  
                  <button className="btn btn-danger ms-2" onClick={() =>{setSelected(Member), deleteMember(Member)}}>Delete</button>
                </td>
               </tr> 
            
            
             
            ))}
            
          </tbody>
         
        </table>
        <Pagination length={members.length} packsPerPage={membersPerPage} handlePagination={handlePagination} currentPage={currentPage}/>
        { /**** bootstrap pagination ********/}
      <div className="Pagination">
        <PaginationControl
                  page={currentPage}
                  between={4}
                  total={members.length}
                  limit={5}
                  changePage={(currentPage) => { setCurrentPage(currentPage)}}
    ellipsis={1} />
    <br/>
    <br/>
  </div>
  </div>
                                  
  </span>
</div>

{/************************************************************** */}


 </div> 
</div>
</div>
  </>
  
)}

export default ListMembersArea;