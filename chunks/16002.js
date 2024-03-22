"use strict";
l.r(t), l.d(t, {
  shareClip: function() {
    return m
  }
});
var a = l("37983");
l("884691");
var n = l("77078"),
  i = l("42203"),
  s = l("474643"),
  r = l("599110"),
  o = l("299039"),
  u = l("412861"),
  d = l("13136"),
  c = l("803725"),
  f = l("80028"),
  p = l("49111");
async function m(e, t) {
  let {
    channelId: m,
    editMetadata: h,
    analyticsLocations: E
  } = t, C = i.default.getChannel(m);
  if (null != C) try {
    var v;
    let t = await (0, c.exportClip)(e, h),
      l = null !== (v = e.name) && void 0 !== v ? v : (0, f.CLIP_NAME_TEMPLATE)(o.default.extractTimestamp(e.id)),
      a = (0, d.default)(l);
    (0, u.promptToUpload)([new File([t], "".concat("" !== a ? a : "clip", ".mp4"), {
      type: "video/mp4"
    })], C, s.DraftType.ChannelMessage, {
      filesMetadata: [{
        clip: e
      }]
    }), r.default.track(p.AnalyticEvents.CLIP_SHARED, {
      location_stack: E,
      guild_id: C.guild_id,
      channel_id: C.id,
      channel_type: C.type,
      application_id: e.applicationId,
      clip_id: e.id
    })
  } catch (e) {
    throw f.ClipsLogger.error(e), e
  } else(0, n.openModalLazy)(async () => {
    let {
      default: t
    } = await l.el("143909").then(l.bind(l, "143909"));
    return l => (0, a.jsx)(t, {
      ...l,
      clip: e,
      editMetadata: h
    })
  })
}