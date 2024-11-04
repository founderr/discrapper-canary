n.d(t, {
    Av: function () {
        return s;
    },
    hp: function () {
        return d;
    },
    wE: function () {
        return c;
    }
});
var l = n(544891),
    a = n(570140),
    r = n(959776),
    i = n(626135),
    u = n(723359),
    o = n(981631);
function s(e, t) {
    return (
        (0, r.Z)(e, t),
        i.default.track(o.rMx.AGE_GATE_ACTION, {
            source: t,
            action: u.Al.AGE_GATE_SUBMITTED
        }),
        l.tn
            .patch({
                url: o.ANM.ME,
                oldFormErrors: !0,
                body: { date_of_birth: e.format('YYYY-MM-DD') }
            })
            .then((e) => {
                let n = e.body;
                a.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: n
                }),
                    i.default.track(o.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: u.Al.AGE_GATE_SUCCESS
                    });
            })
    );
}
function c(e) {
    a.Z.dispatch({ type: 'AGE_GATE_PREVENT_UNDERAGE_REGISTRATION' }),
        i.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: u.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
        });
}
function d(e) {
    a.Z.dispatch({ type: 'AGE_GATE_LOGOUT_UNDERAGE_NEW_USER' }),
        i.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: u.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
        });
}
