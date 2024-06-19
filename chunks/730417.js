n.d(t, {
  _g: function() {
    return N
  },
  au: function() {
    return T
  },
  c: function() {
    return C
  },
  dy: function() {
    return m
  },
  hs: function() {
    return S
  },
  op: function() {
    return h
  }
});
var s = n(470079),
  i = n(442837),
  l = n(570140),
  a = n(213609),
  r = n(211644),
  o = n(605236),
  c = n(594190),
  u = n(960359),
  d = n(346114),
  E = n(524347),
  _ = n(853197),
  I = n(702512);

function T(e) {
  let t, n;
  let s = d.a.useExperiment({
    location: "59cc4b_1"
  });
  if (null == e) return null;
  let i = (0, _.BS)(e);
  if (null == i) return null;
  if (i.dropsQuestId === I.oL) t = d.a, n = s;
  else t = null, n = null;
  return null == t || null == n ? null : {
    experiment: t,
    config: n,
    drop: i
  }
}

function N(e) {
  var t;
  let n = (0, i.e7)([E.Z], () => E.Z.serverEligibleByQuestIds),
    a = T(e),
    r = function(e) {
      let t = (0, i.Wu)([c.ZP], () => c.ZP.getGamesSeen(!1)),
        n = s.useMemo(() => (0, _.R9)(), []);
      return (0, _.YK)(e, t, n)
    }(e),
    o = null != a && n[a.drop.dropsQuestId];
  null != a && o && r && a.experiment.trackExposure({
    location: "ELIGIBILITY_ENROLLMENT_TOOLTIP"
  });
  let d = null == a ? void 0 : null === (t = a.config) || void 0 === t ? void 0 : t.dropsEnabled,
    I = null == a ? void 0 : a.drop,
    N = null == I || (0, _.hM)(I);
  return s.useEffect(() => {
    d && !N && r && null != I && l.Z.wait(() => {
      null == o && (0, u.Vt)(I.dropsQuestId)
    })
  }, [o, I, d, N, r]), null != I && !!d && !N && o && r
}

function m() {
  let e = T(I.X2.FORTNITE);
  return null == e ? void 0 : e.config.dropsEnabled
}

function h(e) {
  let t = T(e),
    n = null == t ? void 0 : t.drop,
    l = (0, i.e7)([E.Z], () => null != n && E.Z.serverEligibleByQuestIds[n.dropsQuestId]),
    a = (0, i.e7)([E.Z], () => E.Z.hasInitialProgressFetched);
  s.useEffect(() => {
    null != n && l && !a && (0, u.Vb)(n.dropsQuestId)
  }, [n, l, a])
}

function C(e, t, n, s) {
  var l;
  let a = T(e),
    c = null == a ? void 0 : a.drop,
    u = (0, i.e7)([E.Z], () => null != c && E.Z.serverEligibleByQuestIds[c.dropsQuestId]),
    d = (0, i.e7)([E.Z], () => E.Z.getIsPartnerGameQuestComplete(e)),
    I = (0, _.wj)(null == t ? void 0 : t.name, null !== (l = null == c ? void 0 : c.gameSearchTerm) && void 0 !== l ? l : []),
    N = (0, r.ot)([n, s]),
    m = (0, o.wE)(s),
    h = null == c || (0, _.hM)(c),
    C = !!(null != c && !h && I && (null == a ? void 0 : a.config.dropsEnabled) && u);
  return {
    partnerGame: C ? e : null,
    dropsActivityPanelExperienceBlocked: N,
    showDropsSparkles: !d && !m
  }
}

function S(e, t, n) {
  let s = (0, _.BS)(e);
  (0, a.Z)({
    type: t,
    name: n,
    properties: {
      drops_quest_id: null == s ? void 0 : s.dropsQuestId,
      game_id: null == s ? void 0 : s.dropsGameId
    }
  })
}