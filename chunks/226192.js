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
    o = n(273504),
    l = n(388032);
function u(e) {
    return {
        [o.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var o;
                        return (0, i.jsx)(r, {
                            initialCustomMessage: null !== (o = t.metadata.customMessage) && void 0 !== o ? o : '',
                            onSubmit: (i) => {
                                (t.metadata.customMessage = i), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose())
                        });
                    };
                });
            }),
        [o.jj.FLAG_TO_CHANNEL]: (t, l) =>
            new Promise((u) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('74543').then(n.bind(n, 643611)),
                        a = t.actions.find((e) => e.type === o.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: l,
                            isEdit: null != a,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (l.metadata.channelId = e), t.exemptChannels.add(e), u(l), n.onClose();
                            },
                            ...n,
                            onClose: () => (u(null), n.onClose())
                        });
                });
            }),
        [o.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((l) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await n.e('78273').then(n.bind(n, 41767)),
                        u = e.actions.find((e) => e.type === o.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, i.jsx)(r, {
                            action: t,
                            isEdit: null != u,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), l(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (l(null), n.onClose())
                        });
                });
            })
    };
}
function a(e, t, o, l) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, i.jsx)(r, {
                ...n,
                automodDecision: {
                    messageId: e,
                    messageContent: t,
                    decisionId: o,
                    channel: l
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
            header: l.intl.string(l.t.wLGrjI),
            confirmText: l.intl.string(l.t['cY+Ooa']),
            onConfirm: e,
            cancelText: l.intl.string(l.t['ETE/oK']),
            ...t,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: l.intl.string(l.t.arYQ2d)
            })
        })
    );
}
