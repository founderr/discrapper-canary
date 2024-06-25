n.d(t, {
  Z: function() {
    return ea
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(512722),
  o = n.n(l),
  c = n(722770),
  d = n(873546),
  u = n(442837),
  _ = n(481060),
  E = n(232567),
  h = n(2052),
  I = n(393238),
  m = n(727637),
  p = n(100527),
  g = n(906732),
  T = n(521868),
  C = n(299206),
  f = n(440051),
  S = n(734934),
  N = n(158238),
  A = n(680295),
  Z = n(785717),
  L = n(318661),
  v = n(741308),
  O = n(549546),
  R = n(681837),
  x = n(502762),
  P = n(530),
  b = n(544989),
  M = n(969205),
  D = n(171368),
  y = n(580512),
  j = n(67152),
  U = n(23293),
  G = n(695346),
  w = n(199902),
  k = n(293273),
  B = n(158776),
  H = n(246946),
  V = n(594174),
  F = n(626135),
  Y = n(70956),
  W = n(5192),
  z = n(51144),
  K = n(246133),
  q = n(474376),
  Q = n(383832),
  X = n(981631),
  J = n(228168),
  $ = n(689938),
  ee = n(384028);
let et = [{
  duration: 30 * Y.Z.Millis.MINUTE,
  label: () => $.Z.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: Y.Z.Millis.HOUR,
  label: () => $.Z.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * Y.Z.Millis.HOUR,
  label: () => $.Z.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * Y.Z.Millis.HOUR,
  label: () => $.Z.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: Y.Z.Millis.DAY,
  label: () => $.Z.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => $.Z.Messages.DURATION_FOREVER
}];

function en(e, t, n, s) {
  let a = (0, i.jsx)(i.Fragment, {
    children: et.map(s => {
      let {
        duration: a,
        label: r
      } = s;
      return (0, i.jsx)(_.MenuItem, {
        id: "".concat(e, "-").concat(a),
        label: r(),
        action: () => (0, K.Z)(e, t, n, a),
        dontCloseOnAction: !0
      }, a)
    })
  });
  return (0, i.jsx)(_.MenuItem, {
    id: e,
    className: ee.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, i.jsxs)("div", {
        className: ee.statusItem,
        children: [(0, i.jsx)(_.Status, {
          status: e,
          className: ee.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, i.jsx)("div", {
          className: ee.status,
          children: (0, z.u5)(e)
        }), null != s && (0, i.jsx)("div", {
          className: ee.description,
          children: s
        })]
      })
    },
    action: () => (0, K.Z)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== X.Skl.ONLINE ? a : void 0
  })
}

function ei(e, t, n, s) {
  return (0, i.jsx)(_.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, i.jsxs)("div", {
        className: ee.statusItem,
        children: [(0, i.jsx)(_.Status, {
          status: e,
          className: ee.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, i.jsx)("div", {
          className: ee.status,
          children: (0, z.u5)(e)
        }), null != s && (0, i.jsx)("div", {
          className: ee.description,
          children: s
        })]
      })
    },
    action: () => (0, K.Z)(e, t, n),
    dontCloseOnAction: !0
  })
}

function es(e) {
  let {
    user: t,
    customStatus: n,
    guildId: a,
    isApplicationStreaming: l,
    onClose: o,
    onSelect: E
  } = e, w = __OVERLAY__, k = (0, L.ZP)(t.id, a), V = (0, h.O)(), {
    analyticsLocations: Y
  } = (0, g.ZP)(p.Z.ACCOUNT_PROFILE_POPOUT), K = (0, Z.Q1)({
    layout: "SIMPLIFIED_ACCOUNT_POPOUT",
    userId: t.id,
    guildId: a
  }), [es, ea] = (0, u.Wu)([B.Z], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, X.Skl.UNKNOWN] : [null !== (e = B.Z.findActivity(n, e => e.type !== X.IIU.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, B.Z.getStatus(n)]
  }), er = function(e, t) {
    let n = f.Y.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = G.Cr.useSetting(),
      a = (0, S.p)(),
      r = N.e.useExperiment({
        location: "account popout"
      }).allowQuietMode || a,
      l = G.fv.useSetting(),
      o = e === X.Skl.DND,
      d = t => {
        let n = null != s && "0" !== s ? $.Z.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString($.Z.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case X.Skl.DND:
            return r ? $.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : $.Z.Messages.STATUS_DND_HELP;
          case X.Skl.INVISIBLE:
            return $.Z.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      u = (0, i.jsx)(i.Fragment, {
        children: et.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, i.jsx)(_.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: s(),
            action: () => {
              (0, S.oW)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, i.jsxs)(i.Fragment, {
      children: [ei(X.Skl.ONLINE, e, t), (0, i.jsx)(_.MenuSeparator, {}, "menu-separator-statuses"), n ? en(X.Skl.IDLE, e, t, d(X.Skl.IDLE)) : ei(X.Skl.IDLE, e, t, d(X.Skl.IDLE)), n ? en(X.Skl.DND, e, t, d(X.Skl.DND)) : ei(X.Skl.DND, e, t, d(X.Skl.DND)), n ? en(X.Skl.INVISIBLE, e, t, d(X.Skl.INVISIBLE)) : ei(X.Skl.INVISIBLE, e, t, d(X.Skl.INVISIBLE)), (0, i.jsx)(_.MenuSeparator, {}, "menu-separator-statuses"), r || a ? (0, i.jsx)(_.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: ee.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, i.jsxs)("div", {
          className: ee.statusItem,
          children: [(0, i.jsx)(_.BellSlashIcon, {
            size: "xxs",
            className: ee.icon
          }), (0, i.jsxs)("div", {
            className: ee.focusModeTitle,
            children: [$.Z.Messages.FOCUS_MODE_TITLE, (0, i.jsx)(_.TextBadge, {
              text: a ? $.Z.Messages.FOCUS_MODE_BADGE_ON : o ? $.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : $.Z.Messages.FOCUS_MODE_BADGE_OFF,
              color: a ? c.Z.BRAND_500 : o ? c.Z.RED_400 : c.Z.PRIMARY_500
            })]
          }), (0, i.jsx)("div", {
            className: ee.description,
            children: a && null != l && "0" !== l ? $.Z.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(l)).toLocaleString($.Z.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : $.Z.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, S.oW)(!a)
        },
        dontCloseOnAction: !0,
        children: u
      }, "quiet-mode") : null]
    })
  }(ea, V), {
    ref: el
  } = (0, I.Z)(), eo = (0, m.Z)(el);
  s.useEffect(() => {
    F.default.track(X.rMx.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != es ? es.application_id : void 0,
      is_streaming: l,
      application_name: null != es ? es.name : void 0,
      profile_has_nitro_customization: (null == k ? void 0 : k.banner) != null,
      location: V.location,
      has_profile_effect: (null == k ? void 0 : k.profileEffectId) != null
    })
  }, []);
  let ec = e => {
      null == o || o(), (0, D.openUserProfileModal)({
        sourceAnalyticsLocations: Y,
        userId: t.id,
        guildId: a,
        ...e
      })
    },
    ed = (0, S.p)(),
    eu = ea === X.Skl.DND,
    e_ = (0, q.g)(),
    eE = (0, T.o)(null != n ? n : void 0, ee.menuItemFocused),
    eh = (0, C.Z)({
      id: t.id,
      label: $.Z.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: ee.menuItemFocused
    }),
    eI = (0, u.e7)([H.Z], () => H.Z.hidePersonalInformation);
  return (0, i.jsx)(g.Gt, {
    value: Y,
    children: (0, i.jsx)(Z.Mt, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: a,
      children: (0, i.jsx)(_.Dialog, {
        ref: el,
        "aria-label": t.username,
        children: (0, i.jsxs)(x.Z, {
          className: ee.themeContainer,
          user: t,
          displayProfile: k,
          profileType: J.y0.BITE_SIZE,
          children: [(0, i.jsx)(b.Z, {
            profileType: J.y0.BITE_SIZE,
            children: (0, i.jsx)(M.Z, {
              onClose: o
            })
          }), (0, i.jsx)(U.Z, {
            user: t,
            displayProfile: k,
            onOpenProfile: w ? void 0 : ec,
            onClose: o
          }), (0, i.jsxs)("div", {
            className: ee.body,
            children: [(0, i.jsx)(P.Z, {
              user: t,
              className: ee.username,
              profileType: J.y0.BITE_SIZE,
              nickname: W.ZP.getName(null, null, t),
              onOpenProfile: ec,
              pronouns: null == k ? void 0 : k.pronouns,
              tags: (0, i.jsx)(v.Z, {
                displayProfile: k,
                profileType: J.y0.BITE_SIZE,
                onClose: o
              }),
              nicknameIcons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(R.Z, {
                  userId: t.id
                }), (0, i.jsx)(O.Z, {
                  user: t,
                  isHovering: eo
                })]
              })
            }), (0, i.jsx)(j.Z, {
              user: t,
              bio: null == k ? void 0 : k.bio,
              hidePersonalInformation: eI,
              onClose: o
            }), (0, i.jsx)(y.Z, {
              user: t,
              onClose: o
            }), (0, i.jsxs)("div", {
              className: ee.menus,
              children: [(0, i.jsxs)(_.Menu, {
                navId: "status",
                "aria-label": $.Z.Messages.STATUS_MENU_LABEL,
                hideScroller: !0,
                className: ee.menu,
                onClose: o,
                onSelect: E,
                children: [(0, i.jsx)(_.MenuGroup, {
                  children: (0, i.jsx)(_.MenuItem, {
                    id: "status-picker",
                    label: (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, z.u5)(ea), ed || eu ? (0, i.jsx)(_.BellSlashIcon, {
                        size: "xxs"
                      }) : null]
                    }),
                    focusedClassName: ee.menuItemFocused,
                    subMenuIconClassName: ee.subMenuIcon,
                    action: d.tq ? function() {
                      K({
                        action: "PRESS_SET_STATUS",
                        analyticsLocations: Y
                      }), (0, _.openModalLazy)(() => new Promise(e => {
                        e(e => (0, i.jsx)(_.ModalRoot, {
                          ...e,
                          size: _.ModalSize.SMALL,
                          className: ee.modal,
                          "aria-label": $.Z.Messages.SET_STATUS,
                          children: (0, i.jsx)(_.Menu, {
                            navId: "status-mobile-web",
                            variant: "fixed",
                            "aria-label": $.Z.Messages.STATUS_MENU_LABEL,
                            hideScroller: !0,
                            className: ee.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: er
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
                      return (0, i.jsx)(_.Status, {
                        status: ea,
                        size: 12,
                        className: r()(t, ee.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.tq ? void 0 : er
                  }, "status-picker")
                }), (0, i.jsx)(_.MenuGroup, {
                  children: eE
                })]
              }), (0, i.jsxs)(_.Menu, {
                navId: "account",
                "aria-label": $.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                hideScroller: !0,
                className: ee.menu,
                onClose: o,
                onSelect: E,
                children: [(0, i.jsx)(_.MenuGroup, {
                  children: (0, i.jsx)(_.MenuItem, {
                    id: "switch-account",
                    focusedClassName: ee.menuItemFocused,
                    subMenuIconClassName: ee.subMenuIcon,
                    label: $.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: _.UserCircleIcon,
                    showIconFirst: !0,
                    action: () => {
                      K({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        analyticsLocations: Y
                      }), (0, Q.Z)()
                    },
                    children: e_
                  })
                }), (0, i.jsx)(_.MenuGroup, {
                  children: eh
                })]
              })]
            })]
          }), (null == k ? void 0 : k.profileEffectId) != null && (0, i.jsx)(A.Z, {
            profileEffectId: null == k ? void 0 : k.profileEffectId,
            isHovering: eo
          })]
        })
      })
    })
  })
}

function ea(e) {
  let {
    userId: t,
    user: n,
    guildId: a,
    onClose: r,
    onSelect: l
  } = e, c = (0, u.e7)([V.default], () => V.default.getUser(t), [t]), d = (0, u.e7)([k.Z], () => k.Z.getCustomStatusActivity()), [_, h] = s.useState(!1), I = null != c ? c : n, m = (0, u.e7)([w.Z], () => null != I && null != w.Z.getAnyStreamForUser(I.id));
  return (s.useEffect(() => {
    null == c && e();
    async function e() {
      "string" == typeof t && (await (0, E.PR)(t), h(!0))
    }
  }, [c, t]), null == I) ? (_ && o()(null != I, "Unexpected missing user"), null) : (0, i.jsx)(es, {
    user: I,
    customStatus: d,
    guildId: a,
    isApplicationStreaming: m,
    onClose: r,
    onSelect: l
  })
}