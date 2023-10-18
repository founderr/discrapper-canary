"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38063], {
        470661: e => {
            e.exports = function(e) {
                var r, a;
                if ((e = String(e).toLowerCase()).length < 3) return e;
                if (e.charCodeAt(0) === t) {
                    r = !0;
                    e = "Y" + e.substr(1)
                }
                A.test(e) ? e = e.substr(0, e.length - 2) : p.test(e) && (e = e.substr(0, e.length - 1));
                if (a = y.exec(e)) s.test(a[1]) && (e = e.substr(0, e.length - 1));
                else if ((a = v.exec(e)) && c.test(a[1])) {
                    e = a[1];
                    b.test(e) ? e += "e" : x.test(e) ? e = e.substr(0, e.length - 1) : d.test(e) && (e += "e")
                }(a = g.exec(e)) && c.test(a[1]) && (e = a[1] + "i");
                (a = S.exec(e)) && s.test(a[1]) && (e = a[1] + n[a[2]]);
                (a = _.exec(e)) && s.test(a[1]) && (e = a[1] + i[a[2]]);
                (a = I.exec(e)) ? u.test(a[1]) && (e = a[1]): (a = m.exec(e)) && u.test(a[1]) && (e = a[1]);
                (a = h.exec(e)) && (u.test(a[1]) || l.test(a[1]) && !d.test(a[1])) && (e = a[1]);
                f.test(e) && u.test(e) && (e = e.substr(0, e.length - 1));
                r && (e = "y" + e.substr(1));
                return e
            };
            var t = "y".charCodeAt(0),
                n = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                r = "[aeiouy]",
                a = "([^aeiou][^aeiouy]*)",
                o = "([aeiouy][aeiou]*)",
                s = new RegExp("^([^aeiou][^aeiouy]*)?" + o + a),
                l = new RegExp("^([^aeiou][^aeiouy]*)?" + o + a + o + "?$"),
                u = new RegExp("^([^aeiou][^aeiouy]*)?(" + o + a + "){2,}"),
                c = new RegExp("^([^aeiou][^aeiouy]*)?" + r),
                d = new RegExp("^" + a + r + "[^aeiouwxy]$"),
                f = /ll$/,
                h = /^(.+?)e$/,
                g = /^(.+?)y$/,
                m = /^(.+?(s|t))(ion)$/,
                v = /^(.+?)(ed|ing)$/,
                b = /(at|bl|iz)$/,
                y = /^(.+?)eed$/,
                p = /^.+?[^s]s$/,
                A = /^.+?(ss|i)es$/,
                x = /([^aeiouylsz])\1$/,
                S = new RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                _ = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                I = new RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        117428: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => D
            });
            var i = n(785893),
                r = n(667294),
                a = n(202351),
                o = n(70418),
                s = n(105783),
                l = n(567867),
                u = n(460471),
                c = n(694755),
                d = n(61209),
                f = n(284610),
                h = n(567403),
                g = n(352980),
                m = n(443812),
                v = n(149258),
                b = n(15084),
                y = n(99181),
                p = n(854602),
                A = n(607544),
                x = n(503871),
                S = n(2590),
                _ = n(520453),
                I = n(473708),
                C = n(272681),
                E = n.n(C);

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (i = n.next()).done); o = !0) {
                                a.push(i.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            r = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return a
                    }
                }(e, t) || O(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e) {
                return function(e) {
                    if (Array.isArray(e)) return M(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || O(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t) {
                if (e) {
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? M(e, t) : void 0
                }
            }

            function D(e) {
                var t, n = e.threadId,
                    C = e.attachments,
                    M = e.sendMessage,
                    O = e.transitionState,
                    D = e.onClose,
                    N = (0, m.Dt)(),
                    R = (0, a.e7)([d.Z], (function() {
                        return d.Z.getChannel(n)
                    }), [n]),
                    L = (0, a.e7)([h.Z], (function() {
                        return h.Z.getGuild(null == R ? void 0 : R.getGuildId())
                    }), [R]),
                    Z = (0, a.e7)([d.Z], (function() {
                        return d.Z.getChannel(null == R ? void 0 : R.parent_id)
                    }), [R]),
                    j = null === (t = C[0]) || void 0 === t ? void 0 : t.item,
                    z = T(r.useState(null), 2),
                    P = z[0],
                    $ = z[1];
                r.useEffect((function() {
                    null != j && (0, c.Fq)(j.file, (function(e, t) {
                        return $(e)
                    }), _.dG)
                }), [j]);
                var k = null != j && null != P ? {
                        src: P,
                        width: A.TJ,
                        height: A.Lp,
                        spoiler: C[0].spoiler,
                        alt: C[0].description
                    } : null,
                    B = T(r.useState(!1), 2),
                    F = B[0],
                    G = B[1],
                    U = r.useCallback((function() {
                        (0, p.xI)({
                            added: !1
                        });
                        M();
                        D()
                    }), [M, D]),
                    H = r.useCallback((function() {
                        if (null != R && null != L) {
                            (0, p.xI)({
                                added: !0
                            });
                            ! function(e) {
                                var t = e.thread,
                                    n = e.attachments,
                                    i = e.setIsUploading,
                                    r = e.guild,
                                    a = e.onClose,
                                    o = new u.Z(S.ANM.MESSAGE(t.id, t.id), "PATCH");
                                o.on("start", (function() {
                                    i(!0)
                                }));
                                o.on("progress", (function(e) {
                                    var s = (0, v.dg)(r.id);
                                    if (e.currentSize > s) {
                                        o.cancel();
                                        i(!1);
                                        a();
                                        (0, b.G)(t, (0, y.KZ)(n))
                                    }
                                }));
                                o.on("error", (function(e, t) {
                                    i(!1);
                                    if (t === S.evJ.EXPLICIT_CONTENT) {
                                        a();
                                        s.Z.show({
                                            title: I.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                                            body: I.Z.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                                name: r.toString()
                                            })
                                        })
                                    }
                                }));
                                o.on("complete", (function() {
                                    i(!1);
                                    a();
                                    l.Z.clearAll(t.id, f.d.ChannelMessage)
                                }));
                                var c = g.Z.getMessages(t.id).get(t.id),
                                    d = null != c ? c.attachments : [];
                                o.uploadFiles(n, {
                                    attachments: w(d)
                                }, {
                                    addFilesTo: "attachments"
                                })
                            }({
                                thread: R,
                                attachments: C,
                                setIsUploading: G,
                                guild: L,
                                onClose: D
                            })
                        }
                    }), [R, C, G, L, D]);
                return null == Z ? null : (0, i.jsxs)(o.ModalRoot, {
                    transitionState: O,
                    size: o.ModalSize.SMALL,
                    className: E().modalRoot,
                    "aria-labelledby": N,
                    children: [(0, i.jsxs)(o.ModalContent, {
                        className: E().modal,
                        children: [(0, i.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: E().header,
                            id: N,
                            children: I.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: E().body,
                            children: I.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                        }), (0, i.jsx)("div", {
                            className: E().forumPost,
                            children: (0, i.jsx)(x.oL, {
                                createStore: function() {
                                    return (0, x.NU)(Z)
                                },
                                children: (0, i.jsx)(A.ZP, {
                                    threadId: n,
                                    goToThread: _.dG,
                                    overrideMedia: k
                                })
                            })
                        })]
                    }), (0, i.jsxs)(o.ModalFooter, {
                        className: E().modalFooter,
                        children: [(0, i.jsx)(o.Button, {
                            look: o.Button.Looks.BLANK,
                            className: E().cancelButton,
                            disabled: F,
                            onClick: D,
                            children: I.Z.Messages.CANCEL
                        }), (0, i.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            className: E().dontAddButton,
                            disabled: F,
                            onClick: U,
                            children: I.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                        }), (0, i.jsx)(o.Button, {
                            color: o.Button.Colors.BRAND,
                            className: E().button,
                            submitting: F,
                            onClick: H,
                            autoFocus: !0,
                            children: I.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                        })]
                    })]
                })
            }
        },
        652286: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var i = n(667294);

            function r() {
                var e = (0, i.createContext)(void 0);
                return {
                    Provider: function(t) {
                        var n = t.initialStore,
                            r = t.createStore,
                            a = t.children,
                            o = (0, i.useRef)();
                        if (!o.current) {
                            if (n) {
                                console.warn("Provider initialStore is deprecated and will be removed in the next version.");
                                r || (r = function() {
                                    return n
                                })
                            }
                            o.current = r()
                        }
                        return (0, i.createElement)(e.Provider, {
                            value: o.current
                        }, a)
                    },
                    useStore: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            r = (0, i.useContext)(e);
                        if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
                        return r(t, n)
                    },
                    useStoreApi: function() {
                        var t = (0, i.useContext)(e);
                        if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, i.useMemo)((function() {
                            return {
                                getState: t.getState,
                                setState: t.setState,
                                subscribe: t.subscribe,
                                destroy: t.destroy
                            }
                        }), [t])
                    }
                }
            }
        }
    }
]);