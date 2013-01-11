/*! //github.com/brito/grid.js/blob/master/README.md */
function grid () {

    /** a mix of assert, error and info
     * @param something {truthy} */
    function recognize ( 
            something // a test (truthy)
            // arguments joined and appended
    ){ if (console)
       // output
       console
       // TODO add delta and warn, debug, dir
       [ ['error','info'] [+!!something] ] (
                // a brute join
               [].join.call(arguments,' ')); }

    /* if tests */
    try { throw 'ಠ_ಠ' }
    catch (e){
      if (console) 
          recognize ('Grid online ', new Date)
      else
          alert(e) }
    /**/
}