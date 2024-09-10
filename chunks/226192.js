t.d(e, {
    UV: function () {
        return d;
    },
    _s: function () {
        return l;
    },
    kW: function () {
        return c;
    },
    km: function () {
        return o;
    }
});
var r = t(735250);
t(470079);
var u = t(481060),
    i = t(273504),
    a = t(689938);
function o(n) {
    return {
        [i.jj.BLOCK_MESSAGE]: (n, e) =>
            new Promise((n) => {
                (0, u.openModalLazy)(async () => {
                    let { default: u } = await t.e('94005').then(t.bind(t, 144462));
                    return (t) => {
                        var i;
                        return (0, r.jsx)(u, {
                            initialCustomMessage: null !== (i = e.metadata.customMessage) && void 0 !== i ? i : '',
                            onSubmit: (r) => {
                                (e.metadata.customMessage = r), n(e), t.onClose();
                            },
                            ...t,
                            onClose: () => (n(null), t.onClose())
                        });
                    };
                });
            }),
        [i.jj.FLAG_TO_CHANNEL]: (e, a) =>
            new Promise((o) => {
                (0, u.openModalLazy)(async () => {
                    let { default: u } = await t.e('74543').then(t.bind(t, 643611)),
                        l = e.actions.find((n) => n.type === i.jj.FLAG_TO_CHANNEL);
                    return (t) =>
                        (0, r.jsx)(u, {
                            action: a,
                            isEdit: null != l,
                            triggerType: e.triggerType,
                            guildId: n,
                            onEditChannel: (n) => {
                                (a.metadata.channelId = n), e.exemptChannels.add(n), o(a), t.onClose();
                            },
                            ...t,
                            onClose: () => (o(null), t.onClose())
                        });
                });
            }),
        [i.jj.USER_COMMUNICATION_DISABLED]: (n, e) =>
            new Promise((a) => {
                (0, u.openModalLazy)(async () => {
                    let { default: u } = await t.e('78273').then(t.bind(t, 41767)),
                        o = n.actions.find((n) => n.type === i.jj.USER_COMMUNICATION_DISABLED);
                    return (t) =>
                        (0, r.jsx)(u, {
                            action: e,
                            isEdit: null != o,
                            triggerType: n.triggerType,
                            onUpdateDuration: (n) => {
                                null != n && (e.metadata.durationSeconds = n), a(e), t.onClose();
                            },
                            ...t,
                            onClose: () => (a(null), t.onClose())
                        });
                });
            })
    };
}
function l(n, e, i, a) {
    (0, u.openModalLazy)(async () => {
        let { default: u } = await t.e('37483').then(t.bind(t, 241046));
        return (t) =>
            (0, r.jsx)(u, {
                ...t,
                automodDecision: {
                    messageId: n,
                    messageContent: e,
                    decisionId: i,
                    channel: a
                }
            });
    });
}
function c(n, e) {
    (0, u.openModalLazy)(async () => {
        let { default: u } = await t.e('28382').then(t.bind(t, 537623));
        return (t) =>
            (0, r.jsx)(u, {
                ...t,
                messageId: n,
                guildId: e
            });
    });
}
function d(n) {
    (0, u.openModal)((e) =>
        (0, r.jsx)(u.ConfirmModal, {
            header: a.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: a.Z.Messages.CONFIRM,
            onConfirm: n,
            cancelText: a.Z.Messages.CANCEL,
            ...e,
            children: (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                children: a.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
            })
        })
    );
}
