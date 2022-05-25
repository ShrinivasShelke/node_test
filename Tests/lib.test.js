const lib=require("../lib")

// describe("absolue",()=>{

//     it("absolute-should return postive number ",()=>{
//         const result=lib.absolute(1);
//         expect(result).toBe(1)
    
    
//     })
    
//     it("absolute-should return negative  number ",()=>{
//         const result=lib.absolute(-1);
//         expect(result).toBe(1)
    
//     })
    
//     it("absolute-should return zero number ",()=>{
//         const result=lib.absolute(0);
//         expect(result).toBe(0)
    
//     })

// })

describe("greets",()=>{
    it("greets-string testing",()=>{
        const result =lib.greets('mosh');
        expect(result).toBe("Welcome mosh")
    })
})

