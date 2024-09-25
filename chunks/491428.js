n.d(t, {
    Xq: function () {
        return c;
    },
    g8: function () {
        return E;
    },
    hZ: function () {
        return d;
    },
    wk: function () {
        return _;
    }
});
var r = n(990547),
    i = n(283693),
    a = n(570140),
    o = n(558724),
    s = n(626135),
    l = n(573261),
    u = n(981631);
function c(e) {
    a.Z.dispatch({
        type: 'SURVEY_OVERRIDE',
        id: e
    });
}
function d(e, t) {
    a.Z.dispatch({
        type: 'SURVEY_HIDE',
        key: e
    }),
        t
            ? s.default.track(u.rMx.APP_NOTICE_CLOSED, {
                  notice_type: u.kVF.SURVEY,
                  survey_id: e,
                  dismissed: t
              })
            : s.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: u.kVF.SURVEY });
}
function _(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        l.Z.get({
            url: u.ANM.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: r.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    var t;
                    let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                    return (0, i.iG)({ key: null == n ? void 0 : n.key });
                }
            }
        }).then(
            (e) => {
                var t;
                a.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
                });
            },
            () => {
                a.Z.dispatch({
                    type: 'SURVEY_FETCHED',
                    survey: null
                });
            }
        )
    );
}
function E(e) {
    let t = o.Z.getLastSeenTimestamp();
    if (null === t || (null != t && Date.now() - t >= o.J))
        return (
            a.Z.dispatch({
                type: 'SURVEY_SEEN',
                key: e
            }),
            l.Z.post({
                url: u.ANM.USER_SURVEY_SEEN(e),
                trackedActionData: {
                    event: r.NetworkActionNames.USER_SURVEY_SEEN,
                    properties: (t) => (0, i.iG)({ key: e })
                }
            })
        );
}
