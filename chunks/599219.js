n.r(t),
    n.d(t, {
        default: function () {
            return F;
        }
    }),
    n(47120);
var s = n(200651),
    a = n(192379),
    o = n(120356),
    i = n.n(o),
    l = n(990547),
    r = n(442837),
    c = n(481060),
    d = n(393238),
    u = n(600164),
    f = n(313201),
    _ = n(215292),
    p = n(382086),
    m = n(996453),
    h = n(446706),
    E = n(594174),
    x = n(626135),
    N = n(179645),
    T = n(436046),
    A = n(963209),
    C = n(436457),
    b = n(877758),
    I = n(701476),
    v = n(785997),
    j = n(981631),
    g = n(834891),
    G = n(675999),
    y = n(388032),
    S = n(456265);
function F(e) {
    let t = (0, f.Dt)(),
        { onSlideChange: n, ...o } = e,
        { onClose: F } = o,
        [O, M] = a.useState(!1),
        D = (0, r.e7)([E.default], () => E.default.getCurrentUser()),
        L = null != D && null == D.nsfwAllowed,
        [k, Z] = a.useState(L ? v.F.AGE_GATE : v.F.CHOOSE_TEMPLATE),
        [R, B] = a.useState(null);
    a.useEffect(() => {
        n(O ? v.F.COMPLETE : k);
    }, [n, k, O]);
    let [U, P] = a.useState(null),
        [w, H] = a.useState(null),
        [W, z] = a.useState(!1),
        Y = (0, r.e7)([N.Z], () => N.Z.getType() === I.M5.INVITE_UNCLAIMED),
        V = a.useCallback(
            (e) => {
                H(e),
                    Z(v.F.CREATION_INTENT),
                    x.default.track(j.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [H, Z]
        ),
        { content: J, footer: K } = (0, p.v)({
            hasFooter: !1,
            onBack: () => {
                H(null), Z(v.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                z(e === G.lr.COMMUNITY), Z(v.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: q, footer: X } = (0, m.G)({
            guildTemplate: w,
            titleClassName: S.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                P(e), (null == w ? void 0 : w.id) === g.l.CREATE ? Z(v.F.CHANNEL_PROMPT) : M(!0);
            },
            onBack: () => {
                Z(v.F.CREATION_INTENT);
            },
            isSlideReady: R === v.F.CUSTOMIZE_GUILD,
            isCommunity: W
        }),
        { content: Q, footer: $ } = (0, _.F)({
            createdGuildId: U,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                M(!0);
            },
            isSlideReady: R === v.F.CHANNEL_PROMPT
        }),
        { content: ee, footer: et } = (0, C.Z)({
            onBack: () => Z(v.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                F();
            },
            onConnect: F,
            isSlideReady: R === v.F.JOIN_GUILD
        }),
        en = null;
    switch (k) {
        case v.F.CUSTOMIZE_GUILD:
            en = X;
            break;
        case v.F.CHANNEL_PROMPT:
            en = $;
            break;
        case v.F.JOIN_GUILD:
            en = et;
            break;
        case v.F.CREATION_INTENT:
            en = K;
    }
    let { ref: es, width: ea } = (0, d.Z)();
    if (O)
        return (0, s.jsx)(c.ModalRoot, {
            ...o,
            size: c.ModalSize.MEDIUM,
            className: i()(S.modal, S.completed),
            'aria-labelledby': t,
            children: (0, s.jsx)(A.Z, { onComplete: F })
        });
    let eo = { impression_group: l.ImpressionGroups.GUILD_ADD_NUF };
    return (0, s.jsxs)(c.ModalRoot, {
        ...o,
        size: c.ModalSize.MEDIUM,
        className: S.modal,
        'aria-labelledby': t,
        children: [
            (0, s.jsx)('div', {
                className: S.sidebar,
                children: (0, s.jsx)(b.Z, { step: k })
            }),
            (0, s.jsx)(c.ThemeProvider, {
                theme: j.BRd.LIGHT,
                children: (e) =>
                    (0, s.jsxs)('div', {
                        className: i()(S.content, e),
                        ref: es,
                        children: [
                            (0, s.jsx)('div', {
                                className: S.slidesContainer,
                                children: (0, s.jsxs)(c.Slides, {
                                    activeSlide: k,
                                    onSlideReady: (e) => B(e),
                                    centered: !1,
                                    width: ea,
                                    children: [
                                        (0, s.jsx)(c.Slide, {
                                            id: v.F.AGE_GATE,
                                            children: (0, s.jsx)('div', {
                                                className: S.container,
                                                children: (0, s.jsx)(T.Z, {
                                                    onComplete: () => {
                                                        Y ? F() : Z(v.F.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: F
                                                })
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: v.F.CHOOSE_TEMPLATE,
                                            impressionName: l.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: i()(S.container, S.shortFooter),
                                                children: (0, s.jsx)(h.Z, {
                                                    className: S.templates,
                                                    onChooseTemplate: V,
                                                    isNewUser: !0
                                                })
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: v.F.CREATION_INTENT,
                                            impressionName: l.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: i()(S.container, S.standardFooter),
                                                children: J
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: v.F.CUSTOMIZE_GUILD,
                                            impressionName: l.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: i()(S.container, S.standardFooter),
                                                children: q
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: v.F.CHANNEL_PROMPT,
                                            impressionName: l.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: i()(S.container, S.standardFooter),
                                                children: Q
                                            })
                                        }),
                                        (0, s.jsx)(c.Slide, {
                                            id: v.F.JOIN_GUILD,
                                            impressionName: l.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: eo,
                                            children: (0, s.jsx)('div', {
                                                className: i()(S.container, S.standardFooter),
                                                children: ee
                                            })
                                        })
                                    ]
                                })
                            }),
                            k !== v.F.AGE_GATE
                                ? (0, s.jsx)(c.ModalCloseButton, {
                                      onClick: F,
                                      className: S.closeButton
                                  })
                                : null,
                            k === v.F.CHOOSE_TEMPLATE
                                ? (0, s.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: i()(S.footer, S.join),
                                      children: (0, s.jsx)(c.Anchor, {
                                          className: S.joinCTA,
                                          onClick: () => {
                                              Z(v.F.JOIN_GUILD);
                                          },
                                          children: (0, s.jsxs)(c.Text, {
                                              variant: 'text-sm/medium',
                                              className: S.joinCTA,
                                              children: [y.intl.string(y.t['N+Mi/f']), ' ', y.intl.string(y.t.yRjK4u)]
                                          })
                                      })
                                  })
                                : null,
                            null != en
                                ? (0, s.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: S.footer,
                                      children: en
                                  })
                                : null
                        ]
                    })
            })
        ]
    });
}
