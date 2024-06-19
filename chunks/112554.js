t.d(n, {
  K: function() {
    return r
  },
  b: function() {
    return o
  }
});
var i = t(399606),
  a = t(375954),
  l = t(163268);
let r = (e, n, t) => {
    var r, o;
    let u = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
    if (null == u) return [];
    let s = void 0 !== t ? e => e.url === t : e => (0, l.KP)({
      type: l.lJ.Attachment,
      media: e
    }, (0, l.HH)(u));
    return null !== (o = null == u ? void 0 : null === (r = u.attachments) || void 0 === r ? void 0 : r.filter(s)) && void 0 !== o ? o : []
  },
  o = (e, n, t) => {
    var r, o;
    let u = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
    if (null == u) return [];
    let s = void 0 !== t ? e => e.id === t : e => (0, l.KP)({
      type: l.lJ.Embed,
      media: e
    }, (0, l.HH)(u));
    return null !== (o = null == u ? void 0 : null === (r = u.embeds) || void 0 === r ? void 0 : r.filter(s)) && void 0 !== o ? o : []
  }