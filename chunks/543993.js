"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ee
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
  _ = n("2052"),
  C = n("393238"),
  m = n("100527"),
  S = n("906732"),
  p = n("521868"),
  I = n("299206"),
  g = n("440051"),
  T = n("734934"),
  A = n("158238"),
  N = n("785717"),
  v = n("221292"),
  R = n("318661"),
  O = n("681837"),
  L = n("502762"),
  M = n("530"),
  P = n("894374"),
  x = n("171368"),
  y = n("23293"),
  D = n("695346"),
  b = n("199902"),
  U = n("293273"),
  j = n("158776"),
  G = n("594174"),
  w = n("881201"),
  k = n("26290"),
  B = n("626135"),
  F = n("70956"),
  H = n("51144"),
  V = n("246133"),
  Y = n("474376"),
  W = n("383832"),
  K = n("981631"),
  z = n("228168"),
  q = n("689938"),
  Q = n("476002");
let Z = [{
  duration: 30 * F.default.Millis.MINUTE,
  label: () => q.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: F.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * F.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * F.default.Millis.HOUR,
  label: () => q.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: F.default.Millis.DAY,
  label: () => q.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => q.default.Messages.DURATION_FOREVER
}];

function X(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: Z.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, V.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    className: Q.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: Q.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: Q.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: Q.status,
          children: (0, H.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: Q.description,
          children: s
        })]
      })
    },
    action: () => (0, V.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== K.StatusTypes.ONLINE ? l : void 0
  })
}

function J(e, t, n, s) {
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: Q.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: Q.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: Q.status,
          children: (0, H.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: Q.description,
          children: s
        })]
      })
    },
    action: () => (0, V.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function $(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: b
  } = e, U = (0, _.useAnalyticsContext)(), {
    analyticsLocations: G
  } = (0, S.default)(m.default.ACCOUNT_PROFILE_POPOUT), F = (0, R.default)(t.id, l), V = __OVERLAY__, [$, ee] = (0, c.useStateFromStoresArray)([j.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, K.StatusTypes.UNKNOWN] : [null !== (e = j.default.findActivity(n, e => e.type !== K.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, j.default.getStatus(n)]
  }), et = function(e, t) {
    let n = g.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = D.StatusExpiresAtSetting.useSetting(),
      l = (0, T.useFocusModeEnabled)(),
      i = A.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = D.FocusModeExpiresAtSetting.useSetting(),
      o = e === K.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? q.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(q.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case K.StatusTypes.DND:
            return i ? q.default.Messages.STATUS_DND_HELP_FOCUS_MODE : q.default.Messages.STATUS_DND_HELP;
          case K.StatusTypes.INVISIBLE:
            return q.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: Z.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, a.jsx)(E.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: s(),
            action: () => {
              (0, T.setFocusMode)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [J(K.StatusTypes.ONLINE, e, t), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), n ? X(K.StatusTypes.IDLE, e, t, d(K.StatusTypes.IDLE)) : J(K.StatusTypes.IDLE, e, t, d(K.StatusTypes.IDLE)), n ? X(K.StatusTypes.DND, e, t, d(K.StatusTypes.DND)) : J(K.StatusTypes.DND, e, t, d(K.StatusTypes.DND)), n ? X(K.StatusTypes.INVISIBLE, e, t, d(K.StatusTypes.INVISIBLE)) : J(K.StatusTypes.INVISIBLE, e, t, d(K.StatusTypes.INVISIBLE)), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: Q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: Q.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: Q.icon
          }), (0, a.jsxs)("div", {
            className: Q.focusModeTitle,
            children: [q.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(k.TextBadge, {
              text: l ? q.default.Messages.FOCUS_MODE_BADGE_ON : o ? q.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : q.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
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
          (0, T.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(ee, U), {
    ref: en
  } = (0, C.default)();
  s.useEffect(() => {
    B.default.track(K.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != $ ? $.application_id : void 0,
      is_streaming: r,
      application_name: null != $ ? $.name : void 0,
      profile_has_nitro_customization: (null == F ? void 0 : F.banner) != null,
      location: U.location,
      has_profile_effect: (null == F ? void 0 : F.profileEffectId) != null
    })
  }, []);
  let ea = e => {
      null == b || b(), (0, x.openUserProfileModal)({
        sourceAnalyticsLocations: G,
        userId: t.id,
        guildId: l,
        ...e
      })
    },
    es = (0, T.useFocusModeEnabled)(),
    el = ee === K.StatusTypes.DND,
    ei = (0, Y.useMultiAccountMenuItems)(),
    er = (0, p.useCustomStatusMenuItem)(null != n ? n : void 0, Q.menuItemFocused),
    eo = (0, I.default)({
      id: t.id,
      label: q.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    });
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: G,
    children: (0, a.jsx)(N.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: Q.popoutContainer,
        ref: en,
        children: (0, a.jsxs)(L.default, {
          className: Q.themeContainer,
          user: t,
          displayProfile: F,
          profileType: z.UserProfileTypes.BITE_SIZE,
          children: [(0, a.jsx)(y.default, {
            user: t,
            displayProfile: F,
            onOpenProfile: V ? void 0 : ea
          }), (0, a.jsxs)("div", {
            className: Q.body,
            children: [(0, a.jsx)(M.default, {
              user: t,
              profileType: z.UserProfileTypes.BITE_SIZE,
              onOpenProfile: () => ea({
                autoFocusNote: !1
              }),
              pronouns: null == F ? void 0 : F.pronouns,
              tags: (0, a.jsx)(P.UserProfileBadgesTag, {
                displayProfile: F,
                onClose: o
              }),
              nicknameIcons: (0, a.jsx)(O.default, {
                userId: t.id
              })
            }), (0, a.jsxs)(E.Menu, {
              navId: "account",
              "aria-label": q.default.Messages.SET_STATUS,
              hideScroller: !0,
              className: Q.menu,
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
                    children: [(0, H.humanizeStatus)(ee), es || el ? (0, a.jsx)(f.BellSlashIcon, {
                      width: 12,
                      height: 12
                    }) : null]
                  }),
                  focusedClassName: Q.menuItemFocused,
                  subMenuIconClassName: Q.subMenuIcon,
                  action: d.isMobile ? function() {
                    (0, v.trackUserProfileAction)({
                      action: "PRESS_SET_STATUS",
                      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
                      userId: t.id,
                      guildId: l,
                      analyticsLocations: G
                    }), (0, E.openModalLazy)(() => new Promise(e => {
                      e(e => (0, a.jsx)(E.ModalRoot, {
                        ...e,
                        size: E.ModalSize.SMALL,
                        className: Q.modal,
                        "aria-label": q.default.Messages.SET_STATUS,
                        children: (0, a.jsx)(E.Menu, {
                          navId: "account",
                          variant: "fixed",
                          "aria-label": q.default.Messages.SET_STATUS,
                          hideScroller: !0,
                          className: Q.statusPickerModalMenu,
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
                      status: ee,
                      size: 12,
                      className: i()(t, Q.mainStatusIcon),
                      color: n ? "currentColor" : void 0
                    })
                  },
                  children: d.isMobile ? void 0 : et
                }, "status-picker"), er]
              }), (0, a.jsx)(E.MenuGroup, {
                children: (0, a.jsx)(E.MenuItem, {
                  id: "switch-account",
                  focusedClassName: Q.menuItemFocused,
                  subMenuIconClassName: Q.subMenuIcon,
                  label: q.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                  icon: w.default,
                  showIconFirst: !0,
                  action: () => {
                    (0, v.trackUserProfileAction)({
                      action: "PRESS_SWITCH_ACCOUNTS",
                      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
                      userId: t.id,
                      guildId: l,
                      analyticsLocations: G
                    }), (0, W.default)()
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
}

function ee(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([G.default], () => G.default.getUser(t), [t]), d = (0, c.useStateFromStores)([U.default], () => U.default.getCustomStatusActivity()), [f, E] = s.useState(!1), _ = null != u ? u : n, C = (0, c.useStateFromStores)([b.default], () => null != _ && null != b.default.getAnyStreamForUser(_.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, h.getUser)(t), E(!0))
    }
  }, [u, t]), null == _) ? (f && o()(null != _, "Unexpected missing user"), null) : (0, a.jsx)($, {
    closePopout: i,
    user: _,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}