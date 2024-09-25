var r = n(531478).codes.ERR_STREAM_PREMATURE_CLOSE;
function i(e) {
    var t = !1;
    return function () {
        if (!t) {
            t = !0;
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            e.apply(this, r);
        }
    };
}
function a() {}
function o(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function s(e, t, n) {
    if ('function' == typeof t) return s(e, null, t);
    !t && (t = {}), (n = i(n || a));
    var l = t.readable || (!1 !== t.readable && e.readable),
        u = t.writable || (!1 !== t.writable && e.writable),
        c = function () {
            !e.writable && _();
        },
        d = e._writableState && e._writableState.finished,
        _ = function () {
            (u = !1), (d = !0), !l && n.call(e);
        },
        E = e._readableState && e._readableState.endEmitted,
        f = function () {
            (l = !1), (E = !0), !u && n.call(e);
        },
        h = function (t) {
            n.call(e, t);
        },
        p = function () {
            var t;
            return l && !E ? ((!e._readableState || !e._readableState.ended) && (t = new r()), n.call(e, t)) : u && !d ? ((!e._writableState || !e._writableState.ended) && (t = new r()), n.call(e, t)) : void 0;
        },
        m = function () {
            e.req.on('finish', _);
        };
    return (
        o(e) ? (e.on('complete', _), e.on('abort', p), e.req ? m() : e.on('request', m)) : u && !e._writableState && (e.on('end', c), e.on('close', c)),
        e.on('end', f),
        e.on('finish', _),
        !1 !== t.error && e.on('error', h),
        e.on('close', p),
        function () {
            e.removeListener('complete', _), e.removeListener('abort', p), e.removeListener('request', m), e.req && e.req.removeListener('finish', _), e.removeListener('end', c), e.removeListener('close', c), e.removeListener('finish', _), e.removeListener('end', f), e.removeListener('error', h), e.removeListener('close', p);
        }
    );
}
e.exports = s;
