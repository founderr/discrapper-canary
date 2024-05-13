"use strict";
n.r(t), n.d(t, {
  CHANNEL_NEXT: function() {
    return E
  },
  CHANNEL_PREV: function() {
    return c
  },
  NAVIGATE_BACK: function() {
    return A
  },
  NAVIGATE_FORWARD: function() {
    return C
  },
  TOGGLE_PREVIOUS_GUILD: function() {
    return _
  }
});
var i = n("140492"),
  l = n("475468"),
  o = n("703656"),
  a = n("769654"),
  u = n("944486"),
  s = n("914010"),
  d = n("358085"),
  r = n("981631");
let E = {
    binds: ["alt+down"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.default)(), !1)
  },
  c = {
    binds: ["alt+up"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.default)(-1), !1)
  },
  _ = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: !0,
    action() {
      let e;
      if (null != s.default.getGuildId()) e = r.ME;
      else {
        let t = s.default.getLastSelectedGuildId();
        null != t && (e = t, (0, l.transitionToChannel)(t, u.default.getChannelId(t)))
      }
      return null != e && (0, a.transitionToGuild)(e), !1
    }
  },
  A = {
    binds: (0, d.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: !0,
    action: () => ((0, o.back)(), !1)
  },
  C = {
    binds: (0, d.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: !0,
    action: () => ((0, o.forward)(), !1)
  }