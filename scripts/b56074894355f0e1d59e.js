(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95114"], {
        510676: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f0cba42b6a6d3b2de4fd.svg"
        },
        737444: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0a3ae0a6213e605457af.svg"
        },
        376507: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    o = new ArrayBuffer(r.length),
                    i = new Uint8Array(o);
                for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
                return o
            }

            function o(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let r = btoa(n),
                    o = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return o
            }
            n.r(t), n.d(t, {
                create: function() {
                    return I
                },
                get: function() {
                    return M
                }
            }), n("781738"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("222007"), n("70102");
            var i = "copy",
                a = "convert";

            function u(e, t, n) {
                if (t === i) return n;
                if (t === a) return e(n);
                if (t instanceof Array) return n.map(n => u(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [o, i] of Object.entries(t)) {
                        if (i.derive) {
                            let e = i.derive(n);
                            void 0 !== e && (n[o] = e)
                        }
                        if (!(o in n)) {
                            if (i.required) throw Error("Missing key: ".concat(o));
                            continue
                        }
                        if (null == n[o]) {
                            r[o] = null;
                            continue
                        }
                        r[o] = u(e, i.schema, n[o])
                    }
                    return r
                }
            }

            function s(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function l(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function c(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: l(i),
                    id: l(a),
                    transports: c(i)
                },
                f = {
                    appid: c(i),
                    appidExclude: c(i),
                    credProps: c(i)
                },
                p = {
                    appid: c(i),
                    appidExclude: c(i),
                    credProps: c(i)
                },
                h = {
                    publicKey: l({
                        rp: l(i),
                        user: l({
                            id: l(a),
                            name: l(i),
                            displayName: l(i)
                        }),
                        challenge: l(a),
                        pubKeyCredParams: l(i),
                        timeout: c(i),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(i),
                        attestation: c(i),
                        extensions: c(f)
                    }),
                    signal: c(i)
                },
                g = {
                    type: l(i),
                    id: l(i),
                    rawId: l(a),
                    authenticatorAttachment: c(i),
                    response: l({
                        clientDataJSON: l(a),
                        attestationObject: l(a),
                        transports: s(i, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: s(p, e => e.getClientExtensionResults())
                },
                m = {
                    mediation: c(i),
                    publicKey: l({
                        challenge: l(a),
                        timeout: c(i),
                        rpId: c(i),
                        allowCredentials: c([d]),
                        userVerification: c(i),
                        extensions: c(f)
                    }),
                    signal: c(i)
                },
                E = {
                    type: l(i),
                    id: l(i),
                    rawId: l(a),
                    authenticatorAttachment: c(i),
                    response: l({
                        clientDataJSON: l(a),
                        authenticatorData: l(a),
                        signature: l(a),
                        userHandle: l(a)
                    }),
                    clientExtensionResults: s(p, e => e.getClientExtensionResults())
                };
            async function I(e) {
                let t = await navigator.credentials.create(u(r, h, e));
                return u(o, g, t)
            }
            async function M(e) {
                let t = await navigator.credentials.get(u(r, m, e));
                return u(o, E, t)
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function o(e, t) {
                return !1
            }

            function i(e) {
                return !1
            }

            function a() {
                return !1
            }

            function u() {
                return !1
            }

            function s(e) {
                let {} = e;
                return !1
            }

            function l(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function p(e) {}

            function h(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return o
                },
                navigateToRootTab: function() {
                    return i
                },
                resetToAuthRoute: function() {
                    return a
                },
                resetToPanelsUI: function() {
                    return u
                },
                pushModal: function() {
                    return s
                },
                popModal: function() {
                    return l
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return p
                },
                useIsModalOpen: function() {
                    return h
                }
            })
        },
        899917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("446674"),
                i = n("77078"),
                a = n("387225"),
                u = n("697218"),
                s = n("145131"),
                l = n("782340"),
                c = n("557573");

            function d(e) {
                let {
                    onClose: t
                } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser());

                function c() {
                    null == t || t()
                }

                function d() {
                    c(), (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("867693").then(n.bind(n, "867693"));
                        return t => (0, r.jsx)(e, {
                            ...t
                        })
                    })
                }
                return (null == s ? void 0 : s.email) == null ? (0, r.jsx)(i.Button, {
                    onClick: d,
                    color: i.Button.Colors.BRAND,
                    look: i.Button.Looks.FILLED,
                    children: l.default.Messages.ADD_EMAIL_SHORT
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.Button, {
                        onClick: d,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        children: l.default.Messages.CHANGE_EMAIL_SHORT
                    }), (0, r.jsx)(a.default, {
                        color: i.Button.Colors.BRAND,
                        onClick: c
                    })]
                })
            }
            var f = function(e) {
                let {
                    onClose: t,
                    transitionState: n
                } = e;
                return (0, r.jsxs)(i.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsx)(i.ModalHeader, {
                        children: (0, r.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: l.default.Messages.PREMIUM_NOT_VERIFIED
                        })
                    }), (0, r.jsxs)(i.ModalContent, {
                        children: [(0, r.jsx)("div", {
                            className: c.imageUnverified
                        }), (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: c.message,
                            children: l.default.Messages.PREMIUM_NOT_VERIFIED_BODY
                        })]
                    }), (0, r.jsx)(i.ModalFooter, {
                        children: (0, r.jsx)(s.default, {
                            justify: s.default.Justify.END,
                            children: (0, r.jsx)(d, {
                                onClose: t
                            })
                        })
                    })]
                })
            }
        },
        387225: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                o = n("884691"),
                i = n("627445"),
                a = n.n(i),
                u = n("446674"),
                s = n("77078"),
                l = n("437822"),
                c = n("135230"),
                d = n("697218"),
                f = n("782340");
            class p extends o.Component {
                render() {
                    let {
                        color: e,
                        look: t,
                        size: n
                    } = this.props;
                    return (0, r.jsx)(s.Button, {
                        look: t,
                        size: n,
                        color: e,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: f.default.Messages.RESEND_VERIFICATION_EMAIL
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isSendingVerificationEmail: !1
                    }, this.handleResendVerification = () => {
                        let {
                            currentUser: e,
                            onClick: t
                        } = this.props;
                        null == t || t(), this.setState({
                            isSendingVerificationEmail: !0
                        }, () => {
                            l.default.verifyResend().then(() => (0, s.openModal)(t => (0, r.jsx)(s.ConfirmModal, {
                                header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
                                confirmText: f.default.Messages.OKAY,
                                confirmButtonColor: s.Button.Colors.BRAND,
                                ...t,
                                children: (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: f.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                        email: e.email
                                    })
                                })
                            }))).catch(e => {
                                let {
                                    body: t
                                } = e, n = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (n = t.email), (0, s.openModal)(e => (0, r.jsx)(c.default, {
                                    title: f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                    body: n,
                                    ...e
                                }))
                            }).then(() => this.setState({
                                isSendingVerificationEmail: !1
                            }))
                        })
                    }
                }
            }
            p.defaultProps = {
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND
            };
            var h = u.default.connectStores([d.default], () => {
                let e = d.default.getCurrentUser();
                return a(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
                    currentUser: e
                }
            })(p)
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("872717"),
                o = n("599110");

            function i(e, t, n) {
                let {
                    trackedActionData: r,
                    ...i
                } = t, a = {
                    url: i.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(i).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, o.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, i;
                        let u = r.properties;
                        "function" == typeof r.properties && (u = r.properties(e)), (0, o.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (i = e.body) || void 0 === i ? void 0 : i.message,
                            ...a,
                            ...u
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return i(r.default.get, e, "get")
                },
                post: function(e) {
                    return i(r.default.post, e, "post")
                },
                put: function(e) {
                    return i(r.default.put, e, "put")
                },
                patch: function(e) {
                    return i(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return i(r.default.delete, e, "del")
                }
            }
        }
    }
]);