var r = n(821819),
    i = n(735471),
    a = /#|\.prototype\./,
    o = function (e, t) {
        var n = l[s(e)];
        return n === c || (n !== u && (i(t) ? r(t) : !!t));
    },
    s = (o.normalize = function (e) {
        return String(e).replace(a, '.').toLowerCase();
    }),
    l = (o.data = {}),
    u = (o.NATIVE = 'N'),
    c = (o.POLYFILL = 'P');
e.exports = o;
