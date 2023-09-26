"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [33166], {
        633166: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => _
            });
            var t = r(785893),
                l = r(667294),
                a = r(294184),
                o = r.n(a),
                i = r(202351),
                u = r(281110),
                s = r(882723),
                c = r(822003),
                d = r(664625),
                f = r(21372),
                N = r(567403),
                v = r(682776),
                h = r(473903),
                p = r(652591),
                b = r(749565),
                m = r(2590),
                y = r(473708),
                E = r(327183),
                A = r.n(E);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function C(e, n, r, t, l, a, o) {
                try {
                    var i = e[a](o),
                        u = i.value
                } catch (e) {
                    r(e);
                    return
                }
                i.done ? n(u) : Promise.resolve(u).then(t, l)
            }

            function M(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function I(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, l, a = [],
                            o = !0,
                            i = !1;
                        try {
                            for (r = r.call(e); !(o = (t = r.next()).done); o = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            l = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (i) throw l
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = function(e, n) {
                var r, t, l, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & l[0]) throw l[1];
                        return l[1]
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, t && (l = 2 & a[0] ? t.return : a[0] ? t.throw || ((l = t.return) && l.call(t),
                                        0) : t.next) && !(l = l.call(t, a[1])).done) return l;
                                (t = 0, l) && (a = [2 & a[0], l.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        l = a;
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
                                        if (!(l = o.trys, l = l.length > 0 && l[l.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!l || a[1] > l[0] && a[1] < l[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < l[1]) {
                                            o.label = l[1];
                                            l = a;
                                            break
                                        }
                                        if (l && o.label < l[2]) {
                                            o.label = l[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        l[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = n.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                t = 0
                            } finally {
                                r = l = 0
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

            function x(e) {
                var n = e.disabled,
                    r = void 0 !== n && n,
                    a = e.user,
                    i = e.setNickname,
                    u = e.nickname,
                    c = e.error,
                    f = e.hasNick,
                    N = l.useRef(null),
                    v = l.useCallback((function() {
                        var e;
                        i("");
                        null === (e = N.current) || void 0 === e || e.focus()
                    }), [i]);
                return (0, t.jsxs)(t.Fragment, {
                    children: [r || null == a || a.id === d.default.getId() ? null : (0, t.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: A().card,
                        children: (0, t.jsx)(s.Text, {
                            className: A().warning,
                            variant: "text-md/normal",
                            children: y.Z.Messages.CHANGE_NICKNAME_WARNING
                        })
                    }), (0, t.jsx)(s.FormTitle, {
                        className: o()(A().itemGroup, M({}, A().disabled, r)),
                        children: r ? y.Z.Messages.CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED : y.Z.Messages.NICKNAME
                    }), (0, t.jsx)(s.TextInput, {
                        disabled: r,
                        inputRef: N,
                        maxLength: m.l$U,
                        value: u,
                        placeholder: b.ZP.getName(a),
                        onChange: i,
                        autoFocus: !0
                    }), null != c ? (0, t.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: A().nickError,
                        children: c
                    }) : null, f && !r ? (0, t.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.LINK,
                        size: s.Button.Sizes.NONE,
                        onClick: v,
                        className: A().reset,
                        children: y.Z.Messages.RESET_NICKNAME
                    }) : null]
                })
            }
            const _ = function(e) {
                var n, r = e.transitionState,
                    a = e.user,
                    o = e.guildId,
                    d = e.onClose,
                    b = e.analyticsSource,
                    E = e.analyticsLocations,
                    g = (0, i.e7)([f.ZP], (function() {
                        return null != o ? f.ZP.getMember(o, a.id) : null
                    })),
                    M = (0, i.e7)([v.Z, h.default, N.Z], (function() {
                        var e, n = N.Z.getGuild(o);
                        return null != n && ((null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a.id ? v.Z.can(m.Plq.CHANGE_NICKNAME, n) || v.Z.can(m.Plq.MANAGE_NICKNAMES, n) : v.Z.canManageUser(m.Plq.MANAGE_NICKNAMES, a.id, n))
                    })),
                    _ = I(l.useState(!1), 2),
                    j = _[0],
                    S = _[1],
                    Z = I(l.useState(null !== (n = null == g ? void 0 : g.nick) && void 0 !== n ? n : ""), 2),
                    w = Z[0],
                    G = Z[1],
                    L = I(l.useState({}), 2),
                    T = L[0],
                    R = L[1];
                l.useEffect((function() {
                    p.default.track(m.rMx.OPEN_MODAL, {
                        type: "Change Server Identity",
                        location: m.ZY5.GUILD_CHANNEL,
                        source: b
                    })
                }), []);
                var K, D, O = (0, c.sE)(o, {
                        location: null == E ? void 0 : E[0],
                        targetUserId: a.id
                    }),
                    H = l.useCallback((D = (K = function(e) {
                        var n, r, t, l, i, s, f, N, v, h, p, b, E;
                        return k(this, (function(A) {
                            switch (A.label) {
                                case 0:
                                    e.preventDefault();
                                    n = null;
                                    w !== (null !== (r = null == g ? void 0 : g.nick) && void 0 !== r ? r : "") && ((n = null != n ? n : {}).nick = w);
                                    if (null == n) {
                                        d();
                                        return [2]
                                    }
                                    A.label = 1;
                                case 1:
                                    A.trys.push([1, 3, , 4]);
                                    S(!0);
                                    return [4, u.ZP.patch({
                                        url: m.ANM.GUILD_MEMBER(o, a.id),
                                        body: n
                                    })];
                                case 2:
                                    A.sent();
                                    O(c.jQ.CHANGE_NICKNAME);
                                    d();
                                    return [3, 4];
                                case 3:
                                    t = A.sent();
                                    S(!1);
                                    null != (null == (f = null !== (s = null === (l = t.body) || void 0 === l ? void 0 : l.errors) && void 0 !== s ? s : null) ? void 0 : f.nick) ? i = (null === (N = f.nick) || void 0 === N || null === (v = N._errors) || void 0 === v || null === (h = v[0]) || void 0 === h ? void 0 : h.message) || y.Z.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR : null != (null == f ? void 0 : f.username) && (i = (null === (p = f.username) || void 0 === p || null === (b = p._errors) || void 0 === b || null === (E = b[0]) || void 0 === E ? void 0 : E.message) || y.Z.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR);
                                    R({
                                        nick: i
                                    });
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, t) {
                            var l = K.apply(e, n);

                            function a(e) {
                                C(l, r, t, a, o, "next", e)
                            }

                            function o(e) {
                                C(l, r, t, a, o, "throw", e)
                            }
                            a(void 0)
                        }))
                    }), function(e) {
                        return D.apply(this, arguments)
                    }), [o, w, d, a, g, O]);
                return (0, t.jsx)(s.ModalRoot, {
                    "aria-label": y.Z.Messages.CHANGE_IDENTITY,
                    transitionState: r,
                    children: (0, t.jsxs)("form", {
                        onSubmit: H,
                        children: [(0, t.jsx)(s.ModalHeader, {
                            separator: !1,
                            children: (0, t.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                children: y.Z.Messages.CHANGE_NICKNAME
                            })
                        }), (0, t.jsx)(s.ModalContent, {
                            className: A().modalContent,
                            children: (0, t.jsx)(x, {
                                disabled: !M,
                                user: a,
                                error: T.nick,
                                nickname: w,
                                setNickname: G,
                                hasNick: null != (null == g ? void 0 : g.nick)
                            })
                        }), (0, t.jsxs)(s.ModalFooter, {
                            children: [(0, t.jsx)(s.Button, {
                                type: "submit",
                                disabled: j,
                                children: y.Z.Messages.SAVE
                            }), (0, t.jsx)(s.Button, {
                                onClick: d,
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                children: y.Z.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);