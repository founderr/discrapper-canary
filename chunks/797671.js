a.r(t),
    a.d(t, {
        default: function () {
            return R;
        }
    }),
    a(653041),
    a(47120),
    a(773603);
var o = a(735250),
    n = a(470079),
    r = a(990547),
    i = a(442837),
    d = a(283693),
    s = a(481060),
    l = a(218613),
    c = a(911969),
    _ = a(600164),
    u = a(313201),
    b = a(456269),
    p = a(408987),
    E = a(312146),
    h = a(60222),
    m = a(131704),
    N = a(324067),
    C = a(430824),
    I = a(259580),
    L = a(934415),
    x = a(700785),
    T = a(573261),
    A = a(981631),
    M = a(231338),
    g = a(689938),
    B = a(941465);
function R(e) {
    var t, a;
    let { guildId: R, transitionState: v, onSubmit: S, onClose: D } = e,
        f = (0, u.Dt)(),
        j = (0, u.Dt)(),
        H = (0, u.Dt)(),
        Z = (0, u.Dt)(),
        [y, O] = n.useState(A.Sc2),
        [w, P] = n.useState(A.d4z.GUILD_TEXT),
        [k, G] = n.useState(''),
        [F, U] = n.useState(!1),
        W = (0, i.e7)([C.Z], () => C.Z.getGuild(R), [R]),
        V = (0, h.m)(R),
        Y = (0, b.W3)(R),
        z = (0, E.Ui)(W),
        X = n.useMemo(
            () =>
                (function (e) {
                    let { canCreateStageChannel: t, canCreateForumChannel: a, canCreateMediaChannel: n } = e,
                        r = [
                            {
                                icon: s.TextIcon,
                                label: g.Z.Messages.TEXT_CHANNEL_TYPE,
                                value: A.d4z.GUILD_TEXT,
                                description: g.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                            },
                            {
                                icon: s.VoiceNormalIcon,
                                label: g.Z.Messages.VOICE_CHANNEL_TYPE,
                                value: A.d4z.GUILD_VOICE,
                                description: g.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                            }
                        ];
                    return (
                        t &&
                            r.push({
                                icon: s.StageIcon,
                                label: g.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                                value: A.d4z.GUILD_STAGE_VOICE,
                                description: g.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
                            }),
                        a &&
                            (r.push({
                                icon: s.ForumIcon,
                                label: g.Z.Messages.FORUM_CHANNEL_TYPE,
                                value: A.d4z.GUILD_FORUM,
                                description: g.Z.Messages.FORUM_CHANNEL_DESCRIPTION
                            }),
                            n &&
                                r.push({
                                    icon: s.ImageIcon,
                                    label: g.Z.Messages.MEDIA_CHANNEL_TYPE,
                                    value: A.d4z.GUILD_MEDIA,
                                    description: g.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                                    isBeta: !0
                                })),
                        r.map((e) => {
                            let { icon: t, label: a, value: n, description: r, isBeta: i } = e;
                            return {
                                name: (0, o.jsxs)('div', {
                                    className: B.channelOptionWrapper,
                                    children: [
                                        (0, o.jsx)(t, { className: B.icon }),
                                        (0, o.jsxs)('div', {
                                            children: [
                                                (0, o.jsxs)(s.Text, {
                                                    variant: 'text-md/normal',
                                                    color: 'header-primary',
                                                    children: [a, (0, o.jsx)(l.ChannelTypeBadge, { isBeta: i })]
                                                }),
                                                (0, o.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: r
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                value: n,
                                channelIcon: t
                            };
                        })
                    );
                })({
                    canCreateStageChannel: V,
                    canCreateForumChannel: Y,
                    canCreateMediaChannel: z
                }),
            [V, Y, z]
        ),
        q = (0, i.e7)([N.Z], () => N.Z.getCategories(R)._categories, [R]),
        K = n.useMemo(
            () =>
                q.map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: t.name
                    };
                }),
            [q]
        ),
        J = null !== (a = null === (t = X.find((e) => e.value === w)) || void 0 === t ? void 0 : t.channelIcon) && void 0 !== a ? a : M.Vq,
        Q = '' !== k;
    return (0, o.jsx)('form', {
        onSubmit: function (e) {
            if ((e.preventDefault(), !Q)) return;
            U(!0);
            let t = {
                type: w,
                name: k,
                parent_id: 'null' !== y ? y : void 0,
                permission_overwrites: [
                    {
                        id: R,
                        type: c.BN.ROLE,
                        allow: x.Hn,
                        deny: A.Plq.VIEW_CHANNEL
                    }
                ]
            };
            T.Z.post({
                url: A.ANM.GUILD_CHANNELS(R),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: (e) => {
                        var t, a;
                        return (0, d.iG)({
                            is_private: !0,
                            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                            channel_type: null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.type
                        });
                    }
                }
            })
                .then(
                    (e) => {
                        p.Z.checkGuildTemplateDirty(R), S(e.body.id), D();
                    },
                    (e) => {}
                )
                .finally(() => {
                    U(!1);
                });
        },
        children: (0, o.jsxs)(s.ModalRoot, {
            transitionState: v,
            'aria-labelledby': f,
            children: [
                (0, o.jsxs)(s.ModalHeader, {
                    children: [
                        (0, o.jsx)(s.Heading, {
                            id: f,
                            variant: 'heading-md/semibold',
                            children: g.Z.Messages.CREATE_CHANNEL
                        }),
                        (0, o.jsx)(s.ModalCloseButton, {
                            className: B.closeButton,
                            onClick: D
                        })
                    ]
                }),
                (0, o.jsxs)(s.ModalContent, {
                    className: B.modalContent,
                    children: [
                        (0, o.jsx)(s.FormItem, {
                            title: g.Z.Messages.CATEGORY,
                            titleId: j,
                            children: (0, o.jsx)(s.SingleSelect, {
                                placeholder: g.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                                value: y,
                                options: K,
                                onChange: (e) => O(e),
                                'aria-labelledby': j
                            })
                        }),
                        (0, o.jsx)('div', { className: B.spacer }),
                        (0, o.jsx)(s.FormItem, {
                            title: g.Z.Messages.CHANNEL_TYPE,
                            titleId: H,
                            children: (0, o.jsx)(s.RadioGroup, {
                                options: X,
                                value: w,
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return P(t);
                                },
                                'aria-labelledby': H
                            })
                        }),
                        (0, o.jsx)('div', { className: B.spacer }),
                        (0, o.jsx)(s.FormItem, {
                            title: g.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                            titleId: Z,
                            children: (0, o.jsx)(s.TextInput, {
                                value: k,
                                onChange: function (e) {
                                    (0, m.zi)(w) && (e = (0, L.Nj)(e)), G(e);
                                },
                                maxLength: A.HN8,
                                placeholder: g.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
                                className: B.inputWrapper,
                                inputClassName: B.inputInner,
                                prefixElement: (0, o.jsx)(J, {
                                    className: B.inputPrefix,
                                    color: 'currentColor',
                                    'aria-hidden': !0
                                }),
                                'aria-labelledby': Z,
                                autoFocus: !0
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(s.ModalFooter, {
                    justify: _.Z.Justify.BETWEEN,
                    children: [
                        (0, o.jsx)(s.Button, {
                            type: 'submit',
                            submitting: F,
                            disabled: !Q,
                            children: g.Z.Messages.SAVE
                        }),
                        (0, o.jsxs)(s.Button, {
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            className: B.backButton,
                            innerClassName: B.backButtonInner,
                            onClick: D,
                            children: [(0, o.jsx)(I.Z, { direction: I.Z.Directions.LEFT }), g.Z.Messages.BACK]
                        })
                    ]
                })
            ]
        })
    });
}
