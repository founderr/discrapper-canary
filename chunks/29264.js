n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(668781),
  r = n(829883),
  l = n(976853),
  o = n(626135),
  c = n(358085),
  u = n(960048),
  d = n(591759),
  _ = n(998502),
  E = n(36998),
  I = n(981631),
  m = n(689938);
let T = 'https://media.discordapp.net',
  h = /^.*\.discordapp\.net$/,
  N = 'cdn.discordapp.com',
  f = ''.concat(T, '/stickers'),
  C = new Set([
'jpg',
'jpeg',
'png',
'webp',
'gif',
'tiff',
'bmp'
  ]),
  p = new Set([
'jpg',
'jpeg',
'png'
  ]),
  g = e => {
var t, n, i, s;
return null === (s = d.Z.toURLSafe(e)) || void 0 === s ? void 0 : null === (i = s.pathname) || void 0 === i ? void 0 : null === (n = i.split('.')) || void 0 === n ? void 0 : null === (t = n.pop()) || void 0 === t ? void 0 : t.toLowerCase();
  };

function S(e, t) {
  a.Z.show({
title: m.Z.Messages.ERROR,
body: e
  }), u.Z.captureException(t);
}

function A(e, t, n) {
  if ((0, l.Z)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !c.isPlatformEmbedded || null == e || ! function(e) {
  let t = d.Z.toURLSafe(e);
  if (null == t)
    return !1;
  let n = g(e);
  return (h.test(t.hostname) || t.host === N) && !e.startsWith(f) && !(0, r.zt)(e) && null != n && C.has(n);
}(e))
return null;
  let a = function(e) {
  let t = d.Z.toURLSafe(e);
  return null == t || t.host === N ? e : t.origin === T ? (t.host = N, t.searchParams.delete('size'), t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.delete('quality'), t.searchParams.delete('format'), t.toString()) : (t.searchParams.delete('width'), t.searchParams.delete('height'), t.searchParams.set('quality', 'lossless'), t.toString());
}(e),
u = async () => {
  try {
    await _.ZP.saveImage(a), o.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVED, {
      ...(0, E.v)()
    });
  } catch (e) {
    o.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
      ...(0, E.v)()
    }), S(m.Z.Messages.ERROR_SAVING_IMAGE, e);
  }
}, A = async () => {
  try {
    await _.ZP.copyImage(a), o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPIED, {
      ...(0, E.v)()
    });
  } catch (e) {
    S(m.Z.Messages.ERROR_COPYING_IMAGE, e), o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
      ...(0, E.v)()
    });
  }
};
  return [
_.ZP.canCopyImage() && function(e) {
  let t = g(e);
  return null != t && p.has(t);
}(e) ? (0, i.jsx)(s.MenuItem, {
  id: 'copy-image',
  label: m.Z.Messages.COPY_IMAGE_MENU_ITEM,
  action: A
}, 'copy-image') : null,
(0, i.jsx)(s.MenuItem, {
  id: 'save-image',
  label: m.Z.Messages.SAVE_IMAGE_MENU_ITEM,
  action: u
}, 'save-image')
  ];
}