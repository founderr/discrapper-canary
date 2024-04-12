"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var n = a("735250");
a("470079");
var s = a("803997"),
  l = a.n(s),
  i = a("442837"),
  r = a("481060"),
  o = a("230711"),
  u = a("556296"),
  d = a("465670"),
  c = a("729017"),
  f = a("63063"),
  E = a("13140"),
  h = a("435064"),
  _ = a("39604"),
  C = a("356659"),
  m = a("981631"),
  S = a("689938"),
  p = a("783348");

function I(e) {
  o.default.open(m.UserSettingsSections.CLIPS), (0, _.dismissClipsUserEducation)(e)
}

function T() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(m.GlobalKeybindActions.SAVE_CLIP));
  if (null == e) return (0, n.jsx)(n.Fragment, {
    children: S.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = E.toString(e.shortcut, !0);
  return (0, n.jsx)(n.Fragment, {
    children: S.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, n.jsx)("span", {
        className: p.keyCombo,
        children: (0, n.jsx)(r.KeyCombo, {
          shortcut: t
        })
      })
    })
  })
}
let g = {
  [C.ClipsUserEducationType.Error]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.PRIMARY,
    bodyCopy: () => (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.default, {
        className: p.errorWarningIcon
      }), S.default.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(f.default.getArticleURL(m.HelpdeskArticles.CLIPS), "_blank")
    },
    containerClass: p.container
  },
  [C.ClipsUserEducationType.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => I(C.ClipsUserEducationType.Disabled),
    containerClass: p.container
  },
  [C.ClipsUserEducationType.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.INVERTED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => (0, n.jsx)(T, {}),
    buttonCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => I(C.ClipsUserEducationType.Enabled),
    containerClass: l()(p.container, p.containerEnabled)
  }
};

function A() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: a
  } = (0, i.useStateFromStoresObject)([h.default], () => ({
    decoupledClipsEnabled: h.default.getSettings().decoupledClipsEnabled,
    clipsError: h.default.getLastClipsError()
  }));
  let s = (e = t, null != a ? C.ClipsUserEducationType.Error : e ? C.ClipsUserEducationType.Enabled : C.ClipsUserEducationType.Disabled),
    {
      bodyCopy: l,
      buttonCopy: o,
      ctaOnClick: u,
      textColor: c,
      buttonColor: f,
      buttonLook: E,
      containerClass: m
    } = g[s];
  return (0, n.jsxs)("div", {
    className: m,
    children: [(0, n.jsx)(r.Text, {
      color: c,
      variant: "text-sm/medium",
      children: l()
    }), (0, n.jsx)(r.Button, {
      onClick: () => (0, _.dismissClipsUserEducation)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: p.buttonClose,
      children: (0, n.jsx)(d.default, {
        className: p.dismissIcon,
        width: 16,
        height: 16
      })
    }), (0, n.jsx)(r.Button, {
      onClick: u,
      className: p.buttonCTA,
      color: f,
      look: E,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}