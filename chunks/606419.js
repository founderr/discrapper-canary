function n(e) {
    if (e) return r(e);
}
function r(e) {
    for (var r in n.prototype) e[r] = n.prototype[r];
    return e;
}
(e.exports = n),
    (n.prototype.on = n.prototype.addEventListener =
        function (e, n) {
            return (this._callbacks = this._callbacks || {}), (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(n), this;
        }),
    (n.prototype.once = function (e, n) {
        function r() {
            this.off(e, r), n.apply(this, arguments);
        }
        return (r.fn = n), this.on(e, r), this;
    }),
    (n.prototype.off =
        n.prototype.removeListener =
        n.prototype.removeAllListeners =
        n.prototype.removeEventListener =
            function (e, n) {
                if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
                var r,
                    i = this._callbacks['$' + e];
                if (!i) return this;
                if (1 == arguments.length) return delete this._callbacks['$' + e], this;
                for (var a = 0; a < i.length; a++)
                    if ((r = i[a]) === n || r.fn === n) {
                        i.splice(a, 1);
                        break;
                    }
                return 0 === i.length && delete this._callbacks['$' + e], this;
            }),
    (n.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        for (var n = Array(arguments.length - 1), r = this._callbacks['$' + e], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
        if (r) {
            r = r.slice(0);
            for (var i = 0, a = r.length; i < a; ++i) r[i].apply(this, n);
        }
        return this;
    }),
    (n.prototype.listeners = function (e) {
        return (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || [];
    }),
    (n.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
    });
