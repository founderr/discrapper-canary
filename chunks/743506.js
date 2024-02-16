"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i, r, o = n("37983"),
  u = n("884691"),
  s = n("77078"),
  a = n("851387"),
  l = n("130037"),
  c = n("772280"),
  d = n("58608"),
  f = n("718517"),
  _ = n("387111"),
  h = n("49111"),
  E = n("782340"),
  A = n("118585");
(r = i || (i = {}))[r.INITIAL = 0] = "INITIAL", r[r.OTHER_REASON = 1] = "OTHER_REASON";

function m() {
  return [{
    value: 0,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
  }, {
    value: 1 * f.default.Seconds.HOUR,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
  }, {
    value: 6 * f.default.Seconds.HOUR,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
  }, {
    value: 12 * f.default.Seconds.HOUR,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
  }, {
    value: 1 * f.default.Seconds.DAY,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
  }, {
    value: 3 * f.default.Seconds.DAY,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
  }, {
    value: 7 * f.default.Seconds.DAY,
    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
  }]
}
let g = m()[1].value;

function v(e) {
  let {
    guildId: t,
    user: i,
    location: r,
    userIds: f,
    onBanMultiple: v,
    transitionState: I,
    onClose: p,
    canBulkBan: M = !1
  } = e, [S, T] = u.useState(g), [O, b] = u.useState(""), [N, w] = u.useState(0), [R, C] = u.useState(!1), L = (0, l.useTrackModerationAction)(t, {
    location: r,
    targetUserId: null == i ? void 0 : i.id,
    targets: f
  }), x = u.useCallback(() => {
    if (null != v) {
      let e = null != f && (null == f ? void 0 : f.size) > 0 && M;
      if (!e || R) return;
      if ("" === O.trim() && !R) {
        C(!0);
        return
      }
      v(t, [...f], S, O)
    } else {
      if (null == i) return;
      a.default.banUser(t, null == i ? void 0 : i.id, S, O)
    }
    L(l.ModerationActionType.BAN), p()
  }, [v, L, p, f, M, R, O, t, S, i]), D = u.useCallback(e => {
    T(e)
  }, []), y = u.useCallback(e => {
    let {
      value: t
    } = e;
    b(t), C(!1)
  }, []), k = u.useCallback(e => {
    b(e), R && C(!1)
  }, [R]), F = u.useCallback(() => {
    b(""), w(1)
  }, []), U = u.useCallback(() => {
    w(0)
  }, []), P = [{
    name: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
    value: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
  }, {
    name: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
    value: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
  }, {
    name: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
    value: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
  }], B = null != v && null != f ? E.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
    count: null == f ? void 0 : f.size
  }) : null == i ? "" : E.default.Messages.BAN_CONFIRM_TITLE.format({
    username: "@".concat(_.default.getName(t, null, i))
  });
  return (0, o.jsxs)(s.ModalRoot, {
    transitionState: I,
    children: [(0, o.jsx)(s.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        children: B
      })
    }), (0, o.jsxs)(s.ModalContent, {
      className: A.modalContent,
      children: [(0, o.jsxs)(d.default, {
        autoPlay: !0,
        loop: !0,
        className: A.spacing,
        width: 400,
        children: [(0, o.jsx)("source", {
          src: n("430857"),
          type: "video/webm"
        }), (0, o.jsx)("source", {
          src: n("689223"),
          type: "video/mp4"
        }), (0, o.jsx)("img", {
          alt: "",
          src: n("429777")
        })]
      }), (0, o.jsxs)(s.FormItem, {
        title: E.default.Messages.FORM_LABEL_REASON_BAN,
        className: A.spacing,
        children: [R && (0, o.jsx)(s.FormErrorBlock, {
          className: A.error,
          children: E.default.Messages.BAN_REASON_REQUIRED_ERROR
        }), (0, o.jsx)(s.Sequencer, {
          steps: [0, 1],
          step: N,
          children: (e => {
            switch (N) {
              case 0:
                return (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)(s.RadioGroup, {
                    value: O,
                    options: e,
                    onChange: y,
                    radioItemClassName: A.radioItemStyles
                  }), (0, o.jsxs)(s.Clickable, {
                    onClick: F,
                    className: A.banReasonOtherClickable,
                    children: [(0, o.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "none",
                      children: E.default.Messages.OTHER
                    }), (0, o.jsx)(c.default, {
                      width: "16",
                      height: "16"
                    })]
                  })]
                });
              case 1:
                return (0, o.jsx)(s.TextArea, {
                  maxLength: h.MAX_REASON_LENGTH,
                  onChange: k,
                  value: O,
                  rows: 5,
                  autoFocus: !0
                })
            }
          })(P)
        })]
      }), (0, o.jsx)(s.FormItem, {
        title: E.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
        className: A.spacing,
        children: (0, o.jsx)(s.SingleSelect, {
          options: m(),
          value: S,
          onChange: D
        })
      })]
    }), (() => {
      switch (N) {
        case 0:
          return (0, o.jsxs)(s.ModalFooter, {
            className: A.footer,
            children: [(0, o.jsx)(s.Button, {
              type: "button",
              look: s.Button.Looks.LINK,
              color: s.Button.Colors.PRIMARY,
              onClick: p,
              children: E.default.Messages.CANCEL
            }), (0, o.jsx)(s.Button, {
              type: "submit",
              color: s.Button.Colors.RED,
              size: s.Button.Sizes.SMALL,
              onClick: x,
              children: E.default.Messages.BAN
            })]
          });
        case 1:
          return (0, o.jsxs)(s.ModalFooter, {
            className: A.footerStepped,
            children: [(0, o.jsx)(s.Button, {
              className: A.cancel,
              innerClassName: A.cancel,
              type: "button",
              look: s.Button.Looks.LINK,
              color: s.Button.Colors.PRIMARY,
              size: s.Button.Sizes.SMALL,
              onClick: U,
              children: E.default.Messages.BACK
            }), (0, o.jsx)(s.Button, {
              type: "submit",
              color: s.Button.Colors.RED,
              size: s.Button.Sizes.SMALL,
              onClick: x,
              children: E.default.Messages.BAN
            })]
          })
      }
    })()]
  })
}