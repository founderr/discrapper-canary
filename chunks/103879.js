e.d(n, {
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
var i = e(544891),
    a = e(570140),
    l = e(406432),
    o = e(314897),
    s = e(788080),
    c = e(981631);
async function r() {
    a.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let t = o.default.getSuspendedUserToken(),
        n = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        e =
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
    await e
        .then((t) => {
            let { body: n } = t,
                { classifications: e, guild_classifications: i, account_standing: l, is_dsa_eligible: o, username: s, is_appeal_eligible: c } = n,
                r = e.map((t) => (_(t), t));
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: r.concat(null != i ? i : []),
                accountStanding: l,
                isDsaEligible: o,
                username: s,
                isAppealEligible: c
            });
        })
        .catch((t) => {
            var n, e;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (e = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : 'Unknown error'
            });
        });
}
async function u(t) {
    a.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: t
    });
    let n = o.default.getSuspendedUserToken(),
        e = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        l =
            null != n
                ? i.tn.post({
                      url: e,
                      body: { token: n },
                      rejectWithError: !1
                  })
                : i.tn.get({
                      url: e,
                      rejectWithError: !1
                  });
    await l
        .then((n) => {
            let { body: e } = n,
                { classifications: i, account_standing: l, is_dsa_eligible: o, username: s, is_appeal_eligible: c } = e,
                r = i.find((n) => n.id === t);
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
            var e, i;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (i = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.message) && void 0 !== i ? i : 'Unknown error',
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
async function d(t, n, e) {
    let l = o.default.getSuspendedUserToken(),
        s = null != l ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : c.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
        r =
            null != l
                ? i.tn.put({
                      url: s,
                      body: {
                          signal: n,
                          user_input: e,
                          token: l
                      },
                      rejectWithError: !1
                  })
                : i.tn.put({
                      url: s,
                      body: {
                          signal: n,
                          user_input: e
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
                var n, e;
                throw (
                    (a.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (e = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : 'Unknown error'
                    }),
                    t)
                );
            });
}
