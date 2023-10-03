"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83409], {
        383409: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => v
            });
            var r = n(785893),
                o = n(667294),
                a = n(304548),
                s = n(579194),
                i = n(153686),
                l = n(19585),
                c = n(455706),
                u = n(973646),
                d = n(652591),
                A = n(2590),
                f = n(203600),
                h = n(473708),
                M = n(289112),
                p = n.n(M);

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function m(t, e, n, r, o, a, s) {
                try {
                    var i = t[a](s),
                        l = i.value
                } catch (t) {
                    n(t);
                    return
                }
                i.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function y(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            s = !0,
                            i = !1;
                        try {
                            for (n = n.call(t); !(s = (r = n.next()).done); s = !0) {
                                a.push(r.value);
                                if (e && a.length === e) break
                            }
                        } catch (t) {
                            i = !0;
                            o = t
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return E(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var L = function(t, e) {
                var n, r, o, a, s = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < o[1]) {
                                            s.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2];
                                            s.ops.push(a);
                                            break
                                        }
                                        o[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
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
            const v = function(t) {
                var e, n, M = t.imgURI,
                    E = t.transitionState,
                    v = t.onClose,
                    S = t.onChangeAvatar,
                    b = y(o.useState(!1), 2),
                    T = b[0],
                    _ = b[1],
                    x = y(o.useState(!1), 2),
                    I = x[0],
                    R = x[1],
                    g = (0, l.Z)(i.Z.PREMIUM_UPSELL),
                    U = g.AnalyticsLocationProvider,
                    N = g.sourceAnalyticsLocations,
                    P = (n = (e = function() {
                        var t, e;
                        return L(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    _(!0);
                                    return [4, (0, s.Mn)({
                                        avatar: M
                                    })];
                                case 1:
                                    (null == (t = n.sent()) ? void 0 : t.ok) ? (0, s.I5)(void 0) : null != (null == t || null === (e = t.body) || void 0 === e ? void 0 : e.username) && (0, u.P)();
                                    _(!1);
                                    v();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var a = e.apply(t, n);

                            function s(t) {
                                m(a, r, o, s, i, "next", t)
                            }

                            function i(t) {
                                m(a, r, o, s, i, "throw", t)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return n.apply(this, arguments)
                    });
                o.useEffect((function() {
                    d.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: f.cd.ANIMATED_USER_AVATAR_MODAL,
                        location_stack: N
                    })
                }), [N]);
                return (0, r.jsx)(U, {
                    children: (0, r.jsxs)(a.ModalRoot, {
                        transitionState: E,
                        size: a.ModalSize.SMALL,
                        "aria-label": h.Z.Messages.IMAGE,
                        children: [(0, r.jsxs)(a.ModalContent, {
                            className: p().modalContent,
                            paddingFix: !1,
                            orientation: "horizontal",
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                className: p().header,
                                children: (0, r.jsx)(a.FormTitle, {
                                    tag: a.FormTitleTags.H1,
                                    children: h.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR
                                })
                            }), (0, r.jsx)(a.Text, {
                                color: "text-normal",
                                variant: "text-md/normal",
                                children: h.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_SUBTITLE
                            }), (0, r.jsxs)("div", {
                                className: p().promo,
                                children: [(0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-sm/semibold",
                                    className: p().promoText,
                                    children: h.Z.Messages.PREMIUM_UPSELL_ANIMATED_AVATAR_TEXT
                                }), (0, r.jsx)(c.Z, {
                                    submitting: I,
                                    premiumModalAnalyticsLocation: {
                                        section: A.jXE.AVATAR_UPSELL_MODAL,
                                        object: A.qAy.BUTTON_CTA
                                    },
                                    size: a.Button.Sizes.SMALL,
                                    color: a.Button.Colors.GREEN,
                                    onClick: function() {
                                        R(!0)
                                    },
                                    onSubscribeModalClose: function(t) {
                                        R(!1);
                                        if (t) {
                                            P();
                                            v()
                                        }
                                    },
                                    buttonText: h.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
                                })]
                            })]
                        }), (0, r.jsxs)(a.ModalFooter, {
                            className: p().modalFooter,
                            children: [(0, r.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                size: a.ButtonSizes.SMALL,
                                onClick: S,
                                children: h.Z.Messages.CHANGE_AVATAR_A11Y_LABEL
                            }), (0, r.jsxs)("div", {
                                className: p().modalFooterActions,
                                children: [(0, r.jsx)(a.Button, {
                                    className: p().cancelButton,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    size: a.ButtonSizes.SMALL,
                                    onClick: v,
                                    children: h.Z.Messages.AVATAR_UPLOAD_CANCEL
                                }), (0, r.jsx)(a.Button, {
                                    size: a.ButtonSizes.SMALL,
                                    onClick: P,
                                    submitting: T,
                                    children: h.Z.Messages.SAVE_CHANGES
                                })]
                            })]
                        }), (0, r.jsx)(a.Avatar, {
                            src: M,
                            "aria-hidden": !0,
                            className: p().avatar,
                            size: a.AvatarSizes.SIZE_120
                        })]
                    })
                })
            }
        },
        973646: (t, e, n) => {
            n.d(e, {
                P: () => a
            });
            var r = n(304548),
                o = n(473708);

            function a() {
                (0, r.showToast)((0, r.createToast)(o.Z.Messages.USER_SETTINGS_UPDATE_FAILURE, r.ToastType.FAILURE))
            }
        }
    }
]);