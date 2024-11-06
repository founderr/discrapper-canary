n.d(t, {
    Z: function () {
        return er;
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
    S = n(785717),
    N = n(221292),
    T = n(481046),
    x = n(687158),
    A = n(899007),
    b = n(648052),
    Z = n(867176),
    y = n(438163),
    L = n(483424),
    R = n(681837),
    j = n(502762),
    O = n(530),
    P = n(544989),
    D = n(309494),
    M = n(969205),
    w = n(171368),
    k = n(420654),
    U = n(695346),
    G = n(158776),
    B = n(246946),
    H = n(572004),
    V = n(70956),
    F = n(5192),
    z = n(51144),
    Y = n(246133),
    W = n(474376),
    K = n(435478),
    q = n(383832),
    X = n(981631),
    Q = n(228168),
    J = n(388032),
    $ = n(217593),
    ee = n(451563);
let et = [
    {
        duration: 30 * V.Z.Millis.MINUTE,
        label: () => J.intl.string(J.t.RxJGbG)
    },
    {
        duration: V.Z.Millis.HOUR,
        label: () => J.intl.string(J.t.UMWBZm)
    },
    {
        duration: 3 * V.Z.Millis.HOUR,
        label: () => J.intl.string(J.t.QmYWtr)
    },
    {
        duration: 8 * V.Z.Millis.HOUR,
        label: () => J.intl.string(J.t.EpAXPD)
    },
    {
        duration: V.Z.Millis.DAY,
        label: () => J.intl.string(J.t['755t4u'])
    },
    {
        duration: void 0,
        label: () => J.intl.string(J.t['46dqJS'])
    }
];
function en(e, t, n) {
    let r = (0, i.jsx)(i.Fragment, {
        children: et.map((n) => {
            let { duration: r, label: l } = n;
            return (0, i.jsx)(
                c.MenuItem,
                {
                    id: ''.concat(e, '-').concat(r),
                    label: l(),
                    action: () => (0, Y.Z)(e, t, void 0, r),
                    dontCloseOnAction: !0
                },
                r
            );
        })
    });
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        className: $.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, z.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, Y.Z)(e, t),
        dontCloseOnAction: !0,
        children: e !== X.Skl.ONLINE ? r : void 0
    });
}
function ei(e, t, n) {
    return (0, i.jsx)(c.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: (t) => {
            let { isFocused: r } = t;
            return (0, i.jsxs)('div', {
                className: $.statusItem,
                children: [
                    (0, i.jsx)(c.Status, {
                        status: e,
                        className: $.icon,
                        size: 10,
                        color: r ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: $.status,
                        children: (0, z.u5)(e)
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: $.description,
                            children: n
                        })
                ]
            });
        },
        action: () => (0, Y.Z)(e, t),
        dontCloseOnAction: !0
    });
}
function er(e) {
    var t;
    let { currentUser: V, onClose: Y, setPopoutRef: er } = e,
        el = __OVERLAY__,
        ea = (0, x.ZP)(V.id),
        es = (0, u.O)(),
        { analyticsLocations: eo } = (0, g.ZP)(p.Z.ACCOUNT_PROFILE_POPOUT),
        ec = (0, S.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: V.id
        }),
        { ref: ed } = (0, h.Z)(),
        eu = (0, m.Z)(ed);
    r.useEffect(() => {
        null == er || er(ed.current);
    }, [ed, er]);
    let eh = (0, o.e7)([G.Z], () => G.Z.getStatus(V.id)),
        em = (0, o.e7)([B.Z], () => B.Z.hidePersonalInformation),
        ep = (0, E.p)(),
        eg = U.Sb.useSetting(),
        ef = (0, f.a)(),
        e_ = (function (e) {
            let t = _.Y.useExperiment({ location: 'AccountProfilePopout' }).expiringStatus,
                n = U.Cr.useSetting(),
                r = (0, E.p)(),
                a = I.e.useExperiment({ location: 'AccountProfilePopout' }).allowQuietMode || r,
                s = U.fv.useSetting(),
                o = e === X.Skl.DND,
                d = (t) => {
                    let i =
                        null != n && '0' !== n
                            ? J.intl.formatToPlainString(J.t.BWD8fn, {
                                  endTime: new Date(Number(n)).toLocaleString(J.intl.currentLocale, {
                                      month: 'numeric',
                                      day: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                  })
                              })
                            : void 0;
                    if (e === t && null != i) return i;
                    switch (t) {
                        case X.Skl.DND:
                            return a ? J.intl.string(J.t.day5Aw) : J.intl.string(J.t.U9Vv19);
                        case X.Skl.INVISIBLE:
                            return J.intl.string(J.t.MqanVF);
                        default:
                            return;
                    }
                },
                u = (0, i.jsx)(i.Fragment, {
                    children: et.map((t) => {
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
                    ei(X.Skl.ONLINE, e),
                    (0, i.jsx)(c.MenuSeparator, {}, 'menu-separator-statuses'),
                    t ? en(X.Skl.IDLE, e, d(X.Skl.IDLE)) : ei(X.Skl.IDLE, e, d(X.Skl.IDLE)),
                    t ? en(X.Skl.DND, e, d(X.Skl.DND)) : ei(X.Skl.DND, e, d(X.Skl.DND)),
                    t ? en(X.Skl.INVISIBLE, e, d(X.Skl.INVISIBLE)) : ei(X.Skl.INVISIBLE, e, d(X.Skl.INVISIBLE)),
                    a || r
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
                                                              J.intl.string(J.t.gJRnwM),
                                                              (0, i.jsx)(c.TextBadge, {
                                                                  text: r ? J.intl.string(J.t.ApAu9f) : o ? J.intl.string(J.t.gH3Fra) : J.intl.string(J.t['64pl8/']),
                                                                  color: r ? l.Z.BRAND_500 : o ? l.Z.RED_400 : l.Z.PRIMARY_500
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: $.description,
                                                          children:
                                                              r && null != s && '0' !== s
                                                                  ? J.intl.formatToPlainString(J.t.BWD8fn, {
                                                                        endTime: new Date(Number(s)).toLocaleString(J.intl.currentLocale, {
                                                                            month: 'numeric',
                                                                            day: 'numeric',
                                                                            hour: 'numeric',
                                                                            minute: '2-digit'
                                                                        })
                                                                    })
                                                                  : J.intl.string(J.t['Br1q+/'])
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
        })(eh),
        eE = (0, W.g)(Y),
        eI = (0, C.Z)({ analyticsLocations: eo }),
        { customStatusBubbleEditEnabled: eC } = (0, T.K)({ location: 'AccountProfilePopout' }),
        ev = (e) => {
            null == Y || Y(),
                (0, w.openUserProfileModal)({
                    sourceAnalyticsLocations: eo,
                    ...ec,
                    ...e
                });
        },
        eS = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: es,
                        sourceAnalyticsLocations: eo
                    });
            });
        };
    return (0, i.jsx)(g.Gt, {
        value: eo,
        children: (0, i.jsx)(S.Mt, {
            value: ec,
            children: (0, i.jsx)(c.Dialog, {
                ref: ed,
                'aria-label': V.username,
                children: (0, i.jsxs)(j.Z, {
                    className: $.themeContainer,
                    user: V,
                    displayProfile: ea,
                    profileType: Q.y0.BITE_SIZE,
                    children: [
                        !eC &&
                            (0, i.jsx)(P.Z, {
                                profileType: Q.y0.BITE_SIZE,
                                children: (0, i.jsx)(M.Z, {
                                    userId: V.id,
                                    onClose: Y
                                })
                            }),
                        (0, i.jsxs)('header', {
                            className: ee.header,
                            children: [
                                (0, i.jsx)(Z.Z, {
                                    user: V,
                                    displayProfile: ea,
                                    profileType: Q.y0.BITE_SIZE
                                }),
                                (0, i.jsx)(A.Z, {
                                    user: V,
                                    displayProfile: ea,
                                    profileType: Q.y0.BITE_SIZE,
                                    onOpenProfile: el ? void 0 : ev
                                }),
                                (0, i.jsx)(y.Z, {
                                    user: V,
                                    profileType: Q.y0.BITE_SIZE,
                                    onCloseProfile: Y
                                })
                            ]
                        }),
                        (null == ea ? void 0 : ea.profileEffectId) != null &&
                            (0, i.jsx)(v.Z, {
                                profileEffectId: null == ea ? void 0 : ea.profileEffectId,
                                isHovering: eu
                            }),
                        (0, i.jsxs)(c.Scroller, {
                            className: $.body,
                            children: [
                                (0, i.jsx)(O.Z, {
                                    user: V,
                                    className: $.username,
                                    profileType: Q.y0.BITE_SIZE,
                                    nickname: F.ZP.getName(null, null, V),
                                    onOpenProfile: el ? void 0 : ev,
                                    pronouns: null == ea ? void 0 : ea.pronouns,
                                    tags: (0, i.jsx)(b.Z, {
                                        displayProfile: ea,
                                        profileType: Q.y0.BITE_SIZE,
                                        onClose: Y
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(R.Z, { userId: V.id }),
                                            (0, i.jsx)(D.Z, {
                                                user: V,
                                                isHovering: eu
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(k.Z, {
                                    user: V,
                                    bio: null == ea ? void 0 : ea.bio,
                                    hidePersonalInformation: em,
                                    onClose: Y
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: V,
                                    currentUser: V,
                                    onClose: Y
                                }),
                                (0, i.jsxs)('div', {
                                    className: $.menus,
                                    children: [
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(K.PB, {
                                                id: 'profile-'.concat(V.id),
                                                children: [
                                                    eC &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(K.Mv, {
                                                                    id: 'edit-profile',
                                                                    action: 'EDIT_PROFILE',
                                                                    label: J.intl.string(J.t.s5vZlZ),
                                                                    icon: c.PencilIcon,
                                                                    onClick: () => {
                                                                        eI(), Y();
                                                                    }
                                                                }),
                                                                (0, i.jsx)('div', { className: $.menuDivider })
                                                            ]
                                                        }),
                                                    (0, i.jsx)(K.Mv, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: null !== (t = (0, z.u5)(eh)) && void 0 !== t ? t : '',
                                                        icon: () =>
                                                            (0, i.jsx)(c.Status, {
                                                                status: eh,
                                                                size: 12
                                                            }),
                                                        hint: (ep || eh === X.Skl.DND) && (0, i.jsx)(c.BellSlashIcon, { size: 'xxs' }),
                                                        renderSubmenu: a.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(K.eq, {
                                                                      navId: 'set-status-submenu',
                                                                      className: $.statusPickerModalMenu,
                                                                      'aria-label': J.intl.string(J.t.E13trK),
                                                                      onClose: t,
                                                                      children: e_
                                                                  });
                                                              },
                                                        onClick: a.tq
                                                            ? () => {
                                                                  Y(),
                                                                      (0, c.openModalLazy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      let { onClose: t, ...n } = e;
                                                                                      return (0, i.jsx)(c.ModalRoot, {
                                                                                          ...n,
                                                                                          size: c.ModalSize.SMALL,
                                                                                          'aria-label': J.intl.string(J.t['3Uj+2t']),
                                                                                          className: $.statusPickerModal,
                                                                                          children: (0, i.jsx)(c.Menu, {
                                                                                              navId: 'set-status-submenu-mobile-web',
                                                                                              variant: 'fixed',
                                                                                              'aria-label': J.intl.string(J.t.E13trK),
                                                                                              className: $.statusPickerModalMenu,
                                                                                              hideScroller: !0,
                                                                                              onClose: t,
                                                                                              onSelect: void 0,
                                                                                              children: e_
                                                                                          })
                                                                                      });
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    }),
                                                    !eC &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: $.menuDivider }),
                                                                null == ef
                                                                    ? (0, i.jsx)(K.Mv, {
                                                                          id: 'add-custom-status',
                                                                          action: 'PRESS_ADD_CUSTOM_STATUS',
                                                                          label: J.intl.string(J.t.ezAcPz),
                                                                          icon: () => (0, i.jsx)('div', { className: $.customEmojiPlaceholder }),
                                                                          onClick: () => {
                                                                              Y(), eS();
                                                                          }
                                                                      })
                                                                    : (0, i.jsx)(K.Mv, {
                                                                          id: 'edit-custom-status',
                                                                          action: 'PRESS_EDIT_CUSTOM_STATUS',
                                                                          label: J.intl.string(J.t['d/HLjo']),
                                                                          icon: () =>
                                                                              null != ef.emoji
                                                                                  ? (0, i.jsx)(d.Iv, {
                                                                                        emoji: ef.emoji,
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
                                                                                      U.Ok.updateSetting(void 0);
                                                                              },
                                                                              children: (0, i.jsx)(c.CircleXIcon, {
                                                                                  size: 'sm',
                                                                                  color: 'currentColor'
                                                                              })
                                                                          }),
                                                                          onClick: () => {
                                                                              Y(), eS();
                                                                          }
                                                                      })
                                                            ]
                                                        })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(j.Z.Overlay, {
                                            className: $.menuOverlay,
                                            children: (0, i.jsxs)(K.PB, {
                                                id: 'account-'.concat(V.id),
                                                children: [
                                                    (0, i.jsx)(K.Mv, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: c.UserCircleIcon,
                                                        label: J.intl.string(J.t.oMNyYG),
                                                        onClick: () => {
                                                            Y(), (0, q.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(K.eq, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': J.intl.string(J.t.wFhVqK),
                                                                onClose: t,
                                                                children: eE
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        H.wS &&
                                                        eg &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)('div', { className: $.menuDivider }),
                                                                (0, i.jsx)(K.Mv, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: c.IdIcon,
                                                                    label: J.intl.string(J.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, s.J)(V.id), Y();
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
