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
    m = n(955843),
    f = n(133634),
    g = n(921944),
    C = n(388032),
    x = n(114031);
function _(e) {
    let { channel: t } = e,
        r = (0, s.e7)([p.default], () => p.default.getUser(t.hdStreamingBuyerId), [t.hdStreamingBuyerId]),
        [a, d] = (0, l.useState)(!1),
        [h, C] = (0, l.useState)(!1),
        [x, _] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        t.isHDStreamSplashed && _(!0);
    }, []),
        (0, m.Uu)(t),
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
    let I = () => {
        d(!1);
    };
    (0, m.J)(t, () => {
        if ((0, m.QC)()) {
            C(!0), I();
            return;
        }
        d(!0);
        let e = setTimeout(() => {
            C(!0);
        }, 25000);
        return () => clearTimeout(e);
    });
    let E = x ? [o.z.HD_STREAMING_POTION_BANNER] : [],
        [b, Z] = (0, u.US)(E);
    return null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(v, {
                      play: a,
                      buyer: r,
                      onEnd: I
                  }),
                  (0, i.jsx)(f.Z, {
                      channel: t,
                      buyer: r,
                      streaming: !0,
                      onClose: () => {
                          C(!1), x && Z(g.L.DISMISS);
                      },
                      render: h || b === o.z.HD_STREAMING_POTION_BANNER
                  })
              ]
          });
}
function v(e) {
    let { onEnd: t, buyer: n, play: r } = e,
        s = (0, l.useRef)(null),
        o = (0, l.useRef)(null),
        [u, p] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        let e = s.current;
        if (null == e) return;
        let t = () => {
            e.currentTime >= 23 && !u && p(!0);
        };
        return (
            e.addEventListener('timeupdate', t),
            () => {
                e.removeEventListener('timeupdate', t);
            }
        );
    });
    let [m, f] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        if (null != o.current) f(o.current.offsetWidth > 245);
    }, []);
    let { avatarSrc: g, eventHandlers: _ } = (0, h.Z)({
        user: n,
        size: c.AvatarSizes.SIZE_32,
        animateOnHover: !0
    });
    return r
        ? (0, i.jsxs)('div', {
              className: x.trigger,
              children: [
                  (0, i.jsx)(d.Z, {
                      ref: s,
                      className: x.video,
                      autoPlay: !0,
                      onEnded: t,
                      children: (0, i.jsx)('source', {
                          src: 'https://cdn.discordapp.com/assets/content/9f56bffb69fd37ec42b909d277c92d523a1c579075b9cb06880fc7cbc7f365f3.webm',
                          type: 'video/webm'
                      })
                  }),
                  (0, i.jsxs)('div', {
                      ref: o,
                      className: a()(x.content, { [x.masked]: u }),
                      children: [
                          (0, i.jsx)(c.Avatar, {
                              src: g,
                              'aria-label': n.username,
                              size: c.AvatarSizes.SIZE_32,
                              ..._
                          }),
                          (0, i.jsxs)('div', {
                              className: x.text,
                              children: [
                                  !m &&
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
          })
        : null;
}
