l.r(t),
    l.d(t, {
        default: function () {
            return _;
        }
    }),
    l(47120);
var n = l(200651),
    i = l(192379),
    a = l(120356),
    s = l.n(a),
    r = l(913527),
    o = l.n(r),
    c = l(442837),
    d = l(481060),
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
    b = l(429982);
function M(e) {
    var t;
    let { guildId: l, clanInfo: a, signed: r, onSignCharter: c } = e,
        u = i.useMemo(() => {
            let e = v.default.extractTimestamp(l);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [l]),
        x = i.useMemo(() => new Set(a.games), [a.games]);
    return (0, n.jsx)(p.Z, {
        guildId: l,
        signHintPosition: p.p.LEFT,
        primaryColor: null === (t = a.branding) || void 0 === t ? void 0 : t.primaryColor,
        signed: r,
        onSignCharter: c,
        children: (0, n.jsxs)('div', {
            className: b.scrollContentsContainer,
            children: [
                (0, n.jsx)(Z.aG, {
                    guildId: l,
                    clanBadge: a.badge.imageHash,
                    clanTag: a.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: y.NC.SIZE_24,
                    className: b.clanTagChiplet
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(d.Heading, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: b.charterHeaderText,
                            children: H.intl.string(H.t['85S0//'])
                        }),
                        (0, n.jsx)(d.Heading, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: b.charterHeaderText,
                            children: a.name
                        }),
                        (0, n.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: b.establishedDate,
                            children: H.intl.format(H.t['7RpSYW'], { date: u })
                        })
                    ]
                }),
                (0, n.jsx)(T.p, {
                    applicationIds: x,
                    playstyle: a.playstyle,
                    className: s()(b.charterBodyText, b.gameSection)
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: b.charterBodyText,
                    children: H.intl.string(H.t['YDTd9/'])
                })
            ]
        })
    });
}
function _(e) {
    var t;
    let { guildId: l, onClose: a, onAccept: r, ...o } = e,
        v = (0, x.Dt)(),
        p = (0, C.Cc)(l),
        Z = (0, C.E8)(l),
        [T, y] = i.useState(!0),
        [_, A] = i.useState(!1),
        B = i.useCallback(() => {
            r(), a();
        }, [r, a]);
    i.useEffect(() => {
        null == p && !Z && B();
    }, [p, B, Z]);
    let I = i.useCallback(() => {
            T && (0, f.nE)(l, T, w.Sbl.CREATE_JOIN_GUILD_MODAL), B();
        }, [l, B, T]),
        k = (0, c.e7)([h.Z], () => h.Z.getGuild(l)),
        R = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        E = (0, c.e7)([m.ZP], () => (null != R ? m.ZP.getMember(l, R.id) : null)),
        D = (0, u.ZP)(),
        G = (0, j.nP)(null == p ? void 0 : null === (t = p.branding) || void 0 === t ? void 0 : t.primaryColor, [d.tokens.colors.BG_BRAND, 0.7]),
        P = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: D,
            saturation: 1
        }).hex(),
        Y = (0, j.nj)(G, P, 'top center');
    return null == k || null == R || null == E || null == p
        ? null
        : (0, n.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              'aria-labelledby': v,
              className: b.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, n.jsxs)(d.ModalContent, {
                  className: b.content,
                  style: Y,
                  children: [
                      (0, n.jsxs)('div', {
                          className: b.infoSide,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: b.titlesContainer,
                                  children: [
                                      (0, n.jsx)('div', {
                                          className: b.title,
                                          children: (0, n.jsx)(d.Heading, {
                                              variant: 'heading-xxl/medium',
                                              children: H.intl.format(H.t.orbR8f, { name: k.name })
                                          })
                                      }),
                                      (0, n.jsx)(d.Text, {
                                          className: b.subtitle,
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
                          className: b.scrollMainContainer,
                          children: (0, n.jsx)(M, {
                              guildId: l,
                              clanInfo: p,
                              signed: _,
                              onSignCharter: A
                          })
                      }),
                      (0, n.jsx)(S.Z, {
                          onClick: I,
                          color: d.Button.Colors.BRAND,
                          themeColor: G,
                          fullWidth: !1,
                          className: s()(b.ctaButton, _ ? b.ctaButtonSigned : null),
                          children: (0, n.jsxs)('div', {
                              className: b.ctaButtonInner,
                              children: [
                                  (0, n.jsx)(d.Text, {
                                      color: 'currentColor',
                                      variant: 'text-md/medium',
                                      children: H.intl.string(H.t.aYmu19)
                                  }),
                                  (0, n.jsx)(d.ArrowLargeRightIcon, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: null == G ? void 0 : (0, j.$0)(G).hex()
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
}
