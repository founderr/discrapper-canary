"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return S
  },
  useCanStartPublicThread: function() {
    return C
  },
  computeCanStartPublicThread: function() {
    return R
  },
  useCanStartPrivateThread: function() {
    return I
  },
  useCanStartThread: function() {
    return A
  },
  useCanViewThreadForMessage: function() {
    return N
  },
  useHasActiveThreads: function() {
    return m
  },
  useCanManageThread: function() {
    return g
  },
  useCanUnarchiveThread: function() {
    return O
  },
  canUnarchiveThread: function() {
    return P
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return D
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return y
  },
  computeIsReadOnlyThread: function() {
    return L
  },
  useIsThreadModerator: function() {
    return w
  },
  useCanJoinThreadVoice: function() {
    return U
  },
  useIsNonModInLockedThread: function() {
    return b
  }
});
var r = n("917351"),
  i = n.n(r),
  s = n("316693"),
  o = n("446674"),
  a = n("296892"),
  l = n("889014"),
  u = n("913491"),
  c = n("233069"),
  d = n("271938"),
  f = n("42203"),
  E = n("957255"),
  h = n("299039"),
  _ = n("401690"),
  p = n("49111");
let S = (0, a.default)({
  id: "2022-07_voice_in_threads",
  label: "Voice in Threads",
  kind: "guild",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: !0
    }
  }]
});

function C(e, t) {
  let n = (0, o.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : s.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return v(n, e, t)
}

function R(e, t) {
  let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : s.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
    r = E.default.can(n, e);
  return v(r, e, t)
}

function I(e) {
  let t = (0, o.useStateFromStores)([E.default], () => E.default.can(s.default.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === p.ChannelTypes.GUILD_TEXT && v(t, e)
}

function A(e) {
  let t = C(e),
    n = I(e);
  return t || n
}

function v(e, t, n) {
  return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
}

function N(e) {
  let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, o.useStateFromStores)([E.default], () => E.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function m(e) {
  return (0, o.useStateFromStoresObject)([_.default, E.default], () => {
    let t = _.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = _.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      r = _.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      s = i(n).some(e => E.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
      o = i(t).some(e => !(e.channel.id in n) && E.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
      a = i(r).some(e => E.default.can(p.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: s || o || a,
      hasMoreActiveThreads: a || o
    }
  })
}

function g(e) {
  let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, o.useStateFromStores)([E.default], () => null != t && E.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
    r = (0, o.useStateFromStores)([d.default], () => d.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
}

function T(e, t) {
  return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function M(e, t, n) {
  var r;
  return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
}

function O(e) {
  let t = (0, o.useStateFromStores)([E.default], () => T(e, E.default)),
    n = w(e);
  return M(e, t, n)
}

function P(e) {
  let t = T(e, E.default),
    n = function(e) {
      return F(e, E.default)
    }(e);
  return M(e, t, n)
}

function D(e) {
  var t;
  let n = (0, o.useStateFromStores)([E.default], () => null != e && E.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function y(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function L(e) {
  let t = E.default.can(p.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function F(e, t) {
  return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
}

function w(e) {
  return (0, o.useStateFromStores)([E.default], () => F(e, E.default))
}

function U(e) {
  let t = (0, l.default)(),
    n = (0, o.useStateFromStores)([E.default], () => E.default.can(p.Permissions.CONNECT, e)),
    r = D(e),
    i = S.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && i && n && r
}

function b(e) {
  let t = w(e);
  return e.isLockedThread() && !t
}