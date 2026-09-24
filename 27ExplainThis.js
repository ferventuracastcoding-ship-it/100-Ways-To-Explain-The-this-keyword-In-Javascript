if (token.length > 3) {

    // The `this` keyword refers to the object that the current method belongs to.
    // In this example, `this.token` represents the search token and `this.title`
    // represents the product title stored inside the object. The `slice(0, 4)`
    // method takes the first four characters of the token, while `includes()`
    // checks whether those characters appear in the title. If they match,
    // 10 points are added to the product's score, increasing its search ranking.
    // For example, if token is "laptop", this.token.slice(0, 4) produces "lapt",
    // and the code checks whether this.title contains "lapt".

    if (this.title.includes(this.token.slice(0, 4))) {
        this.score += 10;
    }
}
// this.token.slice
// console.log(this);
