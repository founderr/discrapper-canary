t.d(n, {
    C4: function () {
        return b;
    },
    Fi: function () {
        return h;
    },
    KK: function () {
        return u;
    },
    f6: function () {
        return x;
    },
    n: function () {
        return m;
    }
}),
    t(47120);
var l = t(913527),
    r = t.n(l),
    i = t(544891),
    a = t(367907),
    o = t(434404),
    s = t(430824),
    c = t(626135),
    d = t(981631);
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (0 !== n.length)
        c.default.track(d.rMx.GUILD_RAID_REPORTED, {
            ...(0, a.hH)(e),
            guild_id: e,
            raid_types: n
        });
}
async function x(e, n) {
    let t = new Set(e.features);
    t.has(d.oNc.COMMUNITY) ? (n ? t.delete(d.oNc.RAID_ALERTS_DISABLED) : t.add(d.oNc.RAID_ALERTS_DISABLED)) : n ? t.add(d.oNc.NON_COMMUNITY_RAID_ALERTS) : t.delete(d.oNc.NON_COMMUNITY_RAID_ALERTS), await o.Z.saveGuild(e.id, { features: t }, { throwErr: !0 });
}
async function m(e, n, t, l) {
    let a = r()().add(l, 'hours').toISOString();
    return await i.tn.put({
        url: d.ANM.GUILD_INCIDENT_ACTIONS(e),
        body: {
            invites_disabled_until: n ? a : null,
            dms_disabled_until: t ? a : null
        },
        rejectWithError: !1
    });
}
async function h(e, n, t) {
    let l = s.Z.getGuild(e);
    return null == (null == l ? void 0 : l.getSafetyAlertsChannelId())
        ? null
        : await i.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: {
                  alert_message_id: n,
                  reason: t
              },
              rejectWithError: !1
          });
}
async function b(e) {
    let n = s.Z.getGuild(e);
    return null == (null == n ? void 0 : n.getSafetyAlertsChannelId())
        ? null
        : await i.tn.post({
              url: d.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1
          });
}
