n.d(t, {
    GV: function () {
        return E;
    },
    Po: function () {
        return _;
    },
    Sg: function () {
        return p;
    },
    VP: function () {
        return m;
    },
    dh: function () {
        return g;
    },
    g7: function () {
        return h;
    }
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    a = n(544891),
    s = n(570140),
    o = n(911969),
    l = n(314897),
    u = n(709054),
    c = n(174212),
    d = n(895924),
    f = n(981631);
function _(e) {
    let { channelId: t, command: n, section: r, location: a, initialValues: o, triggerSection: l, queryLength: u, sectionName: c, query: f, searchResultsPosition: _, source: p, commandOrigin: h } = e;
    null != n && i()(n.inputType !== d.iw.PLACEHOLDER, 'command should not be placeholder'),
        s.Z.dispatch({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: n,
            section: r,
            initialValues: o,
            location: a,
            triggerSection: l,
            queryLength: u,
            sectionName: c,
            query: f,
            searchResultsPosition: _,
            source: p,
            commandOrigin: h
        });
}
function p(e, t) {
    s.Z.dispatch({
        type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
        channelId: e,
        commandId: t
    });
}
function h(e, t) {
    s.Z.dispatch({
        type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
        channelId: e,
        changedOptionStates: t
    });
}
function m(e, t) {
    h(
        e,
        Object.fromEntries(
            Object.entries(t).map((e) => {
                let [t, n] = e;
                return [t, { lastValidationResult: n }];
            })
        )
    );
}
function g(e, t, n, r) {
    return a.tn.put({
        body: { permissions: r },
        url: f.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n),
        rejectWithError: !1
    });
}
function E(e, t, n) {
    var r;
    i()(null != t.autocomplete, 'Missing autocomplete context');
    let { query: d, name: _ } = t.autocomplete,
        p = u.default.fromTimestamp(Date.now());
    if (
        (s.Z.dispatch({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST',
            nonce: p,
            channelId: t.channel.id,
            query: d,
            name: _
        }),
        null == c.Z.getAutocompleteChoices(t.channel.id, _, d))
    )
        a.tn
            .post({
                url: f.ANM.INTERACTIONS,
                body: {
                    type: o.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: null === (r = t.guild) || void 0 === r ? void 0 : r.id,
                    channel_id: t.channel.id,
                    session_id: l.default.getSessionId(),
                    data: n,
                    nonce: p
                },
                timeout: 3000,
                rejectWithError: !1
            })
            .catch(() => {
                s.Z.dispatch({
                    type: 'INTERACTION_FAILURE',
                    nonce: p
                });
            });
}
