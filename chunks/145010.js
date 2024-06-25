n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var i = n(399606),
  s = n(481060),
  a = n(125268),
  r = n(673125),
  o = n(292793),
  c = n(390322),
  u = n(871499),
  d = n(12168),
  h = n(304388),
  m = n(689938);

function E(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([r.Z], () => r.Z.getDrawMode()), E = (null == n ? void 0 : n.type) === o.W.EMOJI_HOSE, p = (e, t) => {
    null != e ? (0, a.Bo)({
      type: o.W.EMOJI_HOSE,
      emojiName: e.name,
      emojiId: e.id
    }) : E && (0, a.Bo)(null), null == t || t()
  };
  return (0, l.jsx)(h.Z, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: i
      } = e;
      return (0, l.jsx)(c.Z, {
        children: (0, l.jsx)(d.Z, {
          title: m.Z.Messages.SHARED_CANVAS_DRAW_MODE_EMOJI_HOSE,
          channel: t,
          closePopout: n,
          onFocus: i,
          onSelectEmoji: e => p(e, n)
        })
      })
    },
    children: e => (0, l.jsx)(u.Z, {
      ...e,
      iconComponent: s.PaintbrushThinIcon,
      isActive: E || e.isActive,
      onClick: t => {
        p(null), e.onClick(t)
      }
    })
  })
}