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
  o = n("271938"),
  u = n("205817"),
  d = n("782340");

function c(e, t, c) {
  var f;
  let h = (0, l.useGetStreamApplication)(e),
    p = (0, r.useStateFromStores)([o.default], () => o.default.getId()),
    m = null != e ? (0, i.encodeStreamKey)(e) : u.default.getActiveStreamKey(),
    C = null !== (f = u.default.getVideoStats(m)) && void 0 !== f ? f : {},
    E = {
      media_session_id: u.default.getMediaSessionId(m),
      rtc_connection_id: u.default.getRtcConnectionId(m),
      stream_region: u.default.getRegion(m),
      max_viewers: u.default.getMaxViewers(m),
      ...C
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
          streamApplication: h,
          isStreamer: p === (null == e ? void 0 : e.ownerId),
          analyticsData: E,
          ...n
        })
      })
    }
  })
}