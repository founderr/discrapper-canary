n.d(t, {
    Z: function () {
        return u;
    }
});
var l = n(348327),
    a = n.n(l),
    r = n(392711),
    s = n.n(r),
    i = n(442837),
    o = n(566006),
    d = n(542578),
    c = n(981631);
function u(e) {
    var t, n;
    let { channelId: l, messageId: r, reaction: u } = e,
        m = (0, i.e7)(
            [d.Z],
            () => {
                let e = d.Z.getReactions(l, r, u.emoji, c.pTL, o.O.VOTE);
                return s().map(e, (e) => e);
            },
            [l, r, u.emoji],
            a()
        );
    return {
        reactors: m,
        hasMore: (null !== (n = null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0) > m.length
    };
}
