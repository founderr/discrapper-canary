var i = r(119352),
    a = {
        y: function (e, n) {
            var r = e.getUTCFullYear(),
                a = r > 0 ? r : 1 - r;
            return (0, i.Z)('yy' === n ? a % 100 : a, n.length);
        },
        M: function (e, n) {
            var r = e.getUTCMonth();
            return 'M' === n ? String(r + 1) : (0, i.Z)(r + 1, 2);
        },
        d: function (e, n) {
            return (0, i.Z)(e.getUTCDate(), n.length);
        },
        a: function (e, n) {
            var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
            switch (n) {
                case 'a':
                case 'aa':
                    return r.toUpperCase();
                case 'aaa':
                    return r;
                case 'aaaaa':
                    return r[0];
                default:
                    return 'am' === r ? 'a.m.' : 'p.m.';
            }
        },
        h: function (e, n) {
            return (0, i.Z)(e.getUTCHours() % 12 || 12, n.length);
        },
        H: function (e, n) {
            return (0, i.Z)(e.getUTCHours(), n.length);
        },
        m: function (e, n) {
            return (0, i.Z)(e.getUTCMinutes(), n.length);
        },
        s: function (e, n) {
            return (0, i.Z)(e.getUTCSeconds(), n.length);
        },
        S: function (e, n) {
            var r = n.length,
                a = Math.floor(e.getUTCMilliseconds() * Math.pow(10, r - 3));
            return (0, i.Z)(a, n.length);
        }
    };
n.Z = a;
