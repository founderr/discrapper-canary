n.d(t, {
    $J: function () {
        return I;
    },
    He: function () {
        return s;
    },
    av: function () {
        return m;
    },
    df: function () {
        return p;
    },
    hY: function () {
        return h;
    },
    oL: function () {
        return f;
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
    l = n(674563);
async function s(e) {
    await r.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e) });
}
async function c(e) {
    return (await r.tn.get({ url: o.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e) })).body;
}
async function u(e, t) {
    await r.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, t) });
}
async function d(e) {
    await r.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e) });
}
async function _(e) {
    return (await r.tn.get({ url: o.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e) })).body;
}
async function m(e) {
    try {
        let t = await r.tn.get({
            url: o.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e }
        });
        i.Z.dispatch({
            type: 'CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS',
            eligibleGuilds: t.body.eligible_guilds
        });
    } catch (e) {}
}
async function p(e, t) {
    let n = (
        await r.tn.post({
            url: o.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: t }
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
function h(e) {
    return r.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e) });
}
function I(e) {
    return r.tn.post({ url: o.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e) });
}
async function E(e) {
    await r.tn.post({
        url: o.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
        body: {}
    });
}
async function f(e) {
    return (
        await E(e),
        await a.ZP.getApplicationsForGuild(e, {
            type: l.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0
        })
    );
}
