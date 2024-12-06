n.d(t, {
    O: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(999382),
    o = n(202905),
    c = n(307375),
    d = n(388032),
    u = n(322825);
function m(e) {
    let { joinType: t } = e;
    switch (t) {
        case c.A.INVITE:
            return null;
        case c.A.APPLY:
            return (0, i.jsx)(o.r, {});
        case c.A.DISCOVERABLE:
            return null;
    }
}
function h() {
    let e = (0, l.e7)([a.Z], () => a.Z.getProps().guild),
        [t, n] = r.useState(c.A.INVITE),
        o = t !== c.A.INVITE;
    return null == e
        ? null
        : (0, i.jsxs)(s.Stack, {
              gap: 32,
              children: [
                  (0, i.jsx)(s.Heading, {
                      color: 'header-primary',
                      variant: 'heading-lg/semibold',
                      children: d.intl.string(d.t.oGaVGx)
                  }),
                  (0, i.jsx)(c.h, {
                      onTypePicked: n,
                      activeType: t,
                      guild: e
                  }),
                  o && (0, i.jsx)('div', { className: u.divider }),
                  (0, i.jsx)(m, { joinType: t })
              ]
          });
}
