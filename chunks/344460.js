function n() {
    this._cache = [];
}
(n.prototype.add = function (e) {
    -1 === this._cache.indexOf(e) && this._cache.push(e);
}),
    (n.prototype.forEach = function (e) {
        this._cache.forEach(e);
    }),
    (e.exports = n);
