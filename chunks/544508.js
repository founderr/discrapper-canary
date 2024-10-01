n(47120), n(757143);
var s = n(735250),
    i = n(470079),
    a = n(120356),
    r = n.n(a),
    o = n(212433),
    l = n(399606),
    u = n(481060),
    d = n(607070),
    c = n(745510),
    E = n(899007),
    _ = n(867176),
    m = n(51144),
    g = n(346585),
    f = n(81259),
    I = n(119848),
    S = n(801461),
    T = n(228168),
    h = n(689938),
    N = n(923112),
    O = n(733469);
let M = i.forwardRef(function (e, t) {
    let { style: n, value: i, placeholder: a, maxLength: o, onFocus: l, onChange: d } = e;
    return (0, s.jsx)(u.TextArea, {
        className: r()(N.userCardInput, n),
        autosize: !0,
        error: null,
        showCharacterCount: !1,
        spellCheck: !1,
        showRemainingCharacterCount: !1,
        value: i,
        placeholder: a,
        rows: 1,
        maxLength: o,
        onChange: d,
        onFocus: l,
        onKeyDown: (e) => {
            'Enter' === e.key && e.preventDefault();
        },
        inputRef: t
    });
});
t.Z = i.forwardRef(function (e, t) {
    let { user: n, error: a, formValues: C, displayProfile: L, onChangeFormValue: x, onFocusDisplayName: R, onFocusUsername: p, editState: A, footerNotice: P, usernameSuggestionLoading: v, oneClickFlow: y } = e,
        { username: Z, globalName: b } = C,
        U = i.useRef(null),
        G = i.useRef(null),
        j = i.useMemo(() => n.merge({ discriminator: '0000' }), [n]),
        [D, W] = (0, u.useSpring)(() => ({
            opacity: 0,
            y: 5
        }));
    i.useEffect(() => {
        W({
            y: 0,
            opacity: 1,
            from: {
                y: 5,
                opacity: 0
            }
        });
    }, [W, A]),
        i.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    var e, t, n;
                    null === (t = G.current) || void 0 === t || t.setSelection(0, null === (e = G.current) || void 0 === e ? void 0 : e.value.length), null === (n = G.current) || void 0 === n || n.focus();
                },
                focusUsername: () => {
                    var e, t, n;
                    null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (n = U.current) || void 0 === n || n.focus();
                }
            }),
            []
        );
    let k = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        { createMultipleConfettiAt: F } = i.useContext(c.h),
        B = null == L ? void 0 : L.getLegacyUsername();
    return (
        i.useEffect(() => {
            if (!k && A === S.Wq.PREVIEW && !!n.username.includes(S.nA))
                F(
                    window.innerWidth / 2 + 150,
                    0,
                    {
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: 0,
                                y: -180
                            },
                            maxValue: {
                                x: 500,
                                y: 180
                            }
                        }
                    },
                    15
                ),
                    F(
                        window.innerWidth / 2 - 150,
                        0,
                        {
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: -500,
                                    y: -180
                                },
                                maxValue: {
                                    x: 0,
                                    y: 180
                                }
                            }
                        },
                        15
                    );
        }, [F, A, n, k]),
        (0, s.jsxs)('div', {
            className: r()(N.userCardContainer, { [N.shinyCard]: A === S.Wq.PREVIEW }),
            children: [
                (0, s.jsxs)('div', {
                    className: N.profileCard,
                    children: [
                        (0, s.jsx)(_.Z, {
                            user: j,
                            displayProfile: L,
                            profileType: T.y0.PANEL
                        }),
                        (0, s.jsx)(E.Z, {
                            user: j,
                            displayProfile: L,
                            profileType: T.y0.PANEL
                        }),
                        A === S.Wq.PREVIEW &&
                            null != B &&
                            (0, s.jsx)('div', {
                                className: N.legacyUsernameBadgeContainer,
                                children: (0, s.jsx)(u.Tooltip, {
                                    position: 'top',
                                    text: h.Z.Messages.ORIGINALLY_KNOWN_AS.format({ legacyUsername: B }),
                                    spacing: 12,
                                    children: (e) =>
                                        (0, s.jsx)(u.Anchor, {
                                            ...e,
                                            onClick: e.onClick,
                                            children: (0, s.jsx)('img', {
                                                className: N.legacyUsernameBadge,
                                                alt: '',
                                                src: O
                                            })
                                        })
                                })
                            })
                    ]
                }),
                A !== S.Wq.PREVIEW &&
                    (0, s.jsxs)(o.animated.div, {
                        style: {
                            opacity: D.opacity,
                            y: D.y
                        },
                        className: N.inputContainer,
                        children: [
                            A === S.Wq.EDIT_DISPLAY_NAME &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(u.Text, {
                                            className: N.textPadding,
                                            color: 'text-muted',
                                            variant: 'text-sm/semibold',
                                            children: h.Z.Messages.DISPLAY_NAME
                                        }),
                                        (0, s.jsx)(M, {
                                            style: r()(N.displayNameHeight, N['heading-xl/bold']),
                                            value: null != b ? b : '',
                                            placeholder: m.ZP.getName(n),
                                            maxLength: S.hy,
                                            onChange: (e) => x({ globalName: e }),
                                            onFocus: R,
                                            ref: G
                                        })
                                    ]
                                }),
                            (A === S.Wq.EDIT_USERNAME || A === S.Wq.SUGGESTION) &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(u.Text, {
                                            className: N.textPadding,
                                            color: 'text-muted',
                                            variant: 'text-sm/semibold',
                                            children: h.Z.Messages.USERNAME
                                        }),
                                        (0, s.jsx)(M, {
                                            style: r()(N.userCardHeight, N.lowercaseUsername, N['heading-lg/medium']),
                                            value: null != Z ? Z : '',
                                            placeholder: n.username,
                                            maxLength: S.hy,
                                            onChange: (e) => x({ username: e.replace('@', '') }),
                                            onFocus: p,
                                            ref: U
                                        })
                                    ]
                                }),
                            (0, s.jsx)('div', {
                                className: N.messageContainer,
                                children: (() => {
                                    if (null != a)
                                        return (0, s.jsx)(f.Z, {
                                            type: 'error',
                                            children: a
                                        });
                                    if (null != P) {
                                        if (A !== S.Wq.SUGGESTION)
                                            return (0, s.jsx)(u.Text, {
                                                variant: 'text-sm/normal',
                                                children: P
                                            });
                                        if (!v)
                                            return (0, s.jsx)(f.Z, {
                                                type: 'success',
                                                children: P
                                            });
                                    }
                                    return null == P && null == a && (A === S.Wq.EDIT_USERNAME || A === S.Wq.SUGGESTION)
                                        ? (0, s.jsx)(I.Z, {
                                              username: Z,
                                              oneClickFlow: y
                                          })
                                        : null;
                                })()
                            })
                        ]
                    }),
                A === S.Wq.PREVIEW &&
                    (0, s.jsxs)('div', {
                        className: N.userCard,
                        children: [
                            (0, s.jsx)(u.Heading, {
                                color: 'header-primary',
                                variant: 'heading-xl/bold',
                                children: m.ZP.getName(n)
                            }),
                            (0, s.jsx)(u.Heading, {
                                color: 'text-normal',
                                variant: 'heading-lg/medium',
                                children: n.username
                            }),
                            (0, s.jsx)(u.Text, {
                                className: N.memberText,
                                color: 'text-muted',
                                variant: 'text-sm/medium',
                                children: h.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: (0, g.K9)(n.id) })
                            })
                        ]
                    })
            ]
        })
    );
});
