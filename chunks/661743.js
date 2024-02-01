"use strict";
n.r(t), n.d(t, {
  HangStatusPopout: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("77078"),
  d = n("446674"),
  c = n("943722"),
  f = n("697218"),
  h = n("468759"),
  p = n("987772"),
  m = n("956089"),
  E = n("315102"),
  C = n("233965"),
  S = n("32346"),
  g = n("808742"),
  _ = n("342845"),
  I = n("49111"),
  T = n("843455"),
  v = n("782340"),
  x = n("492013");
let N = e => {
    e.stopPropagation(), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("579371").then(n.bind(n, "579371"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    })
  },
  A = e => {
    let {
      style: t,
      className: n,
      name: l,
      icon: s
    } = e;
    return (0, a.jsx)(u.Tooltip, {
      text: l,
      children: e => (0, a.jsx)("div", {
        className: i(n, x.iconWidget),
        style: t,
        ...e,
        children: null != s && s
      })
    })
  },
  M = e => {
    let {
      currentStatus: t
    } = e, n = l.useRef(S.default.getRecentCustomStatuses()), s = (0, g.getHangStatusOptions)(), [r, M] = l.useState(null != t ? t : null), R = (0, d.useStateFromStores)([f.default], () => f.default.getCurrentUser()), j = (e, t) => {
      e.stopPropagation(), (0, C.updateHangStatus)(t, !0)
    }, L = (e, t) => {
      e.stopPropagation(), (0, C.updateCustomHangStatus)(t.status, t.emoji, !0)
    }, O = l.useCallback(e => {
      e.stopPropagation(), (0, C.clearHangStatus)(!0)
    }, []), y = l.useCallback(e => {
      M({
        type: I.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: e
      })
    }, []), P = l.useCallback(e => {
      M({
        type: I.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: T.HangStatusTypes.CUSTOM,
        details: e.status,
        emoji: e.emoji
      })
    }, []);
    return (0, a.jsxs)("div", {
      className: x.popout,
      children: [(0, a.jsx)("div", {
        className: x.popoutBackground
      }), (0, a.jsxs)("div", {
        className: x.onboarding,
        children: [(0, a.jsxs)("div", {
          className: x.title,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: v.default.Messages.ACTIVITY_STATUS
          }), (0, a.jsx)(m.TextBadge, {
            text: v.default.Messages.BETA,
            disableColor: !0,
            className: x.newBadge
          })]
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: x.helpText,
          children: v.default.Messages.HANG_STATUS_HELP
        }), (0, a.jsxs)("div", {
          className: x.iconGroup,
          children: [null != R && (0, a.jsxs)("div", {
            className: x.avatarWrapper,
            children: [(0, a.jsx)(u.Avatar, {
              className: x.avatar,
              size: u.AvatarSizes.SIZE_40,
              src: (0, E.getUserAvatarURL)(R),
              "aria-hidden": !0
            }), (0, a.jsx)("div", {
              className: x.outline
            })]
          }), (0, a.jsx)(_.default, {
            className: x.statusIcon,
            hangStatusActivity: r
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: x.options,
        children: [(0, a.jsxs)("div", {
          className: x.iconsContainer,
          children: [Object.entries(s).map(e => {
            let [n, l] = e;
            return (0, a.jsx)(u.Clickable, {
              "aria-label": l.title,
              onMouseEnter: () => y(n),
              onClick: e => j(e, n),
              children: (0, a.jsx)(A, {
                className: i(x.iconWidget, {
                  [x.selectedWidget]: n === (null == t ? void 0 : t.state)
                }),
                name: l.title,
                icon: (0, a.jsx)("img", {
                  src: l.icon,
                  alt: "",
                  className: x.icon
                }),
                style: n === (null == t ? void 0 : t.state) ? {
                  backgroundColor: null != l.color ? l.color : void 0
                } : {}
              })
            }, n)
          }), (0, a.jsx)(u.Clickable, {
            "aria-label": v.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
            onClick: O,
            onMouseEnter: () => M(null),
            children: (0, a.jsx)(A, {
              className: x.optionButton,
              name: v.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
              icon: (0, a.jsx)(h.default, {
                className: x.editIcon,
                foreground: x.editIconColor
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: x.divider
        }), (0, a.jsxs)("div", {
          className: x.iconsContainer,
          children: [n.current.map((e, n) => {
            let l = e.status === (null == t ? void 0 : t.details) && o.isEqual(e.emoji, null == t ? void 0 : t.emoji);
            return (0, a.jsx)(u.Clickable, {
              "aria-label": e.status,
              onMouseEnter: () => P(e),
              onClick: t => L(t, e),
              children: (0, a.jsx)(A, {
                className: i(x.iconWidget, {
                  [x.selectedWidget]: l
                }),
                name: e.status,
                icon: null != e.emoji ? (0, a.jsx)(c.ActivityEmoji, {
                  className: x.customIcon,
                  emoji: e.emoji,
                  hideTooltip: !0
                }) : null,
                style: l ? {
                  backgroundColor: "#7174B7B3"
                } : {
                  backgroundColor: "#6466914D"
                }
              })
            }, "custom-status-".concat(n))
          }), n.current.length > 0 ? (0, a.jsx)(u.Clickable, {
            "aria-label": null != t ? v.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: N,
            children: (0, a.jsx)(A, {
              className: x.optionButton,
              name: null != t ? v.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.default.Messages.STATUS_POPOUT_SET_CUSTOM,
              icon: (0, a.jsx)(p.default, {
                width: 20,
                height: 20,
                foreground: x.editIconColor
              })
            })
          }, "custom-status-edit") : (0, a.jsxs)(u.Clickable, {
            "aria-label": v.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: N,
            className: x.setCustomButton,
            children: [(0, a.jsx)(p.default, {
              className: x.editIcon,
              foreground: x.editIconColor
            }), (0, a.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "interactive-active",
              children: v.default.Messages.STATUS_POPOUT_SET_CUSTOM
            })]
          }, "custom-status-edit-full")]
        })]
      })]
    })
  }