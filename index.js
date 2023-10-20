class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g,"")
  } 
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    let result = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return result.join(' ');
  }
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }      
 }
const formatter = Formatter.capitalize("crocodile")
const sanitizer = Formatter.sanitize("ca$@#tching cold")
const titleizer = Formatter.titleize("Maurice a an but of and for at by from end")