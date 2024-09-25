var r = n(47120);
var i = n(147913),
    a = n(344185),
    o = n(314897),
    s = n(592125),
    l = n(709054),
    u = n(882252);
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
class d extends i.Z {
    handleThreadCreate(e) {
        let { channel: t } = e;
        if (t.isForumPost()) {
            let e = t.ownerId === o.default.getId();
            this.readStateSnapshots[t.id] = {
                isNew: !e,
                hasUnreads: !e
            };
        }
    }
    constructor(...e) {
        super(...e),
            c(this, 'readStateSnapshots', {}),
            c(this, 'actions', {
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            c(this, 'handleChannelSelect', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                let n = s.Z.getChannel(t);
                null != n && n.isForumLikeChannel() && ((this.readStateSnapshots = {}), this.processForumChannel(n.guild_id, t));
            }),
            c(this, 'processForumChannel', (e, t) => {
                let n = a.Z.getThreadsForParent(e, t);
                l.default.keys(n).forEach((e) => {
                    let t = (0, u.nC)(e);
                    null != t && (this.readStateSnapshots[e] = t);
                });
            }),
            c(this, 'getReadStateSnapshotAnalytics', (e) => this.readStateSnapshots[e]);
    }
}
t.Z = new d();
