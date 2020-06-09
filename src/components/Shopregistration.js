import React, { useState, useEffect } from "react";
import Registrationform from "./Registrationform";
import firebaseDb from "../firebase";


const Shopregistration = () => {

    var [shopregobj, setshopobj] = useState({})

    var [currentid, setCurrentid] = useState('')

    useEffect(() => {

        firebaseDb.child('Shopregistration').on('value', snapshot => {
            if (snapshot.val() != null)
                setshopobj({
                    ...snapshot.val()
                })
        })
    }, [])

    const addOrEdit = obj => {
        if (currentid == '')
            firebaseDb.child('Shopregistration').push(obj,
                err => {
                    if (err)
                        console.log(err);
                    else
                        setCurrentid('')

                }
            )
        else
            firebaseDb.child(`Shopregistration/${currentid}`).set(obj,
                err => {
                    if (err)
                        console.log(err);
                    else
                        setCurrentid('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            firebaseDb.child(`Shopregistration/${key}`).remove(
                err => {
                    if (err)
                        console.log(err);
                    else
                        setCurrentid('')
                }
            )

        }

    }


    return (
        <>
            {/*   <div class="Container">
                <p></p>
                <h3>Shop Registration</h3>
            </div> */}
            <div className="row">
                <div className="col-md-5">
                    <Registrationform {...({ addOrEdit, currentid, shopregobj })} />
                </div>
                <div className="container">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Shop Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Object.keys(shopregobj).map(id => {
                                    return <tr key={id}>
                                        <td>{shopregobj[id].ShopName}</td>
                                        <td>{shopregobj[id].Email}</td>
                                        <td>{shopregobj[id].Password}</td>

                                        <td>
                                            <a className="btn btn-floating orange lighten-1" onClick={() => { setCurrentid(id) }}>
                                                <i class="tiny material-icons">create</i>
                                            </a>
                                            <a className="btn btn-floating red lighten-1" onClick={() => { onDelete(id) }}>
                                                <i class="tiny material-icons">delete</i>
                                            </a>
                                        </td>

                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}

export default Shopregistration;