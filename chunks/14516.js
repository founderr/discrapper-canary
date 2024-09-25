var r = n(47120);
var i = n(147913),
    a = n(19780),
    o = n(358221);
function s(e, t, n) {
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
class l extends i.Z {
    handleFocusParticipant() {
        let e = a.Z.getChannelId();
        if (null != e) {
            var t, n;
            let r = o.Z.getSelectedParticipantId(e),
                i = o.Z.getVideoParticipants(e);
            null === (n = a.Z.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = i.find((e) => e.id === r && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e), s(this, 'stores', new Map().set(o.Z, this.handleFocusParticipant));
    }
}
t.Z = new l();
