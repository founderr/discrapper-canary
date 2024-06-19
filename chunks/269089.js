var i = n(735250);
n(470079);
var s = n(570140),
  l = n(317770),
  a = n(663993),
  r = n(788983),
  o = n(981631);
n(16281);
let c = (0, a.Un)({
    createPromise: () => n.e("58621").then(n.bind(n, 223455)),
    webpackId: 223455,
    name: "PopoutWindowChannelCall"
  }),
  u = (0, a.Un)({
    createPromise: () => n.e("91032").then(n.bind(n, 432472)),
    webpackId: 432472,
    name: "PopoutWindowStageChannelCall"
  }),
  d = (0, a.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("33053"), n.e("92006")]).then(n.bind(n, 945778)),
    webpackId: 945778,
    name: "PopoutWindowRTCDebug"
  });
class E extends l.Z {
  _initialize() {
    s.Z.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.Z.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  _terminate() {
    s.Z.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.Z.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    r.bA(o.KJ3.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, i.jsx)(u, {
      windowKey: e,
      channelId: t.id
    }) : (0, i.jsx)(c, {
      windowKey: e,
      channelId: t.id
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenRTCDebugPopout() {
    r.bA(o.KJ3.RTC_DEBUG_POPOUT, e => (0, i.jsx)(d, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
}
t.Z = new E