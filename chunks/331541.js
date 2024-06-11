"use strict";
n.r(t), n.d(t, {
  default: function() {
    return $
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("722770"),
  d = n("873546"),
  c = n("442837"),
  f = n("116061"),
  E = n("481060"),
  h = n("232567"),
  C = n("2052"),
  _ = n("393238"),
  m = n("727637"),
  S = n("420660"),
  p = n("100527"),
  I = n("906732"),
  g = n("521868"),
  T = n("299206"),
  A = n("440051"),
  N = n("734934"),
  v = n("158238"),
  R = n("785717"),
  O = n("221292"),
  L = n("318661"),
  P = n("502762"),
  y = n("192133"),
  M = n("138394"),
  D = n("131640"),
  x = n("695346"),
  b = n("199902"),
  U = n("293273"),
  j = n("158776"),
  G = n("594174"),
  w = n("881201"),
  k = n("626135"),
  B = n("70956"),
  F = n("51144"),
  H = n("246133"),
  V = n("474376"),
  Y = n("383832"),
  W = n("981631"),
  K = n("228168"),
  z = n("689938"),
  q = n("834669");
let Q = [{
  duration: 30 * B.default.Millis.MINUTE,
  label: () => z.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: B.default.Millis.HOUR,
  label: () => z.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * B.default.Millis.HOUR,
  label: () => z.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * B.default.Millis.HOUR,
  label: () => z.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: B.default.Millis.DAY,
  label: () => z.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => z.default.Messages.DURATION_FOREVER
}];

function Z(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: Q.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, H.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    className: q.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: q.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: q.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: q.status,
          children: (0, F.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: q.description,
          children: s
        })]
      })
    },
    action: () => (0, H.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== W.StatusTypes.ONLINE ? l : void 0
  })
}

function X(e, t, n, s) {
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: q.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: q.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: q.status,
          children: (0, F.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: q.description,
          children: s
        })]
      })
    },
    action: () => (0, H.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function J(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: b
  } = e, U = (0, C.useAnalyticsContext)(), {
    analyticsLocations: G
  } = (0, I.default)(p.default.ACCOUNT_PROFILE_POPOUT), B = (0, L.default)(t.id, l), [H, J, $, ee] = (0, c.useStateFromStoresArray)([j.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, void 0, W.StatusTypes.UNKNOWN, !1] : [null !== (e = j.default.findActivity(n, e => e.type !== W.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, j.default.findActivity(t.id, e => e.type === W.ActivityTypes.CUSTOM_STATUS), j.default.getStatus(n), j.default.isMobileOnline(n)]
  }), et = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = x.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = x.FocusModeExpiresAtSetting.useSetting(),
      o = e === W.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? z.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(z.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case W.StatusTypes.DND:
            return i ? z.default.Messages.STATUS_DND_HELP_FOCUS_MODE : z.default.Messages.STATUS_DND_HELP;
          case W.StatusTypes.INVISIBLE:
            return z.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: Q.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, a.jsx)(E.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: s(),
            action: () => {
              (0, N.setFocusMode)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [X(W.StatusTypes.ONLINE, e, t), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), n ? Z(W.StatusTypes.IDLE, e, t, d(W.StatusTypes.IDLE)) : X(W.StatusTypes.IDLE, e, t, d(W.StatusTypes.IDLE)), n ? Z(W.StatusTypes.DND, e, t, d(W.StatusTypes.DND)) : X(W.StatusTypes.DND, e, t, d(W.StatusTypes.DND)), n ? Z(W.StatusTypes.INVISIBLE, e, t, d(W.StatusTypes.INVISIBLE)) : X(W.StatusTypes.INVISIBLE, e, t, d(W.StatusTypes.INVISIBLE)), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: q.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: q.icon
          }), (0, a.jsxs)("div", {
            className: q.focusModeTitle,
            children: [z.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(E.TextBadge, {
              text: l ? z.default.Messages.FOCUS_MODE_BADGE_ON : o ? z.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : z.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: q.description,
            children: l && null != r && "0" !== r ? z.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(z.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : z.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }($, U), {
    ref: en
  } = (0, _.default)(), ea = (0, m.default)(en);
  s.useEffect(() => {
    k.default.track(W.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != H ? H.application_id : void 0,
      is_streaming: r,
      application_name: null != H ? H.name : void 0,
      profile_has_nitro_customization: (null == B ? void 0 : B.banner) != null,
      location: U.location,
      has_profile_effect: (null == B ? void 0 : B.profileEffectId) != null
    })
  }, []);
  let es = (0, N.useFocusModeEnabled)(),
    el = $ === W.StatusTypes.DND,
    ei = (0, V.useMultiAccountMenuItems)(),
    er = (0, g.useCustomStatusMenuItem)(null != n ? n : void 0, q.menuItemFocused),
    eo = (0, T.default)({
      id: t.id,
      label: z.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: G,
    children: (0, a.jsx)(R.UserProfileAnalyticsProvider, {
      layout: "ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: q.popoutContainer,
        children: (0, a.jsx)("div", {
          ref: en,
          children: (0, a.jsxs)(P.default, {
            className: q.themeContainer,
            user: t,
            displayProfile: B,
            profileType: K.UserProfileTypes.POPOUT,
            children: [(0, a.jsx)(D.default, {
              user: t,
              displayProfile: B,
              onClose: () => null == b ? void 0 : b(),
              isMobile: ee,
              isStreaming: (0, S.default)(H),
              status: $,
              disableUserProfileLink: __OVERLAY__,
              isHovering: ea,
              showPremiumBadgeUpsell: !1
            }), (0, a.jsxs)(P.default.Overlay, {
              children: [(0, a.jsx)(y.default, {
                activity: H,
                customStatusActivity: J,
                displayProfile: B,
                user: t,
                onClose: o,
                setNote: !1,
                canDM: !1,
                hideNote: !0,
                showCopiableUsername: !0
              }), (0, a.jsx)(M.default, {
                className: q.divider
              }), (0, a.jsxs)(E.Menu, {
                navId: "account",
                "aria-label": z.default.Messages.SET_STATUS,
                hideScroller: !0,
                className: q.menu,
                onClose: o,
                onSelect: h,
                children: [(0, a.jsxs)(E.MenuGroup, {
                  children: [(0, a.jsx)(E.MenuItem, {
                    id: "status-picker",
                    label: (0, a.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, F.humanizeStatus)($), es || el ? (0, a.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: q.menuItemFocused,
                    subMenuIconClassName: q.subMenuIcon,
                    action: d.isMobile ? function() {
                      (0, O.trackUserProfileAction)({
                        action: "PRESS_SET_STATUS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: G
                      }), (0, E.openModalLazy)(() => new Promise(e => {
                        e(e => (0, a.jsx)(E.ModalRoot, {
                          ...e,
                          size: E.ModalSize.SMALL,
                          className: q.modal,
                          "aria-label": z.default.Messages.SET_STATUS,
                          children: (0, a.jsx)(E.Menu, {
                            navId: "account",
                            variant: "fixed",
                            "aria-label": z.default.Messages.SET_STATUS,
                            hideScroller: !0,
                            className: q.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: et
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
                      return (0, a.jsx)(E.Status, {
                        status: $,
                        size: 12,
                        className: i()(t, q.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : et
                  }, "status-picker"), er]
                }), (0, a.jsx)(E.MenuGroup, {
                  children: (0, a.jsx)(E.MenuItem, {
                    id: "switch-account",
                    focusedClassName: q.menuItemFocused,
                    subMenuIconClassName: q.subMenuIcon,
                    label: z.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: w.default,
                    showIconFirst: !0,
                    action: () => {
                      (0, O.trackUserProfileAction)({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: G
                      }), (0, Y.default)()
                    },
                    children: ei
                  }, "switch-account")
                }), (0, a.jsx)(E.MenuGroup, {
                  children: eo
                })]
              })]
            })]
          })
        })
      })
    })
  })
}

function $(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([G.default], () => G.default.getUser(t), [t]), d = (0, c.useStateFromStores)([U.default], () => U.default.getCustomStatusActivity()), [f, E] = s.useState(!1), C = null != u ? u : n, _ = (0, c.useStateFromStores)([b.default], () => null != C && null != b.default.getAnyStreamForUser(C.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, h.getUser)(t), E(!0))
    }
  }, [u, t]), null == C) ? (f && o()(null != C, "Unexpected missing user"), null) : (0, a.jsx)(J, {
    closePopout: i,
    user: C,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: _,
    onClose: i,
    onSelect: r
  })
}