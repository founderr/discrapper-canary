"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [27096], {
        927096: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => E
            });
            var r = n(785893),
                a = n(667294),
                o = n(882723),
                l = n(87127),
                i = n(281808),
                s = n(855483),
                u = n(963058),
                c = n(270946),
                d = n(107364),
                f = n(652591),
                h = n(2590),
                m = n(473708),
                p = n(289748),
                C = n.n(p);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n, r, a, o, l) {
                try {
                    var i = e[o](l),
                        s = i.value
                } catch (e) {
                    n(e);
                    return
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function N(e, t) {
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
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e, t) {
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

            function E(e) {
                var t, n = e.channel,
                    p = e.transitionState,
                    y = e.onClose,
                    E = N(a.useState(null !== (t = n.status) && void 0 !== t ? t : ""), 2),
                    g = E[0],
                    v = E[1],
                    x = N(a.useState(!1), 2),
                    A = x[0],
                    M = x[1],
                    S = N(a.useState(null), 2),
                    I = S[0],
                    O = S[1];
                a.useEffect((function() {
                    f.default.track(h.rMx.OPEN_MODAL, {
                        type: "Voice Channel Topic Modal",
                        guild_id: n.guild_id
                    })
                }), [n.guild_id]);
                var T, L, j = (L = (T = function(e) {
                        return _(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    g === n.status && y();
                                    null == e || e.preventDefault();
                                    O(null);
                                    M(!0);
                                    return [4, l.ZP.updateVoiceChannelStatus(n.id, g).then((function(e) {
                                        if (204 === e.status) {
                                            f.default.track(h.rMx.VOICE_CHANNEL_TOPIC_SET, {
                                                guild_id: n.guild_id,
                                                channel_id: n.id
                                            });
                                            y()
                                        } else O(e.body.message)
                                    }), (function(e) {
                                        O(e.body.message)
                                    }))];
                                case 1:
                                    t.sent();
                                    M(!1);
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var a = T.apply(e, t);

                            function o(e) {
                                b(a, n, r, o, l, "next", e)
                            }

                            function l(e) {
                                b(a, n, r, o, l, "throw", e)
                            }
                            o(void 0)
                        }))
                    }), function(e) {
                        return L.apply(this, arguments)
                    }),
                    w = N(a.useState((0, s.JM)(g)), 2),
                    k = w[0],
                    P = w[1];
                return (0, r.jsx)("form", {
                    onSubmit: j,
                    className: C().form,
                    children: (0, r.jsxs)(o.ModalRoot, {
                        transitionState: p,
                        size: o.ModalSize.SMALL,
                        children: [(0, r.jsxs)(o.ModalContent, {
                            children: [(0, r.jsxs)(o.ModalHeader, {
                                align: d.Z.Align.CENTER,
                                className: C().modalHeader,
                                separator: !1,
                                children: [(0, r.jsx)(o.ModalCloseButton, {
                                    className: C().closeButton,
                                    onClick: y
                                }), (0, r.jsx)("div", {
                                    className: C().headerImage
                                }), (0, r.jsxs)("div", {
                                    className: C().titleRow,
                                    children: [(0, r.jsx)(o.FormTitle, {
                                        tag: "h1",
                                        className: C().title,
                                        children: m.Z.Messages.VOICE_CHANNEL_TOPIC_MODAL_TITLE
                                    }), (0, r.jsx)(c.Z, {
                                        className: C().betaTag
                                    })]
                                }), (0, r.jsx)(o.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: m.Z.Messages.VOICE_CHANNEL_TOPIC_MODAL_SUBTITLE
                                })]
                            }), (0, r.jsxs)(o.FormSection, {
                                className: C().inputSection,
                                title: m.Z.Messages.VOICE_CHANNEL_TOPIC,
                                children: [(0, r.jsx)(u.Z, {
                                    innerClassName: C().textArea,
                                    textValue: g,
                                    richValue: k,
                                    placeholder: m.Z.Messages.VOICE_CHANNEL_TOPIC_MODAL_PREFILL_CHANNEL.format({
                                        channelName: n.name
                                    }),
                                    focused: !0,
                                    channel: n,
                                    onChange: function(e, t, n) {
                                        v(t);
                                        P(n)
                                    },
                                    onSubmit: function() {
                                        j();
                                        return Promise.resolve({
                                            shouldClear: !1,
                                            shouldRefocus: !0
                                        })
                                    },
                                    type: i.I.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1
                                }), null != I ? (0, r.jsx)(o.FormErrorBlock, {
                                    className: C().error,
                                    children: I
                                }) : null]
                            })]
                        }), (0, r.jsxs)(o.ModalFooter, {
                            justify: d.Z.Justify.BETWEEN,
                            direction: d.Z.Direction.HORIZONTAL,
                            children: [(0, r.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                onClick: y,
                                children: m.Z.Messages.CANCEL
                            }), (0, r.jsx)(o.Button, {
                                onClick: j,
                                submitting: A,
                                className: C().button,
                                children: m.Z.Messages.VOICE_CHANNEL_TOPIC_MODAL_SET_TOPIC
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=2cbd5838241658de4f2c.js.map