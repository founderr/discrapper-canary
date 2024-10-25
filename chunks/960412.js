n.d(t, {
    Y7: function () {
        return c;
    },
    oc: function () {
        return d;
    },
    pR: function () {
        return _;
    }
}),
    n(724458);
var s = n(990547),
    a = n(283693),
    r = n(570140),
    i = n(573261),
    l = n(930441),
    o = n(981631);
async function c() {
    try {
        let e = await i.Z.get({
            url: o.ANM.EMAIL_SETTINGS,
            trackedActionData: {
                event: s.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.initialized;
                    return (0, a.iG)({ initialized: n });
                }
            }
        });
        return (
            r.Z.dispatch({
                type: 'EMAIL_SETTINGS_FETCH_SUCCESS',
                settings: e.body
            }),
            e.body
        );
    } catch {
        r.Z.dispatch({ type: 'EMAIL_SETTINGS_FETCH_FAILURE' });
    }
}
async function _(e, t) {
    r.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: { [e]: t }
    });
    try {
        let n = await i.Z.patch({
            url: o.ANM.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: s.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: e,
                    value: t
                }
            }
        });
        r.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: n.body
        });
    } catch (e) {
        r.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
async function d() {
    let e = l.M0.reduce(
        (e, t) => ({
            ...e,
            [t]: !1
        }),
        {}
    );
    r.Z.dispatch({
        type: 'EMAIL_SETTINGS_UPDATE',
        updates: e
    });
    try {
        let t = await i.Z.patch({
            url: o.ANM.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: s.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: 'marketing',
                    value: !1
                }
            }
        });
        r.Z.dispatch({
            type: 'EMAIL_SETTINGS_UPDATE_SUCCESS',
            settings: t.body
        });
    } catch (e) {
        r.Z.dispatch({ type: 'EMAIL_SETTINGS_UPDATE_FAILURE' });
    }
}
