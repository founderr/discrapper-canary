var i = r(512722),
    s = r.n(i),
    a = r(442837),
    n = r(276444),
    l = r(388032);
t.Z = (e) => {
    let { numNewSelected: t, anySelected: r } = e,
        i = (0, a.e7)([n.Z], () => n.Z.getReferralsRemaining());
    s()(null != i, 'Referrals remaining should not be null');
    let o = i - t;
    return 0 === i ? l.intl.string(l.t.mPmPrq) : 0 !== t || r ? (1 === o ? l.intl.string(l.t.UfPk1t) : o > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: o }) : l.intl.formatToPlainString(l.t['3PJw6e'], { numReferrals: i })) : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: i });
};
