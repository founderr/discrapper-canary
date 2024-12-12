r.d(n, {
    Bl: function () {
        return c;
    },
    Yd: function () {
        return d;
    },
    _n: function () {
        return l;
    }
});
var i = r(47120);
var a = r(247071);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let o = () => {};
function l(e) {
    o = e;
}
let u = () => {};
function c(e) {
    u = e;
}
class d {
    enableNativeLogger(e) {
        this.nativeLoggerEnabled = e;
    }
    constructor(e = 'default') {
        var n = this;
        s(this, 'name', void 0),
            s(this, 'nativeLoggerEnabled', void 0),
            s(this, 'logDangerously', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                o(n.name, 'log', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'log', e, ...i));
            }),
            s(this, 'log', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                (0, a.c)(e, ...i), o(n.name, 'log', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'log', e, ...i));
            }),
            s(this, 'verboseDangerously', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                o(n.name, 'debug', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'debug', e, ...i));
            }),
            s(this, 'verbose', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                (0, a.c)(e, ...i), o(n.name, 'debug', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'debug', e, ...i));
            }),
            s(this, 'info', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                (0, a.c)(e, ...i), o(n.name, 'info', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'info', e, ...i));
            }),
            s(this, 'warn', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                (0, a.c)(e, ...i), o(n.name, 'warn', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'warn', e, ...i));
            }),
            s(this, 'error', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                (0, a.c)(e, ...i), o(n.name, 'error', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'error', e, ...i));
            }),
            s(this, 'trace', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                o(n.name, 'trace', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'trace', e, ...i));
            }),
            s(this, 'time', (e, n) => {
                let r = Date.now(),
                    i = n();
                return this.log(e, Date.now() - r), i;
            }),
            s(this, 'fileOnly', function (e) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                o(n.name, 'file-only', e, ...i), n.nativeLoggerEnabled && (null == u || u(n.name, 'file-only', e, ...i));
            }),
            (this.name = e),
            (this.nativeLoggerEnabled = !1);
    }
}
