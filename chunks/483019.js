n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(846519),
    s = n(710845),
    l = n(70956),
    u = n(709054);
function c(e, t, n) {
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
let d = 1 * l.Z.Millis.MINUTE;
class _ {
    reset() {
        (this._subscriptions = {}), (this._unsubscriptions = {}), this._unsubscribe.cancel();
    }
    get(e) {
        var t;
        let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
        return u.default.keys(n);
    }
    clear(e) {
        delete this._subscriptions[e], delete this._unsubscriptions[e];
    }
    subscribe(e, t) {
        var n, r;
        let i = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
        (i[t] = (null !== (r = i[t]) && void 0 !== r ? r : 0) + 1), (this._subscriptions[e] = i), 1 === i[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t);
    }
    isSubscribed(e, t) {
        return null != this._subscriptions[e] && null != this._subscriptions[e][t];
    }
    isSubscribedToAnyMember(e) {
        return this.get(e).length > 0;
    }
    unsubscribe(e, t) {
        var n, r;
        if (!this.isSubscribed(e, t)) return;
        let i = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
        (i[t] = (null !== (r = i[t]) && void 0 !== r ? r : 0) + 1), (this._unsubscriptions[e] = i), 1 === i[t] && this._unsubscribe.delay(!1);
    }
    checkForLeaks(e, t) {
        var n, r, i, a;
        let o = null !== (i = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : 0,
            l = o - (null !== (a = null === (r = this._unsubscriptions[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== a ? a : 0);
        l > 5 && new s.Z('GuildMemberSubscriptions').warn('GuildMemberSubscriptions.subscribe(...): Potential reference leak! ('.concat(l, ' subscriptions)'));
    }
    flushUnsubscriptions() {
        if (!a().isEmpty(this._unsubscriptions))
            a().forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                a().forEach(e, (e, t) => {
                    var r;
                    (n[t] = (null !== (r = n[t]) && void 0 !== r ? r : 0) - e), n[t] <= 0 && delete n[t];
                }),
                    a().isEmpty(n) && delete this._subscriptions[t],
                    this._onChange(t, this.get(t));
            }),
                (this._unsubscriptions = {});
    }
    constructor(e) {
        c(this, '_subscriptions', {}), c(this, '_unsubscriptions', {}), c(this, '_onChange', void 0), c(this, '_unsubscribe', new o.sW(d, () => this.flushUnsubscriptions())), (this._onChange = e);
    }
}
