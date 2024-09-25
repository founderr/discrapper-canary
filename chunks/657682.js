n.d(t, {
    NF: function () {
        return E;
    },
    Zy: function () {
        return _;
    }
});
var r = n(47120);
var i = n(512722);
var a = n(626135),
    o = n(777754),
    s = n(981631),
    l = n(689938);
let u = /^\d+$/,
    c = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    d = /^[a-zA-Z0-9_\\.]+$/;
function _(e) {
    return d.test(e) || (e.includes('#') && c.test(e)) ? null : (f(e), l.Z.Messages.POMELO_ADD_FRIEND_ERROR);
}
function E(e, t) {
    switch (e) {
        case s.evJ.RELATIONSHIP_INCOMING_DISABLED:
            return l.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({ discordTag: t });
        case s.evJ.TOO_MANY_FRIENDS:
            return l.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
        case s.evJ.RELATIONSHIP_ALREADY_FRIENDS:
            return l.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
        case s.evJ.USER_QUARANTINED:
        case s.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return l.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
        case s.evJ.TOO_MANY_BLOCKED_USERS:
            return l.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
        case s.evJ.RELATIONSHIP_INCOMING_BLOCKED:
        case s.evJ.RELATIONSHIP_INVALID_SELF:
        case s.evJ.RELATIONSHIP_INVALUD_USER_BOT:
        case s.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return l.Z.Messages.POMELO_ADD_FRIEND_ERROR;
    }
}
function f(e) {
    let [t, n] = e.split('#');
    a.default.track(s.rMx.FRIEND_REQUEST_FAILED, {
        reason: 'Invalid Username',
        query: e,
        discrim_len: (null != n ? n : '').length,
        username_len: t.length,
        is_email_like: o.Z.isEmail(e),
        is_invite_like: o.Z.isInvite(e),
        is_num_only: u.test(e)
    });
}
