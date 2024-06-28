/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let l1= str1.length;
  let l2=str2.length;
  if(l1!=l2)
  {
    return false;
  }

  let w1=str1.toLowerCase().split("").sort().join("");
  let w2=str2.toLowerCase().split("").sort().join("");

  for(let i=0; i<l1; i++)
  {
    if(w1[i]!=w2[i])
    {
      return false;
    }
  }
  return true;
}


let arr=[1,2,3];
function printnum(num)
{
  console.log(num);
}

arr.forEach(printnum);
module.exports = isAnagram;
