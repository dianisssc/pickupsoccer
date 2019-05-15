import React, { Component } from "react";

class AccountModal extends Component{

    render() {
        return (
 <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div className="modal-dialog" role="document">
     <div className="modal-content bg-dark text-white">
         <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLabel">Create a Player Account</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
             </button>
         </div>
         <div className="modal-body">

         <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                 <button type="button" className="btn btn-primary">Save changes</button>
             </div>
         </div>
     </div>
 </div>
</div>

)}
}

export default AccountModal;