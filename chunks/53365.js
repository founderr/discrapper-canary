n.d(t, {
    $J: function () {
        return E;
    },
    He: function () {
        return l;
    },
    av: function () {
        return h;
    },
    df: function () {
        return m;
    },
    hY: function () {
        return p;
    },
    oL: function () {
        return T;
    },
    wE: function () {
        return u;
    },
    wZ: function () {
        return _;
    },
    yk: function () {
        return c;
    },
    zo: function () {
        return d;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(728345),
    o = n(981631),
    s = n(674563);
async function l(e) {
    await r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e),
        rejectWithError: !1
    });
}
async function c(e) {
    return (
        await r.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e),
            rejectWithError: !1
        })
    ).body;
}
async function u(e, t) {
    await r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t),
        rejectWithError: !1
    });
}
async function d(e) {
    await r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e),
        rejectWithError: !1
    });
}
async function _(e) {
    return (
        await r.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
            rejectWithError: !1
        })
    ).body;
}
async function h(e) {
    try {
        let t = await r.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: t.body.eligible_guilds
        });
    } catch (e) {}
}
async function m(e, t) {
    let n = (
        await r.tn.post({
            url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t },
            rejectWithError: !1
        })
    ).body;
    return (
        null != n.application &&
            i.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: n.application
            }),
        n
    );
}
function p(e) {
    return r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        rejectWithError: !1
    });
}
function E(e) {
    return r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        rejectWithError: !1
    });
}
async function I(e) {
    await r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
        body: {},
        rejectWithError: !1
    });
}
async function T(e) {
    return (
        await I(e),
        await a.ZP.getApplicationsForGuild(e, {
            type: s.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0
        })
    );
}
