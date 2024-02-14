"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return T
  },
  useCanStartPublicThread: function() {
    return I
  },
  computeCanStartPublicThread: function() {
    return h
  },
  useCanStartPrivateThread: function() {
    return v
  },
  useCanStartThread: function() {
    return N
  },
  useCanViewThreadForMessage: function() {
    return p
  },
  useHasActiveThreads: function() {
    return g
  },
  useCanManageThread: function() {
    return A
  },
  useCanUnarchiveThread: function() {
    return L
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
    return U
  },
  useIsThreadModerator: function() {
    return O
  },
  useCanJoinThreadVoice: function() {
    return x
  },
  useIsNonModInLockedThread: function() {
    return M
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
  _ = n("401690"),
  S = n("49111");
let T = (0, a.default)({
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
  let n = (0, u.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : l.default.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return C(n, e, t)
}

function h(e, t) {
  let n = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : l.default.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY),
    i = E.default.can(n, e);
  return C(i, e, t)
}

function v(e) {
  let t = (0, u.useStateFromStores)([E.default], () => E.default.can(l.default.combine(S.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === S.ChannelTypes.GUILD_TEXT && C(t, e)
}

function N(e) {
  let t = I(e),
    n = v(e);
  return t || n
}

function C(e, t, n) {
  return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(S.MessageFlags.HAS_THREAD) || (0, o.default)(n))) && !0
}

function p(e) {
  let t = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
    n = (0, u.useStateFromStores)([E.default], () => E.default.can(S.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(S.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function g(e) {
  return (0, u.useStateFromStoresObject)([_.default, E.default], () => {
    let t = _.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = _.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = _.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      l = r(n).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
      u = r(t).some(e => !(e.channel.id in n) && E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
      a = r(i).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: l || u || a,
      hasMoreActiveThreads: a || u
    }
  })
}

function A(e) {
  let t = (0, u.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, u.useStateFromStores)([E.default], () => null != t && E.default.can(S.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, u.useStateFromStores)([c.default], () => c.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function m(e, t) {
  return null != e && t.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function R(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function L(e) {
  let t = (0, u.useStateFromStores)([E.default], () => m(e, E.default)),
    n = O(e);
  return R(e, t, n)
}

function P(e) {
  let t = m(e, E.default),
    n = function(e) {
      return G(e, E.default)
    }(e);
  return R(e, t, n)
}

function D(e) {
  var t;
  let n = (0, u.useStateFromStores)([E.default], () => null != e && E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function y(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function U(e) {
  let t = E.default.can(S.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function G(e, t) {
  return null != e && t.can(S.Permissions.MANAGE_THREADS, e)
}

function O(e) {
  return (0, u.useStateFromStores)([E.default], () => G(e, E.default))
}

function x(e) {
  let t = (0, s.default)(),
    n = (0, u.useStateFromStores)([E.default], () => E.default.can(S.Permissions.CONNECT, e)),
    i = D(e),
    r = T.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function M(e) {
  let t = O(e);
  return e.isLockedThread() && !t
}