r.d(n, {
    z: function () {
        return c;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(881052),
    o = r(25251),
    l = r(981631);
let u = (e) => {
        let { sku_id: n, ...r } = e;
        return {
            id: r.id,
            skuId: n,
            config: {
                ...r,
                skuId: n
            }
        };
    },
    c = async function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(!e && o.Z.hasFetched()) && !o.Z.isFetching) {
            if (o.Z.canFetch()) {
                a.Z.dispatch({ type: 'USER_PROFILE_EFFECTS_FETCH' });
                try {
                    let { body: e } = await i.tn.get({
                            url: l.ANM.USER_PROFILE_EFFECTS,
                            rejectWithError: !1
                        }),
                        n = (null == e ? void 0 : e.profile_effect_configs).map(u);
                    a.Z.dispatch({
                        type: 'USER_PROFILE_EFFECTS_FETCH_SUCCESS',
                        profileEffects: n
                    });
                } catch (e) {
                    throw (
                        (a.Z.dispatch({
                            type: 'USER_PROFILE_EFFECTS_FETCH_FAILURE',
                            error: e
                        }),
                        new s.Hx(e))
                    );
                }
            }
        }
    };
