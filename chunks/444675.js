var n,
    r,
    i,
    a = (e.exports = {});
function s() {
    throw Error('setTimeout has not been defined');
}
function o() {
    throw Error('clearTimeout has not been defined');
}
function l(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === s || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
    try {
        return n(e, 0);
    } catch (r) {
        try {
            return n.call(null, e, 0);
        } catch (r) {
            return n.call(this, e, 0);
        }
    }
}
function u(e) {
    if (r === clearTimeout) return clearTimeout(e);
    if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
    try {
        return r(e);
    } catch (n) {
        try {
            return r.call(null, e);
        } catch (n) {
            return r.call(this, e);
        }
    }
}
!(function () {
    try {
        n = 'function' == typeof setTimeout ? setTimeout : s;
    } catch (e) {
        n = s;
    }
    try {
        r = 'function' == typeof clearTimeout ? clearTimeout : o;
    } catch (e) {
        r = o;
    }
})();
var c = [],
    d = !1,
    f = -1;
function _() {
    if (!!d && !!i) (d = !1), i.length ? (c = i.concat(c)) : (f = -1), c.length && h();
}
function h() {
    if (!d) {
        var e = l(_);
        d = !0;
        for (var n = c.length; n; ) {
            for (i = c, c = []; ++f < n; ) i && i[f].run();
            (f = -1), (n = c.length);
        }
        (i = null), (d = !1), u(e);
    }
}
function p(e, n) {
    (this.fun = e), (this.array = n);
}
function m() {}
(a.nextTick = function (e) {
    var n = Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    c.push(new p(e, n)), 1 === c.length && !d && l(h);
}),
    (p.prototype.run = function () {
        this.fun.apply(null, this.array);
    }),
    (a.title = 'browser'),
    (a.browser = !0),
    (a.env = {}),
    (a.argv = []),
    (a.version = ''),
    (a.versions = {}),
    (a.on = m),
    (a.addListener = m),
    (a.once = m),
    (a.off = m),
    (a.removeListener = m),
    (a.removeAllListeners = m),
    (a.emit = m),
    (a.prependListener = m),
    (a.prependOnceListener = m),
    (a.listeners = function (e) {
        return [];
    }),
    (a.binding = function (e) {
        throw Error('process.binding is not supported');
    }),
    (a.cwd = function () {
        return '/';
    }),
    (a.chdir = function (e) {
        throw Error('process.chdir is not supported');
    }),
    (a.umask = function () {
        return 0;
    });
