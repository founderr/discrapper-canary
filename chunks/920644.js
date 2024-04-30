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
  i = a("703656"),
  r = a("153124"),
  o = a("63063"),
  u = a("758119"),
  d = a("981631"),
  c = a("689938"),
  f = a("802061");

function E() {
  (0, u.closeAgeGateModal)(), (0, i.transitionTo)(d.Routes.LOGIN)
}

function h(e) {
  let {
    underageMessage: t,
    transitionState: i
  } = e, u = (0, r.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    transitionState: i,
    size: l.ModalSize.SMALL,
    "aria-labelledby": u,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE_UNDERAGE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, n.jsx)(l.ModalContent, {
      children: (0, n.jsxs)("div", {
        className: f.container,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: a("231443"),
          className: f.img
        }), (0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: f.title,
          id: u,
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_HEADER
        }), (0, n.jsx)(l.Text, {
          color: "header-secondary",
          className: f.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
            underageMessage: null != t ? t : c.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
            helpURL: o.default.getArticleURL(d.HelpdeskArticles.AGE_GATE)
          })
        }), (0, n.jsx)(l.Text, {
          color: "header-secondary",
          className: f.subtitle,
          variant: "text-sm/normal",
          children: c.default.Messages.AGE_GATE_UNDERAGE_EXISTING_BODY_DELETION_WITH_DAYS.format({
            days: 30
          })
        })]
      })
    }), (0, n.jsx)(l.ModalFooter, {
      children: (0, n.jsx)(l.Button, {
        size: l.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: E,
        children: c.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
      })
    })]
  })
}