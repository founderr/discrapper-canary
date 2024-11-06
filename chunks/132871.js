n.r(t),
    n.d(t, {
        ApplicationDirectoryEntrypointNames: function () {
            return s;
        },
        ApplicationDirectoryViews: function () {
            return a;
        },
        getCurrentView: function () {
            return m;
        },
        getPreviousView: function () {
            return p;
        },
        resetApplicationDirectoryHistory: function () {
            return v;
        },
        setEntrypoint: function () {
            return g;
        },
        setGuildId: function () {
            return E;
        },
        setTrackedOpenedFromExternalEntrypoint: function () {
            return I;
        },
        useApplicationDirectoryHistory: function () {
            return h;
        }
    });
var r,
    i,
    a,
    s,
    o = n(512969),
    l = n(903797),
    u = n(731965),
    c = n(703656),
    d = n(264043),
    f = n(981631);
((r = a || (a = {})).HOME = 'home'), (r.SEARCH = 'search'), (r.APPLICATION = 'application'), ((i = s || (s = {})).EXTERNAL = 'External'), (i.KEYBOARD_SHORTCUT = 'Keyboard Shortcut'), (i.APPLICATION_DIRECTORY_URL = 'Application Directory URL'), (i.APPLICATION_DIRECTORY_PROFILE_EMBED = 'Application Directory Profile Embed'), (i.APPLICATION_DIRECTORY_UPSELL_MODAL = 'Application Directory Upsell Modal'), (i.GUILD_HEADER_POPOUT = 'Guild Header Popout'), (i.GUILD_SETTINGS = 'Guild Settings'), (i.GUILD_INTEGRATION_SETTINGS = 'Guild Integration Settings'), (i.GUILD_CONTEXT_MENU = 'Guild Context Menu'), (i.OAUTH2_EMBED = 'OAuth2 Embed');
let _ = (0, l.Z)(() => ({
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    })),
    h = _;
function p() {
    let {
        location: { state: e }
    } = (0, c.s1)();
    return null == e ? void 0 : e.previousView;
}
function m() {
    var e, t;
    let {
            location: { pathname: n }
        } = (0, c.s1)(),
        r = (0, o.LX)(n, {
            path: f.Z5c.APPLICATION_DIRECTORY,
            exact: !0
        }),
        i = (0, o.LX)(n, {
            path: f.Z5c.APPLICATION_DIRECTORY_SEARCH,
            exact: !0
        }),
        a = (0, o.LX)(n, {
            path: [f.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'), f.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section')],
            exact: !0
        }),
        { applicationId: s, section: l } = null !== (e = null == a ? void 0 : a.params) && void 0 !== e ? e : {};
    if (null != r) return { type: 'home' };
    if (null != i) return { type: 'search' };
    if (null != a && null != s) {
        let e = null === (t = d.Z.getApplication(s)) || void 0 === t ? void 0 : t.name;
        return {
            type: 'application',
            applicationId: s,
            applicationName: e,
            section: l
        };
    }
}
function g(e) {
    (0, u.j)(() => _.setState({ entrypoint: e }));
}
function E(e) {
    (0, u.j)(() => _.setState({ guildId: e }));
}
function v() {
    (0, u.j)(() => {
        _.setState({
            entrypoint: null,
            guildId: null
        });
    });
}
function I(e) {
    (0, u.j)(() => _.setState({ trackedOpenedFromExternalEntrypoint: e }));
}
