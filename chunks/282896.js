var l = r(735250),
  t = r(470079),
  s = r(120356),
  i = r.n(s),
  o = r(481060),
  a = r(378233),
  c = r(689938),
  d = r(930044);
let u = e => {
  let {
    stickerPack: n
  } = e;
  return (0, l.jsx)("div", {
    className: d.features,
    children: (0, a.X_)(n) ? (0, l.jsx)(o.Tooltip, {
      tooltipClassName: d.featuresTooltip,
      position: "top",
      text: c.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
      children: e => (0, l.jsx)(o.PlayIcon, {
        size: "xs",
        color: "currentColor",
        ...e,
        className: d.featureIcon
      })
    }) : null
  })
};
n.Z = t.memo(e => {
  let {
    className: n,
    stickerPack: r,
    withDescription: t = !1
  } = e;
  return (0, l.jsxs)("div", {
    className: i()(d.header, n),
    children: [(0, l.jsxs)("div", {
      className: d.title,
      children: [(0, l.jsx)(o.Heading, {
        className: d.heading,
        variant: "heading-sm/semibold",
        children: r.name
      }), (0, l.jsx)(u, {
        stickerPack: r
      })]
    }), t && null != r.description && (0, l.jsx)(o.Text, {
      className: d.description,
      variant: "text-sm/normal",
      children: r.description
    }), (0, l.jsx)("div", {
      className: d.count,
      children: c.Z.Messages.STICKER_PACK_STICKER_COUNT.format({
        numStickers: r.stickers.length
      })
    })]
  })
})