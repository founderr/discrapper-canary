var i = r(146150),
    a = (function (e) {
        function n(n, r, i) {
            var a = e.call(this, n, r) || this;
            return (a.iterator = i), a;
        }
        return (
            (0, i.ZT)(n, e),
            (n.prototype.add = function (e) {
                return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
            }),
            n
        );
    })(r(135891).Z);
n.Z = a;
