t.d(n, {
    ZP: function () {
        return c;
    }
}),
    t(653041);
var i = t(131704),
    r = t(699516),
    l = t(594174),
    o = t(933557),
    u = t(981631),
    a = t(388032);
function s(e) {
    let { isSubscriptionGated: n, needSubscriptionToAccess: t } = e;
    if (n) return t ? a.intl.string(a.t['oj+HOj']) : a.intl.string(a.t.xI3TQU);
}
function c(e) {
    let n,
        { channel: t, unread: c = !1, mentionCount: d = 0, userCount: f, embeddedActivitiesCount: p, isSubscriptionGated: _, needSubscriptionToAccess: E } = e,
        g = (0, o.F6)(t, l.default, r.Z);
    switch (t.type) {
        case u.d4z.DM:
            n = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
        case u.d4z.GROUP_DM:
            n = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
        case u.d4z.GUILD_STORE:
            n = a.t.Bo4msr;
            break;
        case u.d4z.GUILD_DIRECTORY:
            n = a.t['92EAFx'];
            break;
        case u.d4z.GUILD_ANNOUNCEMENT:
            n = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
        case u.d4z.GUILD_VOICE:
            let m = [a.intl.formatToPlainString(a.t.bkpadH, { channelName: t.name })];
            if ((d > 0 && m.push(a.intl.formatToPlainString(a.t['3l1GOz'], { mentionCount: d })), c && m.push(a.intl.string(a.t.x5zAGR)), null != f)) {
                let e = t.userLimit;
                null != e && e > 0
                    ? m.push(
                          a.intl.formatToPlainString(a.t['6qgTOD'], {
                              userCount: f,
                              limit: e
                          })
                      )
                    : m.push(a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }));
            }
            null != p && p > 0 && m.push(a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: p }));
            let h = s({
                isSubscriptionGated: _,
                needSubscriptionToAccess: E
            });
            return null != h && m.push(h), m.join(', ');
        case u.d4z.GUILD_STAGE_VOICE:
            n = a.t.TPPk2d;
            break;
        default:
            n = i.Ec.has(t.type) ? (d > 0 ? a.t['ZL7+Iy'] : c ? a.t.YlVvmZ : a.t['0nZpiI']) : d > 0 ? a.t.g8ONMz : c ? a.t.smf1CQ : a.t.s0JADg;
    }
    let I = [
            a.intl.formatToPlainString(n, {
                channelName: g,
                mentionCount: d
            })
        ],
        S = s({
            isSubscriptionGated: _,
            needSubscriptionToAccess: E
        });
    return null != S && I.push(S), I.join(', ');
}
