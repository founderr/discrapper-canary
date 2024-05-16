"use strict";
l.r(t), l.d(t, {
  SHARE_EVENT_DETAILS_LINK: function() {
    return n
  }
});
let n = e => {
  let {
    guildId: t,
    guildEventId: l
  } = e;
  return "https://discord.com/events/".concat(t, "/").concat(l)
}