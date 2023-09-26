"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [50648], {
        372956: (e, t, n) => {
            n.d(t, {
                x: () => a,
                C: () => o
            });
            var r = n(744564),
                i = n(758635);

            function a(e) {
                var t = e.omitUserIds,
                    n = e.guild,
                    a = e.channel,
                    o = e.applicationId,
                    l = e.inviteTargetType;
                return (0, i.W)().then((function() {
                    r.Z.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: a,
                        applicationId: o,
                        inviteTargetType: l
                    })
                }))
            }

            function o(e) {
                r.Z.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        350648: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => te
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                o = n.n(a),
                l = n(326470),
                s = n.n(l),
                u = n(993231),
                c = n(202351),
                f = n(882723),
                d = n(761953),
                p = n(372956),
                m = n(567867),
                y = n(625091),
                h = n(474717),
                b = n(479373),
                v = n(28661),
                g = n(621647),
                I = n(773011),
                S = n(30027),
                E = n(61209),
                w = n(284610),
                T = n(567403),
                _ = n(537335),
                O = n(840922),
                C = n(255592),
                A = n(473903),
                j = n(282898),
                x = n(169649),
                M = n(157225),
                N = n(652591),
                Z = n(775173),
                D = n(786502),
                P = n(120415),
                R = n(421281),
                k = n(749565),
                U = n(310126),
                L = n(258104),
                B = n(2590),
                F = n(718634),
                G = n(473708),
                H = n(517014),
                z = n.n(H);

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function q(e, t, n, r, i, a, o) {
                try {
                    var l = e[a](o),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function W(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            q(a, r, i, o, l, "next", e)
                        }

                        function l(e) {
                            q(a, r, i, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function K(e, t) {
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

            function X(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || J(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Q(e) {
                return function(e) {
                    if (Array.isArray(e)) return V(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || J(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function J(e, t) {
                if (e) {
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V(e, t) : void 0
                }
            }
            var ee = function(e, t) {
                var n, r, i, a, o = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
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
                                        r = a[1];
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
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
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

            function te(e) {
                var t = e.applicationId,
                    n = e.mediaUrl,
                    a = e.channelId,
                    o = e.onClose,
                    l = e.transitionState,
                    g = X(e, ["applicationId", "mediaUrl", "channelId", "onClose", "transitionState"]),
                    I = (0, c.e7)([L.ZP], (function() {
                        return L.ZP.getSelfEmbeddedActivityForChannel(a)
                    }));
                (0, b.Z)({
                    type: u.nv.MODAL,
                    name: u.zs.ACTIVITY_SHARE_MOMENT_MODAL,
                    properties: {
                        application_id: t,
                        activity_session_id: null == I ? void 0 : I.activity_id
                    }
                });
                var T = $((0, v.Z)([t]), 1)[0],
                    O = (0, c.e7)([A.default], (function() {
                        return A.default.getCurrentUser()
                    })),
                    x = $(i.useState(""), 2),
                    M = x[0],
                    Z = x[1],
                    P = $(i.useState([]), 2),
                    R = P[0],
                    k = P[1],
                    U = $(i.useState(null), 2),
                    H = U[0],
                    V = U[1],
                    q = $(i.useState(null), 2),
                    J = q[0],
                    te = q[1];
                i.useEffect((function() {
                    var e, t = (e = W((function() {
                        var e, t, r, i;
                        return ee(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    e = s().basename(new URL(n).pathname);
                                    return [4, fetch(n)];
                                case 1:
                                    return [4, a.sent().arrayBuffer()];
                                case 2:
                                    t = a.sent();
                                    r = new File([t], e);
                                    V(r);
                                    (i = new FileReader).onload = function() {
                                        var e;
                                        return te(null == i || null === (e = i.result) || void 0 === e ? void 0 : e.toString())
                                    };
                                    i.readAsDataURL(r);
                                    return [2]
                            }
                        }))
                    })), function() {
                        return e.apply(this, arguments)
                    });
                    t()
                }), [n, V]);
                var ie = (0, c.Wu)([_.Z], (function() {
                    return _.Z.getInviteSuggestionRows()
                }));
                i.useEffect((function() {
                    (0, p.x)({
                        omitUserIds: new Set,
                        applicationId: t,
                        inviteTargetType: F.Iq.EMBEDDED_APPLICATION
                    })
                }), [t]);
                i.useEffect((function() {
                    return (0, p.C)(M)
                }), [M]);
                var ae = i.useCallback(W((function() {
                    return ee(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, Promise.all(R.map((t = W((function(e) {
                                    var t, n;
                                    return ee(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return null != (t = ie.find((function(t) {
                                                    return t.item.id === e
                                                }))) ? [3, 1] : [2];
                                            case 1:
                                                n = t.item.id;
                                                return t.type !== D.bm.DM && t.type !== D.bm.FRIEND ? [3, 3] : [4, d.Z.ensurePrivateChannel(t.item.id)];
                                            case 2:
                                                n = r.sent();
                                                r.label = 3;
                                            case 3:
                                                m.Z.clearAll(n, w.d.ChannelMessage);
                                                r.label = 4;
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                })), function(e) {
                                    return t.apply(this, arguments)
                                })))];
                            case 1:
                                e.sent();
                                return [2]
                        }
                        var t
                    }))
                })), [R, ie]);
                i.useEffect((function() {
                    l === f.ModalTransitionState.EXITING && ae()
                }), [ae, l]);
                var oe = i.useCallback(W((function() {
                        return ee(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, ae()];
                                case 1:
                                    e.sent();
                                    o();
                                    return [2]
                            }
                        }))
                    })), [o, ae]),
                    le = i.useCallback(W((function() {
                        var e, n, r, i, a;

                        function o() {
                            o = W((function(i) {
                                var a, o, l;
                                return ee(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            switch (i.type) {
                                                case D.bm.DM:
                                                case D.bm.FRIEND:
                                                    e++;
                                                    break;
                                                case D.bm.GROUP_DM:
                                                    n++;
                                                    break;
                                                case D.bm.CHANNEL:
                                                    r++
                                            }
                                            a = i.item.id;
                                            return i.type !== D.bm.DM && i.type !== D.bm.FRIEND ? [3, 2] : [4, d.Z.ensurePrivateChannel(i.item.id)];
                                        case 1:
                                            a = s.sent();
                                            s.label = 2;
                                        case 2:
                                            o = C.Z.getUploads(a, w.d.ChannelMessage);
                                            l = E.Z.getChannel(a);
                                            y.Z.uploadFiles({
                                                channelId: a,
                                                uploads: o,
                                                parsedMessage: null != T ? S.ZP.parse(l, G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
                                                    applicationName: "**".concat(T.name, "**")
                                                })) : void 0,
                                                draftType: w.d.ChannelMessage,
                                                options: {
                                                    applicationId: t
                                                }
                                            });
                                            m.Z.clearAll(a, w.d.ChannelMessage);
                                            return [2]
                                    }
                                }))
                            }));
                            return o.apply(this, arguments)
                        }
                        return ee(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    e = 0;
                                    n = 0;
                                    r = 0;
                                    i = _.Z.getInviteSuggestionRows().filter((function(e) {
                                        return R.includes(e.item.id)
                                    })).map((function(e) {
                                        return function(e) {
                                            return o.apply(this, arguments)
                                        }(e)
                                    }));
                                    N.default.track(B.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                                        user_id: null == O ? void 0 : O.id,
                                        application_id: t,
                                        activity_session_id: null == I ? void 0 : I.activity_id,
                                        n_users: e,
                                        n_gdms: n,
                                        n_channels: r
                                    });
                                    l.label = 1;
                                case 1:
                                    l.trys.push([1, 3, , 4]);
                                    return [4, Promise.all(i)];
                                case 2:
                                    l.sent();
                                    null != T && (0, f.showToast)((0, f.createToast)(G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_FROM_APP.format({
                                        applicationName: T.name
                                    }), f.ToastType.SUCCESS));
                                    return [3, 4];
                                case 3:
                                    a = l.sent();
                                    (0, f.showToast)((0, f.createToast)(G.Z.Messages.UPLOAD_ERROR_TITLE, f.ToastType.FAILURE));
                                    throw a;
                                case 4:
                                    oe();
                                    return [2]
                            }
                        }))
                    })), [I, T, t, R, oe, O]),
                    se = function(e) {
                        var t, n = (t = W((function() {
                            var t, n;
                            return ee(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = e.item.id;
                                        return e.type !== D.bm.DM && e.type !== D.bm.FRIEND ? [3, 2] : [4, d.Z.ensurePrivateChannel(e.item.id)];
                                    case 1:
                                        t = r.sent();
                                        r.label = 2;
                                    case 2:
                                        if ((n = Q(R)).includes(e.item.id)) {
                                            m.Z.clearAll(t, w.d.ChannelMessage);
                                            n = n.filter((function(t) {
                                                return t !== e.item.id
                                            }))
                                        } else {
                                            if (n.length >= 10) return [2];
                                            if (null != H) {
                                                m.Z.addFile({
                                                    file: {
                                                        file: H,
                                                        platform: h.ow.WEB
                                                    },
                                                    channelId: t,
                                                    draftType: w.d.ChannelMessage
                                                });
                                                n.push(e.item.id)
                                            }
                                        }
                                        k(n);
                                        return [2]
                                }
                            }))
                        })), function() {
                            return t.apply(this, arguments)
                        });
                        return function() {
                            return n()
                        }
                    };
                return null == J ? (0, r.jsx)(f.Spinner, {}) : (0, r.jsxs)(f.ModalRoot, K(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Y(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    transitionState: l
                }, g), {
                    className: z().modalRoot,
                    children: [(0, r.jsxs)(f.ModalHeader, {
                        className: z().header,
                        children: [(0, r.jsxs)("div", {
                            className: z().headerTitle,
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "heading-md/semibold",
                                children: G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_MOMENT_HEADING
                            }), (0, r.jsx)(f.ModalCloseButton, {
                                onClick: oe
                            })]
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)("img", {
                                alt: n,
                                className: z().img,
                                src: J
                            })
                        })]
                    }), (0, r.jsxs)(f.ModalContent, {
                        className: z().modalContent,
                        children: [(0, r.jsx)(j.Z, {
                            className: z().searchBar,
                            placeholder: G.Z.Messages.SEARCH,
                            label: G.Z.Messages.SEARCH,
                            searchTerm: M,
                            onChange: function(e) {
                                return Z(e)
                            },
                            onClear: function() {
                                return Z("")
                            }
                        }), ie.map((function(e, t) {
                            return (0, r.jsxs)(i.Fragment, {
                                children: [0 === t ? null : (0, r.jsx)("div", {
                                    className: z().rowDivider
                                }), (0, r.jsx)(ne, {
                                    row: e,
                                    onClick: se(e),
                                    checked: R.includes(e.item.id),
                                    disabled: !R.includes(e.item.id) && R.length >= 10
                                })]
                            }, e.item.id)
                        }))]
                    }), (0, r.jsx)(f.ModalFooter, {
                        className: z().footer,
                        children: (0, r.jsxs)("div", {
                            className: z().copySendBar,
                            children: [(0, r.jsx)(re, {
                                applicationId: t,
                                activitySessionId: null == I ? void 0 : I.activity_id,
                                mediaUrl: n
                            }), R.length >= 10 ? (0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                children: G.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LIMIT_WARNING.format({
                                    maxShares: 10
                                })
                            }) : null, (0, r.jsx)(f.Button, {
                                onClick: le,
                                disabled: R.length <= 0,
                                children: G.Z.Messages.SEND
                            })]
                        })
                    })]
                }))
            }

            function ne(e) {
                var t = e.row,
                    n = e.onClick,
                    i = e.checked,
                    a = e.disabled,
                    l = null,
                    s = null,
                    u = null;
                switch (t.type) {
                    case D.bm.DM:
                    case D.bm.FRIEND:
                        l = (0, r.jsx)(f.Avatar, {
                            size: f.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        });
                        s = k.ZP.getName(t.item);
                        u = k.ZP.getUserTag(t.item);
                        break;
                    case D.bm.GROUP_DM:
                        var c = (0, g.x)(t.item),
                            d = (0, I.F6)(t.item, A.default, O.Z);
                        l = (0, r.jsx)(f.Avatar, {
                            src: c,
                            "aria-label": d,
                            size: f.AvatarSizes.SIZE_40
                        });
                        s = (0, I.F6)(t.item, A.default, O.Z);
                        break;
                    case D.bm.CHANNEL:
                        var p = t.item,
                            m = T.Z.getGuild(p.guild_id);
                        if (null == m) return null;
                        s = "#".concat((0, I.F6)(p, A.default, O.Z));
                        u = m.name;
                        if (null != m.icon) {
                            var y = Z.ZP.getGuildIconURL({
                                id: p.guild_id,
                                icon: m.icon,
                                size: 40
                            });
                            l = (0, r.jsx)(f.Avatar, {
                                src: y,
                                "aria-label": s,
                                size: f.AvatarSizes.SIZE_40
                            })
                        } else {
                            var h = (0, R.Zg)(m.name);
                            l = (0, r.jsx)("div", {
                                className: z().acronym,
                                "aria-hidden": !0,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    children: h
                                })
                            })
                        }
                }
                return (0, r.jsxs)(f.Clickable, {
                    onClick: n,
                    className: o()(z().rowContainer, Y({}, z().disabled, a)),
                    children: [(0, r.jsxs)("div", {
                        className: z().rowLeft,
                        children: [(0, r.jsx)("div", {
                            className: z().rowAvatar,
                            children: l
                        }), (0, r.jsxs)("div", {
                            className: z().rowNameContainer,
                            children: [(0, r.jsx)(f.Text, {
                                variant: "text-md/semibold",
                                className: o()(z().rowName, Y({}, z().disabled, a)),
                                children: s
                            }), (0, r.jsx)(f.Text, {
                                variant: "text-xs/medium",
                                className: o()(z().rowSubName, Y({}, z().disabled, a)),
                                children: u
                            })]
                        })]
                    }), (0, r.jsx)(f.Checkbox, {
                        disabled: a,
                        value: i,
                        type: f.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: z().rowRight
                    })]
                })
            }

            function re(e) {
                var t = e.applicationId,
                    n = e.mediaUrl,
                    a = e.activitySessionId,
                    o = $(i.useState(!1), 2),
                    l = o[0],
                    s = o[1],
                    u = (0, c.e7)([A.default], (function() {
                        return A.default.getCurrentUser()
                    }));
                i.useEffect((function() {
                    var e;
                    l && (e = setTimeout((function() {
                        s(!1)
                    }), 1e3));
                    return function() {
                        null != e && clearTimeout(e)
                    }
                }), [l]);

                function d() {
                    return (d = W((function() {
                        return ee(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    N.default.track(B.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                                        user_id: null == u ? void 0 : u.id,
                                        application_id: t,
                                        activity_session_id: a
                                    });
                                    return [4, U.ZP.copyImage(n)];
                                case 1:
                                    e.sent();
                                    s(!0);
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return P.FB && U.ZP.canCopyImage(n) ? (0, r.jsxs)(f.Button, {
                    look: f.Button.Looks.LINK,
                    color: f.Button.Colors.LINK,
                    onClick: function() {
                        return d.apply(this, arguments)
                    },
                    innerClassName: z().copyButton,
                    children: [l ? (0, r.jsx)(x.Z, {}) : (0, r.jsx)(M.Z, {}), l ? G.Z.Messages.COPIED : G.Z.Messages.COPY_IMAGE_MENU_ITEM]
                }) : (0, r.jsx)("div", {})
            }
        },
        537335: (e, t, n) => {
            n.d(t, {
                Z: () => D
            });
            var r = n(202351),
                i = n(744564),
                a = n(980604),
                o = n(72580),
                l = n(786502),
                s = n(61209),
                u = n(840922),
                c = n(239734),
                f = n(2590),
                d = n(718634);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function h(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var S, E, w, T, _, O, C, A = new Set,
                j = [],
                x = new Map;

            function M(e) {
                var t = new Set,
                    n = null == T || C === d.Iq.EMBEDDED_APPLICATION ? void 0 : T.id,
                    r = (0, l.rh)(A, n);
                null == r || u.Z.isBlocked(r.id) || t.add(r.id);
                var i = !0,
                    p = !1,
                    m = void 0;
                try {
                    for (var y, h = c.Z.getUserAffinitiesUserIds()[Symbol.iterator](); !(i = (y = h.next()).done); i = !0) {
                        var b = y.value;
                        t.add(b)
                    }
                } catch (e) {
                    p = !0;
                    m = e
                } finally {
                    try {
                        i || null == h.return || h.return()
                    } finally {
                        if (p) throw m
                    }
                }
                var v = new Set;
                if (C === d.Iq.EMBEDDED_APPLICATION) {
                    a.Z.getChannelHistory().map((function(e) {
                        return s.Z.getChannel(e)
                    })).filter(o.lm).filter((function(e) {
                        return e.type === f.d4z.GUILD_TEXT
                    })).slice(0, 3).forEach((function(e) {
                        return v.add(e.id)
                    }))
                }
                return (0, l.an)({
                    query: e,
                    omitUserIds: A,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: v,
                    inviteTargetType: C
                })
            }

            function N(e) {
                j = e;
                x = new Map;
                e.forEach((function(e, t) {
                    x.set(e, {
                        index: t
                    })
                }))
            }
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    m(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, c.Z)
                };
                r.getInviteSuggestionRows = function() {
                    return j
                };
                r.getTotalSuggestionsCount = function() {
                    return E
                };
                r.getInitialCounts = function() {
                    return S
                };
                r.getSelectedInviteMetadata = function(e) {
                    var t = x.get(e),
                        n = c.Z.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: j.length,
                        numAffinityConnections: n.size,
                        isFiltered: w
                    } : null
                };
                return n
            }(r.ZP.Store);
            Z.displayName = "InviteSuggestionsStore";
            const D = new Z(i.Z, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    var t = e.omitUserIds,
                        n = e.guild,
                        r = e.channel,
                        i = e.applicationId,
                        a = e.inviteTargetType;
                    T = null != r ? n : null;
                    _ = r;
                    O = i;
                    C = a;
                    var o = u.Z.getRelationships(),
                        s = Object.keys(o).filter((function(e) {
                            return o[e] === f.OGo.BLOCKED
                        })),
                        c = (0, l.Sz)({
                            channel: _,
                            applicationId: O,
                            inviteTargetType: a
                        });
                    A = new Set(v(t).concat(v(s), v(c)));
                    w = !1;
                    var d = M(""),
                        p = d.rows,
                        m = d.counts;
                    N(p);
                    S = m;
                    E = j.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    var t = e.query;
                    w = "" !== t;
                    N(M(t).rows)
                }
            })
        }
    }
]);