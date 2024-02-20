"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("446674"),
  a = n("913144"),
  l = n("697218"),
  s = n("599110"),
  r = n("719923"),
  o = n("513196"),
  u = n("49111"),
  d = n("994428"),
  c = n("646718");
let f = {
    desktop: o.FreemiumAppIconIds.DEFAULT,
    coachmarkImpressions: 0
  },
  E = {
    client: f
  },
  h = !1,
  _ = !0,
  C = () => {
    _ = !r.default.canUsePremiumAppIcons(l.default.getCurrentUser())
  },
  S = e => {
    if (E.client.desktop = e, !_) {
      var t;
      s.default.track(u.AnalyticEvents.APP_ICON_UPDATED, {
        icon_id: e,
        user_premium_tier: null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.premiumType,
        icon_premium_tier: e !== o.FreemiumAppIconIds.DEFAULT ? c.PremiumTypes.TIER_2 : null
      })
    }
  };

function g() {
  _ && (E.client = {
    desktop: o.FreemiumAppIconIds.DEFAULT,
    coachmarkImpressions: 2
  }), h = !1
}
class T extends i.default.PersistedStore {
  initialize(e) {
    null != e && (E = e), this.waitFor(l.default), this.syncWith([l.default], C)
  }
  get isEditorOpen() {
    return h
  }
  get isUpsellPreview() {
    return _
  }
  getState() {
    return E
  }
  getCurrentDesktopIcon() {
    var e;
    return null == E ? void 0 : null === (e = E.client) || void 0 === e ? void 0 : e.desktop
  }
}
T.displayName = "AppIconPersistedStoreState", T.persistKey = "AppIconPersistedStoreState";
var m = new T(a.default, {
  APP_ICON_UPDATED: function(e) {
    let {
      id: t
    } = e;
    null != t && S(t)
  },
  APP_ICON_EDITOR_OPEN: function() {
    h = !0
  },
  APP_ICON_EDITOR_CLOSE: g,
  APP_ICON_TRACK_IMPRESSION: function(e) {
    let {
      markAsDismissed: t
    } = e;
    E.client.coachmarkImpressions += 1, E.client.coachmarkImpressions >= 2 && (null == t || t(d.ContentDismissActionType.UNKNOWN), g())
  }
})