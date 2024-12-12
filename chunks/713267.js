r.d(n, {
    O: function () {
        return a;
    },
    Z: function () {
        return i;
    }
});
var i = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
    a = (function () {
        function e(e, n) {
            if (0 === n) throw Error("Can't create weekday with n == 0");
            (this.weekday = e), (this.n = n);
        }
        return (
            (e.fromStr = function (n) {
                return new e(i.indexOf(n));
            }),
            (e.prototype.nth = function (n) {
                return this.n === n ? this : new e(this.weekday, n);
            }),
            (e.prototype.equals = function (e) {
                return this.weekday === e.weekday && this.n === e.n;
            }),
            (e.prototype.toString = function () {
                var e = i[this.weekday];
                return this.n && (e = (this.n > 0 ? '+' : '') + String(this.n) + e), e;
            }),
            (e.prototype.getJsWeekday = function () {
                return 6 === this.weekday ? 0 : this.weekday + 1;
            }),
            e
        );
    })();
