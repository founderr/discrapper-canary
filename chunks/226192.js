e.d(n, {
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
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(273504),
    o = e(388032);
function u(t) {
    return {
        [l.jj.BLOCK_MESSAGE]: (t, n) =>
            new Promise((t) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await e.e('94005').then(e.bind(e, 144462));
                    return (e) => {
                        var l;
                        return (0, i.jsx)(r, {
                            initialCustomMessage: null !== (l = n.metadata.customMessage) && void 0 !== l ? l : '',
                            onSubmit: (i) => {
                                (n.metadata.customMessage = i), t(n), e.onClose();
                            },
                            ...e,
                            onClose: () => (t(null), e.onClose())
                        });
                    };
                });
            }),
        [l.jj.FLAG_TO_CHANNEL]: (n, o) =>
            new Promise((u) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await e.e('74543').then(e.bind(e, 643611)),
                        a = n.actions.find((t) => t.type === l.jj.FLAG_TO_CHANNEL);
                    return (e) =>
                        (0, i.jsx)(r, {
                            action: o,
                            isEdit: null != a,
                            triggerType: n.triggerType,
                            guildId: t,
                            onEditChannel: (t) => {
                                (o.metadata.channelId = t), n.exemptChannels.add(t), u(o), e.onClose();
                            },
                            ...e,
                            onClose: () => (u(null), e.onClose())
                        });
                });
            }),
        [l.jj.USER_COMMUNICATION_DISABLED]: (t, n) =>
            new Promise((o) => {
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await e.e('78273').then(e.bind(e, 41767)),
                        u = t.actions.find((t) => t.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (e) =>
                        (0, i.jsx)(r, {
                            action: n,
                            isEdit: null != u,
                            triggerType: t.triggerType,
                            onUpdateDuration: (t) => {
                                null != t && (n.metadata.durationSeconds = t), o(n), e.onClose();
                            },
                            ...e,
                            onClose: () => (o(null), e.onClose())
                        });
                });
            })
    };
}
function a(t, n, l, o) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await e.e('37483').then(e.bind(e, 241046));
        return (e) =>
            (0, i.jsx)(r, {
                ...e,
                automodDecision: {
                    messageId: t,
                    messageContent: n,
                    decisionId: l,
                    channel: o
                }
            });
    });
}
function s(t, n) {
    (0, r.openModalLazy)(async () => {
        let { default: r } = await e.e('28382').then(e.bind(e, 537623));
        return (e) =>
            (0, i.jsx)(r, {
                ...e,
                messageId: t,
                guildId: n
            });
    });
}
function c(t) {
    (0, r.openModal)((n) =>
        (0, i.jsx)(r.ConfirmModal, {
            header: o.intl.string(o.t.wLGrjI),
            confirmText: o.intl.string(o.t['cY+Ooa']),
            onConfirm: t,
            cancelText: o.intl.string(o.t['ETE/oK']),
            ...n,
            children: (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: o.intl.string(o.t.arYQ2d)
            })
        })
    );
}
