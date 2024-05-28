"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var s = n("990547"),
  l = n("481060"),
  i = n("230711"),
  r = n("465670"),
  o = n("730417"),
  u = n("981631"),
  d = n("921944"),
  c = n("689938"),
  f = n("871147");
let E = (e, t) => ({
  body: e.messages.completionTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: f.defaultDropImage
});

function C(e) {
  let {
    markAsDismissed: t,
    partnerGame: n
  } = e;
  (0, o.useTrackDropsImpression)(n, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_COMPLETION);
  let C = (0, o.useDropsExperiment)(n);
  if (null == C) return null;
  let {
    body: h,
    imgSrc: _,
    imgStyle: S
  } = E(C.drop, C.config.streamLengthRequirement), m = () => {
    t(d.ContentDismissActionType.DISMISS)
  };
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("img", {
      src: _,
      alt: "",
      className: S
    }), (0, a.jsx)(l.Clickable, {
      className: f.__invalid_buttonClose,
      "aria-label": c.default.Messages.CLOSE,
      onClick: m,
      children: (0, a.jsx)(r.default, {
        width: 16,
        height: 16,
        className: f.closeIcon
      })
    }), (0, a.jsx)(l.Heading, {
      className: f.title,
      variant: "heading-md/extrabold",
      children: c.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: f.subTitle,
      children: h
    }), (0, a.jsx)(l.Button, {
      color: l.Button.Colors.BRAND_INVERTED,
      fullWidth: !0,
      onClick: () => {
        i.default.open(u.UserSettingsSections.INVENTORY), t(d.ContentDismissActionType.PRIMARY)
      },
      children: c.default.Messages.REDEEM
    }), (0, a.jsx)(l.Button, {
      className: f.linkButtonContainer,
      innerClassName: f.linkButton,
      onClick: m,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: c.default.Messages.NOT_NOW
    }), (0, a.jsx)("div", {
      className: f.pointer
    })]
  })
}