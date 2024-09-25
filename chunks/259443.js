n.d(t, {
    Y: function () {
        return l;
    },
    _: function () {
        return s;
    }
});
var r = n(47120);
var i = n(247071);
function a(e, t, n) {
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
let o = () => {};
function s(e) {
    o = e;
}
class l {
    constructor(e = 'default') {
        var t = this;
        a(this, 'name', void 0),
            a(this, 'logDangerously', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'log', e, ...r);
            }),
            a(this, 'log', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.c)(e, ...r), o(t.name, 'log', e, ...r);
            }),
            a(this, 'verboseDangerously', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'debug', e, ...r);
            }),
            a(this, 'verbose', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.c)(e, ...r), o(t.name, 'debug', e, ...r);
            }),
            a(this, 'info', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.c)(e, ...r), o(t.name, 'info', e, ...r);
            }),
            a(this, 'warn', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.c)(e, ...r), o(t.name, 'warn', e, ...r);
            }),
            a(this, 'error', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                (0, i.c)(e, ...r), o(t.name, 'error', e, ...r);
            }),
            a(this, 'trace', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'trace', e, ...r);
            }),
            a(this, 'time', (e, t) => {
                let n = Date.now(),
                    r = t();
                return this.log(e, Date.now() - n), r;
            }),
            a(this, 'fileOnly', function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                o(t.name, 'file-only', e, ...r);
            }),
            (this.name = e);
    }
}
