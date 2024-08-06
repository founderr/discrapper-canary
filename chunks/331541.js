n.d(t, {
  Z: function() {
return es;
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
  S = n(734934),
  f = n(158238),
  C = n(300284),
  N = n(680295),
  A = n(785717),
  v = n(481046),
  Z = n(27144),
  L = n(318661),
  O = n(78675),
  R = n(741308),
  x = n(899007),
  b = n(549546),
  P = n(438163),
  M = n(483424),
  D = n(681837),
  y = n(502762),
  j = n(530),
  U = n(544989),
  G = n(969205),
  k = n(171368),
  w = n(580512),
  B = n(67152),
  H = n(695346),
  V = n(158776),
  F = n(246946),
  Y = n(70956),
  W = n(5192),
  z = n(51144),
  K = n(246133),
  q = n(474376),
  Q = n(383832),
  X = n(981631),
  J = n(228168),
  $ = n(689938),
  ee = n(483978),
  et = n(335182);
let en = [{
duration: 30 * Y.Z.Millis.MINUTE,
label: () => $.Z.Messages.MUTE_DURATION_30_MINUTES
  },
  {
duration: Y.Z.Millis.HOUR,
label: () => $.Z.Messages.MUTE_DURATION_1_HOUR
  },
  {
duration: 3 * Y.Z.Millis.HOUR,
label: () => $.Z.Messages.MUTE_DURATION_3_HOURS
  },
  {
duration: 8 * Y.Z.Millis.HOUR,
label: () => $.Z.Messages.MUTE_DURATION_8_HOURS
  },
  {
duration: Y.Z.Millis.DAY,
label: () => $.Z.Messages.MUTE_DURATION_24_HOURS
  },
  {
duration: void 0,
label: () => $.Z.Messages.DURATION_FOREVER
  }
];

function ei(e, t, n, a) {
  let s = (0, i.jsx)(i.Fragment, {
children: en.map(a => {
  let {
    duration: s,
    label: r
  } = a;
  return (0, i.jsx)(d.MenuItem, {
    id: ''.concat(e, '-').concat(s),
    label: r(),
    action: () => (0, K.Z)(e, t, n, s),
    dontCloseOnAction: !0
  }, s);
})
  });
  return (0, i.jsx)(d.MenuItem, {
id: e,
className: ee.expiringStatusMenuItem,
keepItemStyles: !0,
hasSubmenu: !0,
label: t => {
  let {
    isFocused: n
  } = t;
  return (0, i.jsxs)('div', {
    className: ee.statusItem,
    children: [
      (0, i.jsx)(d.Status, {
        status: e,
        className: ee.icon,
        size: 10,
        color: n ? 'currentColor' : void 0
      }),
      (0, i.jsx)('div', {
        className: ee.status,
        children: (0, z.u5)(e)
      }),
      null != a && (0, i.jsx)('div', {
        className: ee.description,
        children: a
      })
    ]
  });
},
action: () => (0, K.Z)(e, t, n),
dontCloseOnAction: !0,
children: e !== X.Skl.ONLINE ? s : void 0
  });
}

function ea(e, t, n, a) {
  return (0, i.jsx)(d.MenuItem, {
id: e,
keepItemStyles: !0,
render: t => {
  let {
    isFocused: n
  } = t;
  return (0, i.jsxs)('div', {
    className: ee.statusItem,
    children: [
      (0, i.jsx)(d.Status, {
        status: e,
        className: ee.icon,
        size: 10,
        color: n ? 'currentColor' : void 0
      }),
      (0, i.jsx)('div', {
        className: ee.status,
        children: (0, z.u5)(e)
      }),
      null != a && (0, i.jsx)('div', {
        className: ee.description,
        children: a
      })
    ]
  });
},
action: () => (0, K.Z)(e, t, n),
dontCloseOnAction: !0
  });
}

function es(e) {
  let {
currentUser: t,
onClose: n,
setPopoutRef: s
  } = e, Y = __OVERLAY__, K = (0, L.ZP)(t.id), es = (0, u.O)(), {
analyticsLocations: er
  } = (0, I.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT), el = (0, A.Q1)({
layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
userId: t.id
  }), eo = (0, m.a)(), ec = (0, c.e7)([V.Z], () => V.Z.getStatus(t.id)), ed = function(e, t) {
let n = T.Y.useExperiment({
    location: 'account popout'
  }).expiringStatus,
  a = H.Cr.useSetting(),
  s = (0, S.p)(),
  r = f.e.useExperiment({
    location: 'account popout'
  }).allowQuietMode || s,
  o = H.fv.useSetting(),
  c = e === X.Skl.DND,
  u = t => {
    let n = null != a && '0' !== a ? $.Z.Messages.STATUS_UNTIL.format({
      endTime: new Date(Number(a)).toLocaleString($.Z.getLocale(), {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
      })
    }) : void 0;
    if (e === t && null != n)
      return n;
    switch (t) {
      case X.Skl.DND:
        return r ? $.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : $.Z.Messages.STATUS_DND_HELP;
      case X.Skl.INVISIBLE:
        return $.Z.Messages.STATUS_INVISIBLE_HELPER;
      default:
        return;
    }
  },
  _ = (0, i.jsx)(i.Fragment, {
    children: en.map(t => {
      let {
        duration: n,
        label: a
      } = t;
      return (0, i.jsx)(d.MenuItem, {
        id: ''.concat(e, '-').concat(n),
        label: a(),
        action: () => {
          (0, S.oW)(!0, n);
        },
        dontCloseOnAction: !0
      }, n);
    })
  });
return (0, i.jsxs)(i.Fragment, {
  children: [
    ea(X.Skl.ONLINE, e, t),
    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
    n ? ei(X.Skl.IDLE, e, t, u(X.Skl.IDLE)) : ea(X.Skl.IDLE, e, t, u(X.Skl.IDLE)),
    n ? ei(X.Skl.DND, e, t, u(X.Skl.DND)) : ea(X.Skl.DND, e, t, u(X.Skl.DND)),
    n ? ei(X.Skl.INVISIBLE, e, t, u(X.Skl.INVISIBLE)) : ea(X.Skl.INVISIBLE, e, t, u(X.Skl.INVISIBLE)),
    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
    r || s ? (0, i.jsx)(d.MenuItem, {
      id: 'quiet-mode',
      'aria-label': 'focus mode',
      className: ee.expiringStatusMenuItem,
      keepItemStyles: !0,
      hasSubmenu: !0,
      showIconFirst: !0,
      label: () => (0, i.jsxs)('div', {
        className: ee.statusItem,
        children: [
          (0, i.jsx)(d.BellSlashIcon, {
            size: 'xxs',
            className: ee.icon
          }),
          (0, i.jsxs)('div', {
            className: ee.focusModeTitle,
            children: [
              $.Z.Messages.FOCUS_MODE_TITLE,
              (0, i.jsx)(d.TextBadge, {
                text: s ? $.Z.Messages.FOCUS_MODE_BADGE_ON : c ? $.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : $.Z.Messages.FOCUS_MODE_BADGE_OFF,
                color: s ? l.Z.BRAND_500 : c ? l.Z.RED_400 : l.Z.PRIMARY_500
              })
            ]
          }),
          (0, i.jsx)('div', {
            className: ee.description,
            children: s && null != o && '0' !== o ? $.Z.Messages.STATUS_UNTIL.format({
              endTime: new Date(Number(o)).toLocaleString($.Z.getLocale(), {
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })
            }) : $.Z.Messages.FOCUS_MODE_DESCRIPTION
          })
        ]
      }),
      action: () => {
        (0, S.oW)(!s);
      },
      dontCloseOnAction: !0,
      children: _
    }, 'quiet-mode') : null
  ]
});
  }(ec, es), {
ref: eu
  } = (0, _.Z)(), e_ = (0, E.Z)(eu);
  a.useEffect(() => {
null == s || s(eu.current);
  }, [
eu,
s
  ]);
  let eE = e => {
  null == n || n(), (0, k.openUserProfileModal)({
    sourceAnalyticsLocations: er,
    userId: t.id,
    ...e
  });
},
{
  newActivityCardsEnabled: eh
} = (0, Z.z)({
  location: 'AccountProfilePopout'
}),
{
  accountPopoutStatusEditEnabled: eI
} = (0, v.K)({
  location: 'AccountProfilePopout'
}),
em = (0, C.Z)({
  analyticsLocations: er
}),
eg = (0, S.p)(),
ep = ec === X.Skl.DND,
eT = (0, q.g)(),
eS = (0, g.o)({
  focusedClassName: ee.menuItemFocused,
  customStatus: eo,
  analyticsLocations: er,
  trackUserProfileAction: el
}),
ef = (0, p.Z)({
  id: t.id,
  label: $.Z.Messages.COPY_ID_USER,
  showIconFirst: !0,
  focusedClassName: ee.menuItemFocused
}),
eC = (0, c.e7)([F.Z], () => F.Z.hidePersonalInformation);
  return (0, i.jsx)(I.Gt, {
value: er,
children: (0, i.jsx)(A.Mt, {
  layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
  userId: t.id,
  children: (0, i.jsx)(d.Dialog, {
    ref: eu,
    'aria-label': t.username,
    children: (0, i.jsxs)(y.Z, {
      className: ee.themeContainer,
      user: t,
      displayProfile: K,
      profileType: J.y0.BITE_SIZE,
      children: [
        !eI && (0, i.jsx)(U.Z, {
          profileType: J.y0.BITE_SIZE,
          children: (0, i.jsx)(G.Z, {
            userId: t.id,
            onClose: n
          })
        }),
        (0, i.jsxs)('header', {
          className: et.header,
          children: [
            (0, i.jsx)(O.Z, {
              user: t,
              displayProfile: K,
              profileType: J.y0.BITE_SIZE,
              hasProfileEffect: (null == K ? void 0 : K.profileEffectId) != null
            }),
            (0, i.jsx)(x.Z, {
              user: t,
              displayProfile: K,
              profileType: J.y0.BITE_SIZE,
              onOpenProfile: Y ? void 0 : eE
            }),
            (0, i.jsx)(P.Z, {
              user: t,
              profileType: J.y0.BITE_SIZE,
              editEnabled: eI,
              onClose: n
            })
          ]
        }),
        (null == K ? void 0 : K.profileEffectId) != null && (0, i.jsx)(N.Z, {
          profileEffectId: null == K ? void 0 : K.profileEffectId,
          isHovering: e_
        }),
        (0, i.jsxs)(d.Scroller, {
          className: ee.body,
          children: [
            (0, i.jsx)(j.Z, {
              user: t,
              className: ee.username,
              profileType: J.y0.BITE_SIZE,
              nickname: W.ZP.getName(null, null, t),
              onOpenProfile: eE,
              pronouns: null == K ? void 0 : K.pronouns,
              tags: (0, i.jsx)(R.Z, {
                displayProfile: K,
                profileType: J.y0.BITE_SIZE,
                onClose: n
              }),
              nicknameIcons: (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(D.Z, {
                    userId: t.id
                  }),
                  (0, i.jsx)(b.Z, {
                    user: t,
                    isHovering: e_
                  })
                ]
              })
            }),
            (0, i.jsx)(B.Z, {
              user: t,
              bio: null == K ? void 0 : K.bio,
              hidePersonalInformation: eC,
              onClose: n
            }),
            eh ? (0, i.jsx)(M.Z, {
              user: t,
              currentUser: t,
              onClose: n
            }) : (0, i.jsx)(w.Z, {
              user: t,
              onClose: n
            }),
            (0, i.jsxs)('div', {
              className: ee.menus,
              children: [
                (0, i.jsx)(y.Z.Overlay, {
                  className: ee.menuOverlay,
                  children: (0, i.jsxs)(d.Menu, {
                    navId: 'status',
                    'aria-label': $.Z.Messages.STATUS_MENU_LABEL,
                    hideScroller: !0,
                    className: ee.menu,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                      eI && (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuItem, {
                          id: 'edit-profile',
                          icon: d.PencilIcon,
                          label: $.Z.Messages.EDIT_PROFILE,
                          action: () => {
                            el({
                              action: 'EDIT_PROFILE',
                              analyticsLocations: er
                            }), em();
                          },
                          showIconFirst: !0,
                          focusedClassName: ee.menuItemFocused,
                          subMenuIconClassName: ee.subMenuIcon
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
                              (0, z.u5)(ec),
                              eg || ep ? (0, i.jsx)(d.BellSlashIcon, {
                                size: 'xxs'
                              }) : null
                            ]
                          }),
                          focusedClassName: ee.menuItemFocused,
                          subMenuIconClassName: ee.subMenuIcon,
                          action: o.tq ? function() {
                            el({
                              action: 'PRESS_SET_STATUS',
                              analyticsLocations: er
                            }), (0, d.openModalLazy)(() => new Promise(e => {
                              e(e => (0, i.jsx)(d.ModalRoot, {
                                ...e,
                                size: d.ModalSize.SMALL,
                                className: ee.modal,
                                'aria-label': $.Z.Messages.SET_STATUS,
                                children: (0, i.jsx)(d.Menu, {
                                  navId: 'status-mobile-web',
                                  variant: 'fixed',
                                  'aria-label': $.Z.Messages.STATUS_MENU_LABEL,
                                  hideScroller: !0,
                                  className: ee.statusPickerModalMenu,
                                  onClose: e.onClose,
                                  onSelect: e.onClose,
                                  children: ed
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
                              status: ec,
                              size: 12,
                              className: r()(t, ee.mainStatusIcon),
                              color: n ? 'currentColor' : void 0
                            });
                          },
                          children: o.tq ? void 0 : ed
                        }, 'status-picker')
                      }),
                      !eI && (0, i.jsx)(d.MenuGroup, {
                        children: eS
                      })
                    ]
                  })
                }),
                (0, i.jsx)(y.Z.Overlay, {
                  className: ee.menuOverlay,
                  children: (0, i.jsxs)(d.Menu, {
                    navId: 'account',
                    'aria-label': $.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                    hideScroller: !0,
                    className: ee.menu,
                    onClose: n,
                    onSelect: void 0,
                    children: [
                      (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuItem, {
                          id: 'switch-account',
                          focusedClassName: ee.menuItemFocused,
                          subMenuIconClassName: ee.subMenuIcon,
                          label: $.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                          icon: d.UserCircleIcon,
                          showIconFirst: !0,
                          action: () => {
                            el({
                              action: 'PRESS_SWITCH_ACCOUNTS',
                              analyticsLocations: er
                            }), (0, Q.Z)();
                          },
                          children: eT
                        })
                      }),
                      (0, i.jsx)(d.MenuGroup, {
                        children: ef
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