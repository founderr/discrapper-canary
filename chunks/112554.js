"use strict";
n.r(t), n.d(t, {
  useExplicitMediaAttachmentsForMessage: function() {
    return s
  },
  useExplicitMediaEmbedsForMessage: function() {
    return r
  }
});
var a = n("399606"),
  i = n("375954"),
  l = n("163268");
let s = (e, t, n) => {
    var s, r;
    let u = (0, a.useStateFromStores)([i.default], () => i.default.getMessage(e, t));
    if (null == u) return [];
    let o = void 0 !== n ? e => e.url === n : e => (0, l.isMediaObscured)({
      type: l.ObscuredMediaTypes.Attachment,
      media: e
    }, (0, l.shouldRedactExplicitContent)(u));
    return null !== (r = null == u ? void 0 : null === (s = u.attachments) || void 0 === s ? void 0 : s.filter(o)) && void 0 !== r ? r : []
  },
  r = (e, t, n) => {
    var s, r;
    let u = (0, a.useStateFromStores)([i.default], () => i.default.getMessage(e, t));
    if (null == u) return [];
    let o = void 0 !== n ? e => e.id === n : e => (0, l.isMediaObscured)({
      type: l.ObscuredMediaTypes.Embed,
      media: e
    }, (0, l.shouldRedactExplicitContent)(u));
    return null !== (r = null == u ? void 0 : null === (s = u.embeds) || void 0 === s ? void 0 : s.filter(o)) && void 0 !== r ? r : []
  }