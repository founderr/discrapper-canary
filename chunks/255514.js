n(47120), n(773603);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(600164),
    o = n(922611),
    l = n(155647),
    u = n(299443),
    c = n(185625),
    d = n(273389),
    f = n(778231),
    _ = n(816342),
    p = n(15667),
    h = n(76264),
    m = n(805746),
    g = n(822686),
    E = n(356110),
    v = n(730719),
    b = n(996701),
    I = n(320596),
    T = n(273514),
    S = n(995712),
    y = n(234937),
    A = n(473121),
    N = n(497954),
    C = n(449413),
    R = n(266080),
    O = n(316617),
    D = n(15682),
    L = n(189472),
    x = n(749534),
    w = n(157759),
    M = n(521332),
    P = n(905434),
    k = n(196627),
    U = n(739319),
    B = n(842401),
    G = n(375790),
    Z = n(981631),
    F = n(388032),
    V = n(133404);
function j(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function H(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
t.Z = (e) => {
    let { node: t, reportType: n, reportSubType: Y, history: W, onSelectChild: K, onModalClose: z, onSubmit: q, multiSelect: Q, reportId: X, textInput: J } = e,
        $ = j(t, 'checkbox'),
        ee = j(t, 'text_line_resource'),
        et = H(t, 'external_link'),
        en = H(t, 'free_text'),
        er = H(t, 'dropdown'),
        [ei, ea] = i.useState(!1),
        [es, eo] = i.useState(!1),
        [el, eu] = i.useState(''),
        [ec, ed] = i.useState(() => ({})),
        [ef, e_] = i.useState(() => ({})),
        [ep, eh] = i.useState((0, c.VP)(en, er, $, J, Q)),
        em = i.useMemo(() => ('message' === n.name ? n.record.channel_id : void 0), [n]),
        eg = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = { ...ef };
            (r[e] = {
                value: t,
                isValid: n
            }),
                e_(r),
                eh((0, c.VP)(en, er, $, r, ec));
        },
        eE = i.useMemo(
            () => (e) => {
                K({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != en || null != er ? ef : void 0,
                    multiSelect:
                        null != $
                            ? {
                                  name: $.name,
                                  state: ec
                              }
                            : void 0
                });
            },
            [t, K, $, ec, ef, en, er]
        );
    i.useEffect(() => {
        null != Q && ed(Q), null != J && e_(J);
    }, [Q, J]);
    let ev = (e) => {
            if (e === Z.evJ.INVALID_FORM_BODY) eu(F.intl.string(F.t.VjAAuL));
            else eu(F.intl.string(F.t.h6D8V1));
        },
        eb = () =>
            q({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    eu(''), eE(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    ev(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    ea(!1);
                });
    i.useEffect(() => {
        t.is_auto_submit &&
            !es &&
            (eo(!0),
            q({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, es, q, t.id]);
    let eI = (0, l.fW)(Y),
        eT = (0, u.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != eI ? eI : [],
            channelId: em
        }),
        eS = (0, o.Do)({ location: 'web_iar_node_view' }) && null != j(t, 'ignore_users') && ('message' === n.name || 'first_dm' === n.name || 'user' === n.name);
    return (0, r.jsxs)('div', {
        className: V.container,
        children: [
            (0, r.jsxs)(a.ModalHeader, {
                separator: !1,
                direction: s.Z.Direction.VERTICAL,
                className: V.header,
                children: [(0, r.jsx)(k.Z, { element: j(t, 'success') }), (0, r.jsx)(A.Z, { node: t }), (0, r.jsx)(C.Z, { node: t })]
            }),
            (0, r.jsxs)(a.ModalContent, {
                className: V.body,
                children: [
                    null != ee ? (0, r.jsx)(U.Z, { element: ee }) : null,
                    null != j(t, 'breadcrumbs') && (0, r.jsx)(p.Z, { history: W }),
                    null != j(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(O.Z, { message: n.record }),
                    null != j(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(B.Z, { user: n.record }) : null,
                    (function (e) {
                        let { elements: t } = e;
                        return t.some((e) => {
                            let { type: t } = e;
                            return G.O.includes(t);
                        });
                    })(t) &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(x.Z, {
                                    children: [
                                        eS &&
                                            (0, r.jsx)(N.Z, {
                                                user: 'user' === n.name ? n.record : n.record.author,
                                                channelId: em,
                                                reportId: X
                                            }),
                                        null != j(t, 'block_users') &&
                                            ('message' === n.name || 'first_dm' === n.name || 'user' === n.name || ('application' === n.name && null != n.record.bot)) &&
                                            (0, r.jsx)(_.Z, {
                                                user: 'application' === n.name ? n.record.bot : 'user' === n.name ? n.record : n.record.author,
                                                channelId: em,
                                                reportId: X
                                            }),
                                        !eS &&
                                            null != j(t, 'mute_users') &&
                                            ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                            (0, r.jsx)(L.Z, {
                                                user: 'user' === n.name ? n.record : n.record.author,
                                                channelId: em,
                                                reportId: X
                                            }),
                                        null != j(t, 'delete_message') &&
                                            'message' === n.name &&
                                            (0, r.jsx)(g.Z, {
                                                message: n.record,
                                                reportId: X
                                            }),
                                        null != j(t, 'leave_guild') &&
                                            'guild' === n.name &&
                                            (0, r.jsx)(R.Z, {
                                                guildId: n.record.id,
                                                reportId: X
                                            }),
                                        null != j(t, 'deauthorize_app') &&
                                            'application' === n.name &&
                                            (0, r.jsx)(m.Z, {
                                                application: n.record,
                                                reportId: X
                                            })
                                    ]
                                }),
                                null != j(t, 'deauthorize_app') &&
                                    'application' === n.name &&
                                    (0, r.jsx)(w.Z, {
                                        application: n.record,
                                        reportId: X
                                    })
                            ]
                        }),
                    null != j(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eI &&
                        eT &&
                        (0, r.jsx)(M.Z, {
                            settingsUpsells: eI,
                            channelId: n.record.channel_id,
                            onModalClose: z,
                            reportId: X,
                            reportType: n,
                            reportSubType: Y
                        }),
                    null != j(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(P.Z, { stageInstance: n.record }),
                    null != j(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(y.Z, { event: n.record }),
                    null != j(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(T.Z, { entry: n.record }),
                    null != j(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(S.Z, { entry: n.record }),
                    null != j(t, 'app_preview') && 'application' === n.name && (0, r.jsx)(f.Z, { entry: n.record }),
                    null != $ &&
                        (0, r.jsx)(D.Z, {
                            element: $,
                            onChange: (e, t) => {
                                let n = { ...ec };
                                e in ec ? delete n[e] : (n[e] = t), ed(n), eh((0, c.VP)(en, er, $, ef, n));
                            },
                            state: ec
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != er &&
                        er.length > 0 &&
                        (0, r.jsx)(E.Z, {
                            elements: er,
                            onChange: eg,
                            state: ef
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != en &&
                        en.length > 0 &&
                        (0, r.jsx)(I.Z, {
                            elements: en,
                            onChange: eg,
                            state: ef
                        }),
                    (0, r.jsx)(h.Z, {
                        node: t,
                        onSelectChild: eE
                    }),
                    null != et && et.length > 0 ? (0, r.jsx)(b.Z, { elements: et }) : null,
                    (0, r.jsx)(v.Z, {
                        errorMessage: el,
                        onClose: () => {
                            eu('');
                        }
                    })
                ]
            }),
            (0, r.jsx)(d.Z, {
                button: t.button,
                submitting: ei,
                disableNext: ep,
                onClick: (e) => {
                    switch (e.type) {
                        case 'done':
                        case 'cancel':
                            z();
                            break;
                        case 'next':
                            eE(['', e.target]);
                            break;
                        case 'submit':
                            ea(!0), eb();
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: W.length > 0
            }),
            (0, r.jsx)(a.ModalCloseButton, {
                className: V.closeButton,
                onClick: z
            })
        ]
    });
};
