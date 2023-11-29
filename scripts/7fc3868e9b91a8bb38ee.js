(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85740"], {
        540105: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb68ef84648ccf3be81.svg"
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("77078"),
                a = n("390236"),
                l = s.memo(function(e) {
                    var t, n, l, u;
                    let {
                        user: c,
                        size: o = i.AvatarSizes.SIZE_32,
                        animate: d = !1,
                        "aria-hidden": f = !1,
                        ...C
                    } = e, E = s.useContext(a.default);
                    return (0, r.jsx)(i.Avatar, {
                        src: (t = c, n = (0, i.getAvatarSize)(o), l = d, u = E, t.getAvatarURL(u, n, l)),
                        size: o,
                        "aria-label": f ? void 0 : c.username,
                        "aria-hidden": f,
                        ...C
                    })
                })
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19ZM18 9.41421V13C18 13.5523 18.4477 14 19 14C19.5523 14 20 13.5523 20 13V7C20 6.44772 19.5523 6 19 6H13C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8H16.5858L11.5 13.0858L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929L4.29289 15.2929C3.90237 15.6834 3.90237 16.3166 4.29289 16.7071C4.68342 17.0976 5.31658 17.0976 5.70711 16.7071L9 13.4142L10.7929 15.2071C11.1834 15.5976 11.8166 15.5976 12.2071 15.2071L18 9.41421Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    })
                })
            }
        },
        441888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSadIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6 2H18C20.2091 2 22 3.79086 22 6V13.5C22 13.7761 21.7761 14 21.5 14H19C16.2386 14 14 16.2386 14 19V21.5C14 21.7761 13.7761 22 13.5 22H6C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2ZM6.5 10C7.32843 10 8 9.32843 8 8.5C8 7.67157 7.32843 7 6.5 7C5.67157 7 5 7.67157 5 8.5C5 9.32843 5.67157 10 6.5 10ZM17.5 10C18.3284 10 19 9.32843 19 8.5C19 7.67157 18.3284 7 17.5 7C16.6716 7 16 7.67157 16 8.5C16 9.32843 16.6716 10 17.5 10ZM7.70142 13.831C8.16038 14.1382 8.78148 14.0152 9.08869 13.5563C9.71825 12.6158 10.7874 12 11.9999 12C13.2124 12 14.2815 12.6158 14.9111 13.5563C15.2183 14.0152 15.8394 14.1382 16.2984 13.831C16.7573 13.5238 16.8803 12.9027 16.5731 12.4437C15.5881 10.9723 13.9078 10 11.9999 10C10.092 10 8.41166 10.9723 7.42669 12.4437C7.11947 12.9027 7.24247 13.5238 7.70142 13.831Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    }), (0, r.jsx)("path", {
                        d: "M21.6593 16C21.6927 16 21.7148 16.0344 21.7003 16.0644C21.5555 16.3635 21.3607 16.6393 21.1213 16.8787L16.8787 21.1213C16.6393 21.3607 16.3635 21.5555 16.0644 21.7003C16.0344 21.7148 16 21.6927 16 21.6593V19C16 17.3431 17.3431 16 19 16H21.6593Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    })]
                })
            }
        },
        47693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TrashIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M14.25 1C14.6642 1 15 1.33579 15 1.75L15 3H20.25C20.6642 3 21 3.33579 21 3.75V4.25C21 4.66421 20.6642 5 20.25 5H3.75C3.33579 5 3 4.66421 3 4.25V3.75C3 3.33579 3.33579 3 3.75 3H9V1.75C9 1.33579 9.33579 1 9.75 1H14.25Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.06449 7C4.48767 7 4.03046 7.48668 4.06644 8.06238L4.82424 20.1871C4.92306 21.7682 6.23421 23 7.8184 23H16.1817C17.7659 23 19.077 21.7682 19.1758 20.1871L19.9336 8.06238C19.9696 7.48668 19.5124 7 18.9356 7H5.06449ZM11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12L9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V12ZM14 11C14.5523 11 15 11.4477 15 12V18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18V12C13 11.4477 13.4477 11 14 11Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: l
                    })]
                })
            }
        },
        246511: function(e, t, n) {
            "use strict";
            var r, s, i, a;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return r
                },
                PickerContextMenuDataTypes: function() {
                    return s
                }
            }), (i = r || (r = {}))[i.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", i[i.MOUSE_EVENT = 1] = "MOUSE_EVENT", (a = s || (s = {})).EMOJI = "emoji", a.STICKER = "sticker", a.PACK_ICON = "pack-icon"
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return a
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var r = n("316693"),
                s = n("923510"),
                i = n("49111");
            let a = i.Permissions.VIEW_CHANNEL,
                l = r.default.combine(a, i.Permissions.CONNECT),
                u = r.default.combine(a, s.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return v
                },
                getManageResourcePermissions: function() {
                    return h
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return m
                }
            }), n("222007");
            var r = n("884691"),
                s = n("316693"),
                i = n("446674"),
                a = n("252931"),
                l = n("813006");
            n("923959");
            var u = n("957255"),
                c = n("697218");
            n("991170");
            var o = n("270161"),
                d = n("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                C = (e, t, n, r) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
                    if ("userId" in e) return r && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var s;
                        return r && null != t && (null === (s = e.user) || void 0 === s ? void 0 : s.id) === t.id
                    }
                    return !1
                },
                E = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [s.default.combine(t, d.Permissions.CREATE_EVENTS), s.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                v = e => {
                    let [t, n] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e), [s, a, o, v] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(n, e)]), h = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()), m = r.useCallback(e => C(e, h, a, s), [s, a, h]), N = r.useCallback(e => C(e, h, v, o), [v, o, h]);
                    return null == e ? f : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: o,
                        canManageAllExpressions: a,
                        canManageAllEvents: v,
                        canManageGuildExpression: m,
                        canManageGuildEvent: N
                    }
                },
                h = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default,
                        [r, s] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e),
                        i = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        a = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        o = t.can(r, e),
                        v = t.can(s, e),
                        h = n.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: i,
                        canCreateGuildEvent: o,
                        canManageAllExpressions: a,
                        canManageAllEvents: v,
                        canManageGuildExpression: e => C(e, h, a, i),
                        canManageGuildEvent: e => C(e, h, v, o)
                    }
                },
                m = e => {
                    let t = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, a.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        41170: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getStickerAltText: function() {
                    return M
                },
                default: function() {
                    return G
                }
            }), n("222007");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("627445"),
                u = n.n(l),
                c = n("301165"),
                o = n("446674"),
                d = n("290381"),
                f = n("77078"),
                C = n("206230"),
                E = n("407063"),
                v = n("54560"),
                h = n("983782"),
                m = n("866190"),
                N = n("256860"),
                S = n("161585"),
                g = n("24373"),
                p = n("782340"),
                I = n("787309");
            let x = e => e.preventDefault(),
                A = {
                    tension: 1100,
                    friction: 40
                },
                R = {
                    tension: 1600,
                    friction: 60
                };

            function _(e, t) {
                return s.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function M(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return p.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let L = e => {
                    let {
                        children: t,
                        hasError: n,
                        isLoading: s,
                        maskAsset: i,
                        size: l,
                        withLoadingIndicator: u = !0
                    } = e, c = l >= 33;
                    return (0, r.jsxs)("div", {
                        className: a(I.assetWrapper, {
                            [I.assetWrapperMasked]: n || i
                        }),
                        style: {
                            height: l,
                            width: l
                        },
                        children: [n ? (0, r.jsxs)("div", {
                            className: I.error,
                            children: [(0, r.jsx)(v.default, {
                                className: I.errorIcon
                            }), c && (0, r.jsx)(f.Text, {
                                className: I.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: p.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, u && s && (0, r.jsx)("div", {
                            className: I.loadingIndicator
                        })]
                    })
                },
                V = e => {
                    let {
                        shouldAnimate: t,
                        size: i,
                        sticker: a,
                        fileUri: l,
                        assetData: c,
                        isFocused: o,
                        className: d,
                        maskAsset: f,
                        positionRef: C,
                        withLoadingIndicator: v,
                        onError: h
                    } = e, m = s.useRef(null), N = s.useRef(null), [S, x] = s.useState(!0), [A, R] = s.useState(!1), V = s.useRef(!1);
                    V.current = t && o;
                    let T = null == l ? (0, g.getStickerAssetUrl)(a) : l;
                    return (u(null != T, "Unable to determine sticker asset URL. Sticker ID: ".concat(a.id)), s.useEffect(() => {
                        if (null == m.current || null == T) return;
                        let e = Math.min(2, (0, E.getDevicePixelRatio)());
                        m.current.width = i * e, m.current.height = i * e;
                        let t = !1,
                            r = async () => {
                                let {
                                    default: e
                                } = await n.el("619596").then(n.bind(n, "619596"));
                                null != m.current && (N.current = new e({
                                    canvas: m.current,
                                    animationId: a.id,
                                    assetUrl: T,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !t && x(!1)
                                    },
                                    onError: () => {
                                        !t && (x(!1), R(!0), null == h || h())
                                    }
                                }), V.current && N.current.setState(!0))
                            };
                        return r(), () => {
                            var e;
                            null === (e = N.current) || void 0 === e || e.drop(), N.current = null, t = !0
                        }
                    }, [T, i, a.id, c, h]), s.useEffect(() => {
                        var e;
                        let n;
                        !t && (n = 0), null === (e = N.current) || void 0 === e || e.setState(t && o, n)
                    }, [a, t, o]), null == T) ? null : (0, r.jsx)("div", {
                        role: "img",
                        className: d,
                        "aria-label": A ? p.default.Messages.ERROR_LOADING_STICKER : M(a),
                        ref: C,
                        children: (0, r.jsx)(L, {
                            hasError: A,
                            isLoading: S,
                            maskAsset: f,
                            size: i,
                            withLoadingIndicator: v,
                            children: _((0, r.jsx)("canvas", {
                                className: I.lottieCanvas,
                                ref: m
                            }), a.id)
                        })
                    })
                },
                T = e => {
                    let {
                        shouldAnimate: t,
                        sticker: n,
                        isFocused: i,
                        size: l,
                        className: u,
                        maskAsset: c,
                        positionRef: o,
                        withLoadingIndicator: f,
                        fileUri: C
                    } = e, [E, v] = s.useState(!1), [h, m] = s.useState(!0), [N, S] = s.useState(!1), p = s.useRef(null), A = s.useRef(null), R = null != C ? C : (0, g.getStickerAssetUrl)(n, {
                        isPreview: !t || !E || !i,
                        size: l
                    }), V = s.useCallback(() => {
                        m(!1)
                    }, []), T = s.useCallback(() => {
                        S(!0)
                    }, []);
                    return (s.useEffect(() => {
                        if (null != p.current) {
                            let {
                                isVisible: e
                            } = p.current;
                            v(e)
                        }
                    }, []), s.useLayoutEffect(() => {
                        var e;
                        (null === (e = A.current) || void 0 === e ? void 0 : e.complete) === !0 && m(!1)
                    }, []), null == R) ? null : (0, r.jsx)(d.VisibilitySensor, {
                        ref: p,
                        onChange: v,
                        threshold: .7,
                        children: (0, r.jsx)("div", {
                            className: a(u, I.pngImageWrapper),
                            ref: o,
                            children: (0, r.jsx)(L, {
                                hasError: N,
                                isLoading: h,
                                maskAsset: c,
                                size: l,
                                withLoadingIndicator: f,
                                children: _((0, r.jsx)("img", {
                                    className: I.pngImage,
                                    alt: M(n),
                                    src: R,
                                    draggable: !1,
                                    onError: T,
                                    onLoad: V,
                                    onContextMenu: x,
                                    ref: A
                                }), n.id)
                            })
                        })
                    })
                },
                j = e => {
                    let {
                        disableAnimation: t,
                        enlargeScaleFactor: n,
                        enlargeWithName: i,
                        isInteracting: a,
                        positionRef: l,
                        size: u,
                        sticker: d
                    } = e, E = (0, o.useStateFromStores)([C.default], () => C.default.useReducedMotion), v = s.useRef(null), m = {
                        transform: "scale(".concat(E ? 1 : 1 / n, ")"),
                        opacity: 0
                    }, N = (0, c.useTransition)(a, {
                        ref: v,
                        from: m,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: m,
                        config: A
                    }), S = s.useRef(null), g = (0, c.useSpring)({
                        ref: S,
                        transform: a || E ? "translateY(0)" : "translateY(-25px)",
                        opacity: a ? 1 : 0,
                        config: R
                    });
                    return (0, c.useChain)(a ? [v, S] : [S, v], a ? [0, .0625] : [0, 0]), N((e, s) => s && (0, r.jsx)(h.AppReferencePositionLayer, {
                        className: I.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: l,
                        children: () => (0, r.jsxs)("div", {
                            className: I.overlayWrapper,
                            children: [(0, r.jsx)(c.animated.div, {
                                className: I.overlayStickerWrapper,
                                style: e,
                                children: (0, r.jsx)(w, {
                                    className: I.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: a,
                                    maskAsset: !1,
                                    sticker: d,
                                    size: Math.round(u * n),
                                    withLoadingIndicator: !1
                                })
                            }), i && (0, r.jsx)(c.animated.div, {
                                className: I.overlayLabelWrapper,
                                style: g,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: I.overlayLabel,
                                    children: d.name
                                })
                            })]
                        })
                    }))
                },
                w = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: n = !1,
                        enlargeOnInteraction: i = !1,
                        enlargeWithName: a = !0,
                        enlargeScaleFactor: l = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: o,
                        className: d,
                        withLoadingIndicator: f,
                        assetData: C,
                        fileUri: E,
                        onError: v
                    } = e, h = (0, m.useIsWindowFocused)(), g = (0, N.useShouldAnimateSticker)(t) && !n, p = s.useRef(null);
                    if (null == o) return null;
                    let I = o.format_type === S.StickerFormat.LOTTIE ? V : T;
                    return (0, r.jsxs)(s.Fragment, {
                        children: [(0, r.jsx)(I, {
                            shouldAnimate: g,
                            isFocused: h,
                            size: c,
                            sticker: o,
                            className: d,
                            maskAsset: u,
                            positionRef: p,
                            withLoadingIndicator: f,
                            assetData: C,
                            fileUri: E,
                            onError: v
                        }), i && (0, r.jsx)(j, {
                            disableAnimation: n,
                            enlargeScaleFactor: l,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: p,
                            size: c,
                            sticker: o
                        })]
                    }, "".concat(o.id, ",").concat(c))
                };
            var G = w
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("503420"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, r.jsx)("path", {
                                className: i,
                                fill: s,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, i.ClockIcon, void 0, {
                    size: 20
                })
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("305861"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, r.jsx)("path", {
                                className: i,
                                fill: s,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, i.ShieldUserIcon, void 0, {
                    size: 23
                })
        },
        54560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("441888"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: s = "currentColor",
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(i),
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 .663v4.739A2.594 2.594 0 0014.6 8h4.74a.656.656 0 00.466-1.12L13.121.196A.654.654 0 0012 .663zm2.576 9.365A4.608 4.608 0 019.97 5.422V.058H1.994A2 2 0 000 2.052v15.952a2 2 0 001.994 1.994h15.952a2 2 0 001.994-1.994v-7.976h-5.364zM8 15.553a2 2 0 113.999 0h1.333a3.333 3.333 0 10-6.666 0h1.334zM2.716 13.5L2 12.784 2.784 12l.716.716.716-.716.784.784-.716.716.716.716-.784.784-.716-.716-.716.716L2 14.216l.716-.716zM15 12.784l.716.716-.716.716.784.784.716-.716.716.716.784-.784-.716-.716.716-.716-.784-.784-.716.716-.716-.716-.784.784z",
                            fill: s
                        })
                    })
                }, i.StickerSadIcon, void 0, {
                    size: 20
                })
        },
        228220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("47693"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            fill: s,
                            className: i,
                            d: "M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
                        }), (0, r.jsx)("path", {
                            fill: s,
                            className: i,
                            d: "M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
                        })]
                    })
                }, i.TrashIcon, void 0, {
                    size: 24
                })
        },
        240292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("308472"),
                a = n("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: i,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, r.jsx)("path", {
                                className: i,
                                fill: s,
                                d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                            })
                        })
                    })
                }, i.AnalyticsIcon, void 0, {
                    size: 24
                })
        },
        841559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("75196");

            function i(e) {
                let {
                    width: t = 8,
                    height: n = 13,
                    color: i = "currentColor",
                    foreground: a,
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 13",
                    children: (0, r.jsx)("path", {
                        className: null != a ? a : void 0,
                        stroke: i,
                        fill: "transparent",
                        d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
                    })
                })
            }
        },
        898260: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                l = n("841559"),
                u = n("782340"),
                c = n("359027"),
                o = s.forwardRef(function(e, t) {
                    let {
                        className: n,
                        contentClassName: s,
                        isUnread: i,
                        children: o,
                        id: d,
                        role: f,
                        "aria-label": C
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: a(n, {
                            [c.divider]: !0,
                            [c.isUnread]: i,
                            [c.hasContent]: null != o
                        }),
                        ref: t,
                        id: d,
                        role: f,
                        "aria-label": C,
                        children: [null != o ? (0, r.jsx)("span", {
                            className: a(c.content, s),
                            children: o
                        }) : null, i ? (0, r.jsxs)("span", {
                            className: c.unreadPill,
                            children: [(0, r.jsx)(l.default, {
                                foreground: c.unreadPillCapStroke,
                                className: c.unreadPillCap
                            }), u.default.Messages.NEW]
                        }) : null]
                    })
                })
        }
    }
]);