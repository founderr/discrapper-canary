"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("990547"),
  i = n("481060"),
  l = n("703656"),
  r = n("153124"),
  o = n("63063"),
  u = n("758119"),
  d = n("981631"),
  c = n("689938"),
  f = n("784425");

function E() {
  (0, u.closeAgeGateModal)(), (0, l.transitionTo)(d.Routes.LOGIN)
}

function h(e) {
  let {
    underageMessage: t,
    transitionState: l
  } = e, u = (0, r.useUID)();
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: l,
    size: i.ModalSize.SMALL,
    "aria-labelledby": u,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE_UNDERAGE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, a.jsx)(i.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: f.container,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: n("231443"),
          className: f.img
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          className: f.title,
          id: u,
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_HEADER
        }), (0, a.jsx)(i.Text, {
          color: "header-secondary",
          className: f.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
            underageMessage: null != t ? t : c.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
            helpURL: o.default.getArticleURL(d.HelpdeskArticles.AGE_GATE)
          })
        }), (0, a.jsx)(i.Text, {
          color: "header-secondary",
          className: f.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_BODY_DELETION_WITH_DAYS.format({
            days: 30
          })
        })]
      })
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        size: i.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: E,
        children: c.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
      })
    })]
  })
}