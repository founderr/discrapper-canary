n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(735250);
n(470079);
var i = n(990547),
  l = n(481060),
  a = n(230711),
  r = n(730417),
  o = n(981631),
  c = n(921944),
  u = n(689938),
  d = n(876860);
let E = (e, t) => ({
  body: e.messages.completionTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: d.defaultDropImage
});

function h(e) {
  let {
    markAsDismissed: t,
    partnerGame: n
  } = e;
  (0, r.hs)(n, i.ImpressionTypes.POPOUT, i.ImpressionNames.DROPS_QUEST_COMPLETION);
  let h = (0, r.au)(n);
  if (null == h) return null;
  let {
    body: _,
    imgSrc: I,
    imgStyle: m
  } = E(h.drop, h.config.streamLengthRequirement), T = () => {
    t(c.L.DISMISS)
  };
  return (0, s.jsxs)("div", {
    className: d.container,
    children: [(0, s.jsx)("img", {
      src: I,
      alt: "",
      className: m
    }), (0, s.jsx)(l.Clickable, {
      className: d.__invalid_buttonClose,
      "aria-label": u.Z.Messages.CLOSE,
      onClick: T,
      children: (0, s.jsx)(l.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: d.closeIcon
      })
    }), (0, s.jsx)(l.Heading, {
      className: d.title,
      variant: "heading-md/extrabold",
      children: u.Z.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
    }), (0, s.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: d.subTitle,
      children: _
    }), (0, s.jsx)(l.Button, {
      color: l.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        a.Z.open(o.oAB.INVENTORY), t(c.L.PRIMARY)
      },
      children: u.Z.Messages.REDEEM
    }), (0, s.jsx)(l.Button, {
      className: d.linkButtonContainer,
      innerClassName: d.linkButton,
      onClick: T,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: u.Z.Messages.NOT_NOW
    }), (0, s.jsx)("div", {
      className: d.pointer
    })]
  })
}