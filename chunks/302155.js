let i, a;
r.d(n, {
    Z: function () {
        return p;
    }
});
var s = r(213919),
    o = r(570140),
    l = r(147913),
    u = r(594174),
    c = r(626135),
    d = r(726745),
    f = r(981631);
function _(e, n, r) {
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
let h = !1;
class p extends l.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: n, onSwitchError: r, onTokenSet: o }) {
        super(),
            _(this, 'onSwitchStart', void 0),
            _(this, 'onSwitchSuccess', void 0),
            _(this, 'onSwitchError', void 0),
            _(this, 'onTokenSet', void 0),
            _(this, 'actions', { LOGOUT: (e) => this.handleLogout(e) }),
            _(this, 'handleConnectionOpen', () => {
                var e, n, r, o, l, _;
                let p = u.default.getCurrentUser();
                if (null == p) return;
                if (null != a) {
                    if (a !== i) {
                        let e = d.Z.getUsers().map((e) => {
                            let { id: n } = e;
                            return n;
                        });
                        c.default.track(f.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: a,
                            linked_user_ids: e
                        }),
                            null === (r = (o = this).onSwitchSuccess) || void 0 === r || r.call(o, p, h);
                    } else c.default.track(f.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (l = (_ = this).onSwitchError) || void 0 === l || l.call(_, p);
                    a = null;
                }
                i = p.id;
                let m = s.getToken();
                null != m && '' !== m && s.setToken(m, p.id), null === (e = (n = this).onTokenSet) || void 0 === e || e.call(n, p);
            }),
            _(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var n, r;
                    (a = i), null === (n = (r = this).onSwitchStart) || void 0 === n || n.call(r), (h = !!e.goHomeAfterSwitching);
                } else (h = !1), s.removeToken(i);
                i = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = n),
            (this.onSwitchError = r),
            (this.onTokenSet = o);
    }
}
