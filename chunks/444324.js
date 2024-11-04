n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(900849);
function r(e, t, n) {
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
class a {
    markAsSeen(e, t, n) {
        this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(n)), this.guildIds.add(t);
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (i.Az(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
    constructor(e) {
        r(this, 'guildIds', new Set()), r(this, 'categoryId', void 0), (this.categoryId = e);
    }
}
