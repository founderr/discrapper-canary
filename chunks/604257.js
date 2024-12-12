e.exports = function (e) {
    return function (t, r, a) {
        for (var n = -1, _ = Object(t), o = a(t), E = o.length; E--; ) {
            var i = o[e ? E : ++n];
            if (!1 === r(_[i], i, _)) break;
        }
        return t;
    };
};
