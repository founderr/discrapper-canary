"use strict";
n.r(t), n.d(t, {
  useAvatarsWithGuilds: function() {
    return l
  },
  setNewPendingUserBio: function() {
    return o
  },
  setNewPendingAvatar: function() {
    return c
  },
  setNewPendingAvatarDecoration: function() {
    return d
  },
  setNewPendingProfileEffectId: function() {
    return f
  },
  getProfilePreviewField: function() {
    return E
  },
  showRemoveAvatar: function() {
    return _
  },
  showRemoveBanner: function() {
    return T
  }
}), n("424973");
var i = n("884691"),
  r = n("152584"),
  u = n("234251"),
  a = n("783142"),
  s = n("26989");

function l(e) {
  return i.useMemo(() => {
    let t = s.default.getMutableAllGuildsAndMembers(),
      n = {};
    for (let r in t) {
      var i;
      let u = t[r],
        a = null === (i = u[e]) || void 0 === i ? void 0 : i.avatar;
      null != a && (null == n[a] && (n[a] = []), n[a].push(r))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function o(e, t) {
  (0, a.setPendingBio)(e === t ? void 0 : e)
}

function c(e, t) {
  (0, r.setPendingAvatar)(e === t ? void 0 : e)
}

function d(e, t) {
  if ((0, u.isEqualAvatarDecoration)(e, null != t ? t : null)) {
    (0, r.setPendingAvatarDecoration)(void 0);
    return
  }(0, r.setPendingAvatarDecoration)(e)
}

function f(e, t) {
  if (e === t) {
    (0, r.setPendingProfileEffectId)(void 0);
    return
  }(0, r.setPendingProfileEffectId)(e)
}

function E(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e) return "" === e ? {
    value: i ? n : null,
    isUsingGuildValue: !1
  } : {
    value: e,
    isUsingGuildValue: i
  };
  return null != t && "" !== t ? {
    value: t,
    isUsingGuildValue: !0
  } : {
    value: n,
    isUsingGuildValue: !1
  }
}

function _(e, t) {
  return void 0 === e ? null != t : null != e
}

function T(e, t) {
  return void 0 === e ? null != t : null != e
}