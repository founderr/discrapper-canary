n(47120), n(773603);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(600164),
    o = n(155647),
    l = n(299443),
    u = n(185625),
    c = n(273389),
    d = n(816342),
    f = n(15667),
    _ = n(76264),
    h = n(822686),
    p = n(356110),
    m = n(730719),
    g = n(996701),
    E = n(320596),
    v = n(273514),
    I = n(995712),
    S = n(234937),
    b = n(473121),
    T = n(449413),
    y = n(266080),
    A = n(316617),
    N = n(15682),
    C = n(189472),
    R = n(749534),
    O = n(521332),
    D = n(905434),
    L = n(196627),
    x = n(739319),
    w = n(842401),
    M = n(375790),
    P = n(981631),
    k = n(388032),
    U = n(980105);
function G(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function B(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
t.Z = (e) => {
    let { node: t, reportType: n, reportSubType: Z, history: F, onSelectChild: V, onModalClose: H, onSubmit: j, multiSelect: Y, reportId: W, textInput: K } = e,
        z = G(t, 'checkbox'),
        q = G(t, 'text_line_resource'),
        Q = B(t, 'external_link'),
        X = B(t, 'free_text'),
        J = B(t, 'dropdown'),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(''),
        [ea, es] = i.useState(() => ({})),
        [eo, el] = i.useState(() => ({})),
        [eu, ec] = i.useState((0, u.VP)(X, J, z, K, Y)),
        ed = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = { ...eo };
            (r[e] = {
                value: t,
                isValid: n
            }),
                el(r),
                ec((0, u.VP)(X, J, z, r, ea));
        },
        ef = i.useMemo(
            () => (e) => {
                V({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != X || null != J ? eo : void 0,
                    multiSelect:
                        null != z
                            ? {
                                  name: z.name,
                                  state: ea
                              }
                            : void 0
                });
            },
            [t, V, z, ea, eo, X, J]
        );
    i.useEffect(() => {
        null != Y && es(Y), null != K && el(K);
    }, [Y, K]);
    let e_ = (e) => {
            if (e === P.evJ.INVALID_FORM_BODY) ei(k.intl.string(k.t.VjAAuL));
            else ei(k.intl.string(k.t.h6D8V1));
        },
        eh = () =>
            j({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ei(''), ef(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    e_(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    ee(!1);
                });
    i.useEffect(() => {
        t.is_auto_submit &&
            !et &&
            (en(!0),
            j({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, et, j, t.id]);
    let ep = (0, o.fW)(Z),
        em = (0, l.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != ep ? ep : [],
            channelId: 'message' === n.name ? n.record.channel_id : void 0
        });
    return (0, r.jsxs)('div', {
        className: U.container,
        children: [
            (0, r.jsxs)(a.ModalHeader, {
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: U.header,
                children: [(0, r.jsx)(L.Z, { element: G(t, 'success') }), (0, r.jsx)(b.Z, { node: t }), (0, r.jsx)(T.Z, { node: t })]
            }),
            (0, r.jsxs)(a.ModalContent, {
                className: U.body,
                children: [
                    null != q ? (0, r.jsx)(x.Z, { element: q }) : null,
                    null != G(t, 'breadcrumbs') && (0, r.jsx)(f.Z, { history: F }),
                    null != G(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(A.Z, { message: n.record }),
                    null != G(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(w.Z, { user: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return M.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(R.Z, {
                            children: [
                                null != G(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(d.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        reportId: W
                                    }),
                                null != G(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, r.jsx)(C.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        reportId: W
                                    }),
                                null != G(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, r.jsx)(h.Z, {
                                        message: n.record,
                                        reportId: W
                                    }),
                                null != G(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, r.jsx)(y.Z, {
                                        guildId: n.record.id,
                                        reportId: W
                                    })
                            ]
                        }),
                    null != G(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != ep &&
                        em &&
                        (0, r.jsx)(O.Z, {
                            settingsUpsells: ep,
                            channelId: n.record.channel_id,
                            onModalClose: H,
                            reportId: W,
                            reportType: n,
                            reportSubType: Z
                        }),
                    null != G(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(D.Z, { stageInstance: n.record }),
                    null != G(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(S.Z, { event: n.record }),
                    null != G(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(v.Z, { entry: n.record }),
                    null != G(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(I.Z, { entry: n.record }),
                    null != z &&
                        (0, r.jsx)(N.Z, {
                            element: z,
                            onChange: (e, t) => {
                                let n = { ...ea };
                                e in ea ? delete n[e] : (n[e] = t), es(n), ec((0, u.VP)(X, J, z, eo, n));
                            },
                            state: ea
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != J &&
                        J.length > 0 &&
                        (0, r.jsx)(p.Z, {
                            elements: J,
                            onChange: ed,
                            state: eo
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != X &&
                        X.length > 0 &&
                        (0, r.jsx)(E.Z, {
                            elements: X,
                            onChange: ed,
                            state: eo
                        }),
                    (0, r.jsx)(_.Z, {
                        node: t,
                        onSelectChild: ef
                    }),
                    null != Q && Q.length > 0 ? (0, r.jsx)(g.Z, { elements: Q }) : null,
                    (0, r.jsx)(m.Z, {
                        errorMessage: er,
                        onClose: () => {
                            ei('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                button: t.button,
                submitting: $,
                disableNext: eu,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            H();
                            break;
                        case 'next':
                            ef(['', e.target]);
                            break;
                        case 'submit':
                            ee(!0), eh();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: F.length > 0
            }),
            (0, r.jsx)(a.ModalCloseButton, {
                className: U.closeButton,
                onClick: H
            })
        ]
    });
};
