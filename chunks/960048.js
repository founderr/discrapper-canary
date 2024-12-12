var i = r(47120);
var a = r(411104);
var s = r(464847),
    o = r(289182),
    l = r(358085),
    u = r(998502);
function c() {
    var e, n, r, i, a, s;
    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    l.isPlatformEmbedded &&
        u.ZP.updateCrashReporter({
            user_id: null !== (e = o.id) && void 0 !== e ? e : '',
            username: null !== (n = o.username) && void 0 !== n ? n : '',
            email: null !== (r = o.email) && void 0 !== r ? r : '',
            sentry: {
                user: {
                    id: null !== (i = o.id) && void 0 !== i ? i : '',
                    username: null !== (a = o.username) && void 0 !== a ? a : '',
                    email: null !== (s = o.email) && void 0 !== s ? s : ''
                }
            }
        });
}
n.Z = {
    setUser(e, n, r, i) {
        var a;
        let s = {
            id: e,
            username: n,
            email: r,
            staff: i
        };
        null === (a = window.DiscordSentry) || void 0 === a || a.getCurrentScope().setUser(s), c(s);
    },
    clearUser() {
        var e;
        null === (e = window.DiscordSentry) || void 0 === e || e.getCurrentScope().setUser(null), c();
    },
    setTags(e) {
        var n;
        null === (n = window.DiscordSentry) || void 0 === n || n.getCurrentScope().setTags(e);
    },
    setExtra(e) {
        var n;
        null === (n = window.DiscordSentry) || void 0 === n || n.getCurrentScope().setExtras(e);
    },
    captureException(e, n) {
        var r;
        let i = (0, o.v)(n);
        null === (r = window.DiscordSentry) ||
            void 0 === r ||
            r.withScope((n) => {
                var r;
                null != i.tags && n.setTags(i.tags), n.setExtras(i.extra), null === (r = window.DiscordSentry) || void 0 === r || r.captureException(e);
            });
    },
    captureCrash(e, n) {
        var r;
        let i;
        let a = (0, o.v)(n);
        return (
            null === (r = window.DiscordSentry) ||
                void 0 === r ||
                r.withScope((n) => {
                    var r;
                    n.setExtras(a.extra),
                        n.setTag('crash', 'true'),
                        n.setLevel('fatal'),
                        n.addEventProcessor((e) => {
                            var n, r;
                            let i = null === (r = e.exception) || void 0 === r ? void 0 : null === (n = r.values) || void 0 === n ? void 0 : n[0];
                            return (
                                null != i &&
                                    (i.mechanism = {
                                        ...i.mechanism,
                                        handled: !1
                                    }),
                                e
                            );
                        }),
                        (i = null === (r = window.DiscordSentry) || void 0 === r ? void 0 : r.captureException(e));
                }),
            i
        );
    },
    captureMessage(e, n) {
        var r;
        let i = (0, o.v)(n);
        null === (r = window.DiscordSentry) ||
            void 0 === r ||
            r.withScope((n) => {
                var r;
                null != i.tags && n.setTags(i.tags), n.setExtras(i.extra), null === (r = window.DiscordSentry) || void 0 === r || r.captureMessage(e);
            });
    },
    addBreadcrumb(e) {
        (0, s.Z)(e);
    },
    profiledRootComponent: (e) => e,
    crash() {
        throw Error('crash');
    }
};
