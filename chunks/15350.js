r.d(n, {
    S: function () {
        return o;
    }
});
var i = r(653041);
var a = r(285651),
    s = r(138421);
let o = (e, n, r) => {
    if ('' === e) return null;
    let i = [],
        o = [];
    return (
        (0, s.WL)(e).forEach((e) => {
            let s = (0, a.cO)(e, n, r);
            s === a.eb.SENDABLE ? i.push(e) : s === a.eb.SENDABLE_WITH_PREMIUM && o.push(e);
        }),
        {
            sendable: i,
            sendableWithPremium: o
        }
    );
};
