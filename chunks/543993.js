"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ed
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
  R = n("680295"),
  O = n("447452"),
  L = n("877485"),
  M = n("785717"),
  P = n("318661"),
  x = n("741308"),
  y = n("681837"),
  D = n("724593"),
  b = n("502762"),
  U = n("530"),
  j = n("564440"),
  G = n("796214"),
  w = n("171368"),
  k = n("580512"),
  B = n("67152"),
  F = n("23293"),
  H = n("695346"),
  V = n("199902"),
  Y = n("293273"),
  W = n("158776"),
  K = n("246946"),
  z = n("594174"),
  Q = n("26290"),
  q = n("626135"),
  Z = n("70956"),
  X = n("5192"),
  J = n("51144"),
  $ = n("246133"),
  ee = n("474376"),
  et = n("383832"),
  en = n("981631"),
  ea = n("228168"),
  es = n("689938"),
  el = n("476002");
let ei = [{
  duration: 30 * Z.default.Millis.MINUTE,
  label: () => es.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: Z.default.Millis.HOUR,
  label: () => es.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * Z.default.Millis.HOUR,
  label: () => es.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * Z.default.Millis.HOUR,
  label: () => es.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: Z.default.Millis.DAY,
  label: () => es.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => es.default.Messages.DURATION_FOREVER
}];

function er(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: ei.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(h.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, $.default)(e, t, n, l),
        dontCloseOnAction: !0
      }, l)
    })
  });
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    className: el.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: el.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: el.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: el.status,
          children: (0, J.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: el.description,
          children: s
        })]
      })
    },
    action: () => (0, $.default)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== en.StatusTypes.ONLINE ? l : void 0
  })
}

function eo(e, t, n, s) {
  return (0, a.jsx)(h.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: el.statusItem,
        children: [(0, a.jsx)(h.Status, {
          status: e,
          className: el.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: el.status,
          children: (0, J.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: el.description,
          children: s
        })]
      })
    },
    action: () => (0, $.default)(e, t, n),
    dontCloseOnAction: !0
  })
}

function eu(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: _,
    closePopout: V
  } = e, Y = __OVERLAY__, z = (0, P.default)(t.id, l), {
    moreUserDetailsEnabled: Z
  } = (0, O.useSimplifiedProfileExperiment)({
    location: "SimplifiedAccountProfilePopout"
  }), {
    originalFriendingEnabled: $,
    improvedFriendingEnabled: eu
  } = (0, L.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedAccountProfilePopout"
  }), ed = (0, C.useAnalyticsContext)(), {
    analyticsLocations: ec
  } = (0, I.default)(p.default.ACCOUNT_PROFILE_POPOUT), ef = (0, M.useTrackUserProfileAction)({
    layout: "SIMPLIFIED_ACCOUNT_POPOUT",
    userId: t.id,
    guildId: l
  }), [eE, eh] = (0, c.useStateFromStoresArray)([W.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, en.StatusTypes.UNKNOWN] : [null !== (e = W.default.findActivity(n, e => e.type !== en.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, W.default.getStatus(n)]
  }), e_ = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = H.StatusExpiresAtSetting.useSetting(),
      l = (0, N.useFocusModeEnabled)(),
      i = v.QuietModeExperiment.useExperiment({
        location: "account popout"
      }).allowQuietMode || l,
      r = H.FocusModeExpiresAtSetting.useSetting(),
      o = e === en.StatusTypes.DND,
      d = t => {
        let n = null != s && "0" !== s ? es.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(es.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case en.StatusTypes.DND:
            return i ? es.default.Messages.STATUS_DND_HELP_FOCUS_MODE : es.default.Messages.STATUS_DND_HELP;
          case en.StatusTypes.INVISIBLE:
            return es.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      c = (0, a.jsx)(a.Fragment, {
        children: ei.map(t => {
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
      children: [eo(en.StatusTypes.ONLINE, e, t), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), n ? er(en.StatusTypes.IDLE, e, t, d(en.StatusTypes.IDLE)) : eo(en.StatusTypes.IDLE, e, t, d(en.StatusTypes.IDLE)), n ? er(en.StatusTypes.DND, e, t, d(en.StatusTypes.DND)) : eo(en.StatusTypes.DND, e, t, d(en.StatusTypes.DND)), n ? er(en.StatusTypes.INVISIBLE, e, t, d(en.StatusTypes.INVISIBLE)) : eo(en.StatusTypes.INVISIBLE, e, t, d(en.StatusTypes.INVISIBLE)), (0, a.jsx)(h.MenuSeparator, {}, "menu-separator-statuses"), i || l ? (0, a.jsx)(h.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: el.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, a.jsxs)("div", {
          className: el.statusItem,
          children: [(0, a.jsx)(f.BellSlashIcon, {
            width: 12,
            height: 12,
            className: el.icon
          }), (0, a.jsxs)("div", {
            className: el.focusModeTitle,
            children: [es.default.Messages.FOCUS_MODE_TITLE, (0, a.jsx)(Q.TextBadge, {
              text: l ? es.default.Messages.FOCUS_MODE_BADGE_ON : o ? es.default.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : es.default.Messages.FOCUS_MODE_BADGE_OFF,
              color: l ? u.default.BRAND_500 : o ? u.default.RED_400 : u.default.PRIMARY_500
            })]
          }), (0, a.jsx)("div", {
            className: el.description,
            children: l && null != r && "0" !== r ? es.default.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(r)).toLocaleString(es.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : es.default.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, N.setFocusMode)(!l)
        },
        dontCloseOnAction: !0,
        children: c
      }, "quiet-mode") : null]
    })
  }(eh, ed), {
    ref: eC
  } = (0, m.default)(), em = (0, S.default)(eC);
  s.useEffect(() => {
    q.default.track(en.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != eE ? eE.application_id : void 0,
      is_streaming: r,
      application_name: null != eE ? eE.name : void 0,
      profile_has_nitro_customization: (null == z ? void 0 : z.banner) != null,
      location: ed.location,
      has_profile_effect: (null == z ? void 0 : z.profileEffectId) != null
    })
  }, []);
  let eS = e => {
      null == V || V(), (0, w.openUserProfileModal)({
        sourceAnalyticsLocations: ec,
        userId: t.id,
        guildId: l,
        ...e
      })
    },
    ep = (0, N.useFocusModeEnabled)(),
    eI = eh === en.StatusTypes.DND,
    eg = (0, ee.useMultiAccountMenuItems)(),
    eT = (0, g.useCustomStatusMenuItem)(null != n ? n : void 0, el.menuItemFocused),
    eA = (0, T.default)({
      id: t.id,
      label: es.default.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: el.menuItemFocused
    }),
    eN = (0, c.useStateFromStores)([K.default], () => K.default.hidePersonalInformation);
  return (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: ec,
    children: (0, a.jsx)(M.UserProfileAnalyticsProvider, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: l,
      children: (0, a.jsx)("div", {
        className: el.popoutContainer,
        ref: eC,
        children: (0, a.jsxs)(b.default, {
          className: el.themeContainer,
          user: t,
          displayProfile: z,
          profileType: ea.UserProfileTypes.BITE_SIZE,
          children: [(0, a.jsx)(j.default, {
            profileType: ea.UserProfileTypes.BITE_SIZE,
            children: (0, a.jsx)(G.default, {
              onClose: o
            })
          }), (0, a.jsx)(F.default, {
            user: t,
            displayProfile: z,
            onOpenProfile: Y ? void 0 : eS
          }), (0, a.jsxs)("div", {
            className: el.body,
            children: [(0, a.jsx)(U.default, {
              user: t,
              className: el.username,
              profileType: ea.UserProfileTypes.BITE_SIZE,
              nickname: X.default.getName(null, null, t),
              onOpenProfile: () => eS({
                autoFocusNote: !1
              }),
              pronouns: null == z ? void 0 : z.pronouns,
              tags: (0, a.jsx)(x.default, {
                displayProfile: z,
                profileType: ea.UserProfileTypes.BITE_SIZE,
                onClose: o
              }),
              nicknameIcons: (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(y.default, {
                  userId: t.id
                }), (Z || $ || eu) && !eN && (0, a.jsx)(D.default, {
                  user: t,
                  isHovering: em,
                  onOpenProfile: () => eS({
                    autoFocusNote: !0
                  })
                })]
              })
            }), (0, a.jsx)(B.default, {
              user: t,
              bio: null == z ? void 0 : z.bio,
              hidePersonalInformation: eN,
              onClose: o
            }), (0, a.jsx)(k.default, {
              user: t,
              onClose: o
            }), (0, a.jsxs)("div", {
              className: el.menus,
              children: [(0, a.jsxs)(h.Menu, {
                navId: "status",
                "aria-label": es.default.Messages.STATUS_MENU_LABEL,
                hideScroller: !0,
                className: el.menu,
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
                      children: [(0, J.humanizeStatus)(eh), ep || eI ? (0, a.jsx)(f.BellSlashIcon, {
                        width: 12,
                        height: 12
                      }) : null]
                    }),
                    focusedClassName: el.menuItemFocused,
                    subMenuIconClassName: el.subMenuIcon,
                    action: d.isMobile ? function() {
                      ef({
                        action: "PRESS_SET_STATUS",
                        analyticsLocations: ec
                      }), (0, h.openModalLazy)(() => new Promise(e => {
                        e(e => (0, a.jsx)(h.ModalRoot, {
                          ...e,
                          size: h.ModalSize.SMALL,
                          className: el.modal,
                          "aria-label": es.default.Messages.SET_STATUS,
                          children: (0, a.jsx)(h.Menu, {
                            navId: "status-mobile-web",
                            variant: "fixed",
                            "aria-label": es.default.Messages.STATUS_MENU_LABEL,
                            hideScroller: !0,
                            className: el.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: e_
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
                        status: eh,
                        size: 12,
                        className: i()(t, el.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.isMobile ? void 0 : e_
                  }, "status-picker")
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eT
                })]
              }), (0, a.jsxs)(h.Menu, {
                navId: "account",
                "aria-label": es.default.Messages.MULTI_ACCOUNT_MENU_LABEL,
                hideScroller: !0,
                className: el.menu,
                onClose: o,
                onSelect: _,
                children: [(0, a.jsx)(h.MenuGroup, {
                  children: (0, a.jsx)(h.MenuItem, {
                    id: "switch-account",
                    focusedClassName: el.menuItemFocused,
                    subMenuIconClassName: el.subMenuIcon,
                    label: es.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: E.UserCircleIcon,
                    showIconFirst: !0,
                    action: () => {
                      ef({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        analyticsLocations: ec
                      }), (0, et.default)()
                    },
                    children: eg
                  })
                }), (0, a.jsx)(h.MenuGroup, {
                  children: eA
                })]
              })]
            })]
          }), (null == z ? void 0 : z.profileEffectId) != null && (0, a.jsx)(R.default, {
            profileEffectId: null == z ? void 0 : z.profileEffectId,
            isHovering: em
          })]
        })
      })
    })
  })
}

function ed(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, c.useStateFromStores)([z.default], () => z.default.getUser(t), [t]), d = (0, c.useStateFromStores)([Y.default], () => Y.default.getCustomStatusActivity()), [f, E] = s.useState(!1), h = null != u ? u : n, C = (0, c.useStateFromStores)([V.default], () => null != h && null != V.default.getAnyStreamForUser(h.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, _.getUser)(t), E(!0))
    }
  }, [u, t]), null == h) ? (f && o()(null != h, "Unexpected missing user"), null) : (0, a.jsx)(eu, {
    closePopout: i,
    user: h,
    customStatus: d,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}