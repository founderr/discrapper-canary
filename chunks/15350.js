n.d(t, {
    S: function () {
        return o;
    }
});
var r = n(653041);
var i = n(285651),
    a = n(138421);
let o = (e, t, n) => {
    if ('' === e) return null;
    let r = [],
        o = [];
    return (
        (0, a.WL)(e).forEach((e) => {
            let a = (0, i.cO)(e, t, n);
            a === i.eb.SENDABLE ? r.push(e) : a === i.eb.SENDABLE_WITH_PREMIUM && o.push(e);
        }),
        {
            sendable: r,
            sendableWithPremium: o
        }
    );
};
