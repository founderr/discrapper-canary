"use strict";
n.r(t), n.d(t, {
  useAnimatedRefreshIcon: function() {
    return S
  },
  useHandleClaimQuestsReward: function() {
    return T
  },
  useHasLaunchedGame: function() {
    return f
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("920906"),
  a = n("442837"),
  o = n("594190"),
  l = n("594174"),
  u = n("869472"),
  d = n("617136"),
  _ = n("918701"),
  c = n("920916"),
  E = n("669041"),
  I = n("341907");

function T(e) {
  let {
    quest: t,
    location: n,
    questContentPosition: i
  } = e, s = (0, a.useStateFromStores)([l.default], () => {
    var e;
    return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return r.useCallback(() => {
    null != t && ((0, d.trackQuestContentClicked)({
      questId: t.id,
      questContent: n,
      questContentCTA: d.QuestContentCTA.CLAIM_REWARD,
      questContentPosition: i
    }), s ? (0, _.hasCollectiblesQuestReward)(t.config) ? (0, c.openCollectibleRewardModal)(t, n) : (0, I.openQuestsRewardCodeModal)({
      questId: t.id,
      location: n,
      questContentPosition: i
    }) : (0, E.openRewardModalUnverified)())
  }, [t, n, i, s])
}

function f(e) {
  var t;
  let n = (0, a.useStateFromStoresArray)([o.default], () => o.default.getGamesSeen(!1)).find(t => (null == t ? void 0 : t.id) === e);
  if (null == n) return !1;
  let i = Date.now() - 2592e7;
  return i <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0)
}
let S = e => {
  let {
    useReducedMotion: t,
    className: n,
    size: a = 16
  } = e, [o, l] = (0, s.useSpring)(() => ({})), d = r.useRef(!1), _ = (0, s.animated)(u.default);
  return {
    render: () => (0, i.jsx)(_, {
      className: n,
      style: t ? void 0 : o,
      height: a,
      width: a
    }),
    startAnimation: () => {
      d.current = !0, l({
        from: {
          rotate: "0deg"
        },
        to: {
          rotate: "360deg"
        },
        config: {
          tension: 750,
          mass: 5,
          friction: 100
        },
        loop: () => d,
        immediate: t
      })
    },
    stopAnimation: () => {
      d.current = !1
    }
  }
}