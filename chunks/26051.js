"use strict";
n.r(e), n.d(e, {
  default: function() {
    return g
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  o = n("689226"),
  u = n("467475"),
  l = n("24373"),
  a = n("48703"),
  s = n("599110"),
  c = n("128259"),
  d = n("773336"),
  f = n("50885"),
  h = n("146574"),
  _ = n("49111"),
  v = n("782340");

function g(t, e, n, g) {
  let p = (0, u.default)(null == n ? void 0 : n.getChannelId());
  if (!d.isPlatformEmbedded || null == t || "" === t || p || (null == g ? void 0 : g.shouldHideMediaOptions) === !0 || null != t && null != (0, l.isStickerAssetUrl)(t) || null != t && (0, o.isRoleIconAssetUrl)(t)) return null;
  let E = (0, a.getHostname)(t),
    m = n => {
      s.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
        hostname: E,
        ...(0, h.getNativeContextMenuChannelAnalytics)()
      }), (0, c.handleClick)({
        href: t,
        trusted: (0, c.isLinkTrusted)(t, e),
        shouldConfirm: !0
      }, n)
    };
  return [(0, i.jsx)(r.MenuItem, {
    id: "copy-native-link",
    label: v.default.Messages.COPY_LINK,
    action: () => {
      s.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
        hostname: E,
        ...(0, h.getNativeContextMenuChannelAnalytics)()
      }), f.default.copy(t)
    }
  }, "copy-native-link"), (0, i.jsx)(r.MenuItem, {
    id: "open-native-link",
    label: v.default.Messages.OPEN_LINK,
    action: t => m(t)
  }, "open-native-link")]
}