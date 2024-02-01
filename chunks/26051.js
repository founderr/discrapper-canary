"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("689226"),
  u = n("467475"),
  s = n("24373"),
  o = n("48703"),
  c = n("599110"),
  r = n("128259"),
  d = n("773336"),
  f = n("50885"),
  E = n("146574"),
  h = n("49111"),
  _ = n("782340");

function g(e, t, n, g) {
  let v = (0, u.default)(null == n ? void 0 : n.getChannelId());
  if (!d.isPlatformEmbedded || null == e || "" === e || v || (null == g ? void 0 : g.shouldHideMediaOptions) === !0 || null != e && null != (0, s.isStickerAssetUrl)(e) || null != e && (0, i.isRoleIconAssetUrl)(e)) return null;
  let p = (0, o.getHostname)(e),
    M = n => {
      c.default.track(h.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
        hostname: p,
        ...(0, E.getNativeContextMenuChannelAnalytics)()
      }), (0, r.handleClick)({
        href: e,
        trusted: (0, r.isLinkTrusted)(e, t),
        shouldConfirm: !0
      }, n)
    };
  return [(0, a.jsx)(l.MenuItem, {
    id: "copy-native-link",
    label: _.default.Messages.COPY_LINK,
    action: () => {
      c.default.track(h.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
        hostname: p,
        ...(0, E.getNativeContextMenuChannelAnalytics)()
      }), f.default.copy(e)
    }
  }, "copy-native-link"), (0, a.jsx)(l.MenuItem, {
    id: "open-native-link",
    label: _.default.Messages.OPEN_LINK,
    action: e => M(e)
  }, "open-native-link")]
}