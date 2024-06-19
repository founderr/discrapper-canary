n(47120);
var s = n(735250),
  i = n(470079),
  l = n(477690),
  a = n(481060),
  r = n(100527),
  o = n(367907),
  c = n(906732),
  u = n(524444),
  d = n(624138),
  E = n(453070),
  _ = n(373228),
  I = n(419922),
  T = n(217588),
  N = n(981631),
  m = n(474936),
  h = n(120001);
let C = (0, d.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
  S = e => {
    if (null != e) o.ZP.trackWithMetadata(N.rMx.EXPRESSION_TOOLTIP_VIEWED, {
      type: m.cd.STICKER_IN_MESSAGE_HOVER,
      expression_id: e.id,
      expression_name: e.name,
      is_animated: (0, _.aQ)(e.format_type),
      is_custom: (0, _.z)(e.type)
    })
  };
t.Z = e => {
  let {
    renderableSticker: t,
    channel: n,
    isInteracting: l
  } = e, [o, d] = i.useState(!0), [_, N] = i.useState(String(Date.now())), [m] = (0, E.XW)(t, l), {
    analyticsLocations: A
  } = (0, c.ZP)(r.Z.STICKER_MESSAGE), p = (0, s.jsxs)("span", {
    className: h.stickerName,
    children: [(0, s.jsx)(a.StickerSmallIcon, {
      size: "xs",
      color: "currentColor",
      className: h.stickerIcon
    }), (null != m ? m : t).name]
  });
  return (0, s.jsx)(c.Gt, {
    value: A,
    children: (0, s.jsx)(a.Popout, {
      align: "center",
      animation: a.Popout.Animation.TRANSLATE,
      positionKey: _,
      onRequestClose: () => {
        d(!0)
      },
      renderPopout: e => (0, s.jsx)(T.Z, {
        ...e,
        renderableSticker: t,
        channel: n,
        refreshPositionKey: () => N(String(Date.now()))
      }),
      children: e => {
        let {
          onClick: n
        } = e;
        return (0, s.jsx)(a.Tooltip, {
          ...u.b_,
          shouldShow: o,
          text: (0, u.Y)(p),
          "aria-label": !1,
          onTooltipShow: () => {
            S(m)
          },
          children: e => (0, s.jsx)(a.Clickable, {
            ...e,
            className: h.clickableSticker,
            onClick: e => {
              d(!o), n(e)
            },
            tag: "span",
            children: (0, s.jsx)(I.ZP, {
              isInteracting: l,
              size: C,
              sticker: null != m ? m : t
            })
          })
        })
      }
    })
  })
}