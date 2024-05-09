"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  i = n.n(s),
  l = n("442837"),
  r = n("481060"),
  o = n("547972"),
  u = n("556296"),
  d = n("465670"),
  c = n("729017"),
  f = n("63063"),
  E = n("13140"),
  h = n("435064"),
  _ = n("39604"),
  C = n("356659"),
  m = n("981631"),
  S = n("332325"),
  p = n("689938"),
  g = n("668202");

function I(e) {
  (0, o.default)(S.GameSettingsTab.CLIPS), (0, _.dismissClipsUserEducation)(e)
}

function T() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getKeybindForAction(m.GlobalKeybindActions.SAVE_CLIP));
  if (null == e) return (0, a.jsx)(a.Fragment, {
    children: p.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = E.toString(e.shortcut, !0);
  return (0, a.jsx)(a.Fragment, {
    children: p.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, a.jsx)("span", {
        className: g.keyCombo,
        children: (0, a.jsx)(r.KeyCombo, {
          shortcut: t
        })
      })
    })
  })
}
let A = {
  [C.ClipsUserEducationType.Error]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.PRIMARY,
    bodyCopy: () => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.default, {
        className: g.errorWarningIcon
      }), p.default.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(f.default.getArticleURL(m.HelpdeskArticles.CLIPS), "_blank")
    },
    containerClass: g.container
  },
  [C.ClipsUserEducationType.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => I(C.ClipsUserEducationType.Disabled),
    containerClass: g.container
  },
  [C.ClipsUserEducationType.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.INVERTED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => (0, a.jsx)(T, {}),
    buttonCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => I(C.ClipsUserEducationType.Enabled),
    containerClass: i()(g.container, g.containerEnabled)
  }
};

function N() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: n
  } = (0, l.useStateFromStoresObject)([h.default], () => ({
    decoupledClipsEnabled: h.default.getSettings().decoupledClipsEnabled,
    clipsError: h.default.getLastClipsError()
  }));
  let s = (e = t, null != n ? C.ClipsUserEducationType.Error : e ? C.ClipsUserEducationType.Enabled : C.ClipsUserEducationType.Disabled),
    {
      bodyCopy: i,
      buttonCopy: o,
      ctaOnClick: u,
      textColor: c,
      buttonColor: f,
      buttonLook: E,
      containerClass: m
    } = A[s];
  return (0, a.jsxs)("div", {
    className: m,
    children: [(0, a.jsx)(r.Text, {
      color: c,
      variant: "text-sm/medium",
      children: i()
    }), (0, a.jsx)(r.Button, {
      onClick: () => (0, _.dismissClipsUserEducation)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: g.buttonClose,
      children: (0, a.jsx)(d.default, {
        className: g.dismissIcon,
        width: 16,
        height: 16
      })
    }), (0, a.jsx)(r.Button, {
      onClick: u,
      className: g.buttonCTA,
      color: f,
      look: E,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}