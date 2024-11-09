n.r(t),
    n.d(t, {
        default: function () {
            return T;
        }
    }),
    n(653041),
    n(47120),
    n(773603);
var o = n(200651),
    i = n(192379),
    r = n(990547),
    a = n(442837),
    l = n(283693),
    d = n(481060),
    c = n(218613),
    s = n(911969),
    u = n(600164),
    _ = n(313201),
    p = n(456269),
    b = n(408987),
    h = n(312146),
    m = n(60222),
    E = n(131704),
    S = n(324067),
    I = n(430824),
    f = n(259580),
    C = n(934415),
    y = n(700785),
    R = n(573261),
    x = n(981631),
    A = n(231338),
    g = n(388032),
    N = n(941465);
function T(e) {
    var t, n;
    let { guildId: T, transitionState: U, onSubmit: L, onClose: v } = e,
        w = (0, _.Dt)(),
        F = (0, _.Dt)(),
        B = (0, _.Dt)(),
        M = (0, _.Dt)(),
        [H, Z] = i.useState(x.Sc2),
        [D, P] = i.useState(x.d4z.GUILD_TEXT),
        [k, j] = i.useState(''),
        [O, K] = i.useState(!1),
        G = (0, a.e7)([I.Z], () => I.Z.getGuild(T), [T]),
        W = (0, m.m)(T),
        V = (0, p.W3)(T),
        z = (0, h.Ui)(G),
        Q = i.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: i } = e,
                        r = [
                            {
                                icon: d.TextIcon,
                                label: g.intl.string(g.t.pnuRXF),
                                value: x.d4z.GUILD_TEXT,
                                description: g.intl.string(g.t.Hf5Lb2)
                            },
                            {
                                icon: d.VoiceNormalIcon,
                                label: g.intl.string(g.t.Sx55Oj),
                                value: x.d4z.GUILD_VOICE,
                                description: g.intl.string(g.t.pqfkoK)
                            }
                        ];
                    return (
                        t &&
                            r.push({
                                icon: d.StageIcon,
                                label: g.intl.string(g.t.pNWst7),
                                value: x.d4z.GUILD_STAGE_VOICE,
                                description: g.intl.string(g.t.VPAwgo)
                            }),
                        n &&
                            (r.push({
                                icon: d.ForumIcon,
                                label: g.intl.string(g.t.eAVIDw),
                                value: x.d4z.GUILD_FORUM,
                                description: g.intl.string(g.t.iZ5pgo)
                            }),
                            i &&
                                r.push({
                                    icon: d.ImageIcon,
                                    label: g.intl.string(g.t['6x6fVl']),
                                    value: x.d4z.GUILD_MEDIA,
                                    description: g.intl.string(g.t.JyCrwc),
                                    isBeta: !0
                                })),
                        r.map((e) => {
                            let { icon: t, label: n, value: i, description: r, isBeta: a } = e;
                            return {
                                name: (0, o.jsxs)('div', {
                                    className: N.channelOptionWrapper,
                                    children: [
                                        (0, o.jsx)(t, { className: N.icon }),
                                        (0, o.jsxs)('div', {
                                            children: [
                                                (0, o.jsxs)(d.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, o.jsx)(c.ChannelTypeBadge, { isBeta: a })]
                                                }),
                                                (0, o.jsx)(d.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: r
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: i,
                                channelIcon: t
                            };
                        })
                    );
                })({
                    canCreateStageChannel: W,
                    canCreateForumChannel: V,
                    canCreateMediaChannel: z
                }),
            [W, V, z]
        ),
        X = (0, a.e7)([S.Z], () => S.Z.getCategories(T)._categories, [T]),
        Y = i.useMemo(
            () =>
                X.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [X]
        ),
        q = null !== (n = null === (t = Q.find((e) => e.value === D)) || void 0 === t ? void 0 : t.channelIcon) && void 0 !== n ? n : A.Vq,
        J = '' !== k;
    return (0, o.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !J)) return;
            K(!0);
            let t = {
                type: D,
                name: k,
                parent_id: 'null' !== H ? H : void 0,
                permission_overwrites: [
                    {
                        id: T,
                        type: s.BN.ROLE,
                        allow: y.Hn,
                        deny: x.Plq.VIEW_CHANNEL
                    }
                ]
            };
            R.Z.post({
                url: x.ANM.GUILD_CHANNELS(T),
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
                }
            })
                .then(
                    (e) => {
                        b.Z.checkGuildTemplateDirty(T), L(e.body.id), v();
                    },
                    (e) => {}
                )
                .finally(() => {
                    K(!1);
                });
        },
        children: (0, o.jsxs)(d.ModalRoot, {
            transitionState: U,
            'aria-labelledby': w,
            children: [
                (0, o.jsxs)(d.ModalHeader, {
                    children: [
                        (0, o.jsx)(d.Heading, {
                            id: w,
                            variant: 'heading-md/semibold',
                            children: g.intl.string(g.t['fUYU+v'])
                        }),
                        (0, o.jsx)(d.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: v
                        })
                    ]
                }),
                (0, o.jsxs)(d.ModalContent, {
                    className: N.modalContent,
                    children: [
                        (0, o.jsx)(d.FormItem, {
                            title: g.intl.string(g.t.vHCZws),
                            titleId: F,
                            children: (0, o.jsx)(d.SingleSelect, {
                                placeholder: g.intl.string(g.t['g/Rr2d']),
                                value: H,
                                options: Y,
                                onChange: (e) => Z(e),
                                'aria-labelledby': F
                            })
                        }),
                        (0, o.jsx)('div', { className: N.spacer }),
                        (0, o.jsx)(d.FormItem, {
                            title: g.intl.string(g.t['7ZcXGx']),
                            titleId: B,
                            children: (0, o.jsx)(d.RadioGroup, {
                                options: Q,
                                value: D,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return P(t);
                                },
                                'aria-labelledby': B
                            })
                        }),
                        (0, o.jsx)('div', { className: N.spacer }),
                        (0, o.jsx)(d.FormItem, {
                            title: g.intl.string(g.t.PVbHDg),
                            titleId: M,
                            children: (0, o.jsx)(d.TextInput, {
                                value: k,
                                onChange: function (e) {
                                    (0, E.zi)(D) && (e = (0, C.Nj)(e)), j(e);
                                },
                                maxLength: x.HN8,
                                placeholder: g.intl.string(g.t['bw/b8P']),
                                className: N.inputWrapper,
                                inputClassName: N.inputInner,
                                prefixElement: (0, o.jsx)(q, {
                                    className: N.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': M,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(d.ModalFooter, {
                    justify: u.Z.Justify.BETWEEN,
                    children: [
                        (0, o.jsx)(d.Button, {
                            type: 'submit',
                            submitting: O,
                            disabled: !J,
                            children: g.intl.string(g.t.R3BPHx)
                        }),
                        (0, o.jsxs)(d.Button, {
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            className: N.backButton,
                            innerClassName: N.backButtonInner,
                            onClick: v,
                            children: [(0, o.jsx)(f.Z, { direction: f.Z.Directions.LEFT }), g.intl.string(g.t['13/7kZ'])]
                        })
                    ]
                })
            ]
        })
    });
}
