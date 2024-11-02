e.exports = function (e) {
    return function (t, r, n) {
        for (var a = -1, _ = Object(t), o = n(t), i = o.length; i--; ) {
            var E = o[e ? i : ++a];
            if (!1 === r(_[E], E, _)) break;
        }
        return t;
    };
};
