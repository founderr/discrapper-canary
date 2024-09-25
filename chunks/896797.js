var s,
    r = n(442837),
    i = n(433517),
    a = n(570140),
    o = n(981631);
function l(e, t, n) {
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
let c = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    },
    u = c,
    d = 'LAST_VIEWED_PATH';
class _ extends (s = r.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        u = null != e ? e : c;
    }
    get defaultRoute() {
        return o.Z5c.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : o.Z5c.ME;
    }
    get fallbackRoute() {
        return o.Z5c.ME;
    }
    getState() {
        return u;
    }
}
l(_, 'displayName', 'DefaultRouteStore'),
    l(_, 'persistKey', 'DefaultRouteStore'),
    l(_, 'migrations', [
        () => {
            let e = i.K.get(d, null);
            return i.K.remove(d), { lastViewedPath: e };
        }
    ]),
    (t.Z = new _(a.Z, {
        SAVE_LAST_ROUTE: function (e) {
            let { path: t } = e;
            return (u.lastViewedPath = t), !0;
        },
        SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: t } = e;
            return (u.lastViewedNonVoicePath = t), !0;
        }
    }));
