e.d(n, {
    Z: function () {
        return c;
    }
}),
    e(411104);
var i = e(570140),
    l = e(710845),
    o = e(209492),
    r = e(981631);
let a = new l.Z('CloudSync');
class s {
    constructor(t) {
        var n, e, i;
        (n = this),
            (i = void 0),
            (e = 'message') in n
                ? Object.defineProperty(n, e, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (n[e] = i),
            (this.message = t);
    }
}
async function c(t, n) {
    let e,
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.Z.dispatch({
        type: 'GAME_CLOUD_SYNC_START',
        applicationId: t,
        branchId: n
    });
    try {
        if ((e = await o.j(t, n, l)).type === r.QCD.CONFLICT)
            throw (
                (i.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_CONFLICT',
                    applicationId: t,
                    branchId: n,
                    next: e.next,
                    remote: e.remote
                }),
                new s('Conflict in cloud sync.'))
            );
        (e.type === r.QCD.PULL || e.type === r.QCD.PUSH) && a.info('Sync complete', e);
    } catch (e) {
        if (e instanceof s) throw e;
        throw (
            (i.Z.dispatch({
                type: 'GAME_CLOUD_SYNC_ERROR',
                applicationId: t,
                branchId: n
            }),
            a.error('Failed to cloud sync:', e),
            Error('Failed to cloud sync.'))
        );
    }
    return (
        i.Z.dispatch({
            type: 'GAME_CLOUD_SYNC_COMPLETE',
            applicationId: t,
            branchId: n
        }),
        e
    );
}
