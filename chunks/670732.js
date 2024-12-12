r.d(n, {
    N: function () {
        return a;
    }
});
var i = r(721056),
    a = (function () {
        function e(e, n, r, a) {
            return (this.x = e), (this.y = n), (this.width = r), (this.height = a), (this.top = this.y), (this.left = this.x), (this.bottom = this.top + this.height), (this.right = this.left + this.width), (0, i.v)(this);
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
