var i = e(392711),
    r = e.n(i),
    o = e(544891),
    a = e(570140),
    u = e(981631);
let l = ['Spidey Bot', 'Captain Hook'];
n.Z = {
    fetchForGuild(t) {
        a.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: t
        }),
            o.tn
                .get({
                    url: u.ANM.GUILD_WEBHOOKS(t),
                    oldFormErrors: !0
                })
                .then((n) => {
                    let { body: e } = n;
                    return a.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: t,
                        webhooks: e
                    });
                })
                .catch((n) => {
                    let { body: e } = n;
                    a.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: t,
                        error: e.message
                    });
                });
    },
    fetchForChannel(t, n) {
        a.Z.dispatch({
            type: 'WEBHOOKS_FETCHING',
            guildId: t,
            channelId: n
        }),
            o.tn
                .get({
                    url: u.ANM.CHANNEL_WEBHOOKS(n),
                    oldFormErrors: !0
                })
                .then((e) => {
                    let { body: i } = e;
                    return a.Z.dispatch({
                        type: 'WEBHOOKS_UPDATE',
                        guildId: t,
                        channelId: n,
                        webhooks: i
                    });
                });
    },
    create: (t, n, e) => (
        null == e && (e = l[r().random(0, l.length - 1)]),
        o.tn
            .post({
                url: u.ANM.CHANNEL_WEBHOOKS(n),
                body: { name: e },
                oldFormErrors: !0
            })
            .then((n) => {
                let { body: e } = n;
                return (
                    a.Z.dispatch({
                        type: 'WEBHOOK_CREATE',
                        guildId: t,
                        webhook: e
                    }),
                    e
                );
            })
    ),
    delete: (t, n) =>
        o.tn
            .del({
                url: u.ANM.WEBHOOK(n),
                oldFormErrors: !0
            })
            .then(() => {
                a.Z.dispatch({
                    type: 'WEBHOOK_DELETE',
                    guildId: t,
                    webhookId: n
                });
            }),
    update: (t, n, e) =>
        o.tn
            .patch({
                url: u.ANM.WEBHOOK(n),
                body: e,
                oldFormErrors: !0
            })
            .then((n) => {
                let { body: e } = n;
                return (
                    a.Z.dispatch({
                        type: 'WEBHOOK_UPDATE',
                        guildId: t,
                        webhook: e
                    }),
                    e
                );
            })
};
