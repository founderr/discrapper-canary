"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18442], {
        442368: (e, n, r) => {
            r.d(n, {
                kY: () => u,
                Aj: () => d,
                d$: () => f,
                S1: () => E,
                hw: () => h,
                kU: () => v
            });
            var t = r(744564),
                i = r(20170),
                a = r(761953);

            function o(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(t, i)
            }

            function l(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function l(e) {
                            o(a, t, i, l, s, "next", e)
                        }

                        function s(e) {
                            o(a, t, i, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var s = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0,
                                    i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function u(e, n, r, t) {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = l((function(e, n, r, a) {
                    var o;
                    return s(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return null == (o = e.getGuildId()) || n !== o ? [3, 2] : [4, (0, i.u)(e, a, r)];
                            case 1:
                                if (!l.sent()) return [2, !1];
                                l.label = 2;
                            case 2:
                                t.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
                                    id: n,
                                    allow: r,
                                    deny: a
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function d(e) {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
                    id: e
                })
            }

            function f(e) {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
                    advancedMode: e
                })
            }

            function E() {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
                })
            }

            function h(e, n, r) {
                return v(e, n, [], r)
            }

            function v(e, n, r, i) {
                t.Z.dispatch({
                    type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
                });
                return new Promise((function(t) {
                    var i = function() {
                        if (0 === n.length && 0 === r.length) return t();
                        if (n.length > 0) {
                            var o = n.pop();
                            if (null == o) return i();
                            a.Z.updatePermissionOverwrite(e, o).then(i, i)
                        } else {
                            var l = r.pop();
                            if (null == l) return i();
                            a.Z.clearPermissionOverwrite(e, l).then(i, i)
                        }
                    };
                    i()
                })).then((function() {
                    t.Z.dispatch({
                        type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                        silent: i
                    })
                }))
            }
        },
        1477: (e, n, r) => {
            r.d(n, {
                GJ: () => p,
                X0: () => b,
                W: () => N,
                aq: () => T,
                pM: () => R,
                ik: () => _,
                Wx: () => w,
                kA: () => M,
                RZ: () => A,
                iI: () => P,
                cR: () => L,
                zB: () => j,
                yv: () => D,
                _A: () => k,
                $e: () => G,
                Yh: () => H,
                Yk: () => B,
                RD: () => U,
                nT: () => V,
                $7: () => z,
                Tj: () => $
            });
            var t = r(940060),
                i = r(547308),
                a = r(442368),
                o = r(73904),
                l = r(382060),
                s = r(21372),
                u = r(473903),
                c = r(176758),
                d = r(72580),
                f = r(563135),
                E = r(749565),
                h = r(449518),
                v = r(2590),
                S = r(473708);

            function m(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function p(e) {
                return t.Z.has(e.permissions, v.Plq.ADMINISTRATOR)
            }

            function y(e) {
                return t.Z.has(e.permissions, v.Plq.ADMINISTRATOR) ? h.aC.ADMINISTRATOR : h.aC.ROLE
            }

            function b(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = y(e);
                return {
                    rowType: t,
                    colorString: null !== (n = e.colorString) && void 0 !== n ? n : (0, i.Rf)(v.p6O),
                    name: e.name,
                    id: e.id,
                    disabled: p(e) || r,
                    key: "".concat(t, ":").concat(e.id),
                    tags: e.tags
                }
            }

            function N(e, n) {
                var r = p(e) ? 0 : 1,
                    t = p(n) ? 0 : 1;
                return r !== t ? r - t : n.position - e.position
            }

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
                return [{
                    rowType: h.aC.EMPTY_STATE,
                    colorString: (0, i.Rf)(v.p6O),
                    name: e,
                    disabled: !0,
                    id: "EMPTY_STATE"
                }]
            }

            function g(e, n, r, i) {
                var a = u.default.getCurrentUser();
                if (null == a) return !1;
                if (null == e) return a.id !== n;
                var o = e.permissionOverwrites[n];
                null != (null == i ? void 0 : i[n]) && (o = i[n]);
                return null == o || !t.Z.has(o.allow, r)
            }

            function R(e, n) {
                return e === n
            }

            function O(e, n) {
                return !R(e.id, n.id)
            }

            function _(e, n, r) {
                var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    return !0
                };
                return null == e.roles ? [] : Object.values(e.roles).filter((function(i) {
                    return !p(i) && g(n, i.id, r) && O(e, i) && t(i.name)
                })).sort(N).map((function(e) {
                    return b(e)
                }))
            }

            function w(e, n, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                    return !0
                };
                return null == e.roles ? [] : Object.values(e.roles).filter((function(t) {
                    return !p(t) && g(n, t.id, r) && O(e, t) && i(t.name)
                })).sort(N).map((function(e) {
                    return b(e, t.Z.has(e.permissions, r))
                }))
            }

            function M(e, n, r, t) {
                var i = [];
                if (null == e.roles) return i;
                i = function(e, n, r, t) {
                    return Object.values(e.roles).filter((function(i) {
                        return p(i) || !g(n, i.id, r, t) && O(e, i)
                    }))
                }(e, n, r, t).sort(N).map((function(e) {
                    return b(e)
                }));
                return 0 === i.length ? T(S.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : i
            }

            function A(e, n, r, i) {
                var a = [];
                if (null == e.roles) return a;
                a = function(e, n, r, i) {
                    return Object.values(e.roles).filter((function(a) {
                        var o;
                        return p(a) || !g(n, a.id, r, i) && O(e, a) || t.Z.has(t.Z.combine(a.permissions, null === (o = n.permissionOverwrites[a.id]) || void 0 === o ? void 0 : o.allow), r)
                    }))
                }(e, n, r, i).sort(N).map((function(e) {
                    return b(e, t.Z.has(e.permissions, r))
                }));
                return 0 === a.length ? T(S.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : a
            }

            function I(e, n) {
                var r;
                return null !== (r = s.ZP.getNick(n.id, e.id)) && void 0 !== r ? r : E.ZP.getName(e)
            }

            function C(e, n) {
                return n.isOwner(e)
            }

            function x(e, n) {
                var r, t = function(e, n) {
                    return n.isOwner(e) ? h.aC.OWNER : h.aC.MEMBER
                }(e, n);
                return {
                    rowType: t,
                    name: I(e, n),
                    nickname: null !== (r = s.ZP.getNick(n.id, e.id)) && void 0 !== r ? r : null,
                    username: E.ZP.getName(e),
                    id: e.id,
                    avatarURL: e.getAvatarURL(n.id, 24),
                    bot: e.bot,
                    verifiedBot: e.isVerifiedBot(),
                    disabled: C(e, n),
                    key: "".concat(t, ":").concat(e.id)
                }
            }

            function Z(e, n) {
                return e.rowType !== n.rowType ? e.rowType - n.rowType : e.name.toLocaleLowerCase().localeCompare(n.name.toLocaleLowerCase())
            }

            function P(e, n, r, t) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                    return !0
                };
                return e.map(u.default.getUser).filter(d.lm).filter((function(e) {
                    return !r.isOwner(e) && g(n, e.id, t) && (i(I(e, r)) || i(e.username) || i(e.discriminator))
                })).map((function(e) {
                    return x(e, r)
                })).sort(Z)
            }

            function L(e, n, r, t, i) {
                return function(e, n, r, t, i) {
                    return e.map(u.default.getUser).filter(d.lm).filter((function(e) {
                        return !g(n, e.id, t, i) || C(e, r)
                    }))
                }(e, n, r, t, i).map((function(e) {
                    return x(e, r)
                })).sort(Z)
            }

            function j(e, n) {
                switch (e) {
                    case h.aC.ROLE:
                        return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
                    case h.aC.OWNER:
                        return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
                    case h.aC.ADMINISTRATOR:
                        return S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
                    case h.aC.MEMBER:
                        return n ? S.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
                    case h.aC.USER:
                        return S.Z.Messages.USER;
                    case h.aC.GUILD:
                        return S.Z.Messages.SERVER;
                    case h.aC.EMPTY_STATE:
                        return null
                }
            }

            function D(e) {
                switch (e) {
                    case h.aC.ROLE:
                        return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case h.aC.OWNER:
                        return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case h.aC.ADMINISTRATOR:
                        return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case h.aC.MEMBER:
                        return S.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
                    case h.aC.EMPTY_STATE:
                    default:
                        return null
                }
            }

            function k(e, n, r) {
                var i = e.permissionOverwrites[e.guild_id];
                null == i && (i = f.ZP.makeEveryoneOverwrite(e.guild_id));
                var a = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            m(e, n, r[n])
                        }))
                    }
                    return e
                }({}, i);
                a.deny = t.Z.remove(a.deny, n);
                a.allow = t.Z.remove(a.allow, n);
                r || (a.deny = t.Z.add(a.deny, n));
                return a
            }

            function G(e, n, r) {
                var t = k(e, n, r);
                (0, a.kY)(e, t.id, t.allow, t.deny)
            }

            function H(e, n) {
                var r = u.default.getCurrentUser();
                if (null != r) {
                    var i = e.permissionOverwrites[r.id];
                    if (null == i) {
                        var l = {
                            id: r.id,
                            type: o.BN.MEMBER,
                            allow: t.Z.add(f.ZP.NONE, n),
                            deny: f.ZP.NONE
                        };
                        (0, a.hw)(e.id, [l], !0)
                    } else {
                        var s = i.allow,
                            c = i.deny;
                        s = t.Z.add(s, n);
                        (0, a.kY)(e, i.id, s, c)
                    }
                }
            }

            function B(e, n) {
                if (null == e) return !1;
                var r = e.permissionOverwrites[e.guild_id];
                null != (null == n ? void 0 : n[e.guild_id]) && (r = n[e.guild_id]);
                return null != r && t.Z.has(r.deny, e.accessPermissions)
            }

            function U(e) {
                var n = Object.keys(e.roles);
                return 0 !== n.length && (1 !== n.length || n[0] !== e.id)
            }

            function V(e, n, r) {
                return e === v.d4z.GUILD_TEXT || e === v.d4z.GUILD_ANNOUNCEMENT ? n : !(0, l.bw)(e) && e !== v.d4z.GUILD_CATEGORY || n && r
            }

            function z(e) {
                switch (e) {
                    case v.d4z.GUILD_TEXT:
                    case v.d4z.GUILD_ANNOUNCEMENT:
                        return S.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case v.d4z.GUILD_VOICE:
                        return S.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
                    case v.d4z.GUILD_CATEGORY:
                        return S.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
                    default:
                        return null
                }
            }

            function $(e, n) {
                var r = [];
                Object.values(e).forEach((function(e) {
                    var t = e.row;
                    null != t.id && "" !== t.id && (t.rowType === h.aC.ROLE ? r.push((0, c.rX)(t.id, n)) : t.rowType === h.aC.MEMBER && r.push((0, c.jZ)(t.id, n)))
                }));
                return r
            }
        },
        118442: (e, n, r) => {
            r.d(n, {
                Z: () => Z,
                G: () => I
            });
            var t = r(785893),
                i = r(667294),
                a = r(294184),
                o = r.n(a),
                l = r(457217),
                s = r(882723),
                u = r(407737),
                c = r(609853),
                d = r(107364),
                f = r(124251),
                E = r(443812),
                h = r(855595),
                v = r(1477),
                S = r(650332),
                m = r(489670),
                p = r.n(m);
            const y = i.forwardRef((function(e, n) {
                var r = e.query,
                    i = e.onQueryChange,
                    a = e.onRemoveTag,
                    o = e.onSelect,
                    l = e.onSelectionChange,
                    s = e.selectedSection,
                    u = e.selectedRow,
                    c = e.tags,
                    d = e.sections,
                    f = e.placeholder,
                    E = void 0 === f ? "" : f,
                    h = e.focusAfterReady,
                    v = e.isReady,
                    m = e["aria-labelledby"],
                    y = e["aria-controls"];
                return (0, t.jsx)(S.ZP, {
                    autoFocus: !0,
                    className: p().searchBar,
                    maxHeight: 100,
                    onQueryChange: i,
                    onRemoveTag: a,
                    selectedSection: s,
                    selectedRow: u,
                    onSelect: o,
                    onSelectionChange: l,
                    placeholder: 0 === c.length ? E : "",
                    query: r,
                    ref: n,
                    size: S.ZP.Sizes.MEDIUM,
                    tags: c,
                    sections: d,
                    focusAfterReady: h,
                    isReady: v,
                    inputProps: {
                        "aria-labelledby": m,
                        "aria-controls": y,
                        "aria-expanded": !0,
                        "aria-activedescendant": "user-row-".concat(u)
                    }
                })
            }));
            var b = r(449518),
                N = r(473708),
                T = r(923062),
                g = r.n(T);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function O(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function _(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function w(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = (0, E.hQ)(),
                A = (0, E.hQ)();

            function I(e) {
                return "".concat(e.rowType, ":").concat(e.id)
            }

            function C(e) {
                return (0, t.jsx)(s.FormTitle, {
                    tag: "h5",
                    className: o()(g().sectionTitle, g().rowHeight),
                    children: e
                }, e)
            }

            function x(e) {
                var n = e.id,
                    r = e.children,
                    i = e.rowLabel,
                    a = e.checked,
                    u = e.onSelect,
                    c = e.disabled,
                    f = e.showCheckbox,
                    E = e.selected,
                    h = e.onMouseEnter,
                    v = e["aria-posinset"],
                    S = e["aria-setsize"],
                    m = (0, l.JA)(n);
                return (0, t.jsx)(s.Clickable, _(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            O(e, n, r[n])
                        }))
                    }
                    return e
                }({}, m), {
                    id: n,
                    className: o()(g().addMemberRow, O({}, g().selectedRow, E)),
                    onClick: function(e) {
                        if (!c) {
                            e.preventDefault();
                            u()
                        }
                    },
                    onMouseEnter: h,
                    role: "option",
                    "aria-disabled": c,
                    "aria-selected": a,
                    "aria-setsize": S,
                    "aria-posinset": v,
                    children: (0, t.jsxs)(d.Z, {
                        justify: d.Z.Justify.BETWEEN,
                        align: d.Z.Align.CENTER,
                        children: [f ? (0, t.jsx)(s.Checkbox, {
                            displayOnly: !0,
                            size: 18,
                            value: a,
                            type: s.Checkbox.Types.INVERTED,
                            disabled: c,
                            children: (0, t.jsx)("div", {
                                className: g().checkboxLabel,
                                children: r
                            })
                        }) : r, null != i ? (0, t.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: i
                        }) : null]
                    })
                }))
            }

            function Z(e) {
                var n = e.listClassName,
                    r = e.pendingAdditions,
                    a = e.query,
                    l = e.onQueryChange,
                    E = e.onClickRow,
                    S = e.onRemovePendingAddition,
                    m = e.roles,
                    p = void 0 === m ? [] : m,
                    T = e.members,
                    R = void 0 === T ? [] : T,
                    _ = e.users,
                    Z = void 0 === _ ? [] : _,
                    P = e.guilds,
                    L = void 0 === P ? [] : P,
                    j = e.placeholderText,
                    D = e.disabledText,
                    k = e.hintText,
                    G = e.searchTitleText,
                    H = e.renderEmptyText,
                    B = e.focusSearchAfterReady,
                    U = e.isReady,
                    V = e.maxCount,
                    z = e.hideRowLabel,
                    $ = void 0 !== z && z,
                    Y = function() {
                        var e;
                        J(!(null === (e = q.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && ue)
                    },
                    W = i.useRef(null),
                    q = i.useRef(null),
                    F = [p.length, R.length, Z.length, L.length],
                    Q = w(i.useState(!1), 2),
                    X = Q[0],
                    J = Q[1],
                    K = w(i.useState(0), 2),
                    ee = K[0],
                    ne = K[1],
                    re = w(i.useState(-1), 2),
                    te = re[0],
                    ie = re[1];
                i.useEffect((function() {
                    var e;
                    null === (e = W.current) || void 0 === e || e.focus()
                }), []);
                var ae = i.useCallback((function(e, n) {
                        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        ne(e);
                        ie(n);
                        if (r) {
                            var t;
                            null === (t = q.current) || void 0 === t || t.scrollToIndex({
                                section: null != e ? e : 0,
                                row: null != n ? n : 0,
                                padding: 8
                            })
                        }
                    }), []),
                    oe = i.useCallback((function(e, n) {
                        if (null != n) {
                            l("");
                            var r = (e === b.m$.ROLES ? p : [])[n];
                            r.rowType !== b.aC.EMPTY_STATE && E(r)
                        }
                    }), [p, E, l]),
                    le = i.useCallback((function(e) {
                        var n;
                        if (null != e && e.rowType !== b.aC.EMPTY_STATE) {
                            E(e);
                            l("");
                            null === (n = W.current) || void 0 === n || n.focus()
                        }
                    }), [E, l]),
                    se = i.useMemo((function() {
                        return Object.keys(r)
                    }), [r]),
                    ue = i.useMemo((function() {
                        return R.some((function(e) {
                            return !e.disabled
                        })) || p.some((function(e) {
                            return !e.disabled
                        })) || Z.some((function(e) {
                            return !e.disabled
                        })) || L.some((function(e) {
                            return !e.disabled
                        }))
                    }), [R, p, Z, L]) || "" === a.trim();
                i.useEffect((function() {
                    Y()
                }));
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: o()(g().searchBox, O({}, g().scrollSeparator, X)),
                        children: [null != G && (0, t.jsx)(s.FormTitle, {
                            tag: s.FormTitleTags.H5,
                            children: G
                        }), (0, t.jsx)(y, {
                            ref: W,
                            query: a,
                            onQueryChange: l,
                            selectedSection: ee,
                            selectedRow: te,
                            onSelectionChange: ae,
                            onSelect: oe,
                            tags: se.map((function(e) {
                                return r[e].display
                            })),
                            sections: F,
                            onRemoveTag: function(e) {
                                S(se[e])
                            },
                            placeholder: j,
                            focusAfterReady: B,
                            isReady: U,
                            "aria-labelledby": M,
                            "aria-controls": A
                        }), null != k ? (0, t.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            children: k
                        }) : null]
                    }), ue ? (0, t.jsx)(s.List, {
                        ref: q,
                        className: o()(g().roleMemberList, n),
                        sections: F,
                        renderRow: function(e) {
                            var n, i, a = e.section,
                                l = e.row,
                                u = null,
                                d = !1,
                                E = !1,
                                S = !1,
                                m = !d && null != V && Object.keys(r).length >= V;
                            switch (a) {
                                case b.m$.ROLES:
                                    d = (i = I(u = p[l])) in r || u.disabled;
                                    E = u.disabled || m;
                                    S = ee === b.m$.ROLES && te === l;
                                    n = (0, t.jsxs)("div", {
                                        className: g().rowBody,
                                        children: [(0, t.jsx)("div", {
                                            className: o()(g().rowHeight, g().alignCenter),
                                            children: (0, t.jsx)(h.Z, {
                                                color: u.colorString,
                                                height: 20
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: g().rowLabel,
                                            children: [(0, t.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                className: g().rowTitle,
                                                color: u.rowType === b.aC.EMPTY_STATE ? "text-muted" : "text-normal",
                                                children: u.name
                                            }), u.disabled && null != D ? (0, t.jsx)(s.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: D
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case b.m$.MEMBERS:
                                    d = (i = I(u = R[l])) in r || u.disabled;
                                    E = u.disabled || m;
                                    S = ee === b.m$.MEMBERS && te === l;
                                    n = (0, t.jsxs)("div", {
                                        className: g().rowBody,
                                        children: [(0, t.jsx)(s.Avatar, {
                                            src: u.avatarURL,
                                            size: s.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, t.jsx)(s.Text, {
                                            className: g().rowLabel,
                                            variant: "text-sm/normal",
                                            children: u.name
                                        }), null != u.nickname ? (0, t.jsx)(s.Text, {
                                            color: "text-muted",
                                            className: g().rowLabelSubText,
                                            variant: "text-sm/normal",
                                            "aria-hidden": !0,
                                            children: u.username
                                        }) : null, u.bot && (0, t.jsx)(c.Z, {
                                            verified: u.verifiedBot
                                        })]
                                    });
                                    break;
                                case b.m$.USERS:
                                    d = (i = I(u = Z[l])) in r || u.disabled;
                                    E = u.disabled || m;
                                    S = ee === b.m$.USERS && te === l;
                                    n = (0, t.jsxs)("div", {
                                        className: g().rowBody,
                                        children: [(0, t.jsx)(s.Avatar, {
                                            src: u.avatarURL,
                                            size: s.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, t.jsxs)("div", {
                                            className: g().rowLabel,
                                            children: [(0, t.jsx)(s.Text, {
                                                variant: "text-sm/normal",
                                                children: u.name
                                            }), u.disabled && null != D ? (0, t.jsx)(s.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: D
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case b.m$.GUILDS:
                                    d = (i = I(u = L[l])) in r || u.disabled;
                                    E = u.disabled || m;
                                    S = ee === b.m$.GUILDS && te === l;
                                    n = (0, t.jsxs)("div", {
                                        className: g().rowBody,
                                        children: [(0, t.jsx)(f.Z, {
                                            guild: u.guild,
                                            active: !0,
                                            size: f.Z.Sizes.SMALLER
                                        }), (0, t.jsx)("div", {
                                            className: g().rowLabel,
                                            children: (0, t.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-normal",
                                                children: u.name
                                            })
                                        })]
                                    })
                            }
                            return null == u ? null : (0, t.jsx)(x, {
                                id: "user-row-".concat(l),
                                rowLabel: $ ? null : v.zB(u.rowType),
                                checked: d,
                                disabled: E,
                                onSelect: function() {
                                    return le(u)
                                },
                                showCheckbox: u.rowType !== b.aC.EMPTY_STATE,
                                onMouseEnter: function() {
                                    return ae(a, l, !1)
                                },
                                selected: S,
                                "aria-posinset": l + 1,
                                "aria-setsize": F.reduce((function(e, n) {
                                    return e + n
                                }), 0),
                                children: n
                            }, i)
                        },
                        rowHeight: 40,
                        renderSection: function(e) {
                            switch (e.section) {
                                case b.m$.ROLES:
                                    return C(N.Z.Messages.ROLES);
                                case b.m$.MEMBERS:
                                    return C(N.Z.Messages.MEMBERS);
                                case b.m$.USERS:
                                    return C(N.Z.Messages.USERS);
                                case b.m$.GUILDS:
                                    return C(N.Z.Messages.SERVERS)
                            }
                        },
                        sectionHeight: 32,
                        onScroll: Y,
                        role: void 0,
                        innerRole: "listbox",
                        innerId: A,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: "vertical"
                    }) : (0, t.jsxs)(d.Z, {
                        className: n,
                        align: d.Z.Align.CENTER,
                        justify: d.Z.Justify.CENTER,
                        direction: d.Z.Direction.VERTICAL,
                        children: [(0, t.jsx)(u.Z, {
                            className: g().noResultIcon
                        }), (0, t.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: H(a)
                        })]
                    })]
                })
            }
        },
        20170: (e, n, r) => {
            r.d(n, {
                C: () => p,
                u: () => T
            });
            var t = r(940060),
                i = r(105783),
                a = r(703790),
                o = r(567403),
                l = r(888236),
                s = r(404741),
                u = r(185219),
                c = r(322008),
                d = r(2590),
                f = r(473708);

            function E(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function h(e, n, r, t, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(t, i)
            }

            function v(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function o(e) {
                            h(a, t, i, o, l, "next", e)
                        }

                        function l(e) {
                            h(a, t, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function S(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var m = function(e, n) {
                var r, t, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                (t = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        t = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function p(e, n) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = v((function(e, n) {
                    return m(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return null == e ? [2, !0] : [4, b(e, n, {
                                    removingView: !0,
                                    removingChat: !0
                                })];
                            case 1:
                                return [2, r.sent()]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e, n, r) {
                return N.apply(this, arguments)
            }

            function N() {
                return (N = v((function(e, n, r) {
                    var t, i, a, f, E, h, v, p, y;
                    return m(this, (function(m) {
                        switch (m.label) {
                            case 0:
                                return null == (i = o.Z.getGuild(e)) ? [2, !0] : (a = null != i && (null === (t = i.features) || void 0 === t ? void 0 : t.has(d.oNc.GUILD_ONBOARDING))) ? a && s.Z.shouldFetchPrompts(e) ? [4, (0, l.eM)(e)] : [3, 2] : [2, !0];
                            case 1:
                                m.sent();
                                m.label = 2;
                            case 2:
                                f = s.Z.getDefaultChannelIds(e);
                                E = S((0, u.d9)(e, f), 2), h = E[0], v = E[1];
                                if (!f.includes(n)) return [2, !0];
                                p = r.removingView && v.length - 1 < c.md;
                                y = (r.removingChat || r.removingView) && h.length - 1 < c.X;
                                return [2, !p && !y]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function T(e, n, r) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = v((function(e, n, r) {
                    var o, l, s, u;
                    return m(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                if (null == (o = e.getGuildId())) return [2, !0];
                                null != r && (n = t.Z.filter(n, t.Z.invert(r)));
                                l = e.permissionOverwrites[o];
                                s = null != l ? t.Z.filter(l.deny, t.Z.invert(l.allow)) : t.Z.deserialize(0);
                                u = {
                                    removingView: t.Z.has(n, d.Plq.VIEW_CHANNEL) && !t.Z.has(s, d.Plq.VIEW_CHANNEL),
                                    removingChat: !1
                                };
                                e.isForumLikeChannel() ? u.removingChat = t.Z.has(n, d.Plq.SEND_MESSAGES_IN_THREADS) && !t.Z.has(s, d.Plq.SEND_MESSAGES_IN_THREADS) : u.removingChat = t.Z.has(n, d.Plq.SEND_MESSAGES) && !t.Z.has(s, d.Plq.SEND_MESSAGES);
                                return u.removingChat || u.removingView ? [4, b(o, e.id, u)] : [2, !0];
                            case 1:
                                if (!c.sent()) {
                                    i.Z.show({
                                        title: f.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
                                        body: f.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                                            onClick: function() {
                                                i.Z.close();
                                                a.Z.open(o, d.pNK.ONBOARDING)
                                            }
                                        })
                                    });
                                    return [2, !1]
                                }
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        407737: (e, n, r) => {
            r.d(n, {
                Z: () => s
            });
            var t = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                o = r(30363),
                l = r.n(o);

            function s(e) {
                var n = e.className;
                return (0, t.jsx)("div", {
                    className: a()(l().image, n)
                })
            }
        }
    }
]);
//# sourceMappingURL=4af19252f5ebf14d850f.js.map