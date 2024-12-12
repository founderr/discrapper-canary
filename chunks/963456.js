r.d(n, {
    a: function () {
        return d;
    },
    j: function () {
        return f;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(626135),
    o = r(70956),
    l = r(981631);
let u = 5000,
    c = 3;
async function d(e, n) {
    let r;
    let d = performance.now(),
        f = 0;
    switch (e.type) {
        case 'channel':
            r = l.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
            break;
        case 'guild':
            r = l.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
            break;
        case 'user':
            r = l.ANM.APPLICATION_COMMAND_INDEX_USER;
            break;
        case 'application':
            r = l.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
    }
    let _ = async (n) =>
            f >= c
                ? (p(!0),
                  a.Z.dispatch({
                      type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                      target: e
                  }))
                : (await new Promise((e) => setTimeout(e, n)), h()),
        h = () =>
            i.tn
                .get({
                    url: r,
                    retries: c - f - 1,
                    signal: n.signal,
                    onRequestCreated: () => f++,
                    rejectWithError: !1
                })
                .then(
                    (n) =>
                        202 === n.status
                            ? _(u)
                            : (p(!1),
                              a.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
                                  target: e,
                                  index: n.body
                              })),
                    (r) => {
                        if (n.signal.aborted) {
                            p(!0);
                            return;
                        }
                        return 429 === r.status
                            ? _(r.body.retry_after * o.Z.Millis.SECOND)
                            : (p(!0),
                              a.Z.dispatch({
                                  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
                                  target: e
                              }));
                    }
                ),
        p = (e) => {
            let r = performance.now() - d;
            s.default.track(l.rMx.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: r,
                error: e,
                aborted: n.signal.aborted,
                include_applications: !0,
                retries: Math.max(f - 1, 0),
                kind: null,
                command_type: null
            });
        };
    await h();
}
function f(e) {
    a.Z.dispatch({
        type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
        target: e
    });
}
