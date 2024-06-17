"use strict";
n.d(t, {
  Ft: function() {
    return f
  },
  ML: function() {
    return O
  },
  ZJ: function() {
    return m
  },
  mF: function() {
    return i
  }
}), n(47120);
var i, r, s = n(512722),
  o = n.n(s),
  a = n(373793),
  l = n(149765),
  u = n(911969),
  _ = n(399860),
  d = n(131704),
  c = n(430824),
  E = n(895924),
  I = n(581364),
  T = n(807169),
  h = n(689079),
  S = n(981631);

function f(e, t, n) {
  let {
    context: i,
    commandType: r,
    allowNsfw: s,
    computedPermissions: _,
    userId: f,
    roleIds: N,
    isImpersonating: A,
    hasBaseAccessPermissions: R,
    hasSendMessagesPermission: C
  } = t, {
    applicationAllowedForUser: p,
    applicationAllowedForChannel: g,
    isGuildInstalled: L,
    commandBotId: v
  } = n;
  if (e.type !== r) return 2;
  if (e.nsfw && !s) return 1;
  let D = (0, T.Vh)(i, v);
  if (null != e.contexts) {
    if (!e.contexts.includes(D)) return 4
  } else if (e.inputType === E.iw.BOT && (!1 === e.dmPermission && D === u.D.BOT_DM || D === u.D.PRIVATE_CHANNEL)) return 4;
  if (null != e.predicate && i instanceof d.Sf) {
    let t = c.Z.getGuild(i.guild_id);
    if (!e.predicate({
        channel: i,
        guild: t
      })) return 3
  }
  if (e.applicationId === h.bi.BUILT_IN) return 0;
  let M = (0, T.ny)(i);
  if (null == M || l.e$(_, S.Plq.ADMINISTRATOR)) return 0;
  if (!R || !C && L && (null == e.integration_types || e.integration_types.includes(a.Y.GUILD_INSTALL))) return 5;
  if (i instanceof d.Sf) {
    o()(void 0 !== g, "missing applicationAllowedForChannel");
    let t = m(e.permissions, i, M);
    if (function(e) {
        return !1 === e
      }(t) || ! function(e) {
        return !0 === e
      }(t) && function(e) {
        return !1 === e
      }(g)) return 6
  }
  let P = O(e.permissions, M, f, N, A);
  return function(e) {
    return !0 === e
  }(P) ? 0 : function(e) {
    return !1 === e
  }(P) ? 7 : function(e) {
    return !1 === e
  }(p) || null != e.defaultMemberPermissions && !(!l.fS(e.defaultMemberPermissions, I.BO) && l.e$(_, e.defaultMemberPermissions)) ? 7 : 0
}

function N(e) {
  return !0 === e
}

function A(e) {
  return !1 === e
}

function m(e, t, n) {
  if (null == e) return null;
  let i = t.id;
  if (t.isThread()) {
    var r;
    i = null !== (r = t.parent_id) && void 0 !== r ? r : t.id
  }
  let s = e[(0, _.rE)(i, E.Kw.CHANNEL)];
  if (null != s) return s.permission;
  let o = e[(0, _.rE)((0, I.bD)(n), E.Kw.CHANNEL)];
  return null != o ? o.permission : null
}

function O(e, t, n, i, r) {
  if (null == e) return null;
  if (!r) {
    let t = e[(0, _.rE)(n, E.Kw.USER)];
    if (null != t) return t.permission
  }
  let s = !1;
  for (let t of i) {
    let n = e[(0, _.rE)(t, E.Kw.ROLE)];
    if (null != n) {
      if (n.permission) return !0;
      s = !0
    }
  }
  if (s) return !1;
  let o = e[(0, _.rE)(t, E.Kw.ROLE)];
  return null != o ? o.permission : null
}(r = i || (i = {}))[r.ALLOWED = 0] = "ALLOWED", r[r.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", r[r.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", r[r.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", r[r.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", r[r.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", r[r.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", r[r.USER_DENIED = 7] = "USER_DENIED"