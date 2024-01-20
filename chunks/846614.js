"use strict";
n.r(t), n.d(t, {
  useNewUserDismissibleContent: function() {
    return d
  },
  disableNewUserDismissibleContent: function() {
    return c
  }
});
var i = n("249654"),
  s = n("65597"),
  r = n("151426"),
  a = n("271938"),
  o = n("718517");
let l = {
    [r.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
    [r.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
    [r.DismissibleContent.SEEN_LAUNCH_WELCOME]: 0,
    [r.DismissibleContent.SEEN_OLD_DESIGN]: 0
  },
  u = o.default.Millis.DAY;

function d(e) {
  let t = (0, s.default)([a.default], () => a.default.getId()),
    n = null != t ? i.default.age(t) : 0;
  return e.filter(e => {
    var t;
    let i = null !== (t = l[e]) && void 0 !== t ? t : u;
    return n > i
  })
}

function c(e) {
  var t;
  let n = null != a.default.getId() ? i.default.age(a.default.getId()) : 0,
    s = null !== (t = l[e]) && void 0 !== t ? t : u;
  return n < s
}