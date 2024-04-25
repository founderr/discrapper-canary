"use strict";
l.r(t), l.d(t, {
  shareClip: function() {
    return p
  }
});
var a = l("735250");
l("470079");
var n = l("481060"),
  s = l("592125"),
  i = l("703558"),
  o = l("626135"),
  r = l("709054"),
  u = l("127654"),
  c = l("61994"),
  d = l("39604"),
  f = l("356659"),
  m = l("981631");
async function p(e, t) {
  let {
    channelId: p,
    editMetadata: C,
    analyticsLocations: v
  } = t, h = s.default.getChannel(p);
  if (null != h) try {
    var g;
    let t = await (0, d.exportClip)(e, C),
      l = null !== (g = e.name) && void 0 !== g ? g : (0, f.CLIP_NAME_TEMPLATE)(r.default.extractTimestamp(e.id)),
      a = (0, c.default)(l);
    (0, u.promptToUpload)([new File([t], "".concat("" !== a ? a : "clip", ".mp4"), {
      type: "video/mp4"
    })], h, i.DraftType.ChannelMessage, {
      filesMetadata: [{
        clip: e
      }]
    }), o.default.track(m.AnalyticEvents.CLIP_SHARED, {
      location_stack: v,
      guild_id: h.guild_id,
      channel_id: h.id,
      channel_type: h.type,
      application_id: e.applicationId,
      clip_id: e.id
    })
  } catch (e) {
    throw f.ClipsLogger.error(e), e
  } else(0, n.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([l.e("49237"), l.e("99387"), l.e("99617")]).then(l.bind(l, "502801"));
    return l => (0, a.jsx)(t, {
      ...l,
      clip: e,
      editMetadata: C
    })
  })
}