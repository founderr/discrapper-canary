t.d(n, {
    UV: function () {
        return c;
    },
    _s: function () {
        return a;
    },
    kW: function () {
        return s;
    },
    km: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(273504),
    o = t(388032);
function u(e) {
    return {
        [l.jj.BLOCK_MESSAGE]: (e, n) =>
            new Promise((e) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await t.e('94005').then(t.bind(t, 144462));
                    return (t) => {
                        var l;
                        return (0, i.jsx)(r, {
                            initialCustomMessage: null !== (l = n.metadata.customMessage) && void 0 !== l ? l : '',
                            onSubmit: (i) => {
                                (n.metadata.customMessage = i), e(n), t.onClose();
                            },
                            ...t,
                            onClose: () => (e(null), t.onClose())
                        });
                    };
                });
            }),
        [l.jj.FLAG_TO_CHANNEL]: (n, o) =>
            new Promise((u) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await t.e('74543').then(t.bind(t, 643611)),
                        a = n.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                    return (t) =>
                        (0, i.jsx)(r, {
                            action: o,
                            isEdit: null != a,
                            triggerType: n.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (o.metadata.channelId = e), n.exemptChannels.add(e), u(o), t.onClose();
                            },
                            ...t,
                            onClose: () => (u(null), t.onClose())
                        });
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (e, n) =>
            new Promise((o) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await t.e('78273').then(t.bind(t, 41767)),
                        u = e.actions.find((e) => e.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (t) =>
                        (0, i.jsx)(r, {
                            action: n,
                            isEdit: null != u,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (n.metadata.durationSeconds = e), o(n), t.onClose();
                            },
                            ...t,
                            onClose: () => (o(null), t.onClose())
                        });
                });
            })
    };
}
function a(e, n, l, o) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await t.e('37483').then(t.bind(t, 241046));
        return (t) =>
            (0, i.jsx)(r, {
                ...t,
                automodDecision: {
                    messageId: e,
                    messageContent: n,
                    decisionId: l,
                    channel: o
                }
            });
    });
}
function s(e, n) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await t.e('28382').then(t.bind(t, 537623));
        return (t) =>
            (0, i.jsx)(r, {
                ...t,
                messageId: e,
                guildId: n
            });
    });
}
function c(e) {
    (0, r.openModal)((n) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t['cY+Ooa']),
            onConfirm: e,
            cancelText: o.intl.string(o.t['ETE/oK']),
            ...n,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: o.intl.string(o.t.arYQ2d)
            })
        })
    );
}
