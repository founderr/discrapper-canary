var t,
    r,
    a,
    n = (e.exports = {});
function _() {
    throw Error('setTimeout has not been defined');
}
function o() {
    throw Error('clearTimeout has not been defined');
}
function E(e) {
    if (t === setTimeout) return setTimeout(e, 0);
    if ((t === _ || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
    try {
        return t(e, 0);
    } catch (r) {
        try {
            return t.call(null, e, 0);
        } catch (r) {
            return t.call(this, e, 0);
        }
    }
}
!(function () {
    try {
        t = 'function' == typeof setTimeout ? setTimeout : _;
    } catch (e) {
        t = _;
    }
    try {
        r = 'function' == typeof clearTimeout ? clearTimeout : o;
    } catch (e) {
        r = o;
    }
})();
var i = [],
    c = !1,
    s = -1;
function l() {
    if (!!c && !!a) (c = !1), a.length ? (i = a.concat(i)) : (s = -1), i.length && I();
}
function I() {
    if (!c) {
        var e = E(l);
        c = !0;
        for (var t = i.length; t; ) {
            for (a = i, i = []; ++s < t; ) a && a[s].run();
            (s = -1), (t = i.length);
        }
        (a = null),
            (c = !1),
            !(function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                try {
                    r(e);
                } catch (t) {
                    try {
                        return r.call(null, e);
                    } catch (t) {
                        return r.call(this, e);
                    }
                }
            })(e);
    }
}
function u(e, t) {
    (this.fun = e), (this.array = t);
}
function R() {}
(n.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    i.push(new u(e, t)), 1 === i.length && !c && E(I);
}),
    (u.prototype.run = function () {
        this.fun.apply(null, this.array);
    }),
    (n.title = 'browser'),
    (n.browser = !0),
    (n.env = {}),
    (n.argv = []),
    (n.version = ''),
    (n.versions = {}),
    (n.on = R),
    (n.addListener = R),
    (n.once = R),
    (n.off = R),
    (n.removeListener = R),
    (n.removeAllListeners = R),
    (n.emit = R),
    (n.prependListener = R),
    (n.prependOnceListener = R),
    (n.listeners = function (e) {
        return [];
    }),
    (n.binding = function (e) {
        throw Error('process.binding is not supported');
    }),
    (n.cwd = function () {
        return '/';
    }),
    (n.chdir = function (e) {
        throw Error('process.chdir is not supported');
    }),
    (n.umask = function () {
        return 0;
    });
