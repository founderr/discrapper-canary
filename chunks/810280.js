"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var n = a("735250");
a("470079");
var s = a("990547"),
  l = a("481060"),
  i = a("230711"),
  r = a("465670"),
  o = a("960359"),
  u = a("730417"),
  d = a("981631"),
  c = a("921944"),
  f = a("689938"),
  E = a("647805");
let h = (e, t) => ({
  header: f.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
    gameName: e.title
  }),
  body: e.messages.enrollmentTooltip(t),
  imgSrc: e.assets.tooltipSrc,
  imgStyle: E.defaultDropImage
});

function _(e) {
  let {
    markAsDismissed: t,
    partnerGame: a
  } = e;
  (0, u.useTrackDropsImpression)(a, s.ImpressionTypes.POPOUT, s.ImpressionNames.DROPS_QUEST_ENROLLMENT);
  let _ = (0, u.useDropsExperiment)(a);
  if (null == _) return null;
  let {
    header: C,
    body: m,
    imgSrc: S,
    imgStyle: p
  } = h(_.drop, _.config.streamLengthRequirement), I = () => {
    t(c.ContentDismissActionType.DISMISS)
  };
  return (0, n.jsxs)("div", {
    className: E.container,
    children: [(0, n.jsx)("img", {
      src: S,
      alt: "",
      className: p
    }), (0, n.jsx)(l.Clickable, {
      className: E.__invalid_buttonClose,
      "aria-label": f.default.Messages.CLOSE,
      onClick: I,
      children: (0, n.jsx)(r.default, {
        width: 16,
        height: 16,
        className: E.closeIcon
      })
    }), (0, n.jsx)(l.Heading, {
      className: E.title,
      variant: "heading-md/extrabold",
      children: C
    }), (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: E.subTitle,
      children: m
    }), _.config.autoEnrollment ? (0, n.jsx)(l.Button, {
      look: l.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        i.default.open(d.UserSettingsSections.INVENTORY), t(c.ContentDismissActionType.PRIMARY)
      },
      children: f.default.Messages.LEARN_MORE
    }) : (0, n.jsx)(l.Button, {
      innerClassName: E.button,
      look: l.Button.Looks.INVERTED,
      fullWidth: !0,
      onClick: () => {
        (0, o.enrollDropsUser)(_.drop.dropsQuestId), i.default.open(d.UserSettingsSections.INVENTORY), t(c.ContentDismissActionType.PRIMARY)
      },
      children: f.default.Messages.DROPS_ELIGIBILITY_ENROLLMENT_PRIMARY_CTA
    }), (0, n.jsx)(l.Button, {
      className: E.linkButtonContainer,
      innerClassName: E.linkButton,
      onClick: I,
      look: l.Button.Looks.LINK,
      fullWidth: !0,
      color: l.Button.Colors.WHITE,
      children: f.default.Messages.NOT_NOW
    }), (0, n.jsx)("div", {
      className: E.pointer
    })]
  })
}