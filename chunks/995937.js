function n(e) {
    var n = this.has(e) && delete this.__data__[e];
    return (this.size -= n ? 1 : 0), n;
}
e.exports = n;
