n.d(t, {
    Z: function () {
        return es;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(722770),
    a = n(873546),
    s = n(852229),
    o = n(442837),
    c = n(481060),
    d = n(788307),
    u = n(2052),
    h = n(393238),
    m = n(727637),
    p = n(100527),
    g = n(906732),
    f = n(676035),
    _ = n(440051),
    E = n(734934),
    I = n(158238),
    C = n(300284),
    v = n(680295),
    T = n(785717),
    N = n(221292),
    S = n(481046),
    A = n(816988),
    b = n(687158),
    x = n(899007),
    Z = n(648052),
    L = n(867176),
    y = n(438163),
    O = n(537006),
    P = n(483424),
    R = n(681837),
    j = n(502762),
    D = n(530),
    M = n(544989),
    w = n(309494),
    k = n(969205),
    U = n(171368),
    G = n(420654),
    B = n(695346),
    H = n(158776),
    V = n(246946),
    F = n(572004),
    z = n(70956),
    Y = n(5192),
    W = n(74538),
    K = n(51144),
    q = n(246133),
    X = n(474376),
    Q = n(435478),
    J = n(383832),
    $ = n(981631),
    ee = n(228168),
    et = n(388032),
    en = n(165858),
    ei = n(653134);
let er = [
    {
        duration: 30 * z.Z.Millis.MINUTE,
        label: () => et.intl.string(et.t.RxJGbG)
    },
    {
        duration: z.Z.Millis.HOUR,
        label: () => et.intl.string(et.t.UMWBZm)
    },
    {
        duration: 3 * z.Z.Millis.HOUR,
        label: () => et.intl.string(et.t.QmYWtr)
    },
    {
        duration: 8 * z.Z.Millis.HOUR,
        label: () => et.intl.string(et.t.EpAXPD)
    },
    {
        duration: z.Z.Millis.DAY,
        label: () => et.intl.string(et.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => et.intl.string(et.t['46dqJS'])
    }
];
function el(e, t, n) {
    let r = (0, i.jsx)(i.Fragment, {
        children: er.map((n) => {
            let { duration: r, label: l } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(r),
                    label: l(),
                    action: () => (0, q.Z)(e, t, void 0, r),
                    dontCloseOnAction: !0
                },
                r
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: en.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: en.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: en.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: en.status,
                        children: (0, K.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: en.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, q.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== $.Skl.ONLINE ? r : void 0
    });
}
function ea(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: en.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: en.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: en.status,
                        children: (0, K.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: en.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, q.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function es(e) {
    var t;
    let { currentUser: z, onClose: q, setPopoutRef: es } = e,
        eo = __OVERLAY__,
        ec = (0, b.ZP)(z.id),
        ed = (0, u.O)(),
        { analyticsLocations: eu } = (0, g.ZP)(p.Z.ACCOUNT_PROFILE_POPOUT),
        eh = (0, T.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: z.id
        }),
        { ref: em } = (0, h.Z)(),
        ep = (0, m.Z)(em);
    r.useEffect(() => {
        null == es || es(em.current);
    }, [em, es]);
    let eg = (0, o.e7)([H.Z], () => H.Z.getStatus(z.id)),
        ef = (0, o.e7)([V.Z], () => V.Z.hidePersonalInformation),
        e_ = (0, E.p)(),
        eE = B.Sb.useSetting(),
        eI = (0, f.a)(),
        eC = (function (e) {
            let t = _.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = B.Cr.useSetting(),
                r = (0, E.p)(),
                a = I.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || r,
                s = B.fv.useSetting(),
                o = e === $.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? et.intl.formatToPlainString(et.t.BWD8fn, {
                                  endTime: new Date(Number(n)).toLocaleString(et.intl.currentLocale, {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case $.Skl.DND:
                            return a ? et.intl.string(et.t.day5Aw) : et.intl.string(et.t.U9Vv19);
                        case $.Skl.INVISIBLE:
                            return et.intl.string(et.t.MqanVF);
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: er.map((t) => {
                        let { duration: n, label: r } = t;
                        return (0, i.jsx)(
                            c.MenuItem,
                            {
                                id: ''.concat(e, '-').concat(n),
                                label: r(),
                                action: () => {
                                    (0, E.oW)(!0, n);
                                },
                                dontCloseOnAction: !0
                            },
                            n
                        );
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    ea($.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? el($.Skl.IDLE, e, d($.Skl.IDLE)) : ea($.Skl.IDLE, e, d($.Skl.IDLE)),
                    t ? el($.Skl.DND, e, d($.Skl.DND)) : ea($.Skl.DND, e, d($.Skl.DND)),
                    t ? el($.Skl.INVISIBLE, e, d($.Skl.INVISIBLE)) : ea($.Skl.INVISIBLE, e, d($.Skl.INVISIBLE)),
                    a || r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                                  (0, i.jsx)(
                                      c.MenuItem,
                                      {
                                          id: 'quiet-mode',
                                          'aria-label': 'focus mode',
                                          className: en.expiringStatusMenuItem,
                                          keepItemStyles: !0,
                                          hasSubmenu: !0,
                                          label: () =>
                                              (0, i.jsxs)('div', {
                                                  className: en.statusItem,
                                                  children: [
                                                      (0, i.jsx)(c.BellSlashIcon, {
                                                          size: 'xxs',
                                                          className: en.icon
                                                      }),
                                                      (0, i.jsxs)('div', {
                                                          className: en.focusModeTitle,
                                                          children: [
                                                              et.intl.string(et.t.gJRnwM),
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: r ? et.intl.string(et.t.ApAu9f) : o ? et.intl.string(et.t.gH3Fra) : et.intl.string(et.t['64pl8/']),
                                                                  color: r ? l.Z.BRAND_500 : o ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: en.description,
                                                          children:
                                                              r && null != s && '0' !== s
                                                                  ? et.intl.formatToPlainString(et.t.BWD8fn, {
                                                                        endTime: new Date(Number(s)).toLocaleString(et.intl.currentLocale, {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : et.intl.string(et.t['Br1q+/'])
                                                      })
                                                  ]
                                              }),
                                          action: () => {
                                              (0, E.oW)(!r);
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
        })(eg),
        ev = (0, X.g)(q),
        eT = (0, C.Z)({ analyticsLocations: eu }),
        { customStatusBubbleEditEnabled: eN } = (0, S.K)({ location: 'AccountProfilePopout' }),
        { dimissibleUpsellsEnabled: eS } = (0, A.u)({ location: 'AccountProfilePopout' }),
        eA = (0, W.I5)(z),
        eb = (e) => {
            null == q || q(),
                (0, U.openUserProfileModal)({
                    sourceAnalyticsLocations: eu,
                    ...eh,
                    ...e
                });
        },
        ex = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: ed,
                        sourceAnalyticsLocations: eu
                    });
            });
        };
    return (0, i.jsx)(g.Gt, {
        value: eu,
        children: (0, i.jsx)(T.Mt, {
            value: eh,
            children: (0, i.jsx)(c.Dialog, {
                ref: em,
                'aria-label': z.username,
                children: (0, i.jsxs)(j.Z, {
                    className: en.themeContainer,
                    user: z,
                    displayProfile: ec,
                    profileType: ee.y0.BITE_SIZE,
                    children: [
                        !eN &&
                            (0, i.jsx)(M.Z, {
                                profileType: ee.y0.BITE_SIZE,
                                children: (0, i.jsx)(k.Z, {
                                    userId: z.id,
                                    onClose: q
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: ei.header,
                            children: [
                                (0, i.jsx)(L.Z, {
                                    user: z,
                                    displayProfile: ec,
                                    profileType: ee.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(x.Z, {
                                    user: z,
                                    displayProfile: ec,
                                    profileType: ee.y0.BITE_SIZE,
                                    onOpenProfile: eo ? void 0 : eb
                                }),
                                (0, i.jsx)(y.Z, {
                                    user: z,
                                    profileType: ee.y0.BITE_SIZE,
                                    onCloseProfile: q
                                })
                            ]
                        }),
                        (null == ec ? void 0 : ec.profileEffectId) != null &&
                            (0, i.jsx)(v.Z, {
                                profileEffectId: null == ec ? void 0 : ec.profileEffectId,
                                isHovering: ep
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: en.body,
                            children: [
                                (0, i.jsx)(D.Z, {
                                    user: z,
                                    className: en.username,
                                    profileType: ee.y0.BITE_SIZE,
                                    nickname: Y.ZP.getName(null, null, z),
                                    onOpenProfile: eo ? void 0 : eb,
                                    pronouns: null == ec ? void 0 : ec.pronouns,
                                    tags: (0, i.jsx)(Z.Z, {
                                        displayProfile: ec,
                                        profileType: ee.y0.BITE_SIZE,
                                        onClose: q
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(R.Z, { userId: z.id }),
                                            (0, i.jsx)(w.Z, {
                                                user: z,
                                                isHovering: ep
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(G.Z, {
                                    user: z,
                                    bio: null == ec ? void 0 : ec.bio,
                                    hidePersonalInformation: ef,
                                    onClose: q
                                }),
                                eS &&
                                    (0, i.jsx)(O.Z, {
                                        isPremiumUser: eA,
                                        onInteraction: q
                                    }),
                                (0, i.jsx)(P.Z, {
                                    user: z,
                                    currentUser: z,
                                    onClose: q
                                }),
                                (0, i.jsxs)('div', {
                                    className: en.menus,
                                    children: [
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: en.menuOverlay,
                                            children: (0, i.jsxs)(Q.PB, {
                                                id: 'profile-'.concat(z.id),
                                                children: [
                                                    eN &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(Q.Mv, {
                                                                    id: 'edit-profile',
                                                                    action: 'EDIT_PROFILE',
                                                                    label: et.intl.string(et.t.s5vZlZ),
                                                                    icon: c.PencilIcon,
                                                                    onClick: () => {
                                                                        eT(), q();
                                                                    }
                                                                }),
                                                                (0, i.jsx)('div', { className: en.menuDivider })
                                                            ]
                                                        }),
                                                    (0, i.jsx)(Q.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, K.u5)(eg)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: eg,
                                                                size: 12
                                                            }),
                                                        hint: (e_ || eg === $.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: a.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(Q.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: en.statusPickerModalMenu,
                                                                      'aria-label': et.intl.string(et.t.E13trK),
                                                                      onClose: t,
                                                                      children: eC
                                                                  });
                                                              },
                                                        onClick: a.tq
                                                            ? () => {
                                                                  q(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': et.intl.string(et.t['3Uj+2t']),
                                                                                          className: en.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': et.intl.string(et.t.E13trK),
                                                                                              className: en.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: eC
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    !eN &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: en.menuDivider }),
                                                                null == eI
                                                                    ? (0, i.jsx)(Q.Mv, {
                                                                          id: 'add-custom-status',
                                                                          action: 'PRESS_ADD_CUSTOM_STATUS',
                                                                          label: et.intl.string(et.t.ezAcPz),
                                                                          icon: () => (0, i.jsx)('div', { className: en.customEmojiPlaceholder }),
                                                                          onClick: () => {
                                                                              q(), ex();
                                                                          }
                                                                      })
                                                                    : (0, i.jsx)(Q.Mv, {
                                                                          id: 'edit-custom-status',
                                                                          action: 'PRESS_EDIT_CUSTOM_STATUS',
                                                                          label: et.intl.string(et.t['d/HLjo']),
                                                                          icon: () =>
                                                                              null != eI.emoji
                                                                                  ? (0, i.jsx)(d.Iv, {
                                                                                        emoji: eI.emoji,
                                                                                        animate: !0,
                                                                                        hideTooltip: !0
                                                                                    })
                                                                                  : null,
                                                                          hint: (0, i.jsx)(c.Clickable, {
                                                                              tabIndex: -1,
                                                                              className: en.clearCustomStatusHint,
                                                                              onClick: (e) => {
                                                                                  e.stopPropagation(),
                                                                                      (0, N.pQ)({
                                                                                          action: 'PRESS_CLEAR_CUSTOM_STATUS',
                                                                                          analyticsLocations: eu
                                                                                      }),
                                                                                      B.Ok.updateSetting(void 0);
                                                                              },
                                                                              children: (0, i.jsx)(c.CircleXIcon, {
                                                                                  size: 'sm',
                                                                                  color: 'currentColor'
                                                                              })
                                                                          }),
                                                                          onClick: () => {
                                                                              q(), ex();
                                                                          }
                                                                      })
                                                            ]
                                                        })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: en.menuOverlay,
                                            children: (0, i.jsxs)(Q.PB, {
                                                id: 'account-'.concat(z.id),
                                                children: [
                                                    (0, i.jsx)(Q.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: et.intl.string(et.t.oMNyYG),
                                                        onClick: () => {
                                                            q(), (0, J.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(Q.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': et.intl.string(et.t.wFhVqK),
                                                                onClose: t,
                                                                children: ev
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        F.wS &&
                                                        eE &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: en.menuDivider }),
                                                                (0, i.jsx)(Q.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: c.IdIcon,
                                                                    label: et.intl.string(et.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, s.J)(z.id), q();
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
