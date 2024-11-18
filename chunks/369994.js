n.d(t, {
    C4: function () {
        return C;
    },
    Fi: function () {
        return _;
    },
    KK: function () {
        return u;
    },
    f6: function () {
        return x;
    },
    n: function () {
        return h;
    }
}),
    n(47120);
var i = n(913527),
    o = n.n(i),
    r = n(544891),
    l = n(367907),
    a = n(434404),
    s = n(430824),
    d = n(626135),
    c = n(981631);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (0 !== t.length)
        d.default.track(c.rMx.GUILD_RAID_REPORTED, {
            ...(0, l.hH)(e),
            guild_id: e,
            raid_types: t
        });
}
async function x(e, t) {
    let n = new Set(e.features);
    n.has(c.oNc.COMMUNITY) ? (t ? n.delete(c.oNc.RAID_ALERTS_DISABLED) : n.add(c.oNc.RAID_ALERTS_DISABLED)) : t ? n.add(c.oNc.NON_COMMUNITY_RAID_ALERTS) : n.delete(c.oNc.NON_COMMUNITY_RAID_ALERTS), await a.Z.saveGuild(e.id, { features: n }, { throwErr: !0 });
}
async function h(e, t, n, i) {
    let l = o()().add(i, 'hours').toISOString();
    return await r.tn.put({
        url: c.ANM.GUILD_INCIDENT_ACTIONS(e),
        body: {
            invites_disabled_until: t ? l : null,
            dms_disabled_until: n ? l : null
        },
        rejectWithError: !1
    });
}
async function _(e, t, n) {
    let i = s.Z.getGuild(e);
    return null == (null == i ? void 0 : i.getSafetyAlertsChannelId())
        ? null
        : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
              body: {
                  alert_message_id: t,
                  reason: n
              },
              rejectWithError: !1
          });
}
async function C(e) {
    let t = s.Z.getGuild(e);
    return null == (null == t ? void 0 : t.getSafetyAlertsChannelId())
        ? null
        : await r.tn.post({
              url: c.ANM.GUILD_INCIDENT_REPORT_RAID(e),
              rejectWithError: !1
          });
}
