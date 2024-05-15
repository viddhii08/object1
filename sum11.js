let book = {
    title : "Harry Potter",
    author : "J.K Rowling",
    Pages : 400,
    read : function(){
        console.log("Reading" +" " + this.title +" "+ "by "+" " + this.author)
    }
}
book.read();

