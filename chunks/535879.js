n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(594174),
    l = n(74538),
    r = n(878349),
    o = n(689938);
function c(e) {
    let { value: t, labelText: n, onChange: c, onShowUpsell: u } = e,
        d = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
        h = l.ZP.canUseFancyVoiceChannelReactions(d),
        m = '';
    return (
        (m = h ? (t ? o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_ENABLED : o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_DISABLED) : o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_UPSELL),
        (0, i.jsx)(r.Z, {
            checked: t,
            onChange: c,
            labelText: n,
            tooltipText: m,
            iconAltText: o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TADA_ALT,
            canToggle: h,
            onClick: h ? () => {} : u
        })
    );
}
