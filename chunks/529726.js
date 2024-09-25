var r = n(47120);
var i = n(653041);
var a = n(31775),
    o = n.n(a),
    s = n(147913),
    l = n(626135),
    u = n(709054),
    c = n(981631);
function d(e, t, n) {
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
let _ = 60000,
    E = 1000,
    f = 10,
    h = 2000,
    p = 500;
class m extends s.Z {
    handleMessageBecameVisible(e) {
        let { messageId: t } = e;
        if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
        let n = this.recentViewTimes.get(t);
        if (null != n && Date.now() - n < _) return;
        let r = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e);
        }, E);
        this.currentlyVisibleMessageTimers[t] = r;
    }
    handleMessageLostVisibility(e) {
        let t = this.currentlyVisibleMessageTimers[e];
        null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e]);
    }
    handleMessageListVisibilityChange(e) {
        for (let t of e) this.handleMessageBecameVisible(t);
        let t = new Set(e.map((e) => e.messageId));
        for (let e of u.default.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e);
    }
    handleChannelSelect() {
        for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
        (this.currentlyVisibleMessageTimers = {}), this.viewsInCurrentChannel.clear(), this.drainBuffer();
    }
    drainBuffer() {
        for (let e of this.batchBuffer)
            l.default.track(c.rMx.ANNOUNCEMENT_MESSAGE_VIEWED, {
                message_id: e.messageId,
                channel_id: e.channelId,
                guild_id: e.guildId,
                source_channel_id: e.sourceChannelId,
                source_guild_id: e.sourceGuildId
            });
        (this.batchBuffer = []), null != this.batchTimerId && (clearTimeout(this.batchTimerId), (this.batchTimerId = null));
    }
    bufferViewTrack(e) {
        this.batchBuffer.length >= f && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), h));
    }
    constructor(...e) {
        super(...e),
            d(this, 'currentlyVisibleMessageTimers', {}),
            d(this, 'viewsInCurrentChannel', new Set()),
            d(
                this,
                'recentViewTimes',
                new (o())({
                    max: p,
                    maxAge: _
                })
            ),
            d(this, 'batchBuffer', []),
            d(this, 'batchTimerId', null),
            d(this, 'actions', { CHANNEL_SELECT: () => this.handleChannelSelect() });
    }
}
t.Z = new m();
