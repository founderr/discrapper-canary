"use strict";
i.r(t), i.d(t, {
  EmojiPickerInspector: function() {
    return R
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("446674"),
  r = i("77078"),
  a = i("206230"),
  o = i("858619"),
  u = i("575226"),
  c = i("305781"),
  d = i("986632"),
  f = i("562323"),
  E = i("845579"),
  m = i("305961"),
  I = i("471671"),
  p = i("351825"),
  g = i("315102"),
  _ = i("788506"),
  S = i("352046"),
  h = i("917764"),
  C = i("83017"),
  T = i("115279"),
  N = i("782340"),
  v = i("783935");

function A(e) {
  return "animated" in e
}
let y = e => {
    let {
      inspectedEmoji: t,
      guild: i
    } = e, n = A(t);
    return null != i && n ? N.default.Messages.EMOJI_FROM_GUILD.format({
      guildName: i.name
    }) : null
  },
  R = s.memo(function(e) {
    let t, {
        className: i,
        emojiGrid: N,
        guildId: R,
        pickerIntention: j,
        channel: O
      } = e,
      M = d.EmojiPickerStore.useStore(e => e.inspectedExpressionPosition),
      x = s.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: i
        } = M;
        return null === (e = N[t]) || void 0 === e ? void 0 : e[i]
      }, [N, M]),
      L = (null == x ? void 0 : x.type) === C.EmojiGridItemTypes.EMOJI ? null == x ? void 0 : x.emoji : {
        type: "CREATE_EMOJI",
        guildId: null == x ? void 0 : x.guildId,
        allNamesString: null == x ? void 0 : x.name
      },
      P = (0, l.useStateFromStores)([m.default], () => null !== L && L.type === o.EmojiTypes.GUILD ? m.default.getGuild(L.guildId) : null, [L]),
      D = (0, l.useStateFromStores)([I.default], () => I.default.isFocused()),
      b = (0, l.useStateFromStores)([a.default], () => a.default.useReducedMotion, []),
      U = E.AnimateEmoji.useSetting(),
      w = (0, _.useIsFavoriteEmoji)(R, A(L) ? L : null),
      {
        newlyAddedEmojis: G
      } = (0, S.default)(R, j),
      k = L.id,
      V = (null == x ? void 0 : x.type) === C.EmojiGridItemTypes.EMOJI ? x.subCategory : T.EmojiSubCategory.NONE;
    if (s.useEffect(() => {
        let e = Date.now();
        return () => {
          let t = Date.now() - e;
          t >= 250 && A(L) && V !== T.EmojiSubCategory.NONE && (V === T.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== L && L.type === o.EmojiTypes.GUILD && (0, c.updateNewlyAddedEmojiSeenAcknowledged)(L.guildId, G[0].id), null != M.source && (0, _.trackEmojiFocus)({
            emoji: L,
            subCategory: V,
            position: x.columnIndex + 1,
            newlyAddedHighlight: V === T.EmojiSubCategory.NEWLY_ADDED_EMOJI && u.default.isNewerThanLastSeen(R, k)
          }))
        }
      }), null == L) return null;
    if (A(L)) {
      var F;
      let e = null != L.id ? g.default.getEmojiURL({
        id: L.id,
        animated: U && L.animated,
        size: 28
      }) : L.url;
      t = "" === e ? (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        className: v.glyphEmoji,
        children: "surrogates" in L ? L.surrogates : null
      }) : (0, n.jsx)("img", {
        alt: null !== (F = L.allNamesString) && void 0 !== F ? F : "",
        src: e,
        className: v.emoji
      })
    } else t = (0, n.jsx)(p.default, {
      className: v.icon,
      foreground: v.icon,
      width: 24,
      height: 24
    });
    let H = null != P ? (0, n.jsx)(h.default, {
      className: v.guildIcon,
      guild: P,
      shouldAnimate: !b && D
    }) : null;
    return (0, n.jsx)(f.default, {
      className: i,
      graphicPrimary: t,
      graphicSecondary: H,
      titlePrimary: L.allNamesString,
      titleSecondary: y({
        inspectedEmoji: L,
        channel: O,
        guildId: R,
        intention: j,
        guild: P
      }),
      isFavorite: w,
      emojiSubCategory: V
    })
  })