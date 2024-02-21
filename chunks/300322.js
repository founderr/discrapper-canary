"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return I
  },
  useCanStartPublicThread: function() {
    return h
  },
  computeCanStartPublicThread: function() {
    return N
  },
  useCanStartPrivateThread: function() {
    return p
  },
  useCanStartThread: function() {
    return C
  },
  useCanViewThreadForMessage: function() {
    return v
  },
  useHasActiveThreads: function() {
    return m
  },
  useCanManageThread: function() {
    return g
  },
  useCanUnarchiveThread: function() {
    return D
  },
  canUnarchiveThread: function() {
    return U
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return L
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return y
  },
  computeIsReadOnlyThread: function() {
    return G
  },
  useIsThreadModerator: function() {
    return M
  },
  useCanJoinThreadVoice: function() {
    return b
  },
  useIsNonModInLockedThread: function() {
    return w
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
  _ = n("299039"),
  T = n("401690"),
  S = n("49111");
let I = (0, s.default)({
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
  let n = (0, a.useStateFromStores)([E.default], () => {
    let t = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : u.default.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY);
    return E.default.can(t, e)
  }, [e]);
  return A(n, e, t)
}

function N(e, t) {
  let n = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : u.default.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY),
    i = E.default.can(n, e);
  return A(i, e, t)
}

function p(e) {
  let t = (0, a.useStateFromStores)([E.default], () => E.default.can(u.default.combine(S.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === S.ChannelTypes.GUILD_TEXT && A(t, e)
}

function C(e) {
  let t = h(e),
    n = p(e);
  return t || n
}

function A(e, t, n) {
  return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(S.MessageFlags.HAS_THREAD) || (0, o.default)(n))) && !0
}

function v(e) {
  let t = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(_.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, a.useStateFromStores)([E.default], () => E.default.can(S.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(S.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function m(e) {
  return (0, a.useStateFromStoresObject)([T.default, E.default], () => {
    let t = T.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = T.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = T.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      u = r(n).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
      a = r(t).some(e => !(e.channel.id in n) && E.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
      s = r(i).some(e => E.default.can(S.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: u || a || s,
      hasMoreActiveThreads: s || a
    }
  })
}

function g(e) {
  let t = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, a.useStateFromStores)([E.default], () => null != t && E.default.can(S.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, a.useStateFromStores)([d.default], () => d.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function R(e, t) {
  return null != e && t.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function P(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function D(e) {
  let t = (0, a.useStateFromStores)([E.default], () => R(e, E.default)),
    n = M(e);
  return P(e, t, n)
}

function U(e) {
  let t = R(e, E.default),
    n = function(e) {
      return O(e, E.default)
    }(e);
  return P(e, t, n)
}

function L(e) {
  var t;
  let n = (0, a.useStateFromStores)([E.default], () => null != e && E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function y(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function G(e) {
  let t = E.default.can(S.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function O(e, t) {
  return null != e && t.can(S.Permissions.MANAGE_THREADS, e)
}

function M(e) {
  return (0, a.useStateFromStores)([E.default], () => O(e, E.default))
}

function b(e) {
  let t = (0, l.default)(),
    n = (0, a.useStateFromStores)([E.default], () => E.default.can(S.Permissions.CONNECT, e)),
    i = L(e),
    r = I.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function w(e) {
  let t = M(e);
  return e.isLockedThread() && !t
}