n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(110924),
    d = n(410030),
    h = n(58540),
    p = n(100527),
    m = n(906732),
    _ = n(527379),
    f = n(184301),
    E = n(318661),
    g = n(502762),
    C = n(271383),
    I = n(594174),
    x = n(189357),
    T = n(718617),
    v = n(327250),
    N = n(228168),
    S = n(662917);
function Z(e) {
    let { userId: t, guildId: n, onClose: s, className: Z, infoPanelClassName: A, style: M } = e,
        b = (0, x.ms)(n),
        R = (0, r.e7)([I.default], () => I.default.getUser(t), [t]),
        L = (0, r.e7)([C.ZP], () => C.ZP.getMember(n, t), [n, t]),
        [j, O] = a.useState(null == R || null == L),
        P = (0, u.Z)(L),
        y = a.useRef(null),
        { analyticsLocations: D } = (0, m.ZP)(p.Z.GUILD_MEMBER_MOD_VIEW),
        k = (0, E.ZP)(t, n),
        U = (0, d.ZP)();
    return (a.useEffect(() => {
        !b && s();
    }, [b, s]),
    a.useEffect(() => {
        null != P && null == L && !j && s();
    }, [j, L, s, P]),
    a.useEffect(() => {
        null != R && null != L && O(!1);
    }, [R, L]),
    a.useEffect(() => {
        let e = null == L;
        return (
            !j && e && (y.current = window.setTimeout(s, 500)),
            () => {
                null != y.current && window.clearTimeout(y.current);
            }
        );
    }, [j, L, s]),
    (0, h.$)({ [n]: [t] }),
    a.useEffect(() => {
        (async function e() {
            let e = [
                c.Z.requestMembersById(n, [t]),
                (0, _.nb)(n, [t]),
                (0, f.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            await Promise.all(e), O(!1);
        })();
    }, [n, t]),
    b)
        ? j || null == R || null == L
            ? (0, i.jsx)('div', {
                  className: l()(S.sidebarContainer, S.loadingContainer, Z),
                  style: M,
                  children: (0, i.jsx)(o.Spinner, {
                      animated: !0,
                      type: j ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
                  })
              })
            : (0, i.jsx)(m.Gt, {
                  value: D,
                  children: (0, i.jsx)('div', {
                      className: l()(S.sidebarContainer, Z),
                      style: M,
                      children: (0, i.jsx)(g.Z, {
                          user: R,
                          displayProfile: k,
                          profileType: N.y0.MODAL,
                          themeOverride: U,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, i.jsxs)('div', {
                              className: S.innerContainer,
                              children: [
                                  (0, i.jsx)(v.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s
                                  }),
                                  (0, i.jsx)(T.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s,
                                      className: A
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
