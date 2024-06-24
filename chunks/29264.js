t.d(n, {
  Z: function() {
    return h
  }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(668781),
  l = t(829883),
  o = t(976853),
  u = t(626135),
  s = t(358085),
  d = t(960048),
  c = t(591759),
  E = t(998502),
  f = t(36998),
  I = t(981631),
  M = t(689938);
let g = "https://media.discordapp.net",
  m = /^.*\.discordapp\.net$/,
  Z = "cdn.discordapp.com",
  _ = "".concat(g, "/stickers"),
  v = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
  S = new Set(["jpg", "jpeg", "png"]),
  A = e => {
    var n, t, i, a;
    return null === (a = c.Z.toURLSafe(e)) || void 0 === a ? void 0 : null === (i = a.pathname) || void 0 === i ? void 0 : null === (t = i.split(".")) || void 0 === t ? void 0 : null === (n = t.pop()) || void 0 === n ? void 0 : n.toLowerCase()
  };

function T(e, n) {
  r.Z.show({
    title: M.Z.Messages.ERROR,
    body: e
  }), d.Z.captureException(n)
}

function h(e, n, t) {
  if ((0, o.Z)(null == n ? void 0 : n.getChannelId()) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == e || ! function(e) {
      let n = c.Z.toURLSafe(e);
      if (null == n) return !1;
      let t = A(e);
      return (m.test(n.hostname) || n.host === Z) && !e.startsWith(_) && !(0, l.zt)(e) && null != t && v.has(t)
    }(e)) return null;
  let r = function(e) {
      let n = c.Z.toURLSafe(e);
      return null == n || n.host === Z ? e : n.origin === g ? (n.host = Z, n.searchParams.delete("size"), n.searchParams.delete("width"), n.searchParams.delete("height"), n.searchParams.delete("quality"), n.searchParams.delete("format"), n.toString()) : (n.searchParams.delete("width"), n.searchParams.delete("height"), n.searchParams.set("quality", "lossless"), n.toString())
    }(e),
    d = async () => {
      try {
        await E.ZP.saveImage(r), u.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVED, {
          ...(0, f.v)()
        })
      } catch (e) {
        u.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
          ...(0, f.v)()
        }), T(M.Z.Messages.ERROR_SAVING_IMAGE, e)
      }
    }, h = async () => {
      try {
        await E.ZP.copyImage(r), u.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPIED, {
          ...(0, f.v)()
        })
      } catch (e) {
        T(M.Z.Messages.ERROR_COPYING_IMAGE, e), u.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
          ...(0, f.v)()
        })
      }
    };
  return [E.ZP.canCopyImage() && function(e) {
    let n = A(e);
    return null != n && S.has(n)
  }(e) ? (0, i.jsx)(a.MenuItem, {
    id: "copy-image",
    label: M.Z.Messages.COPY_IMAGE_MENU_ITEM,
    action: h
  }, "copy-image") : null, (0, i.jsx)(a.MenuItem, {
    id: "save-image",
    label: M.Z.Messages.SAVE_IMAGE_MENU_ITEM,
    action: d
  }, "save-image")]
}