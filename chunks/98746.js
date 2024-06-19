a.r(s), a.d(s, {
  default: function() {
    return R
  }
}), a(47120);
var l, t, o = a(735250),
  n = a(470079),
  r = a(481060),
  c = a(749210),
  i = a(910693),
  u = a(810090),
  E = a(70956),
  _ = a(5192),
  d = a(981631),
  N = a(689938),
  O = a(564565);
(t = l || (l = {}))[t.INITIAL = 0] = "INITIAL", t[t.OTHER_REASON = 1] = "OTHER_REASON";

function S() {
  return [{
    value: 0,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
  }, {
    value: 1 * E.Z.Seconds.HOUR,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
  }, {
    value: 6 * E.Z.Seconds.HOUR,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
  }, {
    value: 12 * E.Z.Seconds.HOUR,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
  }, {
    value: 1 * E.Z.Seconds.DAY,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
  }, {
    value: 3 * E.Z.Seconds.DAY,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
  }, {
    value: 7 * E.Z.Seconds.DAY,
    label: N.Z.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
  }]
}
let A = S()[1].value;

function R(e) {
  let {
    guildId: s,
    user: l,
    location: t,
    userIds: E,
    onBanMultiple: R,
    transitionState: M,
    onClose: I,
    canBulkBan: T = !1
  } = e, [C, m] = n.useState(A), [g, h] = n.useState(""), [p, x] = n.useState(0), [Z, B] = n.useState(!1), L = (0, i.sE)(s, {
    location: t,
    targetUserId: null == l ? void 0 : l.id,
    targets: E
  }), b = n.useCallback(() => {
    if (null != R) {
      if (!(null != E && (null == E ? void 0 : E.size) > 0 && T) || Z) return;
      if ("" === g.trim() && !Z) {
        B(!0);
        return
      }
      R(s, [...E], C, g)
    } else {
      if (null == l) return;
      c.Z.banUser(s, null == l ? void 0 : l.id, C, g)
    }
    L(i.jQ.BAN), I()
  }, [R, L, I, E, T, Z, g, s, C, l]), j = n.useCallback(e => {
    m(e)
  }, []), v = n.useCallback(e => {
    let {
      value: s
    } = e;
    h(s), B(!1)
  }, []), k = n.useCallback(e => {
    h(e), Z && B(!1)
  }, [Z]), H = n.useCallback(() => {
    h(""), x(1)
  }, []), f = n.useCallback(() => {
    x(0)
  }, []), P = [{
    name: N.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
    value: N.Z.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
  }, {
    name: N.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
    value: N.Z.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
  }, {
    name: N.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES,
    value: N.Z.Messages.BAN_REASON_OPTION_BREAKING_RULES
  }], D = null != R && null != E ? N.Z.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
    count: null == E ? void 0 : E.size
  }) : null == l ? "" : N.Z.Messages.BAN_CONFIRM_TITLE.format({
    username: "@".concat(_.ZP.getName(s, null, l))
  });
  return (0, o.jsxs)(r.ModalRoot, {
    transitionState: M,
    children: [(0, o.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: D
      })
    }), (0, o.jsxs)(r.ModalContent, {
      className: O.modalContent,
      children: [(0, o.jsxs)(u.Z, {
        autoPlay: !0,
        loop: !0,
        className: O.spacing,
        width: 400,
        children: [(0, o.jsx)("source", {
          src: a(942314),
          type: "video/webm"
        }), (0, o.jsx)("source", {
          src: a(888322),
          type: "video/mp4"
        }), (0, o.jsx)("img", {
          alt: "",
          src: a(860724)
        })]
      }), (0, o.jsxs)(r.FormItem, {
        title: N.Z.Messages.FORM_LABEL_REASON_BAN,
        className: O.spacing,
        children: [Z && (0, o.jsx)(r.FormErrorBlock, {
          className: O.error,
          children: N.Z.Messages.BAN_REASON_REQUIRED_ERROR
        }), (0, o.jsx)(r.Sequencer, {
          steps: [0, 1],
          step: p,
          children: (e => {
            switch (p) {
              case 0:
                return (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)(r.RadioGroup, {
                    value: g,
                    options: e,
                    onChange: v,
                    radioItemClassName: O.radioItemStyles
                  }), (0, o.jsxs)(r.Clickable, {
                    onClick: H,
                    className: O.banReasonOtherClickable,
                    children: [(0, o.jsx)(r.Text, {
                      variant: "text-md/medium",
                      color: "none",
                      children: N.Z.Messages.OTHER
                    }), (0, o.jsx)(r.ChevronSmallRightIcon, {
                      color: "currentColor",
                      size: "xs"
                    })]
                  })]
                });
              case 1:
                return (0, o.jsx)(r.TextArea, {
                  maxLength: d.GNZ,
                  onChange: k,
                  value: g,
                  rows: 5,
                  autoFocus: !0
                })
            }
          })(P)
        })]
      }), (0, o.jsx)(r.FormItem, {
        title: N.Z.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
        className: O.spacing,
        children: (0, o.jsx)(r.SingleSelect, {
          options: S(),
          value: C,
          onChange: j
        })
      })]
    }), (() => {
      switch (p) {
        case 0:
          return (0, o.jsxs)(r.ModalFooter, {
            className: O.footer,
            children: [(0, o.jsx)(r.Button, {
              type: "button",
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              onClick: I,
              children: N.Z.Messages.CANCEL
            }), (0, o.jsx)(r.Button, {
              type: "submit",
              color: r.Button.Colors.RED,
              size: r.Button.Sizes.SMALL,
              onClick: b,
              children: N.Z.Messages.BAN
            })]
          });
        case 1:
          return (0, o.jsxs)(r.ModalFooter, {
            className: O.footerStepped,
            children: [(0, o.jsx)(r.Button, {
              className: O.cancel,
              innerClassName: O.cancel,
              type: "button",
              look: r.Button.Looks.LINK,
              color: r.Button.Colors.PRIMARY,
              size: r.Button.Sizes.SMALL,
              onClick: f,
              children: N.Z.Messages.BACK
            }), (0, o.jsx)(r.Button, {
              type: "submit",
              color: r.Button.Colors.RED,
              size: r.Button.Sizes.SMALL,
              onClick: b,
              children: N.Z.Messages.BAN
            })]
          })
      }
    })()]
  })
}