"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eo
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
  Z = n("51144"),
  X = n("246133"),
  J = n("474376"),
  $ = n("383832"),
  ee = n("981631"),
  et = n("228168"),
  en = n("689938"),
  ea = n("476002");
let es = [{
  duration: 30 * q.default.Millis.MINUTE,
  label: () => en.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: q.default.Millis.HOUR,
  label: () => en.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * q.default.Millis.HOUR,
  label: () => en.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * q.default.Millis.HOUR,
  label: () => en.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: q.default.Millis.DAY,
  label: () => en.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => en.default.Messages.DURATION_FOREVER
}];

function el(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: es.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(h.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, X.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    className: ea.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: ea.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: ea.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: ea.status,
          children: (0, Z.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: ea.description,
          children: s
        })]
      })
    },
    action: () => (0, X.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== ee.StatusTypes.ONLINE ? l : void 0
  })
}

function ei(e, t, n, s) {
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: ea.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: ea.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: ea.status,
          children: (0, Z.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: ea.description,
          children: s
        })]
      })
    },
    action: () => (0, X.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function er(e) {
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
    originalFriendingEnabled: X,
    improvedFriendingEnabled: er
  } = (0, O.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedAccountProfilePopout"
  }), eo = (0, C.useAnalyticsContext)(), {
    analyticsLocations: eu
  } = (0, I.default)(p.default.ACCOUNT_PROFILE_POPOUT), ed = (0, L.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_ACCOUNT_POPOUT",
    userId: t.id,
    guildId: l
  }), [ec, ef] = (0, c.useStateFromStoresArray)([Y.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, ee.StatusTypes.UNKNOWN] : [null !== (e = Y.default.findActivity(n, e => e.type !== ee.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, Y.default.getStatus(n)]
  }), eE = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = F.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = F.FocusModeExpiresAtSetting.useSetting(),
      o = e === ee.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? en.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(en.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case ee.StatusTypes.DND:
            return i ? en.default.Messages.STATUS_DND_HELP_FOCUS_MODE : en.default.Messages.STATUS_DND_HELP;
          case ee.StatusTypes.INVISIBLE:
            return en.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: es.map(t => {
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
      children: [ei(ee.StatusTypes.ONLINE, e, t), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), n ? el(ee.StatusTypes.IDLE, e, t, d(ee.StatusTypes.IDLE)) : ei(ee.StatusTypes.IDLE, e, t, d(ee.StatusTypes.IDLE)), n ? el(ee.StatusTypes.DND, e, t, d(ee.StatusTypes.DND)) : ei(ee.StatusTypes.DND, e, t, d(ee.StatusTypes.DND)), n ? el(ee.StatusTypes.INVISIBLE, e, t, d(ee.StatusTypes.INVISIBLE)) : ei(ee.StatusTypes.INVISIBLE, e, t, d(ee.StatusTypes.INVISIBLE)), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(h.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: ea.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: ea.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: ea.icon
          }), (0, a.jsxs)("div", {
            className: ea.focusModeTitle,
            children: [en.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(z.TextBadge, {
              text: l ? en.default.Messages.FOCUS_MODE_BADGE_ON : o ? en.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : en.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: ea.description,
            children: l && null != r && "0" !== r ? en.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(en.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : en.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(ef, eo), {
    ref: eh
  } = (0, m.default)(), e_ = (0, S.default)(eh);
  s.useEffect(() => {
    Q.default.track(ee.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != ec ? ec.application_id : void 0,
      is_streaming: r,
      application_name: null != ec ? ec.name : void 0,
      profile_has_nitro_customization: (null == K ? void 0 : K.banner) != null,
      location: eo.location,
      has_profile_effect: (null == K ? void 0 : K.profileEffectId) != null
    })
  }, []);
  let eC = e => {
      null == H || H(), (0, G.openUserProfileModal)({
        sourceAnalyticsLocations: eu,
        userId: t.id,
        guildId: l,
        ...e
      })
    },
    em = (0, N.useFocusModeEnabled)(),
    eS = ef === ee.StatusTypes.DND,
    ep = (0, J.useMultiAccountMenuItems)(),
    eI = (0, T.useCustomStatusMenuItem)(null != n ? n : void 0, ea.menuItemFocused),
    eT = (0, g.default)({
      id: t.id,
      label: en.default.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: ea.menuItemFocused
    }),
    eg = (0, c.useStateFromStores)([W.default], () => W.default.hidePersonalInformation);
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: eu,
    children: (0, a.jsx)(L.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: ea.popoutContainer,
        ref: eh,
        children: (0, a.jsxs)(D.default, {
          className: ea.themeContainer,
          user: t,
          displayProfile: K,
          profileType: et.UserProfileTypes.BITE_SIZE,
          children: [(0, a.jsx)(U.default, {
            profileType: et.UserProfileTypes.BITE_SIZE,
            children: (0, a.jsx)(j.default, {
              onClose: o
            })
          }), (0, a.jsx)(B.default, {
            user: t,
            displayProfile: K,
            onOpenProfile: V ? void 0 : eC
          }), (0, a.jsxs)("div", {
            className: ea.body,
            children: [(0, a.jsx)(b.default, {
              user: t,
              className: ea.username,
              profileType: et.UserProfileTypes.BITE_SIZE,
              onOpenProfile: () => eC({
                autoFocusNote: !1
              }),
              pronouns: null == K ? void 0 : K.pronouns,
              tags: (0, a.jsx)(P.default, {
                displayProfile: K,
                profileType: et.UserProfileTypes.BITE_SIZE,
                onClose: o
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(x.default, {
                  userId: t.id
                }), (q || X || er) && !eg && (0, a.jsx)(y.default, {
                  user: t,
                  isHovering: e_,
                  onOpenProfile: () => eC({
                    autoFocusNote: !0
                  })
                })]
              })
            }), (0, a.jsx)(k.default, {
              user: t,
              bio: null == K ? void 0 : K.bio,
              hidePersonalInformation: eg,
              onClose: o
            }), (0, a.jsx)(w.default, {
              user: t,
              onClose: o
            }), (0, a.jsxs)("div", {
              className: ea.menus,
              children: [(0, a.jsxs)(h.Menu, {
                navId: "status",
                "aria-label": en.default.Messages.STATUS_MENU_LABEL,
                hideScroller: !0,
                className: ea.menu,
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
                      children: [(0, Z.humanizeStatus)(ef), em || eS ? (0, a.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: ea.menuItemFocused,
                    subMenuIconClassName: ea.subMenuIcon,
                    action: d.isMobile ? function() {
                      ed({
                        action: "PRESS_SET_STATUS",
                        analyticsLocations: eu
                      }), (0, h.openModalLazy)(() => new Promise(e => {
                        e(e => (0, a.jsx)(h.ModalRoot, {
                          ...e,
                          size: h.ModalSize.SMALL,
                          className: ea.modal,
                          "aria-label": en.default.Messages.SET_STATUS,
                          children: (0, a.jsx)(h.Menu, {
                            navId: "status-mobile-web",
                            variant: "fixed",
                            "aria-label": en.default.Messages.STATUS_MENU_LABEL,
                            hideScroller: !0,
                            className: ea.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: eE
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
                        status: ef,
                        size: 12,
                        className: i()(t, ea.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : eE
                  }, "status-picker")
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eI
                })]
              }), (0, a.jsxs)(h.Menu, {
                navId: "account",
                "aria-label": en.default.Messages.MULTI_ACCOUNT_MENU_LABEL,
                hideScroller: !0,
                className: ea.menu,
                onClose: o,
                onSelect: _,
                children: [(0, a.jsx)(h.MenuGroup, {
                  children: (0, a.jsx)(h.MenuItem, {
                    id: "switch-account",
                    focusedClassName: ea.menuItemFocused,
                    subMenuIconClassName: ea.subMenuIcon,
                    label: en.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: E.UserCircleIcon,
                    showIconFirst: !0,
                    action: () => {
                      ed({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        analyticsLocations: eu
                      }), (0, $.default)()
                    },
                    children: ep
                  })
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eT
                })]
              })]
            })]
          })]
        })
      })
    })
  })
}

function eo(e) {
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
  }, [u, t]), null == h) ? (f && o()(null != h, "Unexpected missing user"), null) : (0, a.jsx)(er, {
    closePopout: i,
    user: h,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}