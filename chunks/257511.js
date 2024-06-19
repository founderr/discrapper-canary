n.d(t, {
  Z: function() {
    return a
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(479099),
  s = n(28264);

function a(e) {
  let {
    appliedTags: t,
    setAppliedTags: n
  } = e, a = null != n ? e => {
    t.has(e) && (t.delete(e), n(new Set(t)))
  } : void 0;
  return (0, l.jsx)("div", {
    className: s.tags,
    children: Array.from(t).map(e => (0, l.jsx)(i.Z, {
      tag: e,
      onRemove: a,
      size: null == a ? i.Z.Sizes.SMALL : i.Z.Sizes.MEDIUM
    }, e.id))
  })
}