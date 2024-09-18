n.r(t),
    n.d(t, {
        default: function () {
            return k;
        }
    }),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(990547),
    r = n(442837),
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
    j = n(49978),
    D = n(427996),
    b = n(701488),
    Z = n(981631),
    M = n(689938),
    y = n(59168),
    L = n(361205),
    O = n(812320);
let B = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_PADDING),
    R = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_WIDTH),
    V = (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT) + B + (0, p.Mg)(c.Z.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT);
function k(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: c, initialSelectedApplicationId: v, initialSlide: x = b.ag.DIRECTORY, enableSelectedTextChannelInvite: p, analyticsLocations: B, ...V } = e,
        k = (0, r.e7)([f.Z], () => f.Z.getIsEnabled(), []),
        { analyticsLocations: P } = (0, T.ZP)(B),
        [F, Y] = a.useState(x),
        w = (0, u.Z)(F),
        [W, G] = a.useState(null),
        [U, q] = a.useState(v),
        [z, J] = a.useState(void 0),
        [K] = (0, m.Z)(null == U ? [] : [U]),
        X = a.useRef(null),
        $ = a.useMemo(
            () => ({
                application_id: U,
                source_section: l.section,
                impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW
            }),
            [l.section, U]
        );
    a.useEffect(() => {
        if (F === b.ag.DIRECTORY && null != w && w !== b.ag.DIRECTORY && null != W) {
            var e;
            null === (e = X.current) || void 0 === e || e.scrollTo({ top: W });
        }
    }, [W, w, F]);
    let Q = a.useCallback((e) => {
            var t;
            let { applicationId: n } = e,
                i = null === (t = X.current) || void 0 === t ? void 0 : t.scrollTop;
            null != i && G(i), q(n), Y(b.ag.SELECT_CHANNEL);
        }, []),
        ee = a.useCallback((e) => {
            let { applicationId: t } = e;
            q(t), Y(b.ag.DETAIL_PAGE);
        }, []);
    a.useEffect(() => {
        h.default.track(Z.rMx.OPEN_MODAL, {
            type: 'Activity Shelf',
            channel_id: null == t ? void 0 : t.id,
            guild_id: n
        });
    }, [t, n]),
        a.useEffect(
            () => (
                g.S.subscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q),
                () => {
                    g.S.unsubscribe(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, Q);
                }
            ),
            [Q]
        ),
        a.useEffect(
            () => (
                g.S.subscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee),
                () => {
                    g.S.unsubscribe(Z.CkL.SHOW_ACTIVITY_DETAILS, ee);
                }
            ),
            [ee]
        ),
        a.useEffect(() => {
            N.ux();
        }, []);
    let et = () => {
            Y(b.ag.DIRECTORY);
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
                        location: (0, _.k$)(),
                        ...(0, I.hH)(n),
                        ...(0, I.v_)(E.Z.getChannel(null == t ? void 0 : t.id)),
                        ...$,
                        ...e
                    };
                h.default.track(Z.rMx.ACTIVITY_SHELF_CLOSE, i);
            },
            [null == t ? void 0 : t.id, $, n]
        ),
        (0, i.jsx)(T.Gt, {
            value: P,
            children: (0, i.jsxs)(d.ModalRoot, {
                className: s()(y.root),
                'aria-label': M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
                ...V,
                children: [
                    (0, i.jsx)('img', {
                        alt: M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                        src: L,
                        className: y.shelfTopBackground
                    }),
                    (0, i.jsx)('img', {
                        alt: M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT,
                        src: O,
                        className: y.shelfTopForeground
                    }),
                    (0, i.jsxs)(d.ModalHeader, {
                        separator: !1,
                        justify: C.Z.Justify.BETWEEN,
                        className: s()(y.modalHeader),
                        children: [
                            (0, i.jsxs)('div', {
                                className: y.headerTextContainer,
                                children: [
                                    (() => {
                                        if (F === b.ag.DETAIL_PAGE)
                                            return null == K
                                                ? null
                                                : (0, i.jsxs)('div', {
                                                      className: y.activityShelfTitle,
                                                      children: [
                                                          (0, i.jsx)(d.Heading, {
                                                              variant: 'heading-xl/extrabold',
                                                              children: K.name
                                                          }),
                                                          (0, i.jsxs)(d.Clickable, {
                                                              className: y.headerBackButton,
                                                              onClick: et,
                                                              children: [
                                                                  (0, i.jsx)(d.ChevronSmallLeftIcon, {
                                                                      size: 'md',
                                                                      color: 'currentColor'
                                                                  }),
                                                                  (0, i.jsx)(d.Text, {
                                                                      variant: 'text-sm/semibold',
                                                                      children: M.Z.Messages.BACK
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  });
                                        return (0, i.jsx)('div', {
                                            className: y.activityShelfTitle,
                                            children: (0, i.jsx)(d.Heading, {
                                                variant: 'heading-xl/extrabold',
                                                children: M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
                                            })
                                        });
                                    })(),
                                    (() => {
                                        if (F === b.ag.DIRECTORY)
                                            return (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: k ? M.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE : M.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_SUBTITLE
                                            });
                                        return null;
                                    })()
                                ]
                            }),
                            (0, i.jsx)(d.ModalCloseButton, {
                                className: y.modalCloseButton,
                                onClick: c
                            })
                        ]
                    }),
                    F === b.ag.DIRECTORY && k ? (0, i.jsx)(D.W, {}) : null,
                    (0, i.jsx)('div', { className: y.modalDivider }),
                    (0, i.jsxs)(d.Slides, {
                        activeSlide: F,
                        centered: !1,
                        width: R,
                        children: [
                            (0, i.jsx)(d.Slide, {
                                id: b.ag.DIRECTORY,
                                impressionName: o.ImpressionNames.ACTIVITY_SHELF,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW
                                },
                                children: (0, i.jsx)(H, {
                                    slide: F,
                                    children: (0, i.jsx)(A.Z, {
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
                                id: b.ag.SELECT_CHANNEL,
                                impressionName: o.ImpressionNames.ACTIVITY_SHELF_SELECT_CHANNEL,
                                impressionProperties: {
                                    source_section: l.section,
                                    impression_group: o.ImpressionGroups.ACTIVITY_SHELF_FLOW,
                                    application_id: U
                                },
                                children: (0, i.jsx)(H, {
                                    slide: F,
                                    children: (0, i.jsx)(j.Z, {
                                        applicationId: U,
                                        selectedChannelId: z,
                                        setSelectedChannelId: J,
                                        guildId: n,
                                        enableSelectedTextChannelInvite: p
                                    })
                                })
                            }),
                            (0, i.jsx)(d.Slide, {
                                id: b.ag.DETAIL_PAGE,
                                impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                impressionProperties: $,
                                children: (0, i.jsx)(H, {
                                    slide: F,
                                    children:
                                        null == U
                                            ? null
                                            : (0, i.jsx)(S.Z, {
                                                  applicationId: U,
                                                  channelId: null == t ? void 0 : t.id,
                                                  guildId: n,
                                                  onActivityLaunch: c
                                              })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: y.modalDivider }),
                    (0, i.jsx)(d.ModalFooter, {
                        separator: !1,
                        className: y.footer,
                        children: (() => {
                            switch (F) {
                                case b.ag.DIRECTORY:
                                    return (0, i.jsx)(A.d, {});
                                case b.ag.SELECT_CHANNEL:
                                    return (0, i.jsx)(j.q, {
                                        onBack: et,
                                        onClose: c,
                                        guildId: n,
                                        applicationId: U,
                                        locationObject: l,
                                        selectedChannelId: z,
                                        enableSelectedTextChannelInvite: p
                                    });
                                case b.ag.DETAIL_PAGE:
                                case b.ag.DIRECTORY:
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
        l = (0, r.e7)([f.Z], () => f.Z.getIsEnabled(), []),
        o = a.useContext(v.ZP),
        c = (0, r.e7)([x.Z], () => x.Z.windowSize(o.windowId).height, [o.windowId]);
    return (0, i.jsx)('div', {
        className: s()(y.slideContentOuterContainerSquished, {
            [y.slideContentOuterContainerSquishedWithDev]: n === b.ag.DIRECTORY && l,
            [y.slideContentOuterContainerTall]: n === b.ag.DIRECTORY && c > V,
            [y.slideContentOuterContainerTallWithDev]: n === b.ag.DIRECTORY && c > V && l,
            [y.slideContentOuterContainerNoMetaTextSquished]: n === b.ag.SELECT_CHANNEL,
            [y.slideContentOuterContainerNoMetaTextTall]: n === b.ag.SELECT_CHANNEL && c > V,
            [y.slideContentOuterContainerNoMetaTextNoFooterSquished]: n === b.ag.DETAIL_PAGE,
            [y.slideContentOuterContainerNoMetaTextNoFooterTall]: n === b.ag.DETAIL_PAGE && c > V
        }),
        children: t
    });
};
