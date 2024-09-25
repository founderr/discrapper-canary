n.d(t, {
    g: function () {
        return E;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(995774),
    o = n(592125),
    s = n(542578),
    l = n(699516),
    u = n(5192),
    c = n(566006),
    d = n(689938);
let _ = 3;
function E(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.O.NORMAL,
        E = arguments.length > 3 ? arguments[3] : void 0,
        f = s.Z.getReactions(e.getChannelId(), e.id, t, _, r),
        h = o.Z.getChannel(e.getChannelId()),
        p = null == h || h.isPrivate() ? null : h.getGuildId(),
        m = e.getReaction(t),
        I = r === c.O.BURST,
        T = i()(f)
            .reject((e) => l.Z.isBlocked(e.id))
            .take(_)
            .map((e) => u.ZP.getName(p, null == h ? void 0 : h.id, e))
            .value();
    if (0 === T.length) return '';
    let g = {
            standard: {
                reactionTooltip1NInteractive: d.Z.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                reactionTooltip1N: d.Z.Messages.REACTION_TOOLTIP_1_N,
                reactionTooltip1: d.Z.Messages.REACTION_TOOLTIP_1,
                reactionTooltip2NInteractive: d.Z.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                reactionTooltip2N: d.Z.Messages.REACTION_TOOLTIP_2_N,
                reactionTooltip2: d.Z.Messages.REACTION_TOOLTIP_2,
                reactionTooltip3NInteractive: d.Z.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                reactionTooltip3N: d.Z.Messages.REACTION_TOOLTIP_3_N,
                reactionTooltip3: d.Z.Messages.REACTION_TOOLTIP_3,
                reactionTooltipNInteractive: d.Z.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                reactionTooltipN: d.Z.Messages.REACTION_TOOLTIP_N
            },
            burst: {
                reactionTooltip1NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                reactionTooltip1N: d.Z.Messages.BURST_REACTION_TOOLTIP_1_N,
                reactionTooltip1: d.Z.Messages.BURST_REACTION_TOOLTIP_1,
                reactionTooltip2NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                reactionTooltip2N: d.Z.Messages.BURST_REACTION_TOOLTIP_2_N,
                reactionTooltip2: d.Z.Messages.BURST_REACTION_TOOLTIP_2,
                reactionTooltip3NInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                reactionTooltip3N: d.Z.Messages.BURST_REACTION_TOOLTIP_3_N,
                reactionTooltip3: d.Z.Messages.BURST_REACTION_TOOLTIP_3,
                reactionTooltipNInteractive: d.Z.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                reactionTooltipN: d.Z.Messages.BURST_REACTION_TOOLTIP_N
            }
        },
        S = I ? g.burst : g.standard,
        A = Math.max(0, (null !== (n = I ? (null == m ? void 0 : m.burst_count) : null == m ? void 0 : m.count) && void 0 !== n ? n : 0) - T.length),
        v = (0, a.Lh)(t);
    if (1 === T.length)
        return A > 0
            ? null != E
                ? S.reactionTooltip1NInteractive.format({
                      a: T[0],
                      n: A,
                      emojiName: v,
                      onClick: E
                  })
                : S.reactionTooltip1N.format({
                      a: T[0],
                      n: A,
                      emojiName: v
                  })
            : S.reactionTooltip1.format({
                  a: T[0],
                  emojiName: v
              });
    if (2 === T.length)
        return A > 0
            ? null != E
                ? S.reactionTooltip2NInteractive.format({
                      a: T[0],
                      b: T[1],
                      n: A,
                      emojiName: v,
                      onClick: E
                  })
                : S.reactionTooltip2N.format({
                      a: T[0],
                      b: T[1],
                      n: A,
                      emojiName: v
                  })
            : S.reactionTooltip2.format({
                  a: T[0],
                  b: T[1],
                  emojiName: v
              });
    if (3 === T.length)
        return A > 0
            ? null != E
                ? S.reactionTooltip3NInteractive.format({
                      a: T[0],
                      b: T[1],
                      c: T[2],
                      n: A,
                      emojiName: v,
                      onClick: E
                  })
                : S.reactionTooltip3N.format({
                      a: T[0],
                      b: T[1],
                      c: T[2],
                      n: A,
                      emojiName: v
                  })
            : S.reactionTooltip3.format({
                  a: T[0],
                  b: T[1],
                  c: T[2],
                  emojiName: v
              });
    else
        return null != E
            ? S.reactionTooltipNInteractive.format({
                  n: A,
                  emojiName: v,
                  onClick: E
              })
            : S.reactionTooltipN.format({
                  n: A,
                  emojiName: v
              });
}
