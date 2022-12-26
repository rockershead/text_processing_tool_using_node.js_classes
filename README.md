# text_processing_tool_using_node.js_classes

This is an illustration of how to use OOP in node.js.
This is an encoder that takes in a plaintext and 
encode it to another obfuscated string. The logic of the 
encoding / decoding is given below:

Reference table:
['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                       '0','1','2','3','4','5','6','7','8','9',
                       '(',')','*','+',',','-','.','/']

Choose any character in the reference table as the offset. 
The first character of the encoded message will be the 
offset character. Any character not in the reference table 
will mapped back to the same character.
For example, if the offset character is B, the entire table 
will shift by 1(based on the index in array) element down.
