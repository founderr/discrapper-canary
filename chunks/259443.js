n.d(t, {
    Y: function () {
        return o;
    },
    _: function () {
        return s;
    }
}),
    n(47120);
var r = n(247071);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = () => {};
function s(e) {
    a = e;
}
class o {
    setOnLogFn(e) {
        this.onLogFn = e;
    }
    constructor(e = 'default') {
        var t = this;
        i(this, 'name', void 0),
            i(this, 'onLogFn', null),
            i(this, 'logDangerously', function (e) {
                for (var n, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                a(t.name, 'log', e, ...i), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'log', e, ...i);
            }),
            i(this, 'log', function (e) {
                for (var n, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                (0, r.c)(e, ...s), a(t.name, 'log', e, ...s), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'log', e, ...s);
            }),
            i(this, 'verboseDangerously', function (e) {
                for (var n, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                a(t.name, 'debug', e, ...i), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'debug', e, ...i);
            }),
            i(this, 'verbose', function (e) {
                for (var n, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                (0, r.c)(e, ...s), a(t.name, 'debug', e, ...s), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'debug', e, ...s);
            }),
            i(this, 'info', function (e) {
                for (var n, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                (0, r.c)(e, ...s), a(t.name, 'info', e, ...s), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'info', e, ...s);
            }),
            i(this, 'warn', function (e) {
                for (var n, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                (0, r.c)(e, ...s), a(t.name, 'warn', e, ...s), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'warn', e, ...s);
            }),
            i(this, 'error', function (e) {
                for (var n, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
                (0, r.c)(e, ...s), a(t.name, 'error', e, ...s), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'error', e, ...s);
            }),
            i(this, 'trace', function (e) {
                for (var n, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                a(t.name, 'trace', e, ...i), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'trace', e, ...i);
            }),
            i(this, 'time', (e, t) => {
                let n = Date.now(),
                    r = t();
                return this.log(e, Date.now() - n), r;
            }),
            i(this, 'fileOnly', function (e) {
                for (var n, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                a(t.name, 'file-only', e, ...i), null === (n = t.onLogFn) || void 0 === n || n.call(t, t.name, 'file-only', e, ...i);
            }),
            (this.name = e);
    }
}
