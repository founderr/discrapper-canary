i.r(t), i(47120);
var s = i(200651),
    a = i(192379),
    n = i(442837),
    r = i(481060),
    l = i(367907),
    o = i(313201),
    d = i(456268),
    c = i(416162),
    m = i(434404),
    u = i(999382),
    x = i(449543),
    g = i(681518),
    h = i(627573),
    p = i(814008),
    v = i(259674),
    f = i(981631),
    N = i(128449),
    T = i(388032),
    j = i(89388),
    C = i(438825);
t.default = (e) => {
    let { transitionState: t, onClose: I } = e,
        { guild: S, guildMetadata: b } = (0, n.cj)([u.Z], () => u.Z.getProps()),
        E = (0, o.Dt)(),
        [_, y] = a.useState(!1),
        [k, R] = a.useState(0),
        [F, A] = a.useState(!1);
    if (
        (a.useEffect(() => {
            l.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, { type: f.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
        }, []),
        null == S)
    )
        return null;
    let w = (0, s.jsx)(g.Z, {
            guild: S,
            headerId: E
        }),
        D = (0, s.jsx)(x.Z, {
            guild: S,
            guildMetadata: b,
            headerId: E
        }),
        P = (0, s.jsx)(p.Z, {
            guild: S,
            guildMetadata: b,
            headerId: E
        }),
        Z = (0, s.jsx)(h.Z, {
            guild: S,
            headerId: E,
            onAgreedChange: A
        }),
        O = (0, s.jsx)('img', {
            alt: '',
            src: C,
            className: j.footerImage,
            width: 240
        }),
        M = async () => {
            if (0 === k) {
                y(!0);
                try {
                    await m.Z.saveGuild(
                        S.id,
                        { description: S.description },
                        {
                            isForDiscovery: !0,
                            throwErr: !0
                        }
                    ),
                        R(k + 1),
                        (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, S.id);
                } catch (e) {}
            } else if (1 === k) R(k + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, S.id);
            else if (2 === k) {
                y(!0);
                try {
                    await (0, d.Vv)({
                        guildId: S.id,
                        primaryCategoryId: b.primaryCategoryId,
                        keywords: b.keywords,
                        emojiDiscoverabilityEnabled: b.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: b.partnerActionedTimestamp,
                        partnerApplicationTimestamp: b.partnerApplicationTimestamp,
                        isPublished: b.isPublished,
                        reasonsToJoin: b.reasonsToJoin,
                        socialLinks: b.socialLinks,
                        about: b.about
                    }),
                        R(k + 1),
                        (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, S.id);
                } catch (e) {}
            }
            y(!1);
        },
        L = [
            {
                modalContent: w,
                disableNextStep: null == S.description,
                overviewTitle: T.intl.string(T.t.RHP0kJ)
            },
            {
                modalContent: D,
                disableNextStep: b.primaryCategoryId === N.o3 || null == b.primaryCategoryId,
                overviewTitle: T.intl.string(T.t.Rv9An5)
            },
            {
                modalContent: P,
                disableNextStep: 0 === b.keywords.length,
                overviewTitle: T.intl.string(T.t['0PJZXl'])
            },
            {
                modalContent: Z,
                disableNextStep: !F,
                overviewTitle: T.intl.string(T.t.Q8OFNz)
            }
        ];
    return (0, s.jsx)(c.Z, {
        stepData: L,
        title: T.intl.string(T.t.uyuIen),
        transitionState: t,
        onClose: I,
        completeButtonText: T.intl.string(T.t.wYi2lJ),
        onNextPressed: M,
        onPrevPressed: () => {
            R(k - 1);
        },
        forceStep: k,
        onComplete: () => {
            let e = S.features;
            !S.hasFeature(f.oNc.DISCOVERABLE) && e.add(f.oNc.DISCOVERABLE),
                m.Z.saveGuild(S.id, {
                    features: e,
                    description: S.description
                }),
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await i.e('263').then(i.bind(i, 477520));
                    return (t) =>
                        (0, s.jsx)(e, {
                            ...t,
                            guild: S
                        });
                });
        },
        overviewFooter: O,
        submitting: _,
        sequencerClassName: j.container
    });
};
