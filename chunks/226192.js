t.d(n, {
    UV: function () {
        return c;
    },
    _s: function () {
        return s;
    },
    kW: function () {
        return a;
    },
    km: function () {
        return u;
    }
});
var r = t(735250);
t(470079);
var i = t(481060),
    l = t(273504),
    o = t(689938);
function u(e) {
    return {
        [l.jj.BLOCK_MESSAGE]: (e, n) =>
            new Promise((e) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await t.e('94005').then(t.bind(t, 144462));
                    return (t) => {
                        var l;
                        return (0, r.jsx)(i, {
                            initialCustomMessage: null !== (l = n.metadata.customMessage) && void 0 !== l ? l : '',
                            onSubmit: (r) => {
                                (n.metadata.customMessage = r), e(n), t.onClose();
                            },
                            ...t,
                            onClose: () => (e(null), t.onClose())
                        });
                    };
                });
            }),
        [l.jj.FLAG_TO_CHANNEL]: (n, o) =>
            new Promise((u) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await t.e('74543').then(t.bind(t, 643611)),
                        s = n.actions.find((e) => e.type === l.jj.FLAG_TO_CHANNEL);
                    return (t) =>
                        (0, r.jsx)(i, {
                            action: o,
                            isEdit: null != s,
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
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await t.e('78273').then(t.bind(t, 41767)),
                        u = e.actions.find((e) => e.type === l.jj.USER_COMMUNICATION_DISABLED);
                    return (t) =>
                        (0, r.jsx)(i, {
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
function s(e, n, l, o) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await t.e('37483').then(t.bind(t, 241046));
        return (t) =>
            (0, r.jsx)(i, {
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
function a(e, n) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await t.e('28382').then(t.bind(t, 537623));
        return (t) =>
            (0, r.jsx)(i, {
                ...t,
                messageId: e,
                guildId: n
            });
    });
}
function c(e) {
    (0, i.openModal)((n) =>
        (0, r.jsx)(i.ConfirmModal, {
            header: o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: o.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: o.Z.Messages.CANCEL,
            ...n,
            children: (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
            })
        })
    );
}
