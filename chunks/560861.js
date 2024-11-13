n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(70097),
    c = n(518950),
    d = n(594174),
    u = n(335131),
    h = n(388032),
    p = n(114031);
function m(e) {
    let { channel: t } = e,
        n = (0, l.useRef)(!0),
        a = t.hdStreamingUntil,
        r = d.default.getUser(t.hdStreamingBuyerId),
        [s, o] = (0, l.useState)(!1);
    return ((0, l.useEffect)(() => {
        if (n.current) {
            n.current = !1;
            return;
        }
        null != a && new Date(a) > new Date() && o(!0);
    }, [a]),
    s && null != r)
        ? (0, i.jsx)(f, {
              buyer: r,
              onEnd: () => {
                  o(!1), (0, u.ag)();
              }
          })
        : null;
}
function f(e) {
    let { onEnd: t, buyer: n } = e,
        a = (0, l.useRef)(null),
        [d, u] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        let e = a.current;
        if (null == e) return;
        let t = () => {
            e.currentTime >= 23 && !d && u(!0);
        };
        return (
            e.addEventListener('timeupdate', t),
            () => {
                e.removeEventListener('timeupdate', t);
            }
        );
    });
    let { avatarSrc: m, eventHandlers: f } = (0, c.Z)({
        user: n,
        size: s.AvatarSizes.SIZE_32,
        animateOnHover: !0
    });
    return (0, i.jsxs)('div', {
        className: p.trigger,
        children: [
            (0, i.jsx)(o.Z, {
                ref: a,
                className: p.video,
                autoPlay: !0,
                onEnded: t,
                children: (0, i.jsx)('source', {
                    src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                    type: 'video/webm'
                })
            }),
            (0, i.jsxs)('div', {
                className: r()(p.content, { [p.masked]: d }),
                children: [
                    (0, i.jsx)(s.Avatar, {
                        src: m,
                        'aria-label': n.username,
                        size: s.AvatarSizes.SIZE_32,
                        ...f
                    }),
                    (0, i.jsxs)('div', {
                        className: p.text,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                children: h.intl.string(h.t['i/nliI'])
                            }),
                            (0, i.jsx)(s.Text, {
                                className: p.premium,
                                variant: 'text-sm/normal',
                                children: h.intl.string(h.t['Fh/mk5'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
