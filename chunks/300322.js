"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return C
  },
  useCanStartPublicThread: function() {
    return S
  },
  computeCanStartPublicThread: function() {
    return _
  },
  useCanStartPrivateThread: function() {
    return m
  },
  useCanStartThread: function() {
    return I
  },
  useCanViewThreadForMessage: function() {
    return A
  },
  useHasActiveThreads: function() {
    return N
  },
  useCanManageThread: function() {
    return T
  },
  useCanUnarchiveThread: function() {
    return L
  },
  canUnarchiveThread: function() {
    return y
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return M
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return x
  },
  computeIsReadOnlyThread: function() {
    return w
  },
  useIsThreadModerator: function() {
    return O
  },
  useCanJoinThreadVoice: function() {
    return V
  },
  useIsNonModInLockedThread: function() {
    return D
  }
});
var i = n("917351"),
  r = n.n(i),
  s = n("316693"),
  l = n("446674"),
  a = n("296892"),
  u = n("889014"),
  o = n("913491"),
  c = n("233069"),
  d = n("271938"),
  f = n("42203"),
  h = n("957255"),
  E = n("299039"),
  p = n("401690"),
  v = n("49111");
let C = (0, a.default)({
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

function S(e, t) {
  let n = (0, l.useStateFromStores)([h.default], () => {
    let t = e.isForumLikeChannel() ? v.Permissions.SEND_MESSAGES : s.default.combine(v.Permissions.CREATE_PUBLIC_THREADS, v.Permissions.READ_MESSAGE_HISTORY);
    return h.default.can(t, e)
  }, [e]);
  return g(n, e, t)
}

function _(e, t) {
  let n = e.isForumLikeChannel() ? v.Permissions.SEND_MESSAGES : s.default.combine(v.Permissions.CREATE_PUBLIC_THREADS, v.Permissions.READ_MESSAGE_HISTORY),
    i = h.default.can(n, e);
  return g(i, e, t)
}

function m(e) {
  let t = (0, l.useStateFromStores)([h.default], () => h.default.can(s.default.combine(v.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === v.ChannelTypes.GUILD_TEXT && g(t, e)
}

function I(e) {
  let t = S(e),
    n = m(e);
  return t || n
}

function g(e, t, n) {
  return !(__OVERLAY__ || !e || !c.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(v.MessageFlags.HAS_THREAD) || (0, o.default)(n))) && !0
}

function A(e) {
  let t = (0, l.useStateFromStores)([f.default], () => f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, l.useStateFromStores)([h.default], () => h.default.can(v.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(v.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function N(e) {
  return (0, l.useStateFromStoresObject)([p.default, h.default], () => {
    let t = p.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = p.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = p.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      s = r(n).some(e => h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)),
      l = r(t).some(e => !(e.channel.id in n) && h.default.can(v.Permissions.VIEW_CHANNEL, e.channel)),
      a = r(i).some(e => h.default.can(v.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: s || l || a,
      hasMoreActiveThreads: a || l
    }
  })
}

function T(e) {
  let t = (0, l.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, l.useStateFromStores)([h.default], () => null != t && h.default.can(v.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, l.useStateFromStores)([d.default], () => d.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function R(e, t) {
  return null != e && t.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function P(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function L(e) {
  let t = (0, l.useStateFromStores)([h.default], () => R(e, h.default)),
    n = O(e);
  return P(e, t, n)
}

function y(e) {
  let t = R(e, h.default),
    n = function(e) {
      return b(e, h.default)
    }(e);
  return P(e, t, n)
}

function M(e) {
  var t;
  let n = (0, l.useStateFromStores)([h.default], () => null != e && h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function x(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(v.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function w(e) {
  let t = h.default.can(v.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function b(e, t) {
  return null != e && t.can(v.Permissions.MANAGE_THREADS, e)
}

function O(e) {
  return (0, l.useStateFromStores)([h.default], () => b(e, h.default))
}

function V(e) {
  let t = (0, u.default)(),
    n = (0, l.useStateFromStores)([h.default], () => h.default.can(v.Permissions.CONNECT, e)),
    i = M(e),
    r = C.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function D(e) {
  let t = O(e);
  return e.isLockedThread() && !t
}