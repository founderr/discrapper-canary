var r = n(444675);
!(function (e, t) {
    if (!e.setImmediate) {
        var n,
            i = 1,
            a = {},
            o = !1,
            s = e.document;
        var l = Object.getPrototypeOf && Object.getPrototypeOf(e);
        (l = l && l.setTimeout ? l : e), '[object process]' === {}.toString.call(e.process) ? E() : f() ? h() : e.MessageChannel ? p() : s && 'onreadystatechange' in s.createElement('script') ? m() : I(), (l.setImmediate = u), (l.clearImmediate = c);
    }
    function u(e) {
        'function' != typeof e && (e = Function('' + e));
        for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
        var o = {
            callback: e,
            args: t
        };
        return (a[i] = o), n(i), i++;
    }
    function c(e) {
        delete a[e];
    }
    function d(e) {
        var n = e.callback,
            r = e.args;
        switch (r.length) {
            case 0:
                n();
                break;
            case 1:
                n(r[0]);
                break;
            case 2:
                n(r[0], r[1]);
                break;
            case 3:
                n(r[0], r[1], r[2]);
                break;
            default:
                n.apply(t, r);
        }
    }
    function _(e) {
        if (o) setTimeout(_, 0, e);
        else {
            var t = a[e];
            if (t) {
                o = !0;
                try {
                    d(t);
                } finally {
                    c(e), (o = !1);
                }
            }
        }
    }
    function E() {
        n = function (e) {
            r.nextTick(function () {
                _(e);
            });
        };
    }
    function f() {
        if (e.postMessage && !e.importScripts) {
            var t = !0,
                n = e.onmessage;
            return (
                (e.onmessage = function () {
                    t = !1;
                }),
                e.postMessage('', '*'),
                (e.onmessage = n),
                t
            );
        }
    }
    function h() {
        var t = 'setImmediate$' + Math.random() + '$',
            r = function (n) {
                n.source === e && 'string' == typeof n.data && 0 === n.data.indexOf(t) && _(+n.data.slice(t.length));
            };
        e.addEventListener ? e.addEventListener('message', r, !1) : e.attachEvent('onmessage', r),
            (n = function (n) {
                e.postMessage(t + n, '*');
            });
    }
    function p() {
        var e = new MessageChannel();
        (e.port1.onmessage = function (e) {
            _(e.data);
        }),
            (n = function (t) {
                e.port2.postMessage(t);
            });
    }
    function m() {
        var e = s.documentElement;
        n = function (t) {
            var n = s.createElement('script');
            (n.onreadystatechange = function () {
                _(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
            }),
                e.appendChild(n);
        };
    }
    function I() {
        n = function (e) {
            setTimeout(_, 0, e);
        };
    }
})('undefined' == typeof self ? (void 0 === n.g ? this : n.g) : self);
