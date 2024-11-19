n.d(t, {
    NA: function () {
        return E;
    },
    pU: function () {
        return S;
    },
    uR: function () {
        return c;
    },
    yq: function () {
        return o;
    }
});
var i = n(544891),
    l = n(570140),
    a = n(406432),
    r = n(314897),
    u = n(788080),
    _ = n(981631);
async function o() {
    l.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let e = r.default.getSuspendedUserToken(),
        t = null != e ? _.ANM.SAFETY_HUB_SUSPENDED : _.ANM.SAFETY_HUB,
        n =
            null != e
                ? i.tn.post({
                      url: t,
                      body: { token: e },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: t,
                      rejectWithError: !1
                  });
    await n
        .then((e) => {
            let { body: t } = e,
                { classifications: n, guild_classifications: i, account_standing: a, is_dsa_eligible: r, username: u, is_appeal_eligible: _, appeal_eligibility: o } = t,
                E = n.map((e) => (s(e), e));
            l.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: E.concat(null != i ? i : []),
                accountStanding: a,
                isDsaEligible: r,
                username: u,
                isAppealEligible: _,
                appealEligibility: null != o ? o : []
            });
        })
        .catch((e) => {
            var t, n;
            l.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : 'Unknown error'
            });
        });
}
async function E(e) {
    l.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: e
    });
    let t = r.default.getSuspendedUserToken(),
        n = null != t ? _.ANM.SAFETY_HUB_SUSPENDED : _.ANM.SAFETY_HUB,
        a =
            null != t
                ? i.tn.post({
                      url: n,
                      body: { token: t },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: n,
                      rejectWithError: !1
                  });
    await a
        .then((t) => {
            let { body: n } = t,
                { classifications: i, account_standing: a, is_dsa_eligible: r, username: u, is_appeal_eligible: _ } = n,
                o = i.find((t) => t.id === e);
            null != o
                ? (s(o),
                  l.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                      classification: o,
                      accountStanding: a,
                      isDsaEligible: r,
                      username: u,
                      isAppealEligible: _
                  }))
                : l.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                      error: 'Classification not found.',
                      classificationId: e
                  });
        })
        .catch((t) => {
            var n, i;
            l.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error',
                classificationId: e
            });
        });
}
function s(e) {
    if (null != e.flagged_content && e.flagged_content.length > 0) {
        let t = e.flagged_content[0];
        (t.attachments = t.attachments.filter((e) => {
            let { filename: t } = e;
            return (0, a.CO)(t) || (0, a.NU)(t);
        })),
            (e.flagged_content = (0, u.Vt)(t) ? [] : [t]);
    }
}
async function c(e, t, n) {
    let a = r.default.getSuspendedUserToken(),
        u = null != a ? _.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : _.ANM.SAFETY_HUB_REQUEST_REVIEW(e),
        o =
            null != a
                ? i.tn.put({
                      url: u,
                      body: {
                          signal: t,
                          user_input: n,
                          token: a
                      },
                      rejectWithError: !1
                  })
                : i.tn.put({
                      url: u,
                      body: {
                          signal: t,
                          user_input: n
                      },
                      rejectWithError: !1
                  });
    l.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await o
            .then(() => {
                l.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: e
                });
            })
            .catch((e) => {
                var t, n;
                throw (
                    (l.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : 'Unknown error'
                    }),
                    e)
                );
            });
}
async function S() {
    l.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_AGE_VERIFICATION_START' });
    let e = r.default.getSuspendedUserToken(),
        t = _.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
        n = i.tn.post({
            url: t,
            body: { token: e },
            rejectWithError: !1
        });
    await n
        .then((e) => {
            let { body: t } = e,
                { verification_request_id: n, verification_webview_url: i } = t;
            l.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_AGE_VERIFICATION_SUCCESS',
                verificationRequestId: n,
                verificationWebviewUrl: i
            });
        })
        .catch((e) => {
            var t, n;
            l.Z.dispatch({
                type: 'SAFETY_HUB_REQUEST_AGE_VERIFICATION_FAILURE',
                error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : 'Unknown error'
            });
        });
}
