l.r(t),
    l.d(t, {
        default: function () {
            return L;
        }
    }),
    l(47120);
var n = l(200651),
    i = l(192379),
    a = l(120356),
    r = l.n(a),
    s = l(913527),
    o = l.n(s),
    d = l(442837),
    c = l(481060),
    u = l(410030),
    x = l(313201),
    m = l(271383),
    h = l(430824),
    g = l(594174),
    v = l(709054),
    f = l(931240),
    C = l(645896),
    j = l(603368),
    p = l(532490),
    N = l(380365),
    Z = l(979264),
    T = l(620929),
    S = l(284019),
    y = l(308083),
    w = l(981631),
    H = l(388032),
    M = l(429982);
function b(e) {
    var t;
    let { guildId: l, clanInfo: a, signed: s, onSignCharter: d } = e,
        u = i.useMemo(() => {
            let e = v.default.extractTimestamp(l);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [l]),
        x = i.useMemo(() => new Set(a.games), [a.games]);
    return (0, n.jsx)(p.Z, {
        guildId: l,
        signHintPosition: p.p.LEFT,
        primaryColor: null === (t = a.branding) || void 0 === t ? void 0 : t.primaryColor,
        signed: s,
        onSignCharter: d,
        children: (0, n.jsxs)('div', {
            className: M.scrollContentsContainer,
            children: [
                (0, n.jsx)(Z.aG, {
                    guildId: l,
                    clanBadge: a.badge.imageHash,
                    clanTag: a.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: y.NC.SIZE_24,
                    className: M.clanTagChiplet
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(c.Heading, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: M.charterHeaderText,
                            children: H.intl.string(H.t['85S0//'])
                        }),
                        (0, n.jsx)(c.Heading, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: M.charterHeaderText,
                            children: a.name
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: M.establishedDate,
                            children: H.intl.format(H.t['7RpSYW'], { date: u })
                        })
                    ]
                }),
                (0, n.jsx)(T.p, {
                    applicationIds: x,
                    playstyle: a.playstyle,
                    className: r()(M.charterBodyText, M.gameSection)
                }),
                (0, n.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: M.charterBodyText,
                    children: H.intl.string(H.t['YDTd9/'])
                })
            ]
        })
    });
}
function L(e) {
    var t;
    let { guildId: l, onClose: a, onAccept: s, ...o } = e,
        v = (0, x.Dt)(),
        p = (0, C.Cc)(l),
        Z = (0, C.E8)(l),
        [T, y] = i.useState(!0),
        [L, _] = i.useState(!1),
        B = i.useCallback(() => {
            s(), a();
        }, [s, a]);
    i.useEffect(() => {
        null == p && !Z && B();
    }, [p, B, Z]);
    let A = i.useCallback(() => {
            T && (0, f.nE)(l, T, w.Sbl.CREATE_JOIN_GUILD_MODAL), B();
        }, [l, B, T]),
        I = (0, d.e7)([h.Z], () => h.Z.getGuild(l)),
        R = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        k = (0, d.e7)([m.ZP], () => (null != R ? m.ZP.getMember(l, R.id) : null)),
        E = (0, u.ZP)(),
        D = (0, j.nP)(null == p ? void 0 : null === (t = p.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, 0.7]),
        G = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: E,
            saturation: 1
        }).hex(),
        P = (0, j.nj)(D, G, 'top center');
    return null == I || null == R || null == k || null == p
        ? null
        : (0, n.jsx)(c.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              'aria-labelledby': v,
              className: M.modal,
              size: c.ModalSize.DYNAMIC,
              children: (0, n.jsxs)(c.ModalContent, {
                  className: M.content,
                  style: P,
                  children: [
                      (0, n.jsxs)('div', {
                          className: M.infoSide,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: M.titlesContainer,
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: M.title,
                                          children: (0, n.jsx)(c.Heading, {
                                              variant: 'heading-xxl/medium',
                                              children: H.intl.format(H.t.orbR8f, { name: I.name })
                                          })
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          className: M.subtitle,
                                          variant: 'text-md/normal',
                                          children: H.intl.string(H.t.sZHbAQ)
                                      })
                                  ]
                              }),
                              (0, n.jsx)(N.Z, {
                                  guildId: l,
                                  isTagAdopted: T,
                                  onChangeUseTag: y
                              })
                          ]
                      }),
                      (0, n.jsx)('div', {
                          className: M.scrollMainContainer,
                          children: (0, n.jsx)(b, {
                              guildId: l,
                              clanInfo: p,
                              signed: L,
                              onSignCharter: _
                          })
                      }),
                      (0, n.jsx)(S.Z, {
                          onClick: A,
                          color: c.Button.Colors.BRAND,
                          themeColor: D,
                          fullWidth: !1,
                          className: r()(M.ctaButton, L ? M.ctaButtonSigned : null),
                          children: (0, n.jsxs)('div', {
                              className: M.ctaButtonInner,
                              children: [
                                  (0, n.jsx)(c.Text, {
                                      color: 'currentColor',
                                      variant: 'text-md/medium',
                                      children: H.intl.string(H.t.aYmu19)
                                  }),
                                  (0, n.jsx)(c.ArrowLargeRightIcon, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: null == D ? void 0 : (0, j.$0)(D).hex()
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
}
