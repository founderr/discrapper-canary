n(47120);
var i = n(544891),
    r = n(626135),
    a = n(186901),
    l = n(981631);
t.Z = {
    [l.Etm.GET_NETWORKING_CONFIG]: {
        scope: a.lH,
        handler: () =>
            Promise.all([
                i.tn
                    .get({
                        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                        retries: 3
                    })
                    .then((e) => {
                        let {
                            body: { address: t }
                        } = e;
                        return t;
                    }),
                i.tn
                    .post({
                        url: l.ANM.NETWORKING_TOKEN,
                        retries: 3,
                        oldFormErrors: !0
                    })
                    .then((e) => {
                        let {
                            body: { token: t }
                        } = e;
                        return t;
                    })
            ]).then((e) => {
                let [t, n] = e;
                return {
                    address: t,
                    token: n
                };
            })
    },
    [l.Etm.NETWORKING_SYSTEM_METRICS]: {
        scope: a.lH,
        handler(e) {
            let { socket: t, args: n } = e;
            (n.application_id = t.application.id), r.default.track(l.rMx.NETWORKING_SYSTEM_METRICS, n);
        }
    },
    [l.Etm.NETWORKING_PEER_METRICS]: {
        scope: a.lH,
        handler(e) {
            let { socket: t, args: n } = e;
            (n.application_id = t.application.id), r.default.track(l.rMx.NETWORKING_PEER_METRICS, n);
        }
    },
    [l.Etm.NETWORKING_CREATE_TOKEN]: {
        scope: a.lH,
        handler: () =>
            i.tn
                .post({
                    url: l.ANM.NETWORKING_TOKEN,
                    retries: 1,
                    oldFormErrors: !0
                })
                .then((e) => e.body)
    }
};
