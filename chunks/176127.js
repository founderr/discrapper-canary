n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(435064),
  o = n(204006);

function c() {
  let e = (0, a.Wu)([r.Z], () => {
    var e;
    let t = null === (e = r.Z.getLastClipsSession()) || void 0 === e ? void 0 : e.newClipIds;
    return null == t ? [] : r.Z.getClips().slice(0, 4).filter(e => t.includes(e.id))
  });
  return (0, s.jsx)("div", {
    className: l()(o.thumbnailStack, {
      [o["height-1"]]: 1 === e.length,
      [o["height-2"]]: 2 === e.length,
      [o["height-3"]]: 3 === e.length,
      [o["height-max"]]: e.length >= 4
    }),
    children: Array.from({
      ...e,
      length: 4
    }).map((e, t) => null != e ? (0, s.jsx)("img", {
      alt: "",
      className: o.thumbnail,
      src: e.thumbnail
    }, e.id) : (0, s.jsx)("div", {}, "placeholder-".concat(t))).reverse()
  })
}