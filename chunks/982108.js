"use strict";
n.r(t), n.d(t, {
  MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
    return E
  },
  isViewChannelSidebar: function() {
    return y
  },
  default: function() {
    return P
  }
});
var i = n("394846"),
  s = n("446674"),
  r = n("913144"),
  a = n("582713"),
  o = n("659500"),
  l = n("42203"),
  u = n("957255"),
  d = n("744983"),
  c = n("18494"),
  f = n("162771"),
  _ = n("697218"),
  h = n("49111"),
  g = n("724210"),
  m = n("843455");
let E = "message_requests",
  p = !1,
  v = !1,
  S = !0,
  T = !1,
  I = {},
  C = {};

function A(e) {
  if (null == e) return null;
  if ((0, g.isStaticChannelRoute)(e)) {
    let t = f.default.getGuildId();
    if (null == t) return null;
    e = (0, g.buildGuildStaticChannelId)(e, t)
  }
  return e
}

function y(e) {
  return [a.SidebarType.VIEW_CHANNEL, a.SidebarType.VIEW_THREAD, a.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
}

function N(e) {
  let t = !1;
  T && (T = !1, t = !0);
  let n = A(c.default.getChannelId());
  return null != n && n in I && (delete I[n], t = !0), t && e ? e : !e
}

function R() {
  let e = !1;
  for (let t in I) {
    let n = I[t];
    if (n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL) {
      let i = l.default.getChannel(n.channelId);
      (null == i || !u.default.can(m.Permissions.VIEW_CHANNEL, i)) && (delete I[t], e = !0)
    }
  }
  return e
}

function D() {
  if (T === d.default.isActive()) return !1;
  T = d.default.isActive()
}
class O extends s.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t, n, i, s, r;
      p = null !== (t = e.isMembersOpen) && void 0 !== t && t, v = null !== (n = e.isSummariesOpen) && void 0 !== n && n, S = null === (i = e.isProfileOpen) || void 0 === i || i, I = null !== (s = e.sidebars) && void 0 !== s ? s : {}, C = null !== (r = e.guildSidebars) && void 0 !== r ? r : {}
    }
    this.syncWith([d.default], D), this.syncWith([u.default], R)
  }
  getState() {
    return {
      isMembersOpen: p,
      isSummariesOpen: v,
      isProfileOpen: S,
      sidebars: I,
      guildSidebars: C
    }
  }
  getSection(e, t) {
    return T ? h.ChannelSections.SEARCH : null != (e = A(e)) && null != I[e] ? h.ChannelSections.SIDEBAR_CHAT : t && S ? h.ChannelSections.PROFILE : v ? h.ChannelSections.SUMMARIES : p ? h.ChannelSections.MEMBERS : h.ChannelSections.NONE
  }
  getSidebarState(e) {
    return null == (e = A(e)) ? void 0 : I[e]
  }
  getGuildSidebarState(e) {
    return null == e ? void 0 : C[e]
  }
  getCurrentSidebarChannelId(e) {
    if (null == (e = A(e)) || T) return null;
    let t = I[e];
    return null == t ? null : t.type === a.SidebarType.VIEW_THREAD || t.type === a.SidebarType.VIEW_CHANNEL ? t.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    if (null == (e = A(e)) || T) return null;
    let n = I[e];
    return null == n ? null : n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
  }
}
O.displayName = "ChannelSectionStore", O.persistKey = "ChannelSectionStore2";
var P = new O(r.default, {
  CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
    v && (v = N(v)), p = N(p)
  },
  PROFILE_PANEL_TOGGLE_SECTION: function() {
    !S && o.ComponentDispatch.dispatch(h.ComponentActions.SEARCH_RESULTS_CLOSE), S = N(S)
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
    p && (p = N(p)), v = N(v)
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      sidebarType: t,
      baseChannelId: n,
      channelId: i,
      details: s
    } = e;
    T = !1;
    let r = A(n);
    return null != r && (I[r] = {
      type: t,
      channelId: i,
      details: s
    }, !0)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      sidebarType: t,
      guildId: n,
      baseChannelId: i,
      details: s
    } = e;
    T = !1;
    let r = A(i);
    return null != r && (C[n] = {
      type: t,
      baseChannelId: r,
      guildId: n,
      details: s
    }, !0)
  },
  SIDEBAR_CREATE_THREAD: function(e) {
    let {
      parentChannelId: t,
      parentMessageId: n,
      location: i
    } = e;
    T = !1;
    let s = A(t);
    null != s && (I[s] = {
      type: a.SidebarType.CREATE_THREAD,
      parentChannelId: t,
      parentMessageId: n,
      location: i
    })
  },
  SIDEBAR_CLOSE: function(e) {
    let {
      baseChannelId: t
    } = e, n = A(t);
    null != n && delete I[n]
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
    if (t.id in I) return delete I[t.id], !0;
    let n = !1;
    for (let e in I) {
      let i = I[e];
      null != i && i.type === a.SidebarType.VIEW_CHANNEL && i.channelId === t.id && (delete I[e], n = !0)
    }
    return n
  },
  CHANNEL_SELECT: function() {
    i.isMobile && p && (p = !1, v = !1)
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    if (n.ownerId === (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    let i = I[n.parent_id];
    null != i && i.type === a.SidebarType.CREATE_THREAD && i.parentMessageId === n.id && (I[n.parent_id] = {
      type: a.SidebarType.VIEW_THREAD,
      channelId: n.id
    })
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e, n = I[t.parent_id];
    if (null == n || n.type !== a.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete I[t.parent_id]
  }
})