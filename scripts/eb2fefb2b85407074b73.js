(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39697], {
        509049: (e, n, t) => {
            e.exports = t.p + "172dcca815d9bc83a650f32ce6cee1b3.svg"
        },
        649286: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => L
            });
            var r = t(785893),
                o = t(667294),
                a = t(294184),
                l = t.n(a),
                i = t(331607),
                s = t(70418),
                u = t(494889),
                c = t(443812),
                d = t(786170),
                f = t(279008),
                E = t(392354),
                h = t(347365),
                _ = t(985774);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n, t, r, o, a, l) {
                try {
                    var i = e[a](l),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, o)
            }

            function p(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, a = [],
                            l = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(l = (r = t.next()).done); l = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e, n) {
                var t, r, o, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = n.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function m(e) {
                var n, t, r = null != e ? e : {},
                    a = r.onError,
                    l = r.onSuccess,
                    i = p(o.useState(!1), 2),
                    s = i[0],
                    u = i[1],
                    c = s,
                    d = o.useCallback((t = (n = function(e, n, t, r) {
                        var o, i;
                        return C(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (c) return [2];
                                    u(!0);
                                    s.label = 1;
                                case 1:
                                    s.trys.push([1, 3, 4, 5]);
                                    return [4, (0, _.U)(e, n, t, r)];
                                case 2:
                                    s.sent();
                                    null == l || l();
                                    return [3, 5];
                                case 3:
                                    o = s.sent();
                                    i = new h.Hx(o);
                                    null == a || a(i);
                                    return [3, 5];
                                case 4:
                                    u(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, o) {
                            var a = n.apply(e, t);

                            function l(e) {
                                v(a, r, o, l, i, "next", e)
                            }

                            function i(e) {
                                v(a, r, o, l, i, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }), [c, a, l]);
                return {
                    reportFalsePositive: d,
                    isReportFalsePositiveLoading: s
                }
            }
            var b = t(318715),
                y = t(352980),
                T = new Set([i.h.IMAGE, i.h.VIDEO, i.h.GIFV]),
                S = t(493254),
                A = t(473708),
                g = t(124060),
                M = t.n(g),
                N = function(e) {
                    var n = e.attachment,
                        t = n.url,
                        o = n.description;
                    return null == t ? null : (0, r.jsx)(O, {
                        url: t,
                        description: o
                    })
                },
                R = function(e) {
                    var n, t, o, a = e.embed;
                    if (!T.has(a.type)) return null;
                    var l = void 0 !== a.video && a.type !== i.h.GIFV ? a.video.url : null !== (o = null === (n = a.thumbnail) || void 0 === n ? void 0 : n.url) && void 0 !== o ? o : null === (t = a.image) || void 0 === t ? void 0 : t.url;
                    return null == l ? null : (0, r.jsx)(O, {
                        url: l
                    })
                },
                O = function(e) {
                    var n = e.url,
                        t = e.description,
                        o = S.XH.test(n);
                    return (0, r.jsx)("div", {
                        className: M().mediaContainer,
                        children: o ? (0, r.jsx)(d.Z, {
                            className: l()(M().video, M().media),
                            controls: !0,
                            src: n
                        }) : (0, r.jsx)("img", {
                            className: l()(M().image, M().media),
                            src: n,
                            alt: t
                        })
                    })
                };

            function L(e) {
                var n = e.channelId,
                    t = e.messageId,
                    a = e.attachmentId,
                    l = e.embedId,
                    i = e.transitionState,
                    d = e.onClose,
                    h = (0, c.Dt)(),
                    _ = (0, f.yh)(),
                    I = function(e, n, t) {
                        var r, o = (0, b.ZP)([y.Z], (function() {
                                return y.Z.getMessage(e, n)
                            })),
                            a = (0, f.yh)();
                        if (null == o) return [];
                        var l, i = void 0 !== t ? function(e) {
                            return e.id === t
                        } : function(e) {
                            return (0, E.KP)({
                                type: E.lJ.Attachment,
                                media: e
                            }, a)
                        };
                        return null !== (l = null == o || null === (r = o.attachments) || void 0 === r ? void 0 : r.filter(i)) && void 0 !== l ? l : []
                    }(n, t, a),
                    v = function(e, n, t) {
                        var r, o = (0, b.ZP)([y.Z], (function() {
                                return y.Z.getMessage(e, n)
                            })),
                            a = (0, f.yh)();
                        if (null == o) return [];
                        var l, i = void 0 !== t ? function(e) {
                            return e.id === t
                        } : function(e) {
                            return (0, E.KP)({
                                type: E.lJ.Embed,
                                media: e
                            }, a)
                        };
                        return null !== (l = null == o || null === (r = o.embeds) || void 0 === r ? void 0 : r.filter(i)) && void 0 !== l ? l : []
                    }(n, t, l),
                    p = m({
                        onSuccess: o.useCallback((function() {
                            u.Z.pop();
                            (0, s.showToast)((0,
                                s.createToast)(A.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, s.ToastType.CUSTOM));
                            d()
                        }), [d]),
                        onError: function() {
                            (0, s.showToast)((0, s.createToast)(A.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE))
                        }
                    }),
                    C = p.reportFalsePositive,
                    T = p.isReportFalsePositiveLoading,
                    S = function() {
                        (0, E.aP)({
                            action: E.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                            channelId: n,
                            messageId: t
                        });
                        d()
                    },
                    g = _ && (I.length > 0 || v.length > 0);
                o.useEffect((function() {
                    g && (0, E.aP)({
                        action: E.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                        channelId: n,
                        messageId: t
                    })
                }), [n, t, g]);
                g || S();
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: i,
                    "aria-labelledby": h,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalContent, {
                        children: [(0, r.jsx)(s.ModalCloseButton, {
                            onClick: S,
                            className: M().closeButton
                        }), (0, r.jsx)(s.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: M().header,
                            children: A.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: M().subheader,
                            children: A.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === I.length && 0 === v.length ? (0, r.jsx)(N, {
                            attachment: I[0]
                        }) : null, 1 === v.length && 0 === I.length ? (0, r.jsx)(R, {
                            embed: v[0]
                        }) : null]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            className: M().button,
                            disabled: T,
                            submitting: T,
                            size: s.Button.Sizes.MEDIUM,
                            color: s.Button.Colors.BRAND,
                            onClick: function() {
                                C(n, t, I.map((function(e) {
                                    return e.id
                                })), v.map((function(e) {
                                    return e.id
                                })));
                                (0, E.aP)({
                                    action: E.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                                    channelId: n,
                                    messageId: t
                                })
                            },
                            children: A.Z.Messages.CONFIRM
                        }), (0, r.jsx)(s.Button, {
                            className: M().button,
                            disabled: T,
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.MEDIUM,
                            onClick: S,
                            children: A.Z.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        39697: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => b
            });
            var r = t(785893),
                o = t(667294),
                a = t(70418),
                l = t(396179),
                i = t(320142),
                s = t(719174),
                u = t(348592),
                c = t(392354),
                d = t(2590),
                f = t(473708),
                E = t(513275),
                h = t.n(E),
                _ = t(509049),
                I = t.n(_);

            function v(e, n, t, r, o, a, l) {
                try {
                    var i = e[a](l),
                        s = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(s) : Promise.resolve(s).then(r, o)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(n, t);

                        function l(e) {
                            v(a, r, o, l, i, "next", e)
                        }

                        function i(e) {
                            v(a, r, o, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function C(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var m = function(e, n) {
                var t, r, o, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1],
                                                done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = n.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };
            const b = function(e) {
                var n = e.channelId,
                    E = e.messageId,
                    _ = e.transitionState,
                    v = e.onClose,
                    b = function() {
                        v();
                        T(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                        (0, a.openModalLazy)(p((function() {
                            var e, o;
                            return m(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, t(649286)];
                                    case 1:
                                        e = a.sent(), o = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(o, function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        C(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({
                                                channelId: n,
                                                messageId: E
                                            }, e))
                                        }]
                                }
                            }))
                        })))
                    },
                    y = (0, s.Z)(),
                    T = o.useCallback((function(e) {
                        (0, c.aP)({
                            action: e,
                            channelId: n,
                            messageId: E
                        })
                    }), [n, E]);
                o.useEffect((function() {
                    (0, c.aP)({
                        action: c.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                        channelId: n,
                        messageId: E
                    })
                }), [n, E]);
                return (0, r.jsxs)(a.ModalRoot, {
                    transitionState: _,
                    "aria-label": f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                    children: [(0, r.jsx)(a.ModalHeader, {
                        separator: !1,
                        className: h().modalHeader,
                        children: (0, r.jsx)("img", {
                            src: I(),
                            alt: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                            className: h().headerImg
                        })
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: h().modalBody,
                        children: [(0, r.jsx)(a.Heading, {
                            variant: "heading-lg/bold",
                            className: h().modalInteriorHeader,
                            children: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }), (0,
                            r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: y ? f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }), (0, r.jsxs)("div", {
                            className: h().buttonContainer,
                            children: [y ? (0, r.jsx)(a.Button, {
                                color: a.Button.Colors.BRAND,
                                onClick: function() {
                                    T(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                    l.Z.open(d.oAB.PRIVACY_AND_SAFETY);
                                    v()
                                },
                                fullWidth: !0,
                                children: f.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                            }) : (0, r.jsx)(a.Button, {
                                color: a.Button.Colors.BRAND,
                                onClick: function() {
                                    (0, i.Z)(u.Z.getArticleURL(d.BhN.EXPLICIT_MEDIA_REDACTION))
                                },
                                fullWidth: !0,
                                children: f.Z.Messages.LEARN_MORE
                            }), (0, r.jsx)(a.Button, {
                                color: a.Button.Colors.PRIMARY,
                                onClick: function() {
                                    v();
                                    T(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
                                },
                                fullWidth: !0,
                                children: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                    handleFalsePositiveHook: function() {
                                        b()
                                    }
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        719174: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                o = t(473903);

            function a() {
                return (0, r.e7)([o.default], (function() {
                    var e;
                    return null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                }))
            }
        }
    }
]);