var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var userModel = require('../models/user');

const userType = new GraphQLObjectType({
    name: "user",
    fields: () => {
        return {
            userName: {
                type: GraphQLString
            },
            address: {
                type: GraphQLString
            },
            id:{
                type:GraphQLString
            }
        }
    }
});

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: () => {
        return {
            userList: {
                type: new GraphQLList(userType),
                resolve: () => {
                    let data = userModel.find().exec();
                    if (!data) {
                         throw new Error("Try again..")
                    }
                    return data;
                }
            },
            user:{
                type:userType,
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve:(root,params)=>{
            
                    let data = userModel.findById(params.id).exec();
                    if (!data) {
                         throw new Error("Try again..")
                    }
                    return data;

                }
                
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => {
        return {
            addUserInfo: {
                type: userType,
                args: {
                    userName: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    address: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: (root, params) => {
                    console.log("kdkdkd", params)
                    const user = new userModel(params);
                    const update = user.save();
                    if (!update) {
                        throw new Error('Error');
                    }
                    return update

                }
            }
        }
    }
})

module.exports = new GraphQLSchema({query: queryType, mutation: mutation})
