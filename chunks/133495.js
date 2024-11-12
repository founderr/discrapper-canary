var r = n(531478).codes.ERR_STREAM_PREMATURE_CLOSE;
function i() {}
e.exports = function e(t, n, a) {
    if ('function' == typeof n) return e(t, null, n);
    !n && (n = {}),
        (s = a || i),
        (o = !1),
        (a = function () {
            if (!o) {
                o = !0;
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                s.apply(this, t);
            }
        });
    var s,
        o,
        l,
        u = n.readable || (!1 !== n.readable && t.readable),
        c = n.writable || (!1 !== n.writable && t.writable),
        d = function () {
            !t.writable && _();
        },
        f = t._writableState && t._writableState.finished,
        _ = function () {
            (c = !1), (f = !0), !u && a.call(t);
        },
        p = t._readableState && t._readableState.endEmitted,
        h = function () {
            (u = !1), (p = !0), !c && a.call(t);
        },
        m = function (e) {
            a.call(t, e);
        },
        g = function () {
            var e;
            return u && !p ? ((!t._readableState || !t._readableState.ended) && (e = new r()), a.call(t, e)) : c && !f ? ((!t._writableState || !t._writableState.ended) && (e = new r()), a.call(t, e)) : void 0;
        },
        E = function () {
            t.req.on('finish', _);
        };
    if ((l = t).setHeader && 'function' == typeof l.abort) t.on('complete', _), t.on('abort', g), t.req ? E() : t.on('request', E);
    else c && !t._writableState && (t.on('end', d), t.on('close', d));
    return (
        t.on('end', h),
        t.on('finish', _),
        !1 !== n.error && t.on('error', m),
        t.on('close', g),
        function () {
            t.removeListener('complete', _), t.removeListener('abort', g), t.removeListener('request', E), t.req && t.req.removeListener('finish', _), t.removeListener('end', d), t.removeListener('close', d), t.removeListener('finish', _), t.removeListener('end', h), t.removeListener('error', m), t.removeListener('close', g);
        }
    );
};
