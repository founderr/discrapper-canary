n.d(t, {
  Z: function() {
    return J
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(722770),
  u = n(873546),
  d = n(442837),
  E = n(481060),
  h = n(232567),
  _ = n(2052),
  I = n(393238),
  m = n(727637),
  T = n(420660),
  g = n(100527),
  p = n(906732),
  N = n(521868),
  S = n(299206),
  C = n(440051),
  A = n(734934),
  f = n(158238),
  Z = n(785717),
  L = n(221292),
  O = n(318661),
  v = n(502762),
  R = n(192133),
  P = n(138394),
  x = n(131640),
  M = n(695346),
  D = n(199902),
  b = n(293273),
  y = n(158776),
  j = n(594174),
  U = n(881201),
  G = n(626135),
  w = n(70956),
  k = n(51144),
  B = n(246133),
  H = n(474376),
  V = n(383832),
  F = n(981631),
  Y = n(228168),
  z = n(689938),
  W = n(503862);
let K = [{
  duration: 30 * w.Z.Millis.MINUTE,
  label: () => z.Z.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: w.Z.Millis.HOUR,
  label: () => z.Z.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * w.Z.Millis.HOUR,
  label: () => z.Z.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * w.Z.Millis.HOUR,
  label: () => z.Z.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: w.Z.Millis.DAY,
  label: () => z.Z.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => z.Z.Messages.DURATION_FOREVER
}];

function q(e, t, n, i) {
  let l = (0, s.jsx)(s.Fragment, {
    children: K.map(i => {
      let {
        duration: l,
        label: a
      } = i;
      return (0, s.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: a(),
        action: () => (0, B.Z)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, s.jsx)(E.MenuItem, {
    id: e,
    className: W.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, s.jsxs)("div", {
        className: W.statusItem,
        children: [(0, s.jsx)(E.Status, {
          status: e,
          className: W.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, s.jsx)("div", {
          className: W.status,
          children: (0, k.u5)(e)
        }), null != i && (0, s.jsx)("div", {
          className: W.description,
          children: i
        })]
      })
    },
    action: () => (0, B.Z)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== F.Skl.ONLINE ? l : void 0
  })
}

function Q(e, t, n, i) {
  return (0, s.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, s.jsxs)("div", {
        className: W.statusItem,
        children: [(0, s.jsx)(E.Status, {
          status: e,
          className: W.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, s.jsx)("div", {
          className: W.status,
          children: (0, k.u5)(e)
        }), null != i && (0, s.jsx)("div", {
          className: W.description,
          children: i
        })]
      })
    },
    action: () => (0, B.Z)(e, t, n),
    dontCloseOnAction: !0
  })
}

function X(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: D
  } = e, b = (0, _.O)(), {
    analyticsLocations: j
  } = (0, p.ZP)(g.Z.ACCOUNT_PROFILE_POPOUT), w = (0, O.ZP)(t.id, l), [B, X, J, $] = (0, d.Wu)([y.Z], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, void 0, F.Skl.UNKNOWN, !1] : [null !== (e = y.Z.findActivity(n, e => e.type !== F.IIU.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, y.Z.findActivity(t.id, e => e.type === F.IIU.CUSTOM_STATUS), y.Z.getStatus(n), y.Z.isMobileOnline(n)]
  }), ee = function(e, t) {
    let n = C.Y.useExperiment({
        location: "account popout"
      }).expiringStatus,
      i = M.Cr.useSetting(),
      l = (0, A.p)(),
      a = f.e.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = M.fv.useSetting(),
      o = e === F.Skl.DND,
      u = t => {
        let n = null != i && "0" !== i ? z.Z.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(i)).toLocaleString(z.Z.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case F.Skl.DND:
            return a ? z.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : z.Z.Messages.STATUS_DND_HELP;
          case F.Skl.INVISIBLE:
            return z.Z.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      d = (0, s.jsx)(s.Fragment, {
        children: K.map(t => {
          let {
            duration: n,
            label: i
          } = t;
          return (0, s.jsx)(E.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: i(),
            action: () => {
              (0, A.oW)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, s.jsxs)(s.Fragment, {
      children: [Q(F.Skl.ONLINE, e, t), (0, s.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), n ? q(F.Skl.IDLE, e, t, u(F.Skl.IDLE)) : Q(F.Skl.IDLE, e, t, u(F.Skl.IDLE)), n ? q(F.Skl.DND, e, t, u(F.Skl.DND)) : Q(F.Skl.DND, e, t, u(F.Skl.DND)), n ? q(F.Skl.INVISIBLE, e, t, u(F.Skl.INVISIBLE)) : Q(F.Skl.INVISIBLE, e, t, u(F.Skl.INVISIBLE)), (0, s.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), a || l ? (0, s.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: W.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, s.jsxs)("div", {
          className: W.statusItem,
          children: [(0, s.jsx)(E.BellSlashIcon, {
            size: "xxs",
            className: W.icon
          }), (0, s.jsxs)("div", {
            className: W.focusModeTitle,
            children: [z.Z.Messages.FOCUS_MODE_TITLE, (0, s.jsx)(E.TextBadge, {
              text: l ? z.Z.Messages.FOCUS_MODE_BADGE_ON : o ? z.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : z.Z.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? c.Z.BRAND_500 : o ? c.Z.RED_400 : c.Z.PRIMARY_500
            })]
          }), (0, s.jsx)("div", {
            className: W.description,
            children: l && null != r && "0" !== r ? z.Z.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(z.Z.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : z.Z.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, A.oW)(!l)
        },
        dontCloseOnAction: !0,
        children: d
      }, "quiet-mode") : null]
    })
  }(J, b), {
    ref: et
  } = (0, I.Z)(), en = (0, m.Z)(et);
  i.useEffect(() => {
    G.default.track(F.rMx.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != B ? B.application_id : void 0,
      is_streaming: r,
      application_name: null != B ? B.name : void 0,
      profile_has_nitro_customization: (null == w ? void 0 : w.banner) != null,
      location: b.location,
      has_profile_effect: (null == w ? void 0 : w.profileEffectId) != null
    })
  }, []);
  let es = (0, A.p)(),
    ei = J === F.Skl.DND,
    el = (0, H.g)(),
    ea = (0, N.o)(null != n ? n : void 0, W.menuItemFocused),
    er = (0, S.Z)({
      id: t.id,
      label: z.Z.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, s.jsx)(p.Gt, {
    value: j,
    children: (0, s.jsx)(Z.Mt, {
      layout: "ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, s.jsx)("div", {
        className: W.popoutContainer,
        children: (0, s.jsx)("div", {
          ref: et,
          children: (0, s.jsxs)(v.Z, {
            className: W.themeContainer,
            user: t,
            displayProfile: w,
            profileType: Y.y0.POPOUT,
            children: [(0, s.jsx)(x.ZP, {
              user: t,
              displayProfile: w,
              onClose: () => null == D ? void 0 : D(),
              isMobile: $,
              isStreaming: (0, T.Z)(B),
              status: J,
              disableUserProfileLink: __OVERLAY__,
              isHovering: en,
              showPremiumBadgeUpsell: !1
            }), (0, s.jsxs)(v.Z.Overlay, {
              children: [(0, s.jsx)(R.Z, {
                activity: B,
                customStatusActivity: X,
                displayProfile: w,
                user: t,
                onClose: o,
                setNote: !1,
                canDM: !1,
                hideNote: !0,
                showCopiableUsername: !0
              }), (0, s.jsx)(P.Z, {
                className: W.divider
              }), (0, s.jsxs)(E.Menu, {
                navId: "account",
                "aria-label": z.Z.Messages.SET_STATUS,
                hideScroller: !0,
                className: W.menu,
                onClose: o,
                onSelect: h,
                children: [(0, s.jsxs)(E.MenuGroup, {
                  children: [(0, s.jsx)(E.MenuItem, {
                    id: "status-picker",
                    label: (0, s.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, k.u5)(J), es || ei ? (0, s.jsx)(E.BellSlashIcon, {
                        size: "xxs"
                      }) : null]
                    }),
                    focusedClassName: W.menuItemFocused,
                    subMenuIconClassName: W.subMenuIcon,
                    action: u.tq ? function() {
                      (0, L.pQ)({
                        action: "PRESS_SET_STATUS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: j
                      }), (0, E.openModalLazy)(() => new Promise(e => {
                        e(e => (0, s.jsx)(E.ModalRoot, {
                          ...e,
                          size: E.ModalSize.SMALL,
                          className: W.modal,
                          "aria-label": z.Z.Messages.SET_STATUS,
                          children: (0, s.jsx)(E.Menu, {
                            navId: "account",
                            variant: "fixed",
                            "aria-label": z.Z.Messages.SET_STATUS,
                            hideScroller: !0,
                            className: W.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: ee
                          })
                        }))
                      }))
                    } : void 0,
                    showIconFirst: !0,
                    icon: e => {
                      let {
                        className: t,
                        isFocused: n
                      } = e;
                      return (0, s.jsx)(E.Status, {
                        status: J,
                        size: 12,
                        className: a()(t, W.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: u.tq ? void 0 : ee
                  }, "status-picker"), ea]
                }), (0, s.jsx)(E.MenuGroup, {
                  children: (0, s.jsx)(E.MenuItem, {
                    id: "switch-account",
                    focusedClassName: W.menuItemFocused,
                    subMenuIconClassName: W.subMenuIcon,
                    label: z.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: (0, E.makeIconCompat)(U.Z),
                    showIconFirst: !0,
                    action: () => {
                      (0, L.pQ)({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: j
                      }), (0, V.Z)()
                    },
                    children: el
                  }, "switch-account")
                }), (0, s.jsx)(E.MenuGroup, {
                  children: er
                })]
              })]
            })]
          })
        })
      })
    })
  })
}

function J(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: a,
    onSelect: r
  } = e, c = (0, d.e7)([j.default], () => j.default.getUser(t), [t]), u = (0, d.e7)([b.Z], () => b.Z.getCustomStatusActivity()), [E, _] = i.useState(!1), I = null != c ? c : n, m = (0, d.e7)([D.Z], () => null != I && null != D.Z.getAnyStreamForUser(I.id));
  return (i.useEffect(() => {
    null == c && e();
    async function e() {
      "string" == typeof t && (await (0, h.PR)(t), _(!0))
    }
  }, [c, t]), null == I) ? (E && o()(null != I, "Unexpected missing user"), null) : (0, s.jsx)(X, {
    closePopout: a,
    user: I,
    customStatus: u,
    guildId: l,
    isApplicationStreaming: m,
    onClose: a,
    onSelect: r
  })
}