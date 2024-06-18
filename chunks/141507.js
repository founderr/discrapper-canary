"use strict";
n.d(t, {
  k: function() {
    return v
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(607070),
  l = n(906411),
  u = n(438332),
  _ = n(664437),
  c = n(806966),
  d = n(65029),
  E = n(695346),
  I = n(430824),
  T = n(451478),
  h = n(768581),
  S = n(392552),
  f = n(543241),
  N = n(199257),
  A = n(880949),
  m = n(784222),
  O = n(149203),
  R = n(689938),
  p = n(13450);

function g(e) {
  return "animated" in e
}
let C = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, i = g(t);
    return null != n && i ? R.Z.Messages.EMOJI_FROM_GUILD.format({
      guildName: n.name
    }) : null
  },
  v = r.memo(function(e) {
    let t, {
        className: n,
        emojiGrid: v,
        guildId: L,
        pickerIntention: D,
        channel: M
      } = e,
      {
        enabled: P
      } = S.Z.useExperiment({
        location: "EmojiPicker"
      }, {
        autoTrackExposure: !1
      }),
      y = c.kJ.useStore(e => e.inspectedExpressionPosition),
      U = r.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = y;
        return null === (e = v[t]) || void 0 === e ? void 0 : e[n]
      }, [v, y]),
      b = (null == U ? void 0 : U.type) === m.ld.EMOJI ? null == U ? void 0 : U.emoji : {
        type: "CREATE_EMOJI",
        guildId: null == U ? void 0 : U.guildId,
        allNamesString: null == U ? void 0 : U.name
      },
      G = (0, s.e7)([I.Z], () => null !== b && b.type === l.B.GUILD ? I.Z.getGuild(b.guildId) : null, [b]),
      w = (0, s.e7)([T.Z], () => T.Z.isFocused()),
      k = (0, s.e7)([a.Z], () => a.Z.useReducedMotion, []),
      B = E.Yk.useSetting(),
      x = (0, f.C1)(L, g(b) ? b : null),
      {
        newlyAddedEmojis: V
      } = (0, N.Z)(L, D),
      Z = b.id,
      H = (null == U ? void 0 : U.type) === m.ld.EMOJI ? U.subCategory : O.t0.NONE;
    if (r.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= 250 && g(b) && H !== O.t0.NONE && (H === O.t0.NEWLY_ADDED_EMOJI && null !== b && b.type === l.B.GUILD && (0, _.Zg)(b.guildId, V[0].id), null != y.source && (0, f.Gn)({
            emoji: b,
            subCategory: H,
            position: U.columnIndex + 1,
            newlyAddedHighlight: H === O.t0.NEWLY_ADDED_EMOJI && u.Z.isNewerThanLastSeen(L, Z)
          }))
        }
      }), null == b) return null;
    if (g(b)) {
      var F;
      let e = null != b.id ? h.ZP.getEmojiURL({
        id: b.id,
        animated: B && b.animated,
        size: 28
      }) : b.url;
      t = "" === e ? (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: p.glyphEmoji,
        children: "surrogates" in b ? b.surrogates : null
      }) : (0, i.jsx)("img", {
        alt: null !== (F = b.allNamesString) && void 0 !== F ? F : "",
        src: e,
        className: p.emoji
      })
    } else t = (0, i.jsx)(o.CirclePlusIcon, {
      size: "md",
      color: "currentColor",
      className: p.icon,
      colorClass: p.icon
    });
    let Y = null != G ? (0, i.jsx)(A.Z, {
        className: p.__invalid_guildIcon,
        guild: G,
        shouldAnimate: !k && w
      }) : null,
      j = P && "CREATE_EMOJI" === b.type ? R.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : b.allNamesString,
      W = P && "CREATE_EMOJI" === b.type ? R.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : C({
        inspectedEmoji: b,
        channel: M,
        guildId: L,
        intention: D,
        guild: G
      });
    return (0, i.jsx)(d.Z, {
      className: n,
      graphicPrimary: t,
      graphicSecondary: Y,
      titlePrimary: j,
      titleSecondary: W,
      isFavorite: x,
      emojiSubCategory: H
    })
  })