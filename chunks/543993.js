"use strict";
n.r(t), n.d(t, {
  default: function() {
    return er
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
  E = n("549080"),
  h = n("481060"),
  _ = n("232567"),
  C = n("2052"),
  m = n("393238"),
  S = n("727637"),
  p = n("100527"),
  I = n("906732"),
  g = n("521868"),
  T = n("299206"),
  A = n("440051"),
  N = n("734934"),
  v = n("158238"),
  R = n("447452"),
  O = n("785717"),
  L = n("318661"),
  M = n("741308"),
  x = n("681837"),
  P = n("724593"),
  y = n("502762"),
  D = n("530"),
  b = n("544989"),
  U = n("162159"),
  j = n("171368"),
  G = n("580512"),
  w = n("67152"),
  k = n("23293"),
  B = n("695346"),
  F = n("199902"),
  H = n("293273"),
  V = n("158776"),
  Y = n("246946"),
  W = n("594174"),
  K = n("26290"),
  z = n("626135"),
  Q = n("70956"),
  q = n("51144"),
  Z = n("246133"),
  X = n("474376"),
  J = n("383832"),
  $ = n("981631"),
  ee = n("228168"),
  et = n("689938"),
  en = n("476002");
let ea = [{
  duration: 30 * Q.default.Millis.MINUTE,
  label: () => et.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: Q.default.Millis.HOUR,
  label: () => et.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * Q.default.Millis.HOUR,
  label: () => et.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * Q.default.Millis.HOUR,
  label: () => et.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: Q.default.Millis.DAY,
  label: () => et.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => et.default.Messages.DURATION_FOREVER
}];

function es(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: ea.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(h.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, Z.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    className: en.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: en.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: en.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: en.status,
          children: (0, q.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: en.description,
          children: s
        })]
      })
    },
    action: () => (0, Z.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== $.StatusTypes.ONLINE ? l : void 0
  })
}

function el(e, t, n, s) {
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: en.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: en.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: en.status,
          children: (0, q.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: en.description,
          children: s
        })]
      })
    },
    action: () => (0, Z.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function ei(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: _,
    closePopout: F
  } = e, H = __OVERLAY__, W = (0, L.default)(t.id, l), {
    moreUserDetailsEnabled: Q
  } = (0, R.useSimplifiedProfileExperiment)({
    location: "SimplifiedAccountProfilePopout"
  }), Z = (0, C.useAnalyticsContext)(), {
    analyticsLocations: ei
  } = (0, I.default)(p.default.ACCOUNT_PROFILE_POPOUT), er = (0, O.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_ACCOUNT_POPOUT",
    userId: t.id,
    guildId: l
  }), [eo, eu] = (0, c.useStateFromStoresArray)([V.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, $.StatusTypes.UNKNOWN] : [null !== (e = V.default.findActivity(n, e => e.type !== $.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, V.default.getStatus(n)]
  }), ed = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = B.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = B.FocusModeExpiresAtSetting.useSetting(),
      o = e === $.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? et.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(et.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case $.StatusTypes.DND:
            return i ? et.default.Messages.STATUS_DND_HELP_FOCUS_MODE : et.default.Messages.STATUS_DND_HELP;
          case $.StatusTypes.INVISIBLE:
            return et.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: ea.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, a.jsx)(h.MenuItem, {
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
      children: [el($.StatusTypes.ONLINE, e, t), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), n ? es($.StatusTypes.IDLE, e, t, d($.StatusTypes.IDLE)) : el($.StatusTypes.IDLE, e, t, d($.StatusTypes.IDLE)), n ? es($.StatusTypes.DND, e, t, d($.StatusTypes.DND)) : el($.StatusTypes.DND, e, t, d($.StatusTypes.DND)), n ? es($.StatusTypes.INVISIBLE, e, t, d($.StatusTypes.INVISIBLE)) : el($.StatusTypes.INVISIBLE, e, t, d($.StatusTypes.INVISIBLE)), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(h.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: en.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: en.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: en.icon
          }), (0, a.jsxs)("div", {
            className: en.focusModeTitle,
            children: [et.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(K.TextBadge, {
              text: l ? et.default.Messages.FOCUS_MODE_BADGE_ON : o ? et.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : et.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: en.description,
            children: l && null != r && "0" !== r ? et.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(et.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : et.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(eu, Z), {
    ref: ec
  } = (0, m.default)(), ef = (0, S.default)(ec);
  s.useEffect(() => {
    z.default.track($.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != eo ? eo.application_id : void 0,
      is_streaming: r,
      application_name: null != eo ? eo.name : void 0,
      profile_has_nitro_customization: (null == W ? void 0 : W.banner) != null,
      location: Z.location,
      has_profile_effect: (null == W ? void 0 : W.profileEffectId) != null
    })
  }, []);
  let eE = e => {
      null == F || F(), (0, j.openUserProfileModal)({
        sourceAnalyticsLocations: ei,
        userId: t.id,
        guildId: l,
        ...e
      })
    },
    eh = (0, N.useFocusModeEnabled)(),
    e_ = eu === $.StatusTypes.DND,
    eC = (0, X.useMultiAccountMenuItems)(),
    em = (0, g.useCustomStatusMenuItem)(null != n ? n : void 0, en.menuItemFocused),
    eS = (0, T.default)({
      id: t.id,
      label: et.default.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: en.menuItemFocused
    }),
    ep = (0, c.useStateFromStores)([Y.default], () => Y.default.hidePersonalInformation);
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: ei,
    children: (0, a.jsx)(O.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: en.popoutContainer,
        ref: ec,
        children: (0, a.jsxs)(y.default, {
          className: en.themeContainer,
          user: t,
          displayProfile: W,
          profileType: ee.UserProfileTypes.BITE_SIZE,
          children: [(0, a.jsx)(b.default, {
            profileType: ee.UserProfileTypes.BITE_SIZE,
            children: (0, a.jsx)(U.default, {
              onClose: o
            })
          }), (0, a.jsx)(k.default, {
            user: t,
            displayProfile: W,
            onOpenProfile: H ? void 0 : eE
          }), (0, a.jsxs)("div", {
            className: en.body,
            children: [(0, a.jsx)(D.default, {
              user: t,
              className: en.username,
              profileType: ee.UserProfileTypes.BITE_SIZE,
              onOpenProfile: () => eE({
                autoFocusNote: !1
              }),
              pronouns: null == W ? void 0 : W.pronouns,
              tags: (0, a.jsx)(M.default, {
                displayProfile: W,
                profileType: ee.UserProfileTypes.BITE_SIZE,
                onClose: o
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(x.default, {
                  userId: t.id
                }), Q && !ep && (0, a.jsx)(P.default, {
                  user: t,
                  isHovering: ef,
                  onOpenProfile: () => eE({
                    autoFocusNote: !0
                  })
                })]
              })
            }), (0, a.jsx)(w.default, {
              user: t,
              bio: null == W ? void 0 : W.bio,
              hidePersonalInformation: ep,
              onClose: o
            }), (0, a.jsx)(G.default, {
              user: t,
              onClose: o
            }), (0, a.jsxs)("div", {
              className: en.menus,
              children: [(0, a.jsxs)(h.Menu, {
                navId: "status",
                "aria-label": et.default.Messages.STATUS_MENU_LABEL,
                hideScroller: !0,
                className: en.menu,
                onClose: o,
                onSelect: _,
                children: [(0, a.jsx)(h.MenuGroup, {
                  children: (0, a.jsx)(h.MenuItem, {
                    id: "status-picker",
                    label: (0, a.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, q.humanizeStatus)(eu), eh || e_ ? (0, a.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: en.menuItemFocused,
                    subMenuIconClassName: en.subMenuIcon,
                    action: d.isMobile ? function() {
                      er({
                        action: "PRESS_SET_STATUS",
                        analyticsLocations: ei
                      }), (0, h.openModalLazy)(() => new Promise(e => {
                        e(e => (0, a.jsx)(h.ModalRoot, {
                          ...e,
                          size: h.ModalSize.SMALL,
                          className: en.modal,
                          "aria-label": et.default.Messages.SET_STATUS,
                          children: (0, a.jsx)(h.Menu, {
                            navId: "status-mobile-web",
                            variant: "fixed",
                            "aria-label": et.default.Messages.STATUS_MENU_LABEL,
                            hideScroller: !0,
                            className: en.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: ed
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
                      return (0, a.jsx)(h.Status, {
                        status: eu,
                        size: 12,
                        className: i()(t, en.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : ed
                  }, "status-picker")
                }), (0, a.jsx)(h.MenuGroup, {
                  children: em
                })]
              }), (0, a.jsxs)(h.Menu, {
                navId: "account",
                "aria-label": et.default.Messages.MULTI_ACCOUNT_MENU_LABEL,
                hideScroller: !0,
                className: en.menu,
                onClose: o,
                onSelect: _,
                children: [(0, a.jsx)(h.MenuGroup, {
                  children: (0, a.jsx)(h.MenuItem, {
                    id: "switch-account",
                    focusedClassName: en.menuItemFocused,
                    subMenuIconClassName: en.subMenuIcon,
                    label: et.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: E.UserCircleIcon,
                    showIconFirst: !0,
                    action: () => {
                      er({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        analyticsLocations: ei
                      }), (0, J.default)()
                    },
                    children: eC
                  })
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eS
                })]
              })]
            })]
          })]
        })
      })
    })
  })
}

function er(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([W.default], () => W.default.getUser(t), [t]), d = (0, c.useStateFromStores)([H.default], () => H.default.getCustomStatusActivity()), [f, E] = s.useState(!1), h = null != u ? u : n, C = (0, c.useStateFromStores)([F.default], () => null != h && null != F.default.getAnyStreamForUser(h.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, _.getUser)(t), E(!0))
    }
  }, [u, t]), null == h) ? (f && o()(null != h, "Unexpected missing user"), null) : (0, a.jsx)(ei, {
    closePopout: i,
    user: h,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}