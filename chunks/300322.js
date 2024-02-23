"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return _
  },
  useCanStartPublicThread: function() {
    return p
  },
  computeCanStartPublicThread: function() {
    return S
  },
  useCanStartPrivateThread: function() {
    return m
  },
  useCanStartThread: function() {
    return g
  },
  useCanViewThreadForMessage: function() {
    return N
  },
  useHasActiveThreads: function() {
    return T
  },
  useCanManageThread: function() {
    return A
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
    return P
  },
  computeIsReadOnlyThread: function() {
    return j
  },
  useIsThreadModerator: function() {
    return w
  },
  useCanJoinThreadVoice: function() {
    return b
  },
  useIsNonModInLockedThread: function() {
    return O
  }
});
var i = n("917351"),
  l = n.n(i),
  r = n("316693"),
  s = n("446674"),
  a = n("296892"),
  u = n("889014"),
  o = n("913491"),
  d = n("233069"),
  c = n("271938"),
  f = n("42203"),
  h = n("957255"),
  E = n("299039"),
  v = n("401690"),
  C = n("49111");
let _ = (0, a.default)({
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

function p(e, t) {
  let n = (0, s.useStateFromStores)([h.default], () => {
    let t = e.isForumLikeChannel() ? C.Permissions.SEND_MESSAGES : r.default.combine(C.Permissions.CREATE_PUBLIC_THREADS, C.Permissions.READ_MESSAGE_HISTORY);
    return h.default.can(t, e)
  }, [e]);
  return I(n, e, t)
}

function S(e, t) {
  let n = e.isForumLikeChannel() ? C.Permissions.SEND_MESSAGES : r.default.combine(C.Permissions.CREATE_PUBLIC_THREADS, C.Permissions.READ_MESSAGE_HISTORY),
    i = h.default.can(n, e);
  return I(i, e, t)
}

function m(e) {
  let t = (0, s.useStateFromStores)([h.default], () => h.default.can(r.default.combine(C.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === C.ChannelTypes.GUILD_TEXT && I(t, e)
}

function g(e) {
  let t = p(e),
    n = m(e);
  return t || n
}

function I(e, t, n) {
  return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(C.MessageFlags.HAS_THREAD) || (0, o.default)(n))) && !0
}

function N(e) {
  let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(E.default.castMessageIdAsChannelId(e.id)), [e]),
    n = (0, s.useStateFromStores)([h.default], () => h.default.can(C.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(C.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function T(e) {
  return (0, s.useStateFromStoresObject)([v.default, h.default], () => {
    let t = v.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = v.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = v.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      r = l(n).some(e => h.default.can(C.Permissions.VIEW_CHANNEL, e.channel)),
      s = l(t).some(e => !(e.channel.id in n) && h.default.can(C.Permissions.VIEW_CHANNEL, e.channel)),
      a = l(i).some(e => h.default.can(C.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: r || s || a,
      hasMoreActiveThreads: a || s
    }
  })
}

function A(e) {
  let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, s.useStateFromStores)([h.default], () => null != t && h.default.can(C.Permissions.MANAGE_THREADS, t), [t]),
    i = (0, s.useStateFromStores)([c.default], () => c.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function x(e, t) {
  return null != e && t.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function R(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function L(e) {
  let t = (0, s.useStateFromStores)([h.default], () => x(e, h.default)),
    n = w(e);
  return R(e, t, n)
}

function y(e) {
  let t = x(e, h.default),
    n = function(e) {
      return D(e, h.default)
    }(e);
  return R(e, t, n)
}

function M(e) {
  var t;
  let n = (0, s.useStateFromStores)([h.default], () => null != e && h.default.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function P(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(C.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function j(e) {
  let t = h.default.can(C.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function D(e, t) {
  return null != e && t.can(C.Permissions.MANAGE_THREADS, e)
}

function w(e) {
  return (0, s.useStateFromStores)([h.default], () => D(e, h.default))
}

function b(e) {
  let t = (0, u.default)(),
    n = (0, s.useStateFromStores)([h.default], () => h.default.can(C.Permissions.CONNECT, e)),
    i = M(e),
    l = _.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && l && n && i
}

function O(e) {
  let t = w(e);
  return e.isLockedThread() && !t
}