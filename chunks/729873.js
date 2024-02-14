"use strict";
n.r(t), n.d(t, {
  EmojiPickerInspector: function() {
    return x
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("446674"),
  s = n("77078"),
  r = n("206230"),
  o = n("858619"),
  u = n("575226"),
  d = n("305781"),
  c = n("986632"),
  f = n("562323"),
  m = n("845579"),
  p = n("305961"),
  h = n("471671"),
  E = n("351825"),
  g = n("315102"),
  S = n("788506"),
  C = n("352046"),
  T = n("917764"),
  v = n("83017"),
  I = n("115279"),
  _ = n("782340"),
  N = n("981840");

function A(e) {
  return "animated" in e
}
let y = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, l = A(t);
    return null != n && l ? _.default.Messages.EMOJI_FROM_GUILD.format({
      guildName: n.name
    }) : null
  },
  x = i.memo(function(e) {
    let t, {
        className: n,
        emojiGrid: _,
        guildId: x,
        pickerIntention: O,
        channel: R
      } = e,
      M = c.EmojiPickerStore.useStore(e => e.inspectedExpressionPosition),
      L = i.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = M;
        return null === (e = _[t]) || void 0 === e ? void 0 : e[n]
      }, [_, M]),
      P = (null == L ? void 0 : L.type) === v.EmojiGridItemTypes.EMOJI ? null == L ? void 0 : L.emoji : {
        type: "CREATE_EMOJI",
        guildId: null == L ? void 0 : L.guildId,
        allNamesString: null == L ? void 0 : L.name
      },
      b = (0, a.useStateFromStores)([p.default], () => null !== P && P.type === o.EmojiTypes.GUILD ? p.default.getGuild(P.guildId) : null, [P]),
      j = (0, a.useStateFromStores)([h.default], () => h.default.isFocused()),
      U = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion, []),
      D = m.AnimateEmoji.useSetting(),
      k = (0, S.useIsFavoriteEmoji)(x, A(P) ? P : null),
      {
        newlyAddedEmojis: w
      } = (0, C.default)(x, O),
      F = P.id,
      B = (null == L ? void 0 : L.type) === v.EmojiGridItemTypes.EMOJI ? L.subCategory : I.EmojiSubCategory.NONE;
    if (i.useEffect(() => {
        let e = Date.now();
        return () => {
          let t = Date.now() - e;
          t >= 250 && A(P) && B !== I.EmojiSubCategory.NONE && (B === I.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== P && P.type === o.EmojiTypes.GUILD && (0, d.updateNewlyAddedEmojiSeenAcknowledged)(P.guildId, w[0].id), null != M.source && (0, S.trackEmojiFocus)({
            emoji: P,
            subCategory: B,
            position: L.columnIndex + 1,
            newlyAddedHighlight: B === I.EmojiSubCategory.NEWLY_ADDED_EMOJI && u.default.isNewerThanLastSeen(x, F)
          }))
        }
      }), null == P) return null;
    if (A(P)) {
      var G;
      let e = null != P.id ? g.default.getEmojiURL({
        id: P.id,
        animated: D && P.animated,
        size: 28
      }) : P.url;
      t = "" === e ? (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        className: N.glyphEmoji,
        children: "surrogates" in P ? P.surrogates : null
      }) : (0, l.jsx)("img", {
        alt: null !== (G = P.allNamesString) && void 0 !== G ? G : "",
        src: e,
        className: N.emoji
      })
    } else t = (0, l.jsx)(E.default, {
      className: N.icon,
      foreground: N.icon,
      width: 24,
      height: 24
    });
    let H = null != b ? (0, l.jsx)(T.default, {
      className: N.guildIcon,
      guild: b,
      shouldAnimate: !U && j
    }) : null;
    return (0, l.jsx)(f.default, {
      className: n,
      graphicPrimary: t,
      graphicSecondary: H,
      titlePrimary: P.allNamesString,
      titleSecondary: y({
        inspectedEmoji: P,
        channel: R,
        guildId: x,
        intention: O,
        guild: b
      }),
      isFavorite: k,
      emojiSubCategory: B
    })
  })