let i = n;
(i._reverse = function (e) {
    let n = {};
    return (
        Object.keys(e).forEach(function (r) {
            (0 | r) == r && (r |= 0), (n[e[r]] = r);
        }),
        n
    );
}),
    (i.der = r(375990));
