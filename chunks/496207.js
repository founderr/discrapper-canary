var i = r(47120);
var a = r(147913),
    s = r(914010),
    o = r(558217),
    l = r(185923);
function u(e, n, r) {
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
class c extends a.Z {
    handleInteraction(e) {
        let { interaction: n } = e;
        if ([l.qR.EmojiButtonMouseEntered].includes(n)) {
            let e = s.Z.getGuildId();
            (0, o.O)(e);
        }
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
n.Z = new c();
