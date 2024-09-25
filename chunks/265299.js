n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(113434),
    o = n(497505),
    s = n(37303),
    l = n(683650),
    u = n(170658);
function c(e) {
    let { questId: t } = e,
        { quests: n, isFetchingCurrentQuests: c } = (0, a.J2)({ fetchPolicy: 'cache-or-network' }),
        d = n.find((e) => e.id === t);
    return c
        ? (0, r.jsx)(i.Spinner, { className: u.spinner })
        : null == d
          ? (0, r.jsx)(l.o, {})
          : (0, r.jsx)(
                s.Z,
                {
                    quest: d,
                    location: o.jn.QUESTS_EMBED
                },
                d.id
            );
}
