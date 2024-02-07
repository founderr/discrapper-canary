"use strict";
n.r(t), n.d(t, {
  VoiceInThreadsExperiment: function() {
    return E
  },
  useCanStartPublicThread: function() {
    return S
  },
  computeCanStartPublicThread: function() {
    return v
  },
  useCanStartPrivateThread: function() {
    return A
  },
  useCanStartThread: function() {
    return g
  },
  useCanViewThreadForMessage: function() {
    return C
  },
  useHasActiveThreads: function() {
    return _
  },
  useCanManageThread: function() {
    return I
  },
  useCanUnarchiveThread: function() {
    return R
  },
  canUnarchiveThread: function() {
    return b
  },
  useIsActiveChannelOrUnarchivableThread: function() {
    return N
  },
  getIsActiveChannelOrUnarchivableThread: function() {
    return P
  },
  computeIsReadOnlyThread: function() {
    return x
  },
  useIsThreadModerator: function() {
    return D
  },
  useCanJoinThreadVoice: function() {
    return F
  },
  useIsNonModInLockedThread: function() {
    return w
  }
});
var r = n("917351"),
  a = n.n(r),
  i = n("316693"),
  o = n("446674"),
  s = n("296892"),
  u = n("889014"),
  l = n("913491"),
  d = n("233069"),
  c = n("271938"),
  f = n("42203"),
  h = n("957255"),
  m = n("401690"),
  p = n("49111");
let E = (0, s.default)({
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
  let n = (0, o.useStateFromStores)([h.default], () => {
    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
    return h.default.can(t, e)
  }, [e]);
  return T(n, e, t)
}

function v(e, t) {
  let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
    r = h.default.can(n, e);
  return T(r, e, t)
}

function A(e) {
  let t = (0, o.useStateFromStores)([h.default], () => h.default.can(i.default.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === p.ChannelTypes.GUILD_TEXT && T(t, e)
}

function g(e) {
  let t = S(e),
    n = A(e);
  return t || n
}

function T(e, t, n) {
  return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, l.default)(n))) && !0
}

function C(e) {
  let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
    n = (0, o.useStateFromStores)([h.default], () => h.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
  return function(e, t, n) {
    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
  }(n, e, t)
}

function _(e) {
  return (0, o.useStateFromStoresObject)([m.default, h.default], () => {
    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      i = a(n).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
      o = a(t).some(e => !(e.channel.id in n) && h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
      s = a(r).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: i || o || s,
      hasMoreActiveThreads: s || o
    }
  })
}

function I(e) {
  let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, o.useStateFromStores)([h.default], () => null != t && h.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
    r = (0, o.useStateFromStores)([c.default], () => c.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
}

function M(e, t) {
  return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
}

function y(e, t, n) {
  var r;
  return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
}

function R(e) {
  let t = (0, o.useStateFromStores)([h.default], () => M(e, h.default)),
    n = D(e);
  return y(e, t, n)
}

function b(e) {
  let t = M(e, h.default),
    n = function(e) {
      return L(e, h.default)
    }(e);
  return y(e, t, n)
}

function N(e) {
  var t;
  let n = (0, o.useStateFromStores)([h.default], () => null != e && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function P(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
}

function x(e) {
  let t = h.default.can(p.Permissions.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function L(e, t) {
  return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
}

function D(e) {
  return (0, o.useStateFromStores)([h.default], () => L(e, h.default))
}

function F(e) {
  let t = (0, u.default)(),
    n = (0, o.useStateFromStores)([h.default], () => h.default.can(p.Permissions.CONNECT, e)),
    r = N(e),
    a = E.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && a && n && r
}

function w(e) {
  let t = D(e);
  return e.isLockedThread() && !t
}