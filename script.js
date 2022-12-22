     function copy(){
        var code= document.getElementById('text');
        code.select();
        document.execCommand("copy");
        // document.getElementById("show").innerHTML="Copy : "+'"'+input.value+'"';
      }