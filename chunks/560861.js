n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(704215),
    c = n(481060),
    d = n(70097),
    u = n(243778),
    h = n(518950),
    p = n(594174),
    m = n(997323),
    f = n(955843),
    g = n(388032),
    C = n(44229);
function x(e) {
    let { channel: t } = e,
        r = (0, s.e7)([p.default], () => p.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [a, d] = (0, l.useState)(!1);
    (0, f.Uu)(t),
        (function (e) {
            let t = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
                r = [];
            e.hdStreamingBuyerId === (null == t ? void 0 : t.id) && !e.isHDStreamSplashed && r.push(o.z.HD_STREAMING_POTION_MODAL_UPSELL);
            let [a, d] = (0, u.US)(r);
            (0, l.useEffect)(() => {
                if (a === o.z.HD_STREAMING_POTION_MODAL_UPSELL) {
                    var t;
                    (t = d),
                        (0, c.openModalLazy)(async () => {
                            let { default: l } = await n.e('88452').then(n.bind(n, 552394));
                            return (n) =>
                                (0, i.jsx)(l, {
                                    markAsDismissed: t,
                                    channel: e,
                                    ...n
                                });
                        });
                }
            }, [a, d, e]);
        })(t);
    let h = () => {
        d(!1), (0, m.ag)();
    };
    return ((0, f.J)(t, () => {
        if ((0, f.QC)()) {
            h();
            return;
        }
        d(!0);
    }),
    a && null != r)
        ? (0, i.jsx)(_, {
              buyer: r,
              onEnd: h
          })
        : null;
}
function _(e) {
    let { onEnd: t, buyer: n } = e,
        r = (0, l.useRef)(null),
        s = (0, l.useRef)(null),
        [o, u] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        let e = r.current;
        if (null == e) return;
        let n = () => {
            e.currentTime >= 23 && !o && u(!0);
        };
        e.addEventListener('timeupdate', n);
        let i = setInterval(() => {
            e.currentTime >= e.duration && t();
        }, 500);
        return () => {
            e.removeEventListener('timeupdate', n), clearInterval(i);
        };
    });
    let [p, m] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        if (null != s.current) m(s.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: f, eventHandlers: x } = (0, h.Z)({
        user: n,
        size: c.AvatarSizes.SIZE_32,
        animateOnHover: !0
    });
    return (0, i.jsxs)('div', {
        className: C.trigger,
        children: [
            (0, i.jsx)(d.Z, {
                ref: r,
                className: C.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, i.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, i.jsxs)('div', {
                ref: s,
                className: a()(C.content, { [C.masked]: o }),
                children: [
                    (0, i.jsx)(c.Avatar, {
                        src: f,
                        'aria-label': n.username,
                        size: c.AvatarSizes.SIZE_32,
                        ...x
                    }),
                    (0, i.jsxs)('div', {
                        className: C.text,
                        children: [
                            !p &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: g.intl.string(g.t['i/nliI'])
                                }),
                            (0, i.jsx)(c.Text, {
                                className: C.premium,
                                variant: 'text-sm/normal',
                                children: g.intl.string(g.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
