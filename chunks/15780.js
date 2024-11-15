n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(630388),
    c = n(88658),
    d = n(695346),
    u = n(981631),
    m = n(388032),
    h = n(971436);
function g() {
    let e = d.xq.useSetting(),
        t = s.useMemo(() => (0, c.bL)(e), [e]);
    return (0, i.jsx)(a.FormSection, {
        tag: a.FormTitleTags.H1,
        title: m.intl.string(m.t.fyA119),
        children: (0, i.jsxs)(a.FormSection, {
            title: m.intl.string(m.t.vyodkJ),
            className: h.marginBottom40,
            children: [
                (0, i.jsx)(a.FormSwitch, {
                    className: l()(h.marginTop8, h.marginBottom20),
                    value: t.all,
                    onChange: (e) => d.xq.updateSetting(e ? u.HGf : u.HGf & ~u.SOq.NO_RELATION),
                    children: m.intl.string(m.t.mGr3CQ)
                }),
                (0, i.jsx)(a.FormSwitch, {
                    value: t.all || t.mutualFriends,
                    onChange: (t) => d.xq.updateSetting(t ? o.pj(e, u.SOq.MUTUAL_FRIENDS) : o.M1(e, u.SOq.MUTUAL_FRIENDS, u.SOq.NO_RELATION)),
                    children: m.intl.string(m.t.IqlCSk)
                }),
                (0, i.jsx)(a.FormSwitch, {
                    value: t.all || t.mutualGuilds,
                    onChange: (t) => d.xq.updateSetting(t ? o.pj(e, u.SOq.MUTUAL_GUILDS) : o.M1(e, u.SOq.MUTUAL_GUILDS, u.SOq.NO_RELATION)),
                    children: m.intl.string(m.t.mozb8f)
                })
            ]
        })
    });
}
