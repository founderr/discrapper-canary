"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("981631");

function r(e) {
  let {
    LayerStore: t,
    PopoutWindowStore: n
  } = e, r = t.hasLayers(), s = n.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return r && !s
}