"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(812206),
  o = n(569545),
  a = n(687516),
  l = n(981283),
  u = n(928518),
  _ = n(314897),
  c = n(592125),
  d = n(158776),
  E = n(19780),
  I = n(959457),
  T = n(178635),
  h = n(531578),
  f = n(981631);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class N extends T.Z {
  _initialize() {
    l.Z.init()
  }
  constructor(...e) {
    super(...e), S(this, "actions", {
      VOICE_CHANNEL_SHOW_FEEDBACK: e => this.handleVoiceChannelFeedback(e),
      STREAM_CLOSE: e => this.handleStreamClose(e),
      VIDEO_BACKGROUND_SHOW_FEEDBACK: e => this.handleVideoBackgroundShowFeedback(e),
      EMBEDDED_ACTIVITY_CLOSE: e => this.handleActivityClose(e),
      IN_APP_REPORTS_SHOW_FEEDBACK: e => this.handleInAppReportsFeedback(e)
    }), S(this, "handleVoiceChannelFeedback", e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(h.nw.VOICE, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("96888").then(n.bind(n, 988645));
          return n => (0, i.jsx)(e, {
            ...n,
            analyticsData: t
          })
        })
      })
    }), S(this, "handleStreamClose", e => {
      var t;
      let {
        streamKey: s,
        canShowFeedback: l
      } = e, u = (0, o.my)(s), c = (0, a.L2)(u, d.Z), E = null !== (t = I.Z.getVideoStats(s)) && void 0 !== t ? t : {}, T = {
        media_session_id: I.Z.getMediaSessionId(s),
        rtc_connection_id: I.Z.getRtcConnectionId(s),
        stream_region: I.Z.getRegion(s),
        max_viewers: I.Z.getMaxViewers(s),
        ...E
      };
      l && this.possiblyShowFeedbackModal(h.nw.STREAM, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("23657").then(n.bind(n, 142402));
          return t => (0, i.jsx)(e, {
            stream: u,
            streamApplication: c,
            isStreamer: u.ownerId === _.default.getId(),
            ...t,
            analyticsData: T
          })
        })
      })
    }), S(this, "handleVideoBackgroundShowFeedback", e => {
      let {
        analyticsData: t
      } = e;
      this.possiblyShowFeedbackModal(h.nw.VIDEO_BACKGROUND, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("11495").then(n.bind(n, 801320));
          return n => (0, i.jsx)(e, {
            ...n,
            analyticsData: t
          })
        })
      })
    }), S(this, "handleActivityClose", e => {
      let {
        applicationId: t,
        channelId: o,
        showFeedback: a
      } = e, l = s.Z.getApplication(t), _ = c.Z.getChannel(o), d = {
        rtc_connection_id: E.Z.getRTCConnectionId(),
        media_session_id: E.Z.getMediaSessionId()
      }, I = u.Z.getWindowOpen(f.KJ3.CHANNEL_CALL_POPOUT) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
      null != l && null != _ && a && this.possiblyShowFeedbackModal(h.nw.ACTIVITY, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("4413").then(n.bind(n, 450634));
          return t => (0, i.jsx)(e, {
            ...t,
            activityApplication: l,
            channel: _,
            analyticsData: d
          })
        }, {
          contextKey: I
        })
      })
    }), S(this, "handleInAppReportsFeedback", e => {
      let {
        reportId: t,
        reportType: s
      } = e;
      this.possiblyShowFeedbackModal(h.nw.IN_APP_REPORTS, () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("72135").then(n.bind(n, 442173));
          return n => (0, i.jsx)(e, {
            ...n,
            reportId: t,
            reportType: s
          })
        })
      })
    })
  }
}
t.Z = new N