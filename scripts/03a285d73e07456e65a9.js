"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27096], {
        927096: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => _
            });
            var r = n(785893),
                a = n(667294),
                o = n(304548),
                l = n(87127),
                i = n(281808),
                s = n(855483),
                u = n(863979),
                c = n(270946),
                d = n(107364),
                f = n(652591),
                h = n(2590),
                m = n(473708),
                p = n(2134),
                y = n.n(p);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t, n, r, a, o, l) {
                try {
                    var i = e[o](l),
                        s = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            l = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e, t) {
                var n, r, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function _(e) {
                var t, n = e.channel,
                    p = e.transitionState,
                    S = e.onClose,
                    _ = b(a.useState(null !== (t = n.status) && void 0 !== t ? t : ""), 2),
                    A = _[0],
                    E = _[1],
                    T = b(a.useState(!1), 2),
                    g = T[0],
                    v = T[1],
                    x = b(a.useState(null), 2),
                    M = x[0],
                    L = x[1];
                a.useEffect((function() {
                    f.default.track(h.rMx.OPEN_MODAL, {
                        type: "Voice Channel Topic Modal",
                        guild_id: n.guild_id
                    })
                }), [n.guild_id]);
                var j, w, I = (w = (j = function(e) {
                        return N(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    A === n.status && S();
                                    null == e || e.preventDefault();
                                    L(null);
                                    v(!0);
                                    return [4, l.ZP.updateVoiceChannelStatus(n.id, A).then((function(e) {
                                        if (204 === e.status) {
                                            f.default.track(h.rMx.VOICE_CHANNEL_TOPIC_SET, {
                                                guild_id: n.guild_id,
                                                channel_id: n.id
                                            });
                                            S()
                                        } else L(e.body.message)
                                    }), (function(e) {
                                        L(e.body.message)
                                    }))];
                                case 1:
                                    t.sent();
                                    v(!1);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var a = j.apply(e, t);

                            function o(e) {
                                C(a, n, r, o, l, "next", e)
                            }

                            function l(e) {
                                C(a, n, r, o, l, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function(e) {
                        return w.apply(this, arguments)
                    }),
                    O = b(a.useState((0, s.JM)(A)), 2),
                    k = O[0],
                    Z = O[1];
                return (0, r.jsx)("form", {
                    onSubmit: I,
                    className: y().form,
                    children: (0, r.jsxs)(o.ModalRoot, {
                        transitionState: p,
                        size: o.ModalSize.SMALL,
                        children: [(0, r.jsxs)(o.ModalContent, {
                            children: [(0, r.jsxs)(o.ModalHeader, {
                                align: d.Z.Align.CENTER,
                                className: y().modalHeader,
                                separator: !1,
                                children: [(0, r.jsx)(o.ModalCloseButton, {
                                    className: y().closeButton,
                                    onClick: S
                                }), (0, r.jsx)("div", {
                                    className: y().headerImage
                                }), (0, r.jsxs)("div", {
                                    className: y().titleRow,
                                    children: [(0, r.jsx)(o.FormTitle, {
                                        tag: "h1",
                                        className: y().title,
                                        children: m.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
                                    }), (0, r.jsx)(c.Z, {
                                        className: y().betaTag
                                    })]
                                }), (0, r.jsx)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: m.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
                                })]
                            }), (0, r.jsxs)(o.FormSection, {
                                className: y().inputSection,
                                title: m.Z.Messages.VOICE_CHANNEL_STATUS,
                                children: [(0, r.jsx)(u.Z, {
                                    innerClassName: y().textArea,
                                    textValue: A,
                                    richValue: k,
                                    placeholder: m.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
                                        channelName: n.name
                                    }),
                                    focused: !0,
                                    channel: n,
                                    onChange: function(e, t, n) {
                                        E(t);
                                        Z(n)
                                    },
                                    onSubmit: function() {
                                        I();
                                        return Promise.resolve({
                                            shouldClear: !1,
                                            shouldRefocus: !0
                                        })
                                    },
                                    type: i.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1
                                }), null != M ? (0, r.jsx)(o.FormErrorBlock, {
                                    className: y().error,
                                    children: M
                                }) : null]
                            })]
                        }), (0, r.jsxs)(o.ModalFooter, {
                            justify: d.Z.Justify.BETWEEN,
                            direction: d.Z.Direction.HORIZONTAL,
                            children: [(0, r.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: S,
                                children: m.Z.Messages.CANCEL
                            }), (0, r.jsx)(o.Button, {
                                onClick: I,
                                submitting: g,
                                className: y().button,
                                children: m.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                            })]
                        })]
                    })
                })
            }
        }
    }
]);