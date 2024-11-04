var r = n(392711),
    i = n.n(r),
    l = n(544891),
    u = n(570140),
    a = n(981631);
let o = ['Spidey Bot', 'Captain Hook'];
e.Z = {
    fetchForGuild(t) {
        u.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: t
        }),
            l.tn
                .get({
                    url: a.ANM.GUILD_WEBHOOKS(t),
                    oldFormErrors: !0
                })
                .then((e) => {
                    let { body: n } = e;
                    return u.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: t,
                        webhooks: n
                    });
                })
                .catch((e) => {
                    let { body: n } = e;
                    u.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: t,
                        error: n.message
                    });
                });
    },
    fetchForChannel(t, e) {
        u.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: t,
            channelId: e
        }),
            l.tn
                .get({
                    url: a.ANM.CHANNEL_WEBHOOKS(e),
                    oldFormErrors: !0
                })
                .then((n) => {
                    let { body: r } = n;
                    return u.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: t,
                        channelId: e,
                        webhooks: r
                    });
                });
    },
    create: (t, e, n) => (
        null == n && (n = o[i().random(0, o.length - 1)]),
        l.tn
            .post({
                url: a.ANM.CHANNEL_WEBHOOKS(e),
                body: { name: n },
                oldFormErrors: !0
            })
            .then((e) => {
                let { body: n } = e;
                return (
                    u.Z.dispatch({
                        type: 'WEBHOOK_CREATE',
                        guildId: t,
                        webhook: n
                    }),
                    n
                );
            })
    ),
    delete: (t, e) =>
        l.tn
            .del({
                url: a.ANM.WEBHOOK(e),
                oldFormErrors: !0
            })
            .then(() => {
                u.Z.dispatch({
                    type: 'WEBHOOK_DELETE',
                    guildId: t,
                    webhookId: e
                });
            }),
    update: (t, e, n) =>
        l.tn
            .patch({
                url: a.ANM.WEBHOOK(e),
                body: n,
                oldFormErrors: !0
            })
            .then((e) => {
                let { body: n } = e;
                return (
                    u.Z.dispatch({
                        type: 'WEBHOOK_UPDATE',
                        guildId: t,
                        webhook: n
                    }),
                    n
                );
            })
};
