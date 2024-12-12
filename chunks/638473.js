var i = r(809948),
    a = r(670097);
function s(e, n) {
    var r = -1,
        s = (0, a.Z)(e) ? Array(e.length) : [];
    return (
        (0, i.Z)(e, function (e, i, a) {
            s[++r] = n(e, i, a);
        }),
        s
    );
}
n.Z = s;
