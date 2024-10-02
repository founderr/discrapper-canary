n.d(t, {
    IG: function () {
        return T;
    },
    JK: function () {
        return I;
    },
    ZA: function () {
        return h;
    },
    _m: function () {
        return m;
    },
    ft: function () {
        return g;
    },
    yN: function () {
        return p;
    }
});
var r = n(47120);
var i = n(399606),
    a = n(87051),
    o = n(592125),
    s = n(9156),
    l = n(621600),
    u = n(423589),
    c = n(113449),
    d = n(686660),
    _ = n(981631),
    E = n(490897),
    f = n(526761);
function h(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(e)),
        n = (0, i.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(e));
    return {
        unread: t,
        notification: n,
        preset: (0, d.gs)(t, n)
    };
}
function p(e) {
    let t = (0, i.Wu)([s.ZP], () =>
            (0, u.OD)(s.ZP.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1
            })
        ),
        [n, r] = (0, i.Wu)(
            [s.ZP, o.Z],
            () => {
                let n = o.Z.getChannel(e.parent_id);
                return null != n && t.includes(n.id) ? ['parent', (0, d.p1)((0, d.gs)(s.ZP.resolveUnreadSetting(n), s.ZP.resolvedMessageNotifications(n)))] : ['guild', (0, d.p1)((0, d.gs)(s.ZP.getGuildUnreadSetting(e.guild_id), s.ZP.getMessageNotifications(e.guild_id)))];
            },
            [e.guild_id, e.parent_id, t]
        );
    return {
        inherited: !t.includes(e.id),
        inheritedFrom: n,
        inheritedPreset: r
    };
}
function m(e, t, n) {
    let r = s.ZP.getChannelIdFlags(e, t);
    n === d.s8.ALL_MESSAGES
        ? a.Z.updateChannelOverrideSettings(
              e,
              t,
              {
                  message_notifications: _.bL.ALL_MESSAGES,
                  flags: (0, c.pq)(r, f.ic.UNREADS_ALL_MESSAGES)
              },
              l.ZB.PresetAll
          )
        : n === d.s8.MENTIONS
          ? a.Z.updateChannelOverrideSettings(
                e,
                t,
                {
                    message_notifications: _.bL.ONLY_MENTIONS,
                    flags: (0, c.pq)(r, f.ic.UNREADS_ONLY_MENTIONS)
                },
                l.ZB.PresetMentions
            )
          : n === d.s8.NOTHING &&
            a.Z.updateChannelOverrideSettings(
                e,
                t,
                {
                    message_notifications: _.bL.NO_MESSAGES,
                    flags: (0, c.pq)(r, f.ic.UNREADS_ONLY_MENTIONS)
                },
                l.ZB.PresetNothing
            );
}
function I(e, t) {
    a.Z.updateChannelOverrideSettings(
        e,
        t,
        {
            message_notifications: _.bL.NULL,
            flags: (0, c.YF)(s.ZP.getChannelIdFlags(e, t))
        },
        l.ZB.PresetDefault
    );
}
function T(e, t, n) {
    let r = s.ZP.getChannelIdFlags(e, t);
    a.Z.updateChannelOverrideSettings(e, t, { flags: (0, c.pq)(r, n === E.i.ALL_MESSAGES ? f.ic.UNREADS_ALL_MESSAGES : f.ic.UNREADS_ONLY_MENTIONS) }, l.UE.unreads(n));
}
function g(e, t, n) {
    a.Z.updateChannelOverrideSettings(e, t, { message_notifications: n }, l.UE.notifications(n));
}
