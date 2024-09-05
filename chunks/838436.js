t.d(s, {
    H: function () {
        return _;
    },
    U: function () {
        return S;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(921801),
    l = t(3957),
    c = t(279743),
    d = t(81138),
    u = t(5718);
function _(e) {
    let { header: s, description: t, relatedId: a, disabled: o } = e;
    return (0, n.jsxs)('div', {
        className: u.header,
        children: [
            (0, n.jsx)(r.Heading, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: (0, n.jsx)('label', {
                    htmlFor: a,
                    className: i()(u.title, { [u.disabled]: o }),
                    children: s
                })
            }),
            (0, n.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                className: i()(u.description, { [u.disabled]: o }),
                children: t
            })
        ]
    });
}
function E(e) {
    let { setting: s, className: t, children: a } = e;
    return (0, n.jsx)(o.F, {
        setting: s,
        children: (0, n.jsx)('div', {
            className: i()(u.container, t),
            children: a
        })
    });
}
function T(e) {
    let { setting: s, className: t, children: a, scrollPosition: r, scrollHighlightDelay: _ } = e,
        E = (0, l.a)(r);
    return (0, n.jsx)(o.F, {
        setting: s,
        children: (0, n.jsxs)('div', {
            className: i()(u.container, t, { [d.settingsBackgroundFlashElement]: null != r }),
            ref: E,
            children: [
                a,
                null != r
                    ? (0, n.jsx)(c.Z, {
                          animationDelay: _,
                          scrollPosition: r
                      })
                    : null
            ]
        })
    });
}
function S(e) {
    return null != e.scrollPosition ? (0, n.jsx)(T, { ...e }) : (0, n.jsx)(E, { ...e });
}
