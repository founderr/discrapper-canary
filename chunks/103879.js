e.d(t, {
    NA: function () {
        return r;
    },
    uR: function () {
        return d;
    },
    yq: function () {
        return u;
    }
});
var i = e(544891),
    a = e(570140),
    l = e(406432),
    o = e(314897),
    s = e(788080),
    c = e(981631);
async function u() {
    a.Z.dispatch({ type: 'SAFETY_HUB_FETCH_START' });
    let n = o.default.getSuspendedUserToken(),
        t = null != n ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        e =
            null != n
                ? i.tn.post({
                      url: t,
                      body: { token: n }
                  })
                : i.tn.get({ url: t });
    await e
        .then((n) => {
            let { body: t } = n,
                { classifications: e, guild_classifications: i, account_standing: l, is_dsa_eligible: o, username: s, is_appeal_eligible: c } = t,
                u = e.map((n) => (_(n), n));
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_SUCCESS',
                classifications: u.concat(null != i ? i : []),
                accountStanding: l,
                isDsaEligible: o,
                username: s,
                isAppealEligible: c
            });
        })
        .catch((n) => {
            var t, e;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_FAILURE',
                error: null !== (e = null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : 'Unknown error'
            });
        });
}
async function r(n) {
    a.Z.dispatch({
        type: 'SAFETY_HUB_FETCH_CLASSIFICATION_START',
        classificationId: n
    });
    let t = o.default.getSuspendedUserToken(),
        e = null != t ? c.ANM.SAFETY_HUB_SUSPENDED : c.ANM.SAFETY_HUB,
        l =
            null != t
                ? i.tn.post({
                      url: e,
                      body: { token: t }
                  })
                : i.tn.get({ url: e });
    await l
        .then((t) => {
            let { body: e } = t,
                { classifications: i, account_standing: l, is_dsa_eligible: o, username: s, is_appeal_eligible: c } = e,
                u = i.find((t) => t.id === n);
            null != u
                ? (_(u),
                  a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS',
                      classification: u,
                      accountStanding: l,
                      isDsaEligible: o,
                      username: s,
                      isAppealEligible: c
                  }))
                : a.Z.dispatch({
                      type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                      error: 'Classification not found.',
                      classificationId: n
                  });
        })
        .catch((t) => {
            var e, i;
            a.Z.dispatch({
                type: 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE',
                error: null !== (i = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== i ? i : 'Unknown error',
                classificationId: n
            });
        });
}
function _(n) {
    if (null != n.flagged_content && n.flagged_content.length > 0) {
        let t = n.flagged_content[0];
        (t.attachments = t.attachments.filter((n) => {
            let { filename: t } = n;
            return (0, l.CO)(t) || (0, l.NU)(t);
        })),
            (n.flagged_content = (0, s.Vt)(t) ? [] : [t]);
    }
}
async function d(n, t, e) {
    let l = o.default.getSuspendedUserToken(),
        s = null != l ? c.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(n) : c.ANM.SAFETY_HUB_REQUEST_REVIEW(n),
        u =
            null != l
                ? i.tn.put({
                      url: s,
                      body: {
                          signal: t,
                          user_input: e,
                          token: l
                      }
                  })
                : i.tn.put({
                      url: s,
                      body: {
                          signal: t,
                          user_input: e
                      }
                  });
    a.Z.dispatch({ type: 'SAFETY_HUB_REQUEST_REVIEW_START' }),
        await u
            .then(() => {
                a.Z.dispatch({
                    type: 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS',
                    classificationId: n
                });
            })
            .catch((n) => {
                var t, e;
                throw (
                    (a.Z.dispatch({
                        type: 'SAFETY_HUB_REQUEST_REVIEW_FAILURE',
                        error: null !== (e = null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : 'Unknown error'
                    }),
                    n)
                );
            });
}
