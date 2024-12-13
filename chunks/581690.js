n.d(t, {
    c: function () {
        return h;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    o = n(481060),
    i = n(198993),
    c = n(981631),
    l = n(388032),
    s = n(459881);
let d = n(412998),
    u = n(515695),
    f = ''.concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split('//')[1]).concat(c.Z5c.ACTIVATE),
    x = ''.concat(location.protocol, '//').concat(f);
function p(e) {
    let { text: t = '' } = e,
        [n, c] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = u), (e.onload = () => c(!0)), (e.onerror = () => c(!0));
        }, [u]),
        (0, a.jsx)(a.Fragment, {
            children:
                '' !== t && n
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(i.ZP, {
                                  size: 288,
                                  text: t
                              }),
                              (0, a.jsx)('div', {
                                  className: s.qrcodeOverlay,
                                  children: (0, a.jsx)('img', {
                                      src: u,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, a.jsx)('div', {
                          className: s.qrcodeSpinner,
                          children: (0, a.jsx)(o.Spinner, { type: o.Spinner.Type.WANDERING_CUBES })
                      })
        })
    );
}
let h = (e) => {
    var t, n;
    let { code: r } = e;
    if (null == r || 0 === r.length) return null;
    return (0, a.jsxs)('div', {
        className: s.panel,
        children: [
            (0, a.jsxs)('div', {
                className: s.qrcodeContent,
                children: [
                    (0, a.jsx)('div', {
                        className: s.qrcodeCard,
                        children: (0, a.jsx)(p, { text: ((n = r), ''.concat(x, '?user_code=').concat(encodeURIComponent(n))) })
                    }),
                    (0, a.jsxs)('div', {
                        className: s.qrcodeText,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                className: s.qrcodeTextHeading,
                                children: l.intl.string(l.t.llDCiY)
                            }),
                            (0, a.jsx)(o.Heading, {
                                variant: 'heading-xxl/normal',
                                color: 'header-secondary',
                                children: l.intl.string(l.t.JfHzXF)
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: s.dividerContent,
                children: [
                    (0, a.jsx)('div', { className: s.divider }),
                    (0, a.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: s.dividerText,
                        children: l.intl.string(l.t.arEHn5)
                    }),
                    (0, a.jsx)('div', { className: s.divider })
                ]
            }),
            (0, a.jsxs)('div', {
                className: s.fallbackContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: s.fallbackContentTextGroup,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                className: s.fallbackContentHeading,
                                children: l.intl.string(l.t.Eu8rJy)
                            }),
                            (0, a.jsx)(o.Heading, {
                                variant: 'heading-xxl/normal',
                                color: 'header-secondary',
                                children: l.intl.string(l.t.BkEMJy)
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: s.fallbackContentAction,
                        children: [
                            (0, a.jsx)(o.Heading, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                className: s.fallbackContentHeading,
                                children: f
                            }),
                            (0, a.jsxs)('div', {
                                className: s.fallbackContentTextGroup,
                                children: [
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/normal',
                                        color: 'header-secondary',
                                        children: l.intl.string(l.t.RyDxBQ)
                                    }),
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/bold',
                                        color: 'header-primary',
                                        className: s.fallbackContentCode,
                                        children: null === (t = r.match(/.{1,4}/g)) || void 0 === t ? void 0 : t.join(' ')
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('img', {
                className: s.wumpus,
                src: d,
                alt: ''
            })
        ]
    });
};
