n.d(t, {
    y: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(788307),
    m = n(605236),
    p = n(594174),
    f = n(768581),
    g = n(906605),
    C = n(106301),
    x = n(833858),
    v = n(866071),
    _ = n(223135),
    I = n(981631),
    E = n(231338),
    b = n(388032),
    S = n(29150);
let Z = (e) => {
        let { style: t, className: n, name: l, icon: r } = e;
        return (0, i.jsx)(d.Tooltip, {
            text: l,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: s()(n, S.iconWidget),
                    style: t,
                    ...e,
                    children: null != r && r
                })
        });
    },
    T = (e) => {
        let { currentStatus: t, channel: r } = e,
            a = l.useRef(C.Z.getRecentCustomStatuses()),
            T = l.useRef((0, m.un)(u.z.HANG_STATUS_NEW_BADGE)).current,
            N = (0, x.V)(),
            [j, A] = l.useState(null != t ? t : null),
            y = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
            P = () => {
                !T && (0, m.EW)(u.z.HANG_STATUS_NEW_BADGE);
            },
            M = (e, t) => {
                e.stopPropagation(), (0, g.Zx)(t, !0), P();
            },
            R = (e, t) => {
                e.stopPropagation(), (0, g._s)(t.status, t.emoji, !0), P();
            },
            L = l.useCallback((e) => {
                e.stopPropagation(), (0, g.Sc)(!0);
            }, []),
            k = (e) => {
                e.stopPropagation(),
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                    P();
            },
            O = l.useCallback((e) => {
                A({
                    type: I.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: e
                });
            }, []),
            w = l.useCallback((e) => {
                A({
                    type: I.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: E.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji
                });
            }, []);
        return (0, i.jsxs)('div', {
            className: S.popout,
            children: [
                !T &&
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
                                                children: b.intl.string(b.t['8ka8lp'])
                                            }),
                                            (0, i.jsx)(d.TextBadge, {
                                                text: b.intl.string(b.t.oW0eUV),
                                                disableColor: !0,
                                                className: S.newBadge
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: S.helpText,
                                        children: b.intl.string(b.t.GFo2Gh)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: S.iconGroup,
                                        children: [
                                            null != y &&
                                                (0, i.jsxs)('div', {
                                                    className: S.avatarWrapper,
                                                    children: [
                                                        (0, i.jsx)(d.Avatar, {
                                                            className: S.avatar,
                                                            size: d.AvatarSizes.SIZE_40,
                                                            src: (0, f.ov)(y),
                                                            'aria-hidden': !0
                                                        }),
                                                        (0, i.jsx)('div', { className: S.outline })
                                                    ]
                                                }),
                                            (0, i.jsx)(_.Z, {
                                                className: S.statusIcon,
                                                hangStatusActivity: j
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
                                Object.entries(N).map((e) => {
                                    let [n, l] = e;
                                    return (0, i.jsx)(
                                        d.Clickable,
                                        {
                                            'aria-label': l.title,
                                            onMouseEnter: () => O(n),
                                            onClick: (e) => M(e, n),
                                            children: (0, i.jsx)(Z, {
                                                className: s()(S.iconWidget, { [S.selectedWidget]: n === (null == t ? void 0 : t.state) }),
                                                name: l.title,
                                                icon: (0, i.jsx)('img', {
                                                    src: l.icon,
                                                    alt: '',
                                                    className: S.icon
                                                }),
                                                style: n === (null == t ? void 0 : t.state) ? { backgroundColor: null != l.color ? l.color : void 0 } : {}
                                            })
                                        },
                                        n
                                    );
                                }),
                                (0, i.jsx)(d.Clickable, {
                                    'aria-label': b.intl.string(b.t.S90Fub),
                                    onClick: L,
                                    onMouseEnter: () => A(null),
                                    children: (0, i.jsx)(Z, {
                                        className: S.optionButton,
                                        name: b.intl.string(b.t.S90Fub),
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
                                a.current.map((e, n) => {
                                    let l = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji),
                                        a = null != e.emoji && !(0, v.K)(e.emoji, r);
                                    return (0, i.jsxs)(
                                        d.Clickable,
                                        {
                                            'aria-label': e.status,
                                            onMouseEnter: () => w(e),
                                            onClick: a ? void 0 : (t) => R(t, e),
                                            className: S.statusOptionContainer,
                                            children: [
                                                (0, i.jsx)(Z, {
                                                    className: s()(S.iconWidget, { [S.selectedWidget]: l }),
                                                    name: e.status,
                                                    icon:
                                                        null != e.emoji
                                                            ? (0, i.jsx)(h.Iv, {
                                                                  className: S.customIcon,
                                                                  emoji: e.emoji,
                                                                  hideTooltip: !0
                                                              })
                                                            : null,
                                                    style: l ? { backgroundColor: '#7174B7B3' } : { backgroundColor: '#6466914D' }
                                                }),
                                                a
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
                                a.current.length > 0
                                    ? (0, i.jsx)(
                                          d.Clickable,
                                          {
                                              'aria-label': null != t ? b.intl.string(b.t.IN2LTk) : b.intl.string(b.t.UDg0qK),
                                              onClick: k,
                                              children: (0, i.jsx)(Z, {
                                                  className: S.optionButton,
                                                  name: null != t ? b.intl.string(b.t.IN2LTk) : b.intl.string(b.t.UDg0qK),
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
                                              'aria-label': b.intl.string(b.t.UDg0qK),
                                              onClick: k,
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
                                                      children: b.intl.string(b.t.UDg0qK)
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
