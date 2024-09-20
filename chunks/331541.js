n.d(t, {
    Z: function () {
        return ea;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(722770),
    r = n(873546),
    l = n(852229),
    o = n(442837),
    c = n(481060),
    d = n(788307),
    u = n(2052),
    _ = n(393238),
    E = n(727637),
    h = n(100527),
    m = n(906732),
    I = n(676035),
    g = n(440051),
    p = n(734934),
    T = n(158238),
    S = n(300284),
    f = n(680295),
    C = n(785717),
    N = n(221292),
    A = n(481046),
    v = n(687158),
    L = n(899007),
    Z = n(648052),
    R = n(867176),
    O = n(438163),
    x = n(483424),
    b = n(681837),
    P = n(502762),
    M = n(530),
    D = n(544989),
    y = n(309494),
    j = n(969205),
    U = n(171368),
    G = n(420654),
    k = n(695346),
    w = n(158776),
    B = n(246946),
    H = n(572004),
    V = n(70956),
    F = n(5192),
    Y = n(51144),
    W = n(246133),
    z = n(474376),
    K = n(435478),
    q = n(383832),
    Q = n(981631),
    X = n(228168),
    J = n(689938),
    $ = n(217593),
    ee = n(451563);
let et = [
    {
        duration: 30 * V.Z.Millis.MINUTE,
        label: () => J.Z.Messages.MUTE_DURATION_30_MINUTES
    },
    {
        duration: V.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_1_HOUR
    },
    {
        duration: 3 * V.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_3_HOURS
    },
    {
        duration: 8 * V.Z.Millis.HOUR,
        label: () => J.Z.Messages.MUTE_DURATION_8_HOURS
    },
    {
        duration: V.Z.Millis.DAY,
        label: () => J.Z.Messages.MUTE_DURATION_24_HOURS
    },
    {
        duration: void 0,
        label: () => J.Z.Messages.DURATION_FOREVER
    }
];
function en(e, t, n) {
    let a = (0, i.jsx)(i.Fragment, {
        children: et.map((n) => {
            let { duration: a, label: s } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(a),
                    label: s(),
                    action: () => (0, W.Z)(e, t, void 0, a),
                    dontCloseOnAction: !0
                },
                a
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: $.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: a } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: a ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, Y.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, W.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== Q.Skl.ONLINE ? a : void 0
    });
}
function ei(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: a } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: a ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, Y.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, W.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function ea(e) {
    var t;
    let { currentUser: V, onClose: W, setPopoutRef: ea } = e,
        es = __OVERLAY__,
        er = (0, v.ZP)(V.id),
        el = (0, u.O)(),
        { analyticsLocations: eo } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        ec = (0, C.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: V.id
        }),
        { ref: ed } = (0, _.Z)(),
        eu = (0, E.Z)(ed);
    a.useEffect(() => {
        null == ea || ea(ed.current);
    }, [ed, ea]);
    let e_ = (0, o.e7)([w.Z], () => w.Z.getStatus(V.id)),
        eE = (0, o.e7)([B.Z], () => B.Z.hidePersonalInformation),
        eh = (0, p.p)(),
        em = k.Sb.useSetting(),
        eI = (0, I.a)(),
        eg = (function (e) {
            let t = g.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = k.Cr.useSetting(),
                a = (0, p.p)(),
                r = T.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || a,
                l = k.fv.useSetting(),
                o = e === Q.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? J.Z.Messages.STATUS_UNTIL.format({
                                  endTime: new Date(Number(n)).toLocaleString(J.Z.getLocale(), {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case Q.Skl.DND:
                            return r ? J.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : J.Z.Messages.STATUS_DND_HELP;
                        case Q.Skl.INVISIBLE:
                            return J.Z.Messages.STATUS_INVISIBLE_HELPER;
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: et.map((t) => {
                        let { duration: n, label: a } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: a(),
                                action: () => {
                                    (0, p.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    ei(Q.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? en(Q.Skl.IDLE, e, d(Q.Skl.IDLE)) : ei(Q.Skl.IDLE, e, d(Q.Skl.IDLE)),
                    t ? en(Q.Skl.DND, e, d(Q.Skl.DND)) : ei(Q.Skl.DND, e, d(Q.Skl.DND)),
                    t ? en(Q.Skl.INVISIBLE, e, d(Q.Skl.INVISIBLE)) : ei(Q.Skl.INVISIBLE, e, d(Q.Skl.INVISIBLE)),
                    r || a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: $.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: $.statusItem,
                                                  children: [
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: $.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: $.focusModeTitle,
                                                          children: [
                                                              J.Z.Messages.FOCUS_MODE_TITLE,
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: a ? J.Z.Messages.FOCUS_MODE_BADGE_ON : o ? J.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : J.Z.Messages.FOCUS_MODE_BADGE_OFF,
                                                                  color: a ? s.Z.BRAND_500 : o ? s.Z.RED_400 : s.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: $.description,
                                                          children:
                                                              a && null != l && '0' !== l
                                                                  ? J.Z.Messages.STATUS_UNTIL.format({
                                                                        endTime: new Date(Number(l)).toLocaleString(J.Z.getLocale(), {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : J.Z.Messages.FOCUS_MODE_DESCRIPTION
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, p.oW)(!a);
                                          },
                                          dontCloseOnAction: !0,
                                          children: u
                                      },
                                      'quiet-mode'
                                  )
                              ]
                          })
                        : null
                ]
            });
        })(e_),
        ep = (0, z.g)(W),
        eT = (0, S.Z)({ analyticsLocations: eo }),
        { customStatusBubbleEditEnabled: eS } = (0, A.K)({ location: 'AccountProfilePopout' }),
        ef = (e) => {
            null == W || W(),
                (0, U.openUserProfileModal)({
                    sourceAnalyticsLocations: eo,
                    ...ec,
                    ...e
                });
        },
        eC = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: el,
                        sourceAnalyticsLocations: eo
                    });
            });
        };
    return (0, i.jsx)(m.Gt, {
        value: eo,
        children: (0, i.jsx)(C.Mt, {
            value: ec,
            children: (0, i.jsx)(c.Dialog, {
                ref: ed,
                'aria-label': V.username,
                children: (0, i.jsxs)(P.Z, {
                    className: $.themeContainer,
                    user: V,
                    displayProfile: er,
                    profileType: X.y0.BITE_SIZE,
                    children: [
                        !eS &&
                            (0, i.jsx)(D.Z, {
                                profileType: X.y0.BITE_SIZE,
                                children: (0, i.jsx)(j.Z, {
                                    userId: V.id,
                                    onClose: W
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: ee.header,
                            children: [
                                (0, i.jsx)(R.Z, {
                                    user: V,
                                    displayProfile: er,
                                    profileType: X.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: V,
                                    displayProfile: er,
                                    profileType: X.y0.BITE_SIZE,
                                    onOpenProfile: es ? void 0 : ef
                                }),
                                (0, i.jsx)(O.Z, {
                                    user: V,
                                    profileType: X.y0.BITE_SIZE,
                                    onClose: W
                                })
                            ]
                        }),
                        (null == er ? void 0 : er.profileEffectId) != null &&
                            (0, i.jsx)(f.Z, {
                                profileEffectId: null == er ? void 0 : er.profileEffectId,
                                isHovering: eu
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: $.body,
                            children: [
                                (0, i.jsx)(M.Z, {
                                    user: V,
                                    className: $.username,
                                    profileType: X.y0.BITE_SIZE,
                                    nickname: F.ZP.getName(null, null, V),
                                    onOpenProfile: es ? void 0 : ef,
                                    pronouns: null == er ? void 0 : er.pronouns,
                                    tags: (0, i.jsx)(Z.Z, {
                                        displayProfile: er,
                                        profileType: X.y0.BITE_SIZE,
                                        onClose: W
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(b.Z, { userId: V.id }),
                                            (0, i.jsx)(y.Z, {
                                                user: V,
                                                isHovering: eu
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(G.Z, {
                                    user: V,
                                    bio: null == er ? void 0 : er.bio,
                                    hidePersonalInformation: eE,
                                    onClose: W
                                }),
                                (0, i.jsx)(x.Z, {
                                    user: V,
                                    currentUser: V,
                                    onClose: W
                                }),
                                (0, i.jsxs)('div', {
                                    className: $.menus,
                                    children: [
                                        (0, i.jsx)(P.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(K.PB, {
                                                id: 'profile-'.concat(V.id),
                                                children: [
                                                    eS &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(K.Mv, {
                                                                    id: 'edit-profile',
                                                                    action: 'EDIT_PROFILE',
                                                                    label: J.Z.Messages.EDIT_PROFILE,
                                                                    icon: c.PencilIcon,
                                                                    onClick: () => {
                                                                        eT(), W();
                                                                    }
                                                                }),
                                                                (0, i.jsx)('div', { className: $.menuDivider })
                                                            ]
                                                        }),
                                                    (0, i.jsx)(K.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, Y.u5)(e_)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: e_,
                                                                size: 12
                                                            }),
                                                        hint: (eh || e_ === Q.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(K.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: $.statusPickerModalMenu,
                                                                      'aria-label': J.Z.Messages.STATUS_MENU_LABEL,
                                                                      onClose: t,
                                                                      children: eg
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  W(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': J.Z.Messages.SET_STATUS,
                                                                                          className: $.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': J.Z.Messages.STATUS_MENU_LABEL,
                                                                                              className: $.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: eg
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    !eS &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: $.menuDivider }),
                                                                null == eI
                                                                    ? (0, i.jsx)(K.Mv, {
                                                                          id: 'add-custom-status',
                                                                          action: 'PRESS_ADD_CUSTOM_STATUS',
                                                                          label: J.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
                                                                          icon: () => (0, i.jsx)('div', { className: $.customEmojiPlaceholder }),
                                                                          onClick: () => {
                                                                              W(), eC();
                                                                          }
                                                                      })
                                                                    : (0, i.jsx)(K.Mv, {
                                                                          id: 'edit-custom-status',
                                                                          action: 'PRESS_EDIT_CUSTOM_STATUS',
                                                                          label: J.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
                                                                          icon: () =>
                                                                              null != eI.emoji
                                                                                  ? (0, i.jsx)(d.I, {
                                                                                        emoji: eI.emoji,
                                                                                        animate: !0,
                                                                                        hideTooltip: !0
                                                                                    })
                                                                                  : null,
                                                                          hint: (0, i.jsx)(c.Clickable, {
                                                                              tabIndex: -1,
                                                                              className: $.clearCustomStatusHint,
                                                                              onClick: (e) => {
                                                                                  e.stopPropagation(),
                                                                                      (0, N.pQ)({
                                                                                          action: 'PRESS_CLEAR_CUSTOM_STATUS',
                                                                                          analyticsLocations: eo
                                                                                      }),
                                                                                      k.Ok.updateSetting(void 0);
                                                                              },
                                                                              children: (0, i.jsx)(c.CircleXIcon, {
                                                                                  size: 'sm',
                                                                                  color: 'currentColor'
                                                                              })
                                                                          }),
                                                                          onClick: () => {
                                                                              W(), eC();
                                                                          }
                                                                      })
                                                            ]
                                                        })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(P.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(K.PB, {
                                                id: 'account-'.concat(V.id),
                                                children: [
                                                    (0, i.jsx)(K.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: J.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                                                        onClick: () => {
                                                            W(), (0, q.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(K.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': J.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                                                                onClose: t,
                                                                children: ep
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        H.wS &&
                                                        em &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: $.menuDivider }),
                                                                (0, i.jsx)(K.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: c.IdIcon,
                                                                    label: J.Z.Messages.COPY_ID_USER,
                                                                    onClick: () => {
                                                                        (0, l.J)(V.id), W();
                                                                    }
                                                                })
                                                            ]
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
