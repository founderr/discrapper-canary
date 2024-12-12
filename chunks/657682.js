r.d(n, {
    NF: function () {
        return h;
    },
    Zy: function () {
        return _;
    }
});
var i = r(47120);
var a = r(512722);
var s = r(626135),
    o = r(777754),
    l = r(981631),
    u = r(388032);
let c = /^\d+$/,
    d = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    f = /^[a-zA-Z0-9_\\.]+$/;
function _(e) {
    return f.test(e) || (e.includes('#') && d.test(e)) ? null : (p(e), u.intl.string(u.t.paDJBA));
}
function h(e, n) {
    switch (e) {
        case l.evJ.RELATIONSHIP_INCOMING_DISABLED:
            return u.intl.format(u.t.Oxe6Ul, { discordTag: n });
        case l.evJ.TOO_MANY_FRIENDS:
            return u.intl.string(u.t.tnBalJ);
        case l.evJ.RELATIONSHIP_ALREADY_FRIENDS:
            return u.intl.string(u.t.VNLnen);
        case l.evJ.USER_QUARANTINED:
        case l.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return u.intl.string(u.t.EouHws);
        case l.evJ.TOO_MANY_BLOCKED_USERS:
            return u.intl.string(u.t.sIGo1t);
        case l.evJ.RELATIONSHIP_INCOMING_BLOCKED:
        case l.evJ.RELATIONSHIP_INVALID_SELF:
        case l.evJ.RELATIONSHIP_INVALUD_USER_BOT:
        case l.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return u.intl.string(u.t.paDJBA);
    }
}
function p(e) {
    let [n, r] = e.split('#');
    s.default.track(l.rMx.FRIEND_REQUEST_FAILED, {
        reason: 'Invalid Username',
        query: e,
        discrim_len: (null != r ? r : '').length,
        username_len: n.length,
        is_email_like: o.Z.isEmail(e),
        is_invite_like: o.Z.isInvite(e),
        is_num_only: c.test(e)
    });
}
