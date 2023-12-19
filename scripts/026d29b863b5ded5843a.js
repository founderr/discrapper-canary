(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15106"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                i = n("817736"),
                r = n.n(i),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                p = n("845579"),
                f = n("901165"),
                h = n("62843"),
                I = n("315102"),
                E = n("402671"),
                m = n("866190"),
                _ = n("115279");
            class C extends a.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: l,
                            animated: a,
                            shouldAnimate: s,
                            isFocused: o,
                            isInteracting: i,
                            size: r = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = _.EMOJI_SIZE_MAP[r];
                        return I.default.getEmojiURL({
                            id: n,
                            animated: o && !0 === a && (!0 === s || u || !0 === i),
                            size: e
                        })
                    }
                    if (null != l) return E.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: s,
                        className: i,
                        size: r = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: p,
                        autoplay: f,
                        isInteracting: h,
                        ...I
                    } = this.props, E = this.getSrc();
                    return null == E || "" === E ? (0, l.jsx)("span", {
                        className: o("emoji", "emoji-text"),
                        children: n
                    }) : (s && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...I,
                        key: this.key,
                        src: E,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: o("emoji", i, {
                            jumboable: "jumbo" === r
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != p && "" !== p ? {
                            "data-id": p
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
            C.defaultProps = {
                isInteracting: !1
            };
            let g = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    s = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let a = l[1];
                            if (e.intersectionRatio >= .7) {
                                var s, o;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function o(e) {
                    let t = r.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), s.observe(t))
                }

                function i(e) {
                    let l = r.findDOMNode(e);
                    s.unobserve(l);
                    let a = n.findIndex(t => {
                        let [n, l] = t;
                        return l === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? o(this) : i(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && i(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: s,
                                ...o
                            } = this.props;
                        return (0, l.jsx)(h.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...o,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
                            })
                        })
                    }
                }
            }(C);

            function S(e) {
                let t = p.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, m.useIsWindowFocused)();
                return (0, l.jsx)(g, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var l = n("872717"),
                a = n("913144"),
                s = n("568734"),
                o = n("299285"),
                i = n("49111"),
                r = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: s,
                            teamId: o
                        } = e, r = await l.default.post({
                            url: i.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: s,
                                guild_id: n,
                                team_id: o
                            }
                        }), u = r.body;
                        return null != n && null != s && a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = await l.default.get({
                            url: i.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), o = s.body;
                        return a.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: o
                        }), o
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, s = await l.default.post({
                            url: i.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), o = s.body;
                        return a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let l = o.default.getApplication(e),
                                    a = (0, s.hasFlag)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, i.ApplicationFlags.EMBEDDED),
                                    r = a && (null == l ? void 0 : null === (t = l.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != l && !r) && !o.default.isFetchingApplication(e) && !o.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            a.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await l.default.get({
                                    url: i.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw a.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            a.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return a.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), l.default.get({
                            url: i.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (a.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        512027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
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
                    return v
                },
                InviteCopyInput: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                i = n("498574"),
                r = n("446674"),
                u = n("862337"),
                d = n("77078"),
                c = n("162771"),
                p = n("102985"),
                f = n("599110"),
                h = n("306160"),
                I = n("568734"),
                E = n("354023"),
                m = n("865699"),
                _ = n("91366"),
                C = n("49111"),
                g = n("782340"),
                S = n("435808"),
                T = n("905518"),
                y = n("173791"),
                A = n("926622");
            let v = r.default.connectStores([p.default], () => ({
                    hideValue: p.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: s,
                        onCopy: i,
                        disabled: r
                    } = e, [c, p] = a.useState(!1), [f, I] = a.useState(!1), E = a.useMemo(() => new u.DelayedCall(1e3, () => I(!1)), [I]);
                    return a.useEffect(() => () => {
                        E.cancel()
                    }, [E]), (0, l.jsxs)("div", {
                        className: o(T.input, y.flexJustifyBetween, y.flexCenter, {
                            [T.success]: f,
                            [T.focused]: c
                        }),
                        children: [(0, l.jsx)(d.TextInput, {
                            className: S.copyInput,
                            name: "invite",
                            value: s ? g.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: S.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? p(!0) : null,
                            onBlur: () => n ? p(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": g.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: r
                        }), h.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: f ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: S.copyButton,
                            onClick: () => {
                                I(!0), E.delay(), i(t)
                            },
                            disabled: r,
                            children: f ? g.default.Messages.INVITE_COPIED : g.default.Messages.COPY
                        }) : null]
                    })
                }),
                N = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: s,
                        onClose: r,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: p,
                        inviteFlags: T,
                        setInviteFlags: y,
                        showGuestInviteToggleForCurrentVoiceChannel: N,
                        copyValue: x,
                        changePage: b,
                        inviteChannel: P,
                        source: M,
                        code: O,
                        guildScheduledEvent: L,
                        disabled: F
                    } = e, {
                        maxAge: R,
                        maxUses: j,
                        networkError: U,
                        showVanityURL: k
                    } = u, w = a.useCallback(() => {
                        (0, h.copy)(x), f.default.track(C.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == P ? void 0 : P.id,
                            channel_type: null == P ? void 0 : P.type,
                            location: M,
                            code: O,
                            guild_scheduled_event_id: null == L ? void 0 : L.id
                        })
                    }, [x, P, M, O, L]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(v, {
                            value: x,
                            autoFocus: s,
                            onCopy: w,
                            disabled: F
                        }), p ? (0, l.jsx)("div", {
                            className: S.temporaryMembershipContainerBackground,
                            children: (0, l.jsx)(d.FormSwitch, {
                                className: S.temporaryMembershipContainer,
                                value: (0, I.hasFlag)(T, i.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => y((0, I.setFlag)(T, i.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: g.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: F,
                                hideBorder: !0,
                                children: N ? g.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : g.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || k ? null : (0, l.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: o(A.marginTop8, S.footerText),
                            children: [(0, E.maxAgeString)(R, j), " ", s ? (0, l.jsx)(d.Anchor, {
                                onClick: () => b(_.InstantInviteModalPages.SETTINGS),
                                children: g.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && s && k ? (0, l.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: o(A.marginTop8, S.footerText),
                            children: [g.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
                                onClick: () => b(_.InstantInviteModalPages.SETTINGS),
                                children: g.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != U ? (0, l.jsx)(m.InviteErrorMessage, {
                            guild: t,
                            error: U,
                            onClose: r
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
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                o = n("592407"),
                i = n("957255"),
                r = n("49111"),
                u = n("782340"),
                d = n("435808");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, p = t.id, f = a.useCallback(() => {
                    c(), o.default.open(p, r.GuildSettingsSections.INSTANT_INVITES)
                }, [p, c]), h = a.useCallback(e => (0, l.jsx)(s.Clickable, {
                    className: d.errorLink,
                    onClick: f,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [f]), I = a.useCallback(e => (0, l.jsx)(s.Anchor, {
                    href: r.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), E = n.code !== r.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : i.default.can(r.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: h,
                    inviteHelpHook: I
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, l.jsx)(s.Text, {
                    className: d.errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: E
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                o = n("393414"),
                i = n("49111"),
                r = a.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: r,
                        onClick: u,
                        onKeyPress: d,
                        focusProps: c,
                        ...p
                    } = e, f = a.useCallback(e => {
                        !e.repeat && ((e.charCode === i.KeyboardKeys.SPACE || e.charCode === i.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, o.transitionTo)(n), null == u || u()), null == d || d(e))
                    }, [n, d, u]), h = a.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.transitionTo)(n), null == u || u())
                    }, [n, u]), I = (0, l.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: h,
                        onKeyPress: f,
                        ...p,
                        children: r
                    });
                    return (0, l.jsx)(s.FocusRing, {
                        ...c,
                        children: I
                    })
                })
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return a
                }
            });
            var l = n("884691");
            let a = l.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return i
                }
            }), n("70102");
            var l = n("281071"),
                a = n("773336"),
                s = n("50885");
            let o = (() => {
                if (a.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function i(e) {
                return !!o && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : l.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("244201"),
                o = n("471671");

            function i() {
                let {
                    windowId: e
                } = l.useContext(s.default);
                return (0, a.useStateFromStores)([o.default], () => o.default.isFocused(e), [e])
            }
        },
        498574: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return l
                }
            }), n("222007"), (a = l || (l = {}))[a.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", a[a.IS_VIEWED = 2] = "IS_VIEWED", a[a.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        281071: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == l || l.removeAllRanges(), null == l || l.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(a), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            }), n("70102")
        }
    }
]);