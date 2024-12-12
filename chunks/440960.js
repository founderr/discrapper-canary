var i = r(709998),
    a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    s = /\\(\\)?/g,
    o = i(function (e) {
        var n = [];
        return (
            46 === e.charCodeAt(0) && n.push(''),
            e.replace(a, function (e, r, i, a) {
                n.push(i ? a.replace(s, '$1') : r || e);
            }),
            n
        );
    });
e.exports = o;
