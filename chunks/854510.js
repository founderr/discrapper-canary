"use strict";
l.r(s), l.d(s, {
  default: function() {
    return i
  }
});
var t = l("735250");
l("470079");
var a = l("481060"),
  r = l("153124"),
  n = l("930180"),
  o = l("582019"),
  d = l("689938"),
  c = l("900314");

function i(e) {
  let {
    channel: s,
    onAccept: l,
    transitionState: i,
    onClose: u,
    ...h
  } = e, f = (0, r.useUID)(), x = (0, n.useStageBlockedUsers)(s.id);
  return (0, t.jsxs)(a.ModalRoot, {
    transitionState: i,
    "aria-labelledby": f,
    ...h,
    size: a.ModalSize.SMALL,
    children: [(0, t.jsxs)(a.ModalHeader, {
      className: c.header,
      children: [(0, t.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        children: d.default.Messages.STAGE_BLOCKED_USERS_TITLE_PLURAL.format({
          number: x.length
        })
      }), (0, t.jsx)(a.Text, {
        color: "header-secondary",
        className: c.description,
        variant: "text-sm/normal",
        children: d.default.Messages.STAGE_BLOCKED_USERS_BODY.format({
          number: x.length
        })
      })]
    }), (0, t.jsx)(a.ModalContent, {
      className: c.content,
      children: x.map(e => {
        let {
          user: l,
          id: a,
          speaker: r
        } = e;
        return (0, t.jsx)(o.BlockedUser, {
          user: l,
          speaker: r,
          showStatus: !0,
          channelId: s.id
        }, a)
      })
    }), (0, t.jsxs)(a.ModalFooter, {
      className: c.footer,
      children: [(0, t.jsx)(a.Button, {
        onClick: () => {
          l(s), u()
        },
        color: a.Button.Colors.BRAND,
        children: d.default.Messages.STAGE_BLOCKED_USERS_ACCEPT
      }), (0, t.jsx)(a.Button, {
        onClick: () => {
          u()
        },
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        children: d.default.Messages.STAGE_BLOCKED_USERS_CANCEL
      })]
    })]
  })
}