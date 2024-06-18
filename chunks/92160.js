"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(689938),
  o = t(348621);

function c(e) {
  let {
    className: s,
    enabled: t,
    previewCTA: i,
    onPreview: c,
    onToggle: d,
    animateStatus: u,
    firstLine: E,
    secondLine: _,
    disabled: I
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(s, o.enableContainer),
    children: [t ? (0, n.jsx)(a.CheckmarkLargeIcon, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.activeCircle, {
        [o.animate]: u
      })
    }) : (0, n.jsx)(a.PencilIcon, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.editCircle, {
        [o.animate]: u
      })
    }), (0, n.jsxs)("div", {
      className: o.enableDescription,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: E
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: _
      })]
    }), (0, n.jsxs)("div", {
      className: o.buttonContainer,
      children: [null == c ? null : (0, n.jsx)(a.Button, {
        className: o.previewButton,
        look: a.Button.Looks.LINK,
        size: a.Button.Sizes.SMALL,
        onClick: c,
        disabled: I,
        color: a.Button.Colors.PRIMARY,
        children: null != i ? i : r.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PREVIEW
      }), (0, n.jsx)(a.Button, {
        disabled: null == d || I,
        size: a.Button.Sizes.SMALL,
        color: t ? a.Button.Colors.RED : a.Button.Colors.BRAND,
        onClick: d,
        children: t ? r.Z.Messages.DISABLE : r.Z.Messages.ENABLE
      })]
    })]
  })
}