var i = t(392711),
    r = t.n(i),
    o = t(544891),
    a = t(570140),
    u = t(981631);
let s = ['Spidey Bot', 'Captain Hook'];
n.Z = {
    fetchForGuild(e) {
        a.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: e
        }),
            o.tn
                .get({
                    url: u.ANM.GUILD_WEBHOOKS(e),
                    oldFormErrors: !0
                })
                .then((n) => {
                    let { body: t } = n;
                    return a.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: e,
                        webhooks: t
                    });
                })
                .catch((n) => {
                    let { body: t } = n;
                    a.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: e,
                        error: t.message
                    });
                });
    },
    fetchForChannel(e, n) {
        a.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: e,
            channelId: n
        }),
            o.tn
                .get({
                    url: u.ANM.CHANNEL_WEBHOOKS(n),
                    oldFormErrors: !0
                })
                .then((t) => {
                    let { body: i } = t;
                    return a.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: e,
                        channelId: n,
                        webhooks: i
                    });
                });
    },
    create: (e, n, t) => (
        null == t && (t = s[r().random(0, s.length - 1)]),
        o.tn
            .post({
                url: u.ANM.CHANNEL_WEBHOOKS(n),
                body: { name: t },
                oldFormErrors: !0
            })
            .then((n) => {
                let { body: t } = n;
                return (
                    a.Z.dispatch({
                        type: 'WEBHOOK_CREATE',
                        guildId: e,
                        webhook: t
                    }),
                    t
                );
            })
    ),
    delete: (e, n) =>
        o.tn
            .del({
                url: u.ANM.WEBHOOK(n),
                oldFormErrors: !0
            })
            .then(() => {
                a.Z.dispatch({
                    type: 'WEBHOOK_DELETE',
                    guildId: e,
                    webhookId: n
                });
            }),
    update: (e, n, t) =>
        o.tn
            .patch({
                url: u.ANM.WEBHOOK(n),
                body: t,
                oldFormErrors: !0
            })
            .then((n) => {
                let { body: t } = n;
                return (
                    a.Z.dispatch({
                        type: 'WEBHOOK_UPDATE',
                        guildId: e,
                        webhook: t
                    }),
                    t
                );
            })
};
