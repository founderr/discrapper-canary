"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ee
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("512722"),
  o = a.n(r),
  u = a("722770"),
  d = a("873546"),
  c = a("442837"),
  f = a("116061"),
  E = a("481060"),
  h = a("232567"),
  _ = a("2052"),
  C = a("393238"),
  m = a("727637"),
  S = a("420660"),
  I = a("100527"),
  p = a("906732"),
  T = a("521868"),
  g = a("299206"),
  A = a("440051"),
  N = a("734934"),
  v = a("158238"),
  R = a("785717"),
  L = a("221292"),
  O = a("318661"),
  P = a("502762"),
  M = a("192133"),
  x = a("138394"),
  y = a("131640"),
  D = a("695346"),
  b = a("199902"),
  U = a("293273"),
  j = a("158776"),
  G = a("594174"),
  w = a("881201"),
  k = a("26290"),
  F = a("626135"),
  B = a("70956"),
  H = a("51144"),
  V = a("246133"),
  Y = a("474376"),
  W = a("383832"),
  K = a("981631"),
  z = a("228168"),
  q = a("689938"),
  Q = a("66449");
let Z = [{
  duration: 30 * B.default.Millis.MINUTE,
  label: () => q.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: B.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * B.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * B.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: B.default.Millis.DAY,
  label: () => q.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => q.default.Messages.DURATION_FOREVER
}];

function X(e, t, a, s) {
  let l = (0, n.jsx)(n.Fragment, {
    children: Z.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, n.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, V.default)(e, t, a, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, n.jsx)(E.MenuItem, {
    id: e,
    className: Q.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: a
      } = t;
      return (0, n.jsxs)("div", {
        className: Q.statusItem,
        children: [(0, n.jsx)(E.Status, {
          status: e,
          className: Q.icon,
          size: 10,
          color: a ? "currentColor" : void 0
        }), (0, n.jsx)("div", {
          className: Q.status,
          children: (0, H.humanizeStatus)(e)
        }), null != s && (0, n.jsx)("div", {
          className: Q.description,
          children: s
        })]
      })
    },
    action: () => (0, V.default)(e, t, a),
    dontCloseOnAction: !0,
    children: e !== K.StatusTypes.ONLINE ? l : void 0
  })
}

function J(e, t, a, s) {
  return (0, n.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: a
      } = t;
      return (0, n.jsxs)("div", {
        className: Q.statusItem,
        children: [(0, n.jsx)(E.Status, {
          status: e,
          className: Q.icon,
          size: 10,
          color: a ? "currentColor" : void 0
        }), (0, n.jsx)("div", {
          className: Q.status,
          children: (0, H.humanizeStatus)(e)
        }), null != s && (0, n.jsx)("div", {
          className: Q.description,
          children: s
        })]
      })
    },
    action: () => (0, V.default)(e, t, a),
    dontCloseOnAction: !0
  })
}

function $(e) {
  let {
    user: t,
    customStatus: a,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: b
  } = e, U = (0, _.useAnalyticsContext)(), {
    analyticsLocations: G
  } = (0, p.default)(I.default.ACCOUNT_PROFILE_POPOUT), B = (0, O.default)(t.id, l), [V, $, ee, et] = (0, c.useStateFromStoresArray)([j.default], () => {
    var e;
    let a = t.id;
    return "string" != typeof a ? [void 0, void 0, K.StatusTypes.UNKNOWN, !1] : [null !== (e = j.default.findActivity(a, e => e.type !== K.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, j.default.findActivity(t.id, e => e.type === K.ActivityTypes.CUSTOM_STATUS), j.default.getStatus(a), j.default.isMobileOnline(a)]
  }), ea = function(e, t) {
    let a = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = D.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = D.FocusModeExpiresAtSetting.useSetting(),
      o = e === K.StatusTypes.DND,
      d = t => {
        let a = null != s && "0" !== s ? q.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(q.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != a) return a;
        switch (t) {
          case K.StatusTypes.DND:
            return i ? q.default.Messages.STATUS_DND_HELP_FOCUS_MODE : q.default.Messages.STATUS_DND_HELP;
          case K.StatusTypes.INVISIBLE:
            return q.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, n.jsx)(n.Fragment, {
        children: Z.map(t => {
          let {
            duration: a,
            label: s
          } = t;
          return (0, n.jsx)(E.MenuItem, {
            id: "".concat(e, "-").concat(a),
            label: s(),
            action: () => {
              (0, N.setFocusMode)(!0, a)
            },
            dontCloseOnAction: !0
          }, a)
        })
      });
    return (0, n.jsxs)(n.Fragment, {
      children: [J(K.StatusTypes.ONLINE, e, t), (0, n.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), a ? X(K.StatusTypes.IDLE, e, t, d(K.StatusTypes.IDLE)) : J(K.StatusTypes.IDLE, e, t, d(K.StatusTypes.IDLE)), a ? X(K.StatusTypes.DND, e, t, d(K.StatusTypes.DND)) : J(K.StatusTypes.DND, e, t, d(K.StatusTypes.DND)), a ? X(K.StatusTypes.INVISIBLE, e, t, d(K.StatusTypes.INVISIBLE)) : J(K.StatusTypes.INVISIBLE, e, t, d(K.StatusTypes.INVISIBLE)), (0, n.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, n.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: Q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, n.jsxs)("div", {
          className: Q.statusItem,
          children: [(0, n.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: Q.icon
          }), (0, n.jsxs)("div", {
            className: Q.focusModeTitle,
            children: [q.default.Messages.FOCUS_MODE_TITLE, (0, n.jsx)(k.TextBadge, {
              text: l ? q.default.Messages.FOCUS_MODE_BADGE_ON : o ? q.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : q.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, n.jsx)("div", {
            className: Q.description,
            children: l && null != r && "0" !== r ? q.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(q.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : q.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(ee, U), {
    ref: en
  } = (0, C.default)(), es = (0, m.default)(en);
  s.useEffect(() => {
    F.default.track(K.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != a,
      other_user_id: t.id,
      application_id: null != V ? V.application_id : void 0,
      is_streaming: r,
      application_name: null != V ? V.name : void 0,
      profile_has_nitro_customization: (null == B ? void 0 : B.banner) != null,
      location: U.location,
      has_profile_effect: (null == B ? void 0 : B.profileEffectId) != null
    })
  }, []);
  let el = (0, N.useFocusModeEnabled)(),
    ei = ee === K.StatusTypes.DND,
    er = (0, Y.useMultiAccountMenuItems)(),
    eo = (0, T.useCustomStatusMenuItem)(null != a ? a : void 0, Q.menuItemFocused),
    eu = (0, g.default)({
      id: t.id,
      label: q.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, n.jsx)(p.AnalyticsLocationProvider, {
    value: G,
    children: (0, n.jsx)(R.UserProfileAnalyticsProvider, {
      layout: "ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, n.jsx)("div", {
        className: Q.popoutContainer,
        children: (0, n.jsx)("div", {
          ref: en,
          children: (0, n.jsxs)(P.default, {
            user: t,
            displayProfile: B,
            profileType: z.UserProfileTypes.POPOUT,
            children: [(0, n.jsx)(y.default, {
              user: t,
              displayProfile: B,
              onClose: () => null == b ? void 0 : b(),
              isMobile: et,
              isStreaming: (0, S.default)(V),
              status: ee,
              disableUserProfileLink: __OVERLAY__,
              isHovering: es,
              showPremiumBadgeUpsell: !1
            }), (0, n.jsxs)(P.default.Overlay, {
              children: [(0, n.jsx)(M.default, {
                activity: V,
                customStatusActivity: $,
                displayProfile: B,
                user: t,
                onClose: o,
                setNote: !1,
                canDM: !1,
                hideNote: !0,
                showCopiableUsername: !0
              }), (0, n.jsx)(x.default, {
                className: Q.divider
              }), (0, n.jsxs)(E.Menu, {
                navId: "account",
                "aria-label": q.default.Messages.SET_STATUS,
                hideScroller: !0,
                className: Q.menu,
                onClose: o,
                onSelect: h,
                children: [(0, n.jsxs)(E.MenuGroup, {
                  children: [(0, n.jsx)(E.MenuItem, {
                    id: "status-picker",
                    label: (0, n.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, H.humanizeStatus)(ee), el || ei ? (0, n.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: Q.menuItemFocused,
                    subMenuIconClassName: Q.subMenuIcon,
                    action: d.isMobile ? function() {
                      (0, L.trackUserProfileAction)({
                        action: "PRESS_SET_STATUS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: G
                      }), (0, E.openModalLazy)(() => new Promise(e => {
                        e(e => (0, n.jsx)(E.ModalRoot, {
                          ...e,
                          size: E.ModalSize.SMALL,
                          className: Q.modal,
                          "aria-label": q.default.Messages.SET_STATUS,
                          children: (0, n.jsx)(E.Menu, {
                            navId: "account",
                            variant: "fixed",
                            "aria-label": q.default.Messages.SET_STATUS,
                            hideScroller: !0,
                            className: Q.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: ea
                          })
                        }))
                      }))
                    } : void 0,
                    showIconFirst: !0,
                    icon: e => {
                      let {
                        className: t,
                        isFocused: a
                      } = e;
                      return (0, n.jsx)(E.Status, {
                        status: ee,
                        size: 12,
                        className: i()(t, Q.mainStatusIcon),
                        color: a ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : ea
                  }, "status-picker"), eo]
                }), (0, n.jsx)(E.MenuGroup, {
                  children: (0, n.jsx)(E.MenuItem, {
                    id: "switch-account",
                    focusedClassName: Q.menuItemFocused,
                    subMenuIconClassName: Q.subMenuIcon,
                    label: q.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: w.default,
                    showIconFirst: !0,
                    action: () => {
                      (0, L.trackUserProfileAction)({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        layout: "ACCOUNT_POPOUT",
                        userId: t.id,
                        guildId: l,
                        analyticsLocations: G
                      }), (0, W.default)()
                    },
                    children: er
                  }, "switch-account")
                }), (0, n.jsx)(E.MenuGroup, {
                  children: eu
                })]
              })]
            })]
          })
        })
      })
    })
  })
}

function ee(e) {
  let {
    userId: t,
    user: a,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([G.default], () => G.default.getUser(t), [t]), d = (0, c.useStateFromStores)([U.default], () => U.default.getCustomStatusActivity()), [f, E] = s.useState(!1), _ = null != u ? u : a, C = (0, c.useStateFromStores)([b.default], () => null != _ && null != b.default.getAnyStreamForUser(_.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, h.getUser)(t), E(!0))
    }
  }, [u, t]), null == _) ? (f && o()(null != _, "Unexpected missing user"), null) : (0, n.jsx)($, {
    closePopout: i,
    user: _,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}