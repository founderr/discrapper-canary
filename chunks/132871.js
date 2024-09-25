n.r(t),
    n.d(t, {
        ApplicationDirectoryEntrypointNames: function () {
            return i;
        },
        ApplicationDirectoryViews: function () {
            return r;
        },
        getCurrentView: function () {
            return f;
        },
        getPreviousView: function () {
            return E;
        },
        resetApplicationDirectoryHistory: function () {
            return m;
        },
        setEntrypoint: function () {
            return h;
        },
        setGuildId: function () {
            return p;
        },
        setTrackedOpenedFromExternalEntrypoint: function () {
            return I;
        },
        useApplicationDirectoryHistory: function () {
            return _;
        }
    });
var r,
    i,
    a = n(266067),
    o = n(652874),
    s = n(731965),
    l = n(703656),
    u = n(264043),
    c = n(981631);
!(function (e) {
    (e.HOME = 'home'), (e.SEARCH = 'search'), (e.APPLICATION = 'application');
})(r || (r = {})),
    !(function (e) {
        (e.EXTERNAL = 'External'), (e.KEYBOARD_SHORTCUT = 'Keyboard Shortcut'), (e.APPLICATION_DIRECTORY_URL = 'Application Directory URL'), (e.APPLICATION_DIRECTORY_PROFILE_EMBED = 'Application Directory Profile Embed'), (e.APPLICATION_DIRECTORY_UPSELL_MODAL = 'Application Directory Upsell Modal'), (e.GUILD_HEADER_POPOUT = 'Guild Header Popout'), (e.GUILD_SETTINGS = 'Guild Settings'), (e.GUILD_INTEGRATION_SETTINGS = 'Guild Integration Settings'), (e.GUILD_CONTEXT_MENU = 'Guild Context Menu');
    })(i || (i = {}));
let d = (0, o.Z)(() => ({
        guildId: null,
        entrypoint: null,
        trackedOpenedFromExternalEntrypoint: !1
    })),
    _ = d;
function E() {
    let {
        location: { state: e }
    } = (0, l.s1)();
    return null == e ? void 0 : e.previousView;
}
function f() {
    var e, t;
    let {
            location: { pathname: n }
        } = (0, l.s1)(),
        r = (0, a.LX)(n, {
            path: c.Z5c.APPLICATION_DIRECTORY,
            exact: !0
        }),
        i = (0, a.LX)(n, {
            path: c.Z5c.APPLICATION_DIRECTORY_SEARCH,
            exact: !0
        }),
        o = (0, a.LX)(n, {
            path: [c.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'), c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section')],
            exact: !0
        }),
        { applicationId: s, section: d } = null !== (e = null == o ? void 0 : o.params) && void 0 !== e ? e : {};
    if (null != r) return { type: 'home' };
    if (null != i) return { type: 'search' };
    if (null != o && null != s) {
        let e = null === (t = u.Z.getApplication(s)) || void 0 === t ? void 0 : t.name;
        return {
            type: 'application',
            applicationId: s,
            applicationName: e,
            section: d
        };
    }
}
function h(e) {
    (0, s.j)(() => d.setState({ entrypoint: e }));
}
function p(e) {
    (0, s.j)(() => d.setState({ guildId: e }));
}
function m() {
    (0, s.j)(() => {
        d.setState({
            entrypoint: null,
            guildId: null
        });
    });
}
function I(e) {
    (0, s.j)(() => d.setState({ trackedOpenedFromExternalEntrypoint: e }));
}
