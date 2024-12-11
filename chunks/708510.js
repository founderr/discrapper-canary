n.d(t, {
    O: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(863249),
    o = n(999382),
    c = n(202905),
    d = n(307375),
    u = n(388032),
    m = n(322825);
function h(e) {
    let { joinType: t } = e;
    switch (t) {
        case d.A.INVITE:
            return null;
        case d.A.APPLY:
            return (0, i.jsx)(c.r, {});
        case d.A.DISCOVERABLE:
            return null;
    }
}
function g() {
    let e = (0, l.e7)([o.Z], () => o.Z.getProps().guild),
        [t, n] = r.useState(d.A.INVITE),
        c = t !== d.A.INVITE;
    return (r.useEffect(() => {
        if ((null == e ? void 0 : e.id) != null) a.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]),
    null == e)
        ? null
        : (0, i.jsxs)(s.Stack, {
              gap: 32,
              children: [
                  (0, i.jsx)(s.Heading, {
                      color: 'header-primary',
                      variant: 'heading-lg/semibold',
                      children: u.intl.string(u.t.oGaVGx)
                  }),
                  (0, i.jsx)(d.h, {
                      onTypePicked: n,
                      activeType: t,
                      guild: e
                  }),
                  c && (0, i.jsx)('div', { className: m.divider }),
                  (0, i.jsx)(h, { joinType: t })
              ]
          });
}
