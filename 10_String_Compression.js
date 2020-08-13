/*
Write a function to perform basic string compression. 
For example, the string “aabbbbccca” would become “a2b4c3a1”. 
(Can be solved by using Stack, but think about the possible solutions)
*/


//Iterate through the string and place each element into a new Obj.  
//  The key of the new Obj would be the element and the value would be
// a number that would increment each time that element was visited in the iteration

//After the iteration, we'll have a complete obj.  Each key will be a unique element of
// the string.  The key's value will be how many times the element occured in the string.   

// Now create a new empty string.   

//  Iterate over the new Obj. Place the key into the newString, then place the key's value   
// into the string.   


// Return newString