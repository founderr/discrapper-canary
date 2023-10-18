"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94095], {
        794095: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => C
            });
            var n = r(785893),
                l = r(667294),
                i = r(202351),
                s = r(70418),
                a = r(934870),
                o = r(567403),
                c = r(609853),
                u = r(107364),
                d = r(443812),
                f = r(873308),
                m = r(652591),
                y = r(775173),
                p = r(702264),
                x = r(755550),
                O = r(131286),
                h = r(23925);
            var j, P = r(718237),
                I = r(2590),
                v = r(175072),
                E = r(473708),
                _ = r(371124),
                b = r.n(_);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function L(e, t) {
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

            function A(e, t) {
                if (null == e) return {};
                var r, n, l = function(e, t) {
                    if (null == e) return {};
                    var r, n, l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (l[r] = e[r])
                    }
                    return l
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                    }
                }
                return l
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, l, i = [],
                            s = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            l = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(e) {
                e.APPLY_PERSONALITY = "apply-personality";
                e.CONFIRMATION = "confirmation"
            }(j || (j = {}));

            function C(e) {
                var t = e.clydeProfile,
                    r = A(e, ["clydeProfile"]),
                    a = r.onClose,
                    o = (0, d.Dt)(),
                    c = N(l.useState(j.APPLY_PERSONALITY), 2),
                    f = c[0],
                    y = c[1],
                    O = N(l.useState(), 2),
                    h = O[0],
                    P = O[1],
                    v = (0, i.e7)([x.Z], x.Z.isSavingSettings);
                return (0, n.jsxs)(s.ModalRoot, L(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            g(e, t, r[t])
                        }))
                    }
                    return e
                }({}, r), {
                    size: s.ModalSize.DYNAMIC,
                    className: b().modal,
                    "aria-labelledby": o,
                    children: [(0, n.jsx)("div", {
                        className: b().slidesContainer,
                        children: (0, n.jsxs)(s.Slides, {
                            activeSlide: f,
                            centered: !1,
                            children: [(0, n.jsx)(s.Slide, {
                                id: j.APPLY_PERSONALITY,
                                children: (0, n.jsx)(T, {
                                    setSelectedGuildId: P,
                                    selectedGuildId: h,
                                    clydeProfile: t
                                })
                            }), (0, n.jsx)(s.Slide, {
                                id: j.CONFIRMATION,
                                children: null != h ? (0, n.jsx)(R, {
                                    onClose: a,
                                    clydeProfile: t,
                                    guildId: h
                                }) : null
                            })]
                        })
                    }), f === j.APPLY_PERSONALITY ? (0, n.jsxs)(s.ModalFooter, {
                        justify: u.Z.Justify.BETWEEN,
                        className: b().footer,
                        children: [(0, n.jsx)(s.Button, {
                            disabled: null == h,
                            submitting: v,
                            onClick: function() {
                                null != h && (0, p.CX)(h, {
                                    clyde_profile_id: t.clyde_profile_id
                                }).then((function(e) {
                                    if (null != e) {
                                        y(j.CONFIRMATION);
                                        m.default.track(I.rMx.CLYDE_AI_SHARED_PROFILE_APPLIED, {
                                            clyde_profile_id: t.clyde_profile_id,
                                            guild_id: h
                                        })
                                    } else(0, s.showToast)((0, s.createToast)(E.Z.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, s.ToastType.FAILURE))
                                }))
                            },
                            children: E.Z.Messages.CLYDE_PROFILE_APPLY
                        }), (0, n.jsx)(s.Button, {
                            look: s.ButtonLooks.BLANK,
                            color: s.ButtonColors.TRANSPARENT,
                            onClick: a,
                            children: (0, n.jsx)(s.Text, {
                                className: b().closeButton,
                                variant: "text-md/semibold",
                                children: E.Z.Messages.CLOSE
                            })
                        })]
                    }) : null]
                }))
            }

            function T(e) {
                var t, r = e.clydeProfile,
                    a = e.selectedGuildId,
                    u = e.setSelectedGuildId,
                    d = (0, O.Z)(r),
                    f = function() {
                        var e = (0, i.e7)([o.Z], (function() {
                            return o.Z.getGuilds()
                        }));
                        return l.useMemo((function() {
                            return Object.values(e).filter((function(e) {
                                return (0, h.g0)(e)
                            }))
                        }), [e])
                    }(),
                    m = E.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY_SUBHEADING.format({
                        clydeHook: function(e) {
                            return (0, n.jsx)(s.Text, {
                                className: b().clydeName,
                                tag: "span",
                                variant: "text-sm/medium",
                                children: e
                            })
                        }
                    });
                return (0, n.jsxs)("div", {
                    className: b().applySlideContainer,
                    children: [(0, n.jsxs)("div", {
                        className: b().characterContainer,
                        children: [(0, n.jsx)(s.Avatar, {
                            src: d,
                            size: s.AvatarSizes.SIZE_80,
                            "aria-hidden": !0
                        }), (0, n.jsxs)("div", {
                            className: b().nameContainer,
                            children: [(0, n.jsx)(s.Text, {
                                variant: "text-lg/semibold",
                                children: r.name
                            }), (0, n.jsx)(c.Z, {
                                type: v.H.AI
                            })]
                        }), (0, n.jsx)(P.Z, {
                            className: b().lastEditedByContainer,
                            userId: r.author_id
                        }), (0, n.jsx)(s.FormItem, {
                            className: b().personalityItem,
                            title: E.Z.Messages.PERSONALITY_CLYDE_SECTION,
                            children: (0, n.jsx)(s.TextArea, {
                                className: b().personalityTextArea,
                                value: null !== (t = r.personality) && void 0 !== t ? t : "",
                                spellCheck: !1
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: b().serverSelectContainer,
                        children: [(0, n.jsx)(s.Text, {
                            className: b().serverSelectTitle,
                            variant: "text-lg/semibold",
                            children: E.Z.Messages.CLYDE_PROFILE_APPLY_PERSONALITY
                        }), (0, n.jsx)(s.Text, {
                            className: b().serverSelectDescription,
                            variant: "text-sm/medium",
                            children: m
                        }), (0, n.jsxs)(s.FormItem, {
                            className: b().serverSelectField,
                            title: E.Z.Messages.CLYDE_PROFILE_APPLY_TO_GUILD,
                            children: [(0, n.jsx)(s.Text, {
                                className: b().applyToCaption,
                                variant: "text-xs/normal",
                                children: E.Z.Messages.CLYDE_PROFILE_APPLY_TO_GUILD_CAPTION
                            }), (0, n.jsx)(s.SearchableSelect, {
                                isDisabled: 0 === f.length,
                                placeholder: E.Z.Messages.CLYDE_PROFILE_SELECT_GUILD,
                                value: a,
                                options: f.map((function(e) {
                                    return {
                                        label: e.name,
                                        value: e.id
                                    }
                                })),
                                onChange: function(e) {
                                    return u(e)
                                }
                            }), 0 === f.length ? (0, n.jsx)(s.Text, {
                                className: b().selectGuildErrorLabel,
                                variant: "text-xs/normal",
                                children: E.Z.Messages.CLYDE_PROFILE_SELECT_GUILD_ERROR
                            }) : null]
                        })]
                    })]
                })
            }

            function R(e) {
                var t, r = e.clydeProfile,
                    l = e.guildId,
                    u = e.onClose,
                    d = (0, O.Z)(r),
                    m = (0, i.e7)([o.Z], (function() {
                        return o.Z.getGuild(l)
                    })),
                    p = null != m && null != m.icon ? y.ZP.getGuildIconURL({
                        id: l,
                        icon: m.icon,
                        size: 16
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: b().confirmationSlide,
                    children: [(0, n.jsx)(s.Avatar, {
                        src: d,
                        size: s.AvatarSizes.SIZE_80,
                        "aria-hidden": !0
                    }), (0, n.jsxs)("div", {
                        className: b().nameContainer,
                        children: [(0, n.jsx)(s.Text, {
                            variant: "text-lg/semibold",
                            children: r.name
                        }), (0, n.jsx)(c.Z, {
                            type: v.H.AI
                        })]
                    }), (0, n.jsx)(s.Text, {
                        className: b().appliedToLabel,
                        variant: "text-sm/medium",
                        children: E.Z.Messages.CLYDE_PROFILE_APPLIED_TO
                    }), (0, n.jsx)(s.Button, {
                        color: s.ButtonColors.PRIMARY,
                        onClick: function() {
                            (0, a.X)(l);
                            u()
                        },
                        className: b().guildButton,
                        size: s.ButtonSizes.TINY,
                        children: (0, n.jsxs)("div", {
                            className: b().guildButtonContainer,
                            children: [null != (null == m ? void 0 : m.icon) ? (0, n.jsx)(s.Avatar, {
                                src: p,
                                size: s.AvatarSizes.SIZE_16,
                                "aria-hidden": !0
                            }) : null, (0, n.jsx)(s.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : ""
                            }), (0, n.jsx)(f.Z, {
                                width: 16,
                                height: 16,
                                direction: f.N.RIGHT
                            })]
                        })
                    }), (0, n.jsx)(s.Button, {
                        onClick: u,
                        size: s.ButtonSizes.MEDIUM,
                        children: E.Z.Messages.GOT_IT
                    })]
                })
            }
        }
    }
]);