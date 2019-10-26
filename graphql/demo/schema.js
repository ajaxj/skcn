const {
        GraphQLSchema,
        GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLBoolean
} = require('graphql');


const queryObj = new GraphQLObjectType({
  name:'HolleWorldQuery',
  description:'介绍',
  fields:{
    //这里是Query的名字 查询名字叫hello，会返回字段hello world !
    hello:{
      type:GraphQLString,
      resolve(parentValue,args,request){
        return '返回一个字串';
      }
    },
    person:{
      type:GraphQLString,
      reduce(parentValue,args,request){
        return "返回另一个字串";
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query:queryObj
});
