n.d(t, {
    __: function () {
        return c;
    },
    in: function () {
        return d;
    }
}),
    n(373793);
var r = n(39621),
    i = n(911969),
    a = n(213459),
    s = n(581364),
    o = n(807169),
    l = n(104793),
    u = n(388032);
function c(e, t, n) {
    var r, u, c, d;
    let f = (0, o.Hs)(t, [i.yU.CHAT]),
        _ = (0, a.PL)(!0, !1),
        h = (0, a.LD)(null == t ? void 0 : t.guild_id, !1),
        p = (0, s.vC)(null == t ? void 0 : t.guild_id, n);
    if (null == e || p) return !1;
    let { context: m, userId: g, roleIds: E, isImpersonating: v } = f,
        I = null === (u = h.result) || void 0 === u ? void 0 : null === (r = u.sections[e.applicationId]) || void 0 === r ? void 0 : r.descriptor;
    if (void 0 !== I) {
        let n = (0, l.ZJ)(I.permissions, t, null == t ? void 0 : t.guild_id),
            r = (0, l.ML)(I.permissions, null == m ? void 0 : m.guild_id, g, E, v);
        if (
            (0, l.Ft)(e, f, {
                applicationAllowedForUser: r,
                applicationAllowedForChannel: n,
                commandBotId: I.botId
            }) === l.mF.ALLOWED
        )
            return !1;
    }
    let S = null === (d = _.result) || void 0 === d ? void 0 : null === (c = d.sections[e.applicationId]) || void 0 === c ? void 0 : c.commands;
    return null != S && e.id in S;
}
function d(e) {
    switch (e) {
        case r.O.FEATURE_LIMITED:
            return u.intl.string(u.t.WCvmra);
        case r.O.GUILD_FEATURE_LIMITED:
            return u.intl.string(u.t['0QUDYW']);
        case r.O.USER_FEATURE_LIMITED:
            return u.intl.string(u.t.gs1sxc);
        case r.O.SLOWMODE:
            return u.intl.string(u.t['9UAXh4']);
        case r.O.RATE_LIMIT:
            return u.intl.string(u.t.zBB9xM);
        case r.O.CANNOT_MESSAGE_USER:
            return u.intl.string(u.t.w7sHnJ);
        case r.O.USER_VERIFICATION_LEVEL:
            return u.intl.string(u.t.SLAkFR);
        case r.O.CANNOT_UNARCHIVE_THREAD:
            return u.intl.string(u.t.AIqS3t);
        case r.O.CANNOT_JOIN_THREAD:
            return u.intl.string(u.t.BqKxlZ);
        case r.O.MISSING_PERMISSIONS:
            return u.intl.string(u.t.LLF2DA);
        case r.O.CANNOT_SEND_ATTACHMENTS:
            return u.intl.string(u.t.Htl7W1);
        case r.O.CANNOT_SEND_EMBEDS:
            return u.intl.string(u.t.vGgPMD);
        case r.O.CANNOT_SEND_STICKERS:
            return u.intl.string(u.t.byrr7u);
        case r.O.AUTOMOD_BLOCKED:
            return u.intl.string(u.t['24PAJy']);
        case r.O.HARMFUL_LINK:
            return u.intl.string(u.t.zeqgmJ);
        case r.O.CANNOT_USE_COMMAND:
            return u.intl.string(u.t.kzMhho);
        case r.O.BETA_GUILD_SIZE:
            return u.intl.string(u.t.Af3rGR);
        case r.O.CANNOT_USE_EXTERNAL_APPS:
            return u.intl.string(u.t.Ji4l7O);
        default:
            return u.intl.string(u.t['v/OAcn']);
    }
}
