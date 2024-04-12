"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("149765"),
  s = a("442837"),
  l = a("984933"),
  i = a("496675"),
  r = a("981631");

function o(e) {
  let t = (0, s.useStateFromStores)([l.default], () => {
    var t;
    return null !== (t = l.default.getChannels(e)[l.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : []
  }, [e]);
  return 0 === t.length ? 0 : t.filter(e => {
    let {
      channel: t
    } = e;
    return i.default.can(n.combine(r.Permissions.SEND_MESSAGES, r.Permissions.VIEW_CHANNEL), t)
  }).length
}