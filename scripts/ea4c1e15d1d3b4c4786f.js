"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46007], {
        246007: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => He
            });
            var r = n(785893),
                a = n(667294),
                i = n(571657),
                o = n(304548),
                l = n(52474),
                u = n(306472),
                c = n(153686),
                s = n(19585),
                d = n(860123),
                f = n(332041);

            function p(e, t, n, r, a, i, o) {
                try {
                    var l = e[i](o),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function o(e) {
                            p(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            p(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }
            var h = function(e, t) {
                var n, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                        0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function m(e) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = v((function(e) {
                    var t, n;
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = f.createFile();
                                n = new Promise((function(e) {
                                    t.onReady = e
                                }));
                                e.fileStart = 0;
                                t.appendBuffer(e);
                                t.flush();
                                return [4, n];
                            case 1:
                                r.sent();
                                t.moov.boxes = t.moov.boxes.filter((function(e) {
                                    return !("trak" === e.type && "vide" === e.mdia.hdlr.handler)
                                }));
                                return [2, t.getBuffer()]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var y = n(544541),
                g = n(294184),
                x = n.n(g),
                j = n(318715),
                w = n(264817),
                S = n(787193),
                C = n(61209),
                E = n(567403),
                O = n(682776),
                P = n(107218),
                T = n(473903),
                I = n(621329),
                k = n(898652),
                A = n(811269),
                L = n(994655),
                N = n(684680),
                M = n(202351),
                D = n(384411),
                R = n(959207),
                Z = n(750203),
                _ = n(102921),
                F = n(473708),
                B = n(542136),
                U = n.n(B);

            function G(e) {
                var t, n, i = e.clip,
                    l = (0, M.e7)([R.Z], (function() {
                        return R.Z.getGame(null !== (t = i.applicationId) && void 0 !== t ? t : "")
                    })),
                    u = (0, M.e7)([D.default], (function() {
                        return D.default.locale
                    })),
                    c = a.useMemo((function() {
                        return new Date(_.Z.extractTimestamp(i.id))
                    }), [i.id]);
                return (0, r.jsxs)("div", {
                    className: U().root,
                    children: [(0, r.jsxs)("div", {
                        className: U().nameSection,
                        children: [(0, r.jsx)(Z.Z, {
                            game: l
                        }), (0, r.jsx)(o.Text, {
                            className: U().name,
                            variant: "text-md/medium",
                            color: "interactive-active",
                            children: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : i.applicationName
                        })]
                    }), (0, r.jsxs)("div", {
                        className: U().timeContainer,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(o.FormTitle, {
                                className: U().timeTitle,
                                children: F.Z.Messages.CLIPS_EDIT_DATE_TITLE
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: c.toLocaleDateString(u, {
                                    year: "2-digit",
                                    month: "2-digit",
                                    day: "2-digit"
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(o.FormTitle, {
                                className: U().timeTitle,
                                children: F.Z.Messages.CLIPS_EDIT_TIME_TITLE
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "interactive-active",
                                children: c.toLocaleTimeString(u, {
                                    hour: "numeric",
                                    minute: "numeric"
                                })
                            })]
                        })]
                    })]
                })
            }
            var H = n(385028),
                z = n(180695),
                W = n(72580),
                V = n(773148),
                X = n(792632),
                Y = n.n(X);

            function $(e) {
                var t = e.user,
                    n = V.ZP.useName(null, null, t);
                return (0, r.jsxs)("div", {
                    className: Y().userItem,
                    children: [(0, r.jsx)(H.Z, {
                        user: t
                    }), (0, r.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-sm/medium",
                        children: n
                    })]
                })
            }

            function q(e) {
                var t = e.clip,
                    n = e.className,
                    i = (0, M.Wu)([T.default], (function() {
                        return t.users.map(T.default.getUser).filter(W.lm)
                    })),
                    l = a.useCallback((function(e) {
                        var t = e.row,
                            n = i[t];
                        return null == n ? null : (0, r.jsx)($, {
                            user: n
                        }, t)
                    }), [i]);
                return (0, r.jsxs)("div", {
                    className: x()(n, Y().root),
                    children: [(0, r.jsx)("div", {
                        className: Y().header,
                        children: (0, r.jsxs)(o.FormTitle, {
                            className: Y().title,
                            children: [F.Z.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, r.jsxs)("div", {
                                className: Y().userCountPill,
                                children: [(0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-xs/medium",
                                    children: i.length
                                }), (0, r.jsx)(z.Z, {
                                    className: Y().userCountIcon
                                })]
                            })]
                        })
                    }), (0, r.jsx)(o.List, {
                        className: Y().userList,
                        sectionHeight: 0,
                        rowHeight: 40,
                        sections: [i.length],
                        renderRow: l
                    })]
                })
            }
            var Q = n(453790),
                J = n(396992),
                K = n.n(J),
                ee = n(348764).Buffer;

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ne(e, t, n, r, a, i, o) {
                try {
                    var l = e[i](o),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function re(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function o(e) {
                            ne(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            ne(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function ae(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ae(e, t, n[t])
                    }))
                }
                return e
            }

            function oe(e, t) {
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

            function le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return te(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return te(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ue = function(e, t) {
                var n, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function ce(e) {
                var t = e.closePopout,
                    n = e.onExportToFile,
                    a = e.onExportToSoundboard,
                    i = (0, j.ZP)([P.Z, O.Z, T.default, E.Z], (function() {
                        return P.Z.getFlattenedGuildIds().some((function(e) {
                            var t = E.Z.getGuild(e);
                            return null != t && (0, S.Gw)(t, O.Z, T.default).canCreateExpressions
                        }))
                    }));
                return (0, r.jsxs)(o.Menu, {
                    navId: "clips-export",
                    "aria-label": F.Z.Messages.CLIPS_EDIT_EXPORT,
                    onClose: t,
                    onSelect: t,
                    children: [i ? (0, r.jsx)(o.MenuItem, {
                        icon: A.Z,
                        id: "clips-export-soundboard",
                        label: F.Z.Messages.CLIPS_EXPORT_TO_SOUNDBOARD,
                        action: a
                    }) : null, (0, r.jsx)(o.MenuItem, {
                        icon: k.Z,
                        id: "clips-export-file",
                        label: F.Z.Messages.CLIPS_EXPORT_TO_FILE,
                        action: n
                    })]
                })
            }

            function se(e) {
                var t = e.clip,
                    i = e.cropData,
                    l = e.channelId,
                    c = e.clipName,
                    s = e.voiceAudioEnabled,
                    f = e.applicationAudioEnabled,
                    p = e.onSetClipName,
                    v = e.onChangeVoiceAudioEnabled,
                    h = e.onChangeApplicationAudioEnabled,
                    m = e.onClose,
                    b = function() {
                        (0, o.openModalLazy)(re((function() {
                            var e, a;
                            return ue(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(18079)]).then(n.bind(n, 718079))];
                                    case 1:
                                        e = i.sent(), a = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(a, oe(ie({
                                                clip: t
                                            }, e), {
                                                onDelete: re((function() {
                                                    return ue(this, (function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                return [4, e.onClose()];
                                                            case 1:
                                                                t.sent();
                                                                m();
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    y = le(a.useState(null), 2),
                    g = y[0],
                    j = y[1],
                    P = (0, N.Z)({
                        channelId: l,
                        setExporting: function(e) {
                            return j(null != e ? "share" : null)
                        }
                    }),
                    A = P.onShareClick,
                    M = P.canAttachFiles;

                function D() {
                    return R.apply(this, arguments)
                }

                function R() {
                    R = re((function() {
                        var e, a;
                        return ue(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    e = C.Z.getChannel(l);
                                    j("export");
                                    u.label = 1;
                                case 1:
                                    u.trys.push([1, 3, 4, 5]);
                                    return [4, (0, d.rO)(t, oe(ie({}, i), {
                                        applicationAudio: f,
                                        voiceAudio: s
                                    }))];
                                case 2:
                                    a = u.sent();
                                    m();
                                    (0, o.openModalLazy)(re((function() {
                                        var t, i, o, l;
                                        return ue(this, (function(u) {
                                            switch (u.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(91762), n.e(41394)]).then(n.bind(n, 691762))];
                                                case 1:
                                                    t = u.sent(), i = t.default;
                                                    o = null != (null == e ? void 0 : e.guild_id) ? E.Z.getGuild(e.guild_id) : null;
                                                    l = null != o && (0,
                                                        S.Gw)(o, O.Z, T.default).canCreateExpressions;
                                                    return [2, function(t) {
                                                        return (0, r.jsx)(i, oe(ie({}, t), {
                                                            showGuildPicker: !0,
                                                            guildId: l ? null == e ? void 0 : e.guild_id : void 0,
                                                            sourceFile: {
                                                                file: new File([a], "".concat(c, ".mp4"), {
                                                                    type: "video/mp4"
                                                                }),
                                                                name: c
                                                            }
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })));
                                    return [3, 5];
                                case 3:
                                    u.sent();
                                    return [3, 5];
                                case 4:
                                    j(null);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return R.apply(this, arguments)
                }

                function Z() {
                    return _.apply(this, arguments)
                }

                function _() {
                    return (_ = re((function() {
                        var e;
                        return ue(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    j("export");
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 5, 6, 7]);
                                    return [4, (0, d.rO)(t, oe(ie({}, i), {
                                        applicationAudio: f,
                                        voiceAudio: s
                                    }))];
                                case 2:
                                    return [4, n.sent().arrayBuffer()];
                                case 3:
                                    e = n.sent();
                                    return [4, u.Z.fileManager.saveWithDialog(ee.from(e), (0, Q.EF)(t.id))];
                                case 4:
                                    n.sent();
                                    return [3, 7];
                                case 5:
                                    n.sent();
                                    return [3, 7];
                                case 6:
                                    j(null);
                                    return [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, r.jsxs)("div", {
                    className: K().clipForm,
                    children: [(0, r.jsxs)("div", {
                        className: x()(K().clipFormSection, K().editSection),
                        children: [(0, r.jsx)(o.FormItem, {
                            className: K().clipFormItem,
                            title: F.Z.Messages.CLIPS_EDIT_TITLE,
                            children: (0, r.jsx)(o.TextInput, {
                                onChange: p,
                                value: c,
                                minLength: Q.XH,
                                maxLength: Q.MG
                            })
                        }), (0, r.jsxs)("div", {
                            className: K().clipFormSwitches,
                            children: [(0, r.jsx)(o.FormSwitch, {
                                onChange: h,
                                value: f,
                                hideBorder: !0,
                                children: F.Z.Messages.CLIPS_EDIT_GAME_AUDIO
                            }), (0, r.jsx)(o.FormSwitch, {
                                onChange: v,
                                value: s,
                                hideBorder: !0,
                                children: F.Z.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: x()(K().clipFormSection, K().metadataSection),
                        children: [(0, r.jsx)(G, {
                            clip: t
                        }), (0, r.jsx)(q, {
                            className: K().userList,
                            clip: t
                        })]
                    }), (0, r.jsxs)("div", {
                        className: K().clipFormFooter,
                        children: [(0, r.jsx)(o.Tooltip, {
                            shouldShow: !M,
                            text: F.Z.Messages.CLIPS_CANNOT_ATTACH_FILE_TO_CHANNEL,
                            children: function(e) {
                                return (0, r.jsx)(o.Button, oe(ie({}, e), {
                                    submitting: "share" === g,
                                    disabled: !M || null != g && "share" !== g,
                                    color: o.Button.Colors.BRAND,
                                    wrapperClassName: K().clipFormFooterPrimaryButton,
                                    onClick: function() {
                                        return A({
                                            clip: oe(ie({}, t), {
                                                name: c
                                            }),
                                            applicationAudioEnabled: f,
                                            voiceAudioEnabled: s,
                                            onShareComplete: function() {
                                                w.Mr(Q.Ut);
                                                w.Mr(Q.Qr)
                                            }
                                        })
                                    },
                                    children: F.Z.Messages.CLIPS_EDIT_SHARE_CLIP
                                }))
                            }
                        }), (0, r.jsx)(o.Tooltip, {
                            text: F.Z.Messages.SAVE_CHANGES,
                            children: function(e) {
                                return (0, r.jsx)(o.Button, oe(ie({}, e), {
                                    size: o.Button.Sizes.ICON,
                                    className: K().clipFormFooterButton,
                                    disabled: null != g,
                                    wrapperClassName: x()(K().clipFormFooterButton, ae({}, K().submittingWrapperFix, null != g)),
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: m,
                                    children: (0, r.jsx)(I.Z, {})
                                }))
                            }
                        }), (0, r.jsx)(o.Popout, {
                            position: "top",
                            renderPopout: function(e) {
                                return (0, r.jsx)(ce, oe(ie({}, e), {
                                    channelId: l,
                                    onExportToFile: Z,
                                    onExportToSoundboard: D
                                }))
                            },
                            children: function(e, t) {
                                var n = t.isShown;
                                return (0, r.jsx)(o.Tooltip, {
                                    text: n ? null : F.Z.Messages.CLIPS_EDIT_EXPORT,
                                    children: function(t) {
                                        return (0, r.jsx)(o.Button, oe(ie({}, t), {
                                            size: o.Button.Sizes.ICON,
                                            wrapperClassName: x()(K().clipFormFooterButton, ae({}, K().submittingWrapperFix, null != g)),
                                            submitting: "export" === g,
                                            disabled: null != g && "export" !== g,
                                            color: o.Button.Colors.PRIMARY,
                                            onClick: function(n) {
                                                var r, a;
                                                null === (r = t.onClick) || void 0 === r || r.call(t);
                                                null === (a = e.onClick) || void 0 === a || a.call(e, n)
                                            },
                                            children: (0, r.jsx)(k.Z, {})
                                        }))
                                    }
                                })
                            }
                        }), (0, r.jsx)(o.Tooltip, {
                            text: F.Z.Messages.DELETE,
                            children: function(e) {
                                return (0, r.jsx)(o.Button, oe(ie({}, e), {
                                    size: o.Button.Sizes.ICON,
                                    className: K().clipFormFooterButton,
                                    wrapperClassName: x()(K().clipFormFooterButton, ae({}, K().submittingWrapperFix, null != g)),
                                    disabled: null != g,
                                    color: o.Button.Colors.PRIMARY,
                                    onClick: b,
                                    children: (0, r.jsx)(L.Z, {})
                                }))
                            }
                        })]
                    })]
                })
            }
            var de = n(786170),
                fe = n(731106),
                pe = n.n(fe);

            function ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function he(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ve(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ve(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function me(e) {
                var t = e.setRef,
                    n = e.audioTrackId,
                    i = e.src,
                    o = e.muted,
                    l = a.useCallback((function(e) {
                        t(e, n)
                    }), [t, n]),
                    u = a.useCallback((function(e) {
                        Object.values(e.currentTarget.audioTracks).forEach((function(e) {
                            e.enabled = n === e.id
                        }))
                    }), [n]);
                return (0, r.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(n),
                    className: pe().hidden,
                    ref: l,
                    src: i,
                    loop: !0,
                    muted: o,
                    preload: "auto",
                    onLoadedMetadata: u
                })
            }
            const be = a.forwardRef((function(e, t) {
                var n = e.src,
                    i = e.audioSrc,
                    o = e.applicationAudioEnabled,
                    l = e.voiceAudioEnabled,
                    u = e.isLoading,
                    c = e.onDoneLoading,
                    s = a.useRef({}),
                    d = he(a.useState([]), 2),
                    f = d[0],
                    p = d[1],
                    v = a.useCallback((function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, a = Object.values(s.current)[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                                var i = r.value;
                                null != i && i.play()
                            }
                        } catch (e) {
                            t = !0;
                            n = e
                        } finally {
                            try {
                                e || null == a.return || a.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }), []),
                    h = a.useCallback((function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, a = Object.values(s.current)[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                                var i = r.value;
                                null != i && i.pause()
                            }
                        } catch (e) {
                            t = !0;
                            n = e
                        } finally {
                            try {
                                e || null == a.return || a.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }), []),
                    m = a.useCallback((function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var a, i = Object.values(s.current)[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                var o = a.value;
                                null != o && (o.currentTime = e)
                            }
                        } catch (e) {
                            n = !0;
                            r = e
                        } finally {
                            try {
                                t || null == i.return || i.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }), []),
                    b = a.useCallback((function() {
                        var e;
                        (null === (e = s.current.main) || void 0 === e ? void 0 : e.paused) ? v(): h()
                    }), [v, h]),
                    y = a.useCallback((function(e) {
                        var t = s.current.main;
                        if (null != t) {
                            var n = !0,
                                r = !1,
                                a = void 0;
                            try {
                                for (var i, o = Object.entries(s.current)[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                    var l = he(i.value, 2),
                                        u = l[0],
                                        c = l[1];
                                    if ("main" !== u && null != c) {
                                        var d = t.currentTime - c.currentTime;
                                        Math.abs(d) <= .1 || (c.currentTime = e.currentTarget.currentTime)
                                    }
                                }
                            } catch (e) {
                                r = !0;
                                a = e
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (r) throw a
                                }
                            }
                        }
                    }), []),
                    g = a.useCallback((function(e) {
                        s.current.main = e
                    }), []),
                    x = a.useCallback((function(e) {
                        var t = [],
                            n = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var i, o = Object.values(e.currentTarget.audioTracks)[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                var l = i.value;
                                if (l.label.includes(":application")) l.enabled = !0;
                                else if (l.label.includes(":voice")) {
                                    l.enabled = !1;
                                    t.push(l.id)
                                } else l.enabled = !1
                            }
                        } catch (e) {
                            r = !0;
                            a = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        p(t)
                    }), []),
                    j = a.useCallback((function(e, t) {
                        s.current[t] = e
                    }), []);
                a.useImperativeHandle(t, (function() {
                    return {
                        play: v,
                        seek: m,
                        pause: h,
                        videoElement: s.current.main
                    }
                }));
                return null == n ? null : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(de.Z, {
                        onClick: b,
                        className: u ? pe().hidden : pe().displayVideo,
                        ref: g,
                        src: n,
                        muted: !o,
                        onLoadedMetadata: x,
                        onLoadedData: c,
                        onTimeUpdate: y,
                        preload: "auto",
                        loop: !0
                    }), f.map((function(e) {
                        return (0, r.jsx)(me, {
                            audioTrackId: e,
                            setRef: j,
                            src: i,
                            muted: !l
                        }, e)
                    }))]
                })
            }));
            var ye = n(496486),
                ge = n(677681),
                xe = n(502221),
                je = n(901654),
                we = n(222641),
                Se = n(958125),
                Ce = n(329091),
                Ee = n.n(Ce);

            function Oe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pe(e, t, n, r, a, i, o) {
                try {
                    var l = e[i](o),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function Te(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function o(e) {
                            Pe(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            Pe(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Ie(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ie(e, t, n[t])
                    }))
                }
                return e
            }

            function Ae(e, t) {
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

            function Le(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Oe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Oe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ne = function(e, t) {
                var n, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function Me(e) {
                var t, n, i, l, u = e.sourceURL,
                    c = e.cropData,
                    s = e.videoPlayerRef,
                    d = e.setCropData,
                    f = Le(a.useState(null !== (l = !(null === (t = s.current) || void 0 === t || null === (n = t.videoElement) || void 0 === n ? void 0 : n.paused)) && void 0 !== l && l), 2),
                    p = f[0],
                    v = f[1],
                    h = a.useRef(null),
                    m = Le(a.useState(null), 2),
                    b = m[0],
                    y = m[1],
                    g = Le(a.useState(), 2),
                    w = g[0],
                    S = g[1],
                    C = a.useRef(null),
                    E = a.useRef(null),
                    O = Le(a.useState(0), 2),
                    P = O[0],
                    T = O[1],
                    I = Le(a.useState(!1), 2),
                    k = I[0],
                    A = I[1],
                    L = Le(a.useState(null), 2),
                    N = L[0],
                    M = L[1];
                (0, xe.Z)((function() {
                    var e, t = null === (e = s.current) || void 0 === e ? void 0 : e.videoElement;
                    if (null != t) {
                        var n = (0, ye.round)(t.currentTime, 3),
                            r = (0, ye.round)(c.start, 3),
                            a = (0, ye.round)(c.end, 3);
                        if (p && (n >= a || n < r)) {
                            var i;
                            null === (i = s.current) || void 0 === i || i.seek(c.start);
                            T(c.start)
                        } else P !== n && T(n)
                    }
                }));
                var D = a.useMemo((function() {
                    return c.end - c.start
                }), [c]);
                a.useEffect((function() {
                    var e, t = null === (e = s.current) || void 0 === e ? void 0 : e.videoElement,
                        n = C.current,
                        r = E.current;
                    if (null != t && null != n && null != r) {
                        var a = function() {
                                y(null);
                                A(!1);
                                v(!0)
                            },
                            i = function() {
                                v(!1)
                            };
                        t.addEventListener("play", a);
                        t.addEventListener("pause", i);
                        return function() {
                            t.removeEventListener("play", a);
                            t.removeEventListener("pause", i)
                        }
                    }
                }), [s]);
                var R = (0, ge.Z)(),
                    Z = R.ref,
                    _ = R.width,
                    F = void 0 === _ ? 0 : _,
                    B = R.height,
                    U = void 0 === B ? 0 : B,
                    G = (0, j.ZP)([je.Z], (function() {
                        return je.Z.windowSize()
                    }));
                a.useMemo((function() {
                    var e = Z.current;
                    null != e && M(e.getBoundingClientRect())
                }), [G.width, G.height, F]);
                var H = a.useRef(null),
                    z = a.useRef({}),
                    W = a.useCallback((function(e, t) {
                        if (null != w) {
                            if (null == N) return null;
                            var n = ((0, ye.clamp)(e, N.left, N.right) - N.left) / F * w,
                                r = (0, ye.clamp)(n, 0, w),
                                a = b;
                            if (null == a && t) {
                                var i;
                                a = r <= c.start ? "start" : r >= c.end ? "end" : "playhead";
                                null === (i = s.current) || void 0 === i || i.pause();
                                y(a);
                                A(p)
                            }
                            if ("start" === a) {
                                var o, l = (0, ye.clamp)(r, 0, c.end - Q.Hp);
                                d(Ae(ke({}, c), {
                                    start: l
                                }));
                                null === (o = s.current) || void 0 === o || o.seek(l)
                            } else if ("end" === a) {
                                var u, f = (0, ye.clamp)(r, c.start + Q.Hp, w);
                                d(Ae(ke({}, c), {
                                    end: f
                                }));
                                null === (u = s.current) || void 0 === u || u.seek(f)
                            } else if ("playhead" === a) {
                                var v, h = (0, ye.clamp)(r, c.start, c.end);
                                null === (v = s.current) || void 0 === v || v.seek(h)
                            }
                        }
                    }), [w, N, F, b, c, s, p, d]),
                    V = a.useCallback((function(e) {
                        W(e.clientX, !0)
                    }), [W]),
                    X = a.useCallback((function(e) {
                        W(e.clientX, !1)
                    }), [W]),
                    Y = a.useCallback((function() {
                        if (k) {
                            var e;
                            null === (e = s.current) || void 0 === e || e.play()
                        }
                        A(!1);
                        y(null)
                    }), [s, k]);
                a.useEffect((function() {
                    document.addEventListener("mousemove", X);
                    document.addEventListener("mouseup", Y);
                    return function() {
                        document.removeEventListener("mousemove", X);
                        document.removeEventListener("mouseup", Y)
                    }
                }), [X, Y]);
                a.useEffect((function() {
                    function e() {
                        e = Te((function() {
                            var e, t, n, r, a, i, o, l, u, c, s, d;
                            return Ne(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        t = Z.current;
                                        n = h.current;
                                        if (null == t) return [2];
                                        if (null == n) return [2];
                                        if (null == w) return [2];
                                        t.height = U;
                                        t.width = F;
                                        if (null == (r = t.getContext("2d"))) return [2];
                                        r.fillStyle = "#000";
                                        r.fillRect(0, 0, F, U);
                                        a = n.videoWidth / n.videoHeight;
                                        i = Math.ceil(U * a);
                                        o = Math.ceil(F / i);
                                        if (null == (l = H.current)) return [2];
                                        l.width = i;
                                        l.height = U;
                                        if (null == (u = null == l ? void 0 : l.getContext("2d", {
                                                willReadFrequently: !0
                                            }))) return [2];
                                        c = z.current;
                                        if ((null === (e = c[o]) || void 0 === e ? void 0 : e.length) === o) {
                                            for (s = 0; s < o; s++) r.putImageData(c[o][s], i * s, 0);
                                            return [2]
                                        }
                                        d = 0;
                                        f.label = 1;
                                    case 1:
                                        return d < o ? [4, new Promise((function(e) {
                                            n.onseeked = function() {
                                                r.drawImage(n, i * d, 0, i, U);
                                                u.drawImage(n, 0, 0, i, U);
                                                var t = u.getImageData(0, 0, i, U);
                                                null == c[o] && (c[o] = []);
                                                c[o][d] = t;
                                                e()
                                            };
                                            n.currentTime = i / F * w * d
                                        }))] : [3, 4];
                                    case 2:
                                        f.sent();
                                        f.label = 3;
                                    case 3:
                                        d++;
                                        return [3, 1];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        return e.apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [F, U, Z, w, H]);
                var $ = P - c.start,
                    q = null === (i = s.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, r.jsx)("div", {
                    className: Ee().centeringWrapper,
                    children: (0, r.jsxs)("div", {
                        className: Ee().timelineContainer,
                        children: [(0, r.jsx)("div", {
                            className: Ee().playPauseButtonWrapper,
                            children: (0, r.jsx)(o.Clickable, {
                                onClick: function() {
                                    var e, t;
                                    return p ? null === (e = s.current) || void 0 === e ? void 0 : e.pause() : null === (t = s.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: Ee().playPauseButton,
                                children: p ? (0, r.jsx)(we.Z, {
                                    width: 24,
                                    height: 24,
                                    className: Ee().playPauseIcon
                                }) : (0, r.jsx)(Se.Z, {
                                    width: 24,
                                    height: 24,
                                    className: Ee().playPauseIcon
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: x()(Ee().timeline, Ie({}, Ee().timelineDragging, null != b)),
                            onMouseDown: V,
                            children: [(0, r.jsx)("canvas", {
                                className: Ee().hiddenCanvas,
                                ref: H
                            }), (0, r.jsx)("canvas", {
                                className: Ee().timelineBackground,
                                ref: Z
                            }), (0, r.jsx)("div", {
                                ref: C,
                                className: Ee().playhead,
                                style: {
                                    left: null != q ? "".concat(q.currentTime / q.duration * 100, "%") : 0
                                }
                            }), (0, r.jsx)(de.Z, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    var e = h.current;
                                    if (null != e) {
                                        S(e.duration);
                                        if (0 === c.start && (0 === c.end || c.end === e.duration)) {
                                            var t;
                                            null === (t = s.current) || void 0 === t || t.seek(e.duration / 2);
                                            T(e.duration / 2)
                                        }
                                        0 === c.end && d((function(t) {
                                            return Ae(ke({}, t), {
                                                end: e.duration
                                            })
                                        }))
                                    }
                                },
                                className: Ee().timelineVideo,
                                ref: h,
                                src: u,
                                muted: !0
                            }), (0, r.jsxs)("div", {
                                className: Ee().dragBox,
                                style: {
                                    left: null != w ? "".concat(c.start / w * 100, "%") : "0",
                                    right: null != w ? "".concat((w - c.end) / w * 100, "%") : "0"
                                },
                                children: [(0, r.jsx)("div", {
                                    className: Ee().timePillContainer,
                                    children: (0, r.jsx)("div", {
                                        ref: E,
                                        className: Ee().timePillBackground,
                                        children: (0, r.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: Ee().timePillText,
                                            color: "always-white",
                                            children: [De($), (0, r.jsx)("span", {
                                                className: Ee().slashCharacter,
                                                children: " / "
                                            }), De(D)]
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: x()(Ee().dragHandleLeft, Ie({}, Ee().dragging, "start" === b)),
                                    onMouseDown: V,
                                    children: (0, r.jsx)("div", {
                                        className: Ee().cropLeftArrow
                                    })
                                }), (0, r.jsx)("div", {
                                    className: x()(Ee().dragHandleRight, Ie({}, Ee().dragging, "end" === b)),
                                    onMouseDown: V,
                                    children: (0, r.jsx)("div", {
                                        className: Ee().cropRightArrow
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function De(e) {
                var t = function(e) {
                    ((e = Math.round(100 * e) / 100) < 0 || Math.abs(e) < .01) && (e = 0);
                    var t = Math.floor(e / 60),
                        n = Math.floor(e % 60),
                        r = Math.floor(e % 1 * 100);
                    n = n < 10 ? "0" + n : n;
                    r = r < 10 ? "0" + r : r;
                    return "".concat(t = t < 10 ? "0" + t : t, ":").concat(n, ".").concat(r)
                }(e);
                return t.split("").map((function(e, t) {
                    return (0, r.jsx)("span", {
                        className: ":" === e || "." === e ? Ee().narrowCharacter : Ee().fixedWidthCharacter,
                        children: e
                    }, t)
                }))
            }

            function Re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ze(e, t, n, r, a, i, o) {
                try {
                    var l = e[i](o),
                        u = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(r, a)
            }

            function _e(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function o(e) {
                            Ze(i, r, a, o, l, "next", e)
                        }

                        function l(e) {
                            Ze(i, r, a, o, l, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Fe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Fe(e, t, n[t])
                    }))
                }
                return e
            }

            function Ue(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Re(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Re(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ge = function(e, t) {
                var n, r, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function He(e) {
                var t, n, f, p, v, h = e.clip,
                    b = e.channelId,
                    g = e.transitionState,
                    x = e.onClose,
                    j = Ue(a.useState(!0), 2),
                    w = j[0],
                    S = j[1],
                    C = Ue(a.useState(null), 2),
                    E = C[0],
                    O = C[1],
                    P = Ue(a.useState(null), 2),
                    T = P[0],
                    I = P[1],
                    k = (0, s.Z)(c.Z.CLIPS_EDITOR).AnalyticsLocationProvider;
                a.useEffect((function() {
                    function e() {
                        return (e = _e((function() {
                            var e, t, n, r;
                            return Ge(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        a.trys.push([0, 2, , 3]);
                                        return [4, u.Z.clips.loadClip(h.filepath)];
                                    case 1:
                                        e = a.sent();
                                        return [3, 3];
                                    case 2:
                                        a.sent();
                                        x();
                                        l.Z.show({
                                            title: F.Z.Messages.CLIPS_LOAD_ERROR_TITLE,
                                            body: F.Z.Messages.CLIPS_LOAD_ERROR_BODY
                                        });
                                        return [2];
                                    case 3:
                                        return [4, m(e.data.buffer)];
                                    case 4:
                                        t = a.sent();
                                        n = URL.createObjectURL(new Blob([t], {
                                            type: "audio/mp4"
                                        }));
                                        r = URL.createObjectURL(new Blob([e.data], {
                                            type: "video/mp4"
                                        }));
                                        I(n);
                                        O(r);
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [h.filepath, x]);
                a.useEffect((function() {
                    return function() {
                        null != E && URL.revokeObjectURL(E)
                    }
                }), [E]);
                a.useEffect((function() {
                    return function() {
                        null != T && URL.revokeObjectURL(T)
                    }
                }), [T]);
                var A, L, N, M = Ue(a.useState(null === (v = null === (t = h.editMetadata) || void 0 === t ? void 0 : t.voiceAudio) || void 0 === v || v), 2),
                    D = M[0],
                    R = M[1],
                    Z = Ue(a.useState(null === (A = null === (n = h.editMetadata) || void 0 === n ? void 0 : n.applicationAudio) || void 0 === A || A), 2),
                    _ = Z[0],
                    B = Z[1],
                    U = Ue(a.useState({
                        start: null !== (L = null === (f = h.editMetadata) || void 0 === f ? void 0 : f.start) && void 0 !== L ? L : 0,
                        end: null !== (N = null === (p = h.editMetadata) || void 0 === p ? void 0 : p.end) && void 0 !== N ? N : 0
                    }), 2),
                    G = U[0],
                    H = U[1],
                    z = Ue(a.useState(h.name), 2),
                    W = z[0],
                    V = z[1],
                    X = a.useRef({
                        name: W,
                        editMetadata: {
                            start: G.start,
                            end: G.end,
                            voiceAudio: D,
                            applicationAudio: _
                        }
                    });
                X.current = {
                    name: W,
                    editMetadata: {
                        start: G.start,
                        end: G.end,
                        voiceAudio: D,
                        applicationAudio: _
                    }
                };
                a.useEffect((function() {
                    function e() {
                        return (e = _e((function() {
                            var e, t;
                            return Ge(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = {};
                                        if (null == E) return [3, 2];
                                        t = {};
                                        return [4, (0,
                                            y.R)(E, X.current.editMetadata.start)];
                                    case 1:
                                        e = (t.thumbnail = n.sent(), t);
                                        n.label = 2;
                                    case 2:
                                        (0, d.Tm)(h.id, Be({}, X.current, e));
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    return function() {
                        ! function() {
                            e.apply(this, arguments)
                        }()
                    }
                }), [h.id, E]);
                return (0, r.jsx)(o.ModalRoot, {
                    impressionName: i.zs.CLIP_EDITOR_VIEWED,
                    size: o.ModalSize.DYNAMIC,
                    className: pe().modalRoot,
                    transitionState: g,
                    children: (0, r.jsx)(k, {
                        children: (0, r.jsx)(o.ModalContent, {
                            className: pe().modalContent,
                            children: null == E || null == T ? (0, r.jsx)("div", {
                                className: pe().spinnerContainer,
                                children: (0, r.jsx)(o.Spinner, {})
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(ze, {
                                    voiceAudioEnabled: D,
                                    applicationAudioEnabled: _,
                                    videoURL: E,
                                    cropData: G,
                                    onSetCropData: H,
                                    isLoading: w,
                                    onDoneLoading: function() {
                                        return S(!1)
                                    },
                                    audioURL: T
                                }), !w && (0, r.jsx)(se, {
                                    voiceAudioEnabled: D,
                                    channelId: b,
                                    applicationAudioEnabled: _,
                                    onChangeApplicationAudioEnabled: B,
                                    onChangeVoiceAudioEnabled: R,
                                    cropData: G,
                                    onSetClipName: V,
                                    clipName: W,
                                    clip: h,
                                    onClose: x
                                })]
                            })
                        })
                    })
                })
            }

            function ze(e) {
                var t = e.cropData,
                    n = e.onSetCropData,
                    i = e.voiceAudioEnabled,
                    o = e.applicationAudioEnabled,
                    l = e.isLoading,
                    u = e.onDoneLoading,
                    c = e.videoURL,
                    s = e.audioURL,
                    d = a.useRef(null),
                    f = a.useCallback((function() {
                        var e;
                        null === (e = d.current) || void 0 === e || e.seek(t.start);
                        u()
                    }), [u, t.start]);
                a.useEffect((function() {
                    var e = function(e) {
                        var n, r;
                        if ("INPUT" !== (null === (n = document.activeElement) || void 0 === n ? void 0 : n.tagName)) {
                            var a = d.current;
                            if (null != a) {
                                var i = null === (r = d.current) || void 0 === r ? void 0 : r.videoElement;
                                if (null != i) {
                                    var o = !1;
                                    switch (e.key) {
                                        case " ":
                                            o = !0;
                                            i.paused ? a.play() : a.pause();
                                            break;
                                        case "ArrowLeft":
                                            o = !0;
                                            a.seek(Math.max(i.currentTime - i.duration / 30, t.start));
                                            break;
                                        case "ArrowRight":
                                            o = !0;
                                            a.seek(Math.min(i.currentTime + i.duration / 30, t.end))
                                    }
                                    if (o) {
                                        e.stopPropagation();
                                        e.preventDefault()
                                    }
                                }
                            }
                        }
                    };
                    document.addEventListener("keydown", e);
                    return function() {
                        return document.removeEventListener("keydown", e)
                    }
                }), [t.start, t.end]);
                return (0, r.jsxs)("div", {
                    className: pe().editorPane,
                    children: [(0, r.jsx)("div", {
                        className: pe().videoSizer,
                        children: (0, r.jsx)(be, {
                            applicationAudioEnabled: o,
                            voiceAudioEnabled: i,
                            ref: d,
                            audioSrc: s,
                            src: c,
                            isLoading: l,
                            onDoneLoading: f
                        })
                    }), l ? null : (0, r.jsx)(Me, {
                        videoPlayerRef: d,
                        cropData: t,
                        setCropData: n,
                        sourceURL: c
                    })]
                })
            }
        }
    }
]);