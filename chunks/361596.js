var a = r(915646),
    n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    _ = /\\(\\)?/g,
    o = a(function (e) {
        var t = [];
        return (
            46 === e.charCodeAt(0) && t.push(''),
            e.replace(n, function (e, r, a, n) {
                t.push(a ? n.replace(_, '$1') : r || e);
            }),
            t
        );
    });
e.exports = o;
