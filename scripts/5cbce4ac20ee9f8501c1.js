(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85242"], {
        458389: function(e, t, n) {
            var i = n("594140"),
                r = n("564414"),
                a = n("725502"),
                l = n("591350"),
                o = n("476540"),
                u = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    E = !n && r(e),
                    _ = !n && !E && l(e),
                    d = !n && !E && !_ && u(e),
                    c = n || E || _ || d,
                    T = c ? i(e.length, String) : [],
                    I = T.length;
                for (var A in e)(t || s.call(e, A)) && !(c && ("length" == A || _ && ("offset" == A || "parent" == A) || d && ("buffer" == A || "byteLength" == A || "byteOffset" == A) || o(A, I))) && T.push(A);
                return T
            }
        },
        562132: function(e, t, n) {
            var i = n("33426"),
                r = n("136047"),
                a = n("270879"),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return a(e) && r(e.length) && !!l[i(e)]
            }
        },
        205873: function(e, t, n) {
            var i = n("733228"),
                r = n("541349"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        541349: function(e, t, n) {
            var i = n("761197")(Object.keys, Object);
            e.exports = i
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                a = r && "object" == typeof e && e && !e.nodeType && e,
                l = a && a.exports === r && i.process,
                o = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        if (e) return e;
                        return l && l.binding && l.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                a = "object" == typeof t && t && !t.nodeType && t,
                l = a && "object" == typeof e && e && !e.nodeType && e,
                o = l && l.exports === a ? i.Buffer : void 0,
                u = o ? o.isBuffer : void 0;
            e.exports = u || r
        },
        381178: function(e, t, n) {
            var i = n("562132"),
                r = n("492692"),
                a = n("276440"),
                l = a && a.isTypedArray,
                o = l ? r(l) : i;
            e.exports = o
        },
        466731: function(e, t, n) {
            var i = n("458389"),
                r = n("205873"),
                a = n("603108");
            e.exports = function(e) {
                return a(e) ? i(e) : r(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        376507: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    i = atob(n),
                    r = new ArrayBuffer(i.length),
                    a = new Uint8Array(r);
                for (let e = 0; e < i.length; e++) a[e] = i.charCodeAt(e);
                return r
            }

            function r(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let i = btoa(n),
                    r = i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return r
            }
            n.r(t), n.d(t, {
                create: function() {
                    return S
                },
                get: function() {
                    return p
                }
            });
            var a = "copy",
                l = "convert";

            function o(e, t, n) {
                if (t === a) return n;
                if (t === l) return e(n);
                if (t instanceof Array) return n.map(n => o(e, t[0], n));
                if (t instanceof Object) {
                    let i = {};
                    for (let [r, a] of Object.entries(t)) {
                        if (a.derive) {
                            let e = a.derive(n);
                            void 0 !== e && (n[r] = e)
                        }
                        if (!(r in n)) {
                            if (a.required) throw Error("Missing key: ".concat(r));
                            continue
                        }
                        if (null == n[r]) {
                            i[r] = null;
                            continue
                        }
                        i[r] = o(e, a.schema, n[r])
                    }
                    return i
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function E(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var _ = {
                    type: s(a),
                    id: s(l),
                    transports: E(a)
                },
                d = {
                    appid: E(a),
                    appidExclude: E(a),
                    credProps: E(a)
                },
                c = {
                    appid: E(a),
                    appidExclude: E(a),
                    credProps: E(a)
                },
                T = {
                    publicKey: s({
                        rp: s(a),
                        user: s({
                            id: s(l),
                            name: s(a),
                            displayName: s(a)
                        }),
                        challenge: s(l),
                        pubKeyCredParams: s(a),
                        timeout: E(a),
                        excludeCredentials: E([_]),
                        authenticatorSelection: E(a),
                        attestation: E(a),
                        extensions: E(d)
                    }),
                    signal: E(a)
                },
                I = {
                    type: s(a),
                    id: s(a),
                    rawId: s(l),
                    authenticatorAttachment: E(a),
                    response: s({
                        clientDataJSON: s(l),
                        attestationObject: s(l),
                        transports: u(a, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(c, e => e.getClientExtensionResults())
                },
                A = {
                    mediation: E(a),
                    publicKey: s({
                        challenge: s(l),
                        timeout: E(a),
                        rpId: E(a),
                        allowCredentials: E([_]),
                        userVerification: E(a),
                        extensions: E(d)
                    }),
                    signal: E(a)
                },
                f = {
                    type: s(a),
                    id: s(a),
                    rawId: s(l),
                    authenticatorAttachment: E(a),
                    response: s({
                        clientDataJSON: s(l),
                        authenticatorData: s(l),
                        signature: s(l),
                        userHandle: s(l)
                    }),
                    clientExtensionResults: u(c, e => e.getClientExtensionResults())
                };
            async function S(e) {
                let t = await navigator.credentials.create(o(i, T, e));
                return o(r, I, t)
            }
            async function p(e) {
                let t = await navigator.credentials.get(o(i, A, e));
                return o(r, f, t)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return l
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return A
                },
                disableAccount: function() {
                    return f
                },
                saveAccountRequest: function() {
                    return S
                },
                saveAccountChanges: function() {
                    return p
                },
                getHarvestStatus: function() {
                    return N
                },
                requestHarvest: function() {
                    return O
                },
                setPendingAvatar: function() {
                    return R
                },
                setPendingGlobalNameName: function() {
                    return C
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectID: function() {
                    return M
                },
                clearErrors: function() {
                    return U
                },
                resetPendingAccountChanges: function() {
                    return L
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var i = n("872717"),
                r = n("95410"),
                a = n("819855"),
                l = n("913144"),
                o = n("393414"),
                u = n("599110"),
                s = n("315102"),
                E = n("730622"),
                _ = n("437822"),
                d = n("49111"),
                c = n("191349"),
                T = n("782340");

            function I() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function A() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function f(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    r = t ? d.Endpoints.DELETE_ACCOUNT : d.Endpoints.DISABLE_ACCOUNT;
                return (0, E.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    _.default.logoutInternal(), (0, o.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function S(e) {
                let t = await i.default.patch({
                        url: d.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function p(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: a,
                    password: o,
                    avatar: _,
                    avatarDecoration: I,
                    newPassword: A,
                    globalName: f
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, E.default)(e => {
                    let l = {
                        username: t,
                        email: i,
                        email_token: a,
                        password: o,
                        avatar: _,
                        discriminator: n,
                        global_name: f,
                        new_password: A,
                        ...e
                    };
                    null === I && (l.avatar_decoration_id = null), null != I && (l.avatar_decoration_id = I.id, l.avatar_decoration_sku_id = I.skuId);
                    let u = r.default.get(d.DEVICE_TOKEN),
                        s = (0, c.getDevicePushProvider)();
                    null != s && null != u && (l.push_provider = s, l.push_token = u);
                    let E = r.default.get(d.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != E && (l.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = E), S(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function N() {
                return i.default.get({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function O() {
                return i.default.post({
                    url: d.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function M(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function U() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("872717"),
                r = n("95410"),
                a = n("913144"),
                l = n("211895"),
                o = n("26092"),
                u = n("599110"),
                s = n("315102"),
                E = n("730622"),
                _ = n("49111"),
                d = n("191349"),
                c = n("782340"),
                T = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, l.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = o.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: l,
                            emailToken: o,
                            password: T,
                            avatar: I,
                            newPassword: A,
                            discriminator: f
                        } = e, {
                            close: S
                        } = t;
                        return (0, E.default)(e => {
                            let t = {
                                    username: n,
                                    email: l,
                                    email_token: o,
                                    password: T,
                                    avatar: I,
                                    new_password: A,
                                    ...e,
                                    discriminator: null != f && "" !== f ? f : void 0
                                },
                                a = r.default.get(_.DEVICE_TOKEN),
                                u = (0, d.getDevicePushProvider)();
                            null != u && null != a && (t.push_provider = u, t.push_token = a);
                            let s = r.default.get(_.DEVICE_VOIP_TOKEN);
                            return null != d.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = d.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: _.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: c.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != A && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: A
                            }), null != T && null != A && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), S ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                a = n("414456"),
                l = n.n(a),
                o = n("77078"),
                u = n("782340"),
                s = n("347129");
            class E extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: E,
                        isLoading: _,
                        maxLength: d,
                        transitionState: c,
                        helpMessage: T,
                        retryPrompt: I,
                        retrySuccessMessage: A
                    } = this.props, {
                        code: f,
                        errorMessage: S,
                        retrySuccess: p
                    } = this.state, N = r.Children.count(a) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, O = null != I ? (0, i.jsxs)(o.Text, {
                        className: l(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: l(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, R = p ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: A
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: c,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                children: [null != T ? (0, i.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: T
                                }) : null, N, R, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != d ? d : 10,
                                        value: f,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != E ? E : S
                                    }) : null, O]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === f.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            E.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var _ = E
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("599110");
            let a = () => i.useContext(r.AnalyticsContext)
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, a = r
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("845579"),
                l = n("662255"),
                o = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: s,
                    showIconFirst: E
                } = e, _ = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !_ || !o.SUPPORTS_COPY) return null;
                let d = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(r.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        let n = null != s && e.shiftKey ? s : t;
                        (0, o.copy)(n), null == u || u()
                    },
                    icon: l.default,
                    showIconFirst: E
                }, d)
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("479756"),
                l = n("38654"),
                o = n("9294"),
                u = n("26989"),
                s = n("337543"),
                E = n("697218"),
                _ = n("49111");
            let d = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    a = E.default.getCurrentUser(),
                    l = !u.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await i.default.get({
                        url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, c = async (e, t) => {
                let n = await i.default.patch({
                        url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, T = async (e, t) => {
                let n = await i.default.patch({
                        url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, I = async (e, t) => {
                await i.default.patch({
                    url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, A = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: _.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var f = {
                fetchVerificationForm: d,
                updateVerificationForm: c,
                updateVerificationFormDescription: T,
                enableVerificationForm: I,
                submitVerificationForm: A
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return o
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return E
                },
                MAX_NUM_CHOICES: function() {
                    return _
                },
                MAX_CHOICE_LENGTH: function() {
                    return d
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return c
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return T
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return A
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return f
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([r.VerificationFormFieldTypes.TERMS]),
                l = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                o = 5,
                u = 16,
                s = 300,
                E = 300,
                _ = 8,
                d = 150,
                c = 150,
                T = 1e3,
                I = 300,
                A = "Membership Gating",
                f = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return s
                }
            });
            var i = n("308503"),
                r = n("659500"),
                a = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, i.default)(e => l),
                u = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                a = n("599110"),
                l = n("50926"),
                o = n("347977"),
                u = n("394294"),
                s = n("49111");
            let E = () => {
                    a.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                _ = e => {
                    a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var d = {
                openMemberVerificationModal(e, t) {
                    _(e);
                    let a = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, o.setShowWarning)(!0);
                                        return
                                    }
                                    E()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            E(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && E(), (0, r.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return S
                },
                updateImpersonating: function() {
                    return p
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return R
                },
                updateImpersonatedRoles: function() {
                    return C
                },
                updateImpersonatedData: function() {
                    return m
                }
            });
            var i = n("913144"),
                r = n("716241"),
                a = n("393414"),
                l = n("42203"),
                o = n("923959"),
                u = n("26989"),
                s = n("305961"),
                E = n("957255"),
                _ = n("18494"),
                d = n("282109"),
                c = n("599110"),
                T = n("38654"),
                I = n("507950"),
                A = n("49111"),
                f = n("724210");

            function S(e, t) {
                c.default.track(A.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), O(e)
            }

            function p(e, t) {
                let n = T.default.getData(e);
                null != n && n.type === t.type && (c.default.track(A.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), O(e))
            }

            function N(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function O(e) {
                let t = _.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    i = null != t && (0, f.isStaticChannelRoute)(t);
                if (!i && !E.default.can(A.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(A.Routes.CHANNEL(e, t.id))
                }
            }

            function R(e, t, n) {
                let i = new Set(d.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), p(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function C(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = r.filter(e => !n.includes(e));
                        return a.length > 0 && R(e, a, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), p(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function m(e, t) {
                p(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e, t, n, r) {
                let a = null != n ? n : t,
                    l = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
                return l || null != t && null != t.vanityURLCode || (null == r ? void 0 : r.invite_code) != null
            }
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i.default
                }
            });
            var i = n("870346")
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return u
                },
                setNewPendingUserBio: function() {
                    return s
                },
                setNewPendingAvatar: function() {
                    return E
                },
                setNewPendingAvatarDecoration: function() {
                    return _
                },
                setNewPendingProfileEffectID: function() {
                    return d
                },
                getProfilePreviewField: function() {
                    return c
                },
                showRemoveAvatar: function() {
                    return T
                },
                showRemoveBanner: function() {
                    return I
                }
            });
            var i = n("884691"),
                r = n("152584"),
                a = n("234251"),
                l = n("783142"),
                o = n("26989");

            function u(e) {
                return i.useMemo(() => {
                    let t = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let a = t[r],
                            l = null === (i = a[e]) || void 0 === i ? void 0 : i.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function E(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function _(e, t) {
                if ((0, a.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function d(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectID)(void 0);
                    return
                }(0, r.setPendingProfileEffectID)(e)
            }

            function c(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return l
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var i, r, a = n("773336");
            let l = null;

            function o() {
                return (0, a.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return S
                },
                inviteUserToStage: function() {
                    return p
                },
                audienceAckRequestToSpeak: function() {
                    return N
                },
                moveSelfToAudience: function() {
                    return O
                },
                setUserSuppress: function() {
                    return R
                },
                moveUserToAudience: function() {
                    return C
                },
                setEveryoneRolePermissionAllowed: function() {
                    return m
                },
                startStage: function() {
                    return M
                },
                editStage: function() {
                    return U
                },
                endStage: function() {
                    return L
                }
            });
            var i = n("627445"),
                r = n.n(i),
                a = n("316693"),
                l = n("872717"),
                o = n("450911");
            n("851387");
            var u = n("798609"),
                s = n("716241"),
                E = n("18494"),
                _ = n("800762"),
                d = n("991170"),
                c = n("716214"),
                T = n("230324"),
                I = n("738983"),
                A = n("808422"),
                f = n("49111");

            function S(e, t) {
                let n = e.getGuildId();
                return r(null != n, "This channel cannot be guildless."), t && (0, s.trackWithMetadata)(f.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), l.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let n = e.getGuildId();
                return r(null != n, "This channel cannot be guildless."), l.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null == e ? void 0 : e.getGuildId();
                r(null != i, "This channel cannot be guildless.");
                let a = _.default.getVoiceStateForChannel(e.id),
                    o = (0, A.getAudienceRequestToSpeakState)(a);
                return o === A.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, s.trackWithMetadata)(f.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, T.getStageChannelMetadata)(e)
                }), l.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(i),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function O(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return r(null != t, "This channel cannot be guildless."), l.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function R(e, t, n) {
                let i = e.getGuildId();
                return r(null != i, "This channel cannot be guildless."), l.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(i, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function C(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return r(null != n, "This channel cannot be guildless."), R(t, e.id, !0), l.default.patch({
                    url: f.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function m(e, t, n) {
                let i = e.getGuildId();
                r(null != i, "Channel cannot be guildless");
                let l = e.permissionOverwrites[i],
                    s = {
                        id: i,
                        type: u.PermissionOverwriteType.ROLE,
                        allow: d.default.NONE,
                        deny: d.default.NONE,
                        ...l
                    };
                n ? (s.allow = a.default.add(s.allow, t), s.deny = a.default.remove(s.deny, t)) : (s.allow = a.default.remove(s.allow, t), s.deny = a.default.add(s.deny, t)), o.default.updatePermissionOverwrite(e.id, s)
            }
            async function M(e, t, n, i) {
                if ("" === t) return;
                let r = E.default.getVoiceChannelId() === e.id;
                !r && (0, c.connectToStage)(e);
                let a = await (0, I.startStageInstance)(e.id, t, n, i);
                return N(e, !1, !0), a
            }
            async function U(e, t, n) {
                if ("" === t) return;
                let i = await (0, I.updateStageInstance)(e.id, t, n);
                return i
            }
            async function L(e) {
                await (0, I.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return _
                },
                getRemoveModeratorTooltipHint: function() {
                    return d
                },
                getStageChannelMetadata: function() {
                    return c
                }
            }), n("917351");
            var i = n("945956"),
                r = n("387111"),
                a = n("991170"),
                l = n("834052"),
                o = n("837979"),
                u = n("49111"),
                s = n("606762"),
                E = n("782340");

            function _(e, t, n, i) {
                let a = t[0],
                    l = r.default.getName(e, n, a),
                    o = null != i ? i : t.length;
                return 1 === o && null != a ? l : null == a ? E.default.Messages.SPEAKING_COUNT.format({
                    count: o
                }) : E.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: l,
                    count: o - 1
                })
            }

            function d(e, t) {
                switch (e) {
                    case s.RowType.OWNER:
                        return E.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case s.RowType.ADMINISTRATOR:
                        return E.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case s.RowType.MEMBER:
                    case s.RowType.ROLE:
                        return t ? E.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : E.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case s.RowType.EMPTY_STATE:
                }
                return null
            }

            function c(e) {
                let t = l.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? o.RequestToSpeakPermissionStates.EVERYONE : o.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return l
                },
                endStageInstance: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("49111");
            async function a(e, t, n, a, l) {
                let o = await i.default.post({
                    url: r.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: l,
                        send_start_notification: a
                    }
                });
                return o.body
            }
            async function l(e, t, n) {
                let a = await i.default.patch({
                    url: r.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function o(e) {
                return i.default.delete(r.Endpoints.STAGE_INSTANCE(e))
            }
        },
        77445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("271938"),
                a = n("18494"),
                l = n("808422");

            function o() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
                    t = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
                    n = (0, l.default)(t, e);
                return n === l.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("42203"),
                a = n("18494");

            function l() {
                return (0, i.useStateFromStores)([a.default, r.default], () => {
                    let e = a.default.getVoiceChannelId();
                    if (null != e) {
                        let t = r.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        726750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                a = n("77078"),
                l = n("305961"),
                o = n("697218"),
                u = n("800762"),
                s = n("244480"),
                E = n("619395"),
                _ = n("325861"),
                d = n("77445"),
                c = n("130563"),
                T = n("782340");

            function I(e) {
                var t;
                let n = (0, c.default)(),
                    I = null == n ? void 0 : n.id,
                    A = null == n ? void 0 : n.guild_id,
                    f = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(A), [A]),
                    S = (0, r.useStateFromStores)([u.default], () => null != I ? u.default.getVoiceStateForChannel(I, e.id) : null, [I, e.id]),
                    p = (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    N = (0, d.default)(),
                    O = (0, r.useStateFromStores)([_.default], () => _.default.getPermissionsForUser(e.id, I), [I, e.id]),
                    R = (0, E.useCanModerateRequestToSpeak)(I);
                if (null == n || null == f || null == S || O.speaker) return null;
                let C = () => {
                    p ? (0, s.audienceAckRequestToSpeak)(n, !1) : (0, s.inviteUserToStage)(n, e.id)
                };
                return R ? (0, i.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: p ? T.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : T.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: C
                }) : N && p ? (0, i.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: T.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: C
                }) : null
            }
        },
        406784: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("272030"),
                l = n("838446"),
                o = n("158534"),
                u = n("846883"),
                s = n("812204"),
                E = n("861370"),
                _ = n("726750"),
                d = n("170990"),
                c = n("304582"),
                T = n("72057"),
                I = n("489836"),
                A = n("406703"),
                f = n("314838"),
                S = n("421602"),
                p = n("692986"),
                N = n("806179"),
                O = n("816106"),
                R = n("623879"),
                C = n("49111"),
                m = n("782340"),
                M = (0, o.default)((0, l.default)(function(e) {
                    let {
                        user: t,
                        showMediaItems: n = !1,
                        mediaEngineContext: l,
                        onSelect: o
                    } = e, s = (0, N.default)(t.id), C = (0, S.default)(t.id), M = (0, A.default)(t), U = (0, T.default)({
                        user: t
                    }), L = (0, c.default)(t), g = (0, R.default)(t.id), h = (0, O.default)(t.id), P = (0, p.default)(t.id, l), D = (0, f.default)(t), v = (0, u.default)(null, t), y = (0, d.default)(t), b = (0, I.default)(t), G = (0, E.default)({
                        id: t.id,
                        label: m.default.Messages.COPY_ID_USER
                    }), V = (0, _.default)(t), F = t.isNonUserBot();
                    return (0, i.jsxs)(r.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": m.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: o,
                        children: [!F && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r.MenuGroup, {
                                children: V
                            }), (0, i.jsxs)(r.MenuGroup, {
                                children: [s, C, M, U, L, g]
                            }), n && (0, i.jsx)(r.MenuGroup, {
                                children: h
                            }), (0, i.jsx)(r.MenuGroup, {
                                children: v
                            }), (0, i.jsxs)(r.MenuGroup, {
                                children: [n && P, D, y, b]
                            })]
                        }), (0, i.jsx)(r.MenuGroup, {
                            children: G
                        })]
                    })
                }, {
                    object: C.AnalyticsObjects.CONTEXT_MENU
                }), [s.default.CONTEXT_MENU, s.default.USER_GENERIC_MENU])
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                a = n("450911"),
                l = n("54239"),
                o = n("271938"),
                u = n("49111"),
                s = n("782340");

            function E(e, t) {
                let n = o.default.getId(),
                    E = t === u.AppContext.POPOUT;
                return n === e || E ? null : (0, i.jsx)(r.MenuItem, {
                    id: "message-user",
                    label: s.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        a.default.openPrivateChannel(e), (0, l.popLayer)()
                    }
                })
            }
        },
        692986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                a = n("77078"),
                l = n("404118"),
                o = n("629109"),
                u = n("235004"),
                s = n("42887"),
                E = n("945956"),
                _ = n("162771"),
                d = n("697218"),
                c = n("423487"),
                T = n("599110"),
                I = n("49111"),
                A = n("353927"),
                f = n("782340"),
                S = n("113508");

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.MediaEngineContextTypes.DEFAULT,
                    n = (0, r.useStateFromStores)([d.default], () => {
                        var t;
                        return (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    p = (0, r.useStateFromStores)([u.default], () => u.default.isLocalSoundboardMuted(e)),
                    {
                        muted: N,
                        deafened: O = !1,
                        localVideoDisabled: R = !1,
                        localVideoAutoDisabled: C = !1
                    } = (0, r.useStateFromStoresObject)([s.default], () => n ? {
                        muted: s.default.isSelfMute(t),
                        deafened: s.default.isSelfDeaf(t)
                    } : {
                        muted: s.default.isLocalMute(e, t),
                        localVideoDisabled: s.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: s.default.isLocalVideoAutoDisabled(e, t)
                    }, [n, t, e]),
                    m = s.default.supports(A.Features.DISABLE_VIDEO) && !n ? (0, i.jsx)(a.MenuCheckboxItem, {
                        id: "disable-video",
                        label: f.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (C) {
                                l.default.show({
                                    title: f.default.Messages.UNSTABLE_CONNECTION,
                                    body: f.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: f.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: f.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => o.default.setDisableLocalVideo(e, I.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let n = R ? I.VideoToggleState.MANUAL_ENABLED : I.VideoToggleState.DISABLED;
                            o.default.setDisableLocalVideo(e, n, t)
                        },
                        checked: R,
                        subtext: C ? (0, i.jsxs)("div", {
                            className: S.videoPaused,
                            children: [(0, i.jsx)(c.default, {
                                width: 12,
                                className: S.warningCircle
                            }), f.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    M = n ? null : (0, i.jsx)(a.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: f.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let n = E.default.getRTCConnection();
                            T.default.track(I.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: _.default.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !p
                            }), o.default.toggleLocalSoundboardMute(e, t)
                        },
                        checked: p
                    }, "soundboard-sound-mute");
                return n ? [(0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mute",
                    label: f.default.Messages.SOUND_MUTE,
                    action: () => o.default.toggleSelfMute({
                        context: t
                    }),
                    checked: N
                }, "self-mute"), (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "deafen",
                    label: f.default.Messages.DEAFEN,
                    action: () => o.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: O
                }, "self-deafen"), m] : [(0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mute",
                    label: f.default.Messages.SOUND_MUTE,
                    action: () => o.default.toggleLocalMute(e, t),
                    checked: N
                }, "self-mute"), M, m]
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                a = n("77078"),
                l = n("629109"),
                o = n("42887"),
                u = n("697218"),
                s = n("829536"),
                E = n("773336"),
                _ = n("353927"),
                d = n("782340");

            function c(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT,
                    c = (0, r.useStateFromStores)([o.default], () => o.default.getLocalVolume(e, n), [e, n]),
                    T = e === (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    I = n === _.MediaEngineContextTypes.STREAM;
                return T ? null : (0, i.jsx)(a.MenuControlItem, {
                    id: "user-volume",
                    label: I ? d.default.Messages.STREAM_VOLUME : d.default.Messages.USER_VOLUME,
                    control: (t, r) => (0, i.jsx)(a.MenuSliderControl, {
                        ...t,
                        ref: r,
                        value: (0, s.amplitudeToPerceptual)(c),
                        maxValue: E.isPlatformEmbedded ? 200 : 100,
                        onChange: t => l.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
                        "aria-label": I ? d.default.Messages.STREAM_VOLUME : d.default.Messages.USER_VOLUME
                    })
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return c
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return A
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return S
                },
                setPendingAccentColor: function() {
                    return p
                },
                setPendingThemeColors: function() {
                    return N
                },
                setTryItOutAvatar: function() {
                    return O
                },
                setTryItOutAvatarDecoration: function() {
                    return R
                },
                setTryItOutBanner: function() {
                    return C
                },
                setTryItOutThemeColors: function() {
                    return m
                }
            });
            var i = n("872717"),
                r = n("913144"),
                a = n("448993"),
                l = n("884351"),
                o = n("845579"),
                u = n("697218"),
                s = n("599110"),
                E = n("49111"),
                _ = n("646718");

            function d(e) {
                s.default.track(E.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: _.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function c(e, t) {
                var n, s;
                let _ = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == _) return;
                let d = o.UseLegacyChatInput.getSetting();
                null != e.bio && d && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: _
                    });
                    let n = await i.default.patch({
                        url: null != t ? E.Endpoints.GUILD_PROFILE(t, E.ME) : E.Endpoints.USER_PROFILE(E.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: _,
                            profileEffectID: e,
                            ...n.body
                        })
                    } else {
                        let e = new a.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new a.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function T() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), d(_.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), d(_.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), d(_.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function m(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), d(_.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                r = n("54239"),
                a = n("49111");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, r.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("866227"),
                r = n.n(i),
                a = n("666038");
            class l extends a.default {
                static createFromServer(e) {
                    var t;
                    return new l({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("917351"),
                r = n.n(i),
                a = n("446674"),
                l = n("913144"),
                o = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                E = null,
                _ = null,
                d = {},
                c = {},
                T = {},
                I = null,
                A = null,
                f = !1,
                S = !1,
                p = null,
                N = null,
                O = null,
                R = [],
                C = null,
                m = null;

            function M(e) {
                var t, n, i, r, a, l;
                let E = o.default.getCurrentUser();
                if (null == E) return U();
                _ = null !== (t = e.section) && void 0 !== t ? t : _, C = null !== (n = e.section) && void 0 !== n ? n : _, null != e.subsection && null != _ && (d[_] = e.subsection), null != e.scrollPosition && null != _ && (c[_] = e.scrollPosition), S = !!e.openWithoutBackstack, s = u.FormStates.OPEN, T = {}, A = {
                    ...I = {
                        [u.UserSettingsSections.ACCOUNT]: {
                            userId: E.id,
                            username: E.username,
                            discriminator: E.discriminator,
                            email: E.email,
                            avatar: E.avatar,
                            password: "",
                            newPassword: null,
                            claimed: E.isClaimed()
                        }
                    }
                }, N = null !== (i = e.onClose) && void 0 !== i ? i : null, O = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, R = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], m = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function U() {
                s = u.FormStates.CLOSED, f = !1, I = null, C = null, A = null, E = null, _ = null, d = {}, c = {}, N = null, O = null, R = [], m = null
            }

            function L() {
                s = u.FormStates.OPEN, T = {}
            }
            class g extends a.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != A && null != I && (!!this.isOpen() || p === u.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(A, I)
                }
                isOpen() {
                    return f
                }
                getPreviousSection() {
                    return E
                }
                getSection() {
                    return _
                }
                getSubsection() {
                    return null != _ ? d[_] : null
                }
                getScrollPosition() {
                    return null != _ ? c[_] : null
                }
                shouldOpenWithoutBackstack() {
                    return S
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: _,
                        subsection: null != _ ? d[_] : null,
                        scrollPosition: null != _ ? c[_] : null,
                        settings: A,
                        errors: T,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: S,
                        analyticsLocation: O,
                        analyticsLocations: R,
                        initialSection: C,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return N
                }
            }
            g.displayName = "UserSettingsModalStore";
            var h = new g(l.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    f = !0, M(e)
                },
                USER_SETTINGS_MODAL_INIT: M,
                USER_SETTINGS_MODAL_CLOSE: U,
                LOGOUT: U,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, _ = u.UserSettingsSections.ACCOUNT, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    E = _, _ = e.section, O = null, R = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (d[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete d[t] : null != _ && delete d[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete c[t] : null != _ && delete c[_]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == A && (A = {});
                    let n = A[u.UserSettingsSections.ACCOUNT];
                    A[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    L(), null != e && (A = {
                        ...I = {
                            [u.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return p = e.tab, null == _ && p === u.DrawerTabTypes.USER_SETTINGS && M({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("35647"),
                l = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return o
                }
            });
            var i = n("281071"),
                r = n("773336"),
                a = n("50885");
            let l = (() => {
                if (r.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!l && (r.isPlatformEmbedded ? (a.default.copy(e), !0) : i.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let a = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("697218"),
                l = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, o = e.updateModalProps, r = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == i) {
                    null == u || u();
                    return
                }
                let E = i(T, _, l);

                function _() {
                    null == u || u()
                }

                function d(e) {
                    r(E), n(e)
                }

                function c(e) {
                    r(E), a(e)
                }

                function T(e) {
                    return o(E, T, _, {
                        ...l,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: d,
                        reject: c,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    o(E, T, _, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: a = u,
                    isModalOpen: l = !1,
                    ...o
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, u;
                    if (r = e, u = l, r.body && 60008 === r.body.code || u && 429 === r.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...o
                    });
                    i(e)
                })
            }

            function E(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(r) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                a = n("920636");
            let l = (e, t, n) => function(r) {
                return (0, i.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function o(e, t, n) {
                return (0, r.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, i) {
                return (0, r.updateModal)(e, l(t, n, i))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    r = document.createElement("textarea");
                r.value = e, r.contentEditable = "true", r.style.visibility = "none", t.appendChild(r), n.selectNodeContents(r), null == i || i.removeAllRanges(), null == i || i.addRange(n), r.focus(), r.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(r), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        }
    }
]);