n.d(t, {
    $: function () {
        return s;
    }
});
var r = n(381129),
    i = n(981631),
    a = n(388032);
let s = [
    {
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let i = r.Z.extractEveryoneRole(e, t);
            if (null == i || !r.Z.shouldShowEveryoneGuard(i, t)) return !1;
            let s = r.Z.everyoneMemberCount(i, t),
                o = Math.pow(10, Math.floor(Math.log10(s))),
                l = a.t['47E5R0'];
            return (
                t.isForumPost() ? (l = a.t.sYW2c3) : t.isThread() && (l = a.t['2YaiQ0']),
                {
                    body: a.intl.formatToPlainString(l, {
                        role: i,
                        count: (Math.trunc(s / o) * o).toLocaleString()
                    }),
                    footer: a.intl.string(a.t.mVyrtr)
                }
            );
        },
        analyticsType: '@Everyone Warning',
        animation: {
            dark: () => n.e('83323').then(n.t.bind(n, 510465, 19)),
            light: () => n.e('36052').then(n.t.bind(n, 570227, 19))
        }
    },
    {
        check: (e) => !!i.Jn9.test(e) && { body: a.intl.string(a.t.sTwS1d) },
        analyticsType: 'API Token Warning'
    }
];
