r.d(n, {
    $: function () {
        return o;
    }
});
var i = r(381129),
    a = r(981631),
    s = r(388032);
let o = [
    {
        check(e, n, r) {
            if (!r || null == n.getGuildId()) return !1;
            let a = i.Z.extractEveryoneRole(e, n);
            if (null == a || !i.Z.shouldShowEveryoneGuard(a, n)) return !1;
            let o = i.Z.everyoneMemberCount(a, n),
                l = Math.pow(10, Math.floor(Math.log10(o))),
                u = s.t['47E5R0'];
            return (
                n.isForumPost() ? (u = s.t.sYW2c3) : n.isThread() && (u = s.t['2YaiQ0']),
                {
                    body: s.intl.formatToPlainString(u, {
                        role: a,
                        count: (Math.trunc(o / l) * l).toLocaleString()
                    }),
                    footer: s.intl.string(s.t.mVyrtr)
                }
            );
        },
        analyticsType: '@Everyone Warning',
        animation: {
            dark: () => r.e('83323').then(r.t.bind(r, 510465, 19)),
            light: () => r.e('36052').then(r.t.bind(r, 570227, 19))
        }
    },
    {
        check: (e) => !!a.Jn9.test(e) && { body: s.intl.string(s.t.sTwS1d) },
        analyticsType: 'API Token Warning'
    }
];
