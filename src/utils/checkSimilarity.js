import React from 'react'

const checkSimilarity = (array1, array2, number, disposition) => {
    if(disposition === "avant") {
        for(var i = 0; i < number; i++) {
            if(array1[i] !== array2[i]) {
                return false;
            }
        }
        return true
    }
    
    if(disposition === "arriere") {
        var array2Length = array2.length - 1;
        var j = array2Length;
        for(var i = (number - 1); i >= 0; i--) {
            if(array1[i] !== array2[j]) {
                return false
            }
            j--;
        }
        return true;
    }
  }

export default checkSimilarity;