n.d(t, {
  y: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  h = n(788307),
  m = n(605236),
  p = n(594174),
  E = n(768581),
  g = n(906605),
  f = n(106301),
  C = n(833858),
  _ = n(223135),
  I = n(981631),
  x = n(231338),
  T = n(689938),
  N = n(362759);
let Z = e => {
    let {
      style: t,
      className: n,
      name: i,
      icon: s
    } = e;
    return (0, l.jsx)(d.Tooltip, {
      text: i,
      children: e => (0, l.jsx)("div", {
        className: a()(n, N.iconWidget),
        style: t,
        ...e,
        children: null != s && s
      })
    })
  },
  S = e => {
    let {
      currentStatus: t
    } = e, s = i.useRef(f.Z.getRecentCustomStatuses()), r = i.useRef((0, m.un)(u.z.HANG_STATUS_NEW_BADGE)).current, S = (0, C.V)(), [v, A] = i.useState(null != t ? t : null), M = (0, c.e7)([p.default], () => p.default.getCurrentUser()), R = () => {
      !r && (0, m.EW)(u.z.HANG_STATUS_NEW_BADGE)
    }, j = (e, t) => {
      e.stopPropagation(), (0, g.Zx)(t, !0), R()
    }, L = (e, t) => {
      e.stopPropagation(), (0, g._s)(t.status, t.emoji, !0), R()
    }, O = i.useCallback(e => {
      e.stopPropagation(), (0, g.Sc)(!0)
    }, []), P = e => {
      e.stopPropagation(), (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("1631")]).then(n.bind(n, 333541));
        return t => (0, l.jsx)(e, {
          ...t
        })
      }), R()
    }, y = i.useCallback(e => {
      A({
        type: I.IIU.HANG_STATUS,
        name: "Hang Status",
        state: e
      })
    }, []), b = i.useCallback(e => {
      A({
        type: I.IIU.HANG_STATUS,
        name: "Hang Status",
        state: x.tN.CUSTOM,
        details: e.status,
        emoji: e.emoji
      })
    }, []);
    return (0, l.jsxs)("div", {
      className: N.popout,
      children: [!r && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: N.popoutBackground
        }), (0, l.jsxs)("div", {
          className: N.onboarding,
          children: [(0, l.jsxs)("div", {
            className: N.title,
            children: [(0, l.jsx)(d.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: T.Z.Messages.ACTIVITY_STATUS
            }), (0, l.jsx)(d.TextBadge, {
              text: T.Z.Messages.BETA,
              disableColor: !0,
              className: N.newBadge
            })]
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: N.helpText,
            children: T.Z.Messages.HANG_STATUS_HELP
          }), (0, l.jsxs)("div", {
            className: N.iconGroup,
            children: [null != M && (0, l.jsxs)("div", {
              className: N.avatarWrapper,
              children: [(0, l.jsx)(d.Avatar, {
                className: N.avatar,
                size: d.AvatarSizes.SIZE_40,
                src: (0, E.ov)(M),
                "aria-hidden": !0
              }), (0, l.jsx)("div", {
                className: N.outline
              })]
            }), (0, l.jsx)(_.Z, {
              className: N.statusIcon,
              hangStatusActivity: v
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: N.options,
        children: [(0, l.jsxs)("div", {
          className: N.iconsContainer,
          children: [Object.entries(S).map(e => {
            let [n, i] = e;
            return (0, l.jsx)(d.Clickable, {
              "aria-label": i.title,
              onMouseEnter: () => y(n),
              onClick: e => j(e, n),
              children: (0, l.jsx)(Z, {
                className: a()(N.iconWidget, {
                  [N.selectedWidget]: n === (null == t ? void 0 : t.state)
                }),
                name: i.title,
                icon: (0, l.jsx)("img", {
                  src: i.icon,
                  alt: "",
                  className: N.icon
                }),
                style: n === (null == t ? void 0 : t.state) ? {
                  backgroundColor: null != i.color ? i.color : void 0
                } : {}
              })
            }, n)
          }), (0, l.jsx)(d.Clickable, {
            "aria-label": T.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
            onClick: O,
            onMouseEnter: () => A(null),
            children: (0, l.jsx)(Z, {
              className: N.optionButton,
              name: T.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
              icon: (0, l.jsx)(d.DenyIcon, {
                size: "md",
                color: "currentColor",
                className: N.editIcon,
                colorClass: N.editIconColor
              })
            })
          })]
        }), (0, l.jsx)("div", {
          className: N.divider
        }), (0, l.jsxs)("div", {
          className: N.iconsContainer,
          children: [s.current.map((e, n) => {
            let i = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji);
            return (0, l.jsx)(d.Clickable, {
              "aria-label": e.status,
              onMouseEnter: () => b(e),
              onClick: t => L(t, e),
              children: (0, l.jsx)(Z, {
                className: a()(N.iconWidget, {
                  [N.selectedWidget]: i
                }),
                name: e.status,
                icon: null != e.emoji ? (0, l.jsx)(h.I, {
                  className: N.customIcon,
                  emoji: e.emoji,
                  hideTooltip: !0
                }) : null,
                style: i ? {
                  backgroundColor: "#7174B7B3"
                } : {
                  backgroundColor: "#6466914D"
                }
              })
            }, "custom-status-".concat(n))
          }), s.current.length > 0 ? (0, l.jsx)(d.Clickable, {
            "aria-label": null != t ? T.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : T.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: P,
            children: (0, l.jsx)(Z, {
              className: N.optionButton,
              name: null != t ? T.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : T.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
              icon: (0, l.jsx)(d.PencilIcon, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                colorClass: N.editIconColor
              })
            })
          }, "custom-status-edit") : (0, l.jsxs)(d.Clickable, {
            "aria-label": T.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: P,
            className: N.setCustomButton,
            children: [(0, l.jsx)(d.PencilIcon, {
              size: "xs",
              color: "currentColor",
              className: N.editIcon,
              colorClass: N.editIconColor
            }), (0, l.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "interactive-active",
              children: T.Z.Messages.STATUS_POPOUT_SET_CUSTOM
            })]
          }, "custom-status-edit-full")]
        })]
      })]
    })
  }