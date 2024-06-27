"use strict";
n.d(t, {
  $R: function() {
    return M
  },
  C7: function() {
    return g
  },
  Ek: function() {
    return R
  },
  Gu: function() {
    return w
  },
  JQ: function() {
    return p
  },
  NE: function() {
    return S
  },
  RG: function() {
    return P
  },
  Xb: function() {
    return b
  },
  Xu: function() {
    return N
  },
  Y: function() {
    return G
  },
  cD: function() {
    return m
  },
  ki: function() {
    return A
  },
  kn: function() {
    return D
  },
  tM: function() {
    return f
  },
  tc: function() {
    return L
  },
  xl: function() {
    return y
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(149765),
  o = n(442837),
  a = n(987170),
  l = n(590293),
  u = n(901461),
  _ = n(131704),
  c = n(314897),
  d = n(592125),
  E = n(496675),
  I = n(709054),
  T = n(601070),
  h = n(981631);
let f = (0, a.Z)({
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
  return O((0, o.e7)([E.Z], () => {
    let t = e.isForumLikeChannel() ? h.Plq.SEND_MESSAGES : s.$e(h.Plq.CREATE_PUBLIC_THREADS, h.Plq.READ_MESSAGE_HISTORY);
    return E.Z.can(t, e)
  }, [e]), e, t)
}

function A(e, t) {
  let n = e.isForumLikeChannel() ? h.Plq.SEND_MESSAGES : s.$e(h.Plq.CREATE_PUBLIC_THREADS, h.Plq.READ_MESSAGE_HISTORY);
  return O(E.Z.can(n, e), e, t)
}

function N(e) {
  let t = (0, o.e7)([E.Z], () => E.Z.can(s.$e(h.Plq.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === h.d4z.GUILD_TEXT && O(t, e)
}

function m(e) {
  let t = S(e),
    n = N(e);
  return t || n
}

function O(e, t, n) {
  return !(__OVERLAY__ || !e || !_.uC.has(t.type) || null != n && (n.hasFlag(h.iLy.HAS_THREAD) || (0, u.Z)(n))) && !0
}

function R(e) {
  let t = (0, o.e7)([d.Z], () => d.Z.getChannel(I.default.castMessageIdAsChannelId(e.id)), [e]);
  return function(e, t, n) {
    return !!t.hasFlag(h.iLy.HAS_THREAD) && null != n && !!e || !1
  }((0, o.e7)([E.Z], () => E.Z.can(h.Plq.VIEW_CHANNEL, t), [t]), e, t)
}

function p(e) {
  return (0, o.cj)([T.Z, E.Z], () => {
    let t = T.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = T.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      i = T.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      s = r()(n).some(e => E.Z.can(h.Plq.VIEW_CHANNEL, e.channel)),
      o = r()(t).some(e => !(e.channel.id in n) && E.Z.can(h.Plq.VIEW_CHANNEL, e.channel)),
      a = r()(i).some(e => E.Z.can(h.Plq.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: s || o || a,
      hasMoreActiveThreads: a || o
    }
  })
}

function g(e) {
  let t = (0, o.e7)([d.Z], () => d.Z.getChannel(null == e ? void 0 : e.parent_id)),
    n = (0, o.e7)([E.Z], () => null != t && E.Z.can(h.Plq.MANAGE_THREADS, t), [t]),
    i = (0, o.e7)([c.default], () => c.default.getId());
  return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === i || !1))
}

function C(e, t) {
  return null != e && t.can(h.Plq.SEND_MESSAGES_IN_THREADS, e)
}

function v(e, t, n) {
  var i;
  return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? n : t)
}

function L(e) {
  let t = (0, o.e7)([E.Z], () => C(e, E.Z)),
    n = b(e);
  return v(e, t, n)
}

function D(e) {
  let t = C(e, E.Z),
    n = function(e) {
      return U(e, E.Z)
    }(e);
  return v(e, t, n)
}

function M(e) {
  var t;
  let n = (0, o.e7)([E.Z], () => null != e && E.Z.can(h.Plq.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
}

function P(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.Z.can(h.Plq.SEND_MESSAGES_IN_THREADS, e))
}

function y(e) {
  let t = E.Z.can(h.Plq.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function U(e, t) {
  return null != e && t.can(h.Plq.MANAGE_THREADS, e)
}

function b(e) {
  return (0, o.e7)([E.Z], () => U(e, E.Z))
}

function G(e) {
  let t = (0, l.Z)(),
    n = (0, o.e7)([E.Z], () => E.Z.can(h.Plq.CONNECT, e)),
    i = M(e),
    r = f.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: !1
    }).enabled;
  return !t && e.isVocalThread() && r && n && i
}

function w(e) {
  let t = b(e);
  return e.isLockedThread() && !t
}