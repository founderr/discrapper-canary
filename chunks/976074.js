"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("77078"),
  i = n("374014"),
  l = n("582415"),
  u = n("271938"),
  o = n("205817"),
  d = n("782340");

function c(e, t, c) {
  var f;
  let E = (0, l.useGetStreamApplication)(e),
    S = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
    h = null != e ? (0, i.encodeStreamKey)(e) : o.default.getActiveStreamKey(),
    _ = null !== (f = o.default.getVideoStats(h)) && void 0 !== f ? f : {},
    C = {
      media_session_id: o.default.getMediaSessionId(h),
      rtc_connection_id: o.default.getRtcConnectionId(h),
      stream_region: o.default.getRegion(h),
      max_viewers: o.default.getMaxViewers(h),
      ..._
    };
  return null == e ? null : (0, a.jsx)(s.MenuItem, {
    id: "report-stream-problem",
    label: d.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
    action: () => {
      null == c || c(), null != e && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("485857").then(n.bind(n, "485857"));
        return n => (0, a.jsx)(t, {
          stream: e,
          streamApplication: E,
          isStreamer: S === (null == e ? void 0 : e.ownerId),
          analyticsData: C,
          ...n
        })
      })
    }
  })
}