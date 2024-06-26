"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  },
  openCollectibleRewardModal: function() {
    return x
  }
}), n(773603), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(887024),
  l = n(979554),
  u = n(442837),
  _ = n(481060),
  c = n(809206),
  d = n(607070),
  E = n(235400),
  I = n(204418),
  T = n(583434),
  h = n(530618),
  f = n(454585),
  S = n(164946),
  N = n(166625),
  A = n(25990),
  m = n(594174),
  O = n(810090),
  p = n(272008),
  R = n(497505),
  g = n(918701),
  C = n(566078),
  v = n(114732),
  L = n(46140),
  D = n(675654),
  M = n(689938),
  P = n(659325),
  y = n(789002);

function U() {
  let e = A.Z.getAllPending(),
    t = (0, S.ED)(e);
  return (0, c.Mn)(t).finally(c.si)
}

function b(e) {
  var t;
  let {
    transitionState: n,
    onClose: s,
    quest: l,
    location: c,
    reward: E,
    decoration: I,
    onUseNow: T
  } = e, f = r.useRef(null), [S, N] = r.useState(null), A = r.useRef(new a.qA), O = (0, u.e7)([d.Z], () => d.Z.useReducedMotion), C = (0, u.e7)([m.default], () => m.default.getCurrentUser()), L = (0, g.j8)(l), M = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, [y, U] = r.useState(M ? "claimed" : "loading");
  r.useEffect(() => {
    !M && (0, p.QB)(l.id, R.y$.CROSS_PLATFORM, c).then(() => U("claimed")).catch(() => U("error"))
  }, [l, c, M]);
  let b = null == C || null == I || "loading" === y;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.O_, {
      ref: N,
      className: P.confettiCanvas,
      environment: A.current
    }), (0, i.jsx)("div", {
      ref: f,
      children: (0, i.jsx)(_.ModalRoot, {
        transitionState: n,
        size: _.ModalSize.DYNAMIC,
        className: o()(P.rootContainer, {
          [P.rootContainerLoading]: b
        }),
        hideShadow: !0,
        children: b ? (0, i.jsx)(_.Spinner, {
          type: _.Spinner.Type.SPINNING_CIRCLE
        }) : "error" === y ? (0, i.jsx)(v.Z, {
          onClose: s
        }) : (0, i.jsx)(G, {
          quest: l,
          user: C,
          primaryColor: l.config.colors.primary,
          secondaryColor: l.config.colors.secondary,
          decoration: I,
          decorationName: E.messages.name,
          backgroundUrl: L,
          isSaving: "applying" === y,
          onClose: s,
          onConfirm: () => {
            U("applying"), T().finally(s)
          }
        })
      })
    }), !O && !M && "claimed" === y && (0, i.jsx)(h.Z, {
      confettiTarget: f.current,
      confettiCanvas: S,
      sprites: D.CA,
      colors: D.Br
    })]
  })
}

function G(e) {
  let {
    quest: t,
    user: n,
    decoration: r,
    decorationName: s,
    primaryColor: o,
    secondaryColor: a,
    backgroundUrl: l,
    isSaving: u,
    onClose: c,
    onConfirm: d
  } = e, E = (0, g.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST), T = C.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[R.y$.CROSS_PLATFORM], h = (0, g.Kr)(t.config), S = null == h ? M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({
    decorationName: s
  }) : M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
    decorationName: s,
    duration: h
  });
  return (0, i.jsxs)("div", {
    className: P.claimedRootContainer,
    children: [(0, i.jsxs)("div", {
      className: P.headerContainer,
      children: [(0, i.jsx)(O.Z, {
        className: P.headerBackground,
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        controls: !1,
        poster: l
      }), (0, i.jsxs)("div", {
        className: P.headerForeground,
        children: [(0, i.jsx)("div", {
          className: P.previewContainer,
          children: (0, i.jsx)(I.Z, {
            user: n,
            guildId: null,
            avatarDecorationOverride: r
          })
        }), (0, i.jsx)(_.ModalCloseButton, {
          className: P.close,
          withCircleBackground: !0,
          onClick: c
        })]
      })]
    }), (0, i.jsx)(_.ModalFooter, {
      className: P.footerContainer,
      separator: !1,
      children: (0, i.jsxs)("div", {
        className: P.gradient,
        style: {
          backgroundImage: "linear-gradient(180deg, ".concat(o, ", ").concat(a, ")")
        },
        children: [(0, i.jsx)(_.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: P.heading,
          children: M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
        }), (0, i.jsx)(_.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: P.text,
          children: S
        }), (0, i.jsx)(_.Button, {
          submitting: u,
          onClick: d,
          children: M.Z.Messages.COLLECTIBLES_USE_NOW
        }), E && (0, i.jsxs)("div", {
          className: P.additionalRedemptionInstructions,
          children: [(0, i.jsx)("img", {
            src: y,
            alt: "",
            className: P.sponsorLogo
          }), (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            className: P.sponsoredBy,
            children: M.Z.Messages.QUESTS_REWARD_SPONSORED_BY.format({
              publisherName: t.config.messages.gamePublisher
            })
          }), (0, i.jsx)(_.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: f.Z.parse(T, !1, {
              allowLinks: !0
            })
          })]
        })]
      })
    })]
  })
}

function w(e) {
  var t, n;
  let {
    quest: s,
    location: o,
    onClose: a,
    transitionState: u
  } = e, _ = r.useMemo(() => (0, g.xn)(s.config), [s]), [d, I] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, T.T)(e), {} = (0, N.Z)({}), i = r.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === l.Z.AVATAR_DECORATION);
      return null == e ? null : e
    }, [t, n]);
    return [i, () => null == i ? Promise.reject() : ((0, c.cV)(i), U())]
  }(null !== (n = null == _ ? void 0 : _.skuId) && void 0 !== n ? n : null);
  if (null == _) return null;
  let h = (0, g.zK)(s, L.S7.IN_HOUSE_CONSOLE_QUEST);
  return (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || h ? (0, i.jsx)(b, {
    onClose: a,
    transitionState: u,
    quest: s,
    location: o,
    reward: _,
    decoration: d,
    onUseNow: I
  }) : (0, i.jsx)(E.default, {
    transitionState: u,
    onCloseModal: U,
    onClose: a,
    analyticsLocations: [],
    initialSelectedDecoration: d
  })
}

function x(e, t) {
  (0, _.openModalLazy)(async () => {
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