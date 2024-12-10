n.d(t, {
    p: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(112456),
    o = n.n(s),
    l = n(481060),
    u = n(403182),
    c = n(388032),
    d = n(914356);
let f = (e) => {
        let { filename: t } = e,
            i = (0, u.uV)(t),
            a = n(148660)('./icon-file-'.concat(i, '.svg'));
        return (0, r.jsx)('img', {
            className: d.icon,
            src: a,
            alt: c.intl.formatToPlainString(c.t.g6KdFh, { fileType: i }),
            title: i
        });
    },
    _ = (e) => {
        let { filename: t, size: n, progress: i, onCancelUpload: a, onClick: s, onContextMenu: u } = e,
            _ = 100 === i,
            p = !_ && n > 0;
        return (0, r.jsx)('div', {
            className: d.fileWrapper,
            children: (0, r.jsxs)('div', {
                className: d.file,
                children: [
                    (0, r.jsx)(f, { filename: t }),
                    (0, r.jsxs)('div', {
                        className: d.fileInner,
                        children: [
                            (0, r.jsxs)('div', {
                                className: d.filenameWrapper,
                                children: [
                                    (0, r.jsx)(l.Clickable, {
                                        className: d.filename,
                                        onClick: s,
                                        onContextMenu: u,
                                        children: t
                                    }),
                                    p
                                        ? (0, r.jsx)('div', {
                                              className: d.size,
                                              children: '\u2014 '.concat(o().filesize(n))
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: d.progressContainer,
                                children: _
                                    ? c.intl.string(c.t.jfKTen)
                                    : (0, r.jsx)(l.Progress, {
                                          className: d.progress,
                                          percent: i
                                      })
                            })
                        ]
                    }),
                    _
                        ? null
                        : (0, r.jsx)(l.Clickable, {
                              onClick: a,
                              children: (0, r.jsx)(l.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: d.cancelButton
                              })
                          })
                ]
            })
        });
    };
t.Z = (e) => {
    let { className: t, url: n, fileName: i, fileSize: s, onClick: u, onContextMenu: c, renderAdjacentContent: _ } = e;
    return (0, r.jsxs)('div', {
        className: a()(d.fileWrapper, t),
        children: [
            (0, r.jsxs)('div', {
                className: d.file,
                children: [
                    (0, r.jsx)(f, { filename: i }),
                    (0, r.jsxs)('div', {
                        className: d.fileInner,
                        children: [
                            (0, r.jsx)('div', {
                                className: d.filenameLinkWrapper,
                                children: (0, r.jsx)(l.Anchor, {
                                    className: d.fileNameLink,
                                    href: n,
                                    onClick: u,
                                    onContextMenu: c,
                                    children: i
                                })
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: o().filesize(s)
                            })
                        ]
                    })
                ]
            }),
            null != _ && _()
        ]
    });
};
