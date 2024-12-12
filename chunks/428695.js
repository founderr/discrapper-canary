var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(481060),
    c = n(367907),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    m = n(173549);
let p = (0, o.debounce)(c.ZP.trackWithMetadata, 500);
t.Z = function (e) {
    let { guild: t, title: n, message: l, image: o, type: g, imageStyles: f, imageMarginX: _, imageMarginTop: E, trackingSource: I, undismissable: C, onDismissed: v, onClick: S, cta: N, ctaColor: T, centerText: b, className: A } = e;
    r.useEffect(() => {
        p(u.rMx.CHANNEL_NOTICE_VIEWED, {
            notice_type: g,
            guild_id: t.id
        });
    }, [t.id, g]);
    let x = null;
    'function' == typeof N
        ? (x = N())
        : null != N &&
          (x = (0, i.jsx)(s.Button, {
              className: m.button,
              size: s.Button.Sizes.SMALL,
              onClick: () => {
                  null != g &&
                      d.default.track(u.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                          source: I,
                          guild_id: t.id,
                          notice_type: g
                      }),
                      null == S || S();
              },
              fullWidth: !0,
              color: T,
              children: N
          }));
    let Z = null;
    'function' == typeof n
        ? (Z = n())
        : null != n &&
          (Z = (0, i.jsx)(s.Text, {
              variant: 'text-md/medium',
              color: 'header-primary',
              className: a()(m.title, { [m.noImageTitle]: null == o }, { [m.center]: b }),
              children: n
          }));
    let L = null;
    'function' == typeof l
        ? (L = l())
        : null != l &&
          (L = (0, i.jsx)(s.Text, {
              className: a()({ [m.center]: b }),
              variant: 'text-sm/normal',
              color: 'text-muted',
              children: l
          }));
    let P = null != _ ? ''.concat(_, 'px') : '16px';
    return (0, i.jsxs)('div', {
        className: a()(m.container, A),
        children: [
            !0 === C
                ? null
                : (0, i.jsx)(s.Clickable, {
                      onClick: () => {
                          c.ZP.trackWithMetadata(u.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: g }), null == v || v();
                      },
                      className: m.close,
                      'aria-label': h.intl.string(h.t.WAI6xs),
                      children: (0, i.jsx)(s.XSmallIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: m.closeIcon
                      })
                  }),
            null != o &&
                (0, i.jsx)('div', {
                    className: m.imageContainer,
                    style: {
                        marginTop: ''.concat(E, 'px'),
                        marginLeft: P,
                        marginRight: P
                    },
                    children: (0, i.jsx)('img', {
                        className: m.image,
                        style: f,
                        src: o,
                        alt: ''
                    })
                }),
            (0, i.jsxs)('div', {
                className: m.message,
                children: [Z, L, x]
            })
        ]
    });
};
