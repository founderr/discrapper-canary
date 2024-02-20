"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("299285"),
  s = n("374014"),
  r = n("582415"),
  o = n("643130"),
  u = n("292687"),
  d = n("271938"),
  c = n("42203"),
  f = n("824563"),
  E = n("945956"),
  h = n("205817"),
  _ = n("722333"),
  C = n("200521"),
  S = n("49111");
class g extends _.default {
  _initialize() {
    o.default.init()
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
      STREAM_CLOSE: e => this.handleStreamClose(e),
      VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
      EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
      IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e)
    }, this.handleVoiceChannelFeedback = e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(C.FeedbackType.VOICE, () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("464667").then(n.bind(n, "464667"));
          return n => (0, i.jsx)(e, {
            ...n,
            analyticsData: t
          })
        })
      })
    }, this.handleStreamClose = e => {
      var t;
      let {
        streamKey: l,
        canShowFeedback: o
      } = e, u = (0, s.decodeStreamKey)(l), c = (0, r.getStreamerApplication)(u, f.default), E = null !== (t = h.default.getVideoStats(l)) && void 0 !== t ? t : {}, _ = {
        media_session_id: h.default.getMediaSessionId(l),
        rtc_connection_id: h.default.getRtcConnectionId(l),
        stream_region: h.default.getRegion(l),
        max_viewers: h.default.getMaxViewers(l),
        ...E
      };
      o && this.possiblyShowFeedbackModal(C.FeedbackType.STREAM, () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("363787").then(n.bind(n, "363787"));
          return t => (0, i.jsx)(e, {
            stream: u,
            streamApplication: c,
            isStreamer: u.ownerId === d.default.getId(),
            ...t,
            analyticsData: _
          })
        })
      })
    }, this.handleVideoBackgroundShowFeedback = e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(C.FeedbackType.VIDEO_BACKGROUND, () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("496088").then(n.bind(n, "496088"));
          return n => (0, i.jsx)(e, {
            ...n,
            analyticsData: t
          })
        })
      })
    }, this.handleActivityClose = e => {
      let {
        applicationId: t,
        channelId: s,
        showFeedback: r
      } = e, o = l.default.getApplication(t), d = c.default.getChannel(s), f = {
        rtc_connection_id: E.default.getRTCConnectionId(),
        media_session_id: E.default.getMediaSessionId()
      }, h = u.default.getWindowOpen(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT), _ = h ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
      null != o && null != d && r && this.possiblyShowFeedbackModal(C.FeedbackType.ACTIVITY, () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("959350").then(n.bind(n, "959350"));
          return t => (0, i.jsx)(e, {
            ...t,
            activityApplication: o,
            channel: d,
            analyticsData: f
          })
        }, {
          contextKey: _
        })
      })
    }, this.handleInAppReportsFeedback = e => {
      let {
        reportId: t,
        reportType: l
      } = e;
      this.possiblyShowFeedbackModal(C.FeedbackType.IN_APP_REPORTS, () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("114306").then(n.bind(n, "114306"));
          return n => (0, i.jsx)(e, {
            ...n,
            reportId: t,
            reportType: l
          })
        })
      })
    }
  }
}
var T = new g