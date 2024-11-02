var l = t(200651),
    a = t(192379),
    i = t(481060),
    r = t(87686),
    s = t(586826),
    u = t(507419),
    o = t(388032),
    c = t(7516);
n.Z = a.memo(function (e) {
    let { sound: n, volume: t, disabled: a = !1, onChange: d } = e,
        { file: f } = (0, s.p)();
    return (0, l.jsx)(i.FormSection, {
        className: c.section,
        title: o.intl.string(o.t.CCRKNz),
        children: (0, l.jsxs)('div', {
            className: c.fakeInput,
            children: [
                null != n &&
                    (0, l.jsx)(u.Z, {
                        sound: n,
                        volume: t,
                        disabled: a
                    }),
                null == n &&
                    null != f &&
                    (0, l.jsx)(r.Z, {
                        className: c.audioTrimmer,
                        volume: t,
                        disabled: a,
                        onChange: d
                    })
            ]
        })
    });
});
