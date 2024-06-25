n.d(t, {
  Z: function() {
    return C
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(547972),
  c = n(556296),
  u = n(63063),
  d = n(13140),
  E = n(435064),
  h = n(39604),
  _ = n(356659),
  I = n(981631),
  m = n(332325),
  T = n(689938),
  g = n(585233);

function p(e) {
  (0, o.Z)(m.Z.CLIPS), (0, h.UW)(e)
}

function N() {
  let e = (0, a.e7)([c.Z], () => c.Z.getKeybindForAction(I.kg4.SAVE_CLIP));
  if (null == e) return (0, s.jsx)(s.Fragment, {
    children: T.Z.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = d.BB(e.shortcut, !0);
  return (0, s.jsx)(s.Fragment, {
    children: T.Z.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, s.jsx)("span", {
        className: g.keyCombo,
        children: (0, s.jsx)(r.KeyCombo, {
          shortcut: t
        })
      })
    })
  })
}
let S = {
  [_.D5.Error]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.PRIMARY,
    bodyCopy: () => (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(r.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: g.errorWarningIcon
      }), T.Z.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => T.Z.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(u.Z.getArticleURL(I.BhN.CLIPS), "_blank")
    },
    containerClass: g.container
  },
  [_.D5.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => T.Z.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => T.Z.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => p(_.D5.Disabled),
    containerClass: g.container
  },
  [_.D5.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND_INVERTED,
    bodyCopy: () => (0, s.jsx)(N, {}),
    buttonCopy: () => T.Z.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => p(_.D5.Enabled),
    containerClass: l()(g.container, g.containerEnabled)
  }
};

function C() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: n
  } = (0, a.cj)([E.Z], () => ({
    decoupledClipsEnabled: E.Z.getSettings().decoupledClipsEnabled,
    clipsError: E.Z.getLastClipsError()
  }));
  let i = (e = t, null != n ? _.D5.Error : e ? _.D5.Enabled : _.D5.Disabled),
    {
      bodyCopy: l,
      buttonCopy: o,
      ctaOnClick: c,
      textColor: u,
      buttonColor: d,
      buttonLook: I,
      containerClass: m
    } = S[i];
  return (0, s.jsxs)("div", {
    className: m,
    children: [(0, s.jsx)(r.Text, {
      color: u,
      variant: "text-sm/medium",
      children: l()
    }), (0, s.jsx)(r.Button, {
      onClick: () => (0, h.UW)(i),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: g.buttonClose,
      children: (0, s.jsx)(r.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: g.dismissIcon
      })
    }), (0, s.jsx)(r.Button, {
      onClick: c,
      className: g.buttonCTA,
      color: d,
      look: I,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}