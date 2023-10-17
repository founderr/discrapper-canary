"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [80702], {
        853543: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(270946),
                l = n(473708);
            const a = function() {
                return (0, r.jsx)(o.TooltipContainer, {
                    text: l.Z.Messages.CLIPS_BETA_TAG_HOVER,
                    children: (0, r.jsx)(i.Z, {})
                })
            }
        },
        180702: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => Ce
            });
            var r = n(785893),
                o = n(667294),
                i = n(824390),
                l = n.n(i),
                a = n(496486),
                c = n.n(a),
                s = n(571657),
                u = n(202351),
                f = n(264817),
                d = n(304548),
                p = n(153686),
                b = n(19585),
                h = n(479373),
                y = n(102921),
                v = n(335072),
                m = n(860123),
                g = n(684680),
                O = n(730381),
                j = n.n(O),
                w = n(513328),
                P = n(306472),
                x = n(940405),
                S = n(473903),
                C = n(993137),
                L = n(843133),
                E = n(859592),
                N = n(972304),
                Z = n(994655),
                I = n(633878);

            function D(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function k(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function _(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    s = k(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", M(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            D(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, I.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 18 20",
                    children: (0, r.jsx)("path", {
                        fill: a,
                        className: c,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z"
                    })
                }))
            }
            var A = n(786170),
                T = n(652591),
                R = n(72580),
                H = n(2590),
                B = n(473708),
                V = n(359064),
                z = n.n(V);

            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function G(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        G(e, t, n[t])
                    }))
                }
                return e
            }

            function U(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return F(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Q;
            ! function(e) {
                e.DELETE = "delete";
                e.EDIT = "edit";
                e.SHARE = "share"
            }(Q || (Q = {}));
            const q = function(e) {
                var t, n, i, l = e.clip,
                    a = e.exporting,
                    c = e.actionsDisabled,
                    s = e.isNew,
                    f = e.canShare,
                    h = e.onDelete,
                    v = e.onEdit,
                    m = e.onShare,
                    g = (0, u.Wu)([S.default], (function() {
                        return l.users.map((function(e) {
                            return S.default.getUser(e)
                        })).filter(R.lm)
                    })),
                    O = (0, b.Z)(p.Z.CLIPS_GALLERY_ITEM).AnalyticsLocationProvider,
                    j = o.useRef(null),
                    P = (0, L.Z)(null !== (i = null === (t = l.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== i ? i : 0),
                    C = o.useRef(new w.sW(500, (function() {
                        var e, t = j.current;
                        if (null != t) {
                            t.currentTime = P.current;
                            null === (e = j.current) || void 0 === e || e.play()
                        }
                    }))),
                    E = o.useCallback((function() {
                        var e;
                        null === (e = C.current) || void 0 === e || e.delay()
                    }), []),
                    N = o.useCallback((function() {
                        var e, t, n = j.current;
                        null === (e = C.current) || void 0 === e || e.cancel();
                        if (null != n) {
                            n.pause();
                            var r;
                            n.currentTime = null !== (r = null === (t = l.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== r ? r : 0
                        }
                    }), [null === (n = l.editMetadata) || void 0 === n ? void 0 : n.start]),
                    Z = !Boolean(l.name),
                    I = new Date(y.Z.extractTimestamp(l.id)),
                    D = I.toLocaleDateString(),
                    M = I.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    k = "".concat(D, " • ").concat(M);
                return (0, r.jsx)(O, {
                    children: (0, r.jsxs)(d.Clickable, {
                        "aria-label": B.Z.Messages.EDIT,
                        onClick: function() {
                            v(l);
                            T.default.track(H.rMx.CLIP_GALLERY_CARD_CLICKED)
                        },
                        className: z().clipItem,
                        onMouseOver: E,
                        onMouseLeave: N,
                        children: [(0, r.jsx)(W, {
                            clip: l,
                            isNew: s,
                            videoRef: j
                        }), (0, r.jsxs)("div", {
                            className: z().clipFooter,
                            children: [Z ? (0, r.jsx)(d.Heading, {
                                className: z().clipTitle,
                                color: "text-muted",
                                variant: "heading-lg/medium",
                                children: B.Z.Messages.CLIPS_UNTITLED
                            }) : (0, r.jsx)(d.Heading, {
                                className: z().clipTitle,
                                color: "text-normal",
                                variant: "heading-lg/medium",
                                children: l.name
                            }), (0, r.jsx)(d.Text, {
                                className: z().clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: l.applicationName
                            }), (0, r.jsx)(d.Text, {
                                className: z().clipMetadata,
                                color: "text-normal",
                                variant: "text-md/medium",
                                children: k
                            }), (0, r.jsxs)("div", {
                                className: z().usersAndDelete,
                                children: [(0, r.jsx)(x.Z, {
                                    maxUsers: 4,
                                    users: g
                                }), (0, r.jsx)($, {
                                    clip: l,
                                    canShare: f,
                                    actionsDisabled: c,
                                    exporting: a,
                                    onDelete: h,
                                    onEdit: v,
                                    onShare: m
                                })]
                            })]
                        })]
                    })
                })
            };

            function W(e) {
                var t = e.clip,
                    n = e.isNew,
                    i = e.videoRef,
                    l = o.useMemo((function() {
                        return null == P.Z.clips.getClipProtocolURLFromPath ? null : P.Z.clips.getClipProtocolURLFromPath(t.filepath)
                    }), [t.filepath]),
                    a = K(o.useMemo((function() {
                        var e = t.length,
                            n = !1,
                            r = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
                        if (null != r && 1e3 * r < t.length) {
                            e = 1e3 * r;
                            n = !0
                        }
                        return [n, j().duration(e)]
                    }), [t.length, t.editMetadata]), 2),
                    c = a[0],
                    s = a[1],
                    u = "".concat(s.seconds()).padStart(2, "0");
                return (0, r.jsxs)(C.Z, {
                    aspectRatio: 16 / 9,
                    className: z().clipThumbContainer,
                    children: [null != l ? (0, r.jsx)(A.Z, {
                        preload: "metadata",
                        muted: !0,
                        poster: t.thumbnail,
                        src: l,
                        loop: !0,
                        className: z().clipThumb,
                        ref: i
                    }) : (0, r.jsx)("img", {
                        alt: "",
                        src: t.thumbnail,
                        className: z().clipThumb
                    }), (0, r.jsxs)("div", {
                        className: z().clipBadges,
                        children: [n ? (0, r.jsxs)(d.Text, {
                            className: z().clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [(0, r.jsx)(N.Z, {
                                className: z().newIcon
                            }), B.Z.Messages.NEW.toUpperCase()]
                        }) : null, (0, r.jsxs)("div", {
                            className: z().clipDurationBadge,
                            children: [c ? (0, r.jsx)(_, {
                                className: z().clipDurationEditIcon
                            }) : null, (0,
                                r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: "".concat(s.minutes(), ":").concat(u)
                            })]
                        })]
                    })]
                })
            }

            function $(e) {
                var t = e.clip,
                    n = e.exporting,
                    o = e.actionsDisabled,
                    i = e.canShare,
                    l = e.onDelete,
                    a = e.onEdit,
                    c = e.onShare;
                return (0, r.jsxs)("div", {
                    className: z().buttonContainer,
                    children: [null != l && (0, r.jsx)(d.Tooltip, {
                        text: B.Z.Messages.DELETE,
                        children: function(e) {
                            return (0, r.jsx)(d.Button, U(Y({}, e), {
                                disabled: o,
                                color: d.Button.Colors.PRIMARY,
                                onClick: function(e) {
                                    e.stopPropagation();
                                    e.shiftKey ? (0, m.sS)(t.filepath) : l(t);
                                    T.default.track(H.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: Q.DELETE
                                    })
                                },
                                className: z().button,
                                size: d.Button.Sizes.NONE,
                                look: d.Button.Looks.FILLED,
                                children: (0, r.jsx)(Z.Z, {
                                    className: z().miniIcon
                                })
                            }))
                        }
                    }), (0, r.jsx)(d.Tooltip, {
                        text: B.Z.Messages.EDIT,
                        children: function(e) {
                            return (0, r.jsx)(d.Button, U(Y({}, e), {
                                disabled: o,
                                color: d.Button.Colors.PRIMARY,
                                onClick: function(e) {
                                    e.stopPropagation();
                                    a(t);
                                    T.default.track(H.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: Q.EDIT
                                    })
                                },
                                className: z().button,
                                size: d.Button.Sizes.NONE,
                                look: d.Button.Looks.FILLED,
                                children: (0, r.jsx)(_, {
                                    className: z().miniIcon
                                })
                            }))
                        }
                    }), (0, r.jsx)(d.Tooltip, {
                        text: i ? B.Z.Messages.SHARE : B.Z.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                        children: function(e) {
                            return (0, r.jsx)(d.Button, U(Y({}, e), {
                                disabled: o && !n || !i,
                                submitting: n,
                                color: d.Button.Colors.BRAND,
                                onClick: function(e) {
                                    e.stopPropagation();
                                    c(t);
                                    T.default.track(H.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: Q.SHARE
                                    })
                                },
                                className: z().button,
                                size: d.Button.Sizes.NONE,
                                look: d.Button.Looks.FILLED,
                                children: (0, r.jsx)(E.Z, {
                                    className: z().miniIcon
                                })
                            }))
                        }
                    })]
                })
            }
            var J = n(294184),
                X = n.n(J),
                ee = n(318715),
                te = n(396179),
                ne = n(138049),
                re = n(79251),
                oe = n(241657),
                ie = n.n(oe);

            function le(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ae(e) {
                var t = e.isEmptyBecauseQuery,
                    n = e.closePopout,
                    i = (0, ee.ZP)([ne.Z], (function() {
                        return ne.Z.getKeybindForAction(H.kg4.SAVE_CLIP)
                    })),
                    l = (0, ee.ZP)([v.Z], (function() {
                        return v.Z.getSettings().clipsEnabled
                    })),
                    a = t ? ie().noSearchResultsImage : ie().noClipsImage,
                    c = o.useCallback((function() {
                        n();
                        te.Z.open(H.oAB.CLIPS)
                    }), [n]),
                    s = function() {
                        if (!l) return B.Z.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
                            onClick: c
                        });
                        if (t) return B.Z.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
                        if (null == i) return B.Z.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
                            onClick: c
                        });
                        var e = re.BB(i.shortcut, !0);
                        return B.Z.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                            keybind: e,
                            keybindHook: function() {
                                return (0, r.jsx)("span", {
                                    className: ie().keybindHintKeys,
                                    children: (0, r.jsx)(d.KeyCombo, {
                                        className: ie().keybindShortcut,
                                        shortcut: e
                                    })
                                })
                            }
                        })
                    }();
                return (0, r.jsx)("div", {
                    className: ie().container,
                    children: (0, r.jsxs)("div", {
                        className: ie().content,
                        children: [(0, r.jsx)("div", {
                            className: a
                        }), (0, r.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: X()(ie().noClipsText, le({}, ie().noSearchResultsText, t)),
                            children: s
                        })]
                    })
                })
            }
            var ce = n(190186),
                se = n(149779),
                ue = n(466317),
                fe = n(853543),
                de = n(77420),
                pe = n.n(de);

            function be(e) {
                var t = e.filterQuery,
                    n = e.setFilterQuery,
                    o = e.onClose,
                    i = e.sortOrder,
                    l = e.setSortOrder;
                return (0, r.jsxs)(d.ModalHeader, {
                    className: pe().root,
                    separator: !1,
                    children: [(0, r.jsx)(se.Z, {
                        className: pe().icon
                    }), (0, r.jsx)(d.Heading, {
                        className: pe().title,
                        variant: "heading-xxl/bold",
                        children: B.Z.Messages.CLIPS
                    }), (0, r.jsx)("div", {
                        className: pe().betaTag,
                        children: (0, r.jsx)(fe.Z, {})
                    }), (0, r.jsx)(ce.Z, {
                        autoFocus: !0,
                        size: ce.Z.Sizes.MEDIUM,
                        placeholder: B.Z.Messages.SEARCH,
                        className: pe().queryInput,
                        query: t,
                        onChange: n,
                        onClear: function() {
                            return n("")
                        }
                    }), (0, r.jsx)(d.Select, {
                        placeholder: B.Z.Messages.CLIPS_SORT_PLACEHOLDER,
                        className: pe().sortInput,
                        options: [{
                            value: "descending",
                            label: B.Z.Messages.CLIPS_SORT_RECENT
                        }, {
                            value: "ascending",
                            label: B.Z.Messages.CLIPS_SORT_OLDEST
                        }],
                        isSelected: function(e) {
                            return e === i
                        },
                        select: l,
                        serialize: function(e) {
                            return e
                        }
                    }), (0, r.jsx)(d.Button, {
                        color: d.ButtonColors.TRANSPARENT,
                        size: d.Button.Sizes.NONE,
                        className: pe().settingsButton,
                        look: d.Button.Looks.FILLED,
                        onClick: function() {
                            te.Z.open(H.oAB.CLIPS);
                            o()
                        },
                        children: (0, r.jsx)(ue.Z, {})
                    }), (0, r.jsx)(d.ModalCloseButton, {
                        className: pe().button,
                        onClick: o
                    })]
                })
            }
            var he = n(453790),
                ye = n(456278),
                ve = n.n(ye);

            function me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ge(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function Oe(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            ge(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            ge(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function je(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        je(e, t, n[t])
                    }))
                }
                return e
            }

            function Pe(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function xe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return me(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return me(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Se = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function Ce(e) {
                var t = e.channelId,
                    i = e.onClose,
                    a = e.transitionState,
                    O = xe(o.useState(""), 2),
                    j = O[0],
                    w = O[1],
                    P = xe(o.useState("descending"), 2),
                    x = P[0],
                    S = P[1],
                    C = xe(o.useState(!0), 2),
                    L = C[0],
                    E = C[1],
                    N = xe(o.useState(null), 2),
                    Z = N[0],
                    I = N[1],
                    D = o.useDeferredValue(j),
                    M = (0, u.e7)([v.Z], (function() {
                        return v.Z.getClips()
                    })),
                    k = (0, u.e7)([v.Z], (function() {
                        return v.Z.getSettings().storageLocation
                    })),
                    _ = (0, u.e7)([v.Z], (function() {
                        return v.Z.getState().newClipIds
                    })),
                    A = (0, b.Z)(p.Z.CLIPS_GALLERY).AnalyticsLocationProvider;
                (0, h.Z)({
                    type: s.nv.MODAL,
                    name: s.zs.CLIP_GALLERY_VIEWED,
                    properties: {
                        number_of_clips_loaded: M.length
                    }
                }, {
                    disableTrack: L
                }, [M.length, L]);
                o.useEffect((function() {
                    return m.zq
                }), []);
                var T = o.useMemo((function() {
                    return c()(M).filter((function(e) {
                        if ("" === D.trim()) return !0;
                        var t = D.toLowerCase();
                        return null != e.name && "" !== e.name && l()(t, e.name.toLowerCase()) || l()(t, e.applicationName.toLowerCase())
                    })).sort((function(e, t) {
                        return "ascending" === x ? y.Z.compare(e.id, t.id) : "descending" === x ? y.Z.compare(t.id, e.id) : 0
                    })).chunk(3).value()
                }), [M, D, x]);
                o.useEffect((function() {
                    function e() {
                        return (e = Oe((function() {
                            return Se(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        E(!0);
                                        e.label = 1;
                                    case 1:
                                        e.trys.push([1, , 3, 4]);
                                        return [4, m.jv(k)];
                                    case 2:
                                        e.sent();
                                        return [3, 4];
                                    case 3:
                                        E(!1);
                                        return [7];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [k]);
                var R = o.useCallback((function(e) {
                        (0, d.openModalLazy)(Oe((function() {
                            var o, i;
                            return Se(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(46007)]).then(n.bind(n, 246007))];
                                    case 1:
                                        o = l.sent(), i = o.default;
                                        return [2, function(n) {
                                            return (0, r.jsx)(i, Pe(we({}, n), {
                                                channelId: t,
                                                clip: e
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: he.Ut
                        })
                    }), [t]),
                    H = (0, g.Z)({
                        channelId: t,
                        setExporting: I
                    }),
                    B = H.onShareClick,
                    V = H.canAttachFiles,
                    z = o.useCallback((function(e) {
                        (0, d.openModalLazy)(Oe((function() {
                            var t, o;
                            return Se(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(18079)]).then(n.bind(n, 718079))];
                                    case 1:
                                        t = i.sent(), o = t.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, Pe(we({
                                                clip: e
                                            }, t), {
                                                onDelete: function() {
                                                    return t.onClose()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), []),
                    F = o.useCallback((function(e) {
                        var t = e.row,
                            n = T[t];
                        return (0, r.jsx)("div", {
                            className: ve().clipsRow,
                            children: n.map((function(e) {
                                return (0, r.jsx)(q, {
                                    actionsDisabled: null != Z,
                                    exporting: Z === e.id,
                                    isNew: _.includes(e.id),
                                    onDelete: z,
                                    onEdit: R,
                                    onShare: function(e) {
                                        return B({
                                            clip: e,
                                            onShareComplete: function() {
                                                return f.Mr(he.Qr)
                                            }
                                        })
                                    },
                                    canShare: V,
                                    clip: e
                                }, e.id)
                            }))
                        }, "clips-gallery-".concat(t))
                    }), [T, _, Z, B, z, R, V]),
                    G = L || 0 !== T.length ? L ? (0, r.jsx)("div", {
                        className: ve().spinnerContainer,
                        children: (0, r.jsx)(d.Spinner, {})
                    }) : (0, r.jsx)(d.List, {
                        className: ve().clipGrid,
                        sections: [T.length],
                        sectionHeight: 0,
                        rowHeight: 328.25,
                        renderRow: F
                    }) : (0, r.jsx)(ae, {
                        isEmptyBecauseQuery: M.length > 0,
                        closePopout: i
                    });
                return (0, r.jsx)(d.ModalRoot, {
                    size: d.ModalSize.DYNAMIC,
                    transitionState: a,
                    className: ve().root,
                    children: (0, r.jsxs)(A, {
                        children: [(0, r.jsx)(be, {
                            onClose: i,
                            filterQuery: j,
                            setFilterQuery: w,
                            sortOrder: x,
                            setSortOrder: S
                        }), G]
                    })
                })
            }
        },
        118794: (e, t, n) => {
            n.d(t, {
                e: () => O
            });
            var r = n(785893),
                o = (n(667294), n(304548)),
                i = n(61209),
                l = n(284610),
                a = n(652591),
                c = n(102921),
                s = n(15084),
                u = n(311999),
                f = n(860123),
                d = n(453790),
                p = n(2590);

            function b(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function l(e) {
                            b(i, r, o, l, a, "next", e)
                        }

                        function a(e) {
                            b(i, r, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var g = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function O(e, t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = h((function(e, t) {
                    var b, y, O, j, w, P, x, S, C, L;
                    return g(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                b = t.channelId, y = t.editMetadata, O = t.analyticsLocations;
                                if (null == (j = i.Z.getChannel(b))) return [3, 5];
                                E.label = 1;
                            case 1:
                                E.trys.push([1, 3, , 4]);
                                return [4, (0, f.rO)(e, y)];
                            case 2:
                                w = E.sent();
                                x = null !== (P = e.name) && void 0 !== P ? P : (0, d.yl)(c.Z.extractTimestamp(e.id));
                                S = (0, u.Z)(x);
                                C = "".concat("" !== S ? S : "clip", ".mp4");
                                (0, s.d)([new File([w], C, {
                                    type: "video/mp4"
                                })], j, l.d.ChannelMessage, {
                                    isClip: !0
                                });
                                a.default.track(p.rMx.CLIP_SHARED, {
                                    location_stack: O,
                                    guild_id: j.guild_id,
                                    channel_id: j.id,
                                    channel_type: j.type,
                                    application_id: e.applicationId
                                });
                                return [3, 4];
                            case 3:
                                L = E.sent();
                                d.jF.error(L);
                                throw L;
                            case 4:
                                return [3, 6];
                            case 5:
                                (0, o.openModalLazy)(h((function() {
                                    var t, o;
                                    return g(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(35650)]).then(n.bind(n, 335650))];
                                            case 1:
                                                t = i.sent(), o = t.default;
                                                return [2, function(t) {
                                                    return (0, r.jsx)(o, m(v({}, t), {
                                                        clip: e,
                                                        editMetadata: y
                                                    }))
                                                }]
                                        }
                                    }))
                                })));
                                E.label = 6;
                            case 6:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        684680: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(667294),
                o = n(318715),
                i = n(19585),
                l = n(61209),
                a = n(682776),
                c = n(118794),
                s = n(2590);

            function u(e, t, n, r, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }
            var f = function(e, t) {
                var n, r, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            const d = function(e) {
                var t, n, d = e.channelId,
                    p = e.setExporting,
                    b = (0, i.Z)().analyticsLocations,
                    h = (0, o.ZP)([l.Z], (function() {
                        return l.Z.getChannel(d)
                    })),
                    y = null == h ? void 0 : h.isPrivate(),
                    v = (0, o.ZP)([a.Z], (function() {
                        return null == d || y || a.Z.can(s.Plq.ATTACH_FILES, h) && a.Z.can(s.Plq.SEND_MESSAGES, h)
                    })),
                    m = r.useCallback((n = (t = function(e) {
                        var t, n, r, o, i, l, a, s, u, h, y, v, m, g, O;
                        return f(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    t = e.clip, n = e.cropData, r = e.applicationAudioEnabled, o = e.voiceAudioEnabled, i = e.onShareComplete;
                                    p(t.id);
                                    f.label = 1;
                                case 1:
                                    f.trys.push([1, 3, 4, 5]);
                                    return [4, (0, c.e)(t, {
                                        channelId: d,
                                        analyticsLocations: b,
                                        editMetadata: {
                                            start: null !== (y = null !== (h = null == n ? void 0 : n.start) && void 0 !== h ? h : null === (l = t.editMetadata) || void 0 === l ? void 0 : l.start) && void 0 !== y ? y : 0,
                                            end: null !== (m = null !== (v = null == n ? void 0 : n.end) && void 0 !== v ? v : null === (a = t.editMetadata) || void 0 === a ? void 0 : a.end) && void 0 !== m ? m : t.length / 1e3,
                                            applicationAudio: null === (g = null != r ? r : null === (s = t.editMetadata) || void 0 === s ? void 0 : s.applicationAudio) || void 0 === g || g,
                                            voiceAudio: null === (O = null != o ? o : null === (u = t.editMetadata) || void 0 === u ? void 0 : u.voiceAudio) || void 0 === O || O
                                        }
                                    })];
                                case 2:
                                case 3:
                                    f.sent();
                                    return [3, 5];
                                case 4:
                                    null == i || i();
                                    p(null);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function l(e) {
                                u(i, r, o, l, a, "next", e)
                            }

                            function a(e) {
                                u(i, r, o, l, a, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function(e) {
                        return n.apply(this, arguments)
                    }), [d, b, p]);
                return {
                    onShareClick: m,
                    canAttachFiles: v
                }
            }
        },
        859592: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                l = n(633878);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 32 : t,
                    o = e.height,
                    i = void 0 === o ? 32 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    s = d(e, ["width", "height", "color"]);
                return (0, r.jsx)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(s)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                        fill: c
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        972304: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(991977);
            const l = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.className,
                    s = e.foreground;
                return (0, r.jsxs)("svg", {
                    className: c,
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        className: s,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m22.154 11.322c-1.1922-0.647-2.2058-1.505-2.9714-2.5154-0.771-1.01-1.2719-2.1512-1.4672-3.3433l-0.7429-4.0845c-0.0182-0.09889-0.0736-0.19015-0.1578-0.26021-0.0401-0.0373-0.0888-0.06709-0.1432-0.08748-0.0543-0.02039-0.1131-0.03092-0.1725-0.03092-0.0595 0-0.1183 0.01053-0.1726 0.03092-0.0544 0.02039-0.1031 0.05018-0.1432 0.08748-0.0842 0.07006-0.1395 0.16132-0.1578 0.26021l-0.7429 4.0845c-0.2029 1.1892-0.7066 2.3271-1.4764 3.3354-0.7647 1.0105-1.7746 1.8708-2.9622 2.5233l-0.6407 0.3469c-0.0665 0.038-0.1207 0.0895-0.1579 0.1498-0.0141 0.0625-0.0141 0.1267 0 0.1893-0.0139 0.0651-0.0139 0.1319 0 0.1971 0.0396 0.0588 0.0934 0.1099 0.1579 0.1498l0.6407 0.3391c1.1876 0.6524 2.1975 1.5127 2.9622 2.5232 0.7707 1.0137 1.2743 2.1568 1.4764 3.3512l0.7429 4.0924c0.0181 0.0944 0.0738 0.1807 0.1578 0.2444 0.0893 0.0615 0.2008 0.095 0.3158 0.095 0.1149 0 0.2264-0.0335 0.3157-0.095 0.084-0.0637 0.1397-0.15 0.1578-0.2444l0.7429-4.0924c0.2025-1.1895 0.7036-2.3282 1.4694-3.339s1.7784-1.8701 2.9692-2.5197l0.6408-0.339c0.0644-0.04 0.1182-0.091 0.1578-0.1498 0.0296-0.0628 0.0453-0.1296 0.0464-0.1972-9e-4 -0.065-0.0167-0.1293-0.0464-0.1892-0.0372-0.0603-0.0914-0.1118-0.1578-0.1498l-0.6408-0.3627z"
                    }), (0, r.jsx)("path", {
                        className: s,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m8.4786 6.63c-0.73571-0.3529-1.3612-0.82091-1.8336-1.372-0.47577-0.55089-0.78481-1.1734-0.90536-1.8236l-0.45841-2.2279c-0.01128-0.05395-0.04544-0.10372-0.09741-0.14194-0.0247-0.02034-0.05479-0.03659-0.08833-0.04771-0.03355-0.01112-0.06982-0.01687-0.10649-0.01687-0.03668 0-0.07295 0.00575-0.10649 0.01687-0.03355 0.01112-0.06364 0.02737-0.08834 0.04771-0.05197 0.03822-0.08613 0.08799-0.09741 0.14194l-0.45841 2.2279c-0.12524 0.64867-0.43605 1.2693-0.91108 1.8193-0.47184 0.5512-1.095 1.0204-1.8279 1.3763l-0.39537 0.18924c-0.04101 0.02075-0.07448 0.04884-0.09742 0.08172-0.008668 0.0341-0.008668 0.06912 0 0.10322-0.008592 0.03555-0.008592 0.07197 0 0.10752 0.02444 0.03209 0.05764 0.05994 0.09742 0.08172l0.39537 0.18495c0.73288 0.35588 1.3561 0.82511 1.8279 1.3763 0.47559 0.55292 0.78638 1.1765 0.91108 1.8279l0.45841 2.2323c0.01118 0.0515 0.04557 0.0985 0.09741 0.1333 0.05511 0.0335 0.12389 0.0518 0.19483 0.0518 0.07093 0 0.13971-0.0183 0.19482-0.0518 0.05185-0.0348 0.08623-0.0818 0.09741-0.1333l0.45841-2.2323c0.12495-0.64879 0.43417-1.2699 0.90672-1.8212 0.47255-0.55133 1.0974-1.02 1.8323-1.3743l0.39538-0.18494c0.03977-0.02179 0.07297-0.04964 0.09741-0.08172 0.01824-0.03422 0.02795-0.07067 0.02865-0.10753-6e-4 -0.03547-0.01033-0.07051-0.02865-0.10322-0.02293-0.03288-0.05641-0.06096-0.09741-0.08172l-0.39538-0.19784z"
                    }), (0, r.jsx)("path", {
                        className: s,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m10.544 18.222c-0.6437-0.2646-1.191-0.6156-1.6044-1.029-0.4163-0.4131-0.68671-0.88-0.79219-1.3677l-0.4011-1.6709c-0.00987-0.0405-0.03976-0.0778-0.08524-0.1065-0.02161-0.0152-0.04794-0.0274-0.07729-0.0358-0.02935-0.0083-0.06109-0.0126-0.09318-0.0126s-0.06382 0.0043-0.09318 0.0126c-0.02935 0.0084-0.05568 0.0206-0.07729 0.0358-0.04547 0.0287-0.07537 0.066-0.08524 0.1065l-0.4011 1.6709c-0.10959 0.4865-0.38155 0.952-0.7972 1.3645-0.41286 0.4134-0.95815 0.7653-1.5994 1.0322l-0.34595 0.142c-0.03588 0.0155-0.06517 0.0366-0.08524 0.0613-0.00759 0.0255-0.00759 0.0518 0 0.0774-0.00752 0.0266-0.00752 0.054 0 0.0806 0.02139 0.0241 0.05043 0.045 0.08524 0.0613l0.34595 0.1387c0.64127 0.2669 1.1866 0.6188 1.5994 1.0322 0.41615 0.4147 0.68809 0.8824 0.7972 1.371l0.4011 1.6741c0.00979 0.0387 0.03988 0.074 0.08524 0.1 0.04822 0.0252 0.1084 0.0389 0.17047 0.0389s0.12225-0.0137 0.17047-0.0389c0.04537-0.026 0.07545-0.0613 0.08524-0.1l0.4011-1.6741c0.10933-0.4866 0.3799-0.9525 0.79338-1.366 0.41349-0.4135 0.96024-0.765 1.6032-1.0307l0.346-0.1387c0.0348-0.0164 0.0638-0.0373 0.0852-0.0613 0.016-0.0257 0.0245-0.053 0.0251-0.0807-5e-4 -0.0266-9e-3 -0.0529-0.0251-0.0774-0.02-0.0247-0.0493-0.0457-0.0852-0.0613l-0.346-0.1484z"
                    })]
                })
            }), i.T)
        }
    }
]);