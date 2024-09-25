let r, i;
n.d(t, {
    Z: function () {
        return f;
    }
});
var a = n(213919),
    o = n(570140),
    s = n(147913),
    l = n(594174),
    u = n(626135),
    c = n(726745),
    d = n(981631);
function _(e, t, n) {
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
let E = !1;
class f extends s.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', () => this.handleConnectionOpen());
    }
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: o }) {
        super(),
            _(this, 'onSwitchStart', void 0),
            _(this, 'onSwitchSuccess', void 0),
            _(this, 'onSwitchError', void 0),
            _(this, 'onTokenSet', void 0),
            _(this, 'actions', { LOGOUT: (e) => this.handleLogout(e) }),
            _(this, 'handleConnectionOpen', () => {
                var e, t, n, o, s, _;
                let f = l.default.getCurrentUser();
                if (null == f) return;
                if (null != i) {
                    if (i !== r) {
                        let e = c.Z.getUsers().map((e) => {
                            let { id: t } = e;
                            return t;
                        });
                        u.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                            from_user_id: i,
                            linked_user_ids: e
                        }),
                            null === (n = (o = this).onSwitchSuccess) || void 0 === n || n.call(o, f, E);
                    } else u.default.track(d.rMx.MULTI_ACCOUNT_SWITCH_FAILURE), null === (s = (_ = this).onSwitchError) || void 0 === s || s.call(_, f);
                    i = null;
                }
                r = f.id;
                let h = a.getToken();
                null != h && '' !== h && a.setToken(h, f.id), null === (e = (t = this).onTokenSet) || void 0 === e || e.call(t, f);
            }),
            _(this, 'handleLogout', (e) => {
                if (e.isSwitchingAccount) {
                    var t, n;
                    (i = r), null === (t = (n = this).onSwitchStart) || void 0 === t || t.call(n), (E = !!e.goHomeAfterSwitching);
                } else (E = !1), a.removeToken(r);
                r = null;
            }),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = o);
    }
}
