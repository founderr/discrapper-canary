n.d(t, {
    y: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n.n(r),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(788307),
    p = n(605236),
    m = n(594174),
    _ = n(768581),
    f = n(906605),
    E = n(106301),
    g = n(833858),
    C = n(866071),
    I = n(223135),
    x = n(981631),
    T = n(231338),
    v = n(689938),
    N = n(651359);
let S = (e) => {
        let { style: t, className: n, name: a, icon: s } = e;
        return (0, i.jsx)(d.Tooltip, {
            text: a,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: l()(n, N.iconWidget),
                    style: t,
                    ...e,
                    children: null != s && s
                })
        });
    },
    Z = (e) => {
        let { currentStatus: t, channel: s } = e,
            r = a.useRef(E.Z.getRecentCustomStatuses()),
            Z = a.useRef((0, p.un)(u.z.HANG_STATUS_NEW_BADGE)).current,
            A = (0, g.V)(),
            [M, b] = a.useState(null != t ? t : null),
            R = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            L = () => {
                !Z && (0, p.EW)(u.z.HANG_STATUS_NEW_BADGE);
            },
            j = (e, t) => {
                e.stopPropagation(), (0, f.Zx)(t, !0), L();
            },
            O = (e, t) => {
                e.stopPropagation(), (0, f._s)(t.status, t.emoji, !0), L();
            },
            P = a.useCallback((e) => {
                e.stopPropagation(), (0, f.Sc)(!0);
            }, []),
            y = (e) => {
                e.stopPropagation(),
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                    L();
            },
            D = a.useCallback((e) => {
                b({
                    type: x.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: e
                });
            }, []),
            k = a.useCallback((e) => {
                b({
                    type: x.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: T.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji
                });
            }, []);
        return (0, i.jsxs)('div', {
            className: N.popout,
            children: [
                !Z &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: N.popoutBackground }),
                            (0, i.jsxs)('div', {
                                className: N.onboarding,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: N.title,
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: v.Z.Messages.ACTIVITY_STATUS
                                            }),
                                            (0, i.jsx)(d.TextBadge, {
                                                text: v.Z.Messages.BETA,
                                                disableColor: !0,
                                                className: N.newBadge
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: N.helpText,
                                        children: v.Z.Messages.HANG_STATUS_HELP
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: N.iconGroup,
                                        children: [
                                            null != R &&
                                                (0, i.jsxs)('div', {
                                                    className: N.avatarWrapper,
                                                    children: [
                                                        (0, i.jsx)(d.Avatar, {
                                                            className: N.avatar,
                                                            size: d.AvatarSizes.SIZE_40,
                                                            src: (0, _.ov)(R),
                                                            'aria-hidden': !0
                                                        }),
                                                        (0, i.jsx)('div', { className: N.outline })
                                                    ]
                                                }),
                                            (0, i.jsx)(I.Z, {
                                                className: N.statusIcon,
                                                hangStatusActivity: M
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                (0, i.jsxs)('div', {
                    className: N.options,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.iconsContainer,
                            children: [
                                Object.entries(A).map((e) => {
                                    let [n, a] = e;
                                    return (0, i.jsx)(
                                        d.Clickable,
                                        {
                                            'aria-label': a.title,
                                            onMouseEnter: () => D(n),
                                            onClick: (e) => j(e, n),
                                            children: (0, i.jsx)(S, {
                                                className: l()(N.iconWidget, { [N.selectedWidget]: n === (null == t ? void 0 : t.state) }),
                                                name: a.title,
                                                icon: (0, i.jsx)('img', {
                                                    src: a.icon,
                                                    alt: '',
                                                    className: N.icon
                                                }),
                                                style: n === (null == t ? void 0 : t.state) ? { backgroundColor: null != a.color ? a.color : void 0 } : {}
                                            })
                                        },
                                        n
                                    );
                                }),
                                (0, i.jsx)(d.Clickable, {
                                    'aria-label': v.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                    onClick: P,
                                    onMouseEnter: () => b(null),
                                    children: (0, i.jsx)(S, {
                                        className: N.optionButton,
                                        name: v.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                        icon: (0, i.jsx)(d.DenyIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: N.editIcon,
                                            colorClass: N.editIconColor
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: N.divider }),
                        (0, i.jsxs)('div', {
                            className: N.iconsContainer,
                            children: [
                                r.current.map((e, n) => {
                                    let a = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji),
                                        r = null != e.emoji && !(0, C.K)(e.emoji, s);
                                    return (0, i.jsxs)(
                                        d.Clickable,
                                        {
                                            'aria-label': e.status,
                                            onMouseEnter: () => k(e),
                                            onClick: r ? void 0 : (t) => O(t, e),
                                            className: N.statusOptionContainer,
                                            children: [
                                                (0, i.jsx)(S, {
                                                    className: l()(N.iconWidget, { [N.selectedWidget]: a }),
                                                    name: e.status,
                                                    icon:
                                                        null != e.emoji
                                                            ? (0, i.jsx)(h.I, {
                                                                  className: N.customIcon,
                                                                  emoji: e.emoji,
                                                                  hideTooltip: !0
                                                              })
                                                            : null,
                                                    style: a ? { backgroundColor: '#7174B7B3' } : { backgroundColor: '#6466914D' }
                                                }),
                                                r
                                                    ? (0, i.jsx)('div', {
                                                          className: N.emojiLockIconContainer,
                                                          children: (0, i.jsx)(d.LockIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: N.emojiLockIcon
                                                          })
                                                      })
                                                    : null
                                            ]
                                        },
                                        'custom-status-'.concat(n)
                                    );
                                }),
                                r.current.length > 0
                                    ? (0, i.jsx)(
                                          d.Clickable,
                                          {
                                              'aria-label': null != t ? v.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                              onClick: y,
                                              children: (0, i.jsx)(S, {
                                                  className: N.optionButton,
                                                  name: null != t ? v.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                                  icon: (0, i.jsx)(d.PencilIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 20,
                                                      height: 20,
                                                      colorClass: N.editIconColor
                                                  })
                                              })
                                          },
                                          'custom-status-edit'
                                      )
                                    : (0, i.jsxs)(
                                          d.Clickable,
                                          {
                                              'aria-label': v.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                              onClick: y,
                                              className: N.setCustomButton,
                                              children: [
                                                  (0, i.jsx)(d.PencilIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: N.editIcon,
                                                      colorClass: N.editIconColor
                                                  }),
                                                  (0, i.jsx)(d.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'interactive-active',
                                                      children: v.Z.Messages.STATUS_POPOUT_SET_CUSTOM
                                                  })
                                              ]
                                          },
                                          'custom-status-edit-full'
                                      )
                            ]
                        })
                    ]
                })
            ]
        });
    };
