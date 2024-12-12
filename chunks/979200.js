r.d(n, {
    PM: function () {
        return c;
    },
    ZC: function () {
        return a.u$;
    },
    de: function () {
        return l;
    },
    x9: function () {
        return u;
    }
});
var i = r(544891),
    a = r(921072),
    s = r(981631),
    o = r(388032);
async function l(e) {
    let n = s.ANM.APPLICATION_DISCLOSURES(e),
        r = await i.tn.get({
            url: n,
            retries: 3,
            rejectWithError: !1
        }),
        a = r.body.disclosures,
        o = r.body.acked_disclosures;
    return {
        disclosures: a,
        ackedDisclosures: o,
        allAcked: r.body.all_acked
    };
}
async function u(e, n) {
    let r = s.ANM.APPLICATION_DISCLOSURES(e);
    await i.tn.post({
        url: r,
        body: { disclosures: n },
        rejectWithError: !1
    });
}
function c(e) {
    switch (e) {
        case a.u$.IP_LOCATION:
            return o.intl.string(o.t['6wPmjo']);
        case a.u$.DISPLAYS_ADVERTISEMENTS:
            return o.intl.string(o.t['/uOMKS']);
        default:
            return null;
    }
}
