e.d(t, {
    UV: function () {
        return d;
    },
    _s: function () {
        return o;
    },
    kW: function () {
        return c;
    },
    km: function () {
        return l;
    }
});
var r = e(200651);
e(192379);
var i = e(481060),
    u = e(273504),
    a = e(388032);
function l(n) {
    return {
        [u.jj.BLOCK_MESSAGE]: (n, t) =>
            new Promise((n) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await e.e('94005').then(e.bind(e, 144462));
                    return (e) => {
                        var u;
                        return (0, r.jsx)(i, {
                            initialCustomMessage: null !== (u = t.metadata.customMessage) && void 0 !== u ? u : '',
                            onSubmit: (r) => {
                                (t.metadata.customMessage = r), n(t), e.onClose();
                            },
                            ...e,
                            onClose: () => (n(null), e.onClose())
                        });
                    };
                });
            }),
        [u.jj.FLAG_TO_CHANNEL]: (t, a) =>
            new Promise((l) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await e.e('74543').then(e.bind(e, 643611)),
                        o = t.actions.find((n) => n.type === u.jj.FLAG_TO_CHANNEL);
                    return (e) =>
                        (0, r.jsx)(i, {
                            action: a,
                            isEdit: null != o,
                            triggerType: t.triggerType,
                            guildId: n,
                            onEditChannel: (n) => {
                                (a.metadata.channelId = n), t.exemptChannels.add(n), l(a), e.onClose();
                            },
                            ...e,
                            onClose: () => (l(null), e.onClose())
                        });
                });
            }),
        [u.jj.USER_COMMUNICATION_DISABLED]: (n, t) =>
            new Promise((a) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await e.e('78273').then(e.bind(e, 41767)),
                        l = n.actions.find((n) => n.type === u.jj.USER_COMMUNICATION_DISABLED);
                    return (e) =>
                        (0, r.jsx)(i, {
                            action: t,
                            isEdit: null != l,
                            triggerType: n.triggerType,
                            onUpdateDuration: (n) => {
                                null != n && (t.metadata.durationSeconds = n), a(t), e.onClose();
                            },
                            ...e,
                            onClose: () => (a(null), e.onClose())
                        });
                });
            })
    };
}
function o(n, t, u, a) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await e.e('37483').then(e.bind(e, 241046));
        return (e) =>
            (0, r.jsx)(i, {
                ...e,
                automodDecision: {
                    messageId: n,
                    messageContent: t,
                    decisionId: u,
                    channel: a
                }
            });
    });
}
function c(n, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await e.e('28382').then(e.bind(e, 537623));
        return (e) =>
            (0, r.jsx)(i, {
                ...e,
                messageId: n,
                guildId: t
            });
    });
}
function d(n) {
    (0, i.openModal)((t) =>
        (0, r.jsx)(i.ConfirmModal, {
            header: a.intl.string(a.t.wLGrjI),
            confirmText: a.intl.string(a.t['cY+Ooa']),
            onConfirm: n,
            cancelText: a.intl.string(a.t['ETE/oK']),
            ...t,
            children: (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: a.intl.string(a.t.arYQ2d)
            })
        })
    );
}
