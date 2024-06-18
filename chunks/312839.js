"use strict";
n.d(t, {
  P: function() {
    return d
  },
  R: function() {
    return c
  }
});
var i = n(13245),
  s = n(556296),
  l = n(237997),
  o = n(13140),
  a = n(981631),
  r = n(987650);

function c(e, t) {
  return {
    trackView() {
      i.Z.track(a.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, r.bv.Viewed)
    },
    trackClick(n) {
      let s = l.Z.isInstanceUILocked() ? a.Sbl.LOCKED_OVERLAY : a.Sbl.UNLOCKED_OVERLAY;
      i.Z.track(a.rMx.NOTIFICATION_CLICKED, {
        ...t,
        location: s,
        action_type: n
      }), i.Z.notificationEvent(e, r.bv.Clicked)
    }
  }
}

function d() {
  let e = s.Z.getOverlayKeybind();
  return null != e ? (0, o.BB)(e.shortcut, !0).split(" + ") : ["???"]
}