"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("424973");
var i = n("627445"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("42203"),
  l = n("923959"),
  u = n("305961"),
  d = n("957255"),
  c = n("677099"),
  f = n("299039"),
  _ = n("49111");
let h = null,
  g = [],
  m = null,
  E = null;

function p(e) {
  return null == e ? 0 : new Date().getTime() - e.getTime()
}
class v extends r.default.Store {
  initialize() {
    this.waitFor(c.default, l.default, o.default)
  }
  isCallout(e) {
    return g.some(t => t.targetId === e)
  }
  getCurrentAction() {
    return 0 === g.length ? null : g[0]
  }
  isCurrentKind(e) {
    return 0 !== g.length && g[0].kind === e
  }
  isActive(e) {
    return null != h && h === e && g.length > 0
  }
  getAnalyticsProperties() {
    let e = this.getCurrentAction();
    return {
      step: null == e ? void 0 : e.kind,
      is_final_step: 1 === g.length,
      step_duration: p(E),
      total_duration: p(m)
    }
  }
  isAnyActive() {
    return g.length > 0
  }
}
v.displayName = "AssistantStore";
var S = new v(a.default, {
  ASSISTANT_REBUILD_ACTION_STACK: function(e) {
    let {
      guildId: t
    } = e, n = u.default.getGuild(t);
    if (null == n) return !1;
    h = t, (g = []).push({
      guildId: t,
      kind: "splashScreen",
      targetKey: void 0,
      targetId: void 0
    });
    let i = function(e) {
      let t = l.default.getVocalChannelIds(e);
      for (var n = 0; n < t.length; n++) {
        let e = t[n],
          i = o.default.getChannel(e);
        if (null != i && !i.nsfw && d.default.can(_.Permissions.VIEW_CHANNEL, i)) return i
      }
      return null
    }(t);
    null != i && (g.push({
      guildId: t,
      kind: "joinVoiceChannel",
      targetKey: "voiceChannel",
      targetId: i.id
    }), g.push({
      guildId: t,
      kind: "joinVoiceChannelMultitask",
      targetKey: "voiceChannel",
      targetId: i.id
    }));
    let s = function(e) {
      let t = l.default.getSelectableChannels(e.id),
        n = t.sort((e, t) => f.default.compare(e.channel.id, t.channel.id)).find(e => !e.channel.nsfw);
      if (null != n) return n.channel;
      let i = o.default.getChannel(e.systemChannelId);
      return null != i && !i.nsfw && d.default.can(_.Permissions.VIEW_CHANNEL, i) ? i : l.default.getSFWDefaultChannel(e.id)
    }(n);
    null != s && (g.push({
      guildId: t,
      kind: "openTextChannel",
      targetKey: "textChannel",
      targetId: s.id
    }), g.push({
      guildId: t,
      kind: "sendMessage",
      targetKey: void 0,
      targetId: void 0
    })), g.push({
      guildId: t,
      kind: "navigateAround",
      targetKey: void 0,
      targetId: void 0
    }), g.push({
      guildId: t,
      kind: "wumpusJoined",
      targetKey: void 0,
      targetId: void 0
    }), g.push({
      guildId: t,
      kind: "startActivity",
      targetKey: void 0,
      targetId: void 0
    }), m = new Date, E = new Date
  },
  ASSISTANT_COMPLETE_ACTION: function(e) {
    let {
      kind: t
    } = e;
    return 0 === g.length ? (s("AssistantStore: no actions to complete"), !1) : g[0].kind === t && void(g.shift(), E = new Date)
  },
  ASSISTANT_DISMISS: function() {
    g = [], E = null, m = null
  }
})