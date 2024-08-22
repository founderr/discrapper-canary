n.d(t, {
    Z: function () {
        return v;
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
    N = n(327250),
    S = n(662917);
function v(e) {
    let { userId: t, guildId: n, onClose: s, className: v, infoPanelClassName: Z, style: A } = e,
        M = (0, x.ms)(n),
        b = (0, r.e7)([I.default], () => I.default.getUser(t), [t]),
        R = (0, r.e7)([C.ZP], () => C.ZP.getMember(n, t), [n, t]),
        [L, j] = a.useState(null == b || null == R),
        O = (0, u.Z)(R),
        P = a.useRef(null),
        { analyticsLocations: y } = (0, m.ZP)(p.Z.GUILD_MEMBER_MOD_VIEW),
        D = (0, E.ZP)(t, n),
        k = (0, d.ZP)();
    return (a.useEffect(() => {
        !M && s();
    }, [M, s]),
    a.useEffect(() => {
        null != O && null == R && !L && s();
    }, [L, R, s, O]),
    a.useEffect(() => {
        null != b && null != R && j(!1);
    }, [b, R]),
    a.useEffect(() => {
        let e = null == R;
        return (
            !L && e && (P.current = window.setTimeout(s, 500)),
            () => {
                null != P.current && window.clearTimeout(P.current);
            }
        );
    }, [L, R, s]),
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
            await Promise.all(e), j(!1);
        })();
    }, [n, t]),
    M)
        ? L || null == b || null == R
            ? (0, i.jsx)('div', {
                  className: l()(S.sidebarContainer, S.loadingContainer, v),
                  style: A,
                  children: (0, i.jsx)(o.Spinner, {
                      animated: !0,
                      type: L ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
                  })
              })
            : (0, i.jsx)(m.Gt, {
                  value: y,
                  children: (0, i.jsx)('div', {
                      className: l()(S.sidebarContainer, v),
                      style: A,
                      children: (0, i.jsx)(g.Z, {
                          user: b,
                          displayProfile: D,
                          profileType: null,
                          themeOverride: k,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, i.jsxs)('div', {
                              className: S.innerContainer,
                              children: [
                                  (0, i.jsx)(N.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s
                                  }),
                                  (0, i.jsx)(T.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s,
                                      className: Z
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
