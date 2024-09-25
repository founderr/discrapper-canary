var r = n(47120);
var i = n(147913),
    a = n(592125),
    o = n(109590),
    s = n(176505);
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
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, s.AB)(t)) return;
        let n = a.Z.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, o.EB)(n);
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
t.Z = new u();
