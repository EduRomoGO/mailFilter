
/*
TODO LIST
   f([]) -> []
   f(['a@a.c']) -> ['a@a.c']
   f(['ab@ab.c']) -> ['ab@ab.c']
   f(['@ac']) -> 'The input array did not contain any valid email'
   f(['@ac','s']) -> 'The input array did not contain any valid email'
   f(['.ac','s']) -> 'The input array did not contain any valid email'
   f(['a@a.c','s']) -> ['a@a.c'] 
*/


describe("The mail filter", function(){

  it("should return an empty list, if receive and empty list to filter", function(){
      expect(filter([])).toEqual([]);
  });

  it("should return an empty list, if receive a mail without an @ symbol", function(){
      expect(filter(['a'])).toEqual([]);
  });

  it("should return an empty list, if receive a mail without a . symbol", function(){
      expect(filter(['a@'])).toEqual([]);
  });

  it("should return an empty list, if receive a mail where the . comes before the @", function(){
      expect(filter(['a.@'])).toEqual([]);
  });

  it("if receives a valid mail, should return this valid mail", function(){
      expect(filter(['a@.'])).toEqual(['a@.']);
  });

  it("if receives one valid mail and other invalid, should return the valid mail", function(){
      expect(filter(['a@.','b.'])).toEqual(['a@.']);
  });

});
