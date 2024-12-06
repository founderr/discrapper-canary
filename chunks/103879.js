n.d(e, {
    FN: function () {
        return T;
    },
    NA: function () {
        return s;
    },
    _w: function () {
        return U;
    },
    uR: function () {
        return S;
    },
    yq: function () {
        return A;
    }
});
var i = n(544891),
    l = n(570140),
    E = n(406432),
    _ = n(314897),
    a = n(236289),
    r = n(788080),
    u = n(800530),
    o = n(981631);
async function A() {
    l.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = _.default.getSuspendedUserToken(),
        e = null != t ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
        n =
            null != t
                ? i.tn.post({
                      url: e,
                      body: { token: t },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: e,
                      rejectWithError: !1
                  });
    await n
        .then((t) => {
            let { body: e } = t,
                { classifications: n, guild_classifications: i, account_standing: E, is_dsa_eligible: _, username: a, is_appeal_eligible: r, appeal_eligibility: u } = e,
                o = n.map((t) => (c(t), t));
            l.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: o.concat(null != i ? i : []),
                accountStanding: E,
                isDsaEligible: _,
                username: a,
                isAppealEligible: r,
                appealEligibility: null != u ? u : []
            });
        })
        .catch((t) => {
            var e, n;
            l.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
            });
        });
}
async function s(t) {
    l.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let e = _.default.getSuspendedUserToken(),
        n = null != e ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
        E =
            null != e
                ? i.tn.post({
                      url: n,
                      body: { token: e },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: n,
                      rejectWithError: !1
                  });
    await E.then((e) => {
        let { body: n } = e,
            { classifications: i, account_standing: E, is_dsa_eligible: _, username: a, is_appeal_eligible: r } = n,
            u = i.find((e) => e.id === t);
        null != u
            ? (c(u),
              l.Z.dispatch({
                  type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                  classification: u,
                  accountStanding: E,
                  isDsaEligible: _,
                  username: a,
                  isAppealEligible: r
              }))
            : l.Z.dispatch({
                  type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                  error: 'Classification not found.',
                  classificationId: t
              });
    }).catch((e) => {
        var n, i;
        l.Z.dispatch({
            type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
            error: null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error',
            classificationId: t
        });
    });
}
function c(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let e = t.flagged_content[0];
        (e.attachments = e.attachments.filter((t) => {
            let { filename: e } = t;
            return (0, E.CO)(e) || (0, E.NU)(e);
        })),
            (t.flagged_content = (0, r.Vt)(e) ? [] : [e]);
    }
}
async function S(t, e, n) {
    let E = _.default.getSuspendedUserToken(),
        a = null != E ? o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : o.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        r =
            null != E
                ? i.tn.put({
                      url: a,
                      body: {
                          signal: e,
                          user_input: n,
                          token: E
                      },
                      rejectWithError: !1
                  })
                : i.tn.put({
                      url: a,
                      body: {
                          signal: e,
                          user_input: n
                      },
                      rejectWithError: !1
                  });
    l.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await r
            .then(() => {
                l.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: t
                });
            })
            .catch((t) => {
                var e, n;
                throw (
                    (l.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
                    }),
                    t)
                );
            });
}
async function T() {
    l.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START' });
    let t = _.default.getSuspendedUserToken(),
        e = o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        n = i.tn.post({
            url: e,
            body: { token: t },
            rejectWithError: !1
        });
    await n
        .then((t) => {
            let { body: e } = t,
                { verification_request_id: n, verification_webview_url: i } = e;
            l.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS',
                verificationRequestId: n,
                verificationWebviewUrl: i
            });
        })
        .catch((t) => {
            var e, n;
            l.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE',
                error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
            });
        });
}
async function U() {
    l.Z.dispatch({ type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START' });
    let t = _.default.getSuspendedUserToken(),
        e = a.Z.getAgeCheckAttempts(),
        n = o.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
        E = i.tn.post({
            url: n,
            body: { token: t },
            rejectWithError: !1
        });
    await E.then((t) => {
        let { body: n } = t,
            { success: i } = n;
        !i && e < u.o6 && setTimeout(() => U(), u.Cp),
            l.Z.dispatch({
                type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS',
                success: i
            });
    }).catch((t) => {
        var e, n;
        l.Z.dispatch({
            type: 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE',
            error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : 'Unknown error'
        });
    });
}
