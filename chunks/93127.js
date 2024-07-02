I.d(t, {
    W: function () {
        return u;
    }
});
var n = I(544891), _ = I(570140), r = I(814443), s = I(981631);
function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return r.Z.needsRefresh() ? (_.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }), n.tn.get({
        url: s.ANM.USER_AFFINITIES,
        retries: e ? 3 : 0,
        oldFormErrors: !0
    }).then(e => {
        let {body: t} = e;
        _.Z.dispatch({
            type: 'LOAD_USER_AFFINITIES_SUCCESS',
            affinities: t
        });
    }, () => {
        _.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
    })) : Promise.resolve();
}
