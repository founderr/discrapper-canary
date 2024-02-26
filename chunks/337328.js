"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("394846"),
  d = n("446674"),
  c = n("47115"),
  f = n("77078"),
  E = n("327037"),
  h = n("79112"),
  _ = n("997289"),
  C = n("731898"),
  I = n("252744"),
  S = n("502651"),
  m = n("812204"),
  p = n("685665"),
  T = n("106803"),
  g = n("861370"),
  A = n("91639"),
  N = n("128887"),
  R = n("217513"),
  v = n("430312"),
  O = n("763866"),
  L = n("10532"),
  M = n("935409"),
  P = n("845579"),
  D = n("373469"),
  y = n("52028"),
  x = n("824563"),
  b = n("697218"),
  U = n("660279"),
  G = n("304121"),
  j = n("599110"),
  w = n("718517"),
  k = n("158998"),
  F = n("583232"),
  B = n("644091"),
  H = n("891964"),
  V = n("49111"),
  Y = n("590456"),
  W = n("782340"),
  K = n("400464");
let z = [{
  duration: 30 * w.default.Millis.MINUTE,
  label: () => W.default.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: w.default.Millis.HOUR,
  label: () => W.default.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * w.default.Millis.HOUR,
  label: () => W.default.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * w.default.Millis.HOUR,
  label: () => W.default.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: w.default.Millis.DAY,
  label: () => W.default.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => W.default.Messages.DURATION_FOREVER
}];

function q(e, t, n, s) {
  let l = (0, a.jsx)(a.Fragment, {
    children: z.map(s => {
      let {
        duration: l,
        label: i
      } = s;
      return (0, a.jsx)(f.MenuItem, {
        id: "".concat(e, "-").concat(l),
        label: i(),
        action: () => (0, F.default)(e, t, n, l)
      }, l)
    })
  });
  return (0, a.jsx)(f.MenuItem, {
    id: e,
    className: K.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: K.statusItem,
        children: [(0, a.jsx)(f.Status, {
          status: e,
          className: K.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: K.status,
          children: (0, k.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: K.description,
          children: s
        })]
      })
    },
    action: () => (0, F.default)(e, t, n),
    children: e !== V.StatusTypes.ONLINE ? l : void 0
  })
}

function Q(e, t, n, s) {
  return (0, a.jsx)(f.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, a.jsxs)("div", {
        className: K.statusItem,
        children: [(0, a.jsx)(f.Status, {
          status: e,
          className: K.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, a.jsx)("div", {
          className: K.status,
          children: (0, k.humanizeStatus)(e)
        }), null != s && (0, a.jsx)("div", {
          className: K.description,
          children: s
        })]
      })
    },
    action: () => (0, F.default)(e, t, n)
  })
}

function Z(e) {
  let {
    user: t,
    customStatus: n,
    guildId: l,
    isApplicationStreaming: r,
    onClose: o,
    onSelect: E,
    closePopout: D
  } = e, y = (0, _.useAnalyticsContext)(), {
    AnalyticsLocationProvider: b
  } = (0, p.default)(m.default.ACCOUNT_PROFILE_POPOUT), w = (0, R.default)(t.id, l), [F, z, Z, X] = (0, d.useStateFromStoresArray)([x.default], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, void 0, V.StatusTypes.UNKNOWN, !1] : [null !== (e = x.default.findActivity(n, e => e.type !== V.ActivityTypes.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, x.default.findActivity(t.id, e => e.type === V.ActivityTypes.CUSTOM_STATUS), x.default.getStatus(n), x.default.isMobileOnline(n)]
  }), J = function(e, t) {
    let n = A.ExpiringStatusExperiment.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = P.StatusExpiresAtSetting.useSetting(),
      l = t => {
        let n = null != s && "0" !== s ? W.default.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(W.default.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case V.StatusTypes.DND:
            return W.default.Messages.STATUS_DND_HELP;
          case V.StatusTypes.INVISIBLE:
            return W.default.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      };
    return (0, a.jsxs)(a.Fragment, {
      children: [Q(V.StatusTypes.ONLINE, e, t), (0, a.jsx)(f.MenuSeparator, {}, "menu-separator-statuses"), n ? q(V.StatusTypes.IDLE, e, t, l(V.StatusTypes.IDLE)) : Q(V.StatusTypes.IDLE, e, t, l(V.StatusTypes.IDLE)), n ? q(V.StatusTypes.DND, e, t, l(V.StatusTypes.DND)) : Q(V.StatusTypes.DND, e, t, l(V.StatusTypes.DND)), n ? q(V.StatusTypes.INVISIBLE, e, t, l(V.StatusTypes.INVISIBLE)) : Q(V.StatusTypes.INVISIBLE, e, t, l(V.StatusTypes.INVISIBLE))]
    })
  }(Z, y), {
    ref: $
  } = (0, C.default)(), ee = (0, I.default)($);
  s.useEffect(() => {
    j.default.track(V.AnalyticEvents.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != F ? F.application_id : void 0,
      is_streaming: r,
      application_name: null != F ? F.name : void 0,
      profile_has_nitro_customization: (null == w ? void 0 : w.banner) != null,
      location: y.location,
      has_profile_effect: (null == w ? void 0 : w.profileEffectId) != null
    })
  }, []);
  let et = (0, B.useMultiAccountMenuItems)(),
    en = (0, T.useCustomStatusMenuItem)(null != n ? n : void 0, K.menuItemFocused),
    ea = (0, g.default)({
      id: t.id,
      label: W.default.Messages.COPY_ID_USER,
      showIconFirst: !0
    }),
    es = N.QuietModeExperiment.useExperiment({
      location: "account popout"
    }).allowQuietMode,
    el = P.QuietMode.useSetting(),
    ei = Z === V.StatusTypes.DND;
  return (0, a.jsx)(b, {
    children: (0, a.jsx)("div", {
      className: K.popoutContainer,
      children: (0, a.jsx)("div", {
        ref: $,
        children: (0, a.jsxs)(v.default, {
          user: t,
          profileType: Y.UserProfileTypes.POPOUT,
          children: [(0, a.jsx)(M.default, {
            user: t,
            displayProfile: w,
            onClose: () => null == D ? void 0 : D(),
            isMobile: X,
            isStreaming: (0, S.default)(F),
            status: Z,
            disableUserProfileLink: __OVERLAY__,
            isHovering: ee,
            showPremiumBadgeUpsell: !1
          }), (0, a.jsxs)(v.default.Inner, {
            children: [(0, a.jsx)(O.default, {
              activity: F,
              customStatusActivity: z,
              displayProfile: w,
              user: t,
              onClose: o,
              setNote: !1,
              canDM: !1,
              hideNote: !0,
              showCopiableUsername: !0
            }), (0, a.jsx)(L.default, {
              className: K.divider
            }), (0, a.jsxs)(f.Menu, {
              navId: "account",
              "aria-label": W.default.Messages.SET_STATUS,
              hideScroller: !0,
              className: K.menu,
              onClose: o,
              onSelect: E,
              children: [(0, a.jsxs)(f.MenuGroup, {
                children: [(0, a.jsx)(f.MenuItem, {
                  id: "status-picker",
                  label: (0, k.humanizeStatus)(Z),
                  focusedClassName: K.menuItemFocused,
                  subMenuIconClassName: K.subMenuIcon,
                  action: u.isMobile ? function() {
                    (0, f.openModalLazy)(() => new Promise(e => {
                      e(e => (0, a.jsx)(f.ModalRoot, {
                        ...e,
                        size: f.ModalSize.SMALL,
                        className: K.modal,
                        "aria-label": W.default.Messages.SET_STATUS,
                        children: (0, a.jsx)(f.Menu, {
                          navId: "account",
                          variant: "fixed",
                          "aria-label": W.default.Messages.SET_STATUS,
                          hideScroller: !0,
                          className: K.statusPickerModalMenu,
                          onClose: e.onClose,
                          onSelect: e.onClose,
                          children: J
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
                    return (0, a.jsx)(f.Status, {
                      status: Z,
                      size: 12,
                      className: i(t, K.mainStatusIcon),
                      color: n ? "currentColor" : void 0
                    })
                  },
                  children: u.isMobile ? void 0 : J
                }, "status-picker"), en, es ? (0, a.jsx)(f.MenuItem, {
                  id: "quiet-mode",
                  "aria-label": "focus mode",
                  focusedClassName: K.menuItemFocused,
                  showIconFirst: !0,
                  label: el ? W.default.Messages.QUIET_MODE_ENABLED : ei ? W.default.Messages.QUIET_MODE_DND : W.default.Messages.QUIET_MODE_DISABLED,
                  icon: e => {
                    let {
                      className: t
                    } = e;
                    return el || ei ? (0, a.jsx)(c.BellSlashIcon, {
                      width: 18,
                      height: 18,
                      className: i(t, K.quietModeIcon)
                    }) : (0, a.jsx)(U.default, {
                      width: 18,
                      height: 18,
                      className: i(t, K.quietModeIcon)
                    })
                  },
                  action: () => {
                    h.default.open(V.UserSettingsSections.NOTIFICATIONS)
                  }
                }, "quiet-mode") : null]
              }), (0, a.jsx)(f.MenuGroup, {
                children: (0, a.jsx)(f.MenuItem, {
                  id: "switch-account",
                  focusedClassName: K.menuItemFocused,
                  subMenuIconClassName: K.subMenuIcon,
                  label: W.default.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                  icon: G.default,
                  showIconFirst: !0,
                  action: H.default,
                  children: et
                }, "switch-account")
              }), (0, a.jsx)(f.MenuGroup, {
                children: ea
              })]
            })]
          })]
        })
      })
    })
  })
}

function X(e) {
  let {
    userId: t,
    user: n,
    guildId: l,
    onClose: i,
    onSelect: r
  } = e, u = (0, d.useStateFromStores)([b.default], () => b.default.getUser(t), [t]), c = (0, d.useStateFromStores)([y.default], () => y.default.getCustomStatusActivity()), [f, h] = s.useState(!1), _ = null != u ? u : n, C = (0, d.useStateFromStores)([D.default], () => null != _ && null != D.default.getAnyStreamForUser(_.id));
  return (s.useEffect(() => {
    null == u && e();
    async function e() {
      "string" == typeof t && (await (0, E.getUser)(t), h(!0))
    }
  }, [u, t]), null == _) ? (f && o(null != _, "Unexpected missing user"), null) : (0, a.jsx)(Z, {
    closePopout: i,
    user: _,
    customStatus: c,
    guildId: l,
    isApplicationStreaming: C,
    onClose: i,
    onSelect: r
  })
}