(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86612"], {
        444342: function(e, t, l) {
            "use strict";
            e.exports = l.p + "8678aef5e54059df845e.svg"
        },
        853701: function(e, t, l) {
            "use strict";
            e.exports = l.p + "792a9ed858431240f0e6.svg"
        },
        743087: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShareIcon: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("669491"),
                n = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, n.default)(d),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "M13 16V5.41421L16.2929 8.70711C16.6834 9.09763 17.3166 9.09763 17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L12.7078 2.29361L12.7005 2.2864C12.5201 2.10925 12.2728 2 12 2C11.8644 2 11.7351 2.02699 11.6172 2.07588C11.502 2.12357 11.3938 2.19374 11.2995 2.2864L11.2922 2.29361L6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711C6.68342 9.09763 7.31658 9.09763 7.70711 8.70711L11 5.41421V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: o
                    }), (0, a.jsx)("path", {
                        d: "M4 15C4 14.4477 4.44772 14 5 14H7C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12H5C3.34315 12 2 13.3431 2 15V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V15C22 13.3431 20.6569 12 19 12H17C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V15Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: o
                    })]
                })
            }
        },
        311207: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                n = l("298878"),
                i = l("782340"),
                o = () => (0, a.jsx)(s.TooltipContainer, {
                    text: i.default.Messages.CLIPS_BETA_TAG_HOVER,
                    children: (0, a.jsx)(n.default, {})
                })
        },
        552022: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var a, s, n = l("37983"),
                i = l("884691"),
                o = l("414456"),
                d = l.n(o),
                r = l("866227"),
                c = l.n(r),
                u = l("446674"),
                f = l("862337"),
                p = l("77078"),
                C = l("812204"),
                m = l("685665"),
                h = l("730859"),
                v = l("739034"),
                L = l("697218"),
                x = l("944832"),
                g = l("561744"),
                N = l("491920"),
                S = l("826432"),
                E = l("228220"),
                _ = l("15165"),
                I = l("58608"),
                j = l("599110"),
                M = l("449008"),
                T = l("299039"),
                R = l("803725"),
                A = l("135284"),
                y = l("49111"),
                H = l("782340"),
                P = l("593262");
            (s = a || (a = {})).DELETE = "delete", s.EDIT = "edit", s.SHARE = "share";
            var b = function(e) {
                var t, l, a;
                let {
                    clip: s,
                    exporting: o,
                    actionsDisabled: r,
                    isNew: c,
                    canShare: v,
                    onDelete: x,
                    onEdit: N,
                    onShare: S
                } = e, E = (0, u.useStateFromStoresArray)([L.default], () => s.users.map(e => L.default.getUser(e)).filter(M.isNotNullish)), {
                    AnalyticsLocationProvider: _
                } = (0, m.default)(C.default.CLIPS_GALLERY_ITEM), I = i.useRef(null), R = (0, g.default)(null !== (a = null === (t = s.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== a ? a : 0), A = i.useRef(new f.DelayedCall(500, () => {
                    var e;
                    let t = I.current;
                    null != t && (t.currentTime = R.current, null === (e = I.current) || void 0 === e || e.play())
                })), b = i.useCallback(() => {
                    var e;
                    null === (e = A.current) || void 0 === e || e.delay()
                }, []), w = i.useCallback(() => {
                    var e, t, l;
                    let a = I.current;
                    null === (e = A.current) || void 0 === e || e.cancel(), null != a && (a.pause(), a.currentTime = null !== (l = null === (t = s.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0)
                }, [null === (l = s.editMetadata) || void 0 === l ? void 0 : l.start]), V = !s.name, B = new Date(T.default.extractTimestamp(s.id)), O = B.toLocaleDateString(), z = B.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }), G = "".concat(O, " • ").concat(z);
                return (0, n.jsx)(_, {
                    children: (0, n.jsxs)(p.Clickable, {
                        "aria-disabled": r,
                        "aria-label": H.default.Messages.EDIT,
                        onClick: r ? void 0 : () => {
                            N(s), j.default.track(y.AnalyticEvents.CLIP_GALLERY_CARD_CLICKED)
                        },
                        className: d(P.clipItem, {
                            [P.disabled]: r
                        }),
                        onMouseOver: b,
                        onMouseLeave: w,
                        children: [(0, n.jsx)(D, {
                            clip: s,
                            isNew: c,
                            videoRef: I
                        }), (0, n.jsxs)("div", {
                            className: P.clipFooter,
                            children: [V ? (0, n.jsx)(p.Heading, {
                                className: P.clipTitle,
                                color: "text-muted",
                                variant: "heading-lg/medium",
                                children: H.default.Messages.CLIPS_UNTITLED
                            }) : (0, n.jsx)(p.Heading, {
                                className: P.clipTitle,
                                color: "text-normal",
                                variant: "heading-lg/medium",
                                children: s.name
                            }), (0, n.jsx)(p.Text, {
                                className: P.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: s.applicationName
                            }), (0, n.jsx)(p.Text, {
                                className: P.clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: G
                            }), (0, n.jsxs)("div", {
                                className: P.usersAndDelete,
                                children: [(0, n.jsx)(h.default, {
                                    maxUsers: 4,
                                    users: E
                                }), (0, n.jsx)(k, {
                                    clip: s,
                                    canShare: v,
                                    actionsDisabled: r,
                                    exporting: o,
                                    onDelete: x,
                                    onEdit: N,
                                    onShare: S
                                })]
                            })]
                        })]
                    })
                })
            };

            function D(e) {
                let {
                    clip: t,
                    isNew: l,
                    videoRef: a
                } = e, s = 0 === t.length, [o, d] = i.useMemo(() => {
                    let e = t.length,
                        l = !1,
                        a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
                    return null != a && 1e3 * a < t.length && (e = 1e3 * a, l = !0), [l, c.duration(e)]
                }, [t.length, t.editMetadata]), r = "".concat(d.seconds()).padStart(2, "0");
                return (0, n.jsxs)(x.default, {
                    aspectRatio: 16 / 9,
                    className: P.clipThumbContainer,
                    children: [(0, n.jsx)(w, {
                        clip: t,
                        videoRef: a
                    }), (0, n.jsxs)("div", {
                        className: P.clipBadges,
                        children: [s && (0, n.jsx)("div", {
                            className: P.clipProcessingBadge,
                            children: (0, n.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: H.default.Messages.CLIPS_PROCESSING_BADGE
                            })
                        }), !s && l && (0, n.jsxs)(p.Text, {
                            className: P.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [(0, n.jsx)(S.default, {
                                className: P.newIcon
                            }), H.default.Messages.NEW.toUpperCase()]
                        }), !s && (0, n.jsxs)("div", {
                            className: P.clipDurationBadge,
                            children: [o ? (0, n.jsx)(_.default, {
                                className: P.clipDurationEditIcon
                            }) : null, (0, n.jsx)(p.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: "".concat(d.minutes(), ":").concat(r)
                            })]
                        })]
                    })]
                })
            }

            function w(e) {
                let {
                    clip: t,
                    videoRef: l
                } = e, a = (0, A.useClipProtocolURL)(t);
                return 0 === t.length ? (0, n.jsx)(p.Spinner, {
                    type: p.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                    className: P.clipThumb
                }) : null != a ? (0, n.jsx)(I.default, {
                    preload: "metadata",
                    muted: !0,
                    poster: t.thumbnail,
                    src: a,
                    loop: !0,
                    className: P.clipThumb,
                    ref: l
                }) : (0, n.jsx)("img", {
                    alt: "",
                    src: t.thumbnail,
                    className: P.clipThumb
                })
            }

            function k(e) {
                let {
                    clip: t,
                    exporting: l,
                    actionsDisabled: a,
                    canShare: s,
                    onDelete: i,
                    onEdit: o,
                    onShare: d
                } = e, r = (0, v.default)();
                return (0, n.jsxs)("div", {
                    className: P.buttonContainer,
                    children: [null != i && (0, n.jsx)(p.Tooltip, {
                        text: H.default.Messages.DELETE,
                        children: e => (0, n.jsx)(p.Button, {
                            ...e,
                            disabled: a,
                            color: r ? p.Button.Colors.RED : p.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), e.shiftKey ? (0, R.deleteClip)(t.filepath) : i(t), j.default.track(y.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: "delete"
                                })
                            },
                            className: P.button,
                            size: p.Button.Sizes.NONE,
                            look: p.Button.Looks.FILLED,
                            children: (0, n.jsx)(E.default, {
                                className: P.miniIcon
                            })
                        })
                    }), (0, n.jsx)(p.Tooltip, {
                        text: H.default.Messages.EDIT,
                        children: e => (0, n.jsx)(p.Button, {
                            ...e,
                            disabled: a,
                            color: p.Button.Colors.PRIMARY,
                            onClick: e => {
                                e.stopPropagation(), o(t), j.default.track(y.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: "edit"
                                })
                            },
                            className: P.button,
                            size: p.Button.Sizes.NONE,
                            look: p.Button.Looks.FILLED,
                            children: (0, n.jsx)(_.default, {
                                className: P.miniIcon
                            })
                        })
                    }), (0, n.jsx)(p.Tooltip, {
                        text: s ? H.default.Messages.SHARE : H.default.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                        children: e => (0, n.jsx)(p.Button, {
                            ...e,
                            disabled: a && !l || !s,
                            submitting: l,
                            color: p.Button.Colors.BRAND,
                            onClick: e => {
                                e.stopPropagation(), d(t), j.default.track(y.AnalyticEvents.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                    type: "share"
                                })
                            },
                            className: P.button,
                            size: p.Button.Sizes.NONE,
                            look: p.Button.Looks.FILLED,
                            children: (0, n.jsx)(N.default, {
                                className: P.miniIcon
                            })
                        })
                    })]
                })
            }
        },
        548405: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983"),
                s = l("884691"),
                n = l("414456"),
                i = l.n(n),
                o = l("65597"),
                d = l("77078"),
                r = l("79112"),
                c = l("227602"),
                u = l("13798"),
                f = l("386045"),
                p = l("49111"),
                C = l("782340"),
                m = l("518677");

            function h(e) {
                let {
                    isEmptyBecauseQuery: t,
                    closePopout: l
                } = e, n = (0, o.default)([c.default], () => c.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP)), h = (0, o.default)([f.default], () => f.default.getSettings().clipsEnabled), v = t ? m.noSearchResultsImage : m.noClipsImage, L = s.useCallback(() => {
                    l(), r.default.open(p.UserSettingsSections.CLIPS)
                }, [l]), x = (() => {
                    if (!h) return C.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
                        onClick: L
                    });
                    if (t) return C.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
                    if (null == n) return C.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
                        onClick: L
                    });
                    {
                        let e = u.toString(n.shortcut, !0);
                        return C.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                            keybind: e,
                            keybindHook: () => (0, a.jsx)("span", {
                                className: m.keybindHintKeys,
                                children: (0, a.jsx)(d.KeyCombo, {
                                    className: m.keybindShortcut,
                                    shortcut: e
                                })
                            })
                        })
                    }
                })();
                return (0, a.jsx)("div", {
                    className: m.container,
                    children: (0, a.jsxs)("div", {
                        className: m.content,
                        children: [(0, a.jsx)("div", {
                            className: v
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: i(m.noClipsText, {
                                [m.noSearchResultsText]: t
                            }),
                            children: x
                        })]
                    })
                })
            }
        },
        411445: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                n = l("79112"),
                i = l("810567"),
                o = l("522049"),
                d = l("474571"),
                r = l("311207"),
                c = l("49111"),
                u = l("782340"),
                f = l("552986");

            function p(e) {
                let {
                    filterQuery: t,
                    setFilterQuery: l,
                    onClose: p,
                    sortOrder: C,
                    setSortOrder: m
                } = e;
                return (0, a.jsxs)(s.ModalHeader, {
                    className: f.root,
                    separator: !1,
                    children: [(0, a.jsx)(o.default, {
                        className: f.icon
                    }), (0, a.jsx)(s.Heading, {
                        className: f.title,
                        variant: "heading-xxl/bold",
                        children: u.default.Messages.CLIPS
                    }), (0, a.jsx)("div", {
                        className: f.betaTag,
                        children: (0, a.jsx)(r.default, {})
                    }), (0, a.jsx)(i.default, {
                        autoFocus: !0,
                        size: i.default.Sizes.MEDIUM,
                        placeholder: u.default.Messages.SEARCH,
                        className: f.queryInput,
                        query: t,
                        onChange: l,
                        onClear: () => l("")
                    }), (0, a.jsx)(s.Select, {
                        placeholder: u.default.Messages.CLIPS_SORT_PLACEHOLDER,
                        className: f.sortInput,
                        options: [{
                            value: "descending",
                            label: u.default.Messages.CLIPS_SORT_RECENT
                        }, {
                            value: "ascending",
                            label: u.default.Messages.CLIPS_SORT_OLDEST
                        }],
                        isSelected: e => e === C,
                        select: m,
                        serialize: e => e
                    }), (0, a.jsx)(s.Button, {
                        color: s.ButtonColors.TRANSPARENT,
                        size: s.Button.Sizes.NONE,
                        className: f.settingsButton,
                        look: s.Button.Looks.FILLED,
                        onClick: () => {
                            n.default.open(c.UserSettingsSections.CLIPS), p()
                        },
                        children: (0, a.jsx)(d.default, {})
                    }), (0, a.jsx)(s.ModalCloseButton, {
                        className: f.button,
                        onClick: p
                    })]
                })
            }
        },
        167573: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("222007");
            var a = l("37983"),
                s = l("884691"),
                n = l("448105"),
                i = l.n(n),
                o = l("917351"),
                d = l.n(o),
                r = l("759843"),
                c = l("446674"),
                u = l("551042"),
                f = l("77078"),
                p = l("812204"),
                C = l("685665"),
                m = l("428958"),
                h = l("299039"),
                v = l("386045"),
                L = l("803725"),
                x = l("142485"),
                g = l("552022"),
                N = l("548405"),
                S = l("411445"),
                E = l("80028"),
                _ = l("305085");

            function I(e) {
                let {
                    channelId: t,
                    onClose: n,
                    transitionState: o
                } = e, [I, j] = s.useState(""), [M, T] = s.useState("descending"), [R, A] = s.useState(!0), [y, H] = s.useState(null), P = s.useDeferredValue(I), b = (0, c.useStateFromStores)([v.default], () => v.default.getClips()), D = (0, c.useStateFromStores)([v.default], () => v.default.getPendingClips()), w = (0, c.useStateFromStores)([v.default], () => v.default.getSettings().storageLocation), k = (0, c.useStateFromStores)([v.default], () => v.default.getState().newClipIds), {
                    AnalyticsLocationProvider: V
                } = (0, C.default)(p.default.CLIPS_GALLERY), B = s.useMemo(() => [...D, ...b], [b, D]);
                (0, m.default)({
                    type: r.ImpressionTypes.MODAL,
                    name: r.ImpressionNames.CLIP_GALLERY_VIEWED,
                    properties: {
                        number_of_clips_loaded: B.length
                    }
                }, {
                    disableTrack: R
                }, [B.length, R]), s.useEffect(() => L.clearNewClipIds, []);
                let O = s.useMemo(() => d(B).filter(e => {
                    if ("" === P.trim()) return !0;
                    let t = P.toLowerCase();
                    return null != e.name && "" !== e.name && i(t, e.name.toLowerCase()) || i(t, e.applicationName.toLowerCase())
                }).sort((e, t) => "ascending" === M ? h.default.compare(e.id, t.id) : "descending" === M ? h.default.compare(t.id, e.id) : 0).chunk(3).value(), [B, P, M]);
                s.useEffect(() => {
                    (async function e() {
                        A(!0);
                        try {
                            await L.loadClipsDirectory(w)
                        } finally {
                            A(!1)
                        }
                    })()
                }, [w]);
                let z = s.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: s
                            } = await l.el("473070").then(l.bind(l, "473070"));
                            return l => (0, a.jsx)(s, {
                                ...l,
                                channelId: t,
                                clip: e
                            })
                        }, {
                            modalKey: E.CLIPS_EDIT_MODAL_KEY
                        })
                    }, [t]),
                    {
                        onShareClick: G,
                        canAttachFiles: Y
                    } = (0, x.default)({
                        channelId: t,
                        setExporting: H
                    }),
                    F = s.useCallback(e => {
                        (0, f.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await l.el("386092").then(l.bind(l, "386092"));
                            return l => (0, a.jsx)(t, {
                                clip: e,
                                ...l,
                                onDelete: () => l.onClose()
                            })
                        })
                    }, []),
                    U = s.useCallback(e => {
                        let {
                            row: t
                        } = e, l = O[t];
                        return (0, a.jsx)("div", {
                            className: _.clipsRow,
                            children: l.map(e => {
                                let t = 0 === e.length;
                                return (0, a.jsx)(g.default, {
                                    actionsDisabled: null != y || t,
                                    exporting: y === e.id,
                                    isNew: k.includes(e.id),
                                    onDelete: F,
                                    onEdit: z,
                                    onShare: e => G({
                                        clip: e,
                                        onShareComplete: () => u.closeModal(E.CLIPS_GALLERY_MODAL_KEY)
                                    }),
                                    canShare: Y,
                                    clip: e
                                }, e.id)
                            })
                        }, "clips-gallery-".concat(t))
                    }, [O, k, y, G, F, z, Y]),
                    K = R || 0 !== O.length ? R ? (0, a.jsx)("div", {
                        className: _.spinnerContainer,
                        children: (0, a.jsx)(f.Spinner, {})
                    }) : (0, a.jsx)(f.List, {
                        className: _.clipGrid,
                        sections: [O.length],
                        sectionHeight: 0,
                        rowHeight: 328.25,
                        renderRow: U
                    }) : (0, a.jsx)(N.default, {
                        isEmptyBecauseQuery: B.length > 0,
                        closePopout: n
                    });
                return (0, a.jsx)(f.ModalRoot, {
                    size: f.ModalSize.DYNAMIC,
                    transitionState: o,
                    className: _.root,
                    children: (0, a.jsxs)(V, {
                        children: [(0, a.jsx)(S.default, {
                            onClose: n,
                            filterQuery: I,
                            setFilterQuery: j,
                            sortOrder: M,
                            setSortOrder: T
                        }), K]
                    })
                })
            }
        },
        16002: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                shareClip: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078"),
                n = l("42203"),
                i = l("474643"),
                o = l("599110"),
                d = l("299039"),
                r = l("412861"),
                c = l("13136"),
                u = l("803725"),
                f = l("80028"),
                p = l("49111");
            async function C(e, t) {
                let {
                    channelId: C,
                    editMetadata: m,
                    analyticsLocations: h
                } = t, v = n.default.getChannel(C);
                if (null != v) try {
                    var L;
                    let t = await (0, u.exportClip)(e, m),
                        l = null !== (L = e.name) && void 0 !== L ? L : (0, f.CLIP_NAME_TEMPLATE)(d.default.extractTimestamp(e.id)),
                        a = (0, c.default)(l);
                    (0, r.promptToUpload)([new File([t], "".concat("" !== a ? a : "clip", ".mp4"), {
                        type: "video/mp4"
                    })], v, i.DraftType.ChannelMessage, {
                        filesMetadata: [{
                            clip: e
                        }]
                    }), o.default.track(p.AnalyticEvents.CLIP_SHARED, {
                        location_stack: h,
                        guild_id: v.guild_id,
                        channel_id: v.id,
                        channel_type: v.type,
                        application_id: e.applicationId,
                        clip_id: e.id
                    })
                } catch (e) {
                    throw f.ClipsLogger.error(e), e
                } else(0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await l.el("143909").then(l.bind(l, "143909"));
                    return l => (0, a.jsx)(t, {
                        ...l,
                        clip: e,
                        editMetadata: m
                    })
                })
            }
        },
        135284: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useClipProtocolURL: function() {
                    return n
                }
            });
            var a = l("884691"),
                s = l("49671");

            function n(e) {
                let t = (0, a.useMemo)(() => null == s.default.clips.getClipProtocolURLFromPath ? null : s.default.clips.getClipProtocolURLFromPath(e.filepath), [e.filepath]);
                return t
            }
        },
        142485: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("884691"),
                s = l("65597"),
                n = l("685665"),
                i = l("42203"),
                o = l("957255"),
                d = l("16002"),
                r = l("49111"),
                c = e => {
                    let {
                        channelId: t,
                        setExporting: l
                    } = e, {
                        analyticsLocations: c
                    } = (0, n.default)(), u = (0, s.default)([i.default], () => i.default.getChannel(t)), f = null == u ? void 0 : u.isPrivate(), p = (0, s.default)([o.default], () => null == t || f || o.default.can(r.Permissions.ATTACH_FILES, u) && o.default.can(r.Permissions.SEND_MESSAGES, u)), C = a.useCallback(async e => {
                        let {
                            clip: a,
                            cropData: s,
                            applicationAudioEnabled: n,
                            voiceAudioEnabled: i,
                            onShareComplete: o
                        } = e;
                        l(a.id);
                        try {
                            var r, u, f, p, C, m, h, v, L, x;
                            await (0, d.shareClip)(a, {
                                channelId: t,
                                analyticsLocations: c,
                                editMetadata: {
                                    start: null !== (m = null !== (C = null == s ? void 0 : s.start) && void 0 !== C ? C : null === (r = a.editMetadata) || void 0 === r ? void 0 : r.start) && void 0 !== m ? m : 0,
                                    end: null !== (v = null !== (h = null == s ? void 0 : s.end) && void 0 !== h ? h : null === (u = a.editMetadata) || void 0 === u ? void 0 : u.end) && void 0 !== v ? v : a.length / 1e3,
                                    applicationAudio: null === (L = null != n ? n : null === (f = a.editMetadata) || void 0 === f ? void 0 : f.applicationAudio) || void 0 === L || L,
                                    voiceAudio: null === (x = null != i ? i : null === (p = a.editMetadata) || void 0 === p ? void 0 : p.voiceAudio) || void 0 === x || x
                                }
                            })
                        } catch (e) {} finally {
                            null == o || o(), l(null)
                        }
                    }, [t, c, l]);
                    return {
                        onShareClick: C,
                        canAttachFiles: p
                    }
                }
        },
        944832: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                n = l.n(s),
                i = l("561445"),
                o = e => {
                    let {
                        aspectRatio: t,
                        style: l,
                        className: s,
                        children: o
                    } = e;
                    return (0, a.jsx)("div", {
                        className: n(i.outer, s),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...l
                        },
                        children: (0, a.jsx)("div", {
                            className: i.inner,
                            children: o
                        })
                    })
                }
        },
        491920: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("469563"),
                n = l("743087"),
                i = l("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: l = 32,
                        color: s = "currentColor",
                        ...n
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(n),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                            fill: s
                        })
                    })
                }, n.ShareIcon, void 0, {
                    size: 32
                })
        },
        826432: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("469563"),
                n = l("49097"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        className: n,
                        foreground: i
                    } = e;
                    return (0, a.jsxs)("svg", {
                        className: n,
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                        }), (0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                        }), (0, a.jsx)("path", {
                            className: i,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                        })]
                    })
                }, n.SparklesIcon, void 0, {
                    size: 24
                })
        },
        15165: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("75196");

            function n(e) {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: n = "currentColor",
                    foreground: i,
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    width: t,
                    height: l,
                    viewBox: "0 0 18 20",
                    children: (0, a.jsx)("path", {
                        fill: n,
                        className: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z"
                    })
                })
            }
        }
    }
]);