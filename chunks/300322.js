"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return I
  },
  useCanStartPublicThread: function() {
    return h
  },
  computeCanStartPublicThread: function() {
    return v
  },
  useCanStartPrivateThread: function() {
    return N
  },
  useCanStartThread: function() {
    return C
  },
  useCanViewThreadForMessage: function() {
    return g
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
    return y
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return U
  },
  computeIsReadOnlyThread: function() {
    return G
  },
  useIsThreadModerator: function() {
    return M
  },
  useCanJoinThreadVoice: function() {
    return x
  },
  useIsNonModInLockedThread: function() {
    return b
  }
});
var i = n("917351"),
  r = n.n(i),
  l = n("316693"),
  u = n("446674"),
  a = n("296892"),
  s = n("889014"),
  o = n("913491"),
  d = n("233069"),
  c = n("271938"),
  f = n("42203"),
  E = n("957255"),
  _ = n("299039"),
  S = n("401690"),
  T = n("49111");
let I = (0, a.default)({
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

function h(e, t) {
  let n = (0, u.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? T.Permissions.SEND_MESSAGES : l.default.combine(T.Permissions.CREATE_PUBLIC_THREADS, T.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return p(n, e, t)
}

function v(e, t) {
  let n = e.isForumLikeChannel() ? T.Permissions.SEND_MESSAGES : l.default.combine(T.Permissions.CREATE_PUBLIC_THREADS, T.Permissions.READ_MESSAGE_HISTORY),
    i = E.default.can(n, e);
  return p(i, e, t)
}

function N(e) {
  let t = (0, u.useStateFromStores)([E.default], () => E.default.can(l.default.combine(T.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === T.ChannelTypes.GUILD_TEXT && p(t, e)
}

function C(e) {
  let t = h(e),
    n = N(e);
  return t || n
}

function p(e, t, n) {
  return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(T.MessageFlags.HAS_THREAD) || (0, o.default)(n))) && !0
}

function g(e) {
  let t = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(_.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, u.useStateFromStores)([E.default], () => E.default.can(T.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(T.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function A(e) {
  return (0, u.useStateFromStoresObject)([S.default, E.default], () => {
    let t = S.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = S.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = S.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      l = r(n).some(e => E.default.can(T.Permissions.VIEW_CHANNEL, e.channel)),
      u = r(t).some(e => !(e.channel.id in n) && E.default.can(T.Permissions.VIEW_CHANNEL, e.channel)),
      a = r(i).some(e => E.default.can(T.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: l || u || a,
      hasMoreActiveThreads: a || u
    }
  })
}

function m(e) {
  let t = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, u.useStateFromStores)([E.default], () => null != t && E.default.can(T.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, u.useStateFromStores)([c.default], () => c.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function R(e, t) {
  return null != e && t.can(T.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function L(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function P(e) {
  let t = (0, u.useStateFromStores)([E.default], () => R(e, E.default)),
    n = M(e);
  return L(e, t, n)
}

function D(e) {
  let t = R(e, E.default),
    n = function(e) {
      return O(e, E.default)
    }(e);
  return L(e, t, n)
}

function y(e) {
  var t;
  let n = (0, u.useStateFromStores)([E.default], () => null != e && E.default.can(T.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function U(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(T.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function G(e) {
  let t = E.default.can(T.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function O(e, t) {
  return null != e && t.can(T.Permissions.MANAGE_THREADS, e)
}

function M(e) {
  return (0, u.useStateFromStores)([E.default], () => O(e, E.default))
}

function x(e) {
  let t = (0, s.default)(),
    n = (0, u.useStateFromStores)([E.default], () => E.default.can(T.Permissions.CONNECT, e)),
    i = y(e),
    r = I.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function b(e) {
  let t = M(e);
  return e.isLockedThread() && !t
}