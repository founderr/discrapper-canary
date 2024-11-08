n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(608787),
    l = n(481060),
    u = n(858644),
    c = n(571989),
    d = n(828061),
    f = n(259580),
    _ = n(424218),
    h = n(388032),
    p = n(87559),
    m = n(110933);
function g(e) {
    let { text: t, language: i } = e,
        a = () =>
            (0, r.jsx)('pre', {
                children: (0, r.jsx)('code', {
                    className: s()(m.scrollbarGhostHairline, p.codeView, 'hljs'),
                    children: t
                })
            });
    return (0, r.jsx)(o.GI, {
        createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
        webpackId: 364964,
        render: (e) => {
            if (!e.hasLanguage(i)) return a();
            let n = e.highlight(i, t, !0);
            return null == n
                ? a()
                : (0, r.jsx)('pre', {
                      children: (0, r.jsx)('code', {
                          className: s()(m.scrollbarGhostHairline, p.codeView, 'hljs', n.language),
                          dangerouslySetInnerHTML: { __html: n.value }
                      })
                  });
        },
        renderFallback: () => a()
    });
}
function E(e) {
    let { expanded: t, setExpanded: n, isWholeFile: i, numLines: a } = e,
        s = h.intl.formatToPlainString(i ? h.t.Go5Vvr : h.t.yJcYam, { lines: a });
    return (0, r.jsx)(l.Tooltip, {
        text: ''.concat(t ? h.intl.string(h.t.iTcumZ) : h.intl.string(h.t.dcl9MT), ' (').concat(s, ')'),
        children: (e) =>
            (0, r.jsxs)(l.Clickable, {
                ...e,
                className: p.toggleExpandSection,
                onClick: () => {
                    n(!t);
                },
                children: [(0, r.jsx)(f.Z, { direction: t ? f.Z.Directions.UP : f.Z.Directions.DOWN }), t ? h.intl.string(h.t.iTcumZ) : h.intl.string(h.t.dcl9MT)]
            })
    });
}
function v(e) {
    let { url: t, fileName: n, fileSize: i } = e,
        a = ''.concat(n, ' (').concat((0, _.IC)(i), ')');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Tooltip, {
                text: a,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        className: s()(p.downloadSection, p.attachmentName),
                        children: n
                    })
            }),
            (0, r.jsx)(l.Tooltip, {
                text: a,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        className: s()(p.downloadSection, p.formattedSize),
                        children: (0, _.IC)(i)
                    })
            }),
            (0, r.jsx)(l.Tooltip, {
                text: ''.concat(h.intl.string(h.t['1WjMbG']), ' ').concat(a),
                children: (e) =>
                    (0, r.jsx)(l.Anchor, {
                        ...e,
                        className: p.downloadSection,
                        href: t,
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        children: (0, r.jsx)(l.DownloadIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.downloadButton
                        })
                    })
            })
        ]
    });
}
function I(e) {
    let { language: t, setLanguage: n } = e;
    return (0, r.jsx)(l.Popout, {
        position: 'left',
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(l.Dialog, {
                'aria-label': h.intl.string(h.t.utm4qq),
                children: (0, r.jsx)(l.Combobox, {
                    className: p.languageSelector,
                    multiSelect: !1,
                    placeholder: h.intl.string(h.t.Gofftb),
                    value: new Set([t]),
                    autoFocus: !0,
                    onChange: (e) => {
                        n(e), i();
                    },
                    children: (e) =>
                        Array.from(d.u)
                            .filter((t) => t.toLowerCase().includes(e.toLowerCase()))
                            .map((e) =>
                                (0, r.jsx)(
                                    l.ComboboxItem,
                                    {
                                        value: e,
                                        children: (0, r.jsx)(l.ComboboxItem.Label, { children: e })
                                    },
                                    e
                                )
                            )
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(l.Tooltip, {
                text: h.intl.string(h.t.utm4qq),
                children: (t) =>
                    (0, r.jsx)(l.AngleBracketsIcon, {
                        size: 'md',
                        color: 'currentColor',
                        ...t,
                        ...e,
                        className: p.codeIcon
                    })
            })
    });
}
function S(e) {
    return (0, r.jsx)(l.Tooltip, {
        text: h.intl.string(h.t['0PQYk5']),
        children: (t) =>
            (0, r.jsx)(l.Clickable, {
                ...t,
                className: p.openFullPreviewSection,
                onClick: () => {
                    (0, l.openModal)((t) =>
                        (0, r.jsx)(T, {
                            ...e,
                            ...t
                        })
                    );
                },
                children: (0, r.jsx)(l.MaximizeIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
function b(e) {
    var t;
    let { url: n, fileName: i, fileSize: a, fileContents: o, expanded: u, setExpanded: d, language: f, setLanguage: m, bytesLeft: b, className: T } = e,
        y = null == o ? void 0 : o.split('\n'),
        A = null !== (t = null == y ? void 0 : y.length) && void 0 !== t ? t : 0,
        N = u ? 100 : 6,
        C = 0 === b,
        R = '';
    C && u && A > N ? (R = '\n...') : !C && (R = '...'), '' !== R && (C ? (R += ' ' + h.intl.formatToPlainString(h.t.DQnFp6, { lines: A - N })) : (R += ' ' + h.intl.formatToPlainString(h.t['1+gGcH'], { formattedBytes: (0, _.IC)(b) })));
    let O = (null == y ? void 0 : y.slice(0, N).join('\n')) + R,
        D = (0, c.yx)(O),
        L = u || N < A;
    return (0, r.jsxs)('div', {
        className: s()(T, p.container),
        children: [
            (0, r.jsx)('div', {
                className: s()(p.textContainer, { [p.expanded]: u }),
                children:
                    null == o
                        ? (0, r.jsx)(l.Spinner, { className: p.spinner })
                        : (0, r.jsx)(g, {
                              text: D,
                              language: f
                          })
            }),
            (0, r.jsxs)(l.Text, {
                color: 'header-secondary',
                className: p.footer,
                variant: 'text-sm/normal',
                children: [
                    L
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(E, {
                                      expanded: u,
                                      setExpanded: d,
                                      isWholeFile: C,
                                      numLines: A
                                  }),
                                  (0, r.jsx)(S, {
                                      url: n,
                                      fileName: i,
                                      fileSize: a,
                                      language: f,
                                      fileContents: o,
                                      bytesLeft: b
                                  })
                              ]
                          })
                        : null,
                    (0, r.jsx)('div', { className: p.footerGap }),
                    (0, r.jsx)(v, {
                        url: n,
                        fileName: i,
                        fileSize: a
                    }),
                    (0, r.jsx)(I, {
                        language: f,
                        setLanguage: m
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { url: t, fileName: n, fileSize: a, transitionState: s, language: o, fileContents: u, bytesLeft: c } = e,
        [d, f] = i.useState(o),
        m = null != u ? u : '';
    return (
        0 !== c && (m += '... '.concat(h.intl.formatToPlainString(h.t['1+gGcH'], { formattedBytes: (0, _.IC)(c) }))),
        (0, r.jsx)(l.ModalRoot, {
            transitionState: s,
            'aria-label': h.intl.string(h.t.qxQjc3),
            size: l.ModalSize.LARGE,
            className: p.modalRoot,
            children: (0, r.jsxs)('div', {
                className: p.modalContent,
                children: [
                    (0, r.jsx)(l.ScrollerThin, {
                        className: p.modalTextContainer,
                        children:
                            null == u
                                ? (0, r.jsx)(l.Spinner, { className: p.spinner })
                                : (0, r.jsx)(g, {
                                      text: m,
                                      language: d
                                  })
                    }),
                    (0, r.jsxs)(l.Text, {
                        color: 'header-secondary',
                        className: p.footer,
                        variant: 'text-sm/normal',
                        children: [
                            (0, r.jsx)('div', { className: p.footerGap }),
                            (0, r.jsx)(v, {
                                url: t,
                                fileName: n,
                                fileSize: a
                            }),
                            (0, r.jsx)(I, {
                                language: d,
                                setLanguage: f
                            })
                        ]
                    })
                ]
            })
        })
    );
}
t.Z = i.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: a, contentType: o, className: l, onClick: c, onContextMenu: d } = e,
            [f, _] = i.useState(!1),
            [h, m] = i.useState(n.split('.').slice(-1)[0]),
            {
                fileContents: g,
                bytesLeft: E,
                hadError: v
            } = (function (e, t) {
                let [n, r] = i.useState(!1),
                    [a, s] = i.useState(null),
                    [o, l] = i.useState(1);
                return (
                    i.useEffect(() => {
                        (async function n() {
                            try {
                                var n, i;
                                let a = await fetch(e, {
                                        headers: {
                                            Range: 'bytes=0-'.concat(50000),
                                            Accept: 'text/plain'
                                        }
                                    }),
                                    o = (function (e) {
                                        var t;
                                        let n = 'utf-8',
                                            r = null !== (t = null == e ? void 0 : e.split('charset=').slice(-1)[0]) && void 0 !== t ? t : n;
                                        try {
                                            return new TextDecoder(r);
                                        } catch (t) {
                                            if ((null == e ? void 0 : e.startsWith('text')) || r.toLowerCase().includes('utf')) return new TextDecoder(n);
                                            throw t;
                                        }
                                    })(t).decode(await a.arrayBuffer()),
                                    u = null !== (n = a.headers.get('content-range')) && void 0 !== n ? n : '0',
                                    c = null !== (i = a.headers.get('content-length')) && void 0 !== i ? i : '1',
                                    d = parseInt(u.split('/')[1]) - parseInt(c);
                                s(0 === d ? o : o.slice(0, -1)), l(d), r(!1);
                            } catch (e) {
                                l(0), r(!0);
                            }
                        })();
                    }, [e, t]),
                    {
                        fileContents: a,
                        bytesLeft: o,
                        hadError: n
                    }
                );
            })(t, o);
        return v
            ? (0, r.jsx)(u.Z, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  onClick: c,
                  onContextMenu: d,
                  className: l
              })
            : (0, r.jsx)(b, {
                  url: t,
                  fileName: n,
                  fileSize: a,
                  fileContents: g,
                  bytesLeft: E,
                  expanded: f,
                  setExpanded: _,
                  language: h,
                  setLanguage: m,
                  className: s()(p.newMosaicStyle, l)
              });
    },
    (e, t) => e.url === t.url && e.className === t.className
);
