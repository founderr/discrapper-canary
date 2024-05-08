"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("153124"),
  i = n("357727"),
  r = n("158010"),
  d = n("170039"),
  o = n("471253"),
  u = n("930180"),
  c = n("582019"),
  _ = n("939863"),
  E = n("689938"),
  T = n("112441");

function f(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: f,
    ...S
  } = e, h = (0, l.useUID)(), I = (0, u.useStageBlockedUsersCount)(t.id), g = async () => {
    await (0, o.moveSelfToAudience)(t), f()
  }, p = async () => {
    await (0, o.audienceAckRequestToSpeak)(t, !1), f()
  };
  return (0, s.jsx)(a.ModalRoot, {
    transitionState: n,
    "aria-labelledby": h,
    ...S,
    size: a.ModalSize.SMALL,
    children: (0, s.jsxs)(a.ModalContent, {
      className: T.content,
      children: [(0, s.jsx)(_.default, {
        children: (0, s.jsx)("div", {
          className: T.stageIconBackground,
          children: (0, s.jsx)(d.default, {
            width: 40,
            height: 40,
            className: T.stageIcon
          })
        })
      }), (0, s.jsx)(a.Heading, {
        id: h,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: T.headerTitle,
        children: E.default.Messages.STAGE_MODERATOR_JOIN_MODAL_TITLE
      }), (0, s.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: T.headerSubtitle,
        children: E.default.Messages.STAGE_MODERATOR_JOIN_MODAL_SUBTITLE
      }), I > 0 && (0, s.jsx)(c.BlockedUsersNotice, {
        channelId: t.id
      }), (0, s.jsxs)("div", {
        className: T.buttonsContainer,
        children: [(0, s.jsxs)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          className: T.button,
          innerClassName: T.innerButton,
          onClick: p,
          children: [(0, s.jsx)("div", {
            className: T.icon,
            children: (0, s.jsx)(i.default, {
              width: 20,
              height: 20
            })
          }), E.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_SPEAKER]
        }), (0, s.jsxs)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          className: T.button,
          innerClassName: T.innerButton,
          onClick: g,
          children: [(0, s.jsx)("div", {
            className: T.icon,
            children: (0, s.jsx)(r.default, {
              width: 20,
              height: 20
            })
          }), E.default.Messages.STAGE_MODERATOR_JOIN_MODAL_JOIN_AUDIENCE]
        })]
      })]
    })
  })
}