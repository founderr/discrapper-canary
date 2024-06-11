"use strict";
n.r(t), n.d(t, {
  HangStatusPopout: function() {
    return y
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("704215"),
  c = n("481060"),
  f = n("788307"),
  h = n("605236"),
  m = n("594174"),
  p = n("783014"),
  E = n("185403"),
  C = n("26290"),
  g = n("768581"),
  S = n("906605"),
  _ = n("106301"),
  T = n("833858"),
  I = n("223135"),
  A = n("981631"),
  x = n("231338"),
  v = n("689938"),
  N = n("513188");
let M = e => {
    let {
      style: t,
      className: n,
      name: l,
      icon: s
    } = e;
    return (0, a.jsx)(c.Tooltip, {
      text: l,
      children: e => (0, a.jsx)("div", {
        className: i()(n, N.iconWidget),
        style: t,
        ...e,
        children: null != s && s
      })
    })
  },
  y = e => {
    let {
      currentStatus: t
    } = e, s = l.useRef(_.default.getRecentCustomStatuses()), r = l.useRef((0, h.isDismissibleContentDismissed)(d.DismissibleContent.HANG_STATUS_NEW_BADGE)).current, y = (0, T.getHangStatusOptions)(), [R, L] = l.useState(null != t ? t : null), j = (0, u.useStateFromStores)([m.default], () => m.default.getCurrentUser()), O = () => {
      !r && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.HANG_STATUS_NEW_BADGE)
    }, P = (e, t) => {
      e.stopPropagation(), (0, S.updateHangStatus)(t, !0), O()
    }, D = (e, t) => {
      e.stopPropagation(), (0, S.updateCustomHangStatus)(t.status, t.emoji, !0), O()
    }, b = l.useCallback(e => {
      e.stopPropagation(), (0, S.clearHangStatus)(!0)
    }, []), U = e => {
      e.stopPropagation(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("1631")]).then(n.bind(n, "333541"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }), O()
    }, F = l.useCallback(e => {
      L({
        type: A.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: e
      })
    }, []), w = l.useCallback(e => {
      L({
        type: A.ActivityTypes.HANG_STATUS,
        name: "Hang Status",
        state: x.HangStatusTypes.CUSTOM,
        details: e.status,
        emoji: e.emoji
      })
    }, []);
    return (0, a.jsxs)("div", {
      className: N.popout,
      children: [!r && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: N.popoutBackground
        }), (0, a.jsxs)("div", {
          className: N.onboarding,
          children: [(0, a.jsxs)("div", {
            className: N.title,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: v.default.Messages.ACTIVITY_STATUS
            }), (0, a.jsx)(C.TextBadge, {
              text: v.default.Messages.BETA,
              disableColor: !0,
              className: N.newBadge
            })]
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: N.helpText,
            children: v.default.Messages.HANG_STATUS_HELP
          }), (0, a.jsxs)("div", {
            className: N.iconGroup,
            children: [null != j && (0, a.jsxs)("div", {
              className: N.avatarWrapper,
              children: [(0, a.jsx)(c.Avatar, {
                className: N.avatar,
                size: c.AvatarSizes.SIZE_40,
                src: (0, g.getUserAvatarURL)(j),
                "aria-hidden": !0
              }), (0, a.jsx)("div", {
                className: N.outline
              })]
            }), (0, a.jsx)(I.default, {
              className: N.statusIcon,
              hangStatusActivity: R
            })]
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: N.options,
        children: [(0, a.jsxs)("div", {
          className: N.iconsContainer,
          children: [Object.entries(y).map(e => {
            let [n, l] = e;
            return (0, a.jsx)(c.Clickable, {
              "aria-label": l.title,
              onMouseEnter: () => F(n),
              onClick: e => P(e, n),
              children: (0, a.jsx)(M, {
                className: i()(N.iconWidget, {
                  [N.selectedWidget]: n === (null == t ? void 0 : t.state)
                }),
                name: l.title,
                icon: (0, a.jsx)("img", {
                  src: l.icon,
                  alt: "",
                  className: N.icon
                }),
                style: n === (null == t ? void 0 : t.state) ? {
                  backgroundColor: null != l.color ? l.color : void 0
                } : {}
              })
            }, n)
          }), (0, a.jsx)(c.Clickable, {
            "aria-label": v.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
            onClick: b,
            onMouseEnter: () => L(null),
            children: (0, a.jsx)(M, {
              className: N.optionButton,
              name: v.default.Messages.STATUS_POPOUT_CLEAR_STATUS,
              icon: (0, a.jsx)(p.default, {
                className: N.editIcon,
                foreground: N.editIconColor
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: N.divider
        }), (0, a.jsxs)("div", {
          className: N.iconsContainer,
          children: [s.current.map((e, n) => {
            let l = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji);
            return (0, a.jsx)(c.Clickable, {
              "aria-label": e.status,
              onMouseEnter: () => w(e),
              onClick: t => D(t, e),
              children: (0, a.jsx)(M, {
                className: i()(N.iconWidget, {
                  [N.selectedWidget]: l
                }),
                name: e.status,
                icon: null != e.emoji ? (0, a.jsx)(f.ActivityEmoji, {
                  className: N.customIcon,
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
          }), s.current.length > 0 ? (0, a.jsx)(c.Clickable, {
            "aria-label": null != t ? v.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: U,
            children: (0, a.jsx)(M, {
              className: N.optionButton,
              name: null != t ? v.default.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.default.Messages.STATUS_POPOUT_SET_CUSTOM,
              icon: (0, a.jsx)(E.default, {
                width: 20,
                height: 20,
                foreground: N.editIconColor
              })
            })
          }, "custom-status-edit") : (0, a.jsxs)(c.Clickable, {
            "aria-label": v.default.Messages.STATUS_POPOUT_SET_CUSTOM,
            onClick: U,
            className: N.setCustomButton,
            children: [(0, a.jsx)(E.default, {
              className: N.editIcon,
              foreground: N.editIconColor
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "interactive-active",
              children: v.default.Messages.STATUS_POPOUT_SET_CUSTOM
            })]
          }, "custom-status-edit-full")]
        })]
      })]
    })
  }