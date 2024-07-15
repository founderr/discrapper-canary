n.d(t, {
  Z: function() {
return ei;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(722770),
  o = n(873546),
  c = n(442837),
  d = n(481060),
  u = n(2052),
  _ = n(393238),
  E = n(727637),
  h = n(100527),
  I = n(906732),
  m = n(676035),
  g = n(521868),
  p = n(299206),
  T = n(440051),
  f = n(734934),
  S = n(158238),
  C = n(300284),
  N = n(680295),
  A = n(785717),
  v = n(481046),
  Z = n(318661),
  L = n(78675),
  O = n(741308),
  R = n(899007),
  x = n(549546),
  b = n(438163),
  P = n(681837),
  M = n(502762),
  D = n(530),
  y = n(544989),
  j = n(969205),
  U = n(171368),
  G = n(580512),
  k = n(67152),
  w = n(695346),
  B = n(158776),
  H = n(246946),
  V = n(70956),
  F = n(5192),
  Y = n(51144),
  W = n(246133),
  z = n(474376),
  K = n(383832),
  q = n(981631),
  Q = n(228168),
  X = n(689938),
  J = n(483978),
  $ = n(335182);
let ee = [{
duration: 30 * V.Z.Millis.MINUTE,
label: () => X.Z.Messages.MUTE_DURATION_30_MINUTES
  },
  {
duration: V.Z.Millis.HOUR,
label: () => X.Z.Messages.MUTE_DURATION_1_HOUR
  },
  {
duration: 3 * V.Z.Millis.HOUR,
label: () => X.Z.Messages.MUTE_DURATION_3_HOURS
  },
  {
duration: 8 * V.Z.Millis.HOUR,
label: () => X.Z.Messages.MUTE_DURATION_8_HOURS
  },
  {
duration: V.Z.Millis.DAY,
label: () => X.Z.Messages.MUTE_DURATION_24_HOURS
  },
  {
duration: void 0,
label: () => X.Z.Messages.DURATION_FOREVER
  }
];

function et(e, t, n, a) {
  let s = (0, i.jsx)(i.Fragment, {
children: ee.map(a => {
  let {
    duration: s,
    label: r
  } = a;
  return (0, i.jsx)(d.MenuItem, {
    id: ''.concat(e, '-').concat(s),
    label: r(),
    action: () => (0, W.Z)(e, t, n, s),
    dontCloseOnAction: !0
  }, s);
})
  });
  return (0, i.jsx)(d.MenuItem, {
id: e,
className: J.expiringStatusMenuItem,
keepItemStyles: !0,
hasSubmenu: !0,
label: t => {
  let {
    isFocused: n
  } = t;
  return (0, i.jsxs)('div', {
    className: J.statusItem,
    children: [
      (0, i.jsx)(d.Status, {
        status: e,
        className: J.icon,
        size: 10,
        color: n ? 'currentColor' : void 0
      }),
      (0, i.jsx)('div', {
        className: J.status,
        children: (0, Y.u5)(e)
      }),
      null != a && (0, i.jsx)('div', {
        className: J.description,
        children: a
      })
    ]
  });
},
action: () => (0, W.Z)(e, t, n),
dontCloseOnAction: !0,
children: e !== q.Skl.ONLINE ? s : void 0
  });
}

function en(e, t, n, a) {
  return (0, i.jsx)(d.MenuItem, {
id: e,
keepItemStyles: !0,
render: t => {
  let {
    isFocused: n
  } = t;
  return (0, i.jsxs)('div', {
    className: J.statusItem,
    children: [
      (0, i.jsx)(d.Status, {
        status: e,
        className: J.icon,
        size: 10,
        color: n ? 'currentColor' : void 0
      }),
      (0, i.jsx)('div', {
        className: J.status,
        children: (0, Y.u5)(e)
      }),
      null != a && (0, i.jsx)('div', {
        className: J.description,
        children: a
      })
    ]
  });
},
action: () => (0, W.Z)(e, t, n),
dontCloseOnAction: !0
  });
}

function ei(e) {
  let {
currentUser: t,
onClose: n,
setPopoutRef: s
  } = e, V = __OVERLAY__, W = (0, Z.ZP)(t.id), ei = (0, u.O)(), {
analyticsLocations: ea
  } = (0, I.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT), es = (0, A.Q1)({
layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
userId: t.id
  }), er = (0, m.a)(), el = (0, c.e7)([B.Z], () => B.Z.getStatus(t.id)), eo = function(e, t) {
let n = T.Y.useExperiment({
    location: 'account popout'
  }).expiringStatus,
  a = w.Cr.useSetting(),
  s = (0, f.p)(),
  r = S.e.useExperiment({
    location: 'account popout'
  }).allowQuietMode || s,
  o = w.fv.useSetting(),
  c = e === q.Skl.DND,
  u = t => {
    let n = null != a && '0' !== a ? X.Z.Messages.STATUS_UNTIL.format({
      endTime: new Date(Number(a)).toLocaleString(X.Z.getLocale(), {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      })
    }) : void 0;
    if (e === t && null != n)
      return n;
    switch (t) {
      case q.Skl.DND:
        return r ? X.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : X.Z.Messages.STATUS_DND_HELP;
      case q.Skl.INVISIBLE:
        return X.Z.Messages.STATUS_INVISIBLE_HELPER;
      default:
        return;
    }
  },
  _ = (0, i.jsx)(i.Fragment, {
    children: ee.map(t => {
      let {
        duration: n,
        label: a
      } = t;
      return (0, i.jsx)(d.MenuItem, {
        id: ''.concat(e, '-').concat(n),
        label: a(),
        action: () => {
          (0, f.oW)(!0, n);
        },
        dontCloseOnAction: !0
      }, n);
    })
  });
return (0, i.jsxs)(i.Fragment, {
  children: [
    en(q.Skl.ONLINE, e, t),
    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
    n ? et(q.Skl.IDLE, e, t, u(q.Skl.IDLE)) : en(q.Skl.IDLE, e, t, u(q.Skl.IDLE)),
    n ? et(q.Skl.DND, e, t, u(q.Skl.DND)) : en(q.Skl.DND, e, t, u(q.Skl.DND)),
    n ? et(q.Skl.INVISIBLE, e, t, u(q.Skl.INVISIBLE)) : en(q.Skl.INVISIBLE, e, t, u(q.Skl.INVISIBLE)),
    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
    r || s ? (0, i.jsx)(d.MenuItem, {
      id: 'quiet-mode',
      'aria-label': 'focus mode',
      className: J.expiringStatusMenuItem,
      keepItemStyles: !0,
      hasSubmenu: !0,
      showIconFirst: !0,
      label: () => (0, i.jsxs)('div', {
        className: J.statusItem,
        children: [
          (0, i.jsx)(d.BellSlashIcon, {
            size: 'xxs',
            className: J.icon
          }),
          (0, i.jsxs)('div', {
            className: J.focusModeTitle,
            children: [
              X.Z.Messages.FOCUS_MODE_TITLE,
              (0, i.jsx)(d.TextBadge, {
                text: s ? X.Z.Messages.FOCUS_MODE_BADGE_ON : c ? X.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : X.Z.Messages.FOCUS_MODE_BADGE_OFF,
                color: s ? l.Z.BRAND_500 : c ? l.Z.RED_400 : l.Z.PRIMARY_500
              })
            ]
          }),
          (0, i.jsx)('div', {
            className: J.description,
            children: s && null != o && '0' !== o ? X.Z.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(o)).toLocaleString(X.Z.getLocale(), {
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })
            }) : X.Z.Messages.FOCUS_MODE_DESCRIPTION
          })
        ]
      }),
      action: () => {
        (0, f.oW)(!s);
      },
      dontCloseOnAction: !0,
      children: _
    }, 'quiet-mode') : null
  ]
});
  }(el, ei), {
ref: ec
  } = (0, _.Z)(), ed = (0, E.Z)(ec);
  a.useEffect(() => {
null == s || s(ec.current);
  }, [
ec,
s
  ]);
  let eu = e => {
  null == n || n(), (0, U.openUserProfileModal)({
    sourceAnalyticsLocations: ea,
    userId: t.id,
    ...e
  });
},
{
  accountPopoutStatusEditEnabled: e_
} = (0, v.K)({
  location: 'AccountProfilePopout'
}),
eE = (0, C.Z)({
  analyticsLocations: ea
}),
eh = (0, f.p)(),
eI = el === q.Skl.DND,
em = (0, z.g)(),
eg = (0, g.o)({
  focusedClassName: J.menuItemFocused,
  customStatus: er,
  analyticsLocations: ea,
  trackUserProfileAction: es
}),
ep = (0, p.Z)({
  id: t.id,
  label: X.Z.Messages.COPY_ID_USER,
  showIconFirst: !0,
  focusedClassName: J.menuItemFocused
}),
eT = (0, c.e7)([H.Z], () => H.Z.hidePersonalInformation);
  return (0, i.jsx)(I.Gt, {
value: ea,
children: (0, i.jsx)(A.Mt, {
  layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
  userId: t.id,
  children: (0, i.jsx)(d.Dialog, {
    ref: ec,
    'aria-label': t.username,
    children: (0, i.jsxs)(M.Z, {
      className: J.themeContainer,
      user: t,
      displayProfile: W,
      profileType: Q.y0.BITE_SIZE,
      children: [
        !e_ && (0, i.jsx)(y.Z, {
          profileType: Q.y0.BITE_SIZE,
          children: (0, i.jsx)(j.Z, {
            userId: t.id,
            onClose: n
          })
        }),
        (0, i.jsxs)('header', {
          className: $.header,
          children: [
            (0, i.jsx)(L.Z, {
              user: t,
              displayProfile: W,
              profileType: Q.y0.BITE_SIZE,
              hasProfileEffect: (null == W ? void 0 : W.profileEffectId) != null
            }),
            (0, i.jsx)(R.Z, {
              user: t,
              displayProfile: W,
              profileType: Q.y0.BITE_SIZE,
              onOpenProfile: V ? void 0 : eu
            }),
            (0, i.jsx)(b.Z, {
              user: t,
              profileType: Q.y0.BITE_SIZE,
              editEnabled: e_,
              onClose: n
            })
          ]
        }),
        (null == W ? void 0 : W.profileEffectId) != null && (0, i.jsx)(N.Z, {
          profileEffectId: null == W ? void 0 : W.profileEffectId,
          isHovering: ed
        }),
        (0, i.jsxs)(d.Scroller, {
          className: J.body,
          children: [
            (0, i.jsx)(D.Z, {
              user: t,
              className: J.username,
              profileType: Q.y0.BITE_SIZE,
              nickname: F.ZP.getName(null, null, t),
              onOpenProfile: eu,
              pronouns: null == W ? void 0 : W.pronouns,
              tags: (0, i.jsx)(O.Z, {
                displayProfile: W,
                profileType: Q.y0.BITE_SIZE,
                onClose: n
              }),
              nicknameIcons: (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(P.Z, {
                    userId: t.id
                  }),
                  (0, i.jsx)(x.Z, {
                    user: t,
                    isHovering: ed
                  })
                ]
              })
            }),
            (0, i.jsx)(k.Z, {
              user: t,
              bio: null == W ? void 0 : W.bio,
              hidePersonalInformation: eT,
              onClose: n
            }),
            (0, i.jsx)(G.Z, {
              user: t,
              onClose: n
            }),
            (0, i.jsxs)('div', {
              className: J.menus,
              children: [
                (0, i.jsx)(M.Z.Overlay, {
                  className: J.menuOverlay,
                  children: (0, i.jsxs)(d.Menu, {
                    navId: 'status',
                    'aria-label': X.Z.Messages.STATUS_MENU_LABEL,
                    hideScroller: !0,
                    className: J.menu,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                      e_ && (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuItem, {
                          id: 'edit-profile',
                          icon: d.PencilIcon,
                          label: X.Z.Messages.EDIT_PROFILE,
                          action: () => {
                            es({
                              action: 'EDIT_PROFILE',
                              analyticsLocations: ea
                            }), eE();
                          },
                          showIconFirst: !0,
                          focusedClassName: J.menuItemFocused,
                          subMenuIconClassName: J.subMenuIcon
                        }, 'edit-profile')
                      }),
                      (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuItem, {
                          id: 'status-picker',
                          label: (0, i.jsxs)('div', {
                            style: {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            },
                            children: [
                              (0, Y.u5)(el),
                              eh || eI ? (0, i.jsx)(d.BellSlashIcon, {
                                size: 'xxs'
                              }) : null
                            ]
                          }),
                          focusedClassName: J.menuItemFocused,
                          subMenuIconClassName: J.subMenuIcon,
                          action: o.tq ? function() {
                            es({
                              action: 'PRESS_SET_STATUS',
                              analyticsLocations: ea
                            }), (0, d.openModalLazy)(() => new Promise(e => {
                              e(e => (0, i.jsx)(d.ModalRoot, {
                                ...e,
                                size: d.ModalSize.SMALL,
                                className: J.modal,
                                'aria-label': X.Z.Messages.SET_STATUS,
                                children: (0, i.jsx)(d.Menu, {
                                  navId: 'status-mobile-web',
                                  variant: 'fixed',
                                  'aria-label': X.Z.Messages.STATUS_MENU_LABEL,
                                  hideScroller: !0,
                                  className: J.statusPickerModalMenu,
                                  onClose: e.onClose,
                                  onSelect: e.onClose,
                                  children: eo
                                })
                              }));
                            }));
                          } : void 0,
                          showIconFirst: !0,
                          icon: e => {
                            let {
                              className: t,
                              isFocused: n
                            } = e;
                            return (0, i.jsx)(d.Status, {
                              status: el,
                              size: 12,
                              className: r()(t, J.mainStatusIcon),
                              color: n ? 'currentColor' : void 0
                            });
                          },
                          children: o.tq ? void 0 : eo
                        }, 'status-picker')
                      }),
                      !e_ && (0, i.jsx)(d.MenuGroup, {
                        children: eg
                      })
                    ]
                  })
                }),
                (0, i.jsx)(M.Z.Overlay, {
                  className: J.menuOverlay,
                  children: (0, i.jsxs)(d.Menu, {
                    navId: 'account',
                    'aria-label': X.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                    hideScroller: !0,
                    className: J.menu,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                      (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuItem, {
                          id: 'switch-account',
                          focusedClassName: J.menuItemFocused,
                          subMenuIconClassName: J.subMenuIcon,
                          label: X.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                          icon: d.UserCircleIcon,
                          showIconFirst: !0,
                          action: () => {
                            es({
                              action: 'PRESS_SWITCH_ACCOUNTS',
                              analyticsLocations: ea
                            }), (0, K.Z)();
                          },
                          children: em
                        })
                      }),
                      (0, i.jsx)(d.MenuGroup, {
                        children: ep
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  })
})
  });
}