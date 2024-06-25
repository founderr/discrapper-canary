"use strict";
n.d(t, {
  Z: function() {
    return y
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(570140),
  _ = n(230711),
  c = n(351773),
  d = n(607070),
  E = n(100527),
  I = n(906732),
  T = n(639119),
  h = n(197115),
  f = n(587446),
  S = n(594174),
  A = n(626135),
  N = n(74538),
  m = n(327943),
  O = n(539873),
  p = n(981631),
  R = n(921944),
  g = n(474936),
  C = n(689938),
  v = n(698938);
let L = () => {
    u.Z.dispatch({
      type: "APP_ICON_EDITOR_CLOSE"
    })
  },
  D = () => {
    var e, t, n;
    let r = (0, a.e7)([S.default], () => N.ZP.isPremium(S.default.getCurrentUser())),
      s = (0, T.N)(),
      o = (null == s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === g.Si.TIER_2;
    return (0, i.jsx)(h.Z, {
      size: l.Button.Sizes.MEDIUM,
      buttonText: r ? C.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : o ? (0, N.Rt)({
        intervalType: null == s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.interval,
        intervalCount: null == s ? void 0 : null === (n = s.subscription_trial) || void 0 === n ? void 0 : n.interval_count
      }) : C.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      subscriptionTier: g.Si.TIER_2
    })
  },
  M = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(R.L.DISMISS), L()
    };
    return (0, i.jsxs)("div", {
      className: v.editorHeader,
      children: [(0, i.jsx)(l.Clickable, {
        className: v.closeCircleButton,
        onClick: () => n(),
        children: (0, i.jsx)(l.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: v.closeCircle
        })
      }), (0, i.jsxs)("div", {
        className: v.title,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-lg/extrabold",
          children: C.Z.Messages.APP_ICON_PREVIEW_TITLE
        }), (0, i.jsx)(f.Z, {
          className: v.premiumIcon
        })]
      })]
    })
  },
  P = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, r = (0, a.e7)([m.Z], () => m.Z.isUpsellPreview);
    return (0, i.jsxs)("div", {
      className: v.editorFooter,
      children: [r && (0, i.jsx)(D, {}), (0, i.jsx)(l.Button, {
        className: v.footerButton,
        onClick: () => {
          null == n || n(R.L.DISMISS), L(), !t && _.Z.open()
        },
        color: l.Button.Colors.PRIMARY,
        size: l.Button.Sizes.MEDIUM,
        children: r || t ? C.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : C.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
      })]
    })
  };

function y(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: s
  } = (0, I.ZP)(E.Z.APP_ICON_EDITOR), u = (0, a.e7)([S.default], () => S.default.getCurrentUser()), {
    isUpsellPreview: _,
    isEditorOpen: T,
    shouldEditorAnimate: h
  } = (0, a.cj)([m.Z, d.Z], () => ({
    isUpsellPreview: m.Z.isUpsellPreview,
    isEditorOpen: m.Z.isEditorOpen,
    shouldEditorAnimate: t && !d.Z.useReducedMotion
  }));
  r.useEffect(() => {
    if (!!_) A.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
      type: g.cd.APP_ICON_UPSELL,
      location_stack: s
    })
  }, [_, s]);
  let f = (0, c.Z)(null, _ ? L : p.dG4);
  return (r.useEffect(() => {
    if (!!_ && !T) return L
  }, [_, T]), null == u) ? null : (0, i.jsx)(I.Gt, {
    value: s,
    children: (0, i.jsx)("div", {
      ref: f,
      className: o()(v.editor, h ? v.editorAnimate : null),
      children: (0, i.jsxs)(l.HeadingLevel, {
        children: [(0, i.jsx)(M, {
          markAsDismissed: n
        }), (0, i.jsx)(l.Scroller, {
          className: v.editorBody,
          children: (0, i.jsx)(O.Z, {
            className: v.selectionGroup
          })
        }), (0, i.jsx)(P, {
          markAsDismissed: n,
          isCoachmark: t
        })]
      })
    })
  })
}