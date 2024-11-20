t.d(n, {
    V: function () {
        return s;
    }
}),
    t(399606);
var a = t(87051),
    c = t(9156),
    i = t(621600),
    o = t(113449),
    r = t(686660),
    d = t(981631),
    l = t(526761);
function s(e, n) {
    let t = c.ZP.getGuildFlags(e);
    n === r.s8.ALL_MESSAGES
        ? a.Z.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: d.bL.ALL_MESSAGES,
                  flags: (0, o.Q4)(t, l.vc.UNREADS_ALL_MESSAGES)
              },
              i.ZB.PresetAll
          )
        : n === r.s8.MENTIONS
          ? a.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: d.bL.ONLY_MENTIONS,
                    flags: (0, o.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS)
                },
                i.ZB.PresetMentions
            )
          : n === r.s8.NOTHING &&
            a.Z.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: d.bL.NO_MESSAGES,
                    flags: (0, o.Q4)(t, l.vc.UNREADS_ONLY_MENTIONS)
                },
                i.ZB.PresetNothing
            );
}
