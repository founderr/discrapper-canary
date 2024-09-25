var r = n(47120);
var i = n(411104);
var a = n(464847),
    o = n(289182),
    s = n(358085),
    l = n(998502);
function u() {
    var e, t, n, r, i, a;
    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    s.isPlatformEmbedded &&
        l.ZP.updateCrashReporter({
            user_id: null !== (e = o.id) && void 0 !== e ? e : '',
            username: null !== (t = o.username) && void 0 !== t ? t : '',
            email: null !== (n = o.email) && void 0 !== n ? n : '',
            sentry: {
                user: {
                    id: null !== (r = o.id) && void 0 !== r ? r : '',
                    username: null !== (i = o.username) && void 0 !== i ? i : '',
                    email: null !== (a = o.email) && void 0 !== a ? a : ''
                }
            }
        });
}
t.Z = {
    setUser(e, t, n, r) {
        var i;
        let a = {
            id: e,
            username: t,
            email: n,
            staff: r
        };
        null === (i = window.DiscordSentry) || void 0 === i || i.getCurrentScope().setUser(a), u(a);
    },
    clearUser() {
        var e;
        null === (e = window.DiscordSentry) || void 0 === e || e.getCurrentScope().setUser(null), u();
    },
    setTags(e) {
        var t;
        null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setTags(e);
    },
    setExtra(e) {
        var t;
        null === (t = window.DiscordSentry) || void 0 === t || t.getCurrentScope().setExtras(e);
    },
    captureException(e, t) {
        var n;
        let r = (0, o.v)(t);
        null === (n = window.DiscordSentry) ||
            void 0 === n ||
            n.withScope((t) => {
                var n;
                null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureException(e);
            });
    },
    captureCrash(e, t) {
        var n;
        let r;
        let i = (0, o.v)(t);
        return (
            null === (n = window.DiscordSentry) ||
                void 0 === n ||
                n.withScope((t) => {
                    var n;
                    t.setExtras(i.extra),
                        t.setTag('crash', 'true'),
                        t.setLevel('fatal'),
                        t.addEventProcessor((e) => {
                            var t, n;
                            let r = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
                            return (
                                null != r &&
                                    (r.mechanism = {
                                        ...r.mechanism,
                                        handled: !1
                                    }),
                                e
                            );
                        }),
                        (r = null === (n = window.DiscordSentry) || void 0 === n ? void 0 : n.captureException(e));
                }),
            r
        );
    },
    captureMessage(e, t) {
        var n;
        let r = (0, o.v)(t);
        null === (n = window.DiscordSentry) ||
            void 0 === n ||
            n.withScope((t) => {
                var n;
                null != r.tags && t.setTags(r.tags), t.setExtras(r.extra), null === (n = window.DiscordSentry) || void 0 === n || n.captureMessage(e);
            });
    },
    addBreadcrumb(e) {
        (0, a.Z)(e);
    },
    profiledRootComponent: (e) => e,
    crash() {
        throw Error('crash');
    }
};
