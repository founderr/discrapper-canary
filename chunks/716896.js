var i = r(47120);
var a = r(147913),
    s = r(592125),
    o = r(109590),
    l = r(176505);
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
    handleChannelPreload(e) {
        let { channelId: n } = e;
        if ((0, l.AB)(n)) return;
        let r = s.Z.getChannel(n);
        null != r && r.isForumLikeChannel() && (0, o.EB)(r);
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
n.Z = new c();
