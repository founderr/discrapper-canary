n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
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
  g = n(689938),
  p = n(585233);

function N(e) {
  (0, o.Z)(m.Z.CLIPS), (0, h.UW)(e)
}

function T() {
  let e = (0, a.e7)([c.Z], () => c.Z.getKeybindForAction(I.kg4.SAVE_CLIP));
  if (null == e) return (0, i.jsx)(i.Fragment, {
    children: g.Z.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = d.BB(e.shortcut, !0);
  return (0, i.jsx)(i.Fragment, {
    children: g.Z.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, i.jsx)("span", {
        className: p.keyCombo,
        children: (0, i.jsx)(r.KeyCombo, {
          shortcut: t
        })
      })
    })
  })
}
let C = {
  [_.D5.Error]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.PRIMARY,
    bodyCopy: () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.WarningIcon, {
        size: "xs",
        color: "currentColor",
        className: p.errorWarningIcon
      }), g.Z.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(u.Z.getArticleURL(I.BhN.CLIPS), "_blank")
    },
    containerClass: p.container
  },
  [_.D5.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => N(_.D5.Disabled),
    containerClass: p.container
  },
  [_.D5.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND_INVERTED,
    bodyCopy: () => (0, i.jsx)(T, {}),
    buttonCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => N(_.D5.Enabled),
    containerClass: l()(p.container, p.containerEnabled)
  }
};

function S() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: n
  } = (0, a.cj)([E.Z], () => ({
    decoupledClipsEnabled: E.Z.getSettings().decoupledClipsEnabled,
    clipsError: E.Z.getLastClipsError()
  }));
  let s = (e = t, null != n ? _.D5.Error : e ? _.D5.Enabled : _.D5.Disabled),
    {
      bodyCopy: l,
      buttonCopy: o,
      ctaOnClick: c,
      textColor: u,
      buttonColor: d,
      buttonLook: I,
      containerClass: m
    } = C[s];
  return (0, i.jsxs)("div", {
    className: m,
    children: [(0, i.jsx)(r.Text, {
      color: u,
      variant: "text-sm/medium",
      children: l()
    }), (0, i.jsx)(r.Button, {
      onClick: () => (0, h.UW)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: p.buttonClose,
      children: (0, i.jsx)(r.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: p.dismissIcon
      })
    }), (0, i.jsx)(r.Button, {
      onClick: c,
      className: p.buttonCTA,
      color: d,
      look: I,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}