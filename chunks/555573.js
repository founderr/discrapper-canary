n.d(t, {
    GV: function () {
        return T;
    },
    Po: function () {
        return f;
    },
    Sg: function () {
        return h;
    },
    VP: function () {
        return m;
    },
    dh: function () {
        return I;
    },
    g7: function () {
        return p;
    }
});
var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(544891),
    s = n(570140),
    l = n(911969),
    u = n(314897),
    c = n(709054),
    d = n(174212),
    _ = n(895924),
    E = n(981631);
function f(e) {
    let { channelId: t, command: n, section: r, location: i, initialValues: o, triggerSection: l, queryLength: u, sectionName: c, query: d, searchResultsPosition: E, source: f, commandOrigin: h } = e;
    null != n && a()(n.inputType !== _.iw.PLACEHOLDER, 'command should not be placeholder'),
        s.Z.dispatch({
            type: 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND',
            channelId: t,
            command: n,
            section: r,
            initialValues: o,
            location: i,
            triggerSection: l,
            queryLength: u,
            sectionName: c,
            query: d,
            searchResultsPosition: E,
            source: f,
            commandOrigin: h
        });
}
function h(e, t) {
    s.Z.dispatch({
        type: 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND',
        channelId: e,
        commandId: t
    });
}
function p(e, t) {
    s.Z.dispatch({
        type: 'APPLICATION_COMMAND_UPDATE_OPTIONS',
        channelId: e,
        changedOptionStates: t
    });
}
function m(e, t) {
    p(
        e,
        Object.fromEntries(
            Object.entries(t).map((e) => {
                let [t, n] = e;
                return [t, { lastValidationResult: n }];
            })
        )
    );
}
function I(e, t, n, r) {
    return o.tn.put({
        body: { permissions: r },
        url: E.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
    });
}
function T(e, t, n) {
    var r;
    a()(null != t.autocomplete, 'Missing autocomplete context');
    let { query: i, name: _ } = t.autocomplete,
        f = c.default.fromTimestamp(Date.now());
    if (
        (s.Z.dispatch({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST',
            nonce: f,
            channelId: t.channel.id,
            query: i,
            name: _
        }),
        null == d.Z.getAutocompleteChoices(t.channel.id, _, i))
    )
        o.tn
            .post({
                url: E.ANM.INTERACTIONS,
                body: {
                    type: l.B8.APPLICATION_COMMAND_AUTOCOMPLETE,
                    application_id: e.applicationId,
                    guild_id: null === (r = t.guild) || void 0 === r ? void 0 : r.id,
                    channel_id: t.channel.id,
                    session_id: u.default.getSessionId(),
                    data: n,
                    nonce: f
                },
                timeout: 3000
            })
            .catch(() => {
                s.Z.dispatch({
                    type: 'INTERACTION_FAILURE',
                    nonce: f
                });
            });
}
