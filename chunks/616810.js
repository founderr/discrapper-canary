r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(928801),
    a = r(549895),
    s = r(885110);
function o(e, n, r) {
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
class l extends i.Z {
    getInitialState() {
        return s.Z.getLocalPresence();
    }
    getNextState() {
        return s.Z.getLocalPresence();
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    emitPresenceUpdate(e) {
        let { status: n, since: r, activities: i, afk: a } = e;
        this.socket.presenceUpdate(n, r, i, a);
    }
    handleConnectionOpen() {
        let e = !this.switchingAccounts;
        this.update({}, e), (this.switchingAccounts = !1);
    }
    handleAccountSwitch() {
        (this.switchingAccounts = !0), this.reset(), this.emitPresenceUpdate(this.getState());
    }
    constructor(e) {
        super(!1), o(this, 'socket', void 0), o(this, 'switchingAccounts', void 0), o(this, 'didCommit', void 0), (this.socket = e), (this.switchingAccounts = !1), (this.didCommit = (0, a.Z)(5, 20000, this.emitPresenceUpdate.bind(this)));
    }
}
