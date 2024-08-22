a.r(L),
    a.d(L, {
        default: function () {
            return e7;
        }
    }),
    a(47120),
    a(757143),
    a(653041);
var C,
    t,
    i,
    s,
    r = a(735250),
    n = a(470079),
    l = a(120356),
    o = a.n(l),
    H = a(716),
    c = a(266067),
    d = a(990547),
    V = a(442837),
    M = a(477690),
    Z = a(481060),
    _ = a(150063),
    E = a(393238),
    I = a(110924),
    h = a(315263),
    u = a(607070),
    p = a(100527),
    f = a(906732),
    T = a(213609),
    m = a(895924),
    g = a(216547),
    x = a(812206),
    N = a(70097),
    D = a(665149),
    A = a(706454),
    v = a(210887),
    S = a(592125),
    b = a(430824),
    w = a(771845),
    j = a(594174),
    R = a(517802),
    B = a(471731),
    O = a(626135),
    k = a(823379),
    P = a(5192),
    y = a(624138),
    F = a(792125),
    W = a(712092),
    G = a(507885),
    U = a(566620),
    Y = a(317381),
    K = a(379146),
    X = a(273003),
    J = a(754332),
    z = a(140863),
    Q = a(969345),
    q = a(257968),
    $ = a(127255),
    ee = a(361213),
    eL = a(542094),
    ea = a(778569),
    eC = a(840000),
    et = a(537789),
    ei = a(841547),
    es = a(239298),
    er = a(513202),
    en = a(884338),
    el = a(701488),
    eo = a(981631),
    eH = a(689938),
    ec = a(102615),
    ed = a(131454),
    eV = a(372065),
    eM = a(376226),
    eZ = a(785930),
    e_ = a(143824),
    eE = a(848366),
    eI = a(392381),
    eh = a(176890),
    eu = a(997074),
    ep = a(901924),
    ef = a(448096),
    eT = a(286557),
    em = a(358176),
    eg = a(610924),
    ex = a(326822),
    eN = a(797956),
    eD = a(612852),
    eA = a(369827);
let ev = 'celebrate-with-us',
    eS = ''.concat(eo.Z5c.ACTIVITIES, '#').concat(ev),
    eb = 'https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ',
    ew = 'https://discord.gg/discord-townhall',
    ej = 'https://discordmerch.com/dxcprod';
function eR() {
    var e, L;
    let { width: a, ref: C } = (0, E.Z)(),
        t = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
        i = (0, V.e7)([G.Z], () => G.Z.isAcknowledged(el.ES.FREE)),
        [s, l] = n.useState(!1),
        [d, M] = n.useState(!1),
        [I, h] = n.useState(!1),
        T = (0, c.k6)(),
        m = (0, c.TH)(),
        g = (0, V.e7)([v.Z], () => v.Z.getState().theme),
        [x] = n.useState((0, q.c)(G.Z) > 0),
        { analyticsLocations: A } = (0, f.ZP)([...(null !== (L = null == m ? void 0 : null === (e = m.state) || void 0 === e ? void 0 : e.analyticsLocations) && void 0 !== L ? L : []), p.Z.ACTIVITIES_PAGE]),
        S = n.useRef(new Date());
    return (
        n.useEffect(() => {
            setTimeout(() => {
                !i && W.Z(el.ES.FREE);
            }, 500);
        }, [i]),
        n.useEffect(() => {
            !i &&
                (setTimeout(() => {
                    l(!0);
                }, 1300),
                setTimeout(() => {
                    M(!0);
                }, 1500),
                setTimeout(() => {
                    h(!0);
                }, 1700));
        }, [i]),
        n.useEffect(
            () => (
                (0, _.Y)(eo.Z5c.ACTIVITIES),
                x &&
                    !A.includes(p.Z.ACTIVITIES_PAGE_NOTIFICATION_DOT) &&
                    T.replace(eo.Z5c.ACTIVITIES, {
                        analyticsLocations: [...A, p.Z.ACTIVITIES_PAGE_NOTIFICATION_DOT]
                    }),
                () => {
                    let e = S.current,
                        L = Math.ceil((new Date().getTime() - e.getTime()) / 1000);
                    O.default.track(eo.rMx.ROUTE_UNMOUNT, {
                        route: '/activities',
                        page_view_duration_s: L
                    });
                }
            ),
            [A, T, x]
        ),
        (0, r.jsx)(f.Gt, {
            value: A,
            children: (0, r.jsxs)('div', {
                className: ec.outerContainer,
                children: [
                    (0, r.jsxs)(D.ZP, {
                        children: [
                            (0, r.jsx)(R.Z, { className: o()(ec.activitiesBirthdayIcon, { [ec.activitiesBirthdayIconLight]: 'light' === g }) }),
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-md/semibold',
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE
                            })
                        ]
                    }),
                    (0, r.jsx)(Z.Scroller, {
                        className: ec.scroller,
                        children: (0, r.jsxs)('div', {
                            className: ec.innerContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: ec.heroFlipper,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(ec.heroFlipperInner, { [ec.heroFlipped]: i || t }),
                                            children: [
                                                (0, r.jsx)('img', {
                                                    src: 'light' === g ? ed : eV,
                                                    className: o()(ec.hero),
                                                    alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: o()(ec.heroFlipperBack, { [ec.heroFlipperBackLightMode]: 'light' === g }),
                                                    children: (0, r.jsx)(eB, {
                                                        containerRef: C,
                                                        width: a
                                                    })
                                                })
                                            ]
                                        }),
                                        !t && s
                                            ? (0, r.jsx)('div', {
                                                  className: ec.heroConfetti01Wrapper,
                                                  children: (0, r.jsx)(H.Z, { colors: eF })
                                              })
                                            : null,
                                        !t && d
                                            ? (0, r.jsx)('div', {
                                                  className: ec.heroConfetti02Wrapper,
                                                  children: (0, r.jsx)(H.Z, { colors: eF })
                                              })
                                            : null,
                                        !t && I
                                            ? (0, r.jsx)('div', {
                                                  className: ec.heroConfetti03Wrapper,
                                                  children: (0, r.jsx)(H.Z, { colors: eF })
                                              })
                                            : null
                                    ]
                                }),
                                null != a && a < 660
                                    ? (0, r.jsx)(N.Z, {
                                          autoPlay: !0,
                                          muted: !0,
                                          src: eM,
                                          loop: !0,
                                          className: ec.freeForeverBreakpointVideo,
                                          controls: t
                                      })
                                    : null,
                                (0, r.jsx)(eO, {}),
                                (0, r.jsx)(eW, {}),
                                (0, r.jsx)(ez, {}),
                                (0, r.jsx)(eq, {}),
                                (0, r.jsx)(e6, {}),
                                (0, r.jsx)(e4, {})
                            ]
                        })
                    })
                ]
            })
        })
    );
}
function eB(e) {
    let { width: L, containerRef: a } = e,
        C = (0, V.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: ec.freeForeverContainer,
        ref: a,
        children: [
            (0, r.jsx)('div', {
                className: ec.freeForeverLeft,
                children: (0, r.jsxs)('div', {
                    className: ec.freeForeverText,
                    children: [
                        (0, r.jsx)(B.Z, {
                            className: o()(ec.freeForeverLogo, {
                                [ec.freeForeverLogoMedium]: null != L && L < 1000,
                                [ec.freeForeverLogoSmall]: null != L && L < 480
                            })
                        }),
                        (0, r.jsx)(Z.Heading, {
                            variant: null == L || L < 480 ? 'heading-sm/bold' : L < 1000 ? 'display-sm' : 'display-md',
                            children: eH.Z.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_TITLE
                        }),
                        (0, r.jsx)(Z.Text, {
                            variant: null == L || L < 480 ? 'text-sm/medium' : L < 1000 ? 'text-md/medium' : 'text-lg/medium',
                            children: eH.Z.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_DESCRIPTION
                        })
                    ]
                })
            }),
            null != L && L > 660
                ? (0, r.jsx)('div', {
                      className: ec.freeForeverRight,
                      children: (0, r.jsx)(N.Z, {
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          src: eM,
                          poster: eZ,
                          className: ec.freeForeverVideo,
                          controls: C
                      })
                  })
                : null
        ]
    });
}
function eO() {
    return (0, r.jsxs)('div', {
        className: ec.birthdayExplanationWrapper,
        children: [
            (0, r.jsx)('div', {
                className: ec.birthdayBalloonsContainer,
                children: (0, r.jsx)(eC.j, { className: o()(ec.birthdayExplanationBalloonsLeft, ec.balloon) })
            }),
            (0, r.jsx)(Z.Heading, {
                variant: 'heading-md/semibold',
                className: ec.birthdayExplanationText,
                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_HERO_TEXT_WITH_2_LINKS.format({
                    linkToBdayBlogPost: 'https://dis.gd/birthday',
                    linkToSurprises: (e) =>
                        (0, r.jsxs)(Z.Anchor, {
                            href: eS,
                            children: [
                                e,
                                (0, r.jsx)('img', {
                                    src: ef,
                                    className: ec.birthdayExplanationNitroIcon,
                                    alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
                                })
                            ]
                        })
                })
            }),
            (0, r.jsx)('div', {
                className: ec.birthdayBalloonsContainer,
                children: (0, r.jsx)(eC.j, {
                    className: o()(ec.birthdayExplanationBalloonsRight, ec.balloon),
                    flipX: !0
                })
            })
        ]
    });
}
let ek = 'whats-new',
    eP = (0, y.Mg)(M.Z.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
    ey = (0, y.Mg)(M.Z.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN),
    eF = [Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_BLUE.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_GREEN.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PINK.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PURPLE.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_YELLOW.css];
function eW() {
    let { enabled: e } = K.q.useExperiment({ location: 'd72ecf_2' }),
        { enabled: L } = X.q.useExperiment({ location: 'd72ecf_3' }),
        { enabled: a } = z.u.useExperiment({ location: 'd72ecf_4' }),
        { enabled: C } = J.m.useExperiment({ location: 'd72ecf_5' }),
        t = n.useMemo(() => {
            let t = [];
            return (
                t.push({
                    id: el.ES.DISCORD_TURNS_8,
                    title: eH.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_TITLE,
                    content: (0, r.jsx)(Z.Text, {
                        variant: 'text-sm/normal',
                        className: ec.whatsNewDescription,
                        children: eH.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_DESCRIPTION
                    }),
                    imgUrl: ex,
                    imgAlt: eH.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_IMG_ALT,
                    link: void 0,
                    isAppLink: !1,
                    cardImgUrl: e_,
                    revealDate: new Date('May 15, 2023 17:00:00'),
                    enabled: !0
                }),
                t.push({
                    id: el.ES.GDM_ACTIVITIES,
                    title: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_TITLE,
                    content: (0, r.jsx)(Z.Text, {
                        variant: 'text-sm/normal',
                        className: ec.whatsNewDescription,
                        children: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_DESCRIPTION
                    }),
                    imgUrl: eg,
                    imgAlt: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_IMG_ALT,
                    link: 'https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord#h_01GSX5FCYNMF5PCGKNNA6XFW29',
                    isAppLink: !1,
                    cardImgUrl: eE,
                    revealDate: new Date('May 15, 2023 17:00:00'),
                    enabled: e
                }),
                t.push({
                    id: el.ES.PUTT_PARTY,
                    title: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
                    content: (0, r.jsx)(Z.Text, {
                        variant: 'text-sm/normal',
                        className: ec.whatsNewDescription,
                        children: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
                    }),
                    imgUrl: eA,
                    imgAlt: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
                    link: eo.Z5c.ACTIVITY_DETAILS(el.f9),
                    isAppLink: !0,
                    cardImgUrl: eI,
                    revealDate: new Date('May 22, 2023 17:00:00'),
                    enabled: a
                }),
                t.push({
                    id: el.ES.JAMSPACE,
                    title: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
                    content: (0, r.jsx)(Z.Text, {
                        variant: 'text-sm/normal',
                        className: ec.whatsNewDescription,
                        children: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
                    }),
                    imgUrl: eN,
                    imgAlt: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
                    link: eo.Z5c.ACTIVITY_DETAILS(el.MO),
                    isAppLink: !0,
                    cardImgUrl: eh,
                    revealDate: new Date('May 30, 2023 17:00:00'),
                    enabled: L
                }),
                t.push({
                    id: el.ES.POKER,
                    title: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
                    content: (0, r.jsx)(Z.Text, {
                        variant: 'text-sm/normal',
                        className: ec.whatsNewDescription,
                        children: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
                    }),
                    imgUrl: eD,
                    imgAlt: eH.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
                    link: eo.Z5c.ACTIVITY_DETAILS(el.Zc),
                    isAppLink: !0,
                    cardImgUrl: eu,
                    revealDate: new Date('June 5, 2023 17:00:00'),
                    enabled: C
                }),
                t
            );
        }, [e, L, C, a]);
    return t.length <= 0
        ? null
        : (0, r.jsx)('div', {
              className: ec.whatsNew,
              children: (0, r.jsx)(g.Z, {
                  tileMargin: ey,
                  headerId: ek,
                  tileWidth: eP,
                  header: eH.Z.Messages.WHATS_NEW,
                  headerContainerClassName: ec.tileScrollerHeader,
                  scrollContainerClassName: ec.tileScrollerContainer,
                  children: (0, r.jsx)('ul', {
                      'aria-labelledby': ek,
                      className: ec.whatsNewItemsContainer,
                      children: t.map((e) => (0, r.jsx)(eG, { ...e }, e.id))
                  })
              })
          });
}
function eG(e) {
    let { imgUrl: L, imgAlt: a, title: C, content: t, link: i, isAppLink: s, id: l, cardImgUrl: c, revealDate: d, enabled: M } = e,
        _ = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
        E = (0, V.e7)([A.default], () => A.default.locale),
        { analyticsLocations: h } = (0, f.ZP)(p.Z.ACTIVITIES_PAGE_WHATS_NEW_TILE),
        [T, m] = n.useState(!1),
        g = (0, I.Z)(T),
        x = (0, V.e7)(
            [G.Z],
            () => {
                if (!M) return 0;
                let e = G.Z.isOpened(l);
                return l === el.ES.JAMSPACE ? (e || G.Z.isOpened(el.ES.JAMSPACE_OLD) ? 2 : 1) : e ? 2 : 1;
            },
            [M, l]
        );
    n.useEffect(() => {
        M && W.Z(l);
    }, [M, l]);
    let N = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Z.Text, {
                variant: 'text-sm/semibold',
                className: ec.whatsNewDate,
                children: new Intl.DateTimeFormat(E, { dateStyle: 'long' }).format(d)
            }),
            (0, r.jsxs)('div', {
                className: ec.whatsNewImageContainer,
                children: [
                    (0, r.jsx)('img', {
                        src: L,
                        className: ec.whatsNewImage,
                        alt: a
                    }),
                    (0, r.jsx)(Z.Text, {
                        variant: 'eyebrow',
                        className: ec.newTag,
                        children: eH.Z.Messages.NEW
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: ec.whatsNewTextArea,
                children: [
                    (0, r.jsx)(Z.Heading, {
                        variant: 'heading-md/bold',
                        className: ec.whatsNewDetailsHeader,
                        children: C
                    }),
                    t
                ]
            })
        ]
    });
    return (0, r.jsx)(f.Gt, {
        value: h,
        children: (0, r.jsxs)('div', {
            className: ec.flipCardOuter,
            children: [
                _ || 2 !== x || T || !g
                    ? null
                    : (0, r.jsx)('div', {
                          className: ec.flipCardConfetti,
                          children: (0, r.jsx)(H.Z, { colors: eF })
                      }),
                (0, r.jsx)(eU, {
                    openState: x,
                    link: i,
                    isAppLink: s,
                    onOpen: () => {
                        m(!0),
                            W.E(l),
                            O.default.track(eo.rMx.ACTIVITIES_WHATS_NEW_OPENED, { section_id: l }),
                            setTimeout(() => {
                                m(!1);
                            }, 500);
                    },
                    onCardContentClick: () => {
                        O.default.track(eo.rMx.ACTIVITIES_WHATS_NEW_CLICKED, { section_id: l });
                    }
                }),
                (0, r.jsxs)('div', {
                    className: o()(ec.flipCardInner, {
                        [ec.flipCardInnerFlipped]: 2 === x,
                        [ec.flipCardOpening]: T && !_,
                        [ec.flipCardInnerReducedMotion]: _
                    }),
                    children: [
                        (0, r.jsx)('div', {
                            className: ec.flipCardOpened,
                            children: (() => {
                                switch (x) {
                                    case 0:
                                    case 1:
                                        return (0, r.jsx)(Z.Text, {
                                            variant: 'text-md/medium',
                                            children: '( ͡\xB0 ͜ʖ ͡\xB0) https://discord.com/careers'
                                        });
                                    case 2:
                                        return (0, r.jsx)('div', {
                                            className: ec.whatsNewItemContainer,
                                            children: N
                                        });
                                    default:
                                        return null;
                                }
                            })()
                        }),
                        (0, r.jsxs)('div', {
                            className: ec.flipCardClosed,
                            children: [
                                (0, r.jsx)('img', {
                                    src: c,
                                    className: ec.flipCardClosedImg,
                                    alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_CARD_ALT
                                }),
                                (() => {
                                    switch (x) {
                                        case 0:
                                            return (0, r.jsx)(Z.Text, {
                                                variant: 'text-sm/semibold',
                                                className: ec.flipCardClosedText,
                                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_CLICK_TO_REVEAL_DATE.format({ revealDate: new Intl.DateTimeFormat(E).format(d) })
                                            });
                                        case 1:
                                            return (0, r.jsx)(Z.Text, {
                                                variant: 'text-sm/semibold',
                                                className: ec.flipCardText,
                                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({ revealDate: new Intl.DateTimeFormat(E).format(d) })
                                            });
                                        default:
                                            return null;
                                    }
                                })()
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function eU(e) {
    let { openState: L, link: a, isAppLink: C, onOpen: t, onCardContentClick: i } = e,
        { analyticsLocations: s } = (0, f.ZP)(),
        n = (0, V.e7)([u.Z], () => u.Z.useReducedMotion);
    switch (L) {
        case 0:
            return (0, r.jsx)('div', { className: o()(ec.clickableContainer, ec.noPointer, { [ec.clickableContainerReducedMotion]: n }) });
        case 1:
            return (0, r.jsx)(Z.Clickable, {
                'aria-label': eH.Z.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
                className: o()(ec.clickableContainer, { [ec.clickableContainerReducedMotion]: n }),
                onClick: t
            });
        case 2:
            if (null == a) return (0, r.jsx)('div', { className: o()(ec.clickableContainer, ec.noPointer, { [ec.clickableContainerReducedMotion]: n }) });
            if (C)
                return (0, r.jsx)(es.o, {
                    className: o()(ec.clickableContainer, { [ec.clickableContainerReducedMotion]: n }),
                    onClick: i,
                    to: {
                        pathname: a,
                        state: { analyticsLocations: s }
                    }
                });
            return (0, r.jsx)(Z.Clickable, {
                tag: 'a',
                href: a,
                target: '_blank',
                className: o()(ec.clickableContainer, { [ec.clickableContainerReducedMotion]: n }),
                onClick: i
            });
        default:
            return null;
    }
}
((i = C || (C = {}))[(i.LOCKED = 0)] = 'LOCKED'), (i[(i.UNLOCKED = 1)] = 'UNLOCKED'), (i[(i.OPENED = 2)] = 'OPENED');
let eY = 'happening-now',
    eK = (0, y.Mg)(M.Z.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH),
    eX = (0, y.Mg)(M.Z.ACTIVITIES_HOME_HAPPENING_NOW_GAP);
function eJ(e, L) {
    if (e.length !== L.length) return !1;
    for (let a = 0; a < e.length; a++) if (e[a].activityItem.application.id !== L[a].activityItem.application.id || e[a].channel.id !== L[a].channel.id || e[a].users.length !== L[a].users.length) return !1;
    return !0;
}
function ez() {
    let { analyticsLocations: e } = (0, f.ZP)(p.Z.ACTIVITIES_HAPPENING_NOW),
        L = (0, V.e7)(
            [Y.ZP, x.Z, S.Z, j.default, w.ZP],
            () => {
                let e = [],
                    L = j.default.getCurrentUser();
                if (null == L) return e;
                let a = Y.ZP.getShelfActivities(null),
                    C = a.map((e) => x.Z.getApplication(e.application_id)).filter(k.lm);
                return (
                    w.ZP.getFlattenedGuildIds().forEach((t) => {
                        Y.ZP.getEmbeddedActivitiesForGuild(t).forEach((t) => {
                            let i = S.Z.getChannel(t.channelId);
                            if (null == i || t.userIds.has(L.id)) return;
                            let s = (0, Q.Z)({
                                    activityConfigs: a,
                                    applicationId: t.applicationId,
                                    applications: C
                                }),
                                r = Array.from(t.userIds)
                                    .map((e) => j.default.getUser(e))
                                    .filter(k.lm);
                            null != s &&
                                e.push({
                                    activityItem: s,
                                    channel: i,
                                    users: r
                                });
                        });
                    }),
                    e
                );
            },
            [],
            eJ
        );
    return ((0, T.Z)(
        {
            type: d.ImpressionTypes.PANE,
            name: d.ImpressionNames.ACTIVITIES_HAPPENING_NOW,
            properties: { n_activities: L.length }
        },
        { trackOnInitialLoad: !0 }
    ),
    L.length <= 0)
        ? null
        : (0, r.jsx)(f.Gt, {
              value: e,
              children: (0, r.jsx)('div', {
                  className: ec.happeningNowContainer,
                  children: (0, r.jsx)(g.Z, {
                      tileMargin: eX,
                      headerId: eY,
                      tileWidth: eK,
                      header: eH.Z.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_TITLE,
                      subHeader: eH.Z.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_DESCRIPTION,
                      headerContainerClassName: ec.tileScrollerHeader,
                      scrollContainerClassName: ec.tileScrollerContainer,
                      children: (0, r.jsx)('ul', {
                          'aria-labelledby': eY,
                          className: ec.whatsNewItemsContainer,
                          children: L.map((e) => {
                              let { activityItem: L, channel: a, users: C } = e;
                              return (0, r.jsx)(
                                  eQ,
                                  {
                                      activityItem: L,
                                      channel: a,
                                      users: C
                                  },
                                  ''.concat(a.id).concat(L.application.id)
                              );
                          })
                      })
                  })
              })
          });
}
function eQ(e) {
    let { activityItem: L, channel: a, users: C } = e,
        t = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
        { imageBackground: i, onActivityItemSelected: s } = (0, eL.ZP)({
            activityItem: L,
            channel: a,
            guildId: a.guild_id,
            locationObject: {},
            embeddedActivitiesManager: er.Z,
            backgroundResolution: 512,
            commandOrigin: m.bB.ACTIVITIES_HOME
        }),
        n = P.ZP.getName(a.guild_id, a.id, null == C ? void 0 : C[0]);
    n = (0, y.aF)(n, 25);
    let l = (0, V.e7)([b.Z], () => {
        var e;
        return null === (e = b.Z.getGuild(a.guild_id)) || void 0 === e ? void 0 : e.name;
    });
    return (0, r.jsxs)(Z.Clickable, {
        onClick: s,
        className: o()((0, F.Q)(eo.BRd.DARK), ec.happeningNowCard, { [ec.happeningNowCardReducedMotion]: t }),
        children: [
            (0, r.jsx)('img', {
                src: i.url,
                alt: L.application.name,
                className: ec.happeningNowCardImg
            }),
            (0, r.jsxs)('div', {
                className: ec.happeningNowCardForeground,
                children: [
                    (0, r.jsx)(Z.Heading, {
                        variant: 'heading-lg/bold',
                        children: L.application.name
                    }),
                    (0, r.jsx)(en.Z, {
                        guildId: a.guild_id,
                        users: C,
                        max: 4,
                        className: ec.happeningNowAvatars
                    }),
                    (0, r.jsx)(Z.Text, {
                        className: ec.happeningNowAvatarNames,
                        variant: 'text-xs/normal',
                        children:
                            C.length > 1
                                ? eH.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                                      username: n,
                                      count: C.length - 1
                                  })
                                : eH.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: n })
                    }),
                    (0, r.jsx)(Z.Text, {
                        variant: 'text-md/medium',
                        className: o()(ec.happeningNowJoin, { [ec.happeningNowJoinReducedMotion]: t }),
                        children: eH.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
                    }),
                    null != l
                        ? (0, r.jsx)(Z.Text, {
                              variant: 'text-xs/medium',
                              className: ec.happeningNowChannelAndGuildName,
                              children: eH.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
                                  channelName: (0, y.aF)(a.name, 25),
                                  serverName: (0, y.aF)(l, 25)
                              })
                          })
                        : null
                ]
            })
        ]
    });
}
function eq() {
    let e = (0, $.Z)({ guildId: null });
    return (
        n.useEffect(() => {
            (0, U.w1)({ guildId: null });
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: ec.activityGridHeader,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-lg/bold',
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES
                            }),
                            (0, r.jsx)(Z.Text, {
                                variant: 'text-sm/medium',
                                className: ec.activityGridSubheader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES_SUBHEADER
                            })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: ec.activityGrid,
                    children: e.map((e) => (0, r.jsx)(e$, { activityItem: e }, e.application.id))
                })
            ]
        })
    );
}
function e$(e) {
    var L;
    let { activityItem: a } = e,
        { analyticsLocations: C } = (0, f.ZP)(),
        t = (0, ea.Z)({
            applicationId: a.application.id,
            size: 512
        }),
        i = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
        s = (null === (L = a.application.embeddedActivityConfig) || void 0 === L ? void 0 : L.activity_preview_video_asset_id) != null ? (0, ee.Z)(a.application.id, a.application.embeddedActivityConfig.activity_preview_video_asset_id) : null,
        [l, H] = n.useState(!1),
        [c, d] = n.useState(l);
    n.useEffect(() => {
        l && d(!0);
    }, [l]);
    let M = () => H(!0),
        _ = () => H(!1),
        E = null == a.application.maxParticipants || -1 === a.application.maxParticipants ? eH.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : eH.Z.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({ count: a.application.maxParticipants });
    return (0, r.jsxs)(es.o, {
        to: {
            pathname: eo.Z5c.ACTIVITY_DETAILS(a.application.id),
            state: { analyticsLocations: C }
        },
        className: o()(ec.activityCard, { [ec.activityCardReducedMotion]: i }),
        onMouseEnter: M,
        onFocus: M,
        onMouseLeave: _,
        onBlur: _,
        children: [
            (0, r.jsxs)('div', {
                className: ec.activityCardImageContainer,
                children: [
                    (0, r.jsx)('img', {
                        src: t.url,
                        alt: a.application.name,
                        className: ec.activityCardImage
                    }),
                    !i && null != s && c
                        ? (0, r.jsx)('div', {
                              className: o()(ec.video, { [ec.videoFadeOut]: !l }),
                              onAnimationEnd: () => (l ? null : d(!1)),
                              children: (0, r.jsx)(N.Z, {
                                  className: ec.video,
                                  src: s,
                                  loop: !0,
                                  autoPlay: !0,
                                  muted: !0
                              })
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: ec.activityCardDetails,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-xl/extrabold',
                                children: a.application.name
                            }),
                            (0, r.jsx)(Z.Text, {
                                variant: 'text-xs/semibold',
                                className: ec.activityCardParticipants,
                                children: E
                            })
                        ]
                    }),
                    a.application.tags.length > 0
                        ? (0, r.jsx)('div', {
                              className: ec.activityCardTagContainer,
                              children: a.application.tags.slice(0, 3).map((e) =>
                                  (0, r.jsx)(
                                      'div',
                                      {
                                          className: ec.activityCardTag,
                                          children: (0, r.jsx)(Z.Text, {
                                              variant: 'text-xs/semibold',
                                              children: e
                                          })
                                      },
                                      e
                                  )
                              )
                          })
                        : null,
                    (0, r.jsxs)('div', {
                        className: o()(ec.activityCardHoverHint, { [ec.activityCardHoverHintReducedMotion]: i }),
                        children: [
                            (0, r.jsx)(Z.Text, {
                                variant: 'text-sm/semibold',
                                children: eH.Z.Messages.LEARN_MORE
                            }),
                            (0, r.jsx)(Z.ChevronSmallRightIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function e6() {
    return (0, r.jsxs)('div', {
        className: ec.celebrateContainer,
        id: ev,
        children: [
            (0, r.jsx)(Z.Heading, {
                variant: 'heading-lg/bold',
                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_HOW_YOU_CAN_CELEBRATE_WITH_US
            }),
            (0, r.jsxs)('div', {
                className: ec.celebrateCardGrid,
                children: [
                    (0, r.jsxs)(Z.Clickable, {
                        tag: 'a',
                        href: eb,
                        target: '_blank',
                        className: ec.celebrateCardContainer,
                        onClick: () => O.default.track(eo.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, { section: 'share_nitro' }),
                        children: [
                            (0, r.jsx)('img', {
                                src: ef,
                                className: ec.celebrateNitroIcon,
                                alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
                            }),
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-lg/bold',
                                className: ec.celebrateCardHeader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_THE_GIFT_OF_NITRO
                            }),
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-sm/normal',
                                className: ec.celebrateCardSubheader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_THREE_TRIALS.format({ nitroLink: eb })
                            }),
                            (0, r.jsx)('div', { className: ec.celebrateCardFiller }),
                            (0, r.jsx)('img', {
                                className: ec.celebrateCardImage,
                                src: eT,
                                alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_NITRO_TRIAL_ALT
                            })
                        ]
                    }),
                    (0, r.jsxs)(Z.Clickable, {
                        tag: 'a',
                        href: ej,
                        target: '_blank',
                        className: ec.celebrateCardContainer,
                        onClick: () => {
                            O.default.track(eo.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, { section: 'disxcore_merch' });
                        },
                        children: [
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-lg/bold',
                                className: ec.celebrateCardHeader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_EXCLUSIVE_BIRTHDAY_MERCH
                            }),
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-sm/normal',
                                className: ec.celebrateCardSubheader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_VISIT_OUR_MERCH_STORE.format({ merchStoreLink: ej })
                            }),
                            (0, r.jsx)('div', { className: ec.celebrateCardFiller }),
                            (0, r.jsx)('img', {
                                className: ec.celebrateCardImage,
                                src: ep,
                                alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_MERCH_STORE_ALT
                            })
                        ]
                    }),
                    (0, r.jsxs)(Z.Clickable, {
                        tag: 'a',
                        href: ew,
                        target: '_blank',
                        className: ec.celebrateCardContainer,
                        onClick: (e) => {
                            var L;
                            O.default.track(eo.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, { section: 'town_hall' }), null === (L = (0, h.default)(ew)) || void 0 === L || L(e);
                        },
                        children: [
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-lg/bold',
                                className: ec.celebrateCardHeader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_TITLE
                            }),
                            (0, r.jsx)(Z.Heading, {
                                variant: 'heading-sm/normal',
                                className: ec.celebrateCardSubheader,
                                children: eH.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_DESCRIPTION.format({ clickHandler: (0, h.default)(ew) })
                            }),
                            (0, r.jsx)('div', { className: ec.celebrateCardFiller }),
                            (0, r.jsx)('img', {
                                className: ec.celebrateCardImage,
                                src: em,
                                alt: eH.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_IMG_ALT
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function e4() {
    return (0, r.jsx)('div', {
        className: ec.kitBashContainer,
        children: (0, r.jsx)(ei.i, {})
    });
}
function e7() {
    return (0, r.jsx)(et.i, { children: (0, r.jsx)(eR, {}) });
}
((s = t || (t = {})).SHARE_NITRO = 'share_nitro'), (s.DISXCORE_MERCH = 'disxcore_merch'), (s.TOWN_HALL = 'town_hall');
