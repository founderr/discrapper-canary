n.d(t, {
    Z: function () {
        return ee;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(722770), o = n(873546), c = n(442837), d = n(481060), u = n(2052), _ = n(393238), h = n(727637), E = n(100527), I = n(906732), m = n(676035), g = n(521868), p = n(299206), T = n(440051), S = n(734934), C = n(158238), f = n(300284), N = n(680295), A = n(751009), Z = n(785717), L = n(318661), v = n(741308), O = n(549546), R = n(681837), x = n(502762), b = n(530), P = n(544989), M = n(969205), D = n(171368), y = n(580512), j = n(67152), U = n(23293), G = n(695346), k = n(158776), w = n(246946), B = n(70956), H = n(5192), V = n(51144), F = n(246133), Y = n(474376), W = n(383832), z = n(981631), K = n(228168), q = n(689938), Q = n(483978);
let X = [
    {
        duration: 30 * B.Z.Millis.MINUTE,
        label: () => q.Z.Messages.MUTE_DURATION_30_MINUTES
    },
    {
        duration: B.Z.Millis.HOUR,
        label: () => q.Z.Messages.MUTE_DURATION_1_HOUR
    },
    {
        duration: 3 * B.Z.Millis.HOUR,
        label: () => q.Z.Messages.MUTE_DURATION_3_HOURS
    },
    {
        duration: 8 * B.Z.Millis.HOUR,
        label: () => q.Z.Messages.MUTE_DURATION_8_HOURS
    },
    {
        duration: B.Z.Millis.DAY,
        label: () => q.Z.Messages.MUTE_DURATION_24_HOURS
    },
    {
        duration: void 0,
        label: () => q.Z.Messages.DURATION_FOREVER
    }
];
function J(e, t, n, s) {
    let a = (0, i.jsx)(i.Fragment, {
        children: X.map(s => {
            let {
                duration: a,
                label: r
            } = s;
            return (0, i.jsx)(d.MenuItem, {
                id: ''.concat(e, '-').concat(a),
                label: r(),
                action: () => (0, F.Z)(e, t, n, a),
                dontCloseOnAction: !0
            }, a);
        })
    });
    return (0, i.jsx)(d.MenuItem, {
        id: e,
        className: Q.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: !0,
        label: t => {
            let {isFocused: n} = t;
            return (0, i.jsxs)('div', {
                className: Q.statusItem,
                children: [
                    (0, i.jsx)(d.Status, {
                        status: e,
                        className: Q.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: Q.status,
                        children: (0, V.u5)(e)
                    }),
                    null != s && (0, i.jsx)('div', {
                        className: Q.description,
                        children: s
                    })
                ]
            });
        },
        action: () => (0, F.Z)(e, t, n),
        dontCloseOnAction: !0,
        children: e !== z.Skl.ONLINE ? a : void 0
    });
}
function $(e, t, n, s) {
    return (0, i.jsx)(d.MenuItem, {
        id: e,
        keepItemStyles: !0,
        render: t => {
            let {isFocused: n} = t;
            return (0, i.jsxs)('div', {
                className: Q.statusItem,
                children: [
                    (0, i.jsx)(d.Status, {
                        status: e,
                        className: Q.icon,
                        size: 10,
                        color: n ? 'currentColor' : void 0
                    }),
                    (0, i.jsx)('div', {
                        className: Q.status,
                        children: (0, V.u5)(e)
                    }),
                    null != s && (0, i.jsx)('div', {
                        className: Q.description,
                        children: s
                    })
                ]
            });
        },
        action: () => (0, F.Z)(e, t, n),
        dontCloseOnAction: !0
    });
}
function ee(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: a
        } = e, B = __OVERLAY__, F = (0, L.ZP)(t.id), ee = (0, u.O)(), {analyticsLocations: et} = (0, I.ZP)(E.Z.ACCOUNT_PROFILE_POPOUT), en = (0, Z.Q1)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }), ei = (0, m.a)(), es = (0, c.e7)([k.Z], () => k.Z.getStatus(t.id)), ea = function (e, t) {
            let n = T.Y.useExperiment({ location: 'account popout' }).expiringStatus, s = G.Cr.useSetting(), a = (0, S.p)(), r = C.e.useExperiment({ location: 'account popout' }).allowQuietMode || a, o = G.fv.useSetting(), c = e === z.Skl.DND, u = t => {
                    let n = null != s && '0' !== s ? q.Z.Messages.STATUS_UNTIL.format({
                        endTime: new Date(Number(s)).toLocaleString(q.Z.getLocale(), {
                            month: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit'
                        })
                    }) : void 0;
                    if (e === t && null != n)
                        return n;
                    switch (t) {
                    case z.Skl.DND:
                        return r ? q.Z.Messages.STATUS_DND_HELP_FOCUS_MODE : q.Z.Messages.STATUS_DND_HELP;
                    case z.Skl.INVISIBLE:
                        return q.Z.Messages.STATUS_INVISIBLE_HELPER;
                    default:
                        return;
                    }
                }, _ = (0, i.jsx)(i.Fragment, {
                    children: X.map(t => {
                        let {
                            duration: n,
                            label: s
                        } = t;
                        return (0, i.jsx)(d.MenuItem, {
                            id: ''.concat(e, '-').concat(n),
                            label: s(),
                            action: () => {
                                (0, S.oW)(!0, n);
                            },
                            dontCloseOnAction: !0
                        }, n);
                    })
                });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    $(z.Skl.ONLINE, e, t),
                    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
                    n ? J(z.Skl.IDLE, e, t, u(z.Skl.IDLE)) : $(z.Skl.IDLE, e, t, u(z.Skl.IDLE)),
                    n ? J(z.Skl.DND, e, t, u(z.Skl.DND)) : $(z.Skl.DND, e, t, u(z.Skl.DND)),
                    n ? J(z.Skl.INVISIBLE, e, t, u(z.Skl.INVISIBLE)) : $(z.Skl.INVISIBLE, e, t, u(z.Skl.INVISIBLE)),
                    (0, i.jsx)(d.MenuSeparator, {}, 'menu-separator-statuses'),
                    r || a ? (0, i.jsx)(d.MenuItem, {
                        id: 'quiet-mode',
                        'aria-label': 'focus mode',
                        className: Q.expiringStatusMenuItem,
                        keepItemStyles: !0,
                        hasSubmenu: !0,
                        showIconFirst: !0,
                        label: () => (0, i.jsxs)('div', {
                            className: Q.statusItem,
                            children: [
                                (0, i.jsx)(d.BellSlashIcon, {
                                    size: 'xxs',
                                    className: Q.icon
                                }),
                                (0, i.jsxs)('div', {
                                    className: Q.focusModeTitle,
                                    children: [
                                        q.Z.Messages.FOCUS_MODE_TITLE,
                                        (0, i.jsx)(d.TextBadge, {
                                            text: a ? q.Z.Messages.FOCUS_MODE_BADGE_ON : c ? q.Z.Messages.FOCUS_MODE_BADGE_ON_VIA_DND : q.Z.Messages.FOCUS_MODE_BADGE_OFF,
                                            color: a ? l.Z.BRAND_500 : c ? l.Z.RED_400 : l.Z.PRIMARY_500
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', {
                                    className: Q.description,
                                    children: a && null != o && '0' !== o ? q.Z.Messages.STATUS_UNTIL.format({
                                        endTime: new Date(Number(o)).toLocaleString(q.Z.getLocale(), {
                                            month: 'numeric',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: '2-digit'
                                        })
                                    }) : q.Z.Messages.FOCUS_MODE_DESCRIPTION
                                })
                            ]
                        }),
                        action: () => {
                            (0, S.oW)(!a);
                        },
                        dontCloseOnAction: !0,
                        children: _
                    }, 'quiet-mode') : null
                ]
            });
        }(es, ee), {ref: er} = (0, _.Z)(), el = (0, h.Z)(er);
    s.useEffect(() => {
        null == a || a(er.current);
    }, [
        er,
        a
    ]);
    let eo = e => {
            null == n || n(), (0, D.openUserProfileModal)({
                sourceAnalyticsLocations: et,
                userId: t.id,
                ...e
            });
        }, {accountPopoutStatusEditEnabled: ec} = (0, A.K)({ location: 'AccountProfilePopout' }), ed = (0, f.Z)({ analyticsLocations: et }), eu = (0, S.p)(), e_ = es === z.Skl.DND, eh = (0, Y.g)(), eE = (0, g.o)({
            focusedClassName: Q.menuItemFocused,
            customStatus: ei,
            analyticsLocations: et,
            trackUserProfileAction: en
        }), eI = (0, p.Z)({
            id: t.id,
            label: q.Z.Messages.COPY_ID_USER,
            showIconFirst: !0,
            focusedClassName: Q.menuItemFocused
        }), em = (0, c.e7)([w.Z], () => w.Z.hidePersonalInformation);
    return (0, i.jsx)(I.Gt, {
        value: et,
        children: (0, i.jsx)(Z.Mt, {
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id,
            children: (0, i.jsx)(d.Dialog, {
                ref: er,
                'aria-label': t.username,
                children: (0, i.jsxs)(x.Z, {
                    className: Q.themeContainer,
                    user: t,
                    displayProfile: F,
                    profileType: K.y0.BITE_SIZE,
                    children: [
                        !ec && (0, i.jsx)(P.Z, {
                            profileType: K.y0.BITE_SIZE,
                            children: (0, i.jsx)(M.Z, {
                                userId: t.id,
                                onClose: n
                            })
                        }),
                        (0, i.jsx)(U.Z, {
                            user: t,
                            displayProfile: F,
                            statusEditEnabled: ec,
                            onOpenProfile: B ? void 0 : eo,
                            onClose: n
                        }),
                        (0, i.jsxs)('div', {
                            className: Q.body,
                            children: [
                                (0, i.jsx)(b.Z, {
                                    user: t,
                                    className: Q.username,
                                    profileType: K.y0.BITE_SIZE,
                                    nickname: H.ZP.getName(null, null, t),
                                    onOpenProfile: eo,
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    tags: (0, i.jsx)(v.Z, {
                                        displayProfile: F,
                                        profileType: K.y0.BITE_SIZE,
                                        onClose: n
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(R.Z, { userId: t.id }),
                                            (0, i.jsx)(O.Z, {
                                                user: t,
                                                isHovering: el
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(j.Z, {
                                    user: t,
                                    bio: null == F ? void 0 : F.bio,
                                    hidePersonalInformation: em,
                                    onClose: n
                                }),
                                (0, i.jsx)(y.Z, {
                                    user: t,
                                    onClose: n
                                }),
                                (0, i.jsxs)('div', {
                                    className: Q.menus,
                                    children: [
                                        (0, i.jsx)(x.Z.Overlay, {
                                            className: Q.menuOverlay,
                                            children: (0, i.jsxs)(d.Menu, {
                                                navId: 'status',
                                                'aria-label': q.Z.Messages.STATUS_MENU_LABEL,
                                                hideScroller: !0,
                                                className: Q.menu,
                                                onClose: n,
                                                onSelect: void 0,
                                                children: [
                                                    ec && (0, i.jsx)(d.MenuGroup, {
                                                        children: (0, i.jsx)(d.MenuItem, {
                                                            id: 'edit-profile',
                                                            icon: d.PencilIcon,
                                                            label: q.Z.Messages.EDIT_PROFILE,
                                                            action: () => {
                                                                en({
                                                                    action: 'EDIT_PROFILE',
                                                                    analyticsLocations: et
                                                                }), ed();
                                                            },
                                                            showIconFirst: !0,
                                                            focusedClassName: Q.menuItemFocused,
                                                            subMenuIconClassName: Q.subMenuIcon
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
                                                                    (0, V.u5)(es),
                                                                    eu || e_ ? (0, i.jsx)(d.BellSlashIcon, { size: 'xxs' }) : null
                                                                ]
                                                            }),
                                                            focusedClassName: Q.menuItemFocused,
                                                            subMenuIconClassName: Q.subMenuIcon,
                                                            action: o.tq ? function () {
                                                                en({
                                                                    action: 'PRESS_SET_STATUS',
                                                                    analyticsLocations: et
                                                                }), (0, d.openModalLazy)(() => new Promise(e => {
                                                                    e(e => (0, i.jsx)(d.ModalRoot, {
                                                                        ...e,
                                                                        size: d.ModalSize.SMALL,
                                                                        className: Q.modal,
                                                                        'aria-label': q.Z.Messages.SET_STATUS,
                                                                        children: (0, i.jsx)(d.Menu, {
                                                                            navId: 'status-mobile-web',
                                                                            variant: 'fixed',
                                                                            'aria-label': q.Z.Messages.STATUS_MENU_LABEL,
                                                                            hideScroller: !0,
                                                                            className: Q.statusPickerModalMenu,
                                                                            onClose: e.onClose,
                                                                            onSelect: e.onClose,
                                                                            children: ea
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
                                                                    status: es,
                                                                    size: 12,
                                                                    className: r()(t, Q.mainStatusIcon),
                                                                    color: n ? 'currentColor' : void 0
                                                                });
                                                            },
                                                            children: o.tq ? void 0 : ea
                                                        }, 'status-picker')
                                                    }),
                                                    !ec && (0, i.jsx)(d.MenuGroup, { children: eE })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(x.Z.Overlay, {
                                            className: Q.menuOverlay,
                                            children: (0, i.jsxs)(d.Menu, {
                                                navId: 'account',
                                                'aria-label': q.Z.Messages.MULTI_ACCOUNT_MENU_LABEL,
                                                hideScroller: !0,
                                                className: Q.menu,
                                                onClose: n,
                                                onSelect: void 0,
                                                children: [
                                                    (0, i.jsx)(d.MenuGroup, {
                                                        children: (0, i.jsx)(d.MenuItem, {
                                                            id: 'switch-account',
                                                            focusedClassName: Q.menuItemFocused,
                                                            subMenuIconClassName: Q.subMenuIcon,
                                                            label: q.Z.Messages.SWITCH_ACCOUNTS_MENU_ITEM_TITLE,
                                                            icon: d.UserCircleIcon,
                                                            showIconFirst: !0,
                                                            action: () => {
                                                                en({
                                                                    action: 'PRESS_SWITCH_ACCOUNTS',
                                                                    analyticsLocations: et
                                                                }), (0, W.Z)();
                                                            },
                                                            children: eh
                                                        })
                                                    }),
                                                    (0, i.jsx)(d.MenuGroup, { children: eI })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (null == F ? void 0 : F.profileEffectId) != null && (0, i.jsx)(N.Z, {
                            profileEffectId: null == F ? void 0 : F.profileEffectId,
                            isHovering: el
                        })
                    ]
                })
            })
        })
    });
}
