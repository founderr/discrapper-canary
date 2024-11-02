n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(594174),
    a = n(74538),
    s = n(878349),
    o = n(388032);
function c(e) {
    let { value: t, labelText: n, onChange: c, onShowUpsell: u } = e,
        d = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
        h = a.ZP.canUseFancyVoiceChannelReactions(d),
        m = '';
    return (
        (m = h ? (t ? o.intl.string(o.t.CfapQU) : o.intl.string(o.t.GB2x0t)) : o.intl.string(o.t.fe05ND)),
        (0, i.jsx)(s.Z, {
            checked: t,
            onChange: c,
            labelText: n,
            tooltipText: m,
            iconAltText: o.intl.string(o.t.oF6B0N),
            canToggle: h,
            onClick: h ? () => {} : u
        })
    );
}
