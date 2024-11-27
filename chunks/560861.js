n.d(t, {
    Z: function () {
        return _;
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
    m = n(133634),
    f = n(324085),
    g = n(921944),
    C = n(388032),
    x = n(140343);
function _(e) {
    let { channel: t } = e,
        r = (0, s.e7)([p.default], () => p.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [a, d] = (0, l.useState)(!1),
        [h, C] = (0, l.useState)(!1),
        x = (0, f.bK)(),
        [_, I] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        t.isHDStreamSplashed && I(!0);
    }, []),
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
    let E = () => {
        d(!1);
    };
    (0, f.J)(t, () => {
        if (x) {
            C(!0), E();
            return;
        }
        d(!0);
        let e = setTimeout(() => {
            C(!0);
        }, 25000);
        return () => clearTimeout(e);
    });
    let b = _ ? [o.z.HD_STREAMING_POTION_BANNER] : [],
        [N, S] = (0, u.US)(b);
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  a &&
                      (0, i.jsx)(v, {
                          buyer: r,
                          onEnd: E
                      }),
                  (h || N === o.z.HD_STREAMING_POTION_BANNER) &&
                      (0, i.jsx)(m.Z, {
                          channel: t,
                          buyer: r,
                          streaming: !0,
                          onClose: () => {
                              C(!1), _ && S(g.L.DISMISS);
                          }
                      })
              ]
          });
}
function v(e) {
    let { onEnd: t, buyer: n } = e,
        r = (0, l.useRef)(null),
        s = (0, l.useRef)(null),
        [o, u] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        let e = r.current;
        if (null == e) return;
        let t = () => {
            e.currentTime >= 23 && !o && u(!0);
        };
        return (
            e.addEventListener('timeupdate', t),
            () => {
                e.removeEventListener('timeupdate', t);
            }
        );
    });
    let [p, m] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        if (null != s.current) m(s.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: f, eventHandlers: g } = (0, h.Z)({
        user: n,
        size: c.AvatarSizes.SIZE_32,
        animateOnHover: !0
    });
    return (0, i.jsxs)('div', {
        className: x.trigger,
        children: [
            (0, i.jsx)(d.Z, {
                ref: r,
                className: x.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, i.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, i.jsxs)('div', {
                ref: s,
                className: a()(x.content, { [x.masked]: o }),
                children: [
                    (0, i.jsx)(c.Avatar, {
                        src: f,
                        'aria-label': n.username,
                        size: c.AvatarSizes.SIZE_32,
                        ...g
                    }),
                    (0, i.jsxs)('div', {
                        className: x.text,
                        children: [
                            !p &&
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: C.intl.string(C.t['i/nliI'])
                                }),
                            (0, i.jsx)(c.Text, {
                                className: x.premium,
                                variant: 'text-sm/normal',
                                children: C.intl.string(C.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
