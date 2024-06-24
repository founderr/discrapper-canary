"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  },
  openCollectibleRewardModal: function() {
    return G
  }
}), n(773603), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(887024),
  o = n(979554),
  a = n(442837),
  l = n(481060),
  u = n(809206),
  _ = n(607070),
  c = n(235400),
  d = n(204418),
  E = n(583434),
  I = n(530618),
  T = n(454585),
  h = n(164946),
  S = n(166625),
  f = n(25990),
  N = n(594174),
  A = n(810090),
  m = n(272008),
  O = n(497505),
  R = n(918701),
  p = n(566078),
  g = n(114732),
  C = n(46140),
  v = n(675654),
  L = n(689938),
  D = n(659325),
  M = n(789002);

function P() {
  let e = f.Z.getAllPending(),
    t = (0, h.ED)(e);
  return (0, u.Mn)(t).finally(u.si)
}

function y(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: u,
    location: c,
    reward: d,
    decoration: E,
    onUseNow: T
  } = e, h = r.useRef(null), [S, f] = r.useState(null), A = r.useRef(new s.qA), p = (0, a.e7)([_.Z], () => _.Z.useReducedMotion), C = (0, a.e7)([N.default], () => N.default.getCurrentUser()), L = (0, R.j8)(u), M = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, [P, y] = r.useState(M ? "claimed" : "loading");
  r.useEffect(() => {
    !M && (0, m.QB)(u.id, O.y$.CROSS_PLATFORM, c).then(() => y("claimed")).catch(() => y("error"))
  }, [u, c, M]);
  let b = null == C || null == E || "loading" === P;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.O_, {
      ref: f,
      className: D.confettiCanvas,
      environment: A.current
    }), (0, i.jsx)("div", {
      ref: h,
      children: (0, i.jsx)(l.ModalRoot, {
        transitionState: n,
        size: l.ModalSize.DYNAMIC,
        className: D.rootContainer,
        hideShadow: !0,
        children: b ? (0, i.jsx)("div", {
          className: D.spinnerContainer,
          children: (0, i.jsx)(l.Spinner, {
            className: D.spinner,
            type: l.Spinner.Type.SPINNING_CIRCLE
          })
        }) : "error" === P ? (0, i.jsx)(g.Z, {
          onClose: o
        }) : (0, i.jsx)(U, {
          quest: u,
          user: C,
          primaryColor: u.config.colors.primary,
          secondaryColor: u.config.colors.secondary,
          decoration: E,
          decorationName: d.messages.name,
          backgroundUrl: L,
          isSaving: "applying" === P,
          onClose: o,
          onConfirm: () => {
            y("applying"), T().finally(o)
          }
        })
      })
    }), !p && !M && "claimed" === P && (0, i.jsx)(I.Z, {
      confettiTarget: h.current,
      confettiCanvas: S,
      sprites: v.CA,
      colors: v.Br
    })]
  })
}

function U(e) {
  let {
    quest: t,
    user: n,
    decoration: r,
    decorationName: s,
    primaryColor: o,
    secondaryColor: a,
    backgroundUrl: u,
    isSaving: _,
    onClose: c,
    onConfirm: E
  } = e, I = (0, R.zK)(t, C.S7.IN_HOUSE_CONSOLE_QUEST), h = p.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[O.y$.CROSS_PLATFORM], S = (0, R.Kr)(t.config), f = null == S ? L.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({
    decorationName: s
  }) : L.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
    decorationName: s,
    duration: S
  });
  return (0, i.jsxs)("div", {
    className: D.claimedRootContainer,
    children: [(0, i.jsxs)("div", {
      className: D.headerContainer,
      children: [(0, i.jsx)(A.Z, {
        className: D.headerBackground,
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        controls: !1,
        poster: u
      }), (0, i.jsxs)("div", {
        className: D.headerForeground,
        children: [(0, i.jsx)("div", {
          className: D.previewContainer,
          children: (0, i.jsx)(d.Z, {
            user: n,
            guildId: null,
            avatarDecorationOverride: r
          })
        }), (0, i.jsx)(l.ModalCloseButton, {
          className: D.close,
          withCircleBackground: !0,
          onClick: c
        })]
      })]
    }), (0, i.jsx)(l.ModalFooter, {
      className: D.footerContainer,
      separator: !1,
      children: (0, i.jsxs)("div", {
        className: D.gradient,
        style: {
          backgroundImage: "linear-gradient(180deg, ".concat(o, ", ").concat(a, ")")
        },
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: D.heading,
          children: L.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
        }), (0, i.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: D.text,
          children: f
        }), (0, i.jsx)(l.Button, {
          submitting: _,
          onClick: E,
          children: L.Z.Messages.COLLECTIBLES_USE_NOW
        }), I && (0, i.jsxs)("div", {
          className: D.additionalRedemptionInstructions,
          children: [(0, i.jsx)("img", {
            src: M,
            alt: "",
            className: D.sponsorLogo
          }), (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: D.sponsoredBy,
            children: L.Z.Messages.QUESTS_REWARD_SPONSORED_BY.format({
              publisherName: t.config.messages.gamePublisher
            })
          }), (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: T.Z.parse(h, !1, {
              allowLinks: !0
            })
          })]
        })]
      })
    })]
  })
}

function b(e) {
  var t, n;
  let {
    quest: s,
    location: a,
    onClose: l,
    transitionState: _
  } = e, d = r.useMemo(() => (0, R.xn)(s.config), [s]), [I, T] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, E.T)(e), {} = (0, S.Z)({}), i = r.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === o.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [t, n]);
    return [i, () => null == i ? Promise.reject() : ((0, u.cV)(i), P())]
  }(null !== (n = null == d ? void 0 : d.skuId) && void 0 !== n ? n : null);
  if (null == d) return null;
  let h = (0, R.zK)(s, C.S7.IN_HOUSE_CONSOLE_QUEST);
  return (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || h ? (0, i.jsx)(y, {
    onClose: l,
    transitionState: _,
    quest: s,
    location: a,
    reward: d,
    decoration: I,
    onUseNow: T
  }) : (0, i.jsx)(c.default, {
    transitionState: _,
    onCloseModal: P,
    onClose: l,
    analyticsLocations: [],
    initialSelectedDecoration: I
  })
}

function G(e, t) {
  (0, l.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.resolve().then(n.bind(n, 920916));
    return n => (0, i.jsx)(r, {
      ...n,
      quest: e,
      location: t
    })
  })
}