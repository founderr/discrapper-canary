n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(594174),
  a = n(74538),
  r = n(878349),
  o = n(689938);

function c(e) {
  let {
    value: t,
    labelText: n,
    onChange: c,
    onShowUpsell: u
  } = e, d = (0, i.e7)([s.default], () => s.default.getCurrentUser()), h = a.ZP.canUseFancyVoiceChannelReactions(d), m = "";
  return m = h ? t ? o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_ENABLED : o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_DISABLED : o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_UPSELL, (0, l.jsx)(r.Z, {
    checked: t,
    onChange: c,
    labelText: n,
    tooltipText: m,
    iconAltText: o.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TADA_ALT,
    canToggle: h,
    onClick: h ? () => {} : u
  })
}