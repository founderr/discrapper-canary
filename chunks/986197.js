var s = n(990547),
    i = n(544891),
    a = n(570140),
    r = n(881052),
    o = n(626135),
    l = n(573261),
    u = n(545851),
    d = n(109488),
    c = n(794099),
    E = n(981631),
    _ = n(689938);
n(135200);
t.Z = {
    resetSuggestions: () => a.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
    async fetchSuggestionsRegistration(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
        if (!!(0, c.vc)()) {
            a.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
            try {
                var n;
                let s = await i.tn.get({
                    url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
                    query: null == e ? void 0 : { global_name: e },
                    timeout: t
                });
                if (s.ok && (null === (n = s.body) || void 0 === n ? void 0 : n.username) != null)
                    return a.Z.dispatch({
                        type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
                        suggestion: s.body,
                        source: e
                    });
            } catch (e) {
                return;
            }
        }
    },
    async fetchSuggestions(e) {
        if (!!(0, d.P)())
            try {
                var t;
                a.Z.dispatch({
                    type: 'POMELO_SUGGESTIONS_FETCH',
                    usernameSuggestionLoading: !0
                });
                let n = await i.tn.get({
                    url: E.ANM.POMELO_SUGGESTIONS,
                    timeout: e
                });
                if (n.ok && (null === (t = n.body) || void 0 === t ? void 0 : t.username) != null)
                    return a.Z.dispatch({
                        type: 'POMELO_SUGGESTIONS_SUCCESS',
                        suggestion: n.body
                    });
            } catch (e) {
                return;
            }
    },
    async attemptPomelo(e) {
        var t, n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'modal',
            d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        let m =
            ((t = e),
            !1 === /^[A-Za-z0-9_.]*$/.test(t)
                ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                : t.includes('..')
                  ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
                  : t.length < 2 || t.length > 32
                    ? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                          maxNum: 32,
                          minNum: 2
                      })
                    : void 0);
        if (null != m)
            return (
                o.default.track(E.rMx.POMELO_ERRORS, {
                    reason: m,
                    username_error: !0,
                    location: i,
                    one_click_flow: c
                }),
                a.Z.dispatch({
                    type: 'POMELO_ATTEMPT_FAILURE',
                    username: e,
                    error: m
                })
            );
        if (!!(0, u.E)())
            try {
                let t = await l.Z.post({
                    url: d ? E.ANM.POMELO_ATTEMPT_UNAUTHED : E.ANM.POMELO_ATTEMPT,
                    body: { username: e },
                    trackedActionData: {
                        event: s.NetworkActionNames.POMELO_ATTEMPT,
                        properties: { requested_username: e }
                    }
                });
                t.body.taken &&
                    o.default.track(E.rMx.POMELO_ERRORS, {
                        reason: 'already_taken',
                        username_error: !0,
                        location: i,
                        one_click_flow: c
                    }),
                    a.Z.dispatch({
                        type: 'POMELO_ATTEMPT_SUCCESS',
                        username: e,
                        taken: t.body.taken
                    });
            } catch (l) {
                let t = new r.Hx(l),
                    s = null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : void 0;
                o.default.track(E.rMx.POMELO_ERRORS, {
                    reason: s,
                    username_error: !0,
                    location: i,
                    one_click_flow: c
                }),
                    a.Z.dispatch({
                        username: e,
                        type: 'POMELO_ATTEMPT_FAILURE',
                        error: null != t.status && t.status < 500 && 401 !== t.status ? s : void 0,
                        statusCode: t.status,
                        retryAfter: t.retryAfter
                    });
            }
    },
    async createPomelo(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await l.Z.post({
                body: e,
                url: E.ANM.POMELO_CREATE,
                trackedActionData: {
                    event: s.NetworkActionNames.POMELO_CREATE,
                    properties: { one_click_flow: t }
                }
            });
        return (
            a.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: n.body
            }),
            n.body
        );
    }
};
