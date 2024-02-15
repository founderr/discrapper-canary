"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("374014"),
  i = n("373469"),
  l = n("271938"),
  r = n("824563"),
  d = n("945956"),
  u = n("568307"),
  s = n("800762"),
  o = n("299039"),
  c = n("80028"),
  f = n("49111"),
  g = n("782340");

function p(e) {
  let {
    sourceName: t,
    sourceApplicationId: n
  } = function(e) {
    var t, n;
    if (null != e) {
      let {
        ownerId: t
      } = a.decodeStreamKey(e);
      if (t !== l.default.getId()) {
        let e = r.default.getActivities(t).find(e => e.type === f.ActivityTypes.PLAYING);
        return {
          sourceName: null == e ? void 0 : e.name,
          sourceApplicationId: null == e ? void 0 : e.application_id
        }
      }
    }
    let d = i.default.getStreamerActiveStreamMetadata(),
      s = null == d ? void 0 : d.pid,
      o = null != d ? null != s ? u.default.getGameForPID(s) : null : u.default.getVisibleGame();
    return {
      sourceName: null !== (t = null == d ? void 0 : d.sourceName) && void 0 !== t ? t : null == o ? void 0 : o.name,
      sourceApplicationId: null !== (n = null == d ? void 0 : d.id) && void 0 !== n ? n : null == o ? void 0 : o.id
    }
  }(e), p = d.default.getChannelId(), _ = [l.default.getId()];
  return null != p && (_ = Object.keys(s.default.getVoiceStatesForChannel(p))), {
    id: o.default.fromTimestamp(Date.now()),
    version: c.CURRENT_CLIP_METADATA_VERSION,
    applicationName: null != t ? t : g.default.Messages.CLIPS_UNKNOWN_SOURCE,
    applicationId: n,
    users: _,
    clipMethod: "manual",
    length: 0,
    thumbnail: ""
  }
}