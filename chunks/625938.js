n.d(t, {
    y: function () {
        return A;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
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
    T = n(981631),
    x = n(231338),
    v = n(689938),
    S = n(29150);
let N = (e) => {
        let { style: t, className: n, name: s, icon: a } = e;
        return (0, i.jsx)(d.Tooltip, {
            text: s,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: l()(n, S.iconWidget),
                    style: t,
                    ...e,
                    children: null != a && a
                })
        });
    },
    A = (e) => {
        let { currentStatus: t, channel: a } = e,
            r = s.useRef(E.Z.getRecentCustomStatuses()),
            A = s.useRef((0, p.un)(u.z.HANG_STATUS_NEW_BADGE)).current,
            Z = (0, g.V)(),
            [M, b] = s.useState(null != t ? t : null),
            R = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            L = () => {
                !A && (0, p.EW)(u.z.HANG_STATUS_NEW_BADGE);
            },
            j = (e, t) => {
                e.stopPropagation(), (0, f.Zx)(t, !0), L();
            },
            P = (e, t) => {
                e.stopPropagation(), (0, f._s)(t.status, t.emoji, !0), L();
            },
            O = s.useCallback((e) => {
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
            D = s.useCallback((e) => {
                b({
                    type: T.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: e
                });
            }, []),
            U = s.useCallback((e) => {
                b({
                    type: T.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: x.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji
                });
            }, []);
        return (0, i.jsxs)('div', {
            className: S.popout,
            children: [
                !A &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: S.popoutBackground }),
                            (0, i.jsxs)('div', {
                                className: S.onboarding,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: S.title,
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: v.Z.Messages.ACTIVITY_STATUS
                                            }),
                                            (0, i.jsx)(d.TextBadge, {
                                                text: v.Z.Messages.BETA,
                                                disableColor: !0,
                                                className: S.newBadge
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: S.helpText,
                                        children: v.Z.Messages.HANG_STATUS_HELP
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: S.iconGroup,
                                        children: [
                                            null != R &&
                                                (0, i.jsxs)('div', {
                                                    className: S.avatarWrapper,
                                                    children: [
                                                        (0, i.jsx)(d.Avatar, {
                                                            className: S.avatar,
                                                            size: d.AvatarSizes.SIZE_40,
                                                            src: (0, _.ov)(R),
                                                            'aria-hidden': !0
                                                        }),
                                                        (0, i.jsx)('div', { className: S.outline })
                                                    ]
                                                }),
                                            (0, i.jsx)(I.Z, {
                                                className: S.statusIcon,
                                                hangStatusActivity: M
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                (0, i.jsxs)('div', {
                    className: S.options,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.iconsContainer,
                            children: [
                                Object.entries(Z).map((e) => {
                                    let [n, s] = e;
                                    return (0, i.jsx)(
                                        d.Clickable,
                                        {
                                            'aria-label': s.title,
                                            onMouseEnter: () => D(n),
                                            onClick: (e) => j(e, n),
                                            children: (0, i.jsx)(N, {
                                                className: l()(S.iconWidget, { [S.selectedWidget]: n === (null == t ? void 0 : t.state) }),
                                                name: s.title,
                                                icon: (0, i.jsx)('img', {
                                                    src: s.icon,
                                                    alt: '',
                                                    className: S.icon
                                                }),
                                                style: n === (null == t ? void 0 : t.state) ? { backgroundColor: null != s.color ? s.color : void 0 } : {}
                                            })
                                        },
                                        n
                                    );
                                }),
                                (0, i.jsx)(d.Clickable, {
                                    'aria-label': v.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                    onClick: O,
                                    onMouseEnter: () => b(null),
                                    children: (0, i.jsx)(N, {
                                        className: S.optionButton,
                                        name: v.Z.Messages.STATUS_POPOUT_CLEAR_STATUS,
                                        icon: (0, i.jsx)(d.DenyIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: S.editIcon,
                                            colorClass: S.editIconColor
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: S.divider }),
                        (0, i.jsxs)('div', {
                            className: S.iconsContainer,
                            children: [
                                r.current.map((e, n) => {
                                    let s = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji),
                                        r = null != e.emoji && !(0, C.K)(e.emoji, a);
                                    return (0, i.jsxs)(
                                        d.Clickable,
                                        {
                                            'aria-label': e.status,
                                            onMouseEnter: () => U(e),
                                            onClick: r ? void 0 : (t) => P(t, e),
                                            className: S.statusOptionContainer,
                                            children: [
                                                (0, i.jsx)(N, {
                                                    className: l()(S.iconWidget, { [S.selectedWidget]: s }),
                                                    name: e.status,
                                                    icon:
                                                        null != e.emoji
                                                            ? (0, i.jsx)(h.I, {
                                                                  className: S.customIcon,
                                                                  emoji: e.emoji,
                                                                  hideTooltip: !0
                                                              })
                                                            : null,
                                                    style: s ? { backgroundColor: '#7174B7B3' } : { backgroundColor: '#6466914D' }
                                                }),
                                                r
                                                    ? (0, i.jsx)('div', {
                                                          className: S.emojiLockIconContainer,
                                                          children: (0, i.jsx)(d.LockIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: S.emojiLockIcon
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
                                              children: (0, i.jsx)(N, {
                                                  className: S.optionButton,
                                                  name: null != t ? v.Z.Messages.STATUS_POPOUT_EDIT_CUSTOM : v.Z.Messages.STATUS_POPOUT_SET_CUSTOM,
                                                  icon: (0, i.jsx)(d.PencilIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 20,
                                                      height: 20,
                                                      colorClass: S.editIconColor
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
                                              className: S.setCustomButton,
                                              children: [
                                                  (0, i.jsx)(d.PencilIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: S.editIcon,
                                                      colorClass: S.editIconColor
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
