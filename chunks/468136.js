n(47120);
var i = n(544891),
    r = n(626135),
    l = n(186901),
    a = n(981631);
t.Z = {
    [a.Etm.GET_NETWORKING_CONFIG]: {
        scope: l.lH,
        handler: () =>
            Promise.all([
                i.tn
                    .get({
                        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                        retries: 3,
                        rejectWithError: !1
                    })
                    .then((e) => {
                        let {
                            body: { address: t }
                        } = e;
                        return t;
                    }),
                i.tn
                    .post({
                        url: a.ANM.NETWORKING_TOKEN,
                        retries: 3,
                        oldFormErrors: !0,
                        rejectWithError: !1
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
    [a.Etm.NETWORKING_SYSTEM_METRICS]: {
        scope: l.lH,
        handler(e) {
            let { socket: t, args: n } = e;
            (n.application_id = t.application.id), r.default.track(a.rMx.NETWORKING_SYSTEM_METRICS, n);
        }
    },
    [a.Etm.NETWORKING_PEER_METRICS]: {
        scope: l.lH,
        handler(e) {
            let { socket: t, args: n } = e;
            (n.application_id = t.application.id), r.default.track(a.rMx.NETWORKING_PEER_METRICS, n);
        }
    },
    [a.Etm.NETWORKING_CREATE_TOKEN]: {
        scope: l.lH,
        handler: () =>
            i.tn
                .post({
                    url: a.ANM.NETWORKING_TOKEN,
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((e) => e.body)
    }
};
