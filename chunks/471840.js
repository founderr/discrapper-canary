n.r(t),
    n.d(t, {
        default: function () {
            return P;
        }
    }),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(990547),
    s = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(110924),
    v = n(40851),
    m = n(367907),
    x = n(565384),
    h = n(906732),
    g = n(835473),
    C = n(600164),
    p = n(592125),
    T = n(451478),
    _ = n(626135),
    I = n(585483),
    f = n(624138),
    N = n(115130),
    j = n(566620),
    b = n(421),
    S = n(895395),
    E = n(49978),
    y = n(427996),
    A = n(701488),
    Z = n(981631),
    O = n(388032),
    L = n(783181),
    k = n(361205),
    B = n(812320);
let M = (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    D = (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    R = (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + M + (0, f.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function P(e) {
    let { channel: t, guildId: n, locationObject: a, onClose: c, initialSelectedApplicationId: v, initialSlide: T = A.ag.DIRECTORY, enableSelectedTextChannelInvite: f, analyticsLocations: M, ...R } = e,
        P = (0, s.e7)([N.Z], () => N.Z.getIsEnabled(), []),
        { analyticsLocations: F } = (0, h.ZP)(M),
        [w, V] = l.useState(T),
        Y = (0, u.Z)(w),
        [W, G] = l.useState(null),
        [U, q] = l.useState(v),
        [z, J] = l.useState(void 0),
        [X] = (0, g.Z)(null == U ? [] : [U]),
        Q = l.useRef(null),
        $ = l.useMemo(
            () => ({
                application_id: U,
                source_section: a.section,
                impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [a.section, U]
        );
    l.useEffect(() => {
        if (w === A.ag.DIRECTORY && null != Y && Y !== A.ag.DIRECTORY && null != W) {
            var e;
            null === (e = Q.current) || void 0 === e || e.scrollTo({ top: W });
        }
    }, [W, Y, w]);
    let K = l.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                i = null === (t = Q.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && G(i), q(n), V(A.ag.SELECT_CHANNEL);
        }, []),
        ee = l.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), V(A.ag.DETAIL_PAGE);
        }, []);
    l.useEffect(() => {
        _.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        l.useEffect(
            () => (
                I.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K),
                () => {
                    I.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, K);
                }
            ),
            [K]
        ),
        l.useEffect(
            () => (
                I.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
                () => {
                    I.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
                }
            ),
            [ee]
        ),
        l.useEffect(() => {
            j.ux();
        }, []);
    let et = () => {
            V(A.ag.DIRECTORY);
        },
        en = l.useRef(Date.now()),
        ei = l.useRef(!1),
        el = l.useRef([]),
        ea = l.useCallback((e) => {
            null == el.current.find((t) => t === e.applicationId) && el.current.push(e.applicationId);
        }, []);
    return (
        l.useEffect(() => {
            let e = Q.current;
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
        l.useEffect(
            () => () => {
                let e = {
                        activity_tiles_viewed: el.current,
                        duration_ms: Date.now() - en.current,
                        scrolled: ei.current
                    },
                    i = {
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: n,
                        location: (0, x.k$)(),
                        ...(0, m.hH)(n),
                        ...(0, m.v_)(p.Z.getChannel(null == t ? void 0 : t.id)),
                        ...$,
                        ...e
                    };
                _.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n]
        ),
        (0, i.jsx)(h.Gt, {
            value: F,
            children: (0, i.jsxs)(d.ModalRoot, {
                className: r()(L.root),
                'aria-label': O.intl.string(O.t.shUONj),
                ...R,
                children: [
                    (0, i.jsx)('img', {
                        alt: O.intl.string(O.t['3Y9xdH']),
                        src: k,
                        className: L.shelfTopBackground
                    }),
                    (0, i.jsx)('img', {
                        alt: O.intl.string(O.t['3Y9xdH']),
                        src: B,
                        className: L.shelfTopForeground
                    }),
                    (0, i.jsxs)(d.ModalHeader, {
                        separator: !1,
                        justify: C.Z.Justify.BETWEEN,
                        className: r()(L.modalHeader),
                        children: [
                            (0, i.jsxs)('div', {
                                className: L.headerTextContainer,
                                children: [
                                    (() => {
                                        if (w === A.ag.DETAIL_PAGE)
                                            return null == X
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: L.activityShelfTitle,
                                                      children: [
                                                          (0, i.jsx)(d.Heading, {
                                                              variant: 'heading-xl/extrabold',
                                                              children: X.name
                                                          }),
                                                          (0, i.jsxs)(d.Clickable, {
                                                              className: L.headerBackButton,
                                                              onClick: et,
                                                              children: [
                                                                  (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                                                      size: 'md',
                                                                      color: 'currentColor'
                                                                  }),
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-sm/semibold',
                                                                      children: O.intl.string(O.t['13/7kZ'])
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  });
                                        return (0, i.jsx)('div', {
                                            className: L.activityShelfTitle,
                                            children: (0, i.jsx)(d.Heading, {
                                                variant: 'heading-xl/extrabold',
                                                children: O.intl.string(O.t.shUONj)
                                            })
                                        });
                                    })(),
                                    (() => {
                                        if (w === A.ag.DIRECTORY)
                                            return (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: P ? O.intl.string(O.t.tZ3FNj) : O.intl.string(O.t.Cye3SU)
                                            });
                                        return null;
                                    })()
                                ]
                            }),
                            (0, i.jsx)(d.ModalCloseButton, {
                                className: L.modalCloseButton,
                                onClick: c
                            })
                        ]
                    }),
                    w === A.ag.DIRECTORY && P ? (0, i.jsx)(y.W, {}) : null,
                    (0, i.jsx)('div', { className: L.modalDivider }),
                    (0, i.jsxs)(d.Slides, {
                        activeSlide: w,
                        centered: !1,
                        width: D,
                        children: [
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.DIRECTORY,
                                impressionName: o.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: a.section,
                                    impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, i.jsx)(H, {
                                    slide: w,
                                    children: (0, i.jsx)(S.Z, {
                                        scrollerRef: Q,
                                        channel: t,
                                        guildId: n,
                                        locationObject: a,
                                        onActivityItemVisible: ea,
                                        onClose: c
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.SELECT_CHANNEL,
                                impressionName: o.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: a.section,
                                    impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: U
                                },
                                children: (0, i.jsx)(H, {
                                    slide: w,
                                    children: (0, i.jsx)(E.Z, {
                                        applicationId: U,
                                        selectedChannelId: z,
                                        setSelectedChannelId: J,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: f
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: A.ag.DETAIL_PAGE,
                                impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: $,
                                children: (0, i.jsx)(H, {
                                    slide: w,
                                    children:
                                        null == U
                                            ? null
                                            : (0, i.jsx)(b.Z, {
                                                  applicationId: U,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: c
                                              })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: L.modalDivider }),
                    (0, i.jsx)(d.ModalFooter, {
                        separator: !1,
                        className: L.footer,
                        children: (() => {
                            switch (w) {
                                case A.ag.DIRECTORY:
                                    return (0, i.jsx)(S.d, {});
                                case A.ag.SELECT_CHANNEL:
                                    return (0, i.jsx)(E.q, {
                                        onBack: et,
                                        onClose: c,
                                        guildId: n,
                                        applicationId: U,
                                        locationObject: a,
                                        selectedChannelId: z,
                                        enableSelectedTextChannelInvite: f
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
        a = (0, s.e7)([N.Z], () => N.Z.getIsEnabled(), []),
        o = l.useContext(v.ZP),
        c = (0, s.e7)([T.Z], () => T.Z.windowSize(o.windowId).height, [o.windowId]);
    return (0, i.jsx)('div', {
        className: r()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]: n === A.ag.DIRECTORY && a,
            [L.slideContentOuterContainerTall]: n === A.ag.DIRECTORY && c > R,
            [L.slideContentOuterContainerTallWithDev]: n === A.ag.DIRECTORY && c > R && a,
            [L.slideContentOuterContainerNoMetaTextSquished]: n === A.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]: n === A.ag.SELECT_CHANNEL && c > R,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === A.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]: n === A.ag.DETAIL_PAGE && c > R
        }),
        children: t
    });
};
