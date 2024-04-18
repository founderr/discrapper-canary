"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("570140"),
  l = a("317770"),
  i = a("663993"),
  r = a("788983"),
  o = a("981631");
a("299552");
let u = (0, i.makeLazy)({
    createPromise: () => a.e("58621").then(a.bind(a, "223455")),
    webpackId: "223455",
    name: "PopoutWindowChannelCall"
  }),
  d = (0, i.makeLazy)({
    createPromise: () => a.e("91032").then(a.bind(a, "432472")),
    webpackId: "432472",
    name: "PopoutWindowStageChannelCall"
  }),
  c = (0, i.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("33053"), a.e("92006")]).then(a.bind(a, "945778")),
    webpackId: "945778",
    name: "PopoutWindowRTCDebug"
  });
class f extends l.default {
  _initialize() {
    s.default.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.default.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  _terminate() {
    s.default.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout), s.default.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout)
  }
  handleOpenChannelCallPopout(e) {
    let {
      channel: t
    } = e;
    r.open(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e => t.isGuildStageVoice() ? (0, n.jsx)(d, {
      windowKey: e,
      channelId: t.id
    }) : (0, n.jsx)(u, {
      windowKey: e,
      channelId: t.id
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
  handleOpenRTCDebugPopout() {
    r.open(o.PopoutWindowKeys.RTC_DEBUG_POPOUT, e => (0, n.jsx)(c, {
      windowKey: e
    }), {
      defaultWidth: 854,
      defaultHeight: 480
    })
  }
}
t.default = new f