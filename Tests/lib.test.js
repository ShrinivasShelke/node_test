const lib=require("../lib")

//to test number

describe("absolue",()=>{

    it("absolute-should return postive number ",()=>{      //test
        const result=lib.absolute(1);
        expect(result).toBe(1)
    
    
    })
    
    it("absolute-should return negative  number ",()=>{
        const result=lib.absolute(-1);
        expect(result).toBe(1)
    
    })
    
    it("absolute-should return zero number ",()=>{
        const result=lib.absolute(0);
        expect(result).toBe(0)
    
    })

})

//to test string

describe("greets",()=>{
    it("greets-string testing",()=>{
        const result =lib.greets('mosh');
        // expect(result).toBe("Welcome mosh");
        expect(result).toMatch(/ mosh/)
    })
})

//to test array

describe("getCurrencies",()=>{
    it("to check currency- Array",()=>{
        const result=lib.getCurrencies();

        // general way to check array
        expect(result).toBeDefined();
        expect(result).not.toBeNull();

        //exactly to check aaray
        expect(result[0]).toBe("usd");
        expect(result[1]).toBe("Rup");
        expect(result[2]).toBe("yarn")

        //prope way
        expect(result).toContain("usd");
        expect(result).toContain("Rup");
        expect(result).toContain("yarn")


        expect(result).toEqual(expect.arrayContaining(["Rup","yarn","usd"]))
    })
})


//to test object

describe("getObject",()=>{
    it("to check object",()=>{
        const result=lib.getObject();
        // expect(result).toEqual({"id":1,"name":"shree"})
        expect(result).toMatchObject({"id":1,"name":"shree"});

        expect(result).toHaveProperty("id",1)
    })
})


// to check  expception

describe("getException",()=>{
    it("should throw error when result is falsy",()=>{
        const args=[null,undefined,NaN,"",0,false]
        args.forEach((a)=>{
            expect(()=>{lib.getException(a)}).toThrow()

        })
    })

    it("should return object if valid username send",()=>{
        const result=lib.getException("Mosh")
        expect(result).toMatchObject({username:"Mosh"});
        expect(result.id).toBeGreaterThan(0)
    })
})