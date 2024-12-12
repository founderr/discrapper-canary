var r = (function () {
    function e(e, n) {
        (this.minDate = null), (this.maxDate = null), (this._result = []), (this.total = 0), (this.method = e), (this.args = n), 'between' === e ? ((this.maxDate = n.inc ? n.before : new Date(n.before.getTime() - 1)), (this.minDate = n.inc ? n.after : new Date(n.after.getTime() + 1))) : 'before' === e ? (this.maxDate = n.inc ? n.dt : new Date(n.dt.getTime() - 1)) : 'after' === e && (this.minDate = n.inc ? n.dt : new Date(n.dt.getTime() + 1));
    }
    return (
        (e.prototype.accept = function (e) {
            ++this.total;
            var n = this.minDate && e < this.minDate,
                r = this.maxDate && e > this.maxDate;
            if ('between' === this.method) {
                if (n) return !0;
                if (r) return !1;
            } else if ('before' === this.method) {
                if (r) return !1;
            } else if ('after' === this.method) return !!n || (this.add(e), !1);
            return this.add(e);
        }),
        (e.prototype.add = function (e) {
            return this._result.push(e), !0;
        }),
        (e.prototype.getValue = function () {
            var e = this._result;
            switch (this.method) {
                case 'all':
                case 'between':
                    return e;
                default:
                    return e.length ? e[e.length - 1] : null;
            }
        }),
        (e.prototype.clone = function () {
            return new e(this.method, this.args);
        }),
        e
    );
})();
n.Z = r;
