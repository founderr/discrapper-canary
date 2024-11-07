i.r(t), i(47120);
var s = i(200651),
    a = i(192379),
    n = i(442837),
    r = i(481060),
    l = i(367907),
    o = i(313201),
    c = i(434404),
    d = i(999382),
    m = i(416162),
    u = i(296386),
    x = i(919947),
    g = i(506491),
    h = i(957783),
    p = i(753583),
    v = i(219369),
    f = i(731455),
    N = i(981631),
    b = i(388032),
    T = i(201221),
    j = i(438825);
t.default = (e) => {
    let { transitionState: t, onClose: C } = e,
        { guild: I, guildMetadata: S } = (0, n.cj)([d.Z], () => d.Z.getProps()),
        E = (0, o.Dt)(),
        [_, y] = a.useState(!1),
        [k, R] = a.useState(0),
        [F, A] = a.useState(!1);
    if (
        (a.useEffect(() => {
            l.ZP.trackWithMetadata(N.rMx.OPEN_MODAL, { type: N.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
        }, []),
        null == I)
    )
        return null;
    let w = (0, s.jsx)(g.Z, {
            guild: I,
            headerId: E
        }),
        D = (0, s.jsx)(x.Z, {
            guild: I,
            guildMetadata: S,
            headerId: E
        }),
        P = (0, s.jsx)(p.Z, {
            guild: I,
            guildMetadata: S,
            headerId: E
        }),
        Z = (0, s.jsx)(h.Z, {
            guild: I,
            headerId: E,
            onAgreedChange: A
        }),
        O = (0, s.jsx)('img', {
            alt: '',
            src: j,
            className: T.footerImage,
            width: 240
        }),
        M = async () => {
            if (0 === k) {
                y(!0);
                try {
                    await c.Z.saveGuild(
                        I.id,
                        { description: I.description },
                        {
                            isForDiscovery: !0,
                            throwErr: !0
                        }
                    ),
                        R(k + 1),
                        (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, I.id);
                } catch (e) {}
            } else if (1 === k) R(k + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, I.id);
            else if (2 === k) {
                y(!0);
                try {
                    await (0, u.Vv)({
                        guildId: I.id,
                        primaryCategoryId: S.primaryCategoryId,
                        keywords: S.keywords,
                        emojiDiscoverabilityEnabled: S.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: S.partnerActionedTimestamp,
                        partnerApplicationTimestamp: S.partnerApplicationTimestamp,
                        isPublished: S.isPublished,
                        reasonsToJoin: S.reasonsToJoin,
                        socialLinks: S.socialLinks,
                        about: S.about
                    }),
                        R(k + 1),
                        (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, I.id);
                } catch (e) {}
            }
            y(!1);
        },
        L = [
            {
                modalContent: w,
                disableNextStep: null == I.description,
                overviewTitle: b.intl.string(b.t.RHP0kJ)
            },
            {
                modalContent: D,
                disableNextStep: S.primaryCategoryId === f.o3 || null == S.primaryCategoryId,
                overviewTitle: b.intl.string(b.t.Rv9An5)
            },
            {
                modalContent: P,
                disableNextStep: 0 === S.keywords.length,
                overviewTitle: b.intl.string(b.t['0PJZXl'])
            },
            {
                modalContent: Z,
                disableNextStep: !F,
                overviewTitle: b.intl.string(b.t.Q8OFNz)
            }
        ];
    return (0, s.jsx)(m.Z, {
        stepData: L,
        title: b.intl.string(b.t.uyuIen),
        transitionState: t,
        onClose: C,
        completeButtonText: b.intl.string(b.t.wYi2lJ),
        onNextPressed: M,
        onPrevPressed: () => {
            R(k - 1);
        },
        forceStep: k,
        onComplete: () => {
            let e = I.features;
            !I.hasFeature(N.oNc.DISCOVERABLE) && e.add(N.oNc.DISCOVERABLE),
                c.Z.saveGuild(I.id, {
                    features: e,
                    description: I.description
                }),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await i.e('89069').then(i.bind(i, 646364));
                    return (t) =>
                        (0, s.jsx)(e, {
                            ...t,
                            guild: I
                        });
                });
        },
        overviewFooter: O,
        submitting: _,
        sequencerClassName: T.container
    });
};
