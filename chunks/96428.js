r.d(n, {
    N: function () {
        return i;
    }
});
var i = (function () {
    function e(e, n, r, i) {
        return (this.x = e), (this.y = n), (this.width = r), (this.height = i), (this.top = this.y), (this.left = this.x), (this.bottom = this.top + this.height), (this.right = this.left + this.width), Object.freeze(this);
    }
    return (
        (e.prototype.toJSON = function () {
            var e = this;
            return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height
            };
        }),
        (e.fromRect = function (n) {
            return new e(n.x, n.y, n.width, n.height);
        }),
        e
    );
})();
