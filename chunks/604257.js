e.exports = function (e) {
    return function (t, r, n) {
        for (var a = -1, _ = Object(t), o = n(t), E = o.length; E--; ) {
            var i = o[e ? E : ++a];
            if (!1 === r(_[i], i, _)) break;
        }
        return t;
    };
};
