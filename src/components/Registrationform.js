import React, { useState, useEffect } from "react";





const Registrationform = (props) => {

    const initialFieldValues = {
        ShopName: '',
        Email: '',
        Password: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentid == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.shopregobj[props.currentid]
            })


    }, [props.currentid, props.shopregobj])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }


    return (
        <div className="container">
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <h5 className="grey-text text-darken-3">Register</h5>
                <div class="column">
                <div className="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <label for="icon_prefix">Shop Name</label>
                    <input type="text" class="Validate" id="icon_prefix" name="ShopName" value={values.ShopName} onChange={handleInputChange} />
                </div>
                </div>
                <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">email</i>
                    <label for="icon_prefix">Email</label>                   
                    <input type="email" class="validate" name="Email" value={values.Email} onChange={handleInputChange} />
                </div>
                </div>
                <div class="row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">security</i>
                    <label for="icon_prefix">Password</label> 
                    <input type="password" name="Password"
                        value={values.Password}
                        onChange={handleInputChange} />
                </div>
                </div>
                <div className="input-field">
                    <input type="submit" value={props.currentid == '' ? "Save" : "Update"} class="btn orange lighten-1 z-depth-0" />
                </div>
            </form>
        </div>

    );
}

export default Registrationform;