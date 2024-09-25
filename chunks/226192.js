n.d(t, {
    UV: function () {
        return c;
    },
    _s: function () {
        return l;
    },
    kW: function () {
        return u;
    },
    km: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(273504),
    o = n(689938);
function s(e) {
    let t = (e, t) =>
            new Promise((e) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await n.e('94005').then(n.bind(n, 144462));
                    return (n) => {
                        var a;
                        return (0, r.jsx)(i, {
                            initialCustomMessage: null !== (a = t.metadata.customMessage) && void 0 !== a ? a : '',
                            onSubmit: (r) => {
                                (t.metadata.customMessage = r), e(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (e(null), n.onClose())
                        });
                    };
                });
            }),
        o = (t, o) =>
            new Promise((s) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await n.e('74543').then(n.bind(n, 643611)),
                        l = t.actions.find((e) => e.type === a.jj.FLAG_TO_CHANNEL);
                    return (n) =>
                        (0, r.jsx)(i, {
                            action: o,
                            isEdit: null != l,
                            triggerType: t.triggerType,
                            guildId: e,
                            onEditChannel: (e) => {
                                (o.metadata.channelId = e), t.exemptChannels.add(e), s(o), n.onClose();
                            },
                            ...n,
                            onClose: () => (s(null), n.onClose())
                        });
                });
            }),
        s = (e, t) =>
            new Promise((o) => {
                (0, i.openModalLazy)(async () => {
                    let { default: i } = await n.e('78273').then(n.bind(n, 41767)),
                        s = e.actions.find((e) => e.type === a.jj.USER_COMMUNICATION_DISABLED);
                    return (n) =>
                        (0, r.jsx)(i, {
                            action: t,
                            isEdit: null != s,
                            triggerType: e.triggerType,
                            onUpdateDuration: (e) => {
                                null != e && (t.metadata.durationSeconds = e), o(t), n.onClose();
                            },
                            ...n,
                            onClose: () => (o(null), n.onClose())
                        });
                });
            });
    return {
        [a.jj.BLOCK_MESSAGE]: t,
        [a.jj.FLAG_TO_CHANNEL]: o,
        [a.jj.USER_COMMUNICATION_DISABLED]: s
    };
}
function l(e, t, a, o) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('37483').then(n.bind(n, 241046));
        return (n) =>
            (0, r.jsx)(i, {
                ...n,
                automodDecision: {
                    messageId: e,
                    messageContent: t,
                    decisionId: a,
                    channel: o
                }
            });
    });
}
function u(e, t) {
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
            header: o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
            confirmText: o.Z.Messages.CONFIRM,
            onConfirm: e,
            cancelText: o.Z.Messages.CANCEL,
            ...t,
            children: (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: o.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
            })
        })
    );
}
