import React from "react";
import gql from "graphql-tag";
import {Query, Mutation} from "react-apollo";

let getUserList = gql`{
 userList{userName}
}`;
const UserList = (props) => {


    return (

        <Query query={getUserList}>

            {({loading, error, data}) => {

                if (loading) return <h1>Loading...</h1>;
                if (error) return <h1>error..</h1>;

                return (

                    data && data.userList.map((item, index) =>

                        <h1>UserName is{item.userName}</h1>
                    )
                )


            }}
        </Query>
    )

}

export default UserList;