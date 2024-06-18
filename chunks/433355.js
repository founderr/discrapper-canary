"use strict";
n.d(t, {
  D5: function() {
    return L
  },
  uZ: function() {
    return A
  }
});
var i, r = n(873546),
  s = n(442837),
  o = n(570140),
  a = n(897473),
  l = n(585483),
  u = n(709054),
  _ = n(592125),
  c = n(496675),
  d = n(768119),
  E = n(944486),
  I = n(914010),
  T = n(594174),
  h = n(981631),
  S = n(176505),
  f = n(231338);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = "message_requests",
  m = !1,
  O = !1,
  R = !0,
  p = !1,
  g = {},
  C = {};

function v(e) {
  if (null == e) return null;
  if ((0, S.AB)(e)) {
    let t = I.Z.getGuildId();
    return null == t ? null : (0, S.Qk)(e, t)
  }
  return e
}

function L(e) {
  return [a.tI.VIEW_CHANNEL, a.tI.VIEW_THREAD, a.tI.VIEW_MESSAGE_REQUEST].includes(e.type)
}

function D(e) {
  let t = !1;
  p && (p = !1, t = !0);
  let n = v(E.Z.getChannelId());
  return null != n && n in g && (delete g[n], t = !0), t && e ? e : !e
}

function M() {
  let e = !1;
  for (let t in g) {
    let n = g[t];
    if (n.type === a.tI.VIEW_THREAD || n.type === a.tI.VIEW_CHANNEL) {
      let i = _.Z.getChannel(n.channelId);
      (null == i || !c.Z.can(f.Pl.VIEW_CHANNEL, i)) && (delete g[t], e = !0)
    }
  }
  return e
}

function P() {
  if (p === d.Z.isActive()) return !1;
  p = d.Z.isActive()
}
class y extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, i, r, s;
      m = null !== (t = e.isMembersOpen) && void 0 !== t && t, O = null !== (n = e.isSummariesOpen) && void 0 !== n && n, R = null === (i = e.isProfileOpen) || void 0 === i || i, g = null !== (r = e.sidebars) && void 0 !== r ? r : {}, C = null !== (s = e.guildSidebars) && void 0 !== s ? s : {}
    }
    this.syncWith([d.Z], P), this.syncWith([c.Z], M)
  }
  getState() {
    return {
      isMembersOpen: m,
      isSummariesOpen: O,
      isProfileOpen: R,
      sidebars: g,
      guildSidebars: C
    }
  }
  getSection(e, t) {
    if (p) return h.ULH.SEARCH;
    let n = v(e);
    return null != n && null != g[n] ? h.ULH.SIDEBAR_CHAT : t && R ? h.ULH.PROFILE : O ? h.ULH.SUMMARIES : m ? h.ULH.MEMBERS : h.ULH.NONE
  }
  getSidebarState(e) {
    let t = v(e);
    return null == t ? void 0 : g[t]
  }
  getGuildSidebarState(e) {
    return null == e ? void 0 : C[e]
  }
  getCurrentSidebarChannelId(e) {
    let t = v(e);
    if (null == t || p) return null;
    let n = g[t];
    return null == n ? null : n.type === a.tI.VIEW_THREAD || n.type === a.tI.VIEW_CHANNEL ? n.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    let n = v(e);
    if (null == n || p) return null;
    let i = g[n];
    return null == i ? null : i.type === a.tI.VIEW_THREAD || i.type === a.tI.VIEW_CHANNEL ? null === (t = i.details) || void 0 === t ? void 0 : t.initialMessageId : null
  }
}
N(y, "displayName", "ChannelSectionStore"), N(y, "persistKey", "ChannelSectionStore2"), t.ZP = new y(o.Z, {
  CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
    O && (O = D(O)), m = D(m)
  },
  PROFILE_PANEL_TOGGLE_SECTION: function() {
    !R && l.S.dispatch(h.CkL.SEARCH_RESULTS_CLOSE), R = D(R)
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
    m && (m = D(m)), O = D(O)
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      sidebarType: t,
      baseChannelId: n,
      channelId: i,
      details: r
    } = e;
    p = !1;
    let s = v(n);
    return null != s && (g[s] = {
      type: t,
      channelId: i,
      details: r
    }, !0)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      sidebarType: t,
      guildId: n,
      baseChannelId: i,
      details: r
    } = e;
    p = !1;
    let s = v(i);
    return null != s && (C[n] = {
      type: t,
      baseChannelId: s,
      guildId: n,
      details: r
    }, !0)
  },
  SIDEBAR_CREATE_THREAD: function(e) {
    let {
      parentChannelId: t,
      parentMessageId: n,
      location: i
    } = e;
    p = !1;
    let r = v(t);
    null != r && (g[r] = {
      type: a.tI.CREATE_THREAD,
      parentChannelId: t,
      parentMessageId: n,
      location: i
    })
  },
  SIDEBAR_CLOSE: function(e) {
    let {
      baseChannelId: t
    } = e, n = v(t);
    null != n && delete g[n]
  },
  SIDEBAR_CLOSE_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return null != C[t] && (delete C[t], !0)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (t.id in g) return delete g[t.id], !0;
    let n = !1;
    for (let e in g) {
      let i = g[e];
      null != i && i.type === a.tI.VIEW_CHANNEL && i.channelId === t.id && (delete g[e], n = !0)
    }
    return n
  },
  CHANNEL_SELECT: function() {
    r.tq && m && (m = !1, O = !1)
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    if (n.ownerId === (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    let i = g[n.parent_id];
    null != i && i.type === a.tI.CREATE_THREAD && i.parentMessageId === u.default.castChannelIdAsMessageId(n.id) && (g[n.parent_id] = {
      type: a.tI.VIEW_THREAD,
      channelId: n.id
    })
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e, n = g[t.parent_id];
    if (null == n || n.type !== a.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete g[t.parent_id]
  }
})