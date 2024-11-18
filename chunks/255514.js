n(47120), n(773603);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(600164),
    o = n(155647),
    l = n(299443),
    u = n(185625),
    c = n(273389),
    d = n(778231),
    f = n(816342),
    _ = n(15667),
    p = n(76264),
    h = n(805746),
    m = n(822686),
    g = n(356110),
    E = n(730719),
    v = n(996701),
    b = n(320596),
    I = n(273514),
    S = n(995712),
    T = n(234937),
    y = n(473121),
    A = n(449413),
    N = n(266080),
    C = n(316617),
    R = n(15682),
    O = n(189472),
    D = n(749534),
    L = n(157759),
    x = n(521332),
    w = n(905434),
    M = n(196627),
    P = n(739319),
    k = n(842401),
    U = n(375790),
    G = n(981631),
    B = n(388032),
    Z = n(980105);
function F(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function V(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
t.Z = (e) => {
    let { node: t, reportType: n, reportSubType: j, history: H, onSelectChild: Y, onModalClose: W, onSubmit: K, multiSelect: z, reportId: q, textInput: Q } = e,
        X = F(t, 'checkbox'),
        J = F(t, 'text_line_resource'),
        $ = V(t, 'external_link'),
        ee = V(t, 'free_text'),
        et = V(t, 'dropdown'),
        [en, er] = i.useState(!1),
        [ei, ea] = i.useState(!1),
        [es, eo] = i.useState(''),
        [el, eu] = i.useState(() => ({})),
        [ec, ed] = i.useState(() => ({})),
        [ef, e_] = i.useState((0, u.VP)(ee, et, X, Q, z)),
        ep = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = { ...ec };
            (r[e] = {
                value: t,
                isValid: n
            }),
                ed(r),
                e_((0, u.VP)(ee, et, X, r, el));
        },
        eh = i.useMemo(
            () => (e) => {
                Y({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != ee || null != et ? ec : void 0,
                    multiSelect:
                        null != X
                            ? {
                                  name: X.name,
                                  state: el
                              }
                            : void 0
                });
            },
            [t, Y, X, el, ec, ee, et]
        );
    i.useEffect(() => {
        null != z && eu(z), null != Q && ed(Q);
    }, [z, Q]);
    let em = (e) => {
            if (e === G.evJ.INVALID_FORM_BODY) eo(B.intl.string(B.t.VjAAuL));
            else eo(B.intl.string(B.t.h6D8V1));
        },
        eg = () =>
            K({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    eo(''), eh(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    em(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    er(!1);
                });
    i.useEffect(() => {
        t.is_auto_submit &&
            !ei &&
            (ea(!0),
            K({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, ei, K, t.id]);
    let eE = (0, o.fW)(j),
        ev = (0, l.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != eE ? eE : [],
            channelId: 'message' === n.name ? n.record.channel_id : void 0
        });
    return (0, r.jsxs)('div', {
        className: Z.container,
        children: [
            (0, r.jsxs)(a.ModalHeader, {
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: Z.header,
                children: [(0, r.jsx)(M.Z, { element: F(t, 'success') }), (0, r.jsx)(y.Z, { node: t }), (0, r.jsx)(A.Z, { node: t })]
            }),
            (0, r.jsxs)(a.ModalContent, {
                className: Z.body,
                children: [
                    null != J ? (0, r.jsx)(P.Z, { element: J }) : null,
                    null != F(t, 'breadcrumbs') && (0, r.jsx)(_.Z, { history: H }),
                    null != F(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(C.Z, { message: n.record }),
                    null != F(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(k.Z, { user: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return U.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(D.Z, {
                                    children: [
                                        null != F(t, 'block_users') &&
                                            ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                            (0, r.jsx)(f.Z, {
                                                user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                                reportId: q
                                            }),
                                        null != F(t, 'mute_users') &&
                                            ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                            (0, r.jsx)(O.Z, {
                                                user: 'user' === n.name ? n.record : n.record.author,
                                                reportId: q
                                            }),
                                        null != F(t, 'delete_message') &&
                                            'message' === n.name &&
                                            (0, r.jsx)(m.Z, {
                                                message: n.record,
                                                reportId: q
                                            }),
                                        null != F(t, 'leave_guild') &&
                                            'guild' === n.name &&
                                            (0, r.jsx)(N.Z, {
                                                guildId: n.record.id,
                                                reportId: q
                                            }),
                                        null != F(t, 'deauthorize_app') &&
                                            'application' === n.name &&
                                            (0, r.jsx)(h.Z, {
                                                application: n.record,
                                                reportId: q
                                            })
                                    ]
                                }),
                                null != F(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(L.Z, {
                                        application: n.record,
                                        reportId: q
                                    })
                            ]
                        }),
                    null != F(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eE &&
                        ev &&
                        (0, r.jsx)(x.Z, {
                            settingsUpsells: eE,
                            channelId: n.record.channel_id,
                            onModalClose: W,
                            reportId: q,
                            reportType: n,
                            reportSubType: j
                        }),
                    null != F(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(w.Z, { stageInstance: n.record }),
                    null != F(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(T.Z, { event: n.record }),
                    null != F(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(I.Z, { entry: n.record }),
                    null != F(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(S.Z, { entry: n.record }),
                    null != F(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(d.Z, { entry: n.record }),
                    null != X &&
                        (0, r.jsx)(R.Z, {
                            element: X,
                            onChange: (e, t) => {
                                let n = { ...el };
                                e in el ? delete n[e] : (n[e] = t), eu(n), e_((0, u.VP)(ee, et, X, ec, n));
                            },
                            state: el
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != et &&
                        et.length > 0 &&
                        (0, r.jsx)(g.Z, {
                            elements: et,
                            onChange: ep,
                            state: ec
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != ee &&
                        ee.length > 0 &&
                        (0, r.jsx)(b.Z, {
                            elements: ee,
                            onChange: ep,
                            state: ec
                        }),
                    (0, r.jsx)(p.Z, {
                        node: t,
                        onSelectChild: eh
                    }),
                    null != $ && $.length > 0 ? (0, r.jsx)(v.Z, { elements: $ }) : null,
                    (0, r.jsx)(E.Z, {
                        errorMessage: es,
                        onClose: () => {
                            eo('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                button: t.button,
                submitting: en,
                disableNext: ef,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            W();
                            break;
                        case 'next':
                            eh(['', e.target]);
                            break;
                        case 'submit':
                            er(!0), eg();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: H.length > 0
            }),
            (0, r.jsx)(a.ModalCloseButton, {
                className: Z.closeButton,
                onClick: W
            })
        ]
    });
};
