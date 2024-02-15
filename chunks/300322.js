"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return S
  },
  useCanStartPublicThread: function() {
    return I
  },
  computeCanStartPublicThread: function() {
    return h
  },
  useCanStartPrivateThread: function() {
    return N
  },
  useCanStartThread: function() {
    return p
  },
  useCanViewThreadForMessage: function() {
    return v
  },
  useHasActiveThreads: function() {
    return A
  },
  useCanManageThread: function() {
    return m
  },
  useCanUnarchiveThread: function() {
    return P
  },
  canUnarchiveThread: function() {
    return D
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return U
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return L
  },
  computeIsReadOnlyThread: function() {
    return y
  },
  useIsThreadModerator: function() {
    return O
  },
  useCanJoinThreadVoice: function() {
    return M
  },
  useIsNonModInLockedThread: function() {
    return b
  }
});
var i = n("917351"),
  r = n.n(i),
  u = n("316693"),
  a = n("446674"),
  s = n("296892"),
  l = n("889014"),
  o = n("913491"),
  c = n("233069"),
  d = n("271938"),
  f = n("42203"),
  E = n("957255"),
  _ = n("401690"),
  T = n("49111");
let S = (0, s.default)({
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

function I(e, t) {
  let n = (0, a.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? T.Permissions.SEND_MESSAGES : u.default.combine(T.Permissions.CREATE_PUBLIC_THREADS, T.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return C(n, e, t)
}

function h(e, t) {
  let n = e.isForumLikeChannel() ? T.Permissions.SEND_MESSAGES : u.default.combine(T.Permissions.CREATE_PUBLIC_THREADS, T.Permissions.READ_MESSAGE_HISTORY),
    i = E.default.can(n, e);
  return C(i, e, t)
}

function N(e) {
  let t = (0, a.useStateFromStores)([E.default], () => E.default.can(u.default.combine(T.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === T.ChannelTypes.GUILD_TEXT && C(t, e)
}

function p(e) {
  let t = I(e),
    n = N(e);
  return t || n
}

function C(e, t, n) {
  return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(T.MessageFlags.HAS_THREAD) || (0, o.default)(n))) && !0
}

function v(e) {
  let t = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
    n = (0, a.useStateFromStores)([E.default], () => E.default.can(T.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(T.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function A(e) {
  return (0, a.useStateFromStoresObject)([_.default, E.default], () => {
    let t = _.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = _.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = _.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      u = r(n).some(e => E.default.can(T.Permissions.VIEW_CHANNEL, e.channel)),
      a = r(t).some(e => !(e.channel.id in n) && E.default.can(T.Permissions.VIEW_CHANNEL, e.channel)),
      s = r(i).some(e => E.default.can(T.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: u || a || s,
      hasMoreActiveThreads: s || a
    }
  })
}

function m(e) {
  let t = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, a.useStateFromStores)([E.default], () => null != t && E.default.can(T.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, a.useStateFromStores)([d.default], () => d.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function g(e, t) {
  return null != e && t.can(T.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function R(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function P(e) {
  let t = (0, a.useStateFromStores)([E.default], () => g(e, E.default)),
    n = O(e);
  return R(e, t, n)
}

function D(e) {
  let t = g(e, E.default),
    n = function(e) {
      return G(e, E.default)
    }(e);
  return R(e, t, n)
}

function U(e) {
  var t;
  let n = (0, a.useStateFromStores)([E.default], () => null != e && E.default.can(T.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function L(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(T.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function y(e) {
  let t = E.default.can(T.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function G(e, t) {
  return null != e && t.can(T.Permissions.MANAGE_THREADS, e)
}

function O(e) {
  return (0, a.useStateFromStores)([E.default], () => G(e, E.default))
}

function M(e) {
  let t = (0, l.default)(),
    n = (0, a.useStateFromStores)([E.default], () => E.default.can(T.Permissions.CONNECT, e)),
    i = U(e),
    r = S.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function b(e) {
  let t = O(e);
  return e.isLockedThread() && !t
}