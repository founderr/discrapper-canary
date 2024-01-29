"use strict";
a.r(t), a.d(t, {
  useExplicitMediaAttachmentsForMessage: function() {
    return d
  },
  useExplicitMediaEmbedsForMessage: function() {
    return l
  }
});
var s = a("65597"),
  i = a("377253"),
  n = a("447435");
let d = (e, t, a) => {
    var d, l;
    let o = (0, s.default)([i.default], () => i.default.getMessage(e, t));
    if (null == o) return [];
    let r = void 0 !== a ? e => e.id === a : e => (0, n.isMediaObscured)({
      type: n.ObscuredMediaTypes.Attachment,
      media: e
    }, (0, n.shouldRedactExplicitContent)(o));
    return null !== (l = null == o ? void 0 : null === (d = o.attachments) || void 0 === d ? void 0 : d.filter(r)) && void 0 !== l ? l : []
  },
  l = (e, t, a) => {
    var d, l;
    let o = (0, s.default)([i.default], () => i.default.getMessage(e, t));
    if (null == o) return [];
    let r = void 0 !== a ? e => e.id === a : e => (0, n.isMediaObscured)({
      type: n.ObscuredMediaTypes.Embed,
      media: e
    }, (0, n.shouldRedactExplicitContent)(o));
    return null !== (l = null == o ? void 0 : null === (d = o.embeds) || void 0 === d ? void 0 : d.filter(r)) && void 0 !== l ? l : []
  }