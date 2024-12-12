var i = r(531478).codes.ERR_STREAM_PREMATURE_CLOSE;
function a(e) {
    var n = !1;
    return function () {
        if (!n) {
            n = !0;
            for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            e.apply(this, i);
        }
    };
}
function s() {}
function o(e) {
    return e.setHeader && 'function' == typeof e.abort;
}
function l(e, n, r) {
    if ('function' == typeof n) return l(e, null, n);
    !n && (n = {}), (r = a(r || s));
    var u = n.readable || (!1 !== n.readable && e.readable),
        c = n.writable || (!1 !== n.writable && e.writable),
        d = function () {
            !e.writable && _();
        },
        f = e._writableState && e._writableState.finished,
        _ = function () {
            (c = !1), (f = !0), !u && r.call(e);
        },
        h = e._readableState && e._readableState.endEmitted,
        p = function () {
            (u = !1), (h = !0), !c && r.call(e);
        },
        m = function (n) {
            r.call(e, n);
        },
        g = function () {
            var n;
            return u && !h ? ((!e._readableState || !e._readableState.ended) && (n = new i()), r.call(e, n)) : c && !f ? ((!e._writableState || !e._writableState.ended) && (n = new i()), r.call(e, n)) : void 0;
        },
        E = function () {
            e.req.on('finish', _);
        };
    return (
        o(e) ? (e.on('complete', _), e.on('abort', g), e.req ? E() : e.on('request', E)) : c && !e._writableState && (e.on('end', d), e.on('close', d)),
        e.on('end', p),
        e.on('finish', _),
        !1 !== n.error && e.on('error', m),
        e.on('close', g),
        function () {
            e.removeListener('complete', _), e.removeListener('abort', g), e.removeListener('request', E), e.req && e.req.removeListener('finish', _), e.removeListener('end', d), e.removeListener('close', d), e.removeListener('finish', _), e.removeListener('end', p), e.removeListener('error', m), e.removeListener('close', g);
        }
    );
}
e.exports = l;
