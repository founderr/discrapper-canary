(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [97264, 90344], {
        165358: (e, t, r) => {
            e.exports = r.p + "65921aa740e7c73ace1a74b54b9e6b82.gif"
        },
        284382: (e, t, r) => {
            e.exports = r.p + "ba6a1c16f701fd577b4380df260b08ab.png"
        },
        530396: (e, t, r) => {
            e.exports = r.p + "81f855741b7bdf09d97f8ea644dac150.gif"
        },
        293408: (e, t, r) => {
            e.exports = r.p + "d9510a492a881fd8e75962b7dc4af7a9.png"
        },
        134928: (e, t, r) => {
            e.exports = r.p + "897fb794f533bd92e32b8b06676122ba.gif"
        },
        49192: (e, t, r) => {
            e.exports = r.p + "b80887cce3fcbc37509e7e3b1fed479e.png"
        },
        510101: (e, t, r) => {
            e.exports = r.p + "8cdb96f2d79587fc380142dd132acf45.gif"
        },
        871861: (e, t, r) => {
            e.exports = r.p + "e1f1ae8cb72387014f29d0d00ae5687c.png"
        },
        38272: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => b
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(882723),
                a = r(217674),
                c = r(930865),
                s = r(473708),
                u = r(53679),
                f = r.n(u);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            const b = function(e) {
                var t, r, o, u = e.guildFeature,
                    b = e.guild,
                    y = e.className,
                    g = e.hideTooltip,
                    O = void 0 !== g && g,
                    h = e.tooltipPosition,
                    j = void 0 === h ? "left" : h,
                    m = e.onClick,
                    v = b.hasFeature(u),
                    x = (0, c._p)(u);
                if (v) {
                    null != x && (o = s.Z.Messages.PREMIUM_GUILD_INCLUDED);
                    t = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(a.Z, {
                            className: f().unlockedIcon
                        }), (0, n.jsx)(l.Heading, {
                            variant: "eyebrow",
                            className: f().description,
                            children: s.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })
                } else {
                    null != x && (o = s.Z.Messages.CLICK_TO_LEARN_MORE);
                    t = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(a.Z, {
                            className: f().icon
                        }), (0,
                            n.jsx)(l.Heading, {
                            variant: "eyebrow",
                            className: f().description,
                            children: null != x && (0, c.e9)(x)
                        })]
                    })
                }
                r = O || null == o ? (0, n.jsx)("div", {
                    className: i()(f().availabilityIndicator, y),
                    children: t
                }) : (0, n.jsx)(l.Tooltip, {
                    position: j,
                    text: o,
                    children: function(e) {
                        return (0, n.jsx)("div", p(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    d(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            className: i()(f().availabilityIndicator, y),
                            children: t
                        }))
                    }
                });
                return null == m || v ? r : (0, n.jsx)(l.Clickable, {
                    onClick: m,
                    className: f().clickable,
                    children: r
                })
            }
        },
        597264: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => U
            });
            var n = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(882723),
                a = r(153686),
                c = r(19585),
                s = r(38272),
                u = r(694755),
                f = r(567403),
                d = r(464187),
                p = r(473903),
                b = r(901654),
                y = r(331448),
                g = r(655402),
                O = r(95891),
                h = r(652591),
                j = r(116094),
                m = r(2590),
                v = r(921431);

            function x(e, t) {
                var r = t.isGIF;
                if (e === v.pC.GUILD_BANNER) return r ? m.oNc.ANIMATED_BANNER : m.oNc.BANNER
            }

            function C(e) {
                return e === v.pC.AVATAR || e === v.pC.BANNER
            }
            var w = r(776203),
                P = r(964525),
                E = r(473708),
                M = r(511729),
                N = r.n(M);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function A(e, t, r, n, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            A(i, n, o, l, a, "next", e)
                        }

                        function a(e) {
                            A(i, n, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function S(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        S(e, t, r[t])
                    }))
                }
                return e
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = function(e, t) {
                    var r, n, o, i, l = {
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0, o) && (i = [2 & i[0], o.value]);
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
                                            n = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = l.trys,
                                                    o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                D = [{
                    gif: r(165358),
                    png: r(284382)
                }, {
                    gif: r(134928),
                    png: r(49192)
                }, {
                    gif: r(510101),
                    png: r(871861)
                }, {
                    gif: r(530396),
                    png: r(293408)
                }];

            function k(e) {
                var t = e.shouldAnimate,
                    r = void 0 === t || t,
                    i = T(o.useState(!1), 2),
                    l = i[0],
                    a = i[1];
                return (0, n.jsx)("div", {
                    className: N().gifGrid,
                    onMouseMove: function() {
                        return a(!0)
                    },
                    onMouseLeave: function() {
                        return a(!1)
                    },
                    children: D.map((function(e) {
                        return (0, n.jsx)("div", {
                            className: N().gif,
                            style: {
                                backgroundImage: "url(".concat(r || l ? e.gif : e.png, ")")
                            }
                        }, e.gif)
                    }))
                })
            }

            function H(e) {
                var t = e.guildFeature,
                    r = e.guild;
                return null == t || null == r ? null : (0, n.jsx)("div", {
                    className: N().pillWrapper,
                    children: (0,
                        n.jsx)(s.Z, {
                        guildFeature: t,
                        guild: r,
                        hideTooltip: !0
                    })
                })
            }

            function F(e) {
                var t = e.uploadType,
                    r = e.guild;
                return (0, n.jsxs)("div", {
                    className: N().optionBoxText,
                    children: [(0, n.jsx)(H, {
                        guild: r,
                        guildFeature: x(t, {
                            isGIF: !0
                        })
                    }), (0, n.jsxs)("div", {
                        className: N().optionBoxDescription,
                        children: [C(t) && (0, n.jsx)(l.TooltipContainer, {
                            className: N().nitroWheelFlairContainer,
                            text: E.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, n.jsx)(O.Z, {
                                className: N().nitroWheelFlair
                            })
                        }), E.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
                    })]
                })
            }

            function R(e) {
                var t = e.title,
                    r = e.uploadType,
                    o = e.guild;
                return (0, n.jsxs)("div", {
                    className: N().optionBoxText,
                    children: [(0, n.jsx)(H, {
                        guildFeature: x(r, {
                            isGIF: !1
                        }),
                        guild: o
                    }), (0, n.jsx)("div", {
                        className: N().optionBoxDescription,
                        children: t
                    })]
                })
            }

            function U(e) {
                var t = e.transitionState,
                    s = e.onClose,
                    O = e.onComplete,
                    x = e.uploadType,
                    C = e.maxFileSizeBytes,
                    M = e.showUpsellHeader,
                    _ = e.filters,
                    A = e.analyticsLocation,
                    S = e.analyticsLocations,
                    T = void 0 === S ? [] : S,
                    D = e.modalSubTitle,
                    H = e.imageSpecifications,
                    U = e.modalTitle,
                    V = void 0 === U ? E.Z.Messages.SELECT_IMAGE_MODAL_TITLE : U,
                    G = e.uploadOptionTitle,
                    B = void 0 === G ? E.Z.Messages.UPLOAD_IMAGE : G,
                    z = function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        s();
                        O(e, t, r)
                    },
                    K = (0, i.e7)([b.Z], (function() {
                        return b.Z.isFocused()
                    })),
                    W = (0, i.e7)([p.default], (function() {
                        return p.default.getCurrentUser()
                    })),
                    X = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuildId()
                    })),
                    $ = (0, i.e7)([f.Z], (function() {
                        return f.Z.getGuild(X)
                    })),
                    q = o.useContext(l.AccessibilityPreferencesContext).reducedMotion,
                    J = (0, l.useModalContext)(),
                    Q = !j.ZP.canUseAnimatedAvatar(W) && x === v.pC.AVATAR,
                    Y = (0, c.Z)(T, a.Z.SELECT_IMAGE_MODAL).analyticsLocations;
                o.useEffect((function() {
                    Q && h.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: m.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location_stack: Y
                    });
                    h.default.track(m.rMx.OPEN_MODAL, {
                        type: m.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                        location: A
                    })
                }), [Q, A, Y]);
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.SMALL,
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        className: N().modalHeader,
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H1,
                                className: N().modalTitle,
                                children: V
                            }), null != D ? (0, n.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: D
                            }) : null]
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            onClick: s,
                            className: N().modalCloseButton
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: N().modalContent,
                        children: [(0, n.jsxs)("div", {
                            className: N().imagePickerContainer,
                            children: [(0, n.jsxs)(l.Clickable, {
                                className: N().optionBox,
                                children: [(0, n.jsx)("div", {
                                    className: N().contentCircle,
                                    children: (0, n.jsx)(g.Z, {
                                        className: N().uploadIcon
                                    })
                                }), (0, n.jsx)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, n.jsx)(R, {
                                        title: B,
                                        uploadType: x,
                                        guild: $
                                    })
                                }), (0, n.jsx)(u.ZP, {
                                    onChange: function(e, t) {
                                        if (t.type === P.m.MP4) return z(e, t);
                                        (0, l.openModalLazy)(L((function() {
                                            var o, i;
                                            return Z(this, (function(l) {
                                                switch (l.label) {
                                                    case 0:
                                                        return [4, Promise.all([r.e(40532), r.e(40056), r.e(19887), r.e(24251), r.e(91406), r.e(42643), r.e(17363), r.e(56620), r.e(33928)]).then(r.bind(r, 17363))];
                                                    case 1:
                                                        o = l.sent(), i = o.default;
                                                        return [2, function(r) {
                                                            return (0, n.jsx)(i, I({
                                                                imgURI: e,
                                                                file: t,
                                                                onCrop: z,
                                                                uploadType: x,
                                                                showUpsellHeader: M,
                                                                allowSkip: !0,
                                                                analyticsPage: null == A ? void 0 : A.page
                                                            }, r))
                                                        }]
                                                }
                                            }))
                                        })), {
                                            contextKey: J
                                        })
                                    },
                                    maxFileSizeBytes: C,
                                    onFileSizeError: function() {
                                        s();
                                        (0, w.Z)(C)
                                    },
                                    filters: _
                                })]
                            }), (0, n.jsxs)(l.Clickable, {
                                className: N().optionBox,
                                onClick: function() {
                                    (0, l.openModalLazy)(L((function() {
                                        var e, t;
                                        return Z(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return [4, Promise.all([r.e(40532), r.e(96259), r.e(40056), r.e(79730), r.e(19887), r.e(24784), r.e(24251), r.e(91406), r.e(86159), r.e(85004), r.e(8969)]).then(r.bind(r, 159626))];
                                                case 1:
                                                    e = o.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, n.jsx)(t, I({
                                                            uploadType: x,
                                                            onComplete: function(e, t) {
                                                                return z(e, t, !0)
                                                            },
                                                            showUpsellHeader: M,
                                                            analyticsPage: null == A ? void 0 : A.page
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: J
                                    })
                                },
                                children: [(0, n.jsxs)("div", {
                                    className: N().contentCircle,
                                    children: [(0, n.jsx)(k, {
                                        shouldAnimate: K && !q.enabled
                                    }), (0, n.jsx)("div", {
                                        className: N().gifIconContainer,
                                        children: (0, n.jsx)(y.Z, {
                                            className: N().gifIcon
                                        })
                                    })]
                                }), (0, n.jsx)(l.Text, {
                                    variant: "text-sm/semibold",
                                    color: "interactive-normal",
                                    children: (0, n.jsx)(F, {
                                        uploadType: x,
                                        guild: $
                                    })
                                })]
                            })]
                        }), null != H ? (0, n.jsx)(l.Text, {
                            className: N().imageSpecifications,
                            variant: "text-sm/normal",
                            children: H
                        }) : null]
                    })]
                })
            }
        },
        776203: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(444663),
                o = r(149258),
                i = r(473708);

            function l(e) {
                (0, n.openUploadError)({
                    title: i.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0, o.Ng)(e)
                    })
                })
            }
        },
        331448: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function c(e) {
                var t = e.width,
                    r = void 0 === t ? 29 : t,
                    c = e.height,
                    s = void 0 === c ? 22 : c,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.backgroundColor,
                    p = a(e, ["width", "height", "color", "backgroundColor"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 29 22",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("rect", {
                            width: r,
                            height: s,
                            fill: d,
                            fillOpacity: ".8",
                            rx: "3"
                        }), (0, n.jsx)("path", {
                            d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                            fill: f
                        }), (0, n.jsx)("path", {
                            d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                            fill: f
                        }), (0, n.jsx)("path", {
                            d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                            fill: f
                        })]
                    })
                }))
            }
        },
        655402: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                o = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function c(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    c = e.height,
                    s = void 0 === c ? 24 : c,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = a(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(d)), {
                    width: r,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                        fill: f
                    }), (0, n.jsx)("path", {
                        d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                        fill: f
                    })]
                }))
            }
        }
    }
]);