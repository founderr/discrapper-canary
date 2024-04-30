"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("990547"),
  l = a("481060"),
  i = a("230711"),
  r = a("465670"),
  o = a("730417"),
  u = a("981631"),
  d = a("921944"),
  c = a("689938"),
  f = a("142873");
let E = (e, t) => ({
  body: e.messages.completionTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: f.defaultDropImage
});

function h(e) {
  let {
    markAsDismissed: t,
    partnerGame: a
  } = e;
  (0, o.useTrackDropsImpression)(a, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_COMPLETION);
  let h = (0, o.useDropsExperiment)(a);
  if (null == h) return null;
  let {
    body: _,
    imgSrc: C,
    imgStyle: m
  } = E(h.drop, h.config.streamLengthRequirement), S = () => {
    t(d.ContentDismissActionType.DISMISS)
  };
  return (0, n.jsxs)("div", {
    className: f.container,
    children: [(0, n.jsx)("img", {
      src: C,
      alt: "",
      className: m
    }), (0, n.jsx)(l.Clickable, {
      className: f.__invalid_buttonClose,
      "aria-label": c.default.Messages.CLOSE,
      onClick: S,
      children: (0, n.jsx)(r.default, {
        width: 16,
        height: 16,
        className: f.closeIcon
      })
    }), (0, n.jsx)(l.Heading, {
      className: f.title,
      variant: "heading-md/extrabold",
      children: c.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: f.subTitle,
      children: _
    }), (0, n.jsx)(l.Button, {
      look: l.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        i.default.open(u.UserSettingsSections.INVENTORY), t(d.ContentDismissActionType.PRIMARY)
      },
      children: c.default.Messages.REDEEM
    }), (0, n.jsx)(l.Button, {
      className: f.linkButtonContainer,
      innerClassName: f.linkButton,
      onClick: S,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: c.default.Messages.NOT_NOW
    }), (0, n.jsx)("div", {
      className: f.pointer
    })]
  })
}