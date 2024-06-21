n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var s = n(990547),
  l = n(481060),
  a = n(230711),
  r = n(960359),
  o = n(730417),
  c = n(981631),
  u = n(921944),
  d = n(689938),
  E = n(849158);
let h = (e, t) => ({
  header: d.Z.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
    gameName: e.title
  }),
  body: e.messages.enrollmentTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: E.defaultDropImage
});

function _(e) {
  let {
    markAsDismissed: t,
    partnerGame: n
  } = e;
  (0, o.hs)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_ENROLLMENT);
  let _ = (0, o.au)(n);
  if (null == _) return null;
  let {
    header: I,
    body: m,
    imgSrc: g,
    imgStyle: p
  } = h(_.drop, _.config.streamLengthRequirement), N = () => {
    t(u.L.DISMISS)
  };
  return (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsx)("img", {
      src: g,
      alt: "",
      className: p
    }), (0, i.jsx)(l.Clickable, {
      className: E.__invalid_buttonClose,
      "aria-label": d.Z.Messages.CLOSE,
      onClick: N,
      children: (0, i.jsx)(l.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: E.closeIcon
      })
    }), (0, i.jsx)(l.Heading, {
      className: E.title,
      variant: "heading-md/extrabold",
      children: I
    }), (0, i.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: E.subTitle,
      children: m
    }), _.config.autoEnrollment ? (0, i.jsx)(l.Button, {
      color: l.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        a.Z.open(c.oAB.INVENTORY), t(u.L.PRIMARY)
      },
      children: d.Z.Messages.LEARN_MORE
    }) : (0, i.jsx)(l.Button, {
      innerClassName: E.button,
      color: l.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        (0, r.RJ)(_.drop.dropsQuestId), a.Z.open(c.oAB.INVENTORY), t(u.L.PRIMARY)
      },
      children: d.Z.Messages.DROPS_ELIGIBILITY_ENROLLMENT_PRIMARY_CTA
    }), (0, i.jsx)(l.Button, {
      className: E.linkButtonContainer,
      innerClassName: E.linkButton,
      onClick: N,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: d.Z.Messages.NOT_NOW
    }), (0, i.jsx)("div", {
      className: E.pointer
    })]
  })
}