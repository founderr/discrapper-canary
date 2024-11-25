n.d(t, {
    $: function () {
        return x;
    },
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(392711),
    l = n(442837),
    s = n(481060),
    a = n(241559),
    o = n(527379),
    c = n(313364),
    d = n(434404),
    u = n(999382),
    m = n(981631),
    h = n(388032),
    g = n(619732);
function x() {
    var e;
    let t = (0, l.e7)([u.Z], () => u.Z.getProps().guild, []),
        n = null !== (e = null == t ? void 0 : t.isCommunity()) && void 0 !== e && e;
    return (0, i.jsxs)(s.Clickable, {
        onClick: (e) => {
            if (null != t) n ? (e.preventDefault(), d.Z.close(), (0, o._X)(t.id)) : d.Z.open(t.id, m.pNK.MEMBERS);
        },
        className: g.rowContainer,
        children: [
            (0, i.jsx)('div', { children: h.intl.string(h.t['9Oq93t']) }),
            n &&
                (0, i.jsx)(s.WindowLaunchIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: g.linkIcon,
                    width: 16,
                    height: 16
                })
        ]
    });
}
function p() {
    var e;
    let { guild: t } = (0, l.e7)([u.Z], () => u.Z.getProps(), [], r.isEqual),
        n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : m.lds;
    return (0, a.n2)(n) ? (0, i.jsx)(c.Z, { guildId: n }) : null;
}
