t.d(n, {
    Z: function () {
        return r;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(689938),
    s = t(57778);
function r(e) {
    let { imageSrc: n, header: t, description: r, secondaryInfo: c, mutualGuildCount: o, ctaLabel: d, onCtaClick: u, children: _ } = e,
        g = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)('div', {
                className: s.topWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: s.__invalid_imageContainer,
                        children: (0, a.jsx)('img', {
                            alt: '',
                            className: s.image,
                            src: n
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: s.content,
                        children: [
                            (0, a.jsxs)('div', {
                                className: s.header,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: s.info,
                                        children: [
                                            (0, a.jsx)(i.Heading, {
                                                className: s.name,
                                                variant: 'heading-md/semibold',
                                                children: t
                                            }),
                                            null != o
                                                ? o
                                                : (0, a.jsx)(a.Fragment, {
                                                      children: (0, a.jsxs)('div', {
                                                          className: s.details,
                                                          children: [
                                                              (0, a.jsx)(i.Text, {
                                                                  tag: 'span',
                                                                  color: 'header-secondary',
                                                                  variant: 'text-sm/medium',
                                                                  children: l.Z.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                                                              }),
                                                              null != c
                                                                  ? (0, a.jsxs)(a.Fragment, {
                                                                        children: [
                                                                            (0, a.jsx)(i.Text, {
                                                                                tag: 'span',
                                                                                color: 'interactive-muted',
                                                                                variant: 'text-sm/normal',
                                                                                className: s.bullet,
                                                                                children: '\u2022'
                                                                            }),
                                                                            (0, a.jsx)(i.Text, {
                                                                                tag: 'span',
                                                                                color: 'header-secondary',
                                                                                variant: 'text-sm/medium',
                                                                                children: c
                                                                            })
                                                                        ]
                                                                    })
                                                                  : null
                                                          ]
                                                      })
                                                  })
                                        ]
                                    }),
                                    null != u && null != d
                                        ? (0, a.jsx)(i.Button, {
                                              size: i.Button.Sizes.SMALL,
                                              onClick: u,
                                              className: s.__invalid_button,
                                              children: d
                                          })
                                        : null
                                ]
                            }),
                            null != r
                                ? (0, a.jsx)(i.Text, {
                                      className: s.listingDescription,
                                      variant: 'text-md/normal',
                                      children: r
                                  })
                                : null,
                            (0, a.jsx)('div', {
                                className: s.children,
                                children: _
                            })
                        ]
                    })
                ]
            })
        });
    return (0, a.jsx)(i.FocusRing, {
        children: (0, a.jsx)('div', {
            className: s.listing,
            children: g
        })
    });
}
