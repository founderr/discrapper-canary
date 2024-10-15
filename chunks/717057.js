t.r(l),
    t.d(l, {
        default: function () {
            return L;
        }
    }),
    t(47120);
var a = t(735250),
    s = t(470079),
    n = t(120356),
    i = t.n(n),
    r = t(913527),
    o = t.n(r),
    c = t(442837),
    d = t(481060),
    u = t(410030),
    x = t(313201),
    m = t(271383),
    h = t(430824),
    g = t(594174),
    C = t(709054),
    v = t(931240),
    f = t(645896),
    j = t(603368),
    N = t(532490),
    p = t(380365),
    _ = t(979264),
    T = t(620929),
    E = t(284019),
    S = t(308083),
    Z = t(981631),
    M = t(689938),
    A = t(429982);
function I(e) {
    var l;
    let { guildId: t, clanInfo: n, signed: r, onSignCharter: c } = e,
        u = s.useMemo(() => {
            let e = C.default.extractTimestamp(t);
            return o()(new Date(e)).format('MMMM YYYY');
        }, [t]),
        x = s.useMemo(() => new Set(n.games), [n.games]);
    return (0, a.jsx)(N.Z, {
        guildId: t,
        signHintPosition: N.p.LEFT,
        primaryColor: null === (l = n.branding) || void 0 === l ? void 0 : l.primaryColor,
        signed: r,
        onSignCharter: c,
        children: (0, a.jsxs)('div', {
            className: A.scrollContentsContainer,
            children: [
                (0, a.jsx)(_.aG, {
                    guildId: t,
                    clanBadge: n.badge.imageHash,
                    clanTag: n.tag,
                    textVariant: 'heading-lg/semibold',
                    badgeSize: S.NC.SIZE_24,
                    className: A.clanTagChiplet
                }),
                (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)(d.Heading, {
                            variant: 'heading-xxl/normal',
                            color: 'text-muted',
                            className: A.charterHeaderText,
                            children: M.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
                        }),
                        (0, a.jsx)(d.Heading, {
                            variant: 'heading-xxl/bold',
                            color: 'interactive-active',
                            className: A.charterHeaderText,
                            children: n.name
                        }),
                        (0, a.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            className: A.establishedDate,
                            children: M.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({ date: u })
                        })
                    ]
                }),
                (0, a.jsx)(T.p, {
                    applicationIds: x,
                    playstyle: n.playstyle,
                    className: i()(A.charterBodyText, A.gameSection)
                }),
                (0, a.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: A.charterBodyText,
                    children: M.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
                })
            ]
        })
    });
}
function L(e) {
    var l;
    let { guildId: t, onClose: n, onAccept: r, ...o } = e,
        C = (0, x.Dt)(),
        N = (0, f.Cc)(t),
        _ = (0, f.E8)(t),
        [T, S] = s.useState(!0),
        [L, y] = s.useState(!1),
        H = s.useCallback(() => {
            r(), n();
        }, [r, n]);
    s.useEffect(() => {
        null == N && !_ && H();
    }, [N, H, _]);
    let V = s.useCallback(() => {
            T && (0, v.nE)(t, T, Z.Sbl.CREATE_JOIN_GUILD_MODAL), H();
        }, [t, H, T]),
        w = (0, c.e7)([h.Z], () => h.Z.getGuild(t)),
        R = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
        b = (0, c.e7)([m.ZP], () => (null != R ? m.ZP.getMember(t, R.id) : null)),
        P = (0, u.ZP)(),
        U = (0, j.nP)(null == N ? void 0 : null === (l = N.branding) || void 0 === l ? void 0 : l.primaryColor, [d.tokens.colors.BG_BRAND, 0.7]),
        B = d.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: P,
            saturation: 1
        }).hex(),
        G = (0, j.nj)(U, B, 'top center');
    return null == w || null == R || null == b || null == N
        ? null
        : (0, a.jsx)(d.ModalRoot, {
              ...o,
              transitionState: o.transitionState,
              'aria-labelledby': C,
              className: A.modal,
              size: d.ModalSize.DYNAMIC,
              children: (0, a.jsxs)(d.ModalContent, {
                  className: A.content,
                  style: G,
                  children: [
                      (0, a.jsxs)('div', {
                          className: A.infoSide,
                          children: [
                              (0, a.jsxs)('div', {
                                  className: A.titlesContainer,
                                  children: [
                                      (0, a.jsx)('div', {
                                          className: A.title,
                                          children: (0, a.jsx)(d.Heading, {
                                              variant: 'heading-xxl/medium',
                                              children: M.Z.Messages.CLAN_JOIN_SUCCESS_TITLE.format({ name: w.name })
                                          })
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          className: A.subtitle,
                                          variant: 'text-md/normal',
                                          children: M.Z.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
                                      })
                                  ]
                              }),
                              (0, a.jsx)(p.Z, {
                                  guildId: t,
                                  isTagAdopted: T,
                                  onChangeUseTag: S
                              })
                          ]
                      }),
                      (0, a.jsx)('div', {
                          className: A.scrollMainContainer,
                          children: (0, a.jsx)(I, {
                              guildId: t,
                              clanInfo: N,
                              signed: L,
                              onSignCharter: y
                          })
                      }),
                      (0, a.jsx)(E.Z, {
                          onClick: V,
                          color: d.Button.Colors.BRAND,
                          themeColor: U,
                          fullWidth: !1,
                          className: i()(A.ctaButton, L ? A.ctaButtonSigned : null),
                          children: (0, a.jsxs)('div', {
                              className: A.ctaButtonInner,
                              children: [
                                  (0, a.jsx)(d.Text, {
                                      color: 'currentColor',
                                      variant: 'text-md/medium',
                                      children: M.Z.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
                                  }),
                                  (0, a.jsx)(d.ArrowLargeRightIcon, {
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      color: null == U ? void 0 : (0, j.$0)(U).hex()
                                  })
                              ]
                          })
                      })
                  ]
              })
          });
}
