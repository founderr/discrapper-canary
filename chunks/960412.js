n.d(t, {
    Y7: function () {
        return c;
    },
    oc: function () {
        return _;
    },
    pR: function () {
        return d;
    }
});
var r = n(724458);
var i = n(990547),
    a = n(283693),
    o = n(570140),
    s = n(573261),
    l = n(930441),
    u = n(981631);
async function c() {
    try {
        let e = await s.Z.get({
            url: u.ANM.EMAIL_SETTINGS,
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
                    return (0, a.iG)({ initialized: n });
                }
            }
        });
        return (
            o.Z.dispatch({
                type: 'EMAIL_SETTINGS_FETCH_SUCCESS',
                settings: e.body
            }),
            e.body
        );
    } catch {
        o.Z.dispatch({ type: 'EMAIL_SETTINGS_FETCH_FAILURE' });
    }
}
async function d(e, t) {
    o.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: { [e]: t }
    });
    try {
        let n = await s.Z.patch({
            url: u.ANM.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: e,
                    value: t
                }
            }
        });
        o.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: n.body
        });
    } catch (e) {
        o.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
async function _() {
    let e = l.M0.reduce(
        (e, t) => ({
            ...e,
            [t]: !1
        }),
        {}
    );
    o.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: e
    });
    try {
        let t = await s.Z.patch({
            url: u.ANM.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: 'marketing',
                    value: !1
                }
            }
        });
        o.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: t.body
        });
    } catch (e) {
        o.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
