"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("697218"),
  i = n("719923"),
  r = n("367489"),
  o = n("782340");

function u(e) {
  let {
    value: t,
    labelText: n,
    onChange: u,
    onShowUpsell: d
  } = e, c = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()), f = i.default.canUseFancyVoiceChannelReactions(c), h = "";
  return h = f ? t ? o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_ENABLED : o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TOOLTIP_DISABLED : o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_UPSELL, (0, l.jsx)(r.default, {
    checked: t,
    onChange: u,
    labelText: n,
    tooltipText: h,
    iconAltText: o.default.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE_TADA_ALT,
    canToggle: f,
    onClick: f ? () => {} : d
  })
}