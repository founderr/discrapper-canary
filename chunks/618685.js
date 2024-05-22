"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("149765"),
  a = n("442837"),
  l = n("592125"),
  i = n("496675"),
  r = n("231338");
let o = (0, s.combine)(r.Permissions.VIEW_CHANNEL, r.Permissions.READ_MESSAGE_HISTORY);

function u(e) {
  return (0, a.useStateFromStores)([l.default, i.default], () => {
    let t = l.default.getChannel(e.message.channel_id);
    return null != t ? i.default.can(o, t) : null != e.guild
  })
}