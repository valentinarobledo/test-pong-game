 

function permAlone(word) {
    if(word.length === 1){
        return 1;
    }
  
   function getCombination(word){
        var resp = [];
        
        var letter = /([a-z])\1/i; 
        
        if(word.length === 1){
            return word;
        }
        
        for(var i = 0; i<word.length; i++){

        var tempword = word.substring(0, i) + word.substring(i+1); 
        var char = word[i]; 
        var combinations = getCombination(tempword);

        for(var j = 0; j<combinations.length; j++){
            if(!letter.test(char + combinations[j]) ){
            resp.push(char + combinations[j]); 
            }
        } 

    }

    return resp;
  }
  
  var comb = getCombination(word);
  console.log(comb.length);
  return comb.length;
 
}

permAlone('aab');
permAlone('aaa');
permAlone('aabb');
permAlone('abcdefa');
permAlone('abfdefa');
permAlone('zzzzzzz');
permAlone('a');
permAlone('aaab');
permAlone('aaabb');
