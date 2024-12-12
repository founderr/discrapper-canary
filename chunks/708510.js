n.d(t, {
    O: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(863249),
    o = n(245762),
    c = n(894376),
    d = n(446495),
    u = n(999382),
    m = n(202905),
    h = n(307375),
    g = n(388032),
    x = n(322825);
function p(e) {
    let { pendingState: t } = e;
    switch (t.joinType) {
        case d.A.INVITE:
            return null;
        case d.A.APPLY:
            return (0, i.jsx)(m.r, { pendingFields: t.pendingVerificationFields });
        case d.A.DISCOVERABLE:
            return null;
    }
}
function f() {
    let e = (0, l.e7)([u.Z], () => u.Z.getProps().guild),
        t = (0, l.e7)([c.Z], () => c.Z.pendingState);
    r.useEffect(() => {
        if ((null == e ? void 0 : e.id) != null) a.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = r.useCallback(
        (t) => {
            if ((null == e ? void 0 : e.id) != null) o.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: m } = t,
        f = m !== d.A.INVITE;
    return (0, i.jsxs)(s.Stack, {
        gap: 32,
        children: [
            (0, i.jsx)(s.Heading, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: g.intl.string(g.t.oGaVGx)
            }),
            (0, i.jsx)(h.h, {
                onTypePicked: n,
                activeType: m,
                guild: e
            }),
            f && (0, i.jsx)('div', { className: x.divider }),
            (0, i.jsx)(p, { pendingState: t })
        ]
    });
}
