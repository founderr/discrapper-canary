n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(763472),
    a = n(49012),
    l = n(591759),
    r = n(915863);
function o(e) {
    let { activity: t, color: n, user: o, look: c, onAction: u } = e;
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let i = await (0, s.sd)(e, t);
            if (i.button_urls.length <= n) return;
            let r = i.button_urls[n];
            if ('string' != typeof r) return;
            let o = l.Z.safeParseWithQuery(r);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, a.q)({
                href: l.Z.format(o),
                trusted: !1
            });
        } catch (e) {}
    }
    return (0, i.jsx)(i.Fragment, {
        children: t.buttons.map((e, s) =>
            (0, i.jsx)(
                r.Z,
                {
                    color: n,
                    look: c,
                    onClick: () => {
                        null == u || u(), d(t, o.id, s);
                    },
                    children: e
                },
                'customButton-'.concat(s)
            )
        )
    });
}
