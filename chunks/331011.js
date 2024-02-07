"use strict";
i.r(t), i.d(t, {
  getReactionTooltipText: function() {
    return h
  }
});
var a = i("917351"),
  n = i.n(a),
  l = i("432173"),
  o = i("42203"),
  s = i("486996"),
  r = i("27618"),
  u = i("387111"),
  d = i("875978"),
  c = i("782340");

function h(e, t) {
  var i;
  let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ReactionTypes.NORMAL,
    h = arguments.length > 3 ? arguments[3] : void 0,
    p = s.default.getReactions(e.getChannelId(), e.id, t, 3, a),
    T = o.default.getChannel(e.getChannelId()),
    m = null == T || T.isPrivate() ? null : T.getGuildId(),
    f = e.getReaction(t),
    E = a === d.ReactionTypes.BURST,
    R = n(p).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(m, null == T ? void 0 : T.id, e)).value();
  if (0 === R.length) return "";
  let I = {
      standard: {
        reactionTooltip1NInteractive: c.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: c.default.Messages.REACTION_TOOLTIP_1_N,
        reactionTooltip1: c.default.Messages.REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: c.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: c.default.Messages.REACTION_TOOLTIP_2_N,
        reactionTooltip2: c.default.Messages.REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: c.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: c.default.Messages.REACTION_TOOLTIP_3_N,
        reactionTooltip3: c.default.Messages.REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: c.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: c.default.Messages.REACTION_TOOLTIP_N
      },
      burst: {
        reactionTooltip1NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
        reactionTooltip1N: c.default.Messages.BURST_REACTION_TOOLTIP_1_N,
        reactionTooltip1: c.default.Messages.BURST_REACTION_TOOLTIP_1,
        reactionTooltip2NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
        reactionTooltip2N: c.default.Messages.BURST_REACTION_TOOLTIP_2_N,
        reactionTooltip2: c.default.Messages.BURST_REACTION_TOOLTIP_2,
        reactionTooltip3NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
        reactionTooltip3N: c.default.Messages.BURST_REACTION_TOOLTIP_3_N,
        reactionTooltip3: c.default.Messages.BURST_REACTION_TOOLTIP_3,
        reactionTooltipNInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
        reactionTooltipN: c.default.Messages.BURST_REACTION_TOOLTIP_N
      }
    },
    g = E ? I.burst : I.standard,
    _ = null !== (i = E ? null == f ? void 0 : f.burst_count : null == f ? void 0 : f.count) && void 0 !== i ? i : 0,
    N = Math.max(0, _ - R.length),
    C = (0, l.getReactionEmojiName)(t);
  if (1 === R.length) return N > 0 ? null != h ? g.reactionTooltip1NInteractive.format({
    a: R[0],
    n: N,
    emojiName: C,
    onClick: h
  }) : g.reactionTooltip1N.format({
    a: R[0],
    n: N,
    emojiName: C
  }) : g.reactionTooltip1.format({
    a: R[0],
    emojiName: C
  });
  if (2 === R.length) return N > 0 ? null != h ? g.reactionTooltip2NInteractive.format({
    a: R[0],
    b: R[1],
    n: N,
    emojiName: C,
    onClick: h
  }) : g.reactionTooltip2N.format({
    a: R[0],
    b: R[1],
    n: N,
    emojiName: C
  }) : g.reactionTooltip2.format({
    a: R[0],
    b: R[1],
    emojiName: C
  });
  if (3 === R.length) return N > 0 ? null != h ? g.reactionTooltip3NInteractive.format({
    a: R[0],
    b: R[1],
    c: R[2],
    n: N,
    emojiName: C,
    onClick: h
  }) : g.reactionTooltip3N.format({
    a: R[0],
    b: R[1],
    c: R[2],
    n: N,
    emojiName: C
  }) : g.reactionTooltip3.format({
    a: R[0],
    b: R[1],
    c: R[2],
    emojiName: C
  });
  else return null != h ? g.reactionTooltipNInteractive.format({
    n: N,
    emojiName: C,
    onClick: h
  }) : g.reactionTooltipN.format({
    n: N,
    emojiName: C
  })
}