t.d(n, {
    BG: function () {
        return T;
    },
    aY: function () {
        return a;
    },
    dW: function () {
        return N;
    },
    gm: function () {
        return _;
    },
    h1: function () {
        return p;
    },
    jQ: function () {
        return o;
    },
    sE: function () {
        return S;
    }
});
var i,
    r,
    a,
    o,
    l = t(470079),
    u = t(100527),
    d = t(367907),
    s = t(314897),
    c = t(626135),
    E = t(981631);
function I(e, n, t) {
    var i;
    let r = {
        ...n,
        ...(0, d.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t)
    };
    c.default.track(e, r);
}
function _(e) {
    return l.useCallback(
        (n) => {
            !(function (e) {
                let n = {
                    guild_id: e,
                    location: u.Z.MEMBER_SAFETY_PAGE
                };
                I(E.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
        },
        [e]
    );
}
function T(e) {
    return l.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    selected_role_count: n.size,
                    guild_id: e,
                    location: u.Z.MEMBER_SAFETY_PAGE
                };
                I(E.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
        },
        [e]
    );
}
((i = a || (a = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (i.COMMUNICATION_DISABLED = 'communication_disabled'), (i.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (i.USERNAME_QUARANTINED = 'username_quarantined');
function N(e) {
    return l.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    flag_type: n,
                    guild_id: e,
                    location: u.Z.MEMBER_SAFETY_PAGE
                };
                I(E.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
        },
        [e]
    );
}
function S(e, n) {
    let { location: t, targetUserId: i, targets: r, locations: a } = n;
    return l.useCallback(
        (n) => {
            let o = {
                action_type: n,
                mod_user_id: s.default.getId(),
                guild_id: e,
                location: t,
                locations: a,
                target_user_id: null != i ? i : void 0,
                targets: null != r ? r : void 0
            };
            I(E.rMx.MODERATION_ACTION, o);
        },
        [e, t, i, r, a]
    );
}
function p(e, n) {
    I(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: n
    });
}
((r = o || (o = {})).BAN = 'ban'), (r.KICK = 'kick'), (r.MUTE = 'mute'), (r.TIMEOUT = 'timeout'), (r.ADD_ROLE = 'add_role'), (r.REMOVE_ROLE = 'remove_role'), (r.COPY_ID = 'copy_id'), (r.CHANGE_NICKNAME = 'change_nickname');
