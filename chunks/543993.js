"use strict";
n.r(t), n.d(t, {
  default: function() {
    return el
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
  x = n("544989"),
  y = n("162159"),
  D = n("171368"),
  b = n("580512"),
  U = n("67152"),
  j = n("23293"),
  G = n("695346"),
  w = n("199902"),
  k = n("293273"),
  B = n("158776"),
  F = n("246946"),
  H = n("594174"),
  V = n("881201"),
  Y = n("26290"),
  W = n("626135"),
  K = n("70956"),
  z = n("51144"),
  q = n("246133"),
  Q = n("474376"),
  Z = n("383832"),
  X = n("981631"),
  J = n("228168"),
  $ = n("689938"),
  ee = n("476002");
let et = [{
  duration: 30 * K.default.Millis.MINUTE,
  label: () => $.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: K.default.Millis.HOUR,
  label: () => $.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * K.default.Millis.HOUR,
  label: () => $.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * K.default.Millis.HOUR,
  label: () => $.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: K.default.Millis.DAY,
  label: () => $.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => $.default.Messages.DURATION_FOREVER
}];

function en(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: et.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(E.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, q.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    className: ee.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: ee.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: ee.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: ee.status,
          children: (0, z.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: ee.description,
          children: s
        })]
      })
    },
    action: () => (0, q.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== X.StatusTypes.ONLINE ? l : void 0
  })
}

function ea(e, t, n, s) {
  return (0, a.jsx)(E.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: ee.statusItem,
        children: [(0, a.jsx)(E.Status, {
          status: e,
          className: ee.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: ee.status,
          children: (0, z.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: ee.description,
          children: s
        })]
      })
    },
    action: () => (0, q.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function es(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: h,
    closePopout: w
  } = e, k = (0, _.useAnalyticsContext)(), {
    analyticsLocations: H
  } = (0, S.default)(m.default.ACCOUNT_PROFILE_POPOUT), K = (0, R.default)(t.id, l), q = __OVERLAY__, [es, el] = (0, c.useStateFromStoresArray)([B.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, X.StatusTypes.UNKNOWN] : [null !== (e = B.default.findActivity(n, e => e.type !== X.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, B.default.getStatus(n)]
  }), ei = function(e, t) {
    let n = g.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = G.StatusExpiresAtSetting.useSetting(),
      l = (0, T.useFocusModeEnabled)(),
      i = A.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = G.FocusModeExpiresAtSetting.useSetting(),
      o = e === X.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? $.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString($.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case X.StatusTypes.DND:
            return i ? $.default.Messages.STATUS_DND_HELP_FOCUS_MODE : $.default.Messages.STATUS_DND_HELP;
          case X.StatusTypes.INVISIBLE:
            return $.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: et.map(t => {
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
      children: [ea(X.StatusTypes.ONLINE, e, t), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), n ? en(X.StatusTypes.IDLE, e, t, d(X.StatusTypes.IDLE)) : ea(X.StatusTypes.IDLE, e, t, d(X.StatusTypes.IDLE)), n ? en(X.StatusTypes.DND, e, t, d(X.StatusTypes.DND)) : ea(X.StatusTypes.DND, e, t, d(X.StatusTypes.DND)), n ? en(X.StatusTypes.INVISIBLE, e, t, d(X.StatusTypes.INVISIBLE)) : ea(X.StatusTypes.INVISIBLE, e, t, d(X.StatusTypes.INVISIBLE)), (0, a.jsx)(E.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(E.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: ee.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: ee.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: ee.icon
          }), (0, a.jsxs)("div", {
            className: ee.focusModeTitle,
            children: [$.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(Y.TextBadge, {
              text: l ? $.default.Messages.FOCUS_MODE_BADGE_ON : o ? $.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : $.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: ee.description,
            children: l && null != r && "0" !== r ? $.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString($.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : $.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, T.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(el, k), {
    ref: er
  } = (0, C.default)();
  s.useEffect(() => {
    W.default.track(X.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != es ? es.application_id : void 0,
      is_streaming: r,
      application_name: null != es ? es.name : void 0,
      profile_has_nitro_customization: (null == K ? void 0 : K.banner) != null,
      location: k.location,
      has_profile_effect: (null == K ? void 0 : K.profileEffectId) != null
    })
  }, []);
  let eo = e => {
      null == w || w(), (0, D.openUserProfileModal)({
        sourceAnalyticsLocations: H,
        userId: t.id,
        guildId: l,
        ...e
      })
    },
    eu = (0, T.useFocusModeEnabled)(),
    ed = el === X.StatusTypes.DND,
    ec = (0, Q.useMultiAccountMenuItems)(),
    ef = (0, p.useCustomStatusMenuItem)(null != n ? n : void 0, ee.menuItemFocused),
    eE = (0, I.default)({
      id: t.id,
      label: $.default.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: ee.menuItemFocused
    }),
    eh = (0, c.useStateFromStores)([F.default], () => F.default.hidePersonalInformation);
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: H,
    children: (0, a.jsx)(N.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: ee.popoutContainer,
        ref: er,
        children: (0, a.jsxs)(L.default, {
          className: ee.themeContainer,
          user: t,
          displayProfile: K,
          profileType: J.UserProfileTypes.BITE_SIZE,
          children: [(0, a.jsx)(x.default, {
            profileType: J.UserProfileTypes.BITE_SIZE,
            children: (0, a.jsx)(y.default, {
              onClose: o
            })
          }), (0, a.jsx)(j.default, {
            user: t,
            displayProfile: K,
            onOpenProfile: q ? void 0 : eo
          }), (0, a.jsxs)("div", {
            className: ee.body,
            children: [(0, a.jsx)(M.default, {
              user: t,
              className: ee.username,
              profileType: J.UserProfileTypes.BITE_SIZE,
              onOpenProfile: () => eo({
                autoFocusNote: !1
              }),
              pronouns: null == K ? void 0 : K.pronouns,
              tags: (0, a.jsx)(P.UserProfileBadgesTag, {
                displayProfile: K,
                onClose: o
              }),
              nicknameIcons: (0, a.jsx)(O.default, {
                userId: t.id
              })
            }), (0, a.jsx)(U.default, {
              user: t,
              bio: null == K ? void 0 : K.bio,
              hidePersonalInformation: eh,
              onClose: o
            }), (0, a.jsx)(b.default, {
              user: t,
              onClose: o
            }), (0, a.jsxs)(E.Menu, {
              navId: "account",
              "aria-label": $.default.Messages.SET_STATUS,
              hideScroller: !0,
              className: ee.menu,
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
                    children: [(0, z.humanizeStatus)(el), eu || ed ? (0, a.jsx)(f.BellSlashIcon, {
                      width: 12,
                      height: 12
                    }) : null]
                  }),
                  focusedClassName: ee.menuItemFocused,
                  subMenuIconClassName: ee.subMenuIcon,
                  action: d.isMobile ? function() {
                    (0, v.trackUserProfileAction)({
                      action: "PRESS_SET_STATUS",
                      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
                      userId: t.id,
                      guildId: l,
                      analyticsLocations: H
                    }), (0, E.openModalLazy)(() => new Promise(e => {
                      e(e => (0, a.jsx)(E.ModalRoot, {
                        ...e,
                        size: E.ModalSize.SMALL,
                        className: ee.modal,
                        "aria-label": $.default.Messages.SET_STATUS,
                        children: (0, a.jsx)(E.Menu, {
                          navId: "account",
                          variant: "fixed",
                          "aria-label": $.default.Messages.SET_STATUS,
                          hideScroller: !0,
                          className: ee.statusPickerModalMenu,
                          onClose: e.onClose,
                          onSelect: e.onClose,
                          children: ei
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
                      status: el,
                      size: 12,
                      className: i()(t, ee.mainStatusIcon),
                      color: n ? "currentColor" : void 0
                    })
                  },
                  children: d.isMobile ? void 0 : ei
                }, "status-picker"), ef, (0, a.jsx)(E.MenuItem, {
                  id: "switch-account",
                  focusedClassName: ee.menuItemFocused,
                  subMenuIconClassName: ee.subMenuIcon,
                  label: $.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                  icon: V.default,
                  showIconFirst: !0,
                  action: () => {
                    (0, v.trackUserProfileAction)({
                      action: "PRESS_SWITCH_ACCOUNTS",
                      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
                      userId: t.id,
                      guildId: l,
                      analyticsLocations: H
                    }), (0, Z.default)()
                  },
                  children: ec
                }, "switch-account")]
              }), (0, a.jsx)(E.MenuGroup, {
                children: eE
              })]
            })]
          })]
        })
      })
    })
  })
}

function el(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([H.default], () => H.default.getUser(t), [t]), d = (0, c.useStateFromStores)([k.default], () => k.default.getCustomStatusActivity()), [f, E] = s.useState(!1), _ = null != u ? u : n, C = (0, c.useStateFromStores)([w.default], () => null != _ && null != w.default.getAnyStreamForUser(_.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, h.getUser)(t), E(!0))
    }
  }, [u, t]), null == _) ? (f && o()(null != _, "Unexpected missing user"), null) : (0, a.jsx)(es, {
    closePopout: i,
    user: _,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}