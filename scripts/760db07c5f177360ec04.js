"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [98655], {
        598655: (e, t, r) => {
            r.r(t);
            r.d(t, {
                CreateEmojiWithRolesModal: () => G,
                UpdateEmojiRolesModal: () => B
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                a = r.n(o),
                l = r(496486),
                s = r.n(l),
                u = r(228721),
                c = r(304548),
                d = r(91500),
                f = r(251295),
                h = r(540718),
                p = r(490932),
                b = r(223430),
                v = r(443812),
                m = r(531441),
                y = r(652591),
                O = r(775173),
                g = r(547721),
                j = r(202351),
                S = r(567403),
                _ = r(11879),
                x = [];
            var E = r(2590),
                I = r(473708),
                w = r(815035),
                M = r.n(w);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function L(e, t, r, n, i, o, a) {
                try {
                    var l = e[o](a),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(n, i)
            }

            function C(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function a(e) {
                            L(o, n, i, a, l, "next", e)
                        }

                        function l(e) {
                            L(o, n, i, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function R(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        R(e, t, r[t])
                    }))
                }
                return e
            }

            function D(e, t) {
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

            function P(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e, t) {
                    var r, n, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                    (n = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            n = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e];
                                    n = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                U = function(e) {
                    var t = e.className,
                        r = e.onChange,
                        i = e.textVariant,
                        o = void 0 === i ? "text-md/normal" : i,
                        l = e.label,
                        s = e.value,
                        u = e.isArchived,
                        d = void 0 !== u && u;
                    return (0, n.jsx)(c.Checkbox, {
                        size: 24,
                        className: a()(M().checklistRow, t),
                        value: s,
                        onChange: r,
                        type: c.Checkbox.Types.INVERTED,
                        children: (0, n.jsxs)("div", {
                            className: M().checklistLabel,
                            children: [(0, n.jsx)(c.Text, {
                                color: "interactive-active",
                                variant: o,
                                children: l
                            }), d && (0, n.jsx)(m.IG, {
                                text: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL
                            })]
                        })
                    })
                };

            function Z(e) {
                var t = e.transitionState,
                    r = e.onClose,
                    o = e.initialRoleIds,
                    a = void 0 === o ? [] : o,
                    l = e.listingChoices,
                    u = e.emojiUrl,
                    d = e.saving,
                    f = e.onSave,
                    h = (0, v.Dt)(),
                    m = k(i.useState((function() {
                        return new Set(a)
                    })), 2),
                    y = m[0],
                    O = m[1],
                    g = i.useMemo((function() {
                        return s().isEqual(y, new Set(l.map((function(e) {
                            return e.role_id
                        }))))
                    }), [l, y]),
                    j = y.size > 0,
                    S = function() {
                        f(Array.from(y), r)
                    };
                return (0, n.jsxs)(c.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": h,
                    children: [(0, n.jsxs)(c.ModalHeader, {
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            className: M().headerContent,
                            children: [(0, n.jsx)(p.Z, {
                                src: u,
                                width: 40,
                                height: 40,
                                alt: ""
                            }), (0, n.jsx)(b.Z, {
                                size: 16,
                                horizontal: !0
                            }), (0, n.jsxs)("div", {
                                className: M().headerText,
                                children: [(0, n.jsx)(c.Heading, {
                                    id: h,
                                    variant: "heading-md/semibold",
                                    children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER
                                }), (0, n.jsx)(b.Z, {
                                    size: 2
                                }), (0, n.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: I.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION
                                })]
                            })]
                        }), (0, n.jsx)(c.ModalCloseButton, {
                            className: M().closeButton,
                            onClick: r
                        })]
                    }), (0, n.jsx)("div", {
                        className: M().seperator
                    }), (0, n.jsx)(c.ModalContent, {
                        className: M().modalContent,
                        children: (0, n.jsxs)("div", {
                            className: M().checklistContainer,
                            children: [(0, n.jsx)(U, {
                                className: M().selectAllCheckbox,
                                label: I.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,
                                textVariant: "text-md/semibold",
                                value: g,
                                onChange: function() {
                                    O(g ? new Set : new Set(l.map((function(e) {
                                        return e.role_id
                                    }))))
                                }
                            }, "allSubscriptionRoles"), l.map((function(e, t) {
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [0 !== t && (0, n.jsx)("div", {
                                        className: M().seperator
                                    }), (0, n.jsx)(U, {
                                        onChange: function() {
                                            return t = e.role_id, O((function(e) {
                                                var r = new Set(e);
                                                e.has(t) ? r.delete(t) : r.add(t);
                                                return r
                                            }));
                                            var t
                                        },
                                        value: y.has(e.role_id),
                                        label: e.name,
                                        isArchived: e.archived
                                    }, e.role_id)]
                                })
                            }))]
                        })
                    }), (0, n.jsx)(c.ModalFooter, {
                        children: (0, n.jsx)(c.Tooltip, {
                            shouldShow: !j,
                            text: I.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,
                            children: function(e) {
                                return (0, n.jsx)(c.Button, D(N({}, e), {
                                    "aria-label": I.Z.Messages.SAVE,
                                    disabled: !j,
                                    submitting: d,
                                    onClick: S,
                                    children: I.Z.Messages.SAVE
                                }))
                            }
                        })
                    })]
                })
            }

            function G(e) {
                var t, r = e.guildId,
                    o = e.data,
                    a = e.file,
                    l = P(e, ["guildId", "data", "file"]),
                    s = k(i.useState(!1), 2),
                    c = s[0],
                    d = s[1],
                    f = (t = C((function(e, t) {
                        var n;
                        return T(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, 3, 4]);
                                    d(!0);
                                    n = (0, u.Z)();
                                    y.default.track(E.rMx.EMOJI_UPLOAD_STARTED, {
                                        guild_id: r,
                                        upload_id: n
                                    });
                                    return [4, (0, h.G)({
                                        guildId: r,
                                        uploadId: n,
                                        data: o,
                                        file: a,
                                        roles: e
                                    })];
                                case 1:
                                    i.sent();
                                    t();
                                    return [3, 4];
                                case 2:
                                    i.sent();
                                    return [3, 4];
                                case 3:
                                    d(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    })), function(e, r) {
                        return t.apply(this, arguments)
                    }),
                    p = (0, g.qi)(r, {
                        includeSoftDeleted: !0,
                        sortDeletedListingsLast: !0
                    });
                return (0, n.jsx)(Z, N({
                    emojiUrl: o,
                    onSave: f,
                    saving: c,
                    listingChoices: p
                }, l))
            }

            function B(e) {
                var t, r = e.emoji,
                    o = e.guildId,
                    a = P(e, ["emoji", "guildId"]),
                    l = O.ZP.getEmojiURL({
                        id: r.id,
                        animated: r.animated,
                        size: 40
                    }),
                    s = k((0, f.Z)(d.dv), 2),
                    u = s[0],
                    c = s[1].loading,
                    h = (t = C((function(e, t) {
                        return T(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, u({
                                        guildId: o,
                                        emojiId: r.id,
                                        roles: e
                                    })];
                                case 1:
                                    null != n.sent() && t();
                                    return [2]
                            }
                        }))
                    })), function(e, r) {
                        return t.apply(this, arguments)
                    }),
                    p = (0, g.qi)(o, {
                        includeSoftDeleted: !0
                    });
                p.sort((function(e, t) {
                    return Number(e.soft_deleted) - Number(t.soft_deleted)
                }));
                var b = function(e) {
                        var t = (0, j.e7)([S.Z], (function() {
                                return S.Z.getGuild(e)
                            })),
                            r = (0, j.e7)([_.Z], (function() {
                                return _.Z.getSubscriptionRoles(e)
                            }));
                        return i.useMemo((function() {
                            return null == (null == t ? void 0 : t.roles) ? x : Object.values(t.roles).filter((function(e) {
                                return r.has(e.id)
                            }))
                        }), [null == t ? void 0 : t.roles, r])
                    }(o),
                    v = i.useMemo((function() {
                        var e = new Set(b.map((function(e) {
                            return e.id
                        })));
                        return r.roles.filter((function(t) {
                            return e.has(t)
                        }))
                    }), [r.roles, b]);
                return (0, n.jsx)(Z, N({
                    emojiUrl: l,
                    onSave: h,
                    initialRoleIds: v,
                    saving: c,
                    listingChoices: p
                }, a))
            }
        }
    }
]);