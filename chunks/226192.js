n.d(t, {
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
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    o = n(273504),
    u = n(689938);
function l(e) {
    return {
        [o.jj.BLOCK_MESSAGE]: (e, t) =>
            new Promise((e) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var o;
                        return (0, r.jsx)(i, {
                            initialCustomMessage: null !== (o = t.metadata.customMessage) && void 0 !== o ? o : '',
                            onSubmit: (r) => {
                                (t.metadata.customMessage = r), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose())
                        });
                    };
                });
            }),
        [o.jj.FLAG_TO_CHANNEL]: (t, u) =>
            new Promise((l) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await n.e('74543').then(n.bind(n, 643611)),
                        s = t.actions.find((e) => e.type === o.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(i, {
                            action: u,
                            isEdit: null != s,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (u.metadata.channelId = e), t.exemptChannels.add(e), l(u), n.onClose();
                            },
                            ...n,
                            onClose: () => (l(null), n.onClose())
                        });
                });
            }),
        [o.jj.USER_COMMUNICATION_DISABLED]: (e, t) =>
            new Promise((u) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await n.e('78273').then(n.bind(n, 41767)),
                        l = e.actions.find((e) => e.type === o.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, r.jsx)(i, {
                            action: t,
                            isEdit: null != l,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), u(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (u(null), n.onClose())
                        });
                });
            })
    };
}
function s(e, t, o, u) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                automodDecision: {
                    messageId: e,
                    messageContent: t,
                    decisionId: o,
                    channel: u
                }
            });
    });
}
function a(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('28382').then(n.bind(n, 537623));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                messageId: e,
                guildId: t
            });
    });
}
function c(e) {
    (0, i.openModal)((t) =>
        (0, r.jsx)(i.ConfirmModal, {
            header: u.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: u.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: u.Z.Messages.CANCEL,
            ...t,
            children: (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: u.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
            })
        })
    );
}
