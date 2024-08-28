var n = r(936940),
    a = r(354848),
    o = /#|\.prototype\./,
    i = function (e, t) {
        var r = E[_(e)];
        return r === c || (r !== s && (a(t) ? n(t) : !!t));
    },
    _ = (i.normalize = function (e) {
        return String(e).replace(o, '.').toLowerCase();
    }),
    E = (i.data = {}),
    s = (i.NATIVE = 'N'),
    c = (i.POLYFILL = 'P');
e.exports = i;
