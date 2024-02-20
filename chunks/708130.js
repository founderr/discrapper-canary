"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  a = n("913144"),
  l = n("689988"),
  s = n("404607"),
  r = n("271938"),
  o = n("42203");
class u extends l.default {
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    if (null != t.guild_id) {
      let e = o.default.getAllThreadsForParent(t.id);
      e.length > 0 && i.default.Emitter.batched(() => {
        for (let t of e) a.default.dispatch({
          type: "THREAD_DELETE",
          channel: t
        })
      })
    }
  }
  handleMessageCreate(e) {
    var t, n, i;
    let {
      channelId: a,
      message: l
    } = e, u = o.default.getChannel(a);
    if ((null === (t = l.author) || void 0 === t ? void 0 : t.id) !== r.default.getId() || !(null == u ? void 0 : u.isActiveThread())) return;
    let d = new Date(null !== (i = null === (n = u.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== i ? i : 0).getTime(),
      c = Date.now() - d;
    c < 5e3 && s.default.resort(u.parent_id)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    }
  }
}
var d = new u