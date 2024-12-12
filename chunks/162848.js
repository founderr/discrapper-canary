r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(710659),
    a = r(812975),
    s = (function () {
        function e(e) {
            (this.done = !0), (this.rules = e);
        }
        return (
            (e.prototype.start = function (e) {
                return (this.text = e), (this.done = !1), this.nextSymbol();
            }),
            (e.prototype.isDone = function () {
                return this.done && null === this.symbol;
            }),
            (e.prototype.nextSymbol = function () {
                (this.symbol = null), (this.value = null);
                do {
                    if (this.done) return !1;
                    var e,
                        n,
                        r = void 0;
                    for (var i in ((e = null), this.rules)) {
                        var a = (r = this.rules[i]).exec(this.text);
                        a && (null === e || a[0].length > e[0].length) && ((e = a), (n = i));
                    }
                    if ((null != e && ((this.text = this.text.substr(e[0].length)), '' === this.text && (this.done = !0)), null == e)) {
                        (this.done = !0), (this.symbol = null), (this.value = null);
                        return;
                    }
                } while ('SKIP' === n);
                return (this.symbol = n), (this.value = e), !0;
            }),
            (e.prototype.accept = function (e) {
                if (this.symbol === e) {
                    if (this.value) {
                        var n = this.value;
                        return this.nextSymbol(), n;
                    }
                    return this.nextSymbol(), !0;
                }
                return !1;
            }),
            (e.prototype.acceptNumber = function () {
                return this.accept('number');
            }),
            (e.prototype.expect = function (e) {
                if (this.accept(e)) return !0;
                throw Error('expected ' + e + ' but found ' + this.symbol);
            }),
            e
        );
    })();
function o(e, n) {
    void 0 === n && (n = i.Z);
    var r = {},
        o = new s(n.tokens);
    if (!o.start(e)) return null;
    return l(), r;
    function l() {
        o.expect('every');
        var e = o.acceptNumber();
        if ((e && (r.interval = parseInt(e[0], 10)), o.isDone())) throw Error('Unexpected end');
        switch (o.symbol) {
            case 'day(s)':
                (r.freq = a.Ci.DAILY), o.nextSymbol() && (c(), p());
                break;
            case 'weekday(s)':
                (r.freq = a.Ci.WEEKLY), (r.byweekday = [a.Ci.MO, a.Ci.TU, a.Ci.WE, a.Ci.TH, a.Ci.FR]), o.nextSymbol(), p();
                break;
            case 'week(s)':
                (r.freq = a.Ci.WEEKLY), o.nextSymbol() && (u(), p());
                break;
            case 'hour(s)':
                (r.freq = a.Ci.HOURLY), o.nextSymbol() && (u(), p());
                break;
            case 'minute(s)':
                (r.freq = a.Ci.MINUTELY), o.nextSymbol() && (u(), p());
                break;
            case 'month(s)':
                (r.freq = a.Ci.MONTHLY), o.nextSymbol() && (u(), p());
                break;
            case 'year(s)':
                (r.freq = a.Ci.YEARLY), o.nextSymbol() && (u(), p());
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                r.freq = a.Ci.WEEKLY;
                var n = o.symbol.substr(0, 2).toUpperCase();
                if (((r.byweekday = [a.Ci[n]]), !o.nextSymbol())) return;
                for (; o.accept('comma'); ) {
                    if (o.isDone()) throw Error('Unexpected end');
                    var i = f();
                    if (!i) throw Error('Unexpected symbol ' + o.symbol + ', expected weekday');
                    r.byweekday.push(a.Ci[i]), o.nextSymbol();
                }
                h(), p();
                break;
            case 'january':
            case 'february':
            case 'march':
            case 'april':
            case 'may':
            case 'june':
            case 'july':
            case 'august':
            case 'september':
            case 'october':
            case 'november':
            case 'december':
                if (((r.freq = a.Ci.YEARLY), (r.bymonth = [d()]), !o.nextSymbol())) return;
                for (; o.accept('comma'); ) {
                    if (o.isDone()) throw Error('Unexpected end');
                    var s = d();
                    if (!s) throw Error('Unexpected symbol ' + o.symbol + ', expected month');
                    r.bymonth.push(s), o.nextSymbol();
                }
                u(), p();
                break;
            default:
                throw Error('Unknown symbol');
        }
    }
    function u() {
        var e = o.accept('on'),
            n = o.accept('the');
        if (e || n)
            do {
                var i = _(),
                    s = f(),
                    l = d();
                if (i) s ? (o.nextSymbol(), !r.byweekday && (r.byweekday = []), r.byweekday.push(a.Ci[s].nth(i))) : (!r.bymonthday && (r.bymonthday = []), r.bymonthday.push(i), o.accept('day(s)'));
                else if (s) o.nextSymbol(), !r.byweekday && (r.byweekday = []), r.byweekday.push(a.Ci[s]);
                else if ('weekday(s)' === o.symbol) o.nextSymbol(), !r.byweekday && (r.byweekday = [a.Ci.MO, a.Ci.TU, a.Ci.WE, a.Ci.TH, a.Ci.FR]);
                else if ('week(s)' === o.symbol) {
                    o.nextSymbol();
                    var u = o.acceptNumber();
                    if (!u) throw Error('Unexpected symbol ' + o.symbol + ', expected week number');
                    for (r.byweekno = [parseInt(u[0], 10)]; o.accept('comma'); ) {
                        if (!(u = o.acceptNumber())) throw Error('Unexpected symbol ' + o.symbol + '; expected monthday');
                        r.byweekno.push(parseInt(u[0], 10));
                    }
                } else {
                    if (!l) return;
                    o.nextSymbol(), !r.bymonth && (r.bymonth = []), r.bymonth.push(l);
                }
            } while (o.accept('comma') || o.accept('the') || o.accept('on'));
    }
    function c() {
        if (o.accept('at'))
            do {
                var e = o.acceptNumber();
                if (!e) throw Error('Unexpected symbol ' + o.symbol + ', expected hour');
                for (r.byhour = [parseInt(e[0], 10)]; o.accept('comma'); ) {
                    if (!(e = o.acceptNumber())) throw Error('Unexpected symbol ' + o.symbol + '; expected hour');
                    r.byhour.push(parseInt(e[0], 10));
                }
            } while (o.accept('comma') || o.accept('at'));
    }
    function d() {
        switch (o.symbol) {
            case 'january':
                return 1;
            case 'february':
                return 2;
            case 'march':
                return 3;
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'june':
                return 6;
            case 'july':
                return 7;
            case 'august':
                return 8;
            case 'september':
                return 9;
            case 'october':
                return 10;
            case 'november':
                return 11;
            case 'december':
                return 12;
            default:
                return !1;
        }
    }
    function f() {
        switch (o.symbol) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return o.symbol.substr(0, 2).toUpperCase();
            default:
                return !1;
        }
    }
    function _() {
        switch (o.symbol) {
            case 'last':
                return o.nextSymbol(), -1;
            case 'first':
                return o.nextSymbol(), 1;
            case 'second':
                return o.nextSymbol(), o.accept('last') ? -2 : 2;
            case 'third':
                return o.nextSymbol(), o.accept('last') ? -3 : 3;
            case 'nth':
                var e = parseInt(o.value[1], 10);
                if (e < -366 || e > 366) throw Error('Nth out of range: ' + e);
                return o.nextSymbol(), o.accept('last') ? -e : e;
            default:
                return !1;
        }
    }
    function h() {
        o.accept('on'), o.accept('the');
        var e = _();
        if (e)
            for (r.bymonthday = [e], o.nextSymbol(); o.accept('comma'); ) {
                if (!(e = _())) throw Error('Unexpected symbol ' + o.symbol + '; expected monthday');
                r.bymonthday.push(e), o.nextSymbol();
            }
    }
    function p() {
        if ('until' === o.symbol) {
            var e = Date.parse(o.text);
            if (!e) throw Error('Cannot parse until date:' + o.text);
            r.until = new Date(e);
        } else o.accept('for') && ((r.count = parseInt(o.value[0], 10)), o.expect('number'));
    }
}
