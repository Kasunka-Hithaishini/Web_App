//Unit testing
const assert = require('assert');
const { ValidateSignUp } = require('../Html/SignUp.html');

describe('the ValidateSignUp function', () => {
    it('should give the correct message', () => {
        const data1 = window.alert("Please complete filling your details");
        const data2=window.alert("Your password should contain only six characters");
        const data3 = window.alert("Please submit your form now");
        if (fname == "" || fdob=="" || fCno=="" || fpwd=="" ) {
            const result1 = ValidateSignUp()                        
            }
        
        else if(fpwd.length!=6){
            const result2 = ValidateSignUp() 
           
        }

        else{
            const result3 = ValidateSignUp() 
            
         }
         assert.equal(result1,data1)
         assert.equal(result2,data2)
         assert.equal(result3,data3)
         
    })
})
