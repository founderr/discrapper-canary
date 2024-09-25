n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(653041);
var s = n(442837),
    l = n(570140),
    u = n(973616),
    c = n(911955);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.FETCH_FAILED = 3)] = 'FETCH_FAILED');
})(r || (r = {}));
let _ = new Map(),
    E = new Map(),
    f = [],
    h = 0,
    p = [];
class m extends (i = s.ZP.Store) {
    getIntegrations(e) {
        var t;
        return null !== (t = _.get(e)) && void 0 !== t ? t : p;
    }
    getIntegration(e, t) {
        var n;
        return null === (n = _.get(e)) || void 0 === n ? void 0 : n.find((e) => e.application.id === t);
    }
    getAllIntegrations() {
        return _;
    }
    getIntegrationsFetchState(e) {
        var t;
        return null !== (t = E.get(e)) && void 0 !== t ? t : 0;
    }
    getApplicationsShelfFetchState() {
        return h;
    }
    getApplicationsShelf() {
        return f;
    }
}
function I(e) {
    return e.sort((e, t) => e.application.name.localeCompare(t.application.name));
}
d(m, 'displayName', 'PrivateChannelIntegrationStore');
let T = new m(l.Z, {
    LOGOUT() {
        _.clear();
    },
    CONNECTION_OPEN() {
        _.clear(), E.clear();
    },
    CHANNEL_SELECT(e) {
        let { channelId: t } = e;
        if (null == t || 3 !== E.get(t)) return !1;
        E.set(t, 0);
    },
    APPLICATIONS_SHELF_FETCH_START() {
        h = 1;
    },
    APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
        let { applications: t } = e;
        (f = t.map(u.Z.createFromServer).sort((e, t) => e.name.localeCompare(t.name))), (h = 2);
    },
    APPLICATIONS_SHELF_FETCH_FAIL() {
        h = 3;
    },
    FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
        let { channelId: t } = e;
        _.set(t, null), E.set(t, 1);
    },
    FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
        let { channelId: t, integrations: n } = e;
        _.set(t, I(n.map(c.F))), E.set(t, 2);
    },
    FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
        let { channelId: t } = e;
        E.set(t, 3);
    },
    PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
        let { integration: t } = e,
            n = _.get(t.channel_id);
        if (null == n) return !1;
        _.set(t.channel_id, I([...n, (0, c.F)(t)]));
    },
    PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
        let { integration: t } = e,
            n = _.get(t.channel_id);
        if (null == n) return !1;
        let r = (0, c.F)(t),
            i = n.findIndex((e) => e.application.id === r.application.id),
            a = [...n];
        -1 === i ? a.push(r) : (a[i] = r), _.set(r.channel_id, I(a));
    },
    PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
        let { channelId: t, applicationId: n } = e,
            r = _.get(t);
        if (null == r) return !1;
        _.set(
            t,
            r.filter((e) => e.application.id !== n)
        );
    },
    CHANNEL_DELETE(e) {
        let { channel: t } = e;
        return _.delete(t.id);
    }
});
t.Z = T;
