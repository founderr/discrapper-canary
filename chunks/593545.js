var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(608787),
    u = n(481060),
    c = n(858644),
    d = n(571989),
    _ = n(828061),
    E = n(259580),
    f = n(424218),
    h = n(689938),
    p = n(233454),
    m = n(112864);
function I(e) {
    var t;
    let n = 'utf-8',
        r = null !== (t = null == e ? void 0 : e.split('charset=').slice(-1)[0]) && void 0 !== t ? t : n;
    try {
        return new TextDecoder(r);
    } catch (t) {
        if ((null == e ? void 0 : e.startsWith('text')) || r.toLowerCase().includes('utf')) return new TextDecoder(n);
        throw t;
    }
}
function T(e, t) {
    let [n, r] = a.useState(!1),
        [i, o] = a.useState(null),
        [s, l] = a.useState(1);
    return (
        a.useEffect(() => {
            let n = 50000;
            (async function i() {
                try {
                    var i, a;
                    let s = await fetch(e, {
                            headers: {
                                Range: 'bytes=0-'.concat(n),
                                Accept: 'text/plain'
                            }
                        }),
                        u = I(t).decode(await s.arrayBuffer()),
                        c = null !== (i = s.headers.get('content-range')) && void 0 !== i ? i : '0',
                        d = null !== (a = s.headers.get('content-length')) && void 0 !== a ? a : '1',
                        _ = parseInt(c.split('/')[1]) - parseInt(d);
                    o(0 === _ ? u : u.slice(0, -1)), l(_), r(!1);
                } catch (e) {
                    l(0), r(!0);
                }
            })();
        }, [e, t]),
        {
            fileContents: i,
            bytesLeft: s,
            hadError: n
        }
    );
}
function g(e) {
    let { text: t, language: r } = e,
        a = () =>
            (0, i.jsx)('pre', {
                children: (0, i.jsx)('code', {
                    className: s()(m.scrollbarGhostHairline, p.codeView, 'hljs'),
                    children: t
                })
            });
    return (0, i.jsx)(l.GI, {
        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
        webpackId: 364964,
        render: (e) => {
            if (!e.hasLanguage(r)) return a();
            let n = e.highlight(r, t, !0);
            return null == n
                ? a()
                : (0, i.jsx)('pre', {
                      children: (0, i.jsx)('code', {
                          className: s()(m.scrollbarGhostHairline, p.codeView, 'hljs', n.language),
                          dangerouslySetInnerHTML: { __html: n.value }
                      })
                  });
        },
        renderFallback: () => a()
    });
}
function S(e) {
    let { expanded: t, setExpanded: n, isWholeFile: r, numLines: a } = e,
        o = (r ? h.Z.Messages.PREVIEW_NUM_LINES : h.Z.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({ lines: a });
    return (0, i.jsx)(u.Tooltip, {
        text: ''.concat(t ? h.Z.Messages.COLLAPSE : h.Z.Messages.EXPAND, ' (').concat(o, ')'),
        children: (e) =>
            (0, i.jsxs)(u.Clickable, {
                ...e,
                className: p.toggleExpandSection,
                onClick: () => {
                    n(!t);
                },
                children: [(0, i.jsx)(E.Z, { direction: t ? E.Z.Directions.UP : E.Z.Directions.DOWN }), t ? h.Z.Messages.COLLAPSE : h.Z.Messages.EXPAND]
            })
    });
}
function A(e) {
    let { url: t, fileName: n, fileSize: r } = e,
        a = ''.concat(n, ' (').concat((0, f.IC)(r), ')');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Tooltip, {
                text: a,
                children: (e) =>
                    (0, i.jsx)('span', {
                        ...e,
                        className: s()(p.downloadSection, p.attachmentName),
                        children: n
                    })
            }),
            (0, i.jsx)(u.Tooltip, {
                text: a,
                children: (e) =>
                    (0, i.jsx)('span', {
                        ...e,
                        className: s()(p.downloadSection, p.formattedSize),
                        children: (0, f.IC)(r)
                    })
            }),
            (0, i.jsx)(u.Tooltip, {
                text: ''.concat(h.Z.Messages.DOWNLOAD, ' ').concat(a),
                children: (e) =>
                    (0, i.jsx)(u.Anchor, {
                        ...e,
                        className: p.downloadSection,
                        href: t,
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: (0, i.jsx)(u.DownloadIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.downloadButton
                        })
                    })
            })
        ]
    });
}
function v(e) {
    let { language: t, setLanguage: n } = e;
    return (0, i.jsx)(u.Popout, {
        position: 'left',
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(u.Dialog, {
                'aria-label': h.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
                children: (0, i.jsx)(u.Combobox, {
                    className: p.languageSelector,
                    multiSelect: !1,
                    placeholder: h.Z.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                    value: new Set([t]),
                    autoFocus: !0,
                    onChange: (e) => {
                        n(e), r();
                    },
                    children: (e) =>
                        Array.from(_.u)
                            .filter((t) => t.toLowerCase().includes(e.toLowerCase()))
                            .map((e) =>
                                (0, i.jsx)(
                                    u.ComboboxItem,
                                    {
                                        value: e,
                                        children: (0, i.jsx)(u.ComboboxItem.Label, { children: e })
                                    },
                                    e
                                )
                            )
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(u.Tooltip, {
                text: h.Z.Messages.PREVIEW_CHANGE_LANGUAGE,
                children: (t) =>
                    (0, i.jsx)(u.AngleBracketsIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...t,
                        ...e,
                        className: p.codeIcon
                    })
            })
    });
}
function N(e) {
    return (0, i.jsx)(u.Tooltip, {
        text: h.Z.Messages.PREVIEW_WHOLE_FILE,
        children: (t) =>
            (0, i.jsx)(u.Clickable, {
                ...t,
                className: p.openFullPreviewSection,
                onClick: () => {
                    (0, u.openModal)((t) =>
                        (0, i.jsx)(R, {
                            ...e,
                            ...t
                        })
                    );
                },
                children: (0, i.jsx)(u.MaximizeIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function O(e) {
    var t;
    let { url: n, fileName: r, fileSize: a, fileContents: o, expanded: l, setExpanded: c, language: _, setLanguage: E, bytesLeft: m, className: I } = e,
        T = null == o ? void 0 : o.split('\n'),
        O = null !== (t = null == T ? void 0 : T.length) && void 0 !== t ? t : 0,
        R = l ? 100 : 6,
        C = 0 === m,
        y = '';
    C && l && O > R ? (y = '\n...') : !C && (y = '...'), '' !== y && (C ? (y += ' ' + h.Z.Messages.PREVIEW_LINES_LEFT.format({ lines: O - R })) : (y += ' ' + h.Z.Messages.PREVIEW_BYTES_LEFT.format({ formattedBytes: (0, f.IC)(m) })));
    let b = (null == T ? void 0 : T.slice(0, R).join('\n')) + y,
        L = (0, d.yx)(b),
        D = l || R < O;
    return (0, i.jsxs)('div', {
        className: s()(I, p.container),
        children: [
            (0, i.jsx)('div', {
                className: s()(p.textContainer, { [p.expanded]: l }),
                children:
                    null == o
                        ? (0, i.jsx)(u.Spinner, { className: p.spinner })
                        : (0, i.jsx)(g, {
                              text: L,
                              language: _
                          })
            }),
            (0, i.jsxs)(u.Text, {
                color: 'header-secondary',
                className: p.footer,
                variant: 'text-sm/normal',
                children: [
                    D
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(S, {
                                      expanded: l,
                                      setExpanded: c,
                                      isWholeFile: C,
                                      numLines: O
                                  }),
                                  (0, i.jsx)(N, {
                                      url: n,
                                      fileName: r,
                                      fileSize: a,
                                      language: _,
                                      fileContents: o,
                                      bytesLeft: m
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsx)('div', { className: p.footerGap }),
                    (0, i.jsx)(A, {
                        url: n,
                        fileName: r,
                        fileSize: a
                    }),
                    (0, i.jsx)(v, {
                        language: _,
                        setLanguage: E
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { url: t, fileName: n, fileSize: r, transitionState: o, language: s, fileContents: l, bytesLeft: c } = e,
        [d, _] = a.useState(s),
        E = null != l ? l : '';
    return (
        0 !== c && (E += '... '.concat(h.Z.Messages.PREVIEW_BYTES_LEFT.format({ formattedBytes: (0, f.IC)(c) }))),
        (0, i.jsx)(u.ModalRoot, {
            transitionState: o,
            'aria-label': h.Z.Messages.PREVIEW_MODAL_LABEL,
            size: u.ModalSize.LARGE,
            className: p.modalRoot,
            children: (0, i.jsxs)('div', {
                className: p.modalContent,
                children: [
                    (0, i.jsx)(u.ScrollerThin, {
                        className: p.modalTextContainer,
                        children:
                            null == l
                                ? (0, i.jsx)(u.Spinner, { className: p.spinner })
                                : (0, i.jsx)(g, {
                                      text: E,
                                      language: d
                                  })
                    }),
                    (0, i.jsxs)(u.Text, {
                        color: 'header-secondary',
                        className: p.footer,
                        variant: 'text-sm/normal',
                        children: [
                            (0, i.jsx)('div', { className: p.footerGap }),
                            (0, i.jsx)(A, {
                                url: t,
                                fileName: n,
                                fileSize: r
                            }),
                            (0, i.jsx)(v, {
                                language: d,
                                setLanguage: _
                            })
                        ]
                    })
                ]
            })
        })
    );
}
t.Z = a.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: r, contentType: o, className: l, onClick: u, onContextMenu: d } = e,
            [_, E] = a.useState(!1),
            [f, h] = a.useState(n.split('.').slice(-1)[0]),
            { fileContents: m, bytesLeft: I, hadError: g } = T(t, o);
        return g
            ? (0, i.jsx)(c.Z, {
                  url: t,
                  fileName: n,
                  fileSize: r,
                  onClick: u,
                  onContextMenu: d,
                  className: l
              })
            : (0, i.jsx)(O, {
                  url: t,
                  fileName: n,
                  fileSize: r,
                  fileContents: m,
                  bytesLeft: I,
                  expanded: _,
                  setExpanded: E,
                  language: f,
                  setLanguage: h,
                  className: s()(p.newMosaicStyle, l)
              });
    },
    (e, t) => e.url === t.url && e.className === t.className
);
