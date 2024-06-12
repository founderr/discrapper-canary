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
  r = n("481060"),
  u = n("543241"),
  o = n("222677"),
  d = n("995774"),
  c = n("665906"),
  f = n("695346"),
  M = n("496675"),
  E = n("768581"),
  m = n("176354"),
  g = n("981631"),
  v = n("185923"),
  I = n("689938"),
  h = n("982581");
let p = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function S(e) {
  var t;
  let {
    emoji: n,
    isFocused: i
  } = e, {
    animated: s,
    src: u,
    surrogates: o
  } = n;
  return null == u && null != n.id ? u = E.default.getEmojiURL({
    id: n.id,
    animated: !!s,
    size: 20
  }) : null == u && (u = m.default.getURL(o)), (0, a.jsx)(r.Tooltip, {
    text: n.allNamesString,
    hideOnClick: !0,
    spacing: 16,
    forceOpen: i,
    children: e => (0, a.jsx)("div", {
      "aria-label": I.default.Messages.ADD_REACTION_NAMED.format({
        emojiName: n.name
      }),
      className: l()(h.button, {
        [h.focused]: i
      }),
      ...e,
      children: null == u || "" === u.trim() ? (0, a.jsx)("span", {
        className: l()("emoji", "emoji-text", h.icon),
        ...e,
        children: o
      }) : (0, a.jsx)("img", {
        className: h.icon,
        src: u,
        alt: ""
      })
    })
  }, null !== (t = n.id) && void 0 !== t ? t : n.name)
}

function A(e, t) {
  let n = (0, u.useEmojiInPriorityOrder)(t.guild_id).filter(e => {
    var n;
    return !(e.useSpriteSheet && p.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !m.default.isEmojiPremiumLocked({
      emoji: e,
      channel: t,
      intention: v.EmojiIntention.REACTION
    })
  });
  n.length > 4 && (n.length = 4);
  let i = f.RenderReactions.useSetting(),
    l = (0, c.useIsActiveChannelOrUnarchivableThread)(t),
    E = (0, s.useStateFromStores)([M.default], () => i && l && (t.isPrivate() || M.default.can(g.Permissions.ADD_REACTIONS, t)), [t, l, i]),
    I = n => {
      (0, o.addReaction)(t.id, e.id, (0, d.toReactionEmoji)(n), void 0)
    };
  return E && n.length > 0 ? (0, a.jsx)(r.MenuGroup, {
    className: h.wrapper,
    children: n.map((e, t) => {
      var n;
      return (0, a.jsx)(r.MenuItem, {
        id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
        render: t => {
          let {
            isFocused: n
          } = t;
          return (0, a.jsx)(S, {
            emoji: e,
            isFocused: n
          })
        },
        action: () => I(e),
        dontCloseOnActionIfHoldingShiftKey: !0
      }, t)
    })
  }) : null
}