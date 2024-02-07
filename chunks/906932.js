"use strict";
n.r(t), n.d(t, {
  useAvatarsWithGuilds: function() {
    return d
  },
  setNewPendingUserBio: function() {
    return o
  },
  setNewPendingAvatar: function() {
    return s
  },
  setNewPendingAvatarDecoration: function() {
    return c
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
    return S
  }
}), n("424973");
var u = n("884691"),
  i = n("152584"),
  a = n("234251"),
  l = n("783142"),
  r = n("26989");

function d(e) {
  return u.useMemo(() => {
    let t = r.default.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var u;
      let a = t[i],
        l = null === (u = a[e]) || void 0 === u ? void 0 : u.avatar;
      null != l && (null == n[l] && (n[l] = []), n[l].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function o(e, t) {
  (0, l.setPendingBio)(e === t ? void 0 : e)
}

function s(e, t) {
  (0, i.setPendingAvatar)(e === t ? void 0 : e)
}

function c(e, t) {
  if ((0, a.isEqualAvatarDecoration)(e, null != t ? t : null)) {
    (0, i.setPendingAvatarDecoration)(void 0);
    return
  }(0, i.setPendingAvatarDecoration)(e)
}

function f(e, t) {
  if (e === t) {
    (0, i.setPendingProfileEffectId)(void 0);
    return
  }(0, i.setPendingProfileEffectId)(e)
}

function E(e, t, n) {
  let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e) return "" === e ? {
    value: u ? n : null,
    isUsingGuildValue: !1
  } : {
    value: e,
    isUsingGuildValue: u
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

function S(e, t) {
  return void 0 === e ? null != t : null != e
}