r.d(n, {
    $J: function () {
        return d;
    },
    He: function () {
        return l;
    },
    av: function () {
        return _;
    },
    df: function () {
        return A;
    },
    hY: function () {
        return N;
    },
    oL: function () {
        return O;
    },
    wE: function () {
        return s;
    },
    wZ: function () {
        return T;
    },
    yk: function () {
        return u;
    },
    zo: function () {
        return E;
    }
});
var e = r(544891),
    i = r(570140),
    o = r(728345),
    a = r(981631),
    c = r(674563);
async function l(t) {
    await e.tn.post({
        url: a.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
        rejectWithError: !1
    });
}
async function u(t) {
    return (
        await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_ELIGIBILITY(t),
            rejectWithError: !1
        })
    ).body;
}
async function s(t, n) {
    await e.tn.post({
        url: a.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(t, n),
        rejectWithError: !1
    });
}
async function E(t) {
    await e.tn.post({
        url: a.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
        rejectWithError: !1
    });
}
async function T(t) {
    return (
        await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
            rejectWithError: !1
        })
    ).body;
}
async function _(t) {
    try {
        let n = await e.tn.get({
            url: a.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: t },
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: n.body.eligible_guilds
        });
    } catch (t) {}
}
async function A(t, n) {
    let r = (
        await e.tn.post({
            url: a.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
            body: { team_id: n },
            rejectWithError: !1
        })
    ).body;
    return (
        null != r.application &&
            i.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: r.application
            }),
        r
    );
}
function N(t) {
    return e.tn.post({
        url: a.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
        rejectWithError: !1
    });
}
function d(t) {
    return e.tn.post({
        url: a.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
        rejectWithError: !1
    });
}
async function I(t) {
    await e.tn.post({
        url: a.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
        body: {},
        rejectWithError: !1
    });
}
async function O(t) {
    return (
        await I(t),
        await o.ZP.getApplicationsForGuild(t, {
            type: c.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0
        })
    );
}
