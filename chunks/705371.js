"use strict";
n.r(t), n.d(t, {
  MARK_SERVER_READ: function() {
    return E
  }
});
var i = n("904245"),
  l = n("181945"),
  o = n("888369"),
  a = n("375954"),
  u = n("944486"),
  s = n("914010"),
  d = n("585483"),
  r = n("981631");
let E = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: !0,
  action() {
    let e = s.default.getGuildId();
    if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e)) return;
    (0, l.default)([e]);
    let t = u.default.getChannelId(e);
    if (null != t) a.default.getMessages(t).hasMoreAfter ? i.default.jumpToPresent(t, r.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(r.ComponentActions.SCROLLTO_PRESENT)
  }
}