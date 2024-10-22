n.d(t, {
    W: function () {
        return r;
    }
});
var i = n(544891),
    l = n(570140),
    a = n(981631);
async function r() {
    try {
        l.Z.dispatch({ type: 'CAMPAIGN_CONTEXT_FETCH' });
        let { body: e } = await i.tn.get({
            url: a.ANM.CAMPAIGN_CONTEXT,
            query: { campaigns: [a.$Dd.CASH_APP_PAY_AWARENESS] }
        });
        l.Z.dispatch({
            type: 'CAMPAIGN_CONTEXT_FETCH_SUCCESS',
            campaignContexts: e
        });
    } catch (e) {
        l.Z.dispatch({ type: 'CAMPAIGN_CONTEXT_FETCH_FAILURE' });
    }
}
