// 1. Variable var , let , const :
function variables(){
// 1.var
    console.log("1. var has a functioned scope ");
    var a = 1;
    console.log("var a =",a);
    a = 2;
    console.log("a =", a)// reasigne value
    var a = 3;
    console.log("var a =", a) //redifine
    function myFuncVar(){
        var var_temp = 4
        console.log("Inside function a : ",a)
    }
    myFuncVar()
    // console.log(let_temp)   // This will Throw error because outside a function

// 2.let
    console.log("\n2. let has a block scope ");
    let b = 2;
    console.log("b =",b);// reasigne value
    b = 2;
    /*console.log("b =", b)
    var b = 3;
    console.log("var b =", b) */ //but cannot be redefine in same block like this this will thrown an error
    function myFuncLet(){
        let let_temp = 4;
        console.log("Inside function b : ",b)
    }
    myFuncVar()
   //console.log(let_temp)   //This will Throw error because outside a block

// 3.const
    console.log("\n3. const has a block scope ");
    const c = 1;
    console.log("const c = ",1);
    /*c = 2;
    console.log("c = ",1);*/ //This Will throw error cannot reasign in same scome
    /*const c = 4;
    console.log("const c = ",c)*/ // This will Throw error can not redefine const in same scome
    function myFuncConst(){
        const const_temp = 4;
        console.log("Inside function c : ",c)
    }
    myFuncConst()
    // console.log(const_temp)   //This will Throw error because outside a block
}
// variables()






     



