n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(110924),
    v = n(40851),
    m = n(367907),
    h = n(565384),
    x = n(906732),
    g = n(835473),
    C = n(600164),
    p = n(592125),
    f = n(451478),
    _ = n(626135),
    I = n(585483),
    T = n(624138),
    N = n(115130),
    b = n(566620),
    j = n(421),
    S = n(895395),
    E = n(49978),
    y = n(427996),
    A = n(701488),
    Z = n(981631),
    L = n(388032),
    O = n(59168),
    k = n(361205),
    M = n(812320);
let B = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    R = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    D = (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, T.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function P(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: c, initialSelectedApplicationId: v, initialSlide: f = A.ag.DIRECTORY, enableSelectedTextChannelInvite: T, analyticsLocations: B, ...D } = e,
        P = (0, o.e7)([N.Z], () => N.Z.getIsEnabled(), []),
        { analyticsLocations: w } = (0, x.ZP)(B),
        [F, V] = a.useState(f),
        Y = (0, u.Z)(F),
        [U, W] = a.useState(null),
        [G, z] = a.useState(v),
        [q, J] = a.useState(void 0),
        [Q] = (0, g.Z)(null == G ? [] : [G]),
        X = a.useRef(null),
        $ = a.useMemo(
            () => ({
                application_id: G,
                source_section: l.section,
                impression_group: s.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [l.section, G]
        );
    a.useEffect(() => {
        if (F === A.ag.DIRECTORY && null != Y && Y !== A.ag.DIRECTORY && null != U) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: U });
        }
    }, [U, Y, F]);
    let K = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                i = null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && W(i), z(n), V(A.ag.SELECT_CHANNEL);
        }, []),
        ee = a.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), V(A.ag.DETAIL_PAGE);
        }, []);
    a.useEffect(() => {
        _.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        a.useEffect(
            () => (
                I.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K),
                () => {
                    I.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K);
                }
            ),
            [K]
        ),
        a.useEffect(
            () => (
                I.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
                () => {
                    I.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
                }
            ),
            [ee]
        ),
        a.useEffect(() => {
            b.ux();
        }, []);
    let et = () => {
            V(A.ag.DIRECTORY);
        },
        en = a.useRef(Date.now()),
        ei = a.useRef(!1),
        ea = a.useRef([]),
        el = a.useCallback((e) => {
            null == ea.current.find((t) => t === e.applicationId) && ea.current.push(e.applicationId);
        }, []);
    return (
        a.useEffect(() => {
            let e = X.current;
            if (null != e) {
                let t = () => (ei.current = !0);
                return (
                    null != e && e.addEventListener('scroll', t),
                    () => {
                        null != e && e.removeEventListener('scroll', t);
                    }
                );
            }
        }, []),
        a.useEffect(
            () => () => {
                let e = {
                        activity_tiles_viewed: ea.current,
                        duration_ms: Date.now() - en.current,
                        scrolled: ei.current
                    },
                    i = {
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: n,
                        location: (0, h.k$)(),
                        ...(0, m.hH)(n),
                        ...(0, m.v_)(p.Z.getChannel(null == t ? void 0 : t.id)),
                        ...$,
                        ...e
                    };
                _.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n]
        ),
        (0, i.jsx)(x.Gt, {
            value: w,
            children: (0, i.jsxs)(d.ModalRoot, {
                className: r()(O.root),
                'aria-label': L.intl.string(L.t.shUONj),
                ...D,
                children: [
                    (0, i.jsx)('img', {
                        alt: L.intl.string(L.t['3Y9xdH']),
                        src: k,
                        className: O.shelfTopBackground
                    }),
                    (0, i.jsx)('img', {
                        alt: L.intl.string(L.t['3Y9xdH']),
                        src: M,
                        className: O.shelfTopForeground
                    }),
                    (0, i.jsxs)(d.ModalHeader, {
                        separator: !1,
                        justify: C.Z.Justify.BETWEEN,
                        className: r()(O.modalHeader),
                        children: [
                            (0, i.jsxs)('div', {
                                className: O.headerTextContainer,
                                children: [
                                    (() => {
                                        if (F === A.ag.DETAIL_PAGE)
                                            return null == Q
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: O.activityShelfTitle,
                                                      children: [
                                                          (0, i.jsx)(d.Heading, {
                                                              variant: 'heading-xl/extrabold',
                                                              children: Q.name
                                                          }),
                                                          (0, i.jsxs)(d.Clickable, {
                                                              className: O.headerBackButton,
                                                              onClick: et,
                                                              children: [
                                                                  (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                                                      size: 'md',
                                                                      color: 'currentColor'
                                                                  }),
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-sm/semibold',
                                                                      children: L.intl.string(L.t['13/7kZ'])
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  });
                                        return (0, i.jsx)('div', {
                                            className: O.activityShelfTitle,
                                            children: (0, i.jsx)(d.Heading, {
                                                variant: 'heading-xl/extrabold',
                                                children: L.intl.string(L.t.shUONj)
                                            })
                                        });
                                    })(),
                                    (() => {
                                        if (F === A.ag.DIRECTORY)
                                            return (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: P ? L.intl.string(L.t.tZ3FNj) : L.intl.string(L.t.Cye3SU)
                                            });
                                        return null;
                                    })()
                                ]
                            }),
                            (0, i.jsx)(d.ModalCloseButton, {
                                className: O.modalCloseButton,
                                onClick: c
                            })
                        ]
                    }),
                    F === A.ag.DIRECTORY && P ? (0, i.jsx)(y.W, {}) : null,
                    (0, i.jsx)('div', { className: O.modalDivider }),
                    (0, i.jsxs)(d.Slides, {
                        activeSlide: F,
                        centered: !1,
                        width: R,
                        children: [
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.DIRECTORY,
                                impressionName: s.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: s.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, i.jsx)(H, {
                                    slide: F,
                                    children: (0, i.jsx)(S.Z, {
                                        scrollerRef: X,
                                        channel: t,
                                        guildId: n,
                                        locationObject: l,
                                        onActivityItemVisible: el,
                                        onClose: c
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.SELECT_CHANNEL,
                                impressionName: s.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: s.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: G
                                },
                                children: (0, i.jsx)(H, {
                                    slide: F,
                                    children: (0, i.jsx)(E.Z, {
                                        applicationId: G,
                                        selectedChannelId: q,
                                        setSelectedChannelId: J,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: T
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.DETAIL_PAGE,
                                impressionName: s.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: $,
                                children: (0, i.jsx)(H, {
                                    slide: F,
                                    children:
                                        null == G
                                            ? null
                                            : (0, i.jsx)(j.Z, {
                                                  applicationId: G,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: c
                                              })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: O.modalDivider }),
                    (0, i.jsx)(d.ModalFooter, {
                        separator: !1,
                        className: O.footer,
                        children: (() => {
                            switch (F) {
                                case A.ag.DIRECTORY:
                                    return (0, i.jsx)(S.d, {});
                                case A.ag.SELECT_CHANNEL:
                                    return (0, i.jsx)(E.q, {
                                        onBack: et,
                                        onClose: c,
                                        guildId: n,
                                        applicationId: G,
                                        locationObject: l,
                                        selectedChannelId: q,
                                        enableSelectedTextChannelInvite: T
                                    });
                                case A.ag.DETAIL_PAGE:
                                case A.ag.DIRECTORY:
                                default:
                                    return null;
                            }
                        })()
                    })
                ]
            })
        })
    );
}
let H = (e) => {
    let { children: t, slide: n } = e,
        l = (0, o.e7)([N.Z], () => N.Z.getIsEnabled(), []),
        s = a.useContext(v.ZP),
        c = (0, o.e7)([f.Z], () => f.Z.windowSize(s.windowId).height, [s.windowId]);
    return (0, i.jsx)('div', {
        className: r()(O.slideContentOuterContainerSquished, {
            [O.slideContentOuterContainerSquishedWithDev]: n === A.ag.DIRECTORY && l,
            [O.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && c > D,
            [O.slideContentOuterContainerTallWithDev]: n === A.ag.DIRECTORY && c > D && l,
            [O.slideContentOuterContainerNoMetaTextSquished]: n === A.ag.SELECT_CHANNEL,
            [O.slideContentOuterContainerNoMetaTextTall]: n === A.ag.SELECT_CHANNEL && c > D,
            [O.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === A.ag.DETAIL_PAGE,
            [O.slideContentOuterContainerNoMetaTextNoFooterTall]: n === A.ag.DETAIL_PAGE && c > D
        }),
        children: t
    });
};
