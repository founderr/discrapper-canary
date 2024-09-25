var r = n(47120);
var i = n(442837),
    a = n(570140),
    o = n(147913),
    s = n(883429),
    l = n(314897),
    u = n(592125);
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
class d extends o.Z {
    handleChannelDelete(e) {
        let { channel: t } = e;
        if (null != t.guild_id) {
            let e = u.Z.getAllThreadsForParent(t.id);
            e.length > 0 &&
                i.ZP.Emitter.batched(() => {
                    for (let t of e)
                        a.Z.dispatch({
                            type: 'THREAD_DELETE',
                            channel: t
                        });
                });
        }
    }
    handleMessageCreate(e) {
        var t, n, r;
        let { channelId: i, message: a } = e,
            o = u.Z.getChannel(i);
        if ((null === (t = a.author) || void 0 === t ? void 0 : t.id) !== l.default.getId() || !(null == o ? void 0 : o.isActiveThread())) return;
        let c = new Date(null !== (r = null === (n = o.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== r ? r : 0).getTime();
        Date.now() - c < 5000 && s.Z.resort(o.parent_id);
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            });
    }
}
t.Z = new d();
