n.d(t, {
    J: function () {
        return _;
    }
});
var r = n(47120);
var i = n(298444),
    a = n(570140),
    o = n(447543),
    s = n(147913),
    l = n(314897),
    u = n(358085),
    c = n(981631);
function d(e, t, n) {
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
let _ = 'guestInviteToAccept';
class E extends s.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() }),
            d(this, 'handleConnectionOpen', async () => {
                if ((0, u.isWeb)()) {
                    let e = i.x.get(_);
                    if (null != e && 'string' == typeof e && l.default.isAuthenticated()) {
                        let { invite: t } = await o.Z.resolveInvite(e, 'Desktop Modal');
                        null != t &&
                            (a.Z.dispatch({
                                type: 'INVITE_MODAL_OPEN',
                                invite: t,
                                code: e,
                                context: c.IlC.APP
                            }),
                            i.x.remove(_));
                    }
                }
            });
    }
}
t.Z = new E();
