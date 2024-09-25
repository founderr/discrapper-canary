var r = n(47120);
var i = n(147913),
    a = n(914010),
    o = n(558217),
    s = n(185923);
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
class u extends i.Z {
    handleInteraction(e) {
        let { interaction: t } = e;
        if ([s.qR.EmojiButtonMouseEntered].includes(t)) {
            let e = a.Z.getGuildId();
            (0, o.O)(e);
        }
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
t.Z = new u();
