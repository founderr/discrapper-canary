E.d(_, {
    BG: function () {
        return D;
    },
    aY: function () {
        return t;
    },
    dW: function () {
        return L;
    },
    gm: function () {
        return N;
    },
    h1: function () {
        return u;
    },
    jQ: function () {
        return r;
    },
    sE: function () {
        return S;
    }
});
var s,
    n,
    t,
    r,
    T = E(192379),
    a = E(100527),
    I = E(367907),
    l = E(314897),
    o = E(626135),
    A = E(981631);
function i(e, _, E) {
    var s;
    let n = {
        ..._,
        ...(0, I.hH)(null !== (s = _.guild_id) && void 0 !== s ? s : E)
    };
    o.default.track(e, n);
}
function N(e) {
    return T.useCallback(
        (_) => {
            !(function (e) {
                let _ = {
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                i(A.rMx.MOD_DASH_SEARCH_MEMBERS, _);
            })(e);
        },
        [e]
    );
}
function D(e) {
    return T.useCallback(
        (_) => {
            !(function (e, _) {
                let E = {
                    selected_role_count: _.size,
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                i(A.rMx.MOD_DASH_FILTER_ROLES, E);
            })(e, _);
        },
        [e]
    );
}
((s = t || (t = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (s.COMMUNICATION_DISABLED = 'communication_disabled'), (s.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (s.USERNAME_QUARANTINED = 'username_quarantined');
function L(e) {
    return T.useCallback(
        (_) => {
            !(function (e, _) {
                let E = {
                    flag_type: _,
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                i(A.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, E);
            })(e, _);
        },
        [e]
    );
}
function S(e, _) {
    let { location: E, targetUserId: s, targets: n, locations: t } = _;
    return T.useCallback(
        (_) => {
            let r = {
                action_type: _,
                mod_user_id: l.default.getId(),
                guild_id: e,
                location: E,
                locations: t,
                target_user_id: null != s ? s : void 0,
                targets: null != n ? n : void 0
            };
            i(A.rMx.MODERATION_ACTION, r);
        },
        [e, E, s, n, t]
    );
}
function u(e, _) {
    i(A.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: _
    });
}
((n = r || (r = {})).BAN = 'ban'), (n.KICK = 'kick'), (n.MUTE = 'mute'), (n.TIMEOUT = 'timeout'), (n.ADD_ROLE = 'add_role'), (n.REMOVE_ROLE = 'remove_role'), (n.COPY_ID = 'copy_id'), (n.CHANGE_NICKNAME = 'change_nickname');
