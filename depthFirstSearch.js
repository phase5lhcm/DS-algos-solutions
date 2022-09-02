// Given an array of names, traverse a graph of nodes (where each node represents a name in the array) using depth first search and 
// output the names from left to right

const depthfirstSearch = (rootVal) =>{
   
    const pointer = 0;
     // define a stack that whose first value is your root
    const stack = [rootVal];
     while (stack > 0){
         // start by removing the top element in your stack
         const currentElement = stack.pop();
         console.log("Current node", currentElement);

         // now, we look at the children of the currentElement by adding them to the stack
         if(currentElement.left)
     }
}