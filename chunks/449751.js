"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var a = s("852229"),
  l = s("481060"),
  i = s("757698"),
  u = s("626135"),
  d = s("572004"),
  r = s("981631"),
  o = s("689938");

function c(e, t) {
  return d.SUPPORTS_COPY && e.type !== r.MessageTypes.GUILD_INVITE_REMINDER ? (0, n.jsx)(l.MenuItem, {
    id: "copy-link",
    label: o.default.Messages.COPY_MESSAGE_LINK,
    icon: i.default,
    action: () => {
      (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(r.Routes.CHANNEL(t.guild_id, t.id, e.id))), u.default.track(r.AnalyticEvents.MESSAGE_LINK_COPIED, {
        message_id: e.id,
        channel: e.channel_id
      })
    }
  }) : null
}