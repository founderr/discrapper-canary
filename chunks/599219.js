s.r(t),
    s.d(t, {
        default: function () {
            return R;
        }
    }),
    s(47120);
var a = s(735250),
    n = s(470079),
    o = s(120356),
    l = s.n(o),
    r = s(990547),
    i = s(442837),
    c = s(481060),
    d = s(393238),
    u = s(600164),
    _ = s(313201),
    f = s(215292),
    E = s(382086),
    m = s(996453),
    p = s(446706),
    h = s(594174),
    N = s(626135),
    T = s(179645),
    A = s(436046),
    x = s(963209),
    I = s(436457),
    C = s(877758),
    b = s(701476),
    M = s(785997),
    v = s(981631),
    G = s(834891),
    O = s(675999),
    j = s(689938),
    S = s(456265);
function R(e) {
    let t = (0, _.Dt)(),
        { onSlideChange: s, ...o } = e,
        { onClose: R } = o,
        [Z, g] = n.useState(!1),
        D = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        L = null != D && null == D.nsfwAllowed,
        [F, y] = n.useState(L ? M.F.AGE_GATE : M.F.CHOOSE_TEMPLATE),
        [B, U] = n.useState(null);
    n.useEffect(() => {
        s(Z ? M.F.COMPLETE : F);
    }, [s, F, Z]);
    let [k, P] = n.useState(null),
        [w, H] = n.useState(null),
        [Y, V] = n.useState(!1),
        z = (0, i.e7)([T.Z], () => T.Z.getType() === b.M5.INVITE_UNCLAIMED),
        J = n.useCallback(
            (e) => {
                H(e),
                    y(M.F.CREATION_INTENT),
                    N.default.track(v.rMx.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    });
            },
            [H, y]
        ),
        { content: W, footer: K } = (0, E.v)({
            hasFooter: !1,
            onBack: () => {
                H(null), y(M.F.CHOOSE_TEMPLATE);
            },
            onCreationIntentChosen: (e) => {
                V(e === O.lr.COMMUNITY), y(M.F.CUSTOMIZE_GUILD);
            }
        }),
        { content: X, footer: q } = (0, m.G)({
            guildTemplate: w,
            titleClassName: S.customizeGuildTitle,
            hasFooter: !1,
            onGuildCreated: (e) => {
                P(e), (null == w ? void 0 : w.id) === G.l.CREATE ? y(M.F.CHANNEL_PROMPT) : g(!0);
            },
            onBack: () => {
                y(M.F.CREATION_INTENT);
            },
            isSlideReady: B === M.F.CUSTOMIZE_GUILD,
            isCommunity: Y
        }),
        { content: Q, footer: $ } = (0, f.F)({
            createdGuildId: k,
            hasFooter: !1,
            onChannelPromptCompleted: () => {
                g(!0);
            },
            isSlideReady: B === M.F.CHANNEL_PROMPT
        }),
        { content: ee, footer: et } = (0, I.Z)({
            onBack: () => y(M.F.CHOOSE_TEMPLATE),
            onComplete: () => {
                R();
            },
            onConnect: R,
            isSlideReady: B === M.F.JOIN_GUILD
        }),
        es = null;
    switch (F) {
        case M.F.CUSTOMIZE_GUILD:
            es = q;
            break;
        case M.F.CHANNEL_PROMPT:
            es = $;
            break;
        case M.F.JOIN_GUILD:
            es = et;
            break;
        case M.F.CREATION_INTENT:
            es = K;
    }
    let { ref: ea, width: en } = (0, d.Z)();
    if (Z)
        return (0, a.jsx)(c.ModalRoot, {
            ...o,
            size: c.ModalSize.MEDIUM,
            className: l()(S.modal, S.completed),
            'aria-labelledby': t,
            children: (0, a.jsx)(x.Z, { onComplete: R })
        });
    let eo = { impression_group: r.ImpressionGroups.GUILD_ADD_NUF };
    return (0, a.jsxs)(c.ModalRoot, {
        ...o,
        size: c.ModalSize.MEDIUM,
        className: S.modal,
        'aria-labelledby': t,
        children: [
            (0, a.jsx)('div', {
                className: S.sidebar,
                children: (0, a.jsx)(C.Z, { step: F })
            }),
            (0, a.jsx)(c.ThemeProvider, {
                theme: v.BRd.LIGHT,
                children: (e) =>
                    (0, a.jsxs)('div', {
                        className: l()(S.content, e),
                        ref: ea,
                        children: [
                            (0, a.jsx)('div', {
                                className: S.slidesContainer,
                                children: (0, a.jsxs)(c.Slides, {
                                    activeSlide: F,
                                    onSlideReady: (e) => U(e),
                                    centered: !1,
                                    width: en,
                                    children: [
                                        (0, a.jsx)(c.Slide, {
                                            id: M.F.AGE_GATE,
                                            children: (0, a.jsx)('div', {
                                                className: S.container,
                                                children: (0, a.jsx)(A.Z, {
                                                    onComplete: () => {
                                                        z ? R() : y(M.F.CHOOSE_TEMPLATE);
                                                    },
                                                    onClose: R
                                                })
                                            })
                                        }),
                                        (0, a.jsx)(c.Slide, {
                                            id: M.F.CHOOSE_TEMPLATE,
                                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                            impressionProperties: eo,
                                            children: (0, a.jsx)('div', {
                                                className: l()(S.container, S.shortFooter),
                                                children: (0, a.jsx)(p.Z, {
                                                    className: S.templates,
                                                    onChooseTemplate: J,
                                                    isNewUser: !0
                                                })
                                            })
                                        }),
                                        (0, a.jsx)(c.Slide, {
                                            id: M.F.CREATION_INTENT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                            impressionProperties: eo,
                                            children: (0, a.jsx)('div', {
                                                className: l()(S.container, S.standardFooter),
                                                children: W
                                            })
                                        }),
                                        (0, a.jsx)(c.Slide, {
                                            id: M.F.CUSTOMIZE_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                            impressionProperties: eo,
                                            children: (0, a.jsx)('div', {
                                                className: l()(S.container, S.standardFooter),
                                                children: X
                                            })
                                        }),
                                        (0, a.jsx)(c.Slide, {
                                            id: M.F.CHANNEL_PROMPT,
                                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                            impressionProperties: eo,
                                            children: (0, a.jsx)('div', {
                                                className: l()(S.container, S.standardFooter),
                                                children: Q
                                            })
                                        }),
                                        (0, a.jsx)(c.Slide, {
                                            id: M.F.JOIN_GUILD,
                                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                            impressionProperties: eo,
                                            children: (0, a.jsx)('div', {
                                                className: l()(S.container, S.standardFooter),
                                                children: ee
                                            })
                                        })
                                    ]
                                })
                            }),
                            F !== M.F.AGE_GATE
                                ? (0, a.jsx)(c.ModalCloseButton, {
                                      onClick: R,
                                      className: S.closeButton
                                  })
                                : null,
                            F === M.F.CHOOSE_TEMPLATE
                                ? (0, a.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: l()(S.footer, S.join),
                                      children: (0, a.jsx)(c.Anchor, {
                                          className: S.joinCTA,
                                          onClick: () => {
                                              y(M.F.JOIN_GUILD);
                                          },
                                          children: (0, a.jsxs)(c.Text, {
                                              variant: 'text-sm/medium',
                                              className: S.joinCTA,
                                              children: [j.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY, ' ', j.Z.Messages.JOIN_SERVER_BUTTON_CTA]
                                          })
                                      })
                                  })
                                : null,
                            null != es
                                ? (0, a.jsx)(c.ModalFooter, {
                                      justify: u.Z.Justify.BETWEEN,
                                      className: S.footer,
                                      children: es
                                  })
                                : null
                        ]
                    })
            })
        ]
    });
}
