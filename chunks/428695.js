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
let m = (0, o.debounce)(c.ZP.trackWithMetadata, 500);
t.Z = function (e) {
    let { guild: t, title: n, message: r, image: o, type: f, imageStyles: g, imageMarginX: C, imageMarginTop: _, trackingSource: v, undismissable: x, onDismissed: I, onClick: b, cta: S, ctaColor: E, centerText: N, className: Z } = e;
    l.useEffect(() => {
        m(d.rMx.CHANNEL_NOTICE_VIEWED, {
            notice_type: f,
            guild_id: t.id
        });
    }, [t.id, f]);
    let y = null;
    'function' == typeof S
        ? (y = S())
        : null != S &&
          (y = (0, i.jsx)(s.Button, {
              className: p.button,
              size: s.Button.Sizes.SMALL,
              onClick: () => {
                  null != f &&
                      u.default.track(d.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                          source: v,
                          guild_id: t.id,
                          notice_type: f
                      }),
                      null == b || b();
              },
              fullWidth: !0,
              color: E,
              children: S
          }));
    let T = null;
    'function' == typeof n
        ? (T = n())
        : null != n &&
          (T = (0, i.jsx)(s.Text, {
              variant: 'text-md/medium',
              color: 'header-primary',
              className: a()(p.title, { [p.noImageTitle]: null == o }, { [p.center]: N }),
              children: n
          }));
    let A = null;
    'function' == typeof r
        ? (A = r())
        : null != r &&
          (A = (0, i.jsx)(s.Text, {
              className: a()({ [p.center]: N }),
              variant: 'text-sm/normal',
              color: 'text-muted',
              children: r
          }));
    let j = null != C ? ''.concat(C, 'px') : '16px';
    return (0, i.jsxs)('div', {
        className: a()(p.container, Z),
        children: [
            !0 === x
                ? null
                : (0, i.jsx)(s.Clickable, {
                      onClick: () => {
                          c.ZP.trackWithMetadata(d.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: f }), null == I || I();
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
                        marginLeft: j,
                        marginRight: j
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
                children: [T, A, y]
            })
        ]
    });
};
