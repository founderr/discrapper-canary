"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64502, 75619, 87328], {
        464502: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => a
            });
            var r = n(785893),
                o = n(667294),
                c = n(882723),
                l = n(971402),
                i = n(112897),
                u = n(473708);

            function a(e) {
                var t, n = (0, i.Z)({
                    id: e.id,
                    label: e.label,
                    shiftId: e.shiftId
                });
                o.useEffect((function() {
                    null == n && (0, l.Zy)()
                }), [n]);
                return (0, r.jsx)(c.Menu, {
                    onSelect: e.onSelect,
                    navId: "dev-context",
                    "aria-label": null !== (t = e["aria-label"]) && void 0 !== t ? t : u.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: l.Zy,
                    children: n
                })
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                c = n(968449),
                l = n(763933),
                i = n(691797);

            function u(e) {
                var t = e.id,
                    n = e.label,
                    u = e.onSuccess,
                    a = e.shiftId,
                    d = e.showIconFirst,
                    s = c.Sb.useSetting();
                if (__OVERLAY__ || !s || !i.wS) return null;
                var f = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        var n = null != a && e.shiftKey ? a : t;
                        (0, i.JG)(n);
                        null == u || u()
                    },
                    icon: l.Z,
                    showIconFirst: d
                }, f)
            }
        },
        763933: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function i(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) {
                        n = c[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < c.length; r++) {
                        n = c[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function u(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    u = e.height,
                    a = void 0 === u ? 24 : u,
                    d = e.color,
                    s = void 0 === d ? "currentColor" : d,
                    f = e.foreground,
                    p = i(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            c(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: f,
                        fill: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }
        },
        691797: (e, t, n) => {
            n.d(t, {
                wS: () => l,
                JG: () => i
            });
            var r = n(482507),
                o = n(120415),
                c = n(310126),
                l = function() {
                    if (o.FB) return null != c.ZP.copy;
                    try {
                        return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                    } catch (e) {
                        return !1
                    }
                }();

            function i(e) {
                if (!l) return !1;
                if (o.FB) {
                    c.ZP.copy(e);
                    return !0
                }
                return r.J(e)
            }
        },
        482507: (e, t, n) => {
            n.d(t, {
                J: () => r
            });

            function r(e) {
                var t = document.body;
                if (null == t) throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                var n = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = e;
                o.contentEditable = "true";
                o.style.visibility = "none";
                t.appendChild(o);
                n.selectNodeContents(o);
                null == r || r.removeAllRanges();
                null == r || r.addRange(n);
                o.focus();
                o.setSelectionRange(0, e.length);
                var c = document.execCommand("copy");
                t.removeChild(o);
                return c
            }
        }
    }
]);
//# sourceMappingURL=7df698f8d5796283dcda.js.map