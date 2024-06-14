"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  },
  openCollectibleRewardModal: function() {
    return G
  }
}), n("773603"), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("887024"),
  a = n("979554"),
  o = n("442837"),
  l = n("149020"),
  u = n("481060"),
  d = n("809206"),
  _ = n("607070"),
  c = n("235400"),
  E = n("204418"),
  I = n("583434"),
  T = n("530618"),
  f = n("454585"),
  S = n("164946"),
  h = n("166625"),
  A = n("25990"),
  m = n("594174"),
  N = n("810090"),
  p = n("272008"),
  O = n("497505"),
  C = n("918701"),
  R = n("566078"),
  g = n("114732"),
  L = n("46140"),
  v = n("675654"),
  D = n("689938"),
  M = n("130035");

function y() {
  let e = A.default.getAllPending(),
    t = (0, S.getAccountUpdateForUpdateRequest)(e);
  return (0, d.saveAccountChanges)(t).finally(d.resetPendingAccountChanges)
}

function P(e) {
  var t;
  let {
    transitionState: n,
    onClose: a,
    quest: l,
    location: d,
    reward: c,
    decoration: E,
    onUseNow: I
  } = e, f = r.useRef(null), [S, h] = r.useState(null), A = r.useRef(new s.Environment), N = (0, o.useStateFromStores)([_.default], () => _.default.useReducedMotion), R = (0, o.useStateFromStores)([m.default], () => m.default.getCurrentUser()), L = (0, C.getHeroAssetUrl)(l), D = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, [y, P] = r.useState(D ? "claimed" : "loading");
  r.useEffect(() => {
    !D && (0, p.claimQuestReward)(l.id, O.QuestRewardCodePlatforms.CROSS_PLATFORM, d).then(() => P("claimed")).catch(() => P("error"))
  }, [l, d, D]);
  let b = null == R || null == E || "loading" === y;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.ConfettiCanvas, {
      ref: h,
      className: M.confettiCanvas,
      environment: A.current
    }), (0, i.jsx)("div", {
      ref: f,
      children: (0, i.jsx)(u.ModalRoot, {
        transitionState: n,
        size: u.ModalSize.DYNAMIC,
        className: M.rootContainer,
        hideShadow: !0,
        children: b ? (0, i.jsx)("div", {
          className: M.spinnerContainer,
          children: (0, i.jsx)(u.Spinner, {
            className: M.spinner,
            type: u.Spinner.Type.SPINNING_CIRCLE
          })
        }) : "error" === y ? (0, i.jsx)(g.default, {
          onClose: a
        }) : (0, i.jsx)(U, {
          quest: l,
          user: R,
          primaryColor: l.config.colors.primary,
          secondaryColor: l.config.colors.secondary,
          decoration: E,
          decorationName: c.messages.name,
          backgroundUrl: L,
          isSaving: "applying" === y,
          onClose: a,
          onConfirm: () => {
            P("applying"), I().finally(a)
          }
        })
      })
    }), !N && !D && "claimed" === y && (0, i.jsx)(T.default, {
      confettiTarget: f.current,
      confettiCanvas: S,
      sprites: v.COMMON_CONFETTI_SPRITES,
      colors: v.COMMON_CONFETTI_COLORS
    })]
  })
}

function U(e) {
  let {
    quest: t,
    user: n,
    decoration: r,
    decorationName: s,
    primaryColor: a,
    secondaryColor: o,
    backgroundUrl: d,
    isSaving: _,
    onClose: c,
    onConfirm: I
  } = e, T = (0, C.hasVariant)(t, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), S = R.SharedQuestFields.build(t.config).defaultRewardRedemptionInstructionsByPlatform[O.QuestRewardCodePlatforms.CROSS_PLATFORM], h = (0, C.getCollectibleQuestRewardDuration)(t.config), A = null == h ? D.default.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({
    decorationName: s
  }) : D.default.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
    decorationName: s,
    duration: h
  });
  return (0, i.jsxs)("div", {
    className: M.claimedRootContainer,
    children: [(0, i.jsxs)("div", {
      className: M.headerContainer,
      children: [(0, i.jsx)(N.default, {
        className: M.headerBackground,
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        controls: !1,
        poster: d
      }), (0, i.jsxs)("div", {
        className: M.headerForeground,
        children: [(0, i.jsx)("div", {
          className: M.previewContainer,
          children: (0, i.jsx)(E.default, {
            user: n,
            guildId: null,
            avatarDecorationOverride: r
          })
        }), (0, i.jsx)(u.ModalCloseButton, {
          className: M.close,
          withCircleBackground: !0,
          onClick: c
        })]
      })]
    }), (0, i.jsx)(u.ModalFooter, {
      className: M.footerContainer,
      separator: !1,
      children: (0, i.jsxs)("div", {
        className: M.gradient,
        style: {
          backgroundImage: "linear-gradient(180deg, ".concat(a, ", ").concat(o, ")")
        },
        children: [(0, i.jsx)(u.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: M.heading,
          children: D.default.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: M.text,
          children: A
        }), (0, i.jsx)(u.Button, {
          submitting: _,
          onClick: I,
          children: D.default.Messages.COLLECTIBLES_USE_NOW
        }), T && (0, i.jsxs)("div", {
          className: M.additionalRedemptionInstructions,
          children: [(0, i.jsx)(l.GameControllerIcon, {
            width: 28,
            height: 28,
            className: M.sponsorLogo,
            color: "white"
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/normal",
            className: M.sponsoredBy,
            children: D.default.Messages.QUESTS_REWARD_SPONSORED_BY.format({
              publisherName: t.config.messages.gamePublisher
            })
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: f.default.parse(S, !1, {
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
    location: o,
    onClose: l,
    transitionState: u
  } = e, _ = r.useMemo(() => (0, C.getCollectiblesQuestReward)(s.config), [s]), [E, T] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, I.useFetchCollectiblesProduct)(e), {} = (0, h.default)({}), i = r.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === a.CollectiblesItemType.AVATAR_DECORATION);
      return null == e ? null : e
    }, [t, n]);
    return [i, () => null == i ? Promise.reject() : ((0, d.setPendingAvatarDecoration)(i), y())]
  }(null !== (n = null == _ ? void 0 : _.skuId) && void 0 !== n ? n : null);
  if (null == _) return null;
  let f = (0, C.hasVariant)(s, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST);
  return (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || f ? (0, i.jsx)(P, {
    onClose: l,
    transitionState: u,
    quest: s,
    location: o,
    reward: _,
    decoration: E,
    onUseNow: T
  }) : (0, i.jsx)(c.default, {
    transitionState: u,
    onCloseModal: y,
    onClose: l,
    analyticsLocations: [],
    initialSelectedDecoration: E
  })
}

function G(e, t) {
  (0, u.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.resolve().then(n.bind(n, "920916"));
    return n => (0, i.jsx)(r, {
      ...n,
      quest: e,
      location: t
    })
  })
}