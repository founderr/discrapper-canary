var t,
    r,
    n,
    a = (e.exports = {});
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
    if (!!c && !!n) (c = !1), n.length ? (i = n.concat(i)) : (s = -1), i.length && u();
}
function u() {
    if (!c) {
        var e = E(l);
        c = !0;
        for (var t = i.length; t; ) {
            for (n = i, i = []; ++s < t; ) n && n[s].run();
            (s = -1), (t = i.length);
        }
        (n = null),
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
function I(e, t) {
    (this.fun = e), (this.array = t);
}
function R() {}
(a.nextTick = function (e) {
    var t = Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    i.push(new I(e, t)), 1 === i.length && !c && E(u);
}),
    (I.prototype.run = function () {
        this.fun.apply(null, this.array);
    }),
    (a.title = 'browser'),
    (a.browser = !0),
    (a.env = {}),
    (a.argv = []),
    (a.version = ''),
    (a.versions = {}),
    (a.on = R),
    (a.addListener = R),
    (a.once = R),
    (a.off = R),
    (a.removeListener = R),
    (a.removeAllListeners = R),
    (a.emit = R),
    (a.prependListener = R),
    (a.prependOnceListener = R),
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
