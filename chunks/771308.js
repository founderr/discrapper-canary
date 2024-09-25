n.d(t, {
    Av: function () {
        return c;
    },
    hp: function () {
        return d;
    },
    wE: function () {
        return u;
    }
});
var s = n(544891),
    r = n(570140),
    i = n(959776),
    a = n(626135),
    o = n(723359),
    l = n(981631);
function c(e, t) {
    return (
        (0, i.Z)(e, t),
        a.default.track(l.rMx.AGE_GATE_ACTION, {
            source: t,
            action: o.Al.AGE_GATE_SUBMITTED
        }),
        s.tn
            .patch({
                url: l.ANM.ME,
                oldFormErrors: !0,
                body: { date_of_birth: e.format('YYYY-MM-DD') }
            })
            .then((e) => {
                let n = e.body;
                r.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: n
                }),
                    a.default.track(l.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: o.Al.AGE_GATE_SUCCESS
                    });
            })
    );
}
function u(e) {
    r.Z.dispatch({ type: 'AGE_GATE_PREVENT_UNDERAGE_REGISTRATION' }),
        a.default.track(l.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
        });
}
function d(e) {
    r.Z.dispatch({ type: 'AGE_GATE_LOGOUT_UNDERAGE_NEW_USER' }),
        a.default.track(l.rMx.AGE_GATE_ACTION, {
            source: e,
            action: o.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
        });
}
