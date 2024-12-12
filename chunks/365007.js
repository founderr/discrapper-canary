r.d(n, {
    L$: function () {
        return h;
    },
    Sr: function () {
        return p;
    },
    WQ: function () {
        return _;
    },
    cT: function () {
        return f;
    },
    d$: function () {
        return c;
    },
    hL: function () {
        return d;
    },
    us: function () {
        return u;
    }
});
var i = r(525769),
    a = r(544891),
    s = r(570140),
    o = r(573261),
    l = r(981631);
async function u() {
    return (
        await a.tn.post({
            url: l.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            rejectWithError: !1
        })
    ).body;
}
async function c() {
    let { challenge: e, ticket: n } = (
        await a.tn.post({
            url: l.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE,
            rejectWithError: !1
        })
    ).body;
    return {
        challenge: e,
        ticket: n
    };
}
function d() {
    a.tn
        .get({
            url: l.ANM.MFA_WEBAUTHN_CREDENTIALS,
            rejectWithError: !0
        })
        .then((e) => {
            s.Z.dispatch({
                type: 'MFA_WEBAUTHN_CREDENTIALS_LOADED',
                credentials: e.body
            });
        });
}
function f(e) {
    a.tn
        .del({
            url: l.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id),
            rejectWithError: !0
        })
        .then(() => {
            s.Z.dispatch({
                type: 'AUTHENTICATOR_DELETE',
                credential: e
            });
        });
}
async function _(e, n) {
    let r = await a.tn.patch({
        url: l.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
        body: { name: n },
        rejectWithError: !1
    });
    s.Z.dispatch({
        type: 'AUTHENTICATOR_UPDATE',
        credential: r.body
    });
}
async function h() {
    let {
        body: { ticket: e, challenge: n }
    } = await a.tn.post({
        url: l.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {},
        rejectWithError: !1
    });
    return {
        ticket: e,
        challenge: n
    };
}
async function p(e, n, r) {
    let a = await o.Z.post({
        url: l.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {
            name: e,
            ticket: n,
            credential: r
        },
        trackedActionData: { event: i.a.WEBAUTHN_REGISTER },
        rejectWithError: !1
    });
    s.Z.dispatch({
        type: 'AUTHENTICATOR_CREATE',
        credential: a.body
    }),
        s.Z.dispatch({
            type: 'MFA_ENABLE_SUCCESS',
            codes: a.body.backup_codes
        });
}
