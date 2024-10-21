n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(653041),
    n(47120),
    n(773603);
var o = n(200651),
    a = n(192379),
    i = n(990547),
    r = n(442837),
    d = n(283693),
    l = n(481060),
    c = n(218613),
    s = n(911969),
    _ = n(600164),
    u = n(313201),
    p = n(456269),
    E = n(408987),
    b = n(312146),
    C = n(60222),
    h = n(131704),
    I = n(324067),
    m = n(430824),
    S = n(259580),
    N = n(934415),
    A = n(700785),
    T = n(573261),
    R = n(981631),
    y = n(231338),
    L = n(689938),
    f = n(941465);
function M(e) {
    var t, n;
    let { guildId: M, transitionState: x, onSubmit: g, onClose: U } = e,
        H = (0, u.Dt)(),
        Z = (0, u.Dt)(),
        F = (0, u.Dt)(),
        v = (0, u.Dt)(),
        [B, D] = a.useState(R.Sc2),
        [P, w] = a.useState(R.d4z.GUILD_TEXT),
        [O, k] = a.useState(''),
        [j, G] = a.useState(!1),
        K = (0, r.e7)([m.Z], () => m.Z.getGuild(M), [M]),
        W = (0, C.m)(M),
        V = (0, p.W3)(M),
        Y = (0, b.Ui)(K),
        z = a.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: n, canCreateMediaChannel: a } = e,
                        i = [
                            {
                                icon: l.TextIcon,
                                label: L.Z.Messages.TEXT_CHANNEL_TYPE,
                                value: R.d4z.GUILD_TEXT,
                                description: L.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                            },
                            {
                                icon: l.VoiceNormalIcon,
                                label: L.Z.Messages.VOICE_CHANNEL_TYPE,
                                value: R.d4z.GUILD_VOICE,
                                description: L.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                            }
                        ];
                    return (
                        t &&
                            i.push({
                                icon: l.StageIcon,
                                label: L.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                                value: R.d4z.GUILD_STAGE_VOICE,
                                description: L.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
                            }),
                        n &&
                            (i.push({
                                icon: l.ForumIcon,
                                label: L.Z.Messages.FORUM_CHANNEL_TYPE,
                                value: R.d4z.GUILD_FORUM,
                                description: L.Z.Messages.FORUM_CHANNEL_DESCRIPTION
                            }),
                            a &&
                                i.push({
                                    icon: l.ImageIcon,
                                    label: L.Z.Messages.MEDIA_CHANNEL_TYPE,
                                    value: R.d4z.GUILD_MEDIA,
                                    description: L.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                                    isBeta: !0
                                })),
                        i.map((e) => {
                            let { icon: t, label: n, value: a, description: i, isBeta: r } = e;
                            return {
                                name: (0, o.jsxs)('div', {
                                    className: f.channelOptionWrapper,
                                    children: [
                                        (0, o.jsx)(t, { className: f.icon }),
                                        (0, o.jsxs)('div', {
                                            children: [
                                                (0, o.jsxs)(l.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [n, (0, o.jsx)(c.ChannelTypeBadge, { isBeta: r })]
                                                }),
                                                (0, o.jsx)(l.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: i
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: a,
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
        Q = (0, r.e7)([I.Z], () => I.Z.getCategories(M)._categories, [M]),
        X = a.useMemo(
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
        q = null !== (n = null === (t = z.find((e) => e.value === P)) || void 0 === t ? void 0 : t.channelIcon) && void 0 !== n ? n : y.Vq,
        $ = '' !== O;
    return (0, o.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !$)) return;
            G(!0);
            let t = {
                type: P,
                name: O,
                parent_id: 'null' !== B ? B : void 0,
                permission_overwrites: [
                    {
                        id: M,
                        type: s.BN.ROLE,
                        allow: A.Hn,
                        deny: R.Plq.VIEW_CHANNEL
                    }
                ]
            };
            T.Z.post({
                url: R.ANM.GUILD_CHANNELS(M),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, n;
                        return (0, d.iG)({
                            is_private: !0,
                            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
                        });
                    }
                }
            })
                .then(
                    (e) => {
                        E.Z.checkGuildTemplateDirty(M), g(e.body.id), U();
                    },
                    (e) => {}
                )
                .finally(() => {
                    G(!1);
                });
        },
        children: (0, o.jsxs)(l.ModalRoot, {
            transitionState: x,
            'aria-labelledby': H,
            children: [
                (0, o.jsxs)(l.ModalHeader, {
                    children: [
                        (0, o.jsx)(l.Heading, {
                            id: H,
                            variant: 'heading-md/semibold',
                            children: L.Z.Messages.CREATE_CHANNEL
                        }),
                        (0, o.jsx)(l.ModalCloseButton, {
                            className: f.closeButton,
                            onClick: U
                        })
                    ]
                }),
                (0, o.jsxs)(l.ModalContent, {
                    className: f.modalContent,
                    children: [
                        (0, o.jsx)(l.FormItem, {
                            title: L.Z.Messages.CATEGORY,
                            titleId: Z,
                            children: (0, o.jsx)(l.SingleSelect, {
                                placeholder: L.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                                value: B,
                                options: X,
                                onChange: (e) => D(e),
                                'aria-labelledby': Z
                            })
                        }),
                        (0, o.jsx)('div', { className: f.spacer }),
                        (0, o.jsx)(l.FormItem, {
                            title: L.Z.Messages.CHANNEL_TYPE,
                            titleId: F,
                            children: (0, o.jsx)(l.RadioGroup, {
                                options: z,
                                value: P,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return w(t);
                                },
                                'aria-labelledby': F
                            })
                        }),
                        (0, o.jsx)('div', { className: f.spacer }),
                        (0, o.jsx)(l.FormItem, {
                            title: L.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                            titleId: v,
                            children: (0, o.jsx)(l.TextInput, {
                                value: O,
                                onChange: function (e) {
                                    (0, h.zi)(P) && (e = (0, N.Nj)(e)), k(e);
                                },
                                maxLength: R.HN8,
                                placeholder: L.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
                                className: f.inputWrapper,
                                inputClassName: f.inputInner,
                                prefixElement: (0, o.jsx)(q, {
                                    className: f.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': v,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(l.ModalFooter, {
                    justify: _.Z.Justify.BETWEEN,
                    children: [
                        (0, o.jsx)(l.Button, {
                            type: 'submit',
                            submitting: j,
                            disabled: !$,
                            children: L.Z.Messages.SAVE
                        }),
                        (0, o.jsxs)(l.Button, {
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            className: f.backButton,
                            innerClassName: f.backButtonInner,
                            onClick: U,
                            children: [(0, o.jsx)(S.Z, { direction: S.Z.Directions.LEFT }), L.Z.Messages.BACK]
                        })
                    ]
                })
            ]
        })
    });
}
