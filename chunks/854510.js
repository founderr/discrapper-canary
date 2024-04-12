"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var r = t("481060"),
  l = t("153124"),
  n = t("930180"),
  i = t("320596"),
  o = t("689938"),
  c = t("558816");

function d(e) {
  let {
    channel: s,
    onAccept: t,
    transitionState: d,
    onClose: u,
    ...h
  } = e, f = (0, l.useUID)(), C = (0, n.useStageBlockedUsers)(s.id);
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: d,
    "aria-labelledby": f,
    ...h,
    size: r.ModalSize.SMALL,
    children: [(0, a.jsxs)(r.ModalHeader, {
      className: c.header,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: o.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: C.length
        })
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        className: c.description,
        variant: "text-sm/normal",
        children: o.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: C.length
        })
      })]
    }), (0, a.jsx)(r.ModalContent, {
      className: c.content,
      children: C.map(e => {
        let {
          user: t,
          id: r,
          speaker: l
        } = e;
        return (0, a.jsx)(i.BlockedUser, {
          user: t,
          speaker: l,
          showStatus: !0,
          channelId: s.id
        }, r)
      })
    }), (0, a.jsxs)(r.ModalFooter, {
      className: c.footer,
      children: [(0, a.jsx)(r.Button, {
        onClick: () => {
          t(s), u()
        },
        color: r.Button.Colors.BRAND,
        children: o.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }), (0, a.jsx)(r.Button, {
        onClick: () => {
          u()
        },
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        children: o.default.Messages.STAGE_BLOCKED_USERS_CANCEL
      })]
    })]
  })
}