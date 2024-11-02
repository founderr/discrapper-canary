n.d(e, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    u = n(374470),
    c = n(442837),
    r = n(481060),
    a = n(295866),
    s = n(398327),
    o = n(63063),
    d = n(601993),
    f = n(981631),
    p = n(388032);
function E(t) {
    let { text: e = '', target: n } = t,
        E = (0, c.e7)([s.Z], () => s.Z.isEnabled()),
        h = (0, c.e7)([s.Z], () => s.Z.hasLearnedWord(e), [e]),
        m = l.useRef({
            ...t,
            spellcheckEnabled: E
        });
    m.current = {
        ...t,
        spellcheckEnabled: E
    };
    let M = l.useRef(!1),
        [b, x] = l.useState(!1),
        [k, C] = l.useState([]),
        L = l.useCallback(() => {
            let { spellcheckEnabled: t, text: e, onHeightUpdate: n } = m.current;
            t &&
                (0, d.Gb)() &&
                Promise.all([(0, d.f5)(e, !0), (0, d.WA)(e, !0)]).then((t) => {
                    let [e, i] = t;
                    M.current && (x(e), C(i), n());
                });
        }, []),
        g = l.useCallback(() => {
            if ((0, u.k)(n, HTMLInputElement) || (0, u.k)(n, HTMLTextAreaElement)) {
                let { selectionStart: t, selectionEnd: e, value: i } = n;
                (n.value = ''), (n.value = i), 'email' !== n.type && ((n.selectionStart = t), (n.selectionEnd = e));
            }
        }, [n]);
    if (
        (l.useEffect(() => {
            let t = (0, d.RD)(L);
            return (
                (M.current = !0),
                () => {
                    (M.current = !1), t();
                }
            );
        }, [L]),
        l.useEffect(() => {
            L();
        }, [e, E, L]),
        !(0, d.Gb)())
    )
        return [null, null];
    let T = k.map((t, e) =>
        (0, i.jsx)(
            r.MenuItem,
            {
                id: 'correction-'.concat(e),
                label: t,
                action: () => {
                    (0, d.Rs)(t), n.focus();
                }
            },
            'correction-'.concat(e)
        )
    );
    return [
        T,
        (0, i.jsxs)(i.Fragment, {
            children: [
                b
                    ? (0, i.jsx)(r.MenuItem, {
                          id: 'add-to-dictionary',
                          label: p.intl.string(p.t.HJmG1N),
                          action: () => {
                              (0, a.D0)(e), g();
                          }
                      })
                    : null,
                h &&
                    (0, i.jsx)(r.MenuItem, {
                        id: 'remove-from-dictionary',
                        label: p.intl.string(p.t.xXqIX1),
                        action: () => {
                            (0, a.lE)(e), g();
                        }
                    }),
                (0, i.jsx)(r.MenuCheckboxItem, {
                    id: 'spellcheck',
                    label: p.intl.string(p.t.TKkotb),
                    checked: E,
                    action: () => {
                        (0, a.kY)(), g();
                    }
                }),
                E
                    ? (0, i.jsx)(r.MenuItem, {
                          id: 'languages',
                          label: p.intl.string(p.t.OlOHDA),
                          action: () => window.open(o.Z.getArticleURL(f.BhN.SPELLCHECK))
                      })
                    : null
            ]
        })
    ];
}
