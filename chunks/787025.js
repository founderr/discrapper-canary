n.d(t, {
    G: function () {
        return _;
    },
    j: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(466377),
    s = n(481060),
    l = n(252618),
    u = n(981631),
    c = n(689938),
    d = n(208320);
function _(e) {
    let { children: t, removeChildWrapper: n, wrapperClassName: i } = e;
    return (
        (0, l.Tt)({ location: c.Z.Messages.OAUTH2_TITLE }),
        (0, r.jsx)(s.ThemeProvider, {
            theme: u.BRd.DARK,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: a()(e, d.oauth2PageWrapper, i),
                    children:
                        !0 === n
                            ? t
                            : (0, r.jsx)('div', {
                                  className: d.oauth2PageContent,
                                  children: t
                              })
                })
        })
    );
}
function E(e) {
    let { children: t, footer: n, transitionState: i, ...a } = e;
    return (0, r.jsxs)(o.Y0, {
        size: o.Cg.DYNAMIC,
        transitionState: i,
        className: d.oauth2ModalWrapper,
        ...a,
        children: [
            (0, r.jsx)(o.hz, { children: t }),
            null != n &&
                (0, r.jsx)(o.mz, {
                    className: d.footer,
                    children: n
                })
        ]
    });
}
