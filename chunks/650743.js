"use strict";
n.d(t, {
  Z: function() {
    return O
  }
});
var i = n(735250);
n(470079);
var r = n(399606),
  s = n(704215),
  o = n(481060),
  a = n(596454),
  l = n(607070),
  u = n(605236),
  _ = n(880949),
  c = n(28546),
  d = n(65029),
  E = n(430824),
  I = n(556296),
  T = n(451478),
  h = n(358085),
  f = n(13140),
  S = n(763296),
  A = n(981631),
  N = n(689938),
  m = n(658147);

function O(e) {
  let {
    soundboardSound: t,
    closePicker: O
  } = e, R = (0, c.Iu)(e => e.searchQuery), p = (0, r.e7)([S.Z], () => null != t && S.Z.isFavoriteSound(t.soundId)), g = (0, r.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.guildId)), C = (0, r.e7)([l.Z], () => l.Z.useReducedMotion, []), v = (0, r.e7)([T.Z], () => T.Z.isFocused()), L = (0, r.e7)([I.Z], () => I.Z.getKeybindForAction(A.kg4.SOUNDBOARD_HOLD));
  if (null != t && R.length > 0) return (0, i.jsx)(d.Z, {
    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, i.jsx)(a.Z, {
      emojiId: t.emojiId,
      emojiName: t.emojiName,
      className: m.emoji
    }) : (0, i.jsx)(o.ImageIcon, {
      size: "md",
      color: "currentColor",
      className: m.emoji
    }),
    graphicSecondary: null != g ? (0, i.jsx)(_.Z, {
      guild: g,
      shouldAnimate: !C && v
    }) : null,
    titlePrimary: t.name,
    titleSecondary: null == g ? void 0 : g.name,
    isFavorite: p
  });
  let D = () => {
      O(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("58120").then(n.bind(n, 355453));
        return t => (0, i.jsx)(e, {
          ...t
        })
      })
    },
    M = (0, u.un)(s.z.SOUNDBOARD_KEYBIND_TIP),
    P = null != L && (0, h.isWindows)() && !M ? N.Z.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
      keybind: (0, f.BB)(L.shortcut, !0),
      openSettingsHook: (e, t) => (0, i.jsx)(o.Anchor, {
        onClick: D,
        children: e
      }, t)
    }) : null;
  return null == P ? null : (0, i.jsxs)("div", {
    className: m.keybindHint,
    children: [(0, i.jsx)(o.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: m.warningIcon
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      className: m.keybindHintText,
      children: P
    }), (0, i.jsx)(o.Clickable, {
      className: m.closeButton,
      onClick: () => (0, u.EW)(s.z.SOUNDBOARD_KEYBIND_TIP),
      children: (0, i.jsx)(o.CloseSmallIcon, {
        size: "xs",
        color: "currentColor"
      })
    })]
  })
}