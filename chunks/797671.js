n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    }),
    n(653041),
    n(47120),
    n(773603);
var i = n(200651),
    o = n(192379),
    r = n(990547),
    a = n(442837),
    l = n(283693),
    c = n(481060),
    d = n(218613),
    s = n(911969),
    u = n(600164),
    _ = n(313201),
    p = n(456269),
    b = n(408987),
    E = n(312146),
    h = n(60222),
    m = n(131704),
    S = n(324067),
    I = n(430824),
    C = n(259580),
    y = n(934415),
    R = n(700785),
    f = n(573261),
    A = n(981631),
    N = n(231338),
    U = n(388032),
    T = n(496356);
function x(e) {
    var t, n;
    let { guildId: x, transitionState: g, onSubmit: L, onClose: v } = e,
        w = (0, _.Dt)(),
        F = (0, _.Dt)(),
        M = (0, _.Dt)(),
        B = (0, _.Dt)(),
        [H, Z] = o.useState(A.Sc2),
        [D, P] = o.useState(A.d4z.GUILD_TEXT),
        [j, k] = o.useState(''),
        [O, G] = o.useState(!1),
        K = (0, a.e7)([I.Z], () => I.Z.getGuild(x), [x]),
        W = (0, h.m)(x),
        V = (0, p.W3)(x),
        Y = (0, E.Ui)(K),
        z = o.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: o } = e,
                        r = [
                            {
                                icon: c.TextIcon,
                                label: U.intl.string(U.t.pnuRXF),
                                value: A.d4z.GUILD_TEXT,
                                description: U.intl.string(U.t.Hf5Lb2)
                            },
                            {
                                icon: c.VoiceNormalIcon,
                                label: U.intl.string(U.t.Sx55Oj),
                                value: A.d4z.GUILD_VOICE,
                                description: U.intl.string(U.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            r.push({
                                icon: c.StageIcon,
                                label: U.intl.string(U.t.pNWst7),
                                value: A.d4z.GUILD_STAGE_VOICE,
                                description: U.intl.string(U.t.VPAwgo)
                            }),
                        n &&
                            (r.push({
                                icon: c.ForumIcon,
                                label: U.intl.string(U.t.eAVIDw),
                                value: A.d4z.GUILD_FORUM,
                                description: U.intl.string(U.t.iZ5pgo)
                            }),
                            o &&
                                r.push({
                                    icon: c.ImageIcon,
                                    label: U.intl.string(U.t['6x6fVl']),
                                    value: A.d4z.GUILD_MEDIA,
                                    description: U.intl.string(U.t.JyCrwc),
                                    isBeta: !0
                                })),
                        r.map((e) => {
                            let { icon: t, label: n, value: o, description: r, isBeta: a } = e;
                            return {
                                name: (0, i.jsxs)('div', {
                                    className: T.channelOptionWrapper,
                                    children: [
                                        (0, i.jsx)(t, { className: T.icon }),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsxs)(c.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, i.jsx)(d.ChannelTypeBadge, { isBeta: a })]
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: r
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: o,
                                channelIcon: t
                            };
                        })
                    );
                })({
                    canCreateStageChannel: W,
                    canCreateForumChannel: V,
                    canCreateMediaChannel: Y
                }),
            [W, V, Y]
        ),
        Q = (0, a.e7)([S.Z], () => S.Z.getCategories(x)._categories, [x]),
        X = o.useMemo(
            () =>
                Q.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [Q]
        ),
        q = null !== (n = null === (t = z.find((e) => e.value === D)) || void 0 === t ? void 0 : t.channelIcon) && void 0 !== n ? n : N.Vq,
        J = '' !== j;
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            G(!0);
            let t = {
                type: D,
                name: j,
                parent_id: 'null' !== H ? H : void 0,
                permission_overwrites: [
                    {
                        id: x,
                        type: s.BN.ROLE,
                        allow: R.Hn,
                        deny: A.Plq.VIEW_CHANNEL
                    }
                ]
            };
            f.Z.post({
                url: A.ANM.GUILD_CHANNELS(x),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, l.iG)({
                            is_private: !0,
                            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                        });
                    }
                },
                rejectWithError: !1
            })
                .then(
                    (e) => {
                        b.Z.checkGuildTemplateDirty(x), L(e.body.id), v();
                    },
                    (e) => {}
                )
                .finally(() => {
                    G(!1);
                });
        },
        children: (0, i.jsxs)(c.ModalRoot, {
            transitionState: g,
            'aria-labelledby': w,
            children: [
                (0, i.jsxs)(c.ModalHeader, {
                    children: [
                        (0, i.jsx)(c.Heading, {
                            id: w,
                            variant: 'heading-md/semibold',
                            children: U.intl.string(U.t['fUYU+v'])
                        }),
                        (0, i.jsx)(c.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: v
                        })
                    ]
                }),
                (0, i.jsxs)(c.ModalContent, {
                    className: T.modalContent,
                    children: [
                        (0, i.jsx)(c.FormItem, {
                            title: U.intl.string(U.t.vHCZws),
                            titleId: F,
                            children: (0, i.jsx)(c.SingleSelect, {
                                placeholder: U.intl.string(U.t['g/Rr2d']),
                                value: H,
                                options: X,
                                onChange: (e) => Z(e),
                                'aria-labelledby': F
                            })
                        }),
                        (0, i.jsx)('div', { className: T.spacer }),
                        (0, i.jsx)(c.FormItem, {
                            title: U.intl.string(U.t['7ZcXGx']),
                            titleId: M,
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: z,
                                value: D,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return P(t);
                                },
                                'aria-labelledby': M
                            })
                        }),
                        (0, i.jsx)('div', { className: T.spacer }),
                        (0, i.jsx)(c.FormItem, {
                            title: U.intl.string(U.t.PVbHDg),
                            titleId: B,
                            children: (0, i.jsx)(c.TextInput, {
                                value: j,
                                onChange: function (e) {
                                    (0, m.zi)(D) && (e = (0, y.Nj)(e)), k(e);
                                },
                                maxLength: A.HN8,
                                placeholder: U.intl.string(U.t['bw/b8P']),
                                className: T.inputWrapper,
                                inputClassName: T.inputInner,
                                prefixElement: (0, i.jsx)(q, {
                                    className: T.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': B,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(c.ModalFooter, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(c.Button, {
                            type: 'submit',
                            submitting: O,
                            disabled: !J,
                            children: U.intl.string(U.t.R3BPHx)
                        }),
                        (0, i.jsxs)(c.Button, {
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            className: T.backButton,
                            innerClassName: T.backButtonInner,
                            onClick: v,
                            children: [(0, i.jsx)(C.Z, { direction: C.Z.Directions.LEFT }), U.intl.string(U.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
