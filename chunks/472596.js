e.d(_, {
  RE: function() {
    return D
  },
  RN: function() {
    return U
  },
  po: function() {
    return s
  },
  qr: function() {
    return S
  },
  xb: function() {
    return O
  },
  zq: function() {
    return l
  }
});
var T, s, I = e(470079),
  A = e(399606),
  n = e(906732),
  N = e(171368),
  t = e(430824),
  r = e(594174),
  a = e(91047),
  L = e(981631);
let D = (E, _) => {
  let {
    guildId: e,
    userId: T,
    colorRoleId: s
  } = E;
  (0, N.openUserProfileModal)({
    userId: T,
    guildId: e,
    sourceAnalyticsLocations: _,
    roleId: s,
    analyticsLocation: {
      section: L.jXE.MEMBER_SAFETY_PAGE,
      object: L.qAy.ACTIONED_BY_USER
    }
  })
};

function S(E, _, e) {
  let {
    analyticsLocations: T
  } = (0, n.ZP)();
  return I.useCallback(s => {
    if (null == E) return;
    let I = r.default.getUser(E.userId);
    if (null != I) s.stopPropagation(), (0, a.n8)(s, {
      user: I,
      guildId: E.guildId,
      analyticsLocations: null != _ ? [_] : T,
      onCloseContextMenu: e
    })
  }, [E, T, e, _])
}

function U(E, _, e) {
  let {
    analyticsLocations: T
  } = (0, n.ZP)();
  return I.useCallback(s => {
    if (null == E) return;
    let I = r.default.getUser(E.userId);
    if (null != I) s.stopPropagation(), (0, a._j)(s, {
      user: I,
      guildId: E.guildId,
      analyticsLocations: null != _ ? [_] : T,
      onCloseContextMenu: e,
      showTransferOwnershipItem: !0
    })
  }, [E, e, T, _])
}

function l(E) {
  return (0, A.e7)([t.Z], () => {
    var _;
    if (null == E) return null;
    let e = t.Z.getGuild(E.guildId);
    return null == e || null == E.highestRoleId ? null : null !== (_ = t.Z.getRole(e.id, E.highestRoleId)) && void 0 !== _ ? _ : null
  }, [E])
}

function O(E, _, e) {
  return _ ? 0 : E ? 1 : e <= 0 ? 2 : 3
}(T = s || (s = {}))[T.LOADING = 0] = "LOADING", T[T.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", T[T.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", T[T.SUCCESS_FULL = 3] = "SUCCESS_FULL"