(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39697], {
        509049: (e, n, t) => {
            e.exports = t.p + "172dcca815d9bc83a650f32ce6cee1b3.svg"
        },
        569865: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => R
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                s = t.n(o),
                l = t(70418),
                i = t(494889),
                c = t(443812),
                u = t(786170),
                d = t(279008),
                f = t(392354),
                E = t(347365),
                h = t(985774);

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function I(e, n, t, r, a, o, s) {
                try {
                    var l = e[o](s),
                        i = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(i) : Promise.resolve(i).then(r, a)
            }

            function C(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e, n) {
                var t, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function m(e) {
                var n, t, r = null != e ? e : {},
                    o = r.onError,
                    s = r.onSuccess,
                    l = C(a.useState(!1), 2),
                    i = l[0],
                    c = l[1],
                    u = i,
                    d = a.useCallback((t = (n = function(e, n, t, r) {
                        var a, l;
                        return p(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (u) return [2];
                                    c(!0);
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, 3, 4, 5]);
                                    return [4, (0, h.U)(e, n, t, r)];
                                case 2:
                                    i.sent();
                                    null == s || s();
                                    return [3, 5];
                                case 3:
                                    a = i.sent();
                                    l = new E.Hx(a);
                                    null == o || o(l);
                                    return [3, 5];
                                case 4:
                                    c(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, a) {
                            var o = n.apply(e, t);

                            function s(e) {
                                I(o, r, a, s, l, "next", e)
                            }

                            function l(e) {
                                I(o, r, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function(e, n, r, a) {
                        return t.apply(this, arguments)
                    }), [u, o, s]);
                return {
                    reportFalsePositive: d,
                    isReportFalsePositiveLoading: i
                }
            }
            var y = t(318715),
                b = t(352980),
                T = t(493254),
                v = t(473708),
                S = t(124060),
                A = t.n(S),
                N = function(e) {
                    var n = e.attachment,
                        t = n.url,
                        a = n.description,
                        o = T.XH.test(n.filename);
                    return (0, r.jsx)("div", {
                        className: A().mediaContainer,
                        children: o ? (0, r.jsx)(u.Z, {
                            className: s()(A().video, A().media),
                            controls: !0,
                            src: t
                        }) : (0, r.jsx)("img", {
                            className: s()(A().image, A().media),
                            src: t,
                            alt: a
                        })
                    })
                };

            function R(e) {
                var n, t = e.channelId,
                    o = e.messageId,
                    s = e.attachmentId,
                    u = e.transitionState,
                    E = e.onClose,
                    h = (0, c.Dt)(),
                    _ = (0, d.yh)(),
                    I = function(e, n, t) {
                        var r, a = (0, y.ZP)([b.Z], (function() {
                                return b.Z.getMessage(e, n)
                            })),
                            o = (0, d.yh)();
                        if (void 0 === a) return [];
                        var s, l = void 0 !== t ? function(e) {
                            return e.id === t
                        } : function(e) {
                            return (0, f.KP)({
                                type: f.lJ.Attachment,
                                media: e
                            }, o)
                        };
                        return null !== (s = null == a || null === (r = a.attachments) || void 0 === r ? void 0 : r.filter(l)) && void 0 !== s ? s : []
                    }(t, o, s),
                    C = m({
                        onSuccess: a.useCallback((function() {
                            i.Z.pop();
                            (0, l.showToast)((0, l.createToast)(v.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS, l.ToastType.CUSTOM));
                            E()
                        }), [E]),
                        onError: function() {
                            (0, l.showToast)((0, l.createToast)(v.Z.Messages.ERROR_GENERIC_TITLE, l.ToastType.FAILURE))
                        }
                    }),
                    p = C.reportFalsePositive,
                    T = C.isReportFalsePositiveLoading,
                    S = function() {
                        (0, f.aP)({
                            action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                            channelId: t,
                            messageId: o
                        });
                        E()
                    },
                    R = _ && (null !== (n = null == I ? void 0 : I.length) && void 0 !== n ? n : 0) > 0;
                a.useEffect((function() {
                    R && (0, f.aP)({
                        action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                        channelId: t,
                        messageId: o
                    })
                }), [t, o, R]);
                R || S();
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: u,
                    "aria-labelledby": h,
                    size: l.ModalSize.SMALL,
                    children: [(0, r.jsxs)(l.ModalContent, {
                        children: [(0, r.jsx)(l.ModalCloseButton, {
                            onClick: S,
                            className: A().closeButton
                        }), (0, r.jsx)(l.Heading, {
                            id: h,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: A().header,
                            children: v.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: A().subheader,
                            children: v.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                        }), 1 === I.length ? (0, r.jsx)(N, {
                            attachment: I[0]
                        }) : null]
                    }), (0, r.jsxs)(l.ModalFooter, {
                        children: [(0, r.jsx)(l.Button, {
                            className: A().button,
                            disabled: T,
                            submitting: T,
                            size: l.Button.Sizes.MEDIUM,
                            color: l.Button.Colors.BRAND,
                            onClick: function() {
                                p(t, o, I.map((function(e) {
                                    return e.id
                                })), []);
                                (0, f.aP)({
                                    action: f.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                                    channelId: t,
                                    messageId: o
                                })
                            },
                            children: v.Z.Messages.CONFIRM
                        }), (0, r.jsx)(l.Button, {
                            className: A().button,
                            disabled: T,
                            color: l.Button.Colors.TRANSPARENT,
                            size: l.Button.Sizes.MEDIUM,
                            onClick: S,
                            children: v.Z.Messages.CANCEL
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
                a = t(667294),
                o = t(70418),
                s = t(396179),
                l = t(320142),
                i = t(719174),
                c = t(348592),
                u = t(392354),
                d = t(2590),
                f = t(473708),
                E = t(513275),
                h = t.n(E),
                _ = t(509049),
                I = t.n(_);

            function C(e, n, t, r, a, o, s) {
                try {
                    var l = e[o](s),
                        i = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(i) : Promise.resolve(i).then(r, a)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function s(e) {
                            C(o, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            C(o, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var y = function(e, n) {
                var t, r, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1,
                                    r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = n.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };
            const b = function(e) {
                var n = e.channelId,
                    E = e.messageId,
                    _ = e.transitionState,
                    C = e.onClose,
                    b = function() {
                        C();
                        v(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                        (0, o.openModalLazy)(p((function() {
                            var e, a;
                            return y(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, t(569865)];
                                    case 1:
                                        e = o.sent(),
                                            a = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(a, function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        m(e, n, t[n])
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
                    T = (0, i.Z)(),
                    v = a.useCallback((function(e) {
                        (0, u.aP)({
                            action: e,
                            channelId: n,
                            messageId: E
                        })
                    }), [n, E]);
                a.useEffect((function() {
                    (0, u.aP)({
                        action: u.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                        channelId: n,
                        messageId: E
                    })
                }), [n, E]);
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: _,
                    "aria-label": f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
                    children: [(0, r.jsx)(o.ModalHeader, {
                        separator: !1,
                        className: h().modalHeader,
                        children: (0, r.jsx)("img", {
                            src: I(),
                            alt: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                            className: h().headerImg
                        })
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: h().modalBody,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-lg/bold",
                            className: h().modalInteriorHeader,
                            children: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }), (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: T ? f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }), (0, r.jsxs)("div", {
                            className: h().buttonContainer,
                            children: [T ? (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.BRAND,
                                onClick: function() {
                                    v(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                    s.Z.open(d.oAB.PRIVACY_AND_SAFETY);
                                    C()
                                },
                                fullWidth: !0,
                                children: f.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                            }) : (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.BRAND,
                                onClick: function() {
                                    (0, l.Z)(c.Z.getArticleURL(d.BhN.EXPLICIT_MEDIA_REDACTION))
                                },
                                fullWidth: !0,
                                children: f.Z.Messages.LEARN_MORE
                            }), (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: function() {
                                    C();
                                    v(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
                                },
                                fullWidth: !0,
                                children: f.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                            }), (0, r.jsx)(o.Text, {
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
                Z: () => o
            });
            var r = t(202351),
                a = t(473903);

            function o() {
                return (0, r.e7)([a.default], (function() {
                    var e;
                    return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                }))
            }
        }
    }
]);