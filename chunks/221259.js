t.d(n, {
    IG: function () {
        return N;
    },
    JK: function () {
        return b;
    },
    ZA: function () {
        return S;
    },
    _m: function () {
        return h;
    },
    ft: function () {
        return p;
    },
    yN: function () {
        return f;
    }
}),
    t(47120);
var i = t(399606),
    a = t(87051),
    c = t(592125),
    o = t(9156),
    r = t(621600),
    s = t(423589),
    l = t(113449),
    d = t(686660),
    u = t(981631),
    _ = t(490897),
    g = t(526761);
function S(e) {
    let n = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
        t = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: t,
        preset: (0, d.gs)(n, t)
    };
}
function f(e) {
    let n = (0, i.Wu)([o.ZP], () =>
            (0, s.OD)(o.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [t, a] = (0, i.Wu)(
            [o.ZP, c.Z],
            () => {
                let t = c.Z.getChannel(e.parent_id);
                return null != t && n.includes(t.id) ? ['parent', (0, d.p1)((0, d.gs)(o.ZP.resolveUnreadSetting(t), o.ZP.resolvedMessageNotifications(t)))] : ['guild', (0, d.p1)((0, d.gs)(o.ZP.getGuildUnreadSetting(e.guild_id), o.ZP.getMessageNotifications(e.guild_id)))];
            },
            [e.guild_id, e.parent_id, n]
        );
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: t,
        inheritedPreset: a
    };
}
function h(e, n, t) {
    let i = o.ZP.getChannelIdFlags(e, n);
    t === d.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                  message_notifications: u.bL.ALL_MESSAGES,
                  flags: (0, l.pq)(i, g.ic.UNREADS_ALL_MESSAGES)
              },
              r.ZB.PresetAll
          )
        : t === d.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: u.bL.ONLY_MENTIONS,
                    flags: (0, l.pq)(i, g.ic.UNREADS_ONLY_MENTIONS)
                },
                r.ZB.PresetMentions
            )
          : t === d.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                    message_notifications: u.bL.NO_MESSAGES,
                    flags: (0, l.pq)(i, g.ic.UNREADS_ONLY_MENTIONS)
                },
                r.ZB.PresetNothing
            );
}
function b(e, n) {
    a.Z.updateChannelOverrideSettings(
        e,
        n,
        {
            message_notifications: u.bL.NULL,
            flags: (0, l.YF)(o.ZP.getChannelIdFlags(e, n))
        },
        r.ZB.PresetDefault
    );
}
function N(e, n, t) {
    let i = o.ZP.getChannelIdFlags(e, n);
    a.Z.updateChannelOverrideSettings(e, n, { flags: (0, l.pq)(i, t === _.i.ALL_MESSAGES ? g.ic.UNREADS_ALL_MESSAGES : g.ic.UNREADS_ONLY_MENTIONS) }, r.UE.unreads(t));
}
function p(e, n, t) {
    a.Z.updateChannelOverrideSettings(e, n, { message_notifications: t }, r.UE.notifications(t));
}
