n.d(t, {
    ZP: function () {
        return c;
    }
}),
    n(653041);
var i = n(131704),
    r = n(699516),
    l = n(594174),
    o = n(933557),
    u = n(981631),
    a = n(388032);
function s(e) {
    let { isSubscriptionGated: t, needSubscriptionToAccess: n } = e;
    if (t) return n ? a.intl.string(a.t['oj+HOj']) : a.intl.string(a.t.xI3TQU);
}
function c(e) {
    let t,
        { channel: n, unread: c = !1, mentionCount: d = 0, userCount: f, embeddedActivitiesCount: _, isSubscriptionGated: E, needSubscriptionToAccess: p } = e,
        m = (0, o.F6)(n, l.default, r.Z);
    switch (n.type) {
        case u.d4z.DM:
            t = c ? a.t.F2MZsr : a.t.fYqXVV;
            break;
        case u.d4z.GROUP_DM:
            t = c ? a.t.fxxUo6 : a.t.lts3LS;
            break;
        case u.d4z.GUILD_STORE:
            t = a.t.Bo4msr;
            break;
        case u.d4z.GUILD_DIRECTORY:
            t = a.t['92EAFx'];
            break;
        case u.d4z.GUILD_ANNOUNCEMENT:
            t = d > 0 ? a.t.sDKIpq : c ? a.t.VM7z8f : a.t.WJ3MPj;
            break;
        case u.d4z.GUILD_VOICE:
            let g = [a.intl.formatToPlainString(a.t.bkpadH, { channelName: n.name })];
            if ((d > 0 && g.push(a.intl.formatToPlainString(a.t['3l1GOz'], { mentionCount: d })), c && g.push(a.intl.string(a.t.x5zAGR)), null != f)) {
                let e = n.userLimit;
                null != e && e > 0
                    ? g.push(
                          a.intl.formatToPlainString(a.t['6qgTOD'], {
                              userCount: f,
                              limit: e
                          })
                      )
                    : g.push(a.intl.formatToPlainString(a.t.GNIiAA, { userCount: f }));
            }
            null != _ && _ > 0 && g.push(a.intl.formatToPlainString(a.t.O6PLYW, { activitiesCount: _ }));
            let h = s({
                isSubscriptionGated: E,
                needSubscriptionToAccess: p
            });
            return null != h && g.push(h), g.join(', ');
        case u.d4z.GUILD_STAGE_VOICE:
            t = a.t.TPPk2d;
            break;
        default:
            t = i.Ec.has(n.type) ? (d > 0 ? a.t['ZL7+Iy'] : c ? a.t.YlVvmZ : a.t['0nZpiI']) : d > 0 ? a.t.g8ONMz : c ? a.t.smf1CQ : a.t.s0JADg;
    }
    let I = [
            a.intl.formatToPlainString(t, {
                channelName: m,
                mentionCount: d
            })
        ],
        S = s({
            isSubscriptionGated: E,
            needSubscriptionToAccess: p
        });
    return null != S && I.push(S), I.join(', ');
}
