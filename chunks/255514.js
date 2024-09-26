var r = n(47120);
var i = n(773603);
var a = n(735250),
    o = n(470079),
    s = n(481060),
    l = n(600164),
    u = n(155647),
    c = n(299443),
    d = n(185625),
    _ = n(273389),
    E = n(816342),
    f = n(15667),
    h = n(76264),
    p = n(822686),
    m = n(356110),
    I = n(730719),
    T = n(996701),
    g = n(320596),
    S = n(273514),
    A = n(995712),
    v = n(234937),
    N = n(473121),
    O = n(449413),
    R = n(266080),
    C = n(316617),
    y = n(15682),
    L = n(189472),
    b = n(749534),
    D = n(521332),
    M = n(905434),
    P = n(196627),
    U = n(739319),
    w = n(842401),
    x = n(375790),
    G = n(981631),
    k = n(689938),
    B = n(133404);
function F(e, t) {
    let { elements: n } = e;
    return n.find((e) => {
        let { type: n } = e;
        return n === t;
    });
}
function Z(e) {
    let { elements: t } = e;
    return t.some((e) => {
        let { type: t } = e;
        return x.O.includes(t);
    });
}
function V(e, t) {
    let { elements: n } = e;
    return n.filter((e) => {
        let { type: n } = e;
        return n === t;
    });
}
let H = (e) => {
    let { node: t, reportType: n, reportSubType: r, history: i, onSelectChild: x, onModalClose: H, onSubmit: Y, multiSelect: j, reportId: W, textInput: K } = e,
        z = F(t, 'checkbox'),
        q = F(t, 'text_line_resource'),
        Q = V(t, 'external_link'),
        X = V(t, 'free_text'),
        $ = V(t, 'dropdown'),
        [J, ee] = o.useState(!1),
        [et, en] = o.useState(!1),
        [er, ei] = o.useState(''),
        [ea, eo] = o.useState(() => ({})),
        [es, el] = o.useState(() => ({})),
        [eu, ec] = o.useState((0, d.VP)(X, $, z, K, j)),
        ed = (e, t) => {
            let n = { ...ea };
            e in ea ? delete n[e] : (n[e] = t), eo(n), ec((0, d.VP)(X, $, z, es, n));
        },
        e_ = function (e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = { ...es };
            (r[e] = {
                value: t,
                isValid: n
            }),
                el(r),
                ec((0, d.VP)(X, $, z, r, ea));
        },
        eE = o.useMemo(
            () => (e) => {
                x({
                    nodeRef: t.id,
                    destination: e,
                    textInput: null != X || null != $ ? es : void 0,
                    multiSelect:
                        null != z
                            ? {
                                  name: z.name,
                                  state: ea
                              }
                            : void 0
                });
            },
            [t, x, z, ea, es, X, $]
        );
    o.useEffect(() => {
        null != j && eo(j), null != K && el(K);
    }, [j, K]);
    let ef = () => {
            ei('');
        },
        eh = (e) => {
            if (e === G.evJ.INVALID_FORM_BODY) ei(k.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
            else ei(k.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
        },
        ep = () =>
            Y({
                nodeRef: t.id,
                destination: ['', e.successNodeId]
            })
                .then(() => {
                    ei(''), eE(['', e.successNodeId]);
                })
                .catch((e) => {
                    var t;
                    eh(null === (t = e.body) || void 0 === t ? void 0 : t.code);
                })
                .finally(() => {
                    ee(!1);
                }),
        em = (e) => {
            switch (e.type) {
                case 'done':
                case 'cancel':
                    H();
                    break;
                case 'next':
                    eE(['', e.target]);
                    break;
                case 'submit':
                    ee(!0), ep();
            }
        };
    o.useEffect(() => {
        t.is_auto_submit &&
            !et &&
            (en(!0),
            Y({
                nodeRef: t.id,
                destination: ['', t.id]
            }));
    }, [t.is_auto_submit, et, Y, t.id]);
    let eI = (0, u.fW)(r),
        eT = (0, c.A)({
            location: 'web_iar_node_view',
            settingsUpsells: null != eI ? eI : [],
            channelId: 'message' === n.name ? n.record.channel_id : void 0
        });
    return (0, a.jsxs)('div', {
        className: B.container,
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                separator: !1,
                direction: l.Z.Direction.VERTICAL,
                className: B.header,
                children: [(0, a.jsx)(P.Z, { element: F(t, 'success') }), (0, a.jsx)(N.Z, { node: t }), (0, a.jsx)(O.Z, { node: t })]
            }),
            (0, a.jsxs)(s.ModalContent, {
                className: B.body,
                children: [
                    null != q ? (0, a.jsx)(U.Z, { element: q }) : null,
                    null != F(t, 'breadcrumbs') && (0, a.jsx)(f.Z, { history: i }),
                    null != F(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, a.jsx)(C.Z, { message: n.record }),
                    null != F(t, 'user_preview') && 'user' === n.name ? (0, a.jsx)(w.Z, { user: n.record }) : null,
                    Z(t) &&
                        (0, a.jsxs)(b.Z, {
                            children: [
                                null != F(t, 'block_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, a.jsx)(E.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        reportId: W
                                    }),
                                null != F(t, 'mute_users') &&
                                    ('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
                                    (0, a.jsx)(L.Z, {
                                        user: 'user' === n.name ? n.record : n.record.author,
                                        reportId: W
                                    }),
                                null != F(t, 'delete_message') &&
                                    'message' === n.name &&
                                    (0, a.jsx)(p.Z, {
                                        message: n.record,
                                        reportId: W
                                    }),
                                null != F(t, 'leave_guild') &&
                                    'guild' === n.name &&
                                    (0, a.jsx)(R.Z, {
                                        guildId: n.record.id,
                                        reportId: W
                                    })
                            ]
                        }),
                    null != F(t, 'settings_upsells') &&
                        'message' === n.name &&
                        null != eI &&
                        eT &&
                        (0, a.jsx)(D.Z, {
                            settingsUpsells: eI,
                            channelId: n.record.channel_id,
                            onModalClose: H,
                            reportId: W,
                            reportType: n,
                            reportSubType: r
                        }),
                    null != F(t, 'channel_preview') && 'stage_channel' === n.name && (0, a.jsx)(M.Z, { stageInstance: n.record }),
                    null != F(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, a.jsx)(v.Z, { event: n.record }),
                    null != F(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, a.jsx)(S.Z, { entry: n.record }),
                    null != F(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, a.jsx)(A.Z, { entry: n.record }),
                    null != z &&
                        (0, a.jsx)(y.Z, {
                            element: z,
                            onChange: ed,
                            state: ea
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != $ &&
                        $.length > 0 &&
                        (0, a.jsx)(m.Z, {
                            elements: $,
                            onChange: e_,
                            state: es
                        }),
                    ('user_urf' === n.name || 'message_urf' === n.name) &&
                        null != X &&
                        X.length > 0 &&
                        (0, a.jsx)(g.Z, {
                            elements: X,
                            onChange: e_,
                            state: es
                        }),
                    (0, a.jsx)(h.Z, {
                        node: t,
                        onSelectChild: eE
                    }),
                    null != Q && Q.length > 0 ? (0, a.jsx)(T.Z, { elements: Q }) : null,
                    (0, a.jsx)(I.Z, {
                        errorMessage: er,
                        onClose: ef
                    })
                ]
            }),
            (0, a.jsx)(_.Z, {
                button: t.button,
                submitting: J,
                disableNext: eu,
                onClick: em,
                onBackClicked: e.onNavigateBack,
                canNavigateBack: i.length > 0
            }),
            (0, a.jsx)(s.ModalCloseButton, {
                className: B.closeButton,
                onClick: H
            })
        ]
    });
};
t.Z = H;
