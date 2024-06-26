n.d(t, {
  Z: function() {
    return el
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
  S = n(440051),
  f = n(734934),
  N = n(158238),
  A = n(300284),
  Z = n(680295),
  L = n(751009),
  v = n(785717),
  O = n(318661),
  R = n(741308),
  x = n(549546),
  P = n(681837),
  b = n(502762),
  M = n(530),
  D = n(544989),
  y = n(969205),
  j = n(171368),
  U = n(580512),
  G = n(67152),
  w = n(23293),
  k = n(695346),
  B = n(199902),
  H = n(293273),
  V = n(158776),
  F = n(246946),
  Y = n(594174),
  W = n(626135),
  z = n(70956),
  K = n(5192),
  q = n(51144),
  Q = n(246133),
  X = n(474376),
  J = n(383832),
  $ = n(981631),
  ee = n(228168),
  et = n(689938),
  en = n(384028);
let ei = [{
  duration: 30 * z.Z.Millis.MINUTE,
  label: () => et.Z.Messages.MUTE_DURATION_30_MINUTES
}, {
  duration: z.Z.Millis.HOUR,
  label: () => et.Z.Messages.MUTE_DURATION_1_HOUR
}, {
  duration: 3 * z.Z.Millis.HOUR,
  label: () => et.Z.Messages.MUTE_DURATION_3_HOURS
}, {
  duration: 8 * z.Z.Millis.HOUR,
  label: () => et.Z.Messages.MUTE_DURATION_8_HOURS
}, {
  duration: z.Z.Millis.DAY,
  label: () => et.Z.Messages.MUTE_DURATION_24_HOURS
}, {
  duration: void 0,
  label: () => et.Z.Messages.DURATION_FOREVER
}];

function es(e, t, n, s) {
  let a = (0, i.jsx)(i.Fragment, {
    children: ei.map(s => {
      let {
        duration: a,
        label: r
      } = s;
      return (0, i.jsx)(_.MenuItem, {
        id: "".concat(e, "-").concat(a),
        label: r(),
        action: () => (0, Q.Z)(e, t, n, a),
        dontCloseOnAction: !0
      }, a)
    })
  });
  return (0, i.jsx)(_.MenuItem, {
    id: e,
    className: en.expiringStatusMenuItem,
    keepItemStyles: !0,
    hasSubmenu: !0,
    label: t => {
      let {
        isFocused: n
      } = t;
      return (0, i.jsxs)("div", {
        className: en.statusItem,
        children: [(0, i.jsx)(_.Status, {
          status: e,
          className: en.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, i.jsx)("div", {
          className: en.status,
          children: (0, q.u5)(e)
        }), null != s && (0, i.jsx)("div", {
          className: en.description,
          children: s
        })]
      })
    },
    action: () => (0, Q.Z)(e, t, n),
    dontCloseOnAction: !0,
    children: e !== $.Skl.ONLINE ? a : void 0
  })
}

function ea(e, t, n, s) {
  return (0, i.jsx)(_.MenuItem, {
    id: e,
    keepItemStyles: !0,
    render: t => {
      let {
        isFocused: n
      } = t;
      return (0, i.jsxs)("div", {
        className: en.statusItem,
        children: [(0, i.jsx)(_.Status, {
          status: e,
          className: en.icon,
          size: 10,
          color: n ? "currentColor" : void 0
        }), (0, i.jsx)("div", {
          className: en.status,
          children: (0, q.u5)(e)
        }), null != s && (0, i.jsx)("div", {
          className: en.description,
          children: s
        })]
      })
    },
    action: () => (0, Q.Z)(e, t, n),
    dontCloseOnAction: !0
  })
}

function er(e) {
  let {
    user: t,
    customStatus: n,
    guildId: a,
    isApplicationStreaming: l,
    onClose: o,
    onSelect: E
  } = e, B = __OVERLAY__, H = (0, O.ZP)(t.id, a), Y = (0, h.O)(), {
    analyticsLocations: z
  } = (0, g.ZP)(p.Z.ACCOUNT_PROFILE_POPOUT), Q = (0, v.Q1)({
    layout: "SIMPLIFIED_ACCOUNT_POPOUT",
    userId: t.id,
    guildId: a
  }), [er, el] = (0, u.Wu)([V.Z], () => {
    var e;
    let n = t.id;
    return "string" != typeof n ? [void 0, $.Skl.UNKNOWN] : [null !== (e = V.Z.findActivity(n, e => e.type !== $.IIU.CUSTOM_STATUS)) && void 0 !== e ? e : void 0, V.Z.getStatus(n)]
  }), eo = function(e, t) {
    let n = S.Y.useExperiment({
        location: "account popout"
      }).expiringStatus,
      s = k.Cr.useSetting(),
      a = (0, f.p)(),
      r = N.e.useExperiment({
        location: "account popout"
      }).allowQuietMode || a,
      l = k.fv.useSetting(),
      o = e === $.Skl.DND,
      d = t => {
        let n = null != s && "0" !== s ? et.Z.Messages.STATUS_UNTIL.format({
          endTime: new Date(Number(s)).toLocaleString(et.Z.getLocale(), {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : void 0;
        if (e === t && null != n) return n;
        switch (t) {
          case $.Skl.DND:
            return r ? et.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : et.Z.Messages.STATUS_DND_HELP;
          case $.Skl.INVISIBLE:
            return et.Z.Messages.STATUS_INVISIBLE_HELPER;
          default:
            return
        }
      },
      u = (0, i.jsx)(i.Fragment, {
        children: ei.map(t => {
          let {
            duration: n,
            label: s
          } = t;
          return (0, i.jsx)(_.MenuItem, {
            id: "".concat(e, "-").concat(n),
            label: s(),
            action: () => {
              (0, f.oW)(!0, n)
            },
            dontCloseOnAction: !0
          }, n)
        })
      });
    return (0, i.jsxs)(i.Fragment, {
      children: [ea($.Skl.ONLINE, e, t), (0, i.jsx)(_.MenuSeparator, {}, "menu-separator-statuses"), n ? es($.Skl.IDLE, e, t, d($.Skl.IDLE)) : ea($.Skl.IDLE, e, t, d($.Skl.IDLE)), n ? es($.Skl.DND, e, t, d($.Skl.DND)) : ea($.Skl.DND, e, t, d($.Skl.DND)), n ? es($.Skl.INVISIBLE, e, t, d($.Skl.INVISIBLE)) : ea($.Skl.INVISIBLE, e, t, d($.Skl.INVISIBLE)), (0, i.jsx)(_.MenuSeparator, {}, "menu-separator-statuses"), r || a ? (0, i.jsx)(_.MenuItem, {
        id: "quiet-mode",
        "aria-label": "focus mode",
        className: en.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        showIconFirst: !0,
        label: () => (0, i.jsxs)("div", {
          className: en.statusItem,
          children: [(0, i.jsx)(_.BellSlashIcon, {
            size: "xxs",
            className: en.icon
          }), (0, i.jsxs)("div", {
            className: en.focusModeTitle,
            children: [et.Z.Messages.FOCUS_MODE_TITLE, (0, i.jsx)(_.TextBadge, {
              text: a ? et.Z.Messages.FOCUS_MODE_BADGE_ON : o ? et.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : et.Z.Messages.FOCUS_MODE_BADGE_OFF,
              color: a ? c.Z.BRAND_500 : o ? c.Z.RED_400 : c.Z.PRIMARY_500
            })]
          }), (0, i.jsx)("div", {
            className: en.description,
            children: a && null != l && "0" !== l ? et.Z.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(l)).toLocaleString(et.Z.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            }) : et.Z.Messages.FOCUS_MODE_DESCRIPTION
          })]
        }),
        action: () => {
          (0, f.oW)(!a)
        },
        dontCloseOnAction: !0,
        children: u
      }, "quiet-mode") : null]
    })
  }(el, Y), {
    ref: ec
  } = (0, I.Z)(), ed = (0, m.Z)(ec);
  s.useEffect(() => {
    W.default.track($.rMx.OPEN_POPOUT, {
      type: "User Status Menu",
      has_custom_status: null != n,
      other_user_id: t.id,
      application_id: null != er ? er.application_id : void 0,
      is_streaming: l,
      application_name: null != er ? er.name : void 0,
      profile_has_nitro_customization: (null == H ? void 0 : H.banner) != null,
      location: Y.location,
      has_profile_effect: (null == H ? void 0 : H.profileEffectId) != null
    })
  }, []);
  let eu = e => {
      null == o || o(), (0, j.openUserProfileModal)({
        sourceAnalyticsLocations: z,
        userId: t.id,
        guildId: a,
        ...e
      })
    },
    {
      modifyStatusEnabled: e_
    } = (0, L.K)({
      location: "SimplifiedAccountProfilePopout"
    }),
    eE = (0, A.Z)({
      analyticsLocations: z
    }),
    eh = (0, f.p)(),
    eI = el === $.Skl.DND,
    em = (0, X.g)(),
    ep = (0, T.o)(null != n ? n : void 0, en.menuItemFocused),
    eg = (0, C.Z)({
      id: t.id,
      label: et.Z.Messages.COPY_ID_USER,
      showIconFirst: !0,
      focusedClassName: en.menuItemFocused
    }),
    eT = (0, u.e7)([F.Z], () => F.Z.hidePersonalInformation);
  return (0, i.jsx)(g.Gt, {
    value: z,
    children: (0, i.jsx)(v.Mt, {
      layout: "SIMPLIFIED_ACCOUNT_POPOUT",
      userId: t.id,
      guildId: a,
      children: (0, i.jsx)(_.Dialog, {
        ref: ec,
        "aria-label": t.username,
        children: (0, i.jsxs)(b.Z, {
          className: en.themeContainer,
          user: t,
          displayProfile: H,
          profileType: ee.y0.BITE_SIZE,
          children: [!e_ && (0, i.jsx)(D.Z, {
            profileType: ee.y0.BITE_SIZE,
            children: (0, i.jsx)(y.Z, {
              onClose: o
            })
          }), (0, i.jsx)(w.Z, {
            user: t,
            displayProfile: H,
            onOpenProfile: B ? void 0 : eu,
            onClose: o
          }), (0, i.jsxs)("div", {
            className: en.body,
            children: [(0, i.jsx)(M.Z, {
              user: t,
              className: en.username,
              profileType: ee.y0.BITE_SIZE,
              nickname: K.ZP.getName(null, null, t),
              onOpenProfile: eu,
              pronouns: null == H ? void 0 : H.pronouns,
              tags: (0, i.jsx)(R.Z, {
                displayProfile: H,
                profileType: ee.y0.BITE_SIZE,
                onClose: o
              }),
              nicknameIcons: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(P.Z, {
                  userId: t.id
                }), (0, i.jsx)(x.Z, {
                  user: t,
                  isHovering: ed
                })]
              })
            }), (0, i.jsx)(G.Z, {
              user: t,
              bio: null == H ? void 0 : H.bio,
              hidePersonalInformation: eT,
              onClose: o
            }), (0, i.jsx)(U.Z, {
              user: t,
              onClose: o
            }), (0, i.jsxs)("div", {
              className: en.menus,
              children: [(0, i.jsxs)(_.Menu, {
                navId: "status",
                "aria-label": et.Z.Messages.STATUS_MENU_LABEL,
                hideScroller: !0,
                className: en.menu,
                onClose: o,
                onSelect: E,
                children: [e_ && (0, i.jsx)(_.MenuGroup, {
                  children: (0, i.jsx)(_.MenuItem, {
                    id: "edit-profile",
                    icon: _.PencilIcon,
                    label: et.Z.Messages.EDIT_PROFILE,
                    action: () => {
                      Q({
                        action: "EDIT_PROFILE",
                        analyticsLocations: z
                      }), eE()
                    },
                    showIconFirst: !0,
                    focusedClassName: en.menuItemFocused,
                    subMenuIconClassName: en.subMenuIcon
                  }, "edit-profile")
                }), (0, i.jsx)(_.MenuGroup, {
                  children: (0, i.jsx)(_.MenuItem, {
                    id: "status-picker",
                    label: (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      },
                      children: [(0, q.u5)(el), eh || eI ? (0, i.jsx)(_.BellSlashIcon, {
                        size: "xxs"
                      }) : null]
                    }),
                    focusedClassName: en.menuItemFocused,
                    subMenuIconClassName: en.subMenuIcon,
                    action: d.tq ? function() {
                      Q({
                        action: "PRESS_SET_STATUS",
                        analyticsLocations: z
                      }), (0, _.openModalLazy)(() => new Promise(e => {
                        e(e => (0, i.jsx)(_.ModalRoot, {
                          ...e,
                          size: _.ModalSize.SMALL,
                          className: en.modal,
                          "aria-label": et.Z.Messages.SET_STATUS,
                          children: (0, i.jsx)(_.Menu, {
                            navId: "status-mobile-web",
                            variant: "fixed",
                            "aria-label": et.Z.Messages.STATUS_MENU_LABEL,
                            hideScroller: !0,
                            className: en.statusPickerModalMenu,
                            onClose: e.onClose,
                            onSelect: e.onClose,
                            children: eo
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
                        status: el,
                        size: 12,
                        className: r()(t, en.mainStatusIcon),
                        color: n ? "currentColor" : void 0
                      })
                    },
                    children: d.tq ? void 0 : eo
                  }, "status-picker")
                }), !e_ && (0, i.jsx)(_.MenuGroup, {
                  children: ep
                })]
              }), (0, i.jsxs)(_.Menu, {
                navId: "account",
                "aria-label": et.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                hideScroller: !0,
                className: en.menu,
                onClose: o,
                onSelect: E,
                children: [(0, i.jsx)(_.MenuGroup, {
                  children: (0, i.jsx)(_.MenuItem, {
                    id: "switch-account",
                    focusedClassName: en.menuItemFocused,
                    subMenuIconClassName: en.subMenuIcon,
                    label: et.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                    icon: _.UserCircleIcon,
                    showIconFirst: !0,
                    action: () => {
                      Q({
                        action: "PRESS_SWITCH_ACCOUNTS",
                        analyticsLocations: z
                      }), (0, J.Z)()
                    },
                    children: em
                  })
                }), (0, i.jsx)(_.MenuGroup, {
                  children: eg
                })]
              })]
            })]
          }), (null == H ? void 0 : H.profileEffectId) != null && (0, i.jsx)(Z.Z, {
            profileEffectId: null == H ? void 0 : H.profileEffectId,
            isHovering: ed
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
    guildId: a,
    onClose: r,
    onSelect: l
  } = e, c = (0, u.e7)([Y.default], () => Y.default.getUser(t), [t]), d = (0, u.e7)([H.Z], () => H.Z.getCustomStatusActivity()), [_, h] = s.useState(!1), I = null != c ? c : n, m = (0, u.e7)([B.Z], () => null != I && null != B.Z.getAnyStreamForUser(I.id));
  return (s.useEffect(() => {
    null == c && e();
    async function e() {
      "string" == typeof t && (await (0, E.PR)(t), h(!0))
    }
  }, [c, t]), null == I) ? (_ && o()(null != I, "Unexpected missing user"), null) : (0, i.jsx)(er, {
    user: I,
    customStatus: d,
    guildId: a,
    isApplicationStreaming: m,
    onClose: r,
    onSelect: l
  })
}