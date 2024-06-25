"use strict";
n.d(t, {
  Z: function() {
    return w
  }
}), n(47120), n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(442837),
  u = n(524437),
  _ = n(481060),
  c = n(153867),
  d = n(230711),
  E = n(351773),
  I = n(607070),
  T = n(100527),
  h = n(906732),
  f = n(639119),
  S = n(197115),
  A = n(587446),
  N = n(594174),
  m = n(626135),
  O = n(74538),
  p = n(238302),
  R = n(514361),
  g = n(572397),
  C = n(705262),
  v = n(981631),
  L = n(921944),
  D = n(474936),
  M = n(689938),
  P = n(219734);
let y = () => (0, i.jsx)("div", {
    className: P.editorHeader,
    children: (0, i.jsxs)("div", {
      className: P.bannerUpsell,
      children: [(0, i.jsx)(A.Z, {
        className: P.premiumIcon
      }), (0, i.jsx)(_.Heading, {
        variant: "heading-md/bold",
        color: "always-white",
        children: M.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
      })]
    })
  }),
  U = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, g.q)();
    return (0, i.jsxs)("div", {
      className: P.editorHeader,
      children: [(0, i.jsx)(_.Clickable, {
        className: P.closeCircleButton,
        onClick: () => {
          null != t && t(L.L.DISMISS), n(v.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, p.my)()
        },
        children: (0, i.jsx)(_.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: P.closeCircle
        })
      }), (0, i.jsx)(_.Heading, {
        variant: "heading-lg/extrabold",
        children: M.Z.Messages.CLIENT_THEMES_EDITOR_HEADER
      })]
    })
  },
  b = e => {
    var t, n, r;
    let {
      onSubscribeSuccess: s,
      markAsDismissed: o
    } = e, {
      analyticsLocations: a
    } = (0, h.ZP)(T.Z.CLIENT_THEMES_EDITOR), [d, E] = (0, l.Wu)([N.default, R.Z], () => [R.Z.gradientPreset, O.ZP.isPremium(N.default.getCurrentUser())]), I = (0, f.N)(), A = (0, O.Rt)({
      intervalType: null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.interval,
      intervalCount: null == I ? void 0 : null === (n = I.subscription_trial) || void 0 === n ? void 0 : n.interval_count
    });
    return (0, i.jsx)(S.Z, {
      size: _.Button.Sizes.MEDIUM,
      buttonText: E ? M.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == I ? void 0 : null === (r = I.subscription_trial) || void 0 === r ? void 0 : r.sku_id) === D.Si.TIER_2 ? A : M.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      subscriptionTier: D.Si.TIER_2,
      onSubscribeModalClose: e => {
        if (!e) return;
        if (null == s || s(), null != o && o(L.L.PRIMARY), null != d)(0, C.Yk)({
          isPersisted: !0,
          themeName: u.Us[d.id],
          analyticsLocations: a
        }), (0, c.ZI)({
          backgroundGradientPresetId: d.id,
          theme: d.theme
        })
      }
    })
  },
  G = e => {
    let {
      markAsDismissed: t
    } = e, {
      isPreview: n,
      isCoachmark: s
    } = (0, l.cj)([R.Z], () => ({
      isPreview: R.Z.isPreview,
      isCoachmark: R.Z.isCoachmark
    })), [o, u] = r.useState(!1), c = (0, g.q)(), E = (0, a.EQ)({
      isPreview: n,
      isCoachmark: s,
      forceShowCloseButton: o
    }).with({
      isCoachmark: !0
    }, {
      forceShowCloseButton: !0
    }, () => M.Z.Messages.CLOSE).with({
      isPreview: !0
    }, () => M.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => M.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
    return (0, i.jsxs)("div", {
      className: P.editorFooter,
      children: [n && (0, i.jsx)(b, {
        onSubscribeSuccess: () => {
          u(!0)
        },
        markAsDismissed: t
      }), (0, i.jsx)(_.Button, {
        className: P.footerButton,
        onClick: () => {
          null != t && t(L.L.DISMISS), c(v.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, p.my)(), !s && d.Z.open()
        },
        color: _.Button.Colors.PRIMARY,
        size: _.Button.Sizes.MEDIUM,
        children: E
      })]
    })
  };

function w(e) {
  let {
    markAsDismissed: t
  } = e, {
    analyticsLocations: n
  } = (0, h.ZP)(T.Z.CLIENT_THEMES_EDITOR), {
    isPreview: s,
    isCoachmark: a,
    isEditorOpen: u,
    shouldEditorAnimate: c
  } = (0, l.cj)([R.Z, I.Z], () => ({
    isPreview: R.Z.isPreview,
    isCoachmark: R.Z.isCoachmark,
    isEditorOpen: R.Z.isEditorOpen,
    shouldEditorAnimate: R.Z.isCoachmark && !I.Z.useReducedMotion
  })), d = (0, g.q)();
  r.useEffect(() => d(v.rMx.CLIENT_THEME_PREVIEW_VIEWED), [d]), r.useEffect(() => {
    if (!!s) m.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
      type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: n
    })
  }, [s, n]);
  let f = (0, g.J)(),
    S = (0, E.Z)(null, s ? f : v.dG4);
  return r.useEffect(() => {
    if (!!s && !u) return f
  }, [s, u, f]), (0, i.jsx)(h.Gt, {
    value: n,
    children: (0, i.jsx)("div", {
      ref: S,
      className: o()(P.themeEditor, c ? P.editorAnimate : null),
      children: (0, i.jsxs)(_.HeadingLevel, {
        children: [a ? (0, i.jsx)(y, {}) : (0, i.jsx)(U, {
          markAsDismissed: t
        }), (0, i.jsx)(_.Scroller, {
          className: P.editorBody,
          children: (0, i.jsxs)(C.ZP, {
            type: C.yH.EDITOR,
            children: [!s && (0, i.jsx)(C.ZP.Basic, {
              className: P.selectionGroup
            }), (0, i.jsx)(C.ZP.Gradient, {
              className: P.selectionGroup
            })]
          })
        }), (0, i.jsx)(G, {
          markAsDismissed: t
        })]
      })
    })
  })
}