n.r(t),
    n.d(t, {
        default: function () {
            return k;
        }
    }),
    n(47120),
    n(653041);
var a = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    r = n(990547),
    o = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(110924),
    v = n(40851),
    I = n(367907),
    _ = n(565384),
    T = n(906732),
    m = n(835473),
    C = n(600164),
    E = n(592125),
    x = n(451478),
    h = n(626135),
    g = n(585483),
    p = n(624138),
    f = n(115130),
    N = n(566620),
    S = n(421),
    A = n(895395),
    b = n(49978),
    j = n(427996),
    D = n(701488),
    Z = n(981631),
    M = n(689938),
    L = n(59168),
    y = n(361205),
    O = n(812320);
let B = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    R = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    V = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function k(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: c, initialSelectedApplicationId: v, initialSlide: x = D.ag.DIRECTORY, enableSelectedTextChannelInvite: p, analyticsLocations: B, ...V } = e,
        k = (0, o.e7)([f.Z], () => f.Z.getIsEnabled(), []),
        { analyticsLocations: H } = (0, T.ZP)(B),
        [F, w] = i.useState(x),
        Y = (0, u.Z)(F),
        [U, W] = i.useState(null),
        [G, z] = i.useState(v),
        [q, J] = i.useState(void 0),
        [K] = (0, m.Z)(null == G ? [] : [G]),
        X = i.useRef(null),
        $ = i.useMemo(
            () => ({
                application_id: G,
                source_section: l.section,
                impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [l.section, G]
        );
    i.useEffect(() => {
        if (F === D.ag.DIRECTORY && null != Y && Y !== D.ag.DIRECTORY && null != U) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: U });
        }
    }, [U, Y, F]);
    let Q = i.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                a = null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != a && W(a), z(n), w(D.ag.SELECT_CHANNEL);
        }, []),
        ee = i.useCallback((e) => {
            let { applicationId: t } = e;
            z(t), w(D.ag.DETAIL_PAGE);
        }, []);
    i.useEffect(() => {
        h.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        i.useEffect(
            () => (
                g.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q),
                () => {
                    g.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
                }
            ),
            [Q]
        ),
        i.useEffect(
            () => (
                g.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
                () => {
                    g.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
                }
            ),
            [ee]
        ),
        i.useEffect(() => {
            N.ux();
        }, []);
    let et = () => {
            w(D.ag.DIRECTORY);
        },
        en = i.useRef(Date.now()),
        ea = i.useRef(!1),
        ei = i.useRef([]),
        el = i.useCallback((e) => {
            null == ei.current.find((t) => t === e.applicationId) && ei.current.push(e.applicationId);
        }, []);
    return (
        i.useEffect(() => {
            let e = X.current;
            if (null != e) {
                let t = () => (ea.current = !0);
                return (
                    null != e && e.addEventListener('scroll', t),
                    () => {
                        null != e && e.removeEventListener('scroll', t);
                    }
                );
            }
        }, []),
        i.useEffect(
            () => () => {
                let e = {
                        activity_tiles_viewed: ei.current,
                        duration_ms: Date.now() - en.current,
                        scrolled: ea.current
                    },
                    a = {
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: n,
                        location: (0, _.k$)(),
                        ...(0, I.hH)(n),
                        ...(0, I.v_)(E.Z.getChannel(null == t ? void 0 : t.id)),
                        ...$,
                        ...e
                    };
                h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, a);
            },
            [null == t ? void 0 : t.id, $, n]
        ),
        (0, a.jsx)(T.Gt, {
            value: H,
            children: (0, a.jsxs)(d.ModalRoot, {
                className: s()(L.root),
                'aria-label': M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...V,
                children: [
                    (0, a.jsx)('img', {
                        alt: M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                        src: y,
                        className: L.shelfTopBackground
                    }),
                    (0, a.jsx)('img', {
                        alt: M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                        src: O,
                        className: L.shelfTopForeground
                    }),
                    (0, a.jsxs)(d.ModalHeader, {
                        separator: !1,
                        justify: C.Z.Justify.BETWEEN,
                        className: s()(L.modalHeader),
                        children: [
                            (0, a.jsxs)('div', {
                                className: L.headerTextContainer,
                                children: [
                                    (() => {
                                        if (F === D.ag.DETAIL_PAGE)
                                            return null == K
                                                ? null
                                                : (0, a.jsxs)('div', {
                                                      className: L.activityShelfTitle,
                                                      children: [
                                                          (0, a.jsx)(d.Heading, {
                                                              variant: 'heading-xl/extrabold',
                                                              children: K.name
                                                          }),
                                                          (0, a.jsxs)(d.Clickable, {
                                                              className: L.headerBackButton,
                                                              onClick: et,
                                                              children: [
                                                                  (0, a.jsx)(d.ChevronSmallLeftIcon, {
                                                                      size: 'md',
                                                                      color: 'currentColor'
                                                                  }),
                                                                  (0, a.jsx)(d.Text, {
                                                                      variant: 'text-sm/semibold',
                                                                      children: M.Z.Messages.BACK
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  });
                                        return (0, a.jsx)('div', {
                                            className: L.activityShelfTitle,
                                            children: (0, a.jsx)(d.Heading, {
                                                variant: 'heading-xl/extrabold',
                                                children: M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                                            })
                                        });
                                    })(),
                                    (() => {
                                        if (F === D.ag.DIRECTORY)
                                            return (0, a.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: k ? M.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                                            });
                                        return null;
                                    })()
                                ]
                            }),
                            (0, a.jsx)(d.ModalCloseButton, {
                                className: L.modalCloseButton,
                                onClick: c
                            })
                        ]
                    }),
                    F === D.ag.DIRECTORY && k ? (0, a.jsx)(j.W, {}) : null,
                    (0, a.jsx)('div', { className: L.modalDivider }),
                    (0, a.jsxs)(d.Slides, {
                        activeSlide: F,
                        centered: !1,
                        width: R,
                        children: [
                            (0, a.jsx)(d.Slide, {
                                id: D.ag.DIRECTORY,
                                impressionName: r.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, a.jsx)(P, {
                                    slide: F,
                                    children: (0, a.jsx)(A.Z, {
                                        scrollerRef: X,
                                        channel: t,
                                        guildId: n,
                                        locationObject: l,
                                        onActivityItemVisible: el,
                                        onClose: c
                                    })
                                })
                            }),
                            (0, a.jsx)(d.Slide, {
                                id: D.ag.SELECT_CHANNEL,
                                impressionName: r.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: r.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: G
                                },
                                children: (0, a.jsx)(P, {
                                    slide: F,
                                    children: (0, a.jsx)(b.Z, {
                                        applicationId: G,
                                        selectedChannelId: q,
                                        setSelectedChannelId: J,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: p
                                    })
                                })
                            }),
                            (0, a.jsx)(d.Slide, {
                                id: D.ag.DETAIL_PAGE,
                                impressionName: r.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: $,
                                children: (0, a.jsx)(P, {
                                    slide: F,
                                    children:
                                        null == G
                                            ? null
                                            : (0, a.jsx)(S.Z, {
                                                  applicationId: G,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: c
                                              })
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: L.modalDivider }),
                    (0, a.jsx)(d.ModalFooter, {
                        separator: !1,
                        className: L.footer,
                        children: (() => {
                            switch (F) {
                                case D.ag.DIRECTORY:
                                    return (0, a.jsx)(A.d, {});
                                case D.ag.SELECT_CHANNEL:
                                    return (0, a.jsx)(b.q, {
                                        onBack: et,
                                        onClose: c,
                                        guildId: n,
                                        applicationId: G,
                                        locationObject: l,
                                        selectedChannelId: q,
                                        enableSelectedTextChannelInvite: p
                                    });
                                case D.ag.DETAIL_PAGE:
                                case D.ag.DIRECTORY:
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
let P = (e) => {
    let { children: t, slide: n } = e,
        l = (0, o.e7)([f.Z], () => f.Z.getIsEnabled(), []),
        r = i.useContext(v.ZP),
        c = (0, o.e7)([x.Z], () => x.Z.windowSize(r.windowId).height, [r.windowId]);
    return (0, a.jsx)('div', {
        className: s()(L.slideContentOuterContainerSquished, {
            [L.slideContentOuterContainerSquishedWithDev]: n === D.ag.DIRECTORY && l,
            [L.slideContentOuterContainerTall]: n === D.ag.DIRECTORY && c > V,
            [L.slideContentOuterContainerTallWithDev]: n === D.ag.DIRECTORY && c > V && l,
            [L.slideContentOuterContainerNoMetaTextSquished]: n === D.ag.SELECT_CHANNEL,
            [L.slideContentOuterContainerNoMetaTextTall]: n === D.ag.SELECT_CHANNEL && c > V,
            [L.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === D.ag.DETAIL_PAGE,
            [L.slideContentOuterContainerNoMetaTextNoFooterTall]: n === D.ag.DETAIL_PAGE && c > V
        }),
        children: t
    });
};
