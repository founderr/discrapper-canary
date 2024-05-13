"use strict";
n.r(t), n.d(t, {
  TOGGLE_CATEGORY_COLLAPSED: function() {
    return s
  }
});
var i = n("211739"),
  l = n("680089"),
  o = n("984933"),
  a = n("914010"),
  u = n("981631");
let s = {
  binds: ["mod+shift+a"],
  comboKeysBindGlobal: !0,
  action() {
    let e = a.default.getGuildId();
    return null != e && (o.default.getChannels(e)[u.ChannelTypes.GUILD_CATEGORY].some(e => {
      let {
        channel: t
      } = e;
      return "null" !== t.id && !l.default.isCollapsed(t.id)
    }) ? (0, i.categoryCollapseAll)(e) : (0, i.categoryExpandAll)(e), !1)
  }
}