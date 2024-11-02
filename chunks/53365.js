t.d(n, {
    $J: function () {
        return p;
    },
    He: function () {
        return l;
    },
    av: function () {
        return f;
    },
    df: function () {
        return h;
    },
    hY: function () {
        return x;
    },
    oL: function () {
        return C;
    },
    wE: function () {
        return d;
    },
    wZ: function () {
        return m;
    },
    yk: function () {
        return c;
    },
    zo: function () {
        return u;
    }
});
var r = t(544891),
    a = t(570140),
    i = t(728345),
    s = t(981631),
    o = t(674563);
async function l(e) {
    await r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e) });
}
async function c(e) {
    return (await r.tn.get({ url: s.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e) })).body;
}
async function d(e, n) {
    await r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, n) });
}
async function u(e) {
    await r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e) });
}
async function m(e) {
    return (await r.tn.get({ url: s.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e) })).body;
}
async function f(e) {
    try {
        let n = await r.tn.get({
            url: s.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e }
        });
        a.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: n.body.eligible_guilds
        });
    } catch (e) {}
}
async function h(e, n) {
    let t = (
        await r.tn.post({
            url: s.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: n }
        })
    ).body;
    return (
        null != t.application &&
            a.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: t.application
            }),
        t
    );
}
function x(e) {
    return r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e) });
}
function p(e) {
    return r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e) });
}
async function g(e) {
    await r.tn.post({
        url: s.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
        body: {}
    });
}
async function C(e) {
    return (
        await g(e),
        await i.ZP.getApplicationsForGuild(e, {
            type: o.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0
        })
    );
}
