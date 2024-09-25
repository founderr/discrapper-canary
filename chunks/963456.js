n.d(t, {
    a: function () {
        return c;
    },
    j: function () {
        return d;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(626135),
    o = n(70956),
    s = n(981631);
let l = 5000,
    u = 3;
async function c(e, t) {
    let n;
    let c = performance.now(),
        d = 0;
    switch (e.type) {
        case 'channel':
            n = s.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case 'guild':
            n = s.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case 'user':
            n = s.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case 'application':
            n = s.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let _ = async (t) =>
            d >= u
                ? (f(!0),
                  i.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, t)), E()),
        E = () =>
            r.tn
                .get({
                    url: n,
                    retries: u - d - 1,
                    signal: t.signal,
                    onRequestCreated: () => d++
                })
                .then(
                    (t) =>
                        202 === t.status
                            ? _(l)
                            : (f(!1),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: t.body
                              })),
                    (n) => {
                        if (t.signal.aborted) {
                            f(!0);
                            return;
                        }
                        return 429 === n.status
                            ? _(n.body.retry_after * o.Z.Millis.SECOND)
                            : (f(!0),
                              i.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        f = (e) => {
            let n = performance.now() - c;
            a.default.track(s.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: n,
                error: e,
                aborted: t.signal.aborted,
                include_applications: !0,
                retries: Math.max(d - 1, 0),
                kind: null,
                command_type: null
            });
        };
    await E();
}
function d(e) {
    i.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
