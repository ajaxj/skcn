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
    hello1:{
      name:'args hello',
      description:'加了参数的',
      type:GraphQLString,   //返回的类型
      args:{
        //参数
        name:{
          type:GraphQLString,
          defaultValue:'Eric',    //默认值
        }
      },
      resolve(parentValue,args,request){
        return "hello world " + args.name + " !";
      }

    },
    person:{
      name:'personQuery',
      description:'多个参数',
      args:{
        name:{
          type:GraphQLString,
          defaultValue:'Eric'
        },
        age:{
          type:GraphQLInt,
          defaultValue:0
        }
      },
      type:GraphQLString,
      resolve(parentValue,args,request){
        return "person is " + args.name + " age is " + args.age;
      }
    },
    person1:{
      name:'personQuery',
      description:'多个参数和多个返回类型',
      args:{
        name:{
          type:GraphQLString,
          defaultValue:'ajaxj',
        },
        age:{
          type:GraphQLInt,
          defaultValue:0
        }
      },
      type:new GraphQLObjectType({
        //这里定义查询结果包括name,age,sex三个字段，并且都有不同类型
        //查询时可以返回需要的字段
        //{
        // 	person1(name:"ABC"){
        // 	  name,
        // 	}
        // }
        name:'person1', //必须加上name
        fields:{
          name:{
            type:GraphQLString
          },
          age:{
            type:GraphQLInt
          },
        }
      }),
      resolve(parentValue,args,request){
        return {
          name: args.name,
          age:args.age
        }
      }

    }

  }
});


module.exports = new GraphQLSchema({
  query:queryObj
});
