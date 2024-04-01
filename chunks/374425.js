"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("477690"),
  i = n("481060"),
  r = n("100527"),
  o = n("367907"),
  u = n("906732"),
  d = n("524444"),
  c = n("836879"),
  E = n("624138"),
  f = n("453070"),
  _ = n("373228"),
  T = n("419922"),
  I = n("217588"),
  m = n("981631"),
  N = n("474936"),
  p = n("14949");
let S = (0, E.cssValueToNumber)(l.default.STICKERS_CONSTANTS_STICKER_DIMENSION),
  C = e => {
    null != e && o.default.trackWithMetadata(m.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
      type: N.PremiumUpsellTypes.STICKER_IN_MESSAGE_HOVER,
      expression_id: e.id,
      expression_name: e.name,
      is_animated: (0, _.isAnimatedSticker)(e.format_type),
      is_custom: (0, _.isCustomSticker)(e.type)
    })
  };
t.default = e => {
  let {
    renderableSticker: t,
    channel: n,
    isInteracting: l
  } = e, [o, E] = a.useState(!0), [_, m] = a.useState(String(Date.now())), [N] = (0, f.useStickerForRenderableSticker)(t, l), {
    analyticsLocations: A
  } = (0, u.default)(r.default.STICKER_MESSAGE), h = (0, s.jsxs)("span", {
    className: p.stickerName,
    children: [(0, s.jsx)(c.default, {
      className: p.stickerIcon
    }), (null != N ? N : t).name]
  });
  return (0, s.jsx)(u.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsx)(i.Popout, {
      align: "center",
      animation: i.Popout.Animation.TRANSLATE,
      positionKey: _,
      onRequestClose: () => {
        E(!0)
      },
      renderPopout: e => (0, s.jsx)(I.default, {
        ...e,
        renderableSticker: t,
        channel: n,
        refreshPositionKey: () => m(String(Date.now()))
      }),
      children: e => {
        let {
          onClick: n
        } = e;
        return (0, s.jsx)(i.Tooltip, {
          ...d.EXPRESSION_TOOLTIP_PROPS,
          shouldShow: o,
          text: (0, d.renderClickableTooltipNode)(h),
          "aria-label": !1,
          onTooltipShow: () => {
            C(N)
          },
          children: e => (0, s.jsx)(i.Clickable, {
            ...e,
            className: p.clickableSticker,
            onClick: e => {
              E(!o), n(e)
            },
            tag: "span",
            children: (0, s.jsx)(T.default, {
              isInteracting: l,
              size: S,
              sticker: null != N ? N : t
            })
          })
        })
      }
    })
  })
}