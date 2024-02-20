"use strict";
n.r(t), n.d(t, {
  INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE: function() {
    return u
  },
  default: function() {
    return f
  }
}), n("222007");
var i = n("689988"),
  a = n("809810"),
  l = n("599110"),
  s = n("533686"),
  r = n("62355"),
  o = n("49111");
let u = "interaction_iframe_modal";
async function d(e) {
  let {
    openInteractionModal: t
  } = await n.el("394816").then(n.bind(n, "394816"));
  t(e), l.default.track(o.AnalyticEvents.OPEN_MODAL, {
    type: "interaction_modal",
    application_id: e.application.id
  })
}
class c extends i.default {
  constructor(...e) {
    super(...e), this.iframeModalOpenTimeMs = void 0, this.actions = {
      INTERACTION_MODAL_CREATE: e => {
        d(e)
      },
      INTERACTION_IFRAME_MODAL_CREATE: e => {
        var t;
        this.iframeModalOpenTimeMs = Date.now(), t = e, (0, r.default)(t), l.default.track(o.AnalyticEvents.OPEN_MODAL, {
          type: u,
          application_id: t.application.id
        })
      },
      INTERACTION_IFRAME_MODAL_CLOSE: e => {
        ! function(e, t) {
          let n = null != t ? Date.now() - t : void 0;
          l.default.track(o.AnalyticEvents.MODAL_DISMISSED, {
            type: u,
            application_id: e.applicationId,
            duration_open_ms: n
          })
        }(e, this.iframeModalOpenTimeMs), this.iframeModalOpenTimeMs = void 0
      },
      RPC_APP_DISCONNECTED: e => {
        ! function(e) {
          let {
            application: t
          } = e, n = a.default.getIFrameModalApplicationId(), i = a.default.getIFrameModalKey();
          t.id === n && null != n && (0, s.default)(n, i)
        }(e)
      }
    }
  }
}
var f = new c