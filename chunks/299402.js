n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var o = n(735250),
    l = n(470079),
    a = n(512722),
    i = n.n(a),
    r = n(990547),
    s = n(481060),
    c = n(110924),
    u = n(626135),
    _ = n(215292),
    d = n(382086),
    m = n(996453),
    p = n(446706),
    I = n(867581),
    N = n(675999),
    f = n(981631),
    E = n(870863);
function T(e) {
    let { transitionState: t, initialSlide: n = N._m.GUILD_TEMPLATES, onSuccess: a, onClose: T, onSlideChange: C, hasJoinButton: S } = e,
        [L, A] = l.useState(n),
        D = (0, c.Z)(L),
        [M, O] = l.useState(null),
        [U, h] = l.useState(null),
        [x, g] = l.useState(null),
        [G, R] = l.useState(!1);
    l.useEffect(() => {
        A(n);
    }, [A, n]),
        l.useEffect(() => {
            L !== D && C(L);
        }, [C, L, D]);
    let w = l.useCallback((e) => {
            A(N._m.CREATION_INTENT),
                h(e),
                u.default.track(f.rMx.GUILD_TEMPLATE_SELECTED, {
                    template_name: e.id,
                    template_code: e.code
                });
        }, []),
        v = l.useCallback((e) => {
            R(e === N.lr.COMMUNITY), A(N._m.CUSTOMIZE_GUILD);
        }, []),
        b = l.useCallback(() => A(N._m.JOIN_GUILD), [A]),
        k = l.useCallback(() => {
            if (L === N._m.CUSTOMIZE_GUILD) {
                A(N._m.CREATION_INTENT);
                return;
            }
            A(N._m.GUILD_TEMPLATES), h(null);
        }, [L]),
        Z = l.useCallback(
            (e) => {
                g(e), a(e);
            },
            [a, g]
        ),
        j = l.useCallback(() => {
            i()(null != x, 'handleSuccess called before onGuildCreated'), a(x);
        }, [a, x]),
        P = { impression_group: r.ImpressionGroups.GUILD_ADD_FLOW };
    return (0, o.jsx)('div', {
        children: (0, o.jsx)(s.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: (0, o.jsx)('div', {
                className: E.container,
                children: (0, o.jsxs)(s.Slides, {
                    activeSlide: L,
                    width: 440,
                    onSlideReady: (e) => O(e),
                    children: [
                        (0, o.jsx)(s.Slide, {
                            id: N._m.GUILD_TEMPLATES,
                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: P,
                            children: (0, o.jsx)(p.Z, {
                                isNewUser: !1,
                                onJoin: S ? b : void 0,
                                onChooseTemplate: w,
                                onClose: T
                            })
                        }),
                        (0, o.jsx)(s.Slide, {
                            id: N._m.CREATION_INTENT,
                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: P,
                            children: (0, o.jsx)(d.Z, {
                                onClose: T,
                                onBack: k,
                                onCreationIntentChosen: v
                            })
                        }),
                        (0, o.jsx)(s.Slide, {
                            id: N._m.CUSTOMIZE_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: P,
                            children: (0, o.jsx)(m.Z, {
                                guildTemplate: U,
                                onGuildCreated: Z,
                                onClose: T,
                                onBack: k,
                                isSlideReady: M === N._m.CUSTOMIZE_GUILD,
                                isCommunity: G
                            })
                        }),
                        (0, o.jsx)(s.Slide, {
                            id: N._m.CHANNEL_PROMPT,
                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: P,
                            children: (0, o.jsx)(_.Z, {
                                createdGuildId: x,
                                onClose: T,
                                onChannelPromptCompleted: j,
                                isSlideReady: M === N._m.CHANNEL_PROMPT
                            })
                        }),
                        (0, o.jsx)(s.Slide, {
                            id: N._m.JOIN_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: P,
                            children: (0, o.jsx)(I.Z, {
                                onBack: k,
                                onClose: T,
                                isSlideReady: M === N._m.JOIN_GUILD
                            })
                        })
                    ]
                })
            })
        })
    });
}
