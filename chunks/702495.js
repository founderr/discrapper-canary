"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("781738");
var a = n("37983"),
  i = n("884691"),
  l = n("446674"),
  s = n("77078"),
  u = n("150021"),
  r = n("997289"),
  d = n("788506"),
  o = n("385976"),
  c = n("867805"),
  f = n("246511"),
  E = n("467094"),
  M = n("178207"),
  m = n("256860"),
  g = n("364685"),
  S = n("24373"),
  I = n("49111"),
  p = n("782340");

function h(e) {
  return c.default.getByName(e.replace(/(^:|:$)/g, ""))
}

function v(e) {
  let {
    type: t,
    id: n,
    name: v,
    isInExpressionPicker: _ = !1
  } = e, {
    location: A
  } = (0, r.useAnalyticsContext)(), T = i.useMemo(() => ({
    ...A,
    section: _ ? I.AnalyticsSections.EXPRESSION_PICKER : I.AnalyticsSections.CONTEXT_MENU
  }), [A, _]), C = (0, m.useFavoriteStickerIds)(), R = (0, l.useStateFromStores)([g.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != n ? g.default.getStickerById(n) : null), y = null != R && C.includes(R.id), O = (0, l.useStateFromStores)([o.default], () => {
    if (t === f.PickerContextMenuDataTypes.EMOJI) {
      if (null != n) return o.default.getDisambiguatedEmojiContext().getById(n);
      if (null != v) {
        var e;
        return null !== (e = h(v)) && void 0 !== e ? e : h(c.default.convertSurrogateToName(v))
      }
    }
  }), x = (0, d.useIsFavoriteEmoji)(null, O);
  if (null != R && t === f.PickerContextMenuDataTypes.STICKER) return (0, S.isGuildSticker)(R) && !(0, S.isAvailableGuildSticker)(R) ? null : y ? (0, a.jsx)(s.MenuItem, {
    id: "unfavorite",
    action: () => (0, E.unfavoriteSticker)(R.id),
    label: p.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(s.MenuItem, {
    id: "favorite",
    action: () => {
      (0, M.trackStickerFavorited)({
        sticker: R,
        location: {
          ...T,
          object: I.AnalyticsObjects.STICKER
        }
      }), (0, E.favoriteSticker)(null == R ? void 0 : R.id)
    },
    label: p.default.Messages.FAVORITE_ITEM
  });
  if (null != O && t === f.PickerContextMenuDataTypes.EMOJI) return x ? (0, a.jsx)(s.MenuItem, {
    id: "unfavorite",
    action: () => (0, u.unfavoriteEmoji)(O),
    label: p.default.Messages.UNFAVORITE_ITEM
  }) : (0, a.jsx)(s.MenuItem, {
    id: "favorite",
    action: () => {
      (0, d.trackEmojiFavorited)({
        emoji: O,
        location: {
          ...T,
          object: I.AnalyticsObjects.EMOJI
        }
      }), (0, u.favoriteEmoji)(O)
    },
    label: p.default.Messages.FAVORITE_ITEM
  })
}