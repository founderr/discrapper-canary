"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var i = n("120356"),
  l = n.n(i),
  s = n("442837"),
  u = n("481060"),
  r = n("543241"),
  o = n("222677"),
  d = n("995774"),
  c = n("665906"),
  f = n("695346"),
  E = n("496675"),
  M = n("768581"),
  g = n("176354"),
  m = n("981631"),
  v = n("185923"),
  p = n("689938"),
  S = n("982581");
let h = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function I(e) {
  var t;
  let {
    emoji: n,
    isFocused: i
  } = e, {
    animated: s,
    src: r,
    surrogates: o
  } = n;
  return null == r && null != n.id ? r = M.default.getEmojiURL({
    id: n.id,
    animated: !!s,
    size: 20
  }) : null == r && (r = g.default.getURL(o)), (0, a.jsx)(u.Tooltip, {
    text: n.allNamesString,
    hideOnClick: !0,
    spacing: 16,
    forceOpen: i,
    children: e => (0, a.jsx)("div", {
      "aria-label": p.default.Messages.ADD_REACTION_NAMED.format({
        emojiName: n.name
      }),
      className: l()(S.button, {
        [S.focused]: i
      }),
      ...e,
      children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
        className: l()("emoji", "emoji-text", S.icon),
        ...e,
        children: o
      }) : (0, a.jsx)("img", {
        className: S.icon,
        src: r,
        alt: ""
      })
    })
  }, null !== (t = n.id) && void 0 !== t ? t : n.name)
}

function A(e, t) {
  let n = (0, r.useEmojiInPriorityOrder)(t.guild_id).filter(e => {
    var n;
    return !(e.useSpriteSheet && h.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !g.default.isEmojiPremiumLocked({
      emoji: e,
      channel: t,
      intention: v.EmojiIntention.REACTION
    })
  });
  n.length > 4 && (n.length = 4);
  let i = f.RenderReactions.useSetting(),
    l = (0, c.useIsActiveChannelOrUnarchivableThread)(t),
    M = (0, s.useStateFromStores)([E.default], () => i && l && (t.isPrivate() || E.default.can(m.Permissions.ADD_REACTIONS, t)), [t, l, i]),
    p = n => {
      (0, o.addReaction)(t.id, e.id, (0, d.toReactionEmoji)(n), void 0)
    };
  return M && n.length > 0 ? (0, a.jsx)(u.MenuGroup, {
    className: S.wrapper,
    children: n.map((e, t) => {
      var n;
      return (0, a.jsx)(u.MenuItem, {
        id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
        render: t => {
          let {
            isFocused: n
          } = t;
          return (0, a.jsx)(I, {
            emoji: e,
            isFocused: n
          })
        },
        action: () => p(e),
        dontCloseOnActionIfHoldingShiftKey: !0
      }, t)
    })
  }) : null
}