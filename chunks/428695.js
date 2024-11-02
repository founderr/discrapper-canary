var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(392711),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(981631),
    h = n(388032),
    p = n(599293);
let f = (0, o.debounce)(c.ZP.trackWithMetadata, 500);
t.Z = function (e) {
    let { guild: t, title: n, message: r, image: o, type: m, imageStyles: g, imageMarginX: C, imageMarginTop: _, trackingSource: x, undismissable: v, onDismissed: I, onClick: b, cta: N, ctaColor: E, centerText: S, className: Z } = e;
    l.useEffect(() => {
        f(d.rMx.CHANNEL_NOTICE_VIEWED, {
            notice_type: m,
            guild_id: t.id
        });
    }, [t.id, m]);
    let y = null;
    'function' == typeof N
        ? (y = N())
        : null != N &&
          (y = (0, i.jsx)(s.Button, {
              className: p.button,
              size: s.Button.Sizes.SMALL,
              onClick: () => {
                  null != m &&
                      u.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                          source: x,
                          guild_id: t.id,
                          notice_type: m
                      }),
                      null == b || b();
              },
              fullWidth: !0,
              color: E,
              children: N
          }));
    let T = null;
    'function' == typeof n
        ? (T = n())
        : null != n &&
          (T = (0, i.jsx)(s.Text, {
              variant: 'text-md/medium',
              color: 'header-primary',
              className: a()(p.title, { [p.noImageTitle]: null == o }, { [p.center]: S }),
              children: n
          }));
    let j = null;
    'function' == typeof r
        ? (j = r())
        : null != r &&
          (j = (0, i.jsx)(s.Text, {
              className: a()({ [p.center]: S }),
              variant: 'text-sm/normal',
              color: 'text-muted',
              children: r
          }));
    let A = null != C ? ''.concat(C, 'px') : '16px';
    return (0, i.jsxs)('div', {
        className: a()(p.container, Z),
        children: [
            !0 === v
                ? null
                : (0, i.jsx)(s.Clickable, {
                      onClick: () => {
                          c.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: m }), null == I || I();
                      },
                      className: p.close,
                      'aria-label': h.intl.string(h.t.WAI6xs),
                      children: (0, i.jsx)(s.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: p.closeIcon
                      })
                  }),
            null != o &&
                (0, i.jsx)('div', {
                    className: p.imageContainer,
                    style: {
                        marginTop: ''.concat(_, 'px'),
                        marginLeft: A,
                        marginRight: A
                    },
                    children: (0, i.jsx)('img', {
                        className: p.image,
                        style: g,
                        src: o,
                        alt: ''
                    })
                }),
            (0, i.jsxs)('div', {
                className: p.message,
                children: [T, j, y]
            })
        ]
    });
};
