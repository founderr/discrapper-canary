"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("446674"),
  r = n("77078"),
  o = n("79112"),
  u = n("227602"),
  d = n("945330"),
  c = n("364719"),
  f = n("701909"),
  E = n("13798"),
  _ = n("386045"),
  h = n("803725"),
  C = n("80028"),
  I = n("49111"),
  T = n("782340"),
  S = n("410876");

function m(e) {
  o.default.open(I.UserSettingsSections.CLIPS), (0, h.dismissClipsUserEducation)(e)
}

function p() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(I.GlobalKeybindActions.SAVE_CLIP));
  if (null == e) return (0, a.jsx)(a.Fragment, {
    children: T.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = E.toString(e.shortcut, !0);
  return (0, a.jsx)(a.Fragment, {
    children: T.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, a.jsx)("span", {
        className: S.keyCombo,
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
        className: S.errorWarningIcon
      }), T.default.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => T.default.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(f.default.getArticleURL(I.HelpdeskArticles.CLIPS), "_blank")
    },
    containerClass: S.container
  },
  [C.ClipsUserEducationType.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => T.default.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => T.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => m(C.ClipsUserEducationType.Disabled),
    containerClass: S.container
  },
  [C.ClipsUserEducationType.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.INVERTED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => (0, a.jsx)(p, {}),
    buttonCopy: () => T.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => m(C.ClipsUserEducationType.Enabled),
    containerClass: l(S.container, S.containerEnabled)
  }
};

function g() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: n
  } = (0, i.useStateFromStoresObject)([_.default], () => ({
    decoupledClipsEnabled: _.default.getSettings().decoupledClipsEnabled,
    clipsError: _.default.getLastClipsError()
  }));
  let s = (e = t, null != n ? C.ClipsUserEducationType.Error : e ? C.ClipsUserEducationType.Enabled : C.ClipsUserEducationType.Disabled),
    {
      bodyCopy: l,
      buttonCopy: o,
      ctaOnClick: u,
      textColor: c,
      buttonColor: f,
      buttonLook: E,
      containerClass: I
    } = A[s];
  return (0, a.jsxs)("div", {
    className: I,
    children: [(0, a.jsx)(r.Text, {
      color: c,
      variant: "text-sm/medium",
      children: l()
    }), (0, a.jsx)(r.Button, {
      onClick: () => (0, h.dismissClipsUserEducation)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: S.buttonClose,
      children: (0, a.jsx)(d.default, {
        className: S.dismissIcon,
        width: 16,
        height: 16
      })
    }), (0, a.jsx)(r.Button, {
      onClick: u,
      className: S.buttonCTA,
      color: f,
      look: E,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}