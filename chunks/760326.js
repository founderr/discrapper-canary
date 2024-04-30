"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("561716"),
  i = a("51596"),
  r = a("82950"),
  o = a("981631"),
  u = a("921944"),
  d = a("689938"),
  c = a("932478");
t.default = e => {
  let t = l.QUICKSWITCHER_SHOW.binds["0"].split("+").map(e => null != s.PRETTY_KEYS[e] ? (0, s.PRETTY_KEYS)[e]() : e).join(" + ").toUpperCase();
  return (0, n.jsx)(r.default, {
    guild: e.guild,
    onDismissed: () => e.markAsDismissed(u.ContentDismissActionType.UNKNOWN),
    onClick: () => (0, i.show)("CHANNEL_NOTICE"),
    message: d.default.Messages.QUICKSWITCHER_NOTICE,
    cta: t,
    trackingSource: o.ChannelNoticeCtaSources.QUICK_SWITCHER_NOTICE,
    type: o.ChannelNoticeTypes.QUICKSWITCHER,
    image: c,
    imageMarginX: 50
  })
}