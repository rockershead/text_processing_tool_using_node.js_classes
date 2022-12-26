const processor=class{

constructor(reference_table,offset_char){
   
    this.reference_table=reference_table
    this.offset_char=offset_char

}

  search(arr,target){

  
    for(var i=0;i<arr.length;i++)
    {
     if(arr[i]==target)
     {
         return i
     }
    }
   
   
   
   
   }
   

  encode(plainText){

    var encoded_string=this.offset_char
  var offset_char_index=this.search(this.reference_table,this.offset_char)    //Number
  

for(var i=0;i<plainText.length;i++)
{
  var index_of_char=this.search(this.reference_table,plainText[i])   //Number
 
   
  
  if(index_of_char!=undefined)
  {
  var new_index_of_char=index_of_char-offset_char_index

 if(new_index_of_char<0)
 {
   new_index_of_char=this.reference_table.length+new_index_of_char   //since new_index_of_char is negative
   
   encoded_string=encoded_string+this.reference_table[new_index_of_char]

 }
  else
  {  
    encoded_string=encoded_string+this.reference_table[new_index_of_char]
  }

}

else
{  //any charaacter not in ref table will be added in as the same character
   encoded_string=encoded_string+plainText[i]
}



}

return encoded_string
     

  }


  decode(encodedText){

    var offset_char=encodedText[0]
    var original_string=''
    var offset_char_index=this.search(this.reference_table,offset_char)    //Number
    
    for(var i=1;i<encodedText.length;i++)
    {
      var index_of_char=this.search(this.reference_table,encodedText[i])   //Number
      
       
      
      if(index_of_char!=undefined)
      {
      var new_index_of_char=index_of_char+offset_char_index
    
     if(new_index_of_char>this.reference_table.length-1)
     {
       difference=new_index_of_char-(this.reference_table.length-1)
       var new_index_of_char=difference-1
       
       original_string=original_string+this.reference_table[new_index_of_char]
    
     }
      else
      {  
        original_string=original_string+this.reference_table[new_index_of_char]
      }
    
    }
    
    else
    {  //any charaacter not in ref table will be added in as the same character
       original_string=original_string+encodedText[i]
    }
    
    
    
    }
    
    return original_string
    



  }



}




const ref=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                       '0','1','2','3','4','5','6','7','8','9',
                       '(',')','*','+',',','-','.','/']


const plaintext='HELLO WORLD'

const encoded_text='BGDKKN VNQKC'

//test
console.log(new processor(ref,'F').encode(plaintext))
console.log(new processor(ref).decode(encoded_text))
