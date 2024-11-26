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
var r = n(544891),
    a = n(570140),
    l = n(959776),
    o = n(626135),
    i = n(723359),
    s = n(981631);
function c(e, t) {
    return (
        (0, l.Z)(e, t),
        o.default.track(s.rMx.AGE_GATE_ACTION, {
            source: t,
            action: i.Al.AGE_GATE_SUBMITTED
        }),
        r.tn
            .patch({
                url: s.ANM.ME,
                oldFormErrors: !0,
                body: { date_of_birth: e.format('YYYY-MM-DD') },
                rejectWithError: !1
            })
            .then((e) => {
                let n = e.body;
                a.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: n
                }),
                    o.default.track(s.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: i.Al.AGE_GATE_SUCCESS
                    });
            })
    );
}
function u(e) {
    a.Z.dispatch({ type: 'AGE_GATE_PREVENT_UNDERAGE_REGISTRATION' }),
        o.default.track(s.rMx.AGE_GATE_ACTION, {
            source: e,
            action: i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
        });
}
function d(e) {
    a.Z.dispatch({ type: 'AGE_GATE_LOGOUT_UNDERAGE_NEW_USER' }),
        o.default.track(s.rMx.AGE_GATE_ACTION, {
            source: e,
            action: i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
        });
}
