r.d(n, {
    J: function () {
        return _;
    }
});
var i = r(47120);
var a = r(298444),
    s = r(570140),
    o = r(447543),
    l = r(147913),
    u = r(314897),
    c = r(358085),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = 'guestInviteToAccept';
class h extends l.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            f(this, 'handleConnectionOpen', async () => {
                if ((0, c.isWeb)()) {
                    let e = a.x.get(_);
                    if (null != e && 'string' == typeof e && u.default.isAuthenticated()) {
                        let { invite: n } = await o.Z.resolveInvite(e, 'Desktop Modal');
                        null != n &&
                            (s.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: n,
                                code: e,
                                context: d.IlC.APP
                            }),
                            a.x.remove(_));
                    }
                }
            });
    }
}
n.Z = new h();
