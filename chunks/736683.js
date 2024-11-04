n.d(t, {
    Z: function () {
        return d;
    },
    j: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(113434),
    l = n(786089),
    s = n(383747),
    o = n(710914),
    c = n(450637);
function d(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: o } = (0, a.eN)();
    return o && 0 === n.length
        ? (0, i.jsx)(r.Spinner, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(s.Z, { onClick: () => t(a.e5.ALL) })
          : (0, i.jsx)('div', {
                className: c.gridContainer,
                children: n.map((e) => (0, i.jsx)(l.Z, { quest: e }, e.id))
            });
}
function u(e) {
    let { onSelectTab: t } = e,
        { quests: n, isFetchingCurrentQuests: l } = (0, a.bA)(a.e5.CLAIMED);
    return l && 0 === n.length
        ? (0, i.jsx)(r.Spinner, { className: c.spinner })
        : 0 === n.length
          ? (0, i.jsx)(s.Z, { onClick: () => t(a.e5.ALL) })
          : (0, i.jsx)(o.Z, {
                quests: n,
                isFetching: l
            });
}
