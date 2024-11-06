n.d(t, {
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
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(273504),
    o = n(388032);
function u(e) {
    return {
        [l.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var l;
                        return (0, i.jsx)(r, {
                            initialCustomMessage: null !== (l = t.metadata.customMessage) && void 0 !== l ? l : '',
                            onSubmit: (i) => {
                                (t.metadata.customMessage = i), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose())
                        });
                    };
                });
            }),
        [l.jj.FLAG_TO_CHANNEL]: (t, o) =>
            new Promise((u) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('74543').then(n.bind(n, 643611)),
                        a = t.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: o,
                            isEdit: null != a,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (o.metadata.channelId = e), t.exemptChannels.add(e), u(o), n.onClose();
                            },
                            ...n,
                            onClose: () => (u(null), n.onClose())
                        });
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((o) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('78273').then(n.bind(n, 41767)),
                        u = e.actions.find((e) => e.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: t,
                            isEdit: null != u,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), o(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (o(null), n.onClose())
                        });
                });
            })
    };
}
function a(e, t, l, o) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                automodDecision: {
                    messageId: e,
                    messageContent: t,
                    decisionId: l,
                    channel: o
                }
            });
    });
}
function s(e, t) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                messageId: e,
                guildId: t
            });
    });
}
function c(e) {
    (0, r.openModal)((t) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t['cY+Ooa']),
            onConfirm: e,
            cancelText: o.intl.string(o.t['ETE/oK']),
            ...t,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: o.intl.string(o.t.arYQ2d)
            })
        })
    );
}
