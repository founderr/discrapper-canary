var i = r(690244),
    a = r(706165),
    s = r(478497)(),
    o = i('%TypeError%'),
    l = {
        assert: function (e, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof n) throw new o('`slot` must be a string');
            if ((s.assert(e), !l.has(e, n))) throw new o('`' + n + '` is not present on `O`');
        },
        get: function (e, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof n) throw new o('`slot` must be a string');
            var r = s.get(e);
            return r && r['$' + n];
        },
        has: function (e, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof n) throw new o('`slot` must be a string');
            var r = s.get(e);
            return !!r && a(r, '$' + n);
        },
        set: function (e, n, r) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof n) throw new o('`slot` must be a string');
            var i = s.get(e);
            !i && ((i = {}), s.set(e, i)), (i['$' + n] = r);
        }
    };
Object.freeze && Object.freeze(l), (e.exports = l);
