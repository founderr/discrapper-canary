n.d(t, {
    Z: function () {
        return ec;
    }
});
var i = n(200651),
    a = n(192379),
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
    I = n(335131),
    p = n(436774),
    g = n(676035),
    T = n(440051),
    f = n(734934),
    C = n(158238),
    S = n(759198),
    N = n(300284),
    A = n(680295),
    v = n(703656),
    Z = n(785717),
    L = n(221292),
    R = n(481046),
    O = n(687158),
    x = n(899007),
    b = n(648052),
    M = n(867176),
    P = n(438163),
    D = n(483424),
    y = n(681837),
    j = n(502762),
    U = n(530),
    G = n(544989),
    w = n(309494),
    k = n(969205),
    B = n(171368),
    H = n(420654),
    V = n(695346),
    F = n(158776),
    Y = n(246946),
    z = n(572004),
    W = n(70956),
    K = n(5192),
    q = n(111361),
    Q = n(51144),
    X = n(246133),
    J = n(474376),
    $ = n(435478),
    ee = n(383832),
    et = n(981631),
    en = n(228168),
    ei = n(689938),
    ea = n(217593),
    es = n(451563);
let er = [
    {
        duration: 30 * W.Z.Millis.MINUTE,
        label: () => ei.Z.Messages.MUTE_DURATION_30_MINUTES
    },
    {
        duration: W.Z.Millis.HOUR,
        label: () => ei.Z.Messages.MUTE_DURATION_1_HOUR
    },
    {
        duration: 3 * W.Z.Millis.HOUR,
        label: () => ei.Z.Messages.MUTE_DURATION_3_HOURS
    },
    {
        duration: 8 * W.Z.Millis.HOUR,
        label: () => ei.Z.Messages.MUTE_DURATION_8_HOURS
    },
    {
        duration: W.Z.Millis.DAY,
        label: () => ei.Z.Messages.MUTE_DURATION_24_HOURS
    },
    {
        duration: void 0,
        label: () => ei.Z.Messages.DURATION_FOREVER
    }
];
function el(e, t, n) {
    let a = (0, i.jsx)(i.Fragment, {
        children: er.map((n) => {
            let { duration: a, label: s } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(a),
                    label: s(),
                    action: () => (0, X.Z)(e, t, void 0, a),
                    dontCloseOnAction: !0
                },
                a
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: ea.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: a } = t;
            return (0, i.jsxs)('div', {
                className: ea.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: ea.icon,
                        size: 10,
                        color: a ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: ea.status,
                        children: (0, Q.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: ea.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, X.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== et.Skl.ONLINE ? a : void 0
    });
}
function eo(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: a } = t;
            return (0, i.jsxs)('div', {
                className: ea.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: ea.icon,
                        size: 10,
                        color: a ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: ea.status,
                        children: (0, Q.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: ea.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, X.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function ec(e) {
    var t;
    let { currentUser: W, onClose: X, setPopoutRef: ec } = e,
        ed = __OVERLAY__,
        eu = (0, O.ZP)(W.id),
        e_ = (0, u.O)(),
        { analyticsLocations: eE } = (0, m.ZP)(h.Z.ACCOUNT_PROFILE_POPOUT),
        eh = (0, Z.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: W.id
        }),
        { ref: em } = (0, _.Z)(),
        eI = (0, E.Z)(em);
    a.useEffect(() => {
        null == ec || ec(em.current);
    }, [em, ec]);
    let ep = (0, o.e7)([F.Z], () => F.Z.getStatus(W.id)),
        eg = (0, o.e7)([Y.Z], () => Y.Z.hidePersonalInformation),
        eT = (0, f.p)(),
        ef = V.Sb.useSetting(),
        eC = (0, g.a)(),
        eS = (function (e) {
            let t = T.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = V.Cr.useSetting(),
                a = (0, f.p)(),
                r = C.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || a,
                l = V.fv.useSetting(),
                o = e === et.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? ei.Z.Messages.STATUS_UNTIL.format({
                                  endTime: new Date(Number(n)).toLocaleString(ei.Z.getLocale(), {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case et.Skl.DND:
                            return r ? ei.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : ei.Z.Messages.STATUS_DND_HELP;
                        case et.Skl.INVISIBLE:
                            return ei.Z.Messages.STATUS_INVISIBLE_HELPER;
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: er.map((t) => {
                        let { duration: n, label: a } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: a(),
                                action: () => {
                                    (0, f.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    eo(et.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? el(et.Skl.IDLE, e, d(et.Skl.IDLE)) : eo(et.Skl.IDLE, e, d(et.Skl.IDLE)),
                    t ? el(et.Skl.DND, e, d(et.Skl.DND)) : eo(et.Skl.DND, e, d(et.Skl.DND)),
                    t ? el(et.Skl.INVISIBLE, e, d(et.Skl.INVISIBLE)) : eo(et.Skl.INVISIBLE, e, d(et.Skl.INVISIBLE)),
                    r || a
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: ea.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: ea.statusItem,
                                                  children: [
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: ea.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: ea.focusModeTitle,
                                                          children: [
                                                              ei.Z.Messages.FOCUS_MODE_TITLE,
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: a ? ei.Z.Messages.FOCUS_MODE_BADGE_ON : o ? ei.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : ei.Z.Messages.FOCUS_MODE_BADGE_OFF,
                                                                  color: a ? s.Z.BRAND_500 : o ? s.Z.RED_400 : s.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: ea.description,
                                                          children:
                                                              a && null != l && '0' !== l
                                                                  ? ei.Z.Messages.STATUS_UNTIL.format({
                                                                        endTime: new Date(Number(l)).toLocaleString(ei.Z.getLocale(), {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : ei.Z.Messages.FOCUS_MODE_DESCRIPTION
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, f.oW)(!a);
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
        })(ep),
        eN = (0, J.g)(X),
        eA = (0, N.Z)({ analyticsLocations: eE }),
        { customStatusBubbleEditEnabled: ev } = (0, R.K)({ location: 'AccountProfilePopout' }),
        eZ = (0, q.I5)(W),
        eL = (e) => {
            null == X || X(),
                (0, B.openUserProfileModal)({
                    sourceAnalyticsLocations: eE,
                    ...eh,
                    ...e
                });
        },
        eR = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: e_,
                        sourceAnalyticsLocations: eE
                    });
            });
        },
        eO = () => {
            (0, v.uL)(et.Z5c.APPLICATION_STORE), X();
        };
    return (0, i.jsx)(m.Gt, {
        value: eE,
        children: (0, i.jsx)(Z.Mt, {
            value: eh,
            children: (0, i.jsx)(c.Dialog, {
                ref: em,
                'aria-label': W.username,
                children: (0, i.jsxs)(j.Z, {
                    className: ea.themeContainer,
                    user: W,
                    displayProfile: eu,
                    profileType: en.y0.BITE_SIZE,
                    children: [
                        !ev &&
                            (0, i.jsx)(G.Z, {
                                profileType: en.y0.BITE_SIZE,
                                children: (0, i.jsx)(k.Z, {
                                    userId: W.id,
                                    onClose: X
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: es.header,
                            children: [
                                (0, i.jsx)(M.Z, {
                                    user: W,
                                    displayProfile: eu,
                                    profileType: en.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(x.Z, {
                                    user: W,
                                    displayProfile: eu,
                                    profileType: en.y0.BITE_SIZE,
                                    onOpenProfile: ed ? void 0 : eL
                                }),
                                (0, i.jsx)(P.Z, {
                                    user: W,
                                    profileType: en.y0.BITE_SIZE,
                                    onCloseProfile: X
                                })
                            ]
                        }),
                        (null == eu ? void 0 : eu.profileEffectId) != null &&
                            (0, i.jsx)(A.Z, {
                                profileEffectId: null == eu ? void 0 : eu.profileEffectId,
                                isHovering: eI
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: ea.body,
                            children: [
                                (0, i.jsx)(U.Z, {
                                    user: W,
                                    className: ea.username,
                                    profileType: en.y0.BITE_SIZE,
                                    nickname: K.ZP.getName(null, null, W),
                                    onOpenProfile: ed ? void 0 : eL,
                                    pronouns: null == eu ? void 0 : eu.pronouns,
                                    tags: (0, i.jsx)(b.Z, {
                                        displayProfile: eu,
                                        profileType: en.y0.BITE_SIZE,
                                        onClose: X
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(y.Z, { userId: W.id }),
                                            (0, i.jsx)(w.Z, {
                                                user: W,
                                                isHovering: eI
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(H.Z, {
                                    user: W,
                                    bio: null == eu ? void 0 : eu.bio,
                                    hidePersonalInformation: eg,
                                    onClose: X
                                }),
                                (0, i.jsx)(D.Z, {
                                    user: W,
                                    currentUser: W,
                                    onClose: X
                                }),
                                (0, i.jsxs)('div', {
                                    className: ea.menus,
                                    children: [
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: ea.menuOverlay,
                                            children: (0, i.jsxs)($.PB, {
                                                id: 'profile-'.concat(W.id),
                                                children: [
                                                    ev &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)($.Mv, {
                                                                    id: 'edit-profile',
                                                                    action: 'EDIT_PROFILE',
                                                                    label: ei.Z.Messages.EDIT_PROFILE,
                                                                    icon: c.PencilIcon,
                                                                    onClick: () => {
                                                                        eA(), X();
                                                                    }
                                                                }),
                                                                (0, i.jsx)('div', { className: ea.menuDivider })
                                                            ]
                                                        }),
                                                    (0, i.jsx)($.Mv, {
                                                        id: 'shop',
                                                        action: en.yM.VISIT_SHOP,
                                                        label: ei.Z.Messages.USER_PROFILE_ENTRY_POINTS_SHOP,
                                                        icon: c.ShopIcon,
                                                        onClick: () => {
                                                            (0, I.mK)({
                                                                analyticsLocations: eE,
                                                                openInLayer: !1,
                                                                analyticsSource: h.Z.ACCOUNT_PROFILE_POPOUT
                                                            }),
                                                                X();
                                                        }
                                                    }),
                                                    (0, i.jsx)('div', { className: ea.menuDivider }),
                                                    eZ
                                                        ? (0, i.jsx)($.Mv, {
                                                              id: 'view-premium-perks',
                                                              action: en.yM.VIEW_PREMIUM_PERKS,
                                                              label: ei.Z.Messages.USER_PROFILE_ENTRY_POINTS_VIEW_PREMIUM_PERKS,
                                                              icon: c.NitroWheelIcon,
                                                              onClick: eO
                                                          })
                                                        : (0, i.jsx)($.Mv, {
                                                              id: 'get-premium',
                                                              action: en.yM.GET_PREMIUM,
                                                              label: (0, i.jsx)(S.Z, {
                                                                  variant: 'text-sm/medium',
                                                                  children: ei.Z.Messages.USER_PROFILE_ENTRY_POINTS_GET_PREMIUM
                                                              }),
                                                              icon: () =>
                                                                  (0, i.jsx)(c.NitroWheelIcon, {
                                                                      size: 'xs',
                                                                      color: p.JX.PREMIUM_TIER_2
                                                                  }),
                                                              onClick: eO
                                                          })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: ea.menuOverlay,
                                            children: (0, i.jsxs)($.PB, {
                                                id: 'account-'.concat(W.id),
                                                children: [
                                                    (0, i.jsx)($.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, Q.u5)(ep)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: ep,
                                                                size: 12
                                                            }),
                                                        hint: (eT || ep === et.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: r.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)($.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: ea.statusPickerModalMenu,
                                                                      'aria-label': ei.Z.Messages.STATUS_MENU_LABEL,
                                                                      onClose: t,
                                                                      children: eS
                                                                  });
                                                              },
                                                        onClick: r.tq
                                                            ? () => {
                                                                  X(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': ei.Z.Messages.SET_STATUS,
                                                                                          className: ea.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': ei.Z.Messages.STATUS_MENU_LABEL,
                                                                                              className: ea.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: eS
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    !ev &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: ea.menuDivider }),
                                                                null == eC
                                                                    ? (0, i.jsx)($.Mv, {
                                                                          id: 'add-custom-status',
                                                                          action: 'PRESS_ADD_CUSTOM_STATUS',
                                                                          label: ei.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS_CTA,
                                                                          icon: () => (0, i.jsx)('div', { className: ea.customEmojiPlaceholder }),
                                                                          onClick: () => {
                                                                              X(), eR();
                                                                          }
                                                                      })
                                                                    : (0, i.jsx)($.Mv, {
                                                                          id: 'edit-custom-status',
                                                                          action: 'PRESS_EDIT_CUSTOM_STATUS',
                                                                          label: ei.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_PLACEHOLDER,
                                                                          icon: () =>
                                                                              null != eC.emoji
                                                                                  ? (0, i.jsx)(d.Iv, {
                                                                                        emoji: eC.emoji,
                                                                                        animate: !0,
                                                                                        hideTooltip: !0
                                                                                    })
                                                                                  : null,
                                                                          hint: (0, i.jsx)(c.Clickable, {
                                                                              tabIndex: -1,
                                                                              className: ea.clearCustomStatusHint,
                                                                              onClick: (e) => {
                                                                                  e.stopPropagation(),
                                                                                      (0, L.pQ)({
                                                                                          action: 'PRESS_CLEAR_CUSTOM_STATUS',
                                                                                          analyticsLocations: eE
                                                                                      }),
                                                                                      V.Ok.updateSetting(void 0);
                                                                              },
                                                                              children: (0, i.jsx)(c.CircleXIcon, {
                                                                                  size: 'sm',
                                                                                  color: 'currentColor'
                                                                              })
                                                                          }),
                                                                          onClick: () => {
                                                                              X(), eR();
                                                                          }
                                                                      })
                                                            ]
                                                        }),
                                                    (0, i.jsx)('div', { className: ea.menuDivider }),
                                                    (0, i.jsx)($.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: ei.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                                                        onClick: () => {
                                                            X(), (0, ee.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)($.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': ei.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                                                                onClose: t,
                                                                children: eN
                                                            });
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        !__OVERLAY__ &&
                                            z.wS &&
                                            ef &&
                                            (0, i.jsx)(j.Z.Overlay, {
                                                className: ea.menuOverlay,
                                                children: (0, i.jsx)($.PB, {
                                                    id: 'dev-'.concat(W.id),
                                                    children: (0, i.jsx)($.Mv, {
                                                        id: 'copy-user-id',
                                                        action: 'COPY_USER_ID',
                                                        icon: c.IdIcon,
                                                        label: ei.Z.Messages.COPY_ID_USER,
                                                        onClick: () => {
                                                            (0, l.J)(W.id), X();
                                                        }
                                                    })
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
