"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
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
  T = n("521868"),
  g = n("299206"),
  A = n("440051"),
  N = n("734934"),
  v = n("158238"),
  R = n("447452"),
  O = n("877485"),
  L = n("785717"),
  M = n("318661"),
  P = n("741308"),
  x = n("681837"),
  y = n("724593"),
  D = n("502762"),
  b = n("530"),
  U = n("564440"),
  j = n("796214"),
  G = n("171368"),
  w = n("580512"),
  k = n("67152"),
  B = n("23293"),
  F = n("695346"),
  H = n("199902"),
  V = n("293273"),
  Y = n("158776"),
  W = n("246946"),
  K = n("594174"),
  z = n("26290"),
  Q = n("626135"),
  q = n("70956"),
  Z = n("5192"),
  X = n("51144"),
  J = n("246133"),
  $ = n("474376"),
  ee = n("383832"),
  et = n("981631"),
  en = n("228168"),
  ea = n("689938"),
  es = n("476002");
let el = [{
  duration: 30 * q.default.Millis.MINUTE,
  label: () => ea.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: q.default.Millis.HOUR,
  label: () => ea.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * q.default.Millis.HOUR,
  label: () => ea.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * q.default.Millis.HOUR,
  label: () => ea.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: q.default.Millis.DAY,
  label: () => ea.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => ea.default.Messages.DURATION_FOREVER
}];

function ei(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: el.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(h.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, J.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    className: es.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: es.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: es.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: es.status,
          children: (0, X.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: es.description,
          children: s
        })]
      })
    },
    action: () => (0, J.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== et.StatusTypes.ONLINE ? l : void 0
  })
}

function er(e, t, n, s) {
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: es.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: es.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: es.status,
          children: (0, X.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: es.description,
          children: s
        })]
      })
    },
    action: () => (0, J.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function eo(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: _,
    closePopout: H
  } = e, V = __OVERLAY__, K = (0, M.default)(t.id, l), {
    moreUserDetailsEnabled: q
  } = (0, R.useSimplifiedProfileExperiment)({
    location: "SimplifiedAccountProfilePopout"
  }), {
    originalFriendingEnabled: J,
    improvedFriendingEnabled: eo
  } = (0, O.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedAccountProfilePopout"
  }), eu = (0, C.useAnalyticsContext)(), {
    analyticsLocations: ed
  } = (0, I.default)(p.default.ACCOUNT_PROFILE_POPOUT), ec = (0, L.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_ACCOUNT_POPOUT",
    userId: t.id,
    guildId: l
  }), [ef, eE] = (0, c.useStateFromStoresArray)([Y.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, et.StatusTypes.UNKNOWN] : [null !== (e = Y.default.findActivity(n, e => e.type !== et.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, Y.default.getStatus(n)]
  }), eh = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = F.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = F.FocusModeExpiresAtSetting.useSetting(),
      o = e === et.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? ea.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(ea.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case et.StatusTypes.DND:
            return i ? ea.default.Messages.STATUS_DND_HELP_FOCUS_MODE : ea.default.Messages.STATUS_DND_HELP;
          case et.StatusTypes.INVISIBLE:
            return ea.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: el.map(t => {
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
      children: [er(et.StatusTypes.ONLINE, e, t), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), n ? ei(et.StatusTypes.IDLE, e, t, d(et.StatusTypes.IDLE)) : er(et.StatusTypes.IDLE, e, t, d(et.StatusTypes.IDLE)), n ? ei(et.StatusTypes.DND, e, t, d(et.StatusTypes.DND)) : er(et.StatusTypes.DND, e, t, d(et.StatusTypes.DND)), n ? ei(et.StatusTypes.INVISIBLE, e, t, d(et.StatusTypes.INVISIBLE)) : er(et.StatusTypes.INVISIBLE, e, t, d(et.StatusTypes.INVISIBLE)), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(h.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: es.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: es.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: es.icon
          }), (0, a.jsxs)("div", {
            className: es.focusModeTitle,
            children: [ea.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(z.TextBadge, {
              text: l ? ea.default.Messages.FOCUS_MODE_BADGE_ON : o ? ea.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : ea.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: es.description,
            children: l && null != r && "0" !== r ? ea.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(ea.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : ea.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(eE, eu), {
    ref: e_
  } = (0, m.default)(), eC = (0, S.default)(e_);
  s.useEffect(() => {
    Q.default.track(et.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != ef ? ef.application_id : void 0,
      is_streaming: r,
      application_name: null != ef ? ef.name : void 0,
      profile_has_nitro_customization: (null == K ? void 0 : K.banner) != null,
      location: eu.location,
      has_profile_effect: (null == K ? void 0 : K.profileEffectId) != null
    })
  }, []);
  let em = e => {
      null == H || H(), (0, G.openUserProfileModal)({
        sourceAnalyticsLocations: ed,
        userId: t.id,
        guildId: l,
        ...e
      })
    },
    eS = (0, N.useFocusModeEnabled)(),
    ep = eE === et.StatusTypes.DND,
    eI = (0, $.useMultiAccountMenuItems)(),
    eT = (0, T.useCustomStatusMenuItem)(null != n ? n : void 0, es.menuItemFocused),
    eg = (0, g.default)({
      id: t.id,
      label: ea.default.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: es.menuItemFocused
    }),
    eA = (0, c.useStateFromStores)([W.default], () => W.default.hidePersonalInformation);
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: ed,
    children: (0, a.jsx)(L.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: es.popoutContainer,
        ref: e_,
        children: (0, a.jsxs)(D.default, {
          className: es.themeContainer,
          user: t,
          displayProfile: K,
          profileType: en.UserProfileTypes.BITE_SIZE,
          children: [(0, a.jsx)(U.default, {
            profileType: en.UserProfileTypes.BITE_SIZE,
            children: (0, a.jsx)(j.default, {
              onClose: o
            })
          }), (0, a.jsx)(B.default, {
            user: t,
            displayProfile: K,
            onOpenProfile: V ? void 0 : em
          }), (0, a.jsxs)("div", {
            className: es.body,
            children: [(0, a.jsx)(b.default, {
              user: t,
              className: es.username,
              profileType: en.UserProfileTypes.BITE_SIZE,
              nickname: Z.default.getName(null, null, t),
              onOpenProfile: () => em({
                autoFocusNote: !1
              }),
              pronouns: null == K ? void 0 : K.pronouns,
              tags: (0, a.jsx)(P.default, {
                displayProfile: K,
                profileType: en.UserProfileTypes.BITE_SIZE,
                onClose: o
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(x.default, {
                  userId: t.id
                }), (q || J || eo) && !eA && (0, a.jsx)(y.default, {
                  user: t,
                  isHovering: eC,
                  onOpenProfile: () => em({
                    autoFocusNote: !0
                  })
                })]
              })
            }), (0, a.jsx)(k.default, {
              user: t,
              bio: null == K ? void 0 : K.bio,
              hidePersonalInformation: eA,
              onClose: o
            }), (0, a.jsx)(w.default, {
              user: t,
              onClose: o
            }), (0, a.jsxs)("div", {
              className: es.menus,
              children: [(0, a.jsxs)(h.Menu, {
                navId: "status",
                "aria-label": ea.default.Messages.STATUS_MENU_LABEL,
                hideScroller: !0,
                className: es.menu,
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
                      children: [(0, X.humanizeStatus)(eE), eS || ep ? (0, a.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: es.menuItemFocused,
                    subMenuIconClassName: es.subMenuIcon,
                    action: d.isMobile ? function() {
                      ec({
                        action: "PRESS_SET_STATUS",
                        analyticsLocations: ed
                      }), (0, h.openModalLazy)(() => new Promise(e => {
                        e(e => (0, a.jsx)(h.ModalRoot, {
                          ...e,
                          size: h.ModalSize.SMALL,
                          className: es.modal,
                          "aria-label": ea.default.Messages.SET_STATUS,
                          children: (0, a.jsx)(h.Menu, {
                            navId: "status-mobile-web",
                            variant: "fixed",
                            "aria-label": ea.default.Messages.STATUS_MENU_LABEL,
                            hideScroller: !0,
                            className: es.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: eh
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
                        status: eE,
                        size: 12,
                        className: i()(t, es.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : eh
                  }, "status-picker")
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eT
                })]
              }), (0, a.jsxs)(h.Menu, {
                navId: "account",
                "aria-label": ea.default.Messages.MULTI_ACCOUNT_MENU_LABEL,
                hideScroller: !0,
                className: es.menu,
                onClose: o,
                onSelect: _,
                children: [(0, a.jsx)(h.MenuGroup, {
                  children: (0, a.jsx)(h.MenuItem, {
                    id: "switch-account",
                    focusedClassName: es.menuItemFocused,
                    subMenuIconClassName: es.subMenuIcon,
                    label: ea.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: E.UserCircleIcon,
                    showIconFirst: !0,
                    action: () => {
                      ec({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        analyticsLocations: ed
                      }), (0, ee.default)()
                    },
                    children: eI
                  })
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eg
                })]
              })]
            })]
          })]
        })
      })
    })
  })
}

function eu(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([K.default], () => K.default.getUser(t), [t]), d = (0, c.useStateFromStores)([V.default], () => V.default.getCustomStatusActivity()), [f, E] = s.useState(!1), h = null != u ? u : n, C = (0, c.useStateFromStores)([H.default], () => null != h && null != H.default.getAnyStreamForUser(h.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, _.getUser)(t), E(!0))
    }
  }, [u, t]), null == h) ? (f && o()(null != h, "Unexpected missing user"), null) : (0, a.jsx)(eo, {
    closePopout: i,
    user: h,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}