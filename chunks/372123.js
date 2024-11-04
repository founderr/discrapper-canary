n.d(e, {
    Z: function () {
        return c;
    }
}),
    n(411104);
var i = n(570140),
    l = n(710845),
    r = n(209492),
    o = n(981631);
let a = new l.Z('CloudSync');
class s {
    constructor(t) {
        var e, n, i;
        (e = this),
            (i = void 0),
            (n = 'message') in e
                ? Object.defineProperty(e, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[n] = i),
            (this.message = t);
    }
}
async function c(t, e) {
    let n,
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.Z.dispatch({
        type: 'GAME_CLOUD_SYNC_START',
        applicationId: t,
        branchId: e
    });
    try {
        if ((n = await r.j(t, e, l)).type === o.QCD.CONFLICT)
            throw (
                (i.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_CONFLICT',
                    applicationId: t,
                    branchId: e,
                    next: n.next,
                    remote: n.remote
                }),
                new s('Conflict in cloud sync.'))
            );
        (n.type === o.QCD.PULL || n.type === o.QCD.PUSH) && a.info('Sync complete', n);
    } catch (n) {
        if (n instanceof s) throw n;
        throw (
            (i.Z.dispatch({
                type: 'GAME_CLOUD_SYNC_ERROR',
                applicationId: t,
                branchId: e
            }),
            a.error('Failed to cloud sync:', n),
            Error('Failed to cloud sync.'))
        );
    }
    return (
        i.Z.dispatch({
            type: 'GAME_CLOUD_SYNC_COMPLETE',
            applicationId: t,
            branchId: e
        }),
        n
    );
}
