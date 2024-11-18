i.d(n, {
    NA: function () {
        return u;
    },
    uR: function () {
        return d;
    },
    yq: function () {
        return r;
    }
});
var e = i(544891),
    a = i(570140),
    l = i(406432),
    o = i(314897),
    s = i(788080),
    c = i(981631);
async function r() {
    a.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = o.default.getSuspendedUserToken(),
        n = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        i =
            null != t
                ? e.tn.post({
                      url: n,
                      body: { token: t },
                      rejectWithError: !1
                  })
                : e.tn.get({
                      url: n,
                      rejectWithError: !1
                  });
    await i
        .then((t) => {
            let { body: n } = t,
                { classifications: i, guild_classifications: e, account_standing: l, is_dsa_eligible: o, username: s, is_appeal_eligible: c, appeal_eligibility: r } = n,
                u = i.map((t) => (_(t), t));
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: u.concat(null != e ? e : []),
                accountStanding: l,
                isDsaEligible: o,
                username: s,
                isAppealEligible: c,
                appealEligibility: null != r ? r : []
            });
        })
        .catch((t) => {
            var n, i;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error'
            });
        });
}
async function u(t) {
    a.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let n = o.default.getSuspendedUserToken(),
        i = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        l =
            null != n
                ? e.tn.post({
                      url: i,
                      body: { token: n },
                      rejectWithError: !1
                  })
                : e.tn.get({
                      url: i,
                      rejectWithError: !1
                  });
    await l
        .then((n) => {
            let { body: i } = n,
                { classifications: e, account_standing: l, is_dsa_eligible: o, username: s, is_appeal_eligible: c } = i,
                r = e.find((n) => n.id === t);
            null != r
                ? (_(r),
                  a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                      classification: r,
                      accountStanding: l,
                      isDsaEligible: o,
                      username: s,
                      isAppealEligible: c
                  }))
                : a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                      error: 'Classification not found.',
                      classificationId: t
                  });
        })
        .catch((n) => {
            var i, e;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (e = null == n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : i.message) && void 0 !== e ? e : 'Unknown error',
                classificationId: t
            });
        });
}
function _(t) {
    if (null != t.flagged_content && t.flagged_content.length > 0) {
        let n = t.flagged_content[0];
        (n.attachments = n.attachments.filter((t) => {
            let { filename: n } = t;
            return (0, l.CO)(n) || (0, l.NU)(n);
        })),
            (t.flagged_content = (0, s.Vt)(n) ? [] : [n]);
    }
}
async function d(t, n, i) {
    let l = o.default.getSuspendedUserToken(),
        s = null != l ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : c.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        r =
            null != l
                ? e.tn.put({
                      url: s,
                      body: {
                          signal: n,
                          user_input: i,
                          token: l
                      },
                      rejectWithError: !1
                  })
                : e.tn.put({
                      url: s,
                      body: {
                          signal: n,
                          user_input: i
                      },
                      rejectWithError: !1
                  });
    a.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await r
            .then(() => {
                a.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: t
                });
            })
            .catch((t) => {
                var n, i;
                throw (
                    (a.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : 'Unknown error'
                    }),
                    t)
                );
            });
}
