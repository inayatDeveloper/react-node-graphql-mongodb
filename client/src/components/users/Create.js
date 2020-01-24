import React, {useReducer} from "react";
import gql from "graphql-tag";
import {Query, Mutation} from "react-apollo";

const addUser = gql` mutation addUserInfo($userName:String!,$address:String!){
    addUserInfo(userName:$userName,address:$address){userName}
}`;

const CreateUser = (props) => {
    
    const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}), {
        userName: "",
        address: ""
    })

    const handleInput = (e) => {
        setUserInput({[e.target.name]: e.target.value})
    }
    
    
    let {userName, address} = userInput;
    return (

        <Mutation mutation={addUser} onCompleted={(e)=>props.history.push("/user/list")}>
            {(addUserInfo, {loading, error}) => {
                if(loading) return <h1>loading...</h1>
                if(error) return <h1>Error:{error}</h1>
                return (<div className="container">

                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <label>Add user info</label>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                addUserInfo({variables: {userName:userName, address:address}})
                            }}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">UserName</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           name="userName"
                                           placeholder="Enter userName" onChange={(e) => handleInput(e)}/>
                                    <small id="emailHelp" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           name="address"
                                           placeholder="Enter address" onChange={(e) => handleInput(e)}/>
                                    <small id="emailHelp" className="form-text text-muted"></small>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>

                </div>)
            }}

        </Mutation>

    )
}

export default CreateUser;