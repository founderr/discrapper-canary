n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(411104);
var i = n(570140),
    a = n(710845),
    o = n(209492),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = new a.Z('CloudSync');
class c {
    constructor(e) {
        l(this, 'message', void 0), (this.message = e);
    }
}
async function d(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.Z.dispatch({
        type: 'GAME_CLOUD_SYNC_START',
        applicationId: e,
        branchId: t
    });
    try {
        if ((n = await o.j(e, t, r)).type === s.QCD.CONFLICT)
            throw (
                (i.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_CONFLICT',
                    applicationId: e,
                    branchId: t,
                    next: n.next,
                    remote: n.remote
                }),
                new c('Conflict in cloud sync.'))
            );
        (n.type === s.QCD.PULL || n.type === s.QCD.PUSH) && u.info('Sync complete', n);
    } catch (n) {
        if (n instanceof c) throw n;
        throw (
            (i.Z.dispatch({
                type: 'GAME_CLOUD_SYNC_ERROR',
                applicationId: e,
                branchId: t
            }),
            u.error('Failed to cloud sync:', n),
            Error('Failed to cloud sync.'))
        );
    }
    return (
        i.Z.dispatch({
            type: 'GAME_CLOUD_SYNC_COMPLETE',
            applicationId: e,
            branchId: t
        }),
        n
    );
}
