var i = n(990547),
    s = n(544891),
    r = n(570140),
    a = n(881052),
    l = n(626135),
    o = n(573261),
    u = n(545851),
    c = n(109488),
    d = n(794099),
    m = n(981631);
n(135200);
var g = n(388032);
t.Z = {
    resetSuggestions: () => r.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        if (!!(0, d.vc)()) {
            r.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
            try {
                var n;
                let i = await s.tn.get({
                    url: m.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                    query: null == e ? void 0 : { global_name: e },
                    timeout: t
                });
                if (i.ok && (null === (n = i.body) || void 0 === n ? void 0 : n.username) != null)
                    return r.Z.dispatch({
                        type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                        suggestion: i.body,
                        source: e
                    });
            } catch (e) {
                return;
            }
        }
    },
    async fetchSuggestions(e) {
        if (!!(0, c.P)())
            try {
                var t;
                r.Z.dispatch({
                    type: 'POMELO_SUGGESTIONS_FETCH',
                    usernameSuggestionLoading: !0
                });
                let n = await s.tn.get({
                    url: m.ANM.POMELO_SUGGESTIONS,
                    timeout: e
                });
                if (n.ok && (null === (t = n.body) || void 0 === t ? void 0 : t.username) != null)
                    return r.Z.dispatch({
                        type: 'POMELO_SUGGESTIONS_SUCCESS',
                        suggestion: n.body
                    });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        var t, n;
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'modal',
            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        let E =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
                ? g.intl.string(g.t.z7c4bG)
                : t.includes('..')
                  ? g.intl.string(g.t['C7G+go'])
                  : t.length < 2 || t.length > 32
                    ? g.intl.formatToPlainString(g.t.IpijXF, {
                          maxNum: 32,
                          minNum: 2
                      })
                    : void 0);
        if (null != E)
            return (
                l.default.track(m.rMx.POMELO_ERRORS, {
                    reason: E,
                    username_error: !0,
                    location: s,
                    one_click_flow: d
                }),
                r.Z.dispatch({
                    type: 'POMELO_ATTEMPT_FAILURE',
                    username: e,
                    error: E
                })
            );
        if (!!(0, u.E)())
            try {
                let t = await o.Z.post({
                    url: c ? m.ANM.POMELO_ATTEMPT_UNAUTHED : m.ANM.POMELO_ATTEMPT,
                    body: { username: e },
                    trackedActionData: {
                        event: i.NetworkActionNames.POMELO_ATTEMPT,
                        properties: { requested_username: e }
                    }
                });
                t.body.taken &&
                    l.default.track(m.rMx.POMELO_ERRORS, {
                        reason: 'already_taken',
                        username_error: !0,
                        location: s,
                        one_click_flow: d
                    }),
                    r.Z.dispatch({
                        type: 'POMELO_ATTEMPT_SUCCESS',
                        username: e,
                        taken: t.body.taken
                    });
            } catch (o) {
                let t = new a.Hx(o),
                    i = null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : void 0;
                l.default.track(m.rMx.POMELO_ERRORS, {
                    reason: i,
                    username_error: !0,
                    location: s,
                    one_click_flow: d
                }),
                    r.Z.dispatch({
                        username: e,
                        type: 'POMELO_ATTEMPT_FAILURE',
                        error: null != t.status && t.status < 500 && 401 !== t.status ? i : void 0,
                        statusCode: t.status,
                        retryAfter: t.retryAfter
                    });
            }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await o.Z.post({
                body: e,
                url: m.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: i.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                }
            });
        return (
            r.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: n.body
            }),
            n.body
        );
    }
};
