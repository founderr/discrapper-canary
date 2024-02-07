"use strict";
n.r(e), n.d(e, {
  default: function() {
    return v
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  o = n("689226"),
  u = n("467475"),
  a = n("24373"),
  l = n("48703"),
  s = n("599110"),
  c = n("128259"),
  d = n("773336"),
  f = n("50885"),
  h = n("146574"),
  _ = n("49111"),
  g = n("782340");

function v(t, e, n, v) {
  let p = (0, u.default)(null == n ? void 0 : n.getChannelId());
  if (!d.isPlatformEmbedded || null == t || "" === t || p || (null == v ? void 0 : v.shouldHideMediaOptions) === !0 || null != t && null != (0, a.isStickerAssetUrl)(t) || null != t && (0, o.isRoleIconAssetUrl)(t)) return null;
  let E = (0, l.getHostname)(t),
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
    label: g.default.Messages.COPY_LINK,
    action: () => {
      s.default.track(_.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
        hostname: E,
        ...(0, h.getNativeContextMenuChannelAnalytics)()
      }), f.default.copy(t)
    }
  }, "copy-native-link"), (0, i.jsx)(r.MenuItem, {
    id: "open-native-link",
    label: g.default.Messages.OPEN_LINK,
    action: t => m(t)
  }, "open-native-link")]
}