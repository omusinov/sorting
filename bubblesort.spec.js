describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts an array', function() {
        expect( bubbleSort([8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8])
    });
  });