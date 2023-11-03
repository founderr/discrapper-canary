(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21903"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var s = n("37983"),
                l = n("884691"),
                o = n("414456"),
                a = n.n(o),
                r = n("817736"),
                i = n.n(r),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                p = n("62843"),
                I = n("315102"),
                m = n("402671"),
                E = n("866190"),
                g = n("115279");
            class v extends l.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: s,
                            animated: l,
                            shouldAnimate: o,
                            isFocused: a,
                            isInteracting: r,
                            size: i = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = g.EMOJI_SIZE_MAP[i];
                        return I.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === l && (!0 === o || u || !0 === r),
                            size: e
                        })
                    }
                    if (null != s) return m.default.getURL(s)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: o,
                        className: r,
                        size: i = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: p,
                        ...I
                    } = this.props, m = this.getSrc();
                    return null == m || "" === m ? (0, s.jsx)("span", {
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (o && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, l.createElement)("img", {
                        ...I,
                        key: this.key,
                        src: m,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", r, {
                            jumboable: "jumbo" === i
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            v.defaultProps = {
                isInteracting: !1
            };
            let _ = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, s.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    o = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let s = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == s) return;
                            let l = s[1];
                            if (e.intersectionRatio >= .7) {
                                var o, a;
                                if (-1 !== t.indexOf(l)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(l) : t.push(l), l.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(l); - 1 !== e && (t.splice(e, 1), l.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = i.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), o.observe(t))
                }

                function r(e) {
                    let s = i.findDOMNode(e);
                    o.unobserve(s);
                    let l = n.findIndex(t => {
                        let [n, s] = t;
                        return s === e
                    }); - 1 !== l && (n.splice(l, 1), -1 !== (l = t.indexOf(e)) && (t.splice(l, 1), l < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends l.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: l,
                                allowAnimatedEmoji: o,
                                ...a
                            } = this.props;
                        return (0, s.jsx)(p.MessagesInteractionContext.Consumer, {
                            children: t => (0, s.jsx)(e, {
                                ...a,
                                autoplay: l || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && o
                            })
                        })
                    }
                }
            }(v);

            function x(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    l = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, s.jsx)(_, {
                    ...e,
                    ...n,
                    isFocused: l
                })
            }
        },
        512027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        652453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RawInviteCopyInputConnected: function() {
                    return M
                },
                InviteCopyInput: function() {
                    return C
                }
            });
            var s = n("37983"),
                l = n("884691"),
                o = n("414456"),
                a = n.n(o),
                r = n("498574"),
                i = n("446674"),
                u = n("862337"),
                d = n("77078"),
                c = n("162771"),
                f = n("102985"),
                h = n("599110"),
                p = n("306160"),
                I = n("568734"),
                m = n("354023"),
                E = n("865699"),
                g = n("91366"),
                v = n("49111"),
                _ = n("782340"),
                x = n("435808"),
                N = n("905518"),
                S = n("173791"),
                T = n("926622");
            let M = i.default.connectStores([f.default], () => ({
                    hideValue: f.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: o,
                        onCopy: r,
                        disabled: i
                    } = e, [c, f] = l.useState(!1), [h, I] = l.useState(!1), m = l.useMemo(() => new u.DelayedCall(1e3, () => I(!1)), [I]);
                    return l.useEffect(() => () => {
                        m.cancel()
                    }, [m]), (0, s.jsxs)("div", {
                        className: a(N.input, S.flexJustifyBetween, S.flexCenter, {
                            [N.success]: h,
                            [N.focused]: c
                        }),
                        children: [(0, s.jsx)(d.TextInput, {
                            className: x.copyInput,
                            name: "invite",
                            value: o ? _.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: x.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? f(!0) : null,
                            onBlur: () => n ? f(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": _.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: i
                        }), p.SUPPORTS_COPY ? (0, s.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: h ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: x.copyButton,
                            onClick: () => {
                                I(!0), m.delay(), r(t)
                            },
                            disabled: i,
                            children: h ? _.default.Messages.INVITE_COPIED : _.default.Messages.COPY
                        }) : null]
                    })
                }),
                C = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: o,
                        onClose: i,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: f,
                        inviteFlags: N,
                        setInviteFlags: S,
                        showGuestInviteToggleForCurrentVoiceChannel: C,
                        copyValue: y,
                        changePage: b,
                        inviteChannel: A,
                        source: j,
                        code: O,
                        guildScheduledEvent: R,
                        disabled: k
                    } = e, {
                        maxAge: U,
                        maxUses: V,
                        networkError: P,
                        showVanityURL: L
                    } = u, D = l.useCallback(() => {
                        (0, p.copy)(y), h.default.track(v.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == A ? void 0 : A.id,
                            channel_type: null == A ? void 0 : A.type,
                            location: j,
                            code: O,
                            guild_scheduled_event_id: null == R ? void 0 : R.id
                        })
                    }, [y, A, j, O, R]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(M, {
                            value: y,
                            autoFocus: o,
                            onCopy: D,
                            disabled: k
                        }), f ? (0, s.jsx)("div", {
                            className: x.temporaryMembershipContainerBackground,
                            children: (0, s.jsx)(d.FormSwitch, {
                                className: x.temporaryMembershipContainer,
                                value: (0, I.hasFlag)(N, r.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => S((0, I.setFlag)(N, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: _.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: k,
                                hideBorder: !0,
                                children: C ? _.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : _.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || L ? null : (0, s.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: a(T.marginTop8, x.footerText),
                            children: [(0, m.maxAgeString)(U, V), " ", o ? (0, s.jsx)(d.Anchor, {
                                onClick: () => b(g.InstantInviteModalPages.SETTINGS),
                                children: _.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && o && L ? (0, s.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: a(T.marginTop8, x.footerText),
                            children: [_.default.Messages.INVITE_VANITY_USED, " ", (0, s.jsx)(d.Anchor, {
                                onClick: () => b(g.InstantInviteModalPages.SETTINGS),
                                children: _.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != P ? (0, s.jsx)(E.InviteErrorMessage, {
                            guild: t,
                            error: P,
                            onClose: i
                        }) : null]
                    })
                }
        },
        865699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteErrorMessage: function() {
                    return c
                }
            });
            var s = n("37983"),
                l = n("884691"),
                o = n("77078"),
                a = n("592407"),
                r = n("957255"),
                i = n("49111"),
                u = n("782340"),
                d = n("435808");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, f = t.id, h = l.useCallback(() => {
                    c(), a.default.open(f, i.GuildSettingsSections.INSTANT_INVITES)
                }, [f, c]), p = l.useCallback(e => (0, s.jsx)(o.Clickable, {
                    className: d.errorLink,
                    onClick: h,
                    children: (0, s.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [h]), I = l.useCallback(e => (0, s.jsx)(o.Anchor, {
                    href: i.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, s.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), m = n.code !== i.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(i.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: p,
                    inviteHelpHook: I
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, s.jsx)(o.Text, {
                    className: d.errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: m
                })
            }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return l
                }
            });
            var s = n("884691");
            let l = s.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return r
                }
            });
            var s = n("281071"),
                l = n("773336"),
                o = n("50885");
            let a = (() => {
                if (l.isPlatformEmbedded) return null != o.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!a && (l.isPlatformEmbedded ? (o.default.copy(e), !0) : s.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return r
                }
            });
            var s = n("884691"),
                l = n("446674"),
                o = n("244201"),
                a = n("471671");

            function r() {
                let {
                    windowId: e
                } = s.useContext(o.default);
                return (0, l.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
            }
        },
        498574: function(e, t, n) {
            "use strict";
            var s, l;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return s
                }
            }), (l = s || (s = {}))[l.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", l[l.IS_VIEWED = 2] = "IS_VIEWED", l[l.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        281071: function(e, t, n) {
            "use strict";

            function s(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    s = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == s || s.removeAllRanges(), null == s || s.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let o = document.execCommand("copy");
                return t.removeChild(l), o
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return s
                }
            })
        }
    }
]);