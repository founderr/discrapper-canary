n.d(t, {
  y: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(704215),
  d = n(481060),
  h = n(788307),
  p = n(605236),
  m = n(594174),
  _ = n(768581),
  f = n(906605),
  E = n(106301),
  g = n(833858),
  C = n(223135),
  I = n(981631),
  x = n(231338),
  T = n(689938),
  N = n(362759);
let v = e => {
    let {
      style: t,
      className: n,
      name: a,
      icon: l
    } = e;
    return (0, i.jsx)(d.Tooltip, {
      text: a,
      children: e => (0, i.jsx)("div", {
        className: s()(n, N.iconWidget),
        style: t,
        ...e,
        children: null != l && l
      })
    })
  },
  S = e => {
    let {
      currentStatus: t
    } = e, l = a.useRef(E.Z.getRecentCustomStatuses()), r = a.useRef((0, p.un)(u.z.HANG_STATUS_NEW_BADGE)).current, S = (0, g.V)(), [Z, A] = a.useState(null != t ? t : null), M = (0, c.e7)([m.default], () => m.default.getCurrentUser()), b = () => {
      !r && (0, p.EW)(u.z.HANG_STATUS_NEW_BADGE)
    }, R = (e, t) => {
      e.stopPropagation(), (0, f.Zx)(t, !0), b()
    }, j = (e, t) => {
      e.stopPropagation(), (0, f._s)(t.status, t.emoji, !0), b()
    }, L = a.useCallback(e => {
      e.stopPropagation(), (0, f.Sc)(!0)
    }, []), P = e => {
      e.stopPropagation(), (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("1631").then(n.bind(n, 333541));
        return t => (0, i.jsx)(e, {
          ...t
        })
      }), b()
    }, O = a.useCallback(e => {
      A({
        type: I.IIU.HANG_STATUS,
        name: "Hang Status",
        state: e
      })
    }, []), y = a.useCallback(e => {
      A({
        type: I.IIU.HANG_STATUS,
        name: "Hang Status",
        state: x.tN.CUSTOM,
        details: e.status,
        emoji: e.emoji
      })
    }, []);
    return (0, i.jsxs)("div", {
      className: N.popout,
      children: [!r && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: N.popoutBackground
        }), (0, i.jsxs)("div", {
          className: N.onboarding,
          children: [(0, i.jsxs)("div", {
            className: N.title,
            children: [(0, i.jsx)(d.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: T.Z.Messages.ACTIVITY_STATUS
            }), (0, i.jsx)(d.TextBadge, {
              text: T.Z.Messages.BETA,
              disableColor: !0,
              className: N.newBadge
            })]
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: N.helpText,
            children: T.Z.Messages.HANG_STATUS_HELP
          }), (0, i.jsxs)("div", {
            className: N.iconGroup,
            children: [null != M && (0, i.jsxs)("div", {
              className: N.avatarWrapper,
              children: [(0, i.jsx)(d.Avatar, {
                className: N.avatar,
                size: d.AvatarSizes.SIZE_40,
                src: (0, _.ov)(M),
                "aria-hidden": !0
              }), (0, i.jsx)("div", {
                className: N.outline
              })]
            }), (0, i.jsx)(C.Z, {
              className: N.statusIcon,
              hangStatusActivity: Z
            })]
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: N.options,
        children: [(0, i.jsxs)("div", {
          className: N.iconsContainer,
          children: [Object.entries(S).map(e => {
            let [n, a] = e;
            return (0, i.jsx)(d.Clickable, {
              "aria-label": a.title,
              onMouseEnter: () => O(n),
              onClick: e => R(e, n),
              children: (0, i.jsx)(v, {
                className: s()(N.iconWidget, {
                  [N.selectedWidget]: n === (null == t ? void 0 : t.state)
                }),
                name: a.title,
                icon: (0, i.jsx)("img", {
                  src: a.icon,
                  alt: "",
                  className: N.icon
                }),
                style: n === (null == t ? void 0 : t.state) ? {
                  backgroundColor: null != a.color ? a.color : void 0
                } : {}
              })
            }, n)
          }), (0, i.jsx)(d.Clickable, {
            "aria-label": T.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
            onClick: L,
            onMouseEnter: () => A(null),
            children: (0, i.jsx)(v, {
              className: N.optionButton,
              name: T.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
              icon: (0, i.jsx)(d.DenyIcon, {
                size: "md",
                color: "currentColor",
                className: N.editIcon,
                colorClass: N.editIconColor
              })
            })
          })]
        }), (0, i.jsx)("div", {
          className: N.divider
        }), (0, i.jsxs)("div", {
          className: N.iconsContainer,
          children: [l.current.map((e, n) => {
            let a = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji);
            return (0, i.jsx)(d.Clickable, {
              "aria-label": e.status,
              onMouseEnter: () => y(e),
              onClick: t => j(t, e),
              children: (0, i.jsx)(v, {
                className: s()(N.iconWidget, {
                  [N.selectedWidget]: a
                }),
                name: e.status,
                icon: null != e.emoji ? (0, i.jsx)(h.I, {
                  className: N.customIcon,
                  emoji: e.emoji,
                  hideTooltip: !0
                }) : null,
                style: a ? {
                  backgroundColor: "#7174B7B3"
                } : {
                  backgroundColor: "#6466914D"
                }
              })
            }, "custom-status-".concat(n))
          }), l.current.length > 0 ? (0, i.jsx)(d.Clickable, {
            "aria-label": null != t ? T.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : T.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: P,
            children: (0, i.jsx)(v, {
              className: N.optionButton,
              name: null != t ? T.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : T.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
              icon: (0, i.jsx)(d.PencilIcon, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                colorClass: N.editIconColor
              })
            })
          }, "custom-status-edit") : (0, i.jsxs)(d.Clickable, {
            "aria-label": T.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: P,
            className: N.setCustomButton,
            children: [(0, i.jsx)(d.PencilIcon, {
              size: "xs",
              color: "currentColor",
              className: N.editIcon,
              colorClass: N.editIconColor
            }), (0, i.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "interactive-active",
              children: T.Z.Messages.STATUS_POPOUT_SET_CUSTOM
            })]
          }, "custom-status-edit-full")]
        })]
      })]
    })
  }