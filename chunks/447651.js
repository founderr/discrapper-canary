"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("404118"),
  s = n("689226"),
  u = n("467475"),
  r = n("599110"),
  d = n("773336"),
  o = n("286235"),
  c = n("50885"),
  f = n("146574"),
  E = n("49111"),
  m = n("782340");
let M = "https://media.discordapp.net",
  g = /^.*\.discordapp\.net$/,
  p = "cdn.discordapp.com",
  I = "".concat(M, "/stickers"),
  S = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
  v = new Set(["jpg", "jpeg", "png"]),
  h = e => {
    var t;
    return null === (t = new URL(e).pathname.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()
  };

function A(e, t) {
  l.default.show({
    title: m.default.Messages.ERROR,
    body: e
  }), o.default.captureException(t)
}

function _(e, t, n) {
  let l = (0, u.default)(null == t ? void 0 : t.getChannelId());
  if (l || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !d.isPlatformEmbedded || null == e || ! function(e) {
      let t = new URL(e),
        n = h(e);
      return (g.test(t.hostname) || t.host === p) && !e.startsWith(I) && !(0, s.isRoleIconAssetUrl)(e) && null != n && S.has(n)
    }(e)) return null;
  let o = function(e) {
      let t = new URL(e);
      return t.host === p ? e : t.origin === M ? (t.host = p, t.searchParams.delete("size"), t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.delete("quality"), t.searchParams.delete("format"), t.toString()) : (t.searchParams.delete("width"), t.searchParams.delete("height"), t.searchParams.set("quality", "lossless"), t.toString())
    }(e),
    _ = async () => {
      try {
        await c.default.saveImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        }), A(m.default.Messages.ERROR_SAVING_IMAGE, e)
      }
    }, T = async () => {
      try {
        await c.default.copyImage(o), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      } catch (e) {
        A(m.default.Messages.ERROR_COPYING_IMAGE, e), r.default.track(E.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
          ...(0, f.getNativeContextMenuChannelAnalytics)()
        })
      }
    };
  return [c.default.canCopyImage() && function(e) {
    let t = h(e);
    return null != t && v.has(t)
  }(e) ? (0, a.jsx)(i.MenuItem, {
    id: "copy-image",
    label: m.default.Messages.COPY_IMAGE_MENU_ITEM,
    action: T
  }, "copy-image") : null, (0, a.jsx)(i.MenuItem, {
    id: "save-image",
    label: m.default.Messages.SAVE_IMAGE_MENU_ITEM,
    action: _
  }, "save-image")]
}