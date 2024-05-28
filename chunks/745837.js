"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("442837"),
  r = n("481060"),
  o = n("547972"),
  u = n("556296"),
  d = n("465670"),
  c = n("729017"),
  f = n("63063"),
  E = n("13140"),
  C = n("435064"),
  h = n("39604"),
  _ = n("356659"),
  S = n("981631"),
  m = n("332325"),
  p = n("689938"),
  I = n("668202");

function g(e) {
  (0, o.default)(m.GameSettingsTab.CLIPS), (0, h.dismissClipsUserEducation)(e)
}

function T() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(S.GlobalKeybindActions.SAVE_CLIP));
  if (null == e) return (0, a.jsx)(a.Fragment, {
    children: p.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = E.toString(e.shortcut, !0);
  return (0, a.jsx)(a.Fragment, {
    children: p.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, a.jsx)("span", {
        className: I.keyCombo,
        children: (0, a.jsx)(r.KeyCombo, {
          shortcut: t
        })
      })
    })
  })
}
let A = {
  [_.ClipsUserEducationType.Error]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.PRIMARY,
    bodyCopy: () => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.default, {
        className: I.errorWarningIcon
      }), p.default.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(f.default.getArticleURL(S.HelpdeskArticles.CLIPS), "_blank")
    },
    containerClass: I.container
  },
  [_.ClipsUserEducationType.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => g(_.ClipsUserEducationType.Disabled),
    containerClass: I.container
  },
  [_.ClipsUserEducationType.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND_INVERTED,
    bodyCopy: () => (0, a.jsx)(T, {}),
    buttonCopy: () => p.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => g(_.ClipsUserEducationType.Enabled),
    containerClass: l()(I.container, I.containerEnabled)
  }
};

function N() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: n
  } = (0, i.useStateFromStoresObject)([C.default], () => ({
    decoupledClipsEnabled: C.default.getSettings().decoupledClipsEnabled,
    clipsError: C.default.getLastClipsError()
  }));
  let s = (e = t, null != n ? _.ClipsUserEducationType.Error : e ? _.ClipsUserEducationType.Enabled : _.ClipsUserEducationType.Disabled),
    {
      bodyCopy: l,
      buttonCopy: o,
      ctaOnClick: u,
      textColor: c,
      buttonColor: f,
      buttonLook: E,
      containerClass: S
    } = A[s];
  return (0, a.jsxs)("div", {
    className: S,
    children: [(0, a.jsx)(r.Text, {
      color: c,
      variant: "text-sm/medium",
      children: l()
    }), (0, a.jsx)(r.Button, {
      onClick: () => (0, h.dismissClipsUserEducation)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: I.buttonClose,
      children: (0, a.jsx)(d.default, {
        className: I.dismissIcon,
        width: 16,
        height: 16
      })
    }), (0, a.jsx)(r.Button, {
      onClick: u,
      className: I.buttonCTA,
      color: f,
      look: E,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}