"use strict";
n.r(t), n.d(t, {
  useAvatarsWithGuilds: function() {
    return d
  },
  setNewPendingUserBio: function() {
    return r
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
var l = n("884691"),
  i = n("152584"),
  a = n("234251"),
  u = n("783142"),
  o = n("26989");

function d(e) {
  return l.useMemo(() => {
    let t = o.default.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var l;
      let a = t[i],
        u = null === (l = a[e]) || void 0 === l ? void 0 : l.avatar;
      null != u && (null == n[u] && (n[u] = []), n[u].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function r(e, t) {
  (0, u.setPendingBio)(e === t ? void 0 : e)
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
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e) return "" === e ? {
    value: l ? n : null,
    isUsingGuildValue: !1
  } : {
    value: e,
    isUsingGuildValue: l
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