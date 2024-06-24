t.d(n, {
  K: function() {
    return l
  },
  b: function() {
    return o
  }
});
var i = t(399606),
  a = t(375954),
  r = t(163268);
let l = (e, n, t) => {
    var l, o;
    let u = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
    if (null == u) return [];
    let s = void 0 !== t ? e => e.url === t : e => (0, r.KP)({
      type: r.lJ.Attachment,
      media: e
    }, (0, r.HH)(u));
    return null !== (o = null == u ? void 0 : null === (l = u.attachments) || void 0 === l ? void 0 : l.filter(s)) && void 0 !== o ? o : []
  },
  o = (e, n, t) => {
    var l, o;
    let u = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
    if (null == u) return [];
    let s = void 0 !== t ? e => e.id === t : e => (0, r.KP)({
      type: r.lJ.Embed,
      media: e
    }, (0, r.HH)(u));
    return null !== (o = null == u ? void 0 : null === (l = u.embeds) || void 0 === l ? void 0 : l.filter(s)) && void 0 !== o ? o : []
  }