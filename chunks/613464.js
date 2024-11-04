n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(110924),
    d = n(410030),
    h = n(58540),
    m = n(100527),
    p = n(906732),
    f = n(527379),
    g = n(687158),
    C = n(184301),
    x = n(502762),
    v = n(271383),
    _ = n(594174),
    I = n(189357),
    E = n(718617),
    b = n(327250),
    S = n(7340);
function Z(e) {
    let { userId: t, guildId: n, onClose: r, className: Z, infoPanelClassName: T, style: N } = e,
        j = (0, I.ms)(n),
        A = (0, a.e7)([_.default], () => _.default.getUser(t), [t]),
        y = (0, a.e7)([v.ZP], () => v.ZP.getMember(n, t), [n, t]),
        [P, M] = l.useState(null == A || null == y),
        R = (0, u.Z)(y),
        L = l.useRef(null),
        { analyticsLocations: k } = (0, p.ZP)(m.Z.GUILD_MEMBER_MOD_VIEW),
        O = (0, g.ZP)(t, n),
        w = (0, d.ZP)();
    return (l.useEffect(() => {
        !j && r();
    }, [j, r]),
    l.useEffect(() => {
        null != R && null == y && !P && r();
    }, [P, y, r, R]),
    l.useEffect(() => {
        null != A && null != y && M(!1);
    }, [A, y]),
    l.useEffect(() => {
        let e = null == y;
        return (
            !P && e && (L.current = window.setTimeout(r, 500)),
            () => {
                null != L.current && window.clearTimeout(L.current);
            }
        );
    }, [P, y, r]),
    (0, h.$)({ [n]: [t] }),
    l.useEffect(() => {
        (async function e() {
            let e = [
                c.Z.requestMembersById(n, [t]),
                (0, f.nb)(n, [t]),
                (0, C.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            await Promise.all(e), M(!1);
        })();
    }, [n, t]),
    j)
        ? P || null == A || null == y
            ? (0, i.jsx)('div', {
                  className: s()(S.sidebarContainer, S.loadingContainer, Z),
                  style: N,
                  children: (0, i.jsx)(o.Spinner, {
                      animated: !0,
                      type: P ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
                  })
              })
            : (0, i.jsx)(p.Gt, {
                  value: k,
                  children: (0, i.jsx)('div', {
                      className: s()(S.sidebarContainer, Z),
                      style: N,
                      children: (0, i.jsx)(x.Z, {
                          user: A,
                          displayProfile: O,
                          profileType: null,
                          themeOverride: w,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, i.jsxs)('div', {
                              className: S.innerContainer,
                              children: [
                                  (0, i.jsx)(b.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: r
                                  }),
                                  (0, i.jsx)(E.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: r,
                                      className: T
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
