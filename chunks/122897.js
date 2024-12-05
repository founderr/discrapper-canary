n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(524437),
    r = n(481060),
    l = n(63063),
    a = n(78451),
    o = n(695346),
    c = n(838436),
    d = n(973005),
    u = n(726985),
    m = n(981631),
    g = n(388032),
    h = n(630182);
function p() {
    var e, t, n;
    let p = o.Xr.useSetting(),
        x = o.UP.useSetting();
    let T = ((e = p), (t = x), e !== s.Xr.DEFAULT_UNSET ? e : null !== (n = d.O7.get(t)) && void 0 !== n ? n : s.Xr.NON_FRIENDS);
    return (0, i.jsxs)(c.U, {
        setting: u.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, i.jsx)(c.H, {
                header: g.intl.string(g.t.tiCXaG),
                description: g.intl.format(g.t.RvjRRE, { appealLink: l.Z.getArticleURL(m.BhN.SAFE_DIRECT_MESSAGING) })
            }),
            (0, i.jsx)(r.RadioGroup, {
                className: h.radioGroup,
                radioItemClassName: h.radioGroupItem,
                value: T,
                options: (0, a.c7)(),
                onChange: (e) => {
                    let { value: t } = e;
                    return o.Xr.updateSetting(t);
                }
            })
        ]
    });
}
