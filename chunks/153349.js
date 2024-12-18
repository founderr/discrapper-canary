n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    d = n.n(c),
    u = n(442837),
    h = n(481060),
    p = n(239091),
    m = n(99690),
    f = n(616780),
    g = n(665149),
    C = n(484459),
    x = n(347475),
    v = n(271383),
    _ = n(496675),
    I = n(158776),
    E = n(471253),
    b = n(431328),
    Z = n(145834),
    N = n(590415),
    S = n(614173),
    T = n(618896),
    j = n(231338),
    A = n(388032),
    y = n(875440);
let P = a.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(g.ZP.Icon, {
                icon: h.XSmallIcon,
                tooltip: A.intl.string(A.t.cpT0Cg),
                onClick: t
            });
        return (0, r.jsxs)(g.ZP, {
            toolbar: i,
            className: o()(y.headerContainer, { [y.chatOpen]: n }),
            children: [
                (0, r.jsx)(g.ZP.Icon, {
                    icon: h.HandRequestSpeakIcon,
                    disabled: !0,
                    'aria-label': A.intl.string(A.t.TYZgzc)
                }),
                (0, r.jsx)(g.ZP.Title, { children: A.intl.string(A.t.TYZgzc) })
            ]
        });
    }),
    M = a.memo(function (e) {
        let { channel: t, participant: i, tempDisableOnInit: l = !1 } = e,
            [s, c] = a.useState(l);
        a.useEffect(() => {
            if (!s) return;
            let e = setTimeout(() => c(!1), 1000);
            return () => clearTimeout(e);
        }, []);
        let g = t.getGuildId();
        d()(null != g, 'Channel cannot be guildless');
        let { isMobile: _, status: b } = (0, u.cj)([I.Z], () => ({
                isMobile: I.Z.isMobileOnline(i.user.id),
                status: I.Z.getStatus(i.user.id, g)
            })),
            S = (0, u.e7)([v.ZP], () => v.ZP.getMember(g, i.user.id)),
            T = a.useMemo(() => ({ [g]: [i.user.id] }), [g, i.user.id]);
        (0, f.$)(T);
        let j = i.rtsState === N.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function P() {
            (0, E.DT)(t, i.user.id, !1);
        }
        function M() {
            (0, E.DT)(t, i.user.id, !0);
        }
        let R = (e) => {
            (0, p.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        user: i.user,
                        guildId: g,
                        channel: t,
                        showMediaItems: !0
                    });
            });
        };
        return (0, r.jsxs)('div', {
            className: y.participantRowContainer,
            children: [
                (0, r.jsx)(h.Popout, {
                    preload: () =>
                        (0, C.Z)(i.user.id, i.user.getAvatarURL(t.guild_id, 80), {
                            guildId: t.guild_id,
                            channelId: t.id
                        }),
                    renderPopout: (e) =>
                        (0, r.jsx)(x.Z, {
                            ...e,
                            userId: i.user.id,
                            guildId: g,
                            channelId: t.id
                        }),
                    position: 'left',
                    spacing: 16,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(h.Clickable, {
                            className: y.participantMemberContainer,
                            onContextMenu: R,
                            ...e,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    size: h.AvatarSizes.SIZE_40,
                                    className: y.participantAvatar,
                                    user: i.user,
                                    isMobile: _,
                                    status: b
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.participantTextContainer,
                                    children: [
                                        (0, r.jsx)(h.NameWithRole, {
                                            name: i.userNick,
                                            color: null !== (t = null == S ? void 0 : S.colorString) && void 0 !== t ? t : void 0,
                                            className: y.participantName
                                        }),
                                        (0, r.jsx)(h.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'header-secondary',
                                            children: (0, Z.$)(i)
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                }),
                (0, r.jsx)(h.Tooltip, {
                    text: j ? A.intl.string(A.t.h9rsTU) : A.intl.string(A.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(h.Button, {
                            ...e,
                            innerClassName: y.buttonContainer,
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            onClick: P,
                            disabled: j || s,
                            children: (0, r.jsx)(h.MicrophoneArrowRightIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                }),
                (0, r.jsx)(h.Tooltip, {
                    text: A.intl.string(A.t.moABMz),
                    children: (e) =>
                        (0, r.jsx)(h.Button, {
                            ...e,
                            innerClassName: o()(y.buttonContainer, y.buttonMargin),
                            look: h.Button.Looks.BLANK,
                            size: h.Button.Sizes.NONE,
                            onClick: M,
                            children: (0, r.jsx)(h.XSmallIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                })
            ]
        });
    }),
    R = a.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, S.h)(t.id);
        return (0, r.jsx)(h.FormSwitch, {
            className: y.toggle,
            onChange: i,
            value: n,
            children: A.intl.string(A.t.GYCh0d)
        });
    }),
    L = a.memo(function () {
        return (0, r.jsxs)('div', {
            className: y.emptyStateContainer,
            children: [
                (0, r.jsx)(T.Z, {}),
                (0, r.jsx)(h.Text, {
                    className: y.emptyStateTitle,
                    variant: 'text-lg/semibold',
                    color: 'header-primary',
                    children: A.intl.string(A.t['7R24mZ'])
                }),
                (0, r.jsx)(h.Text, {
                    className: y.emptyStateBody,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: A.intl.string(A.t.Rpr2s7)
                })
            ]
        });
    });
function k(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, b.Fd)(t.id),
        a = [(0, u.e7)([_.Z], () => _.Z.can(j.Pl.MANAGE_CHANNELS, t) || _.Z.can(j.Pl.MANAGE_ROLES, t)) ? 1 : 0, Math.max(1, l.length)];
    return (0, r.jsxs)('div', {
        className: o()(y.container, { [y.chatOpen]: i }),
        children: [
            (0, r.jsx)(P, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i
            }),
            (0, r.jsx)(h.List, {
                className: y.contentContainer,
                sections: a,
                sectionHeight: function (e) {
                    if (1 === e) return 40;
                    return 0;
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === l.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: i } = e;
                    switch (n) {
                        case 0:
                            return (0, r.jsx)(R, { channel: t }, 'rts-toggle');
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(L, {}, 'participants-empty');
                            let e = l[i];
                            return (0, r.jsx)(
                                M,
                                {
                                    channel: t,
                                    participant: e,
                                    tempDisableOnInit: !0
                                },
                                e.id
                            );
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    if (1 === t)
                        return (0, r.jsx)(
                            h.Text,
                            {
                                className: y.listTitle,
                                variant: 'text-xs/bold',
                                color: 'header-secondary',
                                children: l.length > 0 ? A.intl.formatToPlainString(A.t['5z7q5e'], { numHands: l.length }) : A.intl.string(A.t.TYZgzc)
                            },
                            'participants-section'
                        );
                    return null;
                }
            })
        ]
    });
}
((l = i || (i = {}))[(l.TOGGLE_REQUEST_TO_SPEAK = 0)] = 'TOGGLE_REQUEST_TO_SPEAK'), (l[(l.PARTICIPANTS = 1)] = 'PARTICIPANTS');
