n.d(t, {
    Hr: function () {
        return g;
    },
    Hz: function () {
        return R;
    },
    To: function () {
        return A;
    },
    XG: function () {
        return p;
    },
    _N: function () {
        return m;
    },
    ad: function () {
        return C;
    },
    bj: function () {
        return v;
    },
    el: function () {
        return S;
    },
    hS: function () {
        return h;
    },
    lq: function () {
        return L;
    },
    mM: function () {
        return f;
    },
    oo: function () {
        return O;
    },
    q6: function () {
        return D;
    },
    r2: function () {
        return x;
    },
    vR: function () {
        return N;
    }
}),
    n(390547);
var s = n(392711),
    a = n.n(s),
    i = n(544891),
    r = n(570140),
    l = n(668781),
    o = n(563534),
    c = n(734893),
    d = n(621923),
    u = n(626135),
    _ = n(960048),
    I = n(969632),
    E = n(981631),
    T = n(689938);
function m(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE',
        welcomeMessage: e
    });
}
function N(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION',
        action: e
    });
}
function S(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION',
        channelId: e,
        action: t
    });
}
function g(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION',
        channelId: e
    });
}
function h(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION',
        actions: e
    });
}
async function C(e, t, n, s) {
    if (!s) return Promise.resolve();
    try {
        let s = await i.tn.patch({
                url: E.ANM.NEW_MEMBER_ACTION(e, t),
                body: { icon: n },
                oldFormErrors: !0
            }),
            a = (0, c.cq)(s.body);
        return (
            r.Z.dispatch({
                type: 'GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS',
                guildId: e,
                action: a
            }),
            Promise.resolve(s.body)
        );
    } catch (t) {
        var o;
        let e = a().flatMap(null !== (o = t.body) && void 0 !== o ? o : {}, (e) => e);
        return (
            l.Z.show({
                title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
                body: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({ errorMessage: e.join(', ') })
            }),
            _.Z.addBreadcrumb({ message: 'Error updating new member action icon' }),
            Promise.reject()
        );
    }
}
function x(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL',
        resourceChannel: e
    });
}
function p(e, t) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL',
        channelId: e,
        resourceChannel: t
    });
}
function R(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL',
        resourceChannelId: e
    });
}
function L(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL',
        resourceChannels: e
    });
}
async function f(e, t, n) {
    try {
        let s = await i.tn.put({
                url: E.ANM.RESOURCE_CHANNEL(e, t),
                body: { icon: n },
                oldFormErrors: !0
            }),
            a = (0, c.vD)(s.body);
        return (
            r.Z.dispatch({
                type: 'GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS',
                guildId: e,
                resourceChannel: a
            }),
            s.body
        );
    } catch (t) {
        var s;
        let e = a().flatMap(null !== (s = t.body) && void 0 !== s ? s : {}, (e) => e);
        l.Z.show({
            title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
            body: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({ errorMessage: e.join(', ') })
        });
    }
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!n && !I.Z.hasChanges()) return Promise.resolve();
    let { serverGuideOptional: s } = (0, d.FJ)(e);
    return (!s || o.Z.getEnabled(e)) && !(0, c.uo)(t)
        ? (l.Z.show({
              title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
              body: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_REASON
          }),
          _.Z.addBreadcrumb({ message: 'Error saving home settings' }),
          Promise.reject())
        : (!s && null != t && (t.enabled = !0), M(e, t));
}
function A(e, t) {
    let n = o.Z.getSettings(e);
    if (t && !(0, c.uo)(n)) {
        l.Z.show({
            title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
            body: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_REASON
        });
        return;
    }
    return (
        r.Z.dispatch({
            type: 'GUILD_HOME_SETTINGS_TOGGLE_ENABLED',
            guildId: e,
            enabled: t
        }),
        M(e, {
            ...n,
            enabled: t
        })
    );
}
async function M(e, t) {
    var n, s, o, d, _, I, m, N, S;
    r.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_START' });
    try {
        let a = await i.tn.put({
                url: E.ANM.GUILD_HOME_SETTINGS(e),
                body: (0, c.HH)(e, t),
                oldFormErrors: !0
            }),
            l = (0, c.tB)(a.body);
        return (
            r.Z.dispatch({
                type: 'GUILD_HOME_SETTINGS_UPDATE_SUCCESS',
                guildId: e,
                homeSettings: l
            }),
            u.default.track(E.rMx.GUILD_SETTINGS_GUIDE_UPDATED, {
                guild_id: e,
                welcome_message_author_id: (null !== (d = null == l ? void 0 : null === (n = l.welcomeMessage) || void 0 === n ? void 0 : n.authorIds) && void 0 !== d ? d : [])[0],
                welcome_message_length: null !== (_ = null == l ? void 0 : null === (o = l.welcomeMessage) || void 0 === o ? void 0 : null === (s = o.message) || void 0 === s ? void 0 : s.length) && void 0 !== _ ? _ : 0,
                member_action_channel_ids: (null !== (I = null == l ? void 0 : l.newMemberActions) && void 0 !== I ? I : []).map((e) => e.channelId),
                member_action_channel_actions: (null !== (m = null == l ? void 0 : l.newMemberActions) && void 0 !== m ? m : []).map((e) => e.actionType),
                resource_channel_ids: (null !== (N = null == l ? void 0 : l.resourceChannels) && void 0 !== N ? N : []).map((e) => e.channelId),
                enabled: null == l ? void 0 : l.enabled
            }),
            a.body
        );
    } catch (t) {
        let e = a().flatMap(null !== (S = t.body) && void 0 !== S ? S : {}, (e) => e);
        r.Z.dispatch({ type: 'GUILD_HOME_SETTINGS_UPDATE_FAIL' }),
            l.Z.show({
                title: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED,
                body: T.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SAVE_FAILED_INVALID_WITH_DETAILS.format({ errorMessage: e.join(', ') })
            });
    }
}
function D(e, t) {
    null != e &&
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION',
            guildId: e,
            channelIds: t
        });
}
function v() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET' });
}
