n.d(t, {
    g: function () {
        return h;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(112456),
    l = n.n(o),
    u = n(481060),
    c = n(403182),
    d = n(388032),
    f = n(998579);
let _ = (e) => {
        let { filename: t } = e,
            i = (0, c.uV)(t),
            a = n(148660)('./icon-file-'.concat(i, '.svg'));
        return (0, r.jsx)('img', {
            className: f.icon,
            src: a,
            alt: d.intl.formatToPlainString(d.t.g6KdFh, { fileType: i }),
            title: i
        });
    },
    h = (e) => {
        let { className: t, filename: n, size: i, progress: a, onCancelUpload: o, onClick: c, onContextMenu: h } = e,
            p = 100 === a,
            m = !p && i > 0;
        return (0, r.jsxs)('div', {
            className: s()(f.attachment, t),
            children: [
                (0, r.jsx)(_, { filename: n }),
                (0, r.jsxs)('div', {
                    className: f.attachmentInner,
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.filenameWrapper,
                            children: [
                                (0, r.jsx)(u.Clickable, {
                                    className: f.filename,
                                    onClick: c,
                                    onContextMenu: h,
                                    children: n
                                }),
                                m
                                    ? (0, r.jsx)('div', {
                                          className: f.size,
                                          children: '\u2014 '.concat(l().filesize(i))
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: f.progressContainer,
                            children: p
                                ? d.intl.string(d.t.jfKTen)
                                : (0, r.jsx)(u.Progress, {
                                      className: f.progress,
                                      percent: a
                                  })
                        })
                    ]
                }),
                p
                    ? null
                    : (0, r.jsx)(u.Clickable, {
                          onClick: o,
                          children: (0, r.jsx)(u.XSmallIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.cancelButton
                          })
                      })
            ]
        });
    };
t.Z = (e) => {
    let { className: t, url: n, fileName: a, fileSize: o, onClick: c, onContextMenu: d, renderAdjacentContent: h } = e;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(f.attachment, f.newMosaicStyle, t),
                children: [
                    (0, r.jsx)(_, { filename: a }),
                    (0, r.jsxs)('div', {
                        className: f.attachmentInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: f.filenameLinkWrapper,
                                children: (0, r.jsx)(u.Anchor, {
                                    className: f.fileNameLink,
                                    href: n,
                                    onClick: c,
                                    onContextMenu: d,
                                    children: a
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: f.metadata,
                                children: l().filesize(o)
                            })
                        ]
                    })
                ]
            }),
            null != h && h()
        ]
    });
};
