(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36685"], {
        856670: function(e, t, s) {
            "use strict";
            e.exports = s.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7e5dd7f59f96cc264184.svg"
        },
        587621: function(e, t, s) {
            "use strict";
            e.exports = s.p + "85d73a66b814f4f52563.png"
        },
        133403: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("414456"),
                a = s.n(i),
                l = s("77078"),
                r = s("782340"),
                d = s("239636");
            let o = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: s,
                    "aria-label": i,
                    look: u = o.DEFAULT
                } = e;
                return (0, n.jsx)(l.Clickable, {
                    "aria-label": null != i ? i : r.default.Messages.REMOVE,
                    className: a(d.button, u, t),
                    onClick: s
                })
            }
            u.Looks = o
        },
        747593: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return V
                }
            }), s("222007"), s("424973");
            var n, i, a = s("37983"),
                l = s("884691"),
                r = s("917351"),
                d = s.n(r),
                o = s("866227"),
                u = s.n(o),
                c = s("817736"),
                h = s("118810"),
                S = s("446674"),
                g = s("669491"),
                f = s("77078"),
                N = s("519705"),
                E = s("668597"),
                _ = s("320954"),
                T = s("679653"),
                m = s("419830"),
                O = s("47495"),
                x = s("348077"),
                I = s("308305"),
                C = s("319165"),
                M = s("233069"),
                p = s("42203"),
                v = s("245997"),
                A = s("525065"),
                L = s("305961"),
                U = s("27618"),
                R = s("282109"),
                j = s("697218"),
                F = s("145131"),
                G = s("612434"),
                b = s("449008"),
                D = s("701909"),
                P = s("49111"),
                w = s("468200"),
                H = s("782340"),
                y = s("296884");
            (i = n || (n = {})).MUTED = "muted", i.MESSAGE_NOTIFICATIONS = "message_notifications", i.SUPPRESS_EVERYONE = "suppress_everyone", i.SUPPRESS_ROLES = "suppress_roles", i.MOBILE_PUSH = "mobile_push", i.MUTE_EVENTS = "mute_scheduled_events", i.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class k extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: s,
                        channelOverridesProp: n
                    } = t;
                    return e.channelOverrides !== n ? (s = new Set(s), (0, O.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
                        overrides: s,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: s
                    } = this.state, n = null != s ? this._channelRefs[s] : null;
                    if (null != this._scroller && null != n && s !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(n);
                        if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
                            var i;
                            null === (i = this._scroller) || void 0 === i || i.scrollIntoViewNode({
                                node: e,
                                animate: !0,
                                padding: 20,
                                callback: () => this.setState({
                                    lastSelected: null
                                })
                            }), n.highlight()
                        }
                    }
                    if (this.props.channelOverrides !== e.channelOverrides) {
                        let {
                            overrides: e
                        } = this.state;
                        e = new Set(e), (0, O.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
                            overrides: e
                        })
                    }
                }
                handleCheckboxChange(e, t) {
                    N.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    })
                }
                handleRadioChange(e, t) {
                    let {
                        value: s
                    } = t;
                    N.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: s
                    })
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(f.ModalHeader, {
                        children: [(0, a.jsxs)(F.default.Child, {
                            children: [(0, a.jsx)(f.Heading, {
                                variant: "heading-lg/semibold",
                                children: H.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(f.Text, {
                                variant: "text-md/normal",
                                className: y.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(F.default.Child, {
                            grow: 0,
                            children: (0, a.jsx)(f.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, a.jsx)(f.ModalFooter, {
                        children: (0, a.jsx)(f.Button, {
                            onClick: this.props.onClose,
                            children: H.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: s,
                        guild: n
                    } = this.props, i = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : w.MuteUntilSeconds.ALWAYS;
                    return null == n ? null : (0, a.jsxs)(f.FormItem, {
                        className: y.largeSpacing,
                        children: [(0, a.jsx)(f.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: this.handleCheckboxChange.bind(this, "muted"),
                            note: H.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: H.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: n.name
                            })
                        }), t ? (0, a.jsxs)(F.default, {
                            className: y.spacing,
                            align: F.default.Align.CENTER,
                            children: [(0, a.jsxs)(F.default, {
                                direction: F.default.Direction.VERTICAL,
                                className: y.muteUntilTextWrapper,
                                children: [(0, a.jsx)(f.FormTitle, {
                                    tag: "h3",
                                    className: y.muteUntilTitle,
                                    children: H.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(C.default, {
                                    className: y.muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, a.jsx)(f.SingleSelect, {
                                className: y.muteTimeSelector,
                                options: (0, O.getMuteTimeOptions)(),
                                value: i,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(f.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: s,
                        memberCount: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: y.spacing,
                        children: [(0, a.jsx)(f.FormItem, {
                            title: H.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: y.largeSpacing,
                            children: (0, a.jsx)(f.RadioGroup, {
                                disabled: s,
                                value: t,
                                onChange: this.handleRadioChange.bind(this, "message_notifications"),
                                options: (e = n, [{
                                    name: H.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: P.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= P.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? H.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: H.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: P.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: H.default.Messages.FORM_LABEL_NOTHING,
                                    value: P.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(f.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: s,
                        muted: n,
                        muteEvents: i,
                        notifyHighlights: l,
                        guildId: r
                    } = this.props;
                    return (0, a.jsxs)(f.FormItem, {
                        className: y.largeSpacing,
                        children: [(0, a.jsx)(f.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, "suppress_everyone"),
                            value: e,
                            children: H.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(f.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, "suppress_roles"),
                            value: t,
                            children: H.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(f.FormSwitch, {
                            onChange: e => {
                                N.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? P.HighlightSettings.DISABLED : P.HighlightSettings.ENABLED
                                })
                            },
                            value: n || l === P.HighlightSettings.DISABLED,
                            disabled: n,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: H.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: y.highlightsLink,
                                    children: (0, a.jsx)(f.Anchor, {
                                        href: D.default.getArticleURL(P.HelpdeskArticles.HIGHLIGHTS),
                                        children: H.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: H.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(f.FormSwitch, {
                            value: i,
                            onChange: this.handleCheckboxChange.bind(this, "mute_scheduled_events"),
                            children: H.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(f.FormSwitch, {
                            value: !n && s,
                            disabled: n,
                            onChange: this.handleCheckboxChange.bind(this, "mobile_push"),
                            children: H.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, s = d(e).filter(e => {
                        let {
                            channel: s
                        } = e;
                        return s.type !== P.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, T.computeChannelName)(t, j.default, U.default)
                        }
                    }).value();
                    return (0, a.jsxs)(f.FormItem, {
                        title: H.default.Messages.NOTIFICATION_OVERRIDES,
                        className: y.largeSpacing,
                        children: [(0, a.jsx)(f.FormText, {
                            type: f.FormText.Types.DESCRIPTION,
                            className: y.smallSpacing,
                            children: H.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(f.SearchableSelect, {
                            value: "",
                            placeholder: H.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: s,
                            onChange: this.handleSelectChange
                        })]
                    })
                }
                renderChannelNotifications() {
                    let {
                        channelOverrides: e,
                        muted: t,
                        channels: s,
                        messageNotifications: n,
                        categories: i,
                        checkboxColor: l
                    } = this.props, {
                        overrides: r
                    } = this.state, d = s.map(s => {
                        let {
                            channel: d
                        } = s;
                        if (!r.has(d.id) || null != i[d.id] && 0 === i[d.id].length) return null;
                        let o = e[d.id];
                        return (0, a.jsx)(I.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != o && (0, E.computeIsMuted)(o),
                            messageNotifications: null != o ? o.message_notifications : null,
                            guildMessageNotifications: n,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: l
                        }, d.id)
                    }).filter(b.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: y.overridePlaceholder,
                        children: (0, a.jsx)(f.Text, {
                            className: y.overrideHeader,
                            variant: "text-sm/semibold",
                            children: H.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: y.overrideList,
                        children: [(0, a.jsxs)(F.default, {
                            children: [(0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: y.headerName,
                                children: H.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: H.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: H.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: H.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: (0, a.jsx)(f.Tooltip, {
                                    text: H.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        children: H.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    return (0, a.jsxs)(f.ModalRoot, {
                        "aria-label": H.default.Messages.NOTIFICATION_SETTINGS,
                        size: f.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, a.jsxs)(f.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                        }), this.renderFooter()]
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = null, this._channelRefs = {}, this.state = {
                        overrides: new Set((0, O.filterOverrides)(this.props.channelOverrides)),
                        channelOverridesProp: this.props.channelOverrides,
                        lastSelected: null
                    }, this.setScrollerRef = e => {
                        this._scroller = e
                    }, this.handleSelectChange = e => {
                        if (null == e) return;
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).add(e), this.setState({
                            overrides: t,
                            lastSelected: e
                        })
                    }, this.handleSelectMuteTime = e => {
                        let t = e > 0 ? u().add(e, "second").toISOString() : null;
                        N.default.updateGuildNotificationSettings(this.props.guildId, {
                            muted: !0,
                            mute_config: {
                                selected_time_window: e,
                                end_time: t
                            }
                        })
                    }, this.handleDeleteOverride = e => {
                        let {
                            overrides: t
                        } = this.state;
                        (t = new Set(t)).delete(e), this.setState({
                            overrides: t
                        })
                    }, this.renderOptionLabel = e => {
                        let t = p.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let s = p.default.getChannel(t.parent_id),
                            n = null != s ? s.name : null;
                        return (0, a.jsx)(G.default, {
                            icon: (0, m.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: n
                        })
                    }
                }
            }

            function B(e) {
                let {
                    guildId: t,
                    ...s
                } = e, n = (0, S.useStateFromStoresObject)([v.default, L.default, A.default, R.default], () => {
                    let e = v.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: L.default.getGuild(t),
                        memberCount: A.default.getMemberCount(t),
                        suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: R.default.isSuppressRolesEnabled(t),
                        muteEvents: R.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: R.default.isMobilePushEnabled(t),
                        muted: R.default.isMuted(t),
                        muteConfig: R.default.getMuteConfig(t),
                        messageNotifications: R.default.getMessageNotifications(t),
                        channelOverrides: R.default.getChannelOverrides(t),
                        channels: (0, _.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, M.isGuildSelectableChannelType)(t) || t === P.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: R.default.getNotifyHighlights(t)
                    }
                }), i = (0, f.useToken)(g.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(k, {
                    ...n,
                    ...s,
                    checkboxColor: i
                })
            }

            function V(e) {
                let t = (0, O.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    s = t ? x.default : B;
                return (0, a.jsx)(s, {
                    ...e
                })
            }
        },
        524173: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                BellIcon: function() {
                    return l
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("669491"),
                a = s("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
                        className: r
                    })
                })
            }
        },
        47495: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getMuteTimeOptions: function() {
                    return h
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return f
                }
            }), s("702976");
            var n = s("446674"),
                i = s("668597"),
                a = s("282109"),
                l = s("568734"),
                r = s("640497"),
                d = s("49111"),
                o = s("468200"),
                u = s("397336"),
                c = s("782340");

            function h() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: o.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: o.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: o.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: o.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: o.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: o.MuteUntilSeconds.ALWAYS
                }]
            }
            let S = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
                return Object.keys(e).filter(s => {
                    var n, a;
                    let r = e[s].message_notifications !== d.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (n = e[s].flags) && void 0 !== n ? n : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[s].flags) && void 0 !== a ? a : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, i.computeIsMuted)(e[s])
                })
            }

            function f(e) {
                let t = (0, n.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return r.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        437756: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useChannelPresetSettings: function() {
                    return S
                },
                useChannelPresetInheritance: function() {
                    return g
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return N
                },
                updateChannelUnreadSetting: function() {
                    return E
                },
                updateChannelNotificationSetting: function() {
                    return _
                }
            }), s("222007");
            var n = s("65597"),
                i = s("519705"),
                a = s("42203"),
                l = s("282109"),
                r = s("47495"),
                d = s("277796"),
                o = s("507313"),
                u = s("49111"),
                c = s("133335"),
                h = s("397336");

            function S(e) {
                let t = (0, n.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    s = (0, n.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: s,
                    preset: (0, o.presetFromSettings)(t, s)
                }
            }

            function g(e) {
                let t = (0, n.useStateFromStoresArray)([l.default], () => (0, r.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [s, i] = (0, n.useStateFromStoresArray)([l.default, a.default], () => {
                        let s = a.default.getChannel(e.parent_id);
                        return null != s && t.includes(s.id) ? ["parent", (0, o.presetName)((0, o.presetFromSettings)(l.default.resolveUnreadSetting(s), l.default.resolvedMessageNotifications(s)))] : ["guild", (0, o.presetName)((0, o.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: s,
                    inheritedPreset: i
                }
            }

            function f(e, t, s) {
                let n = l.default.getChannelIdFlags(e, t);
                s === o.Presets.ALL_MESSAGES ? i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(n, h.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }) : s === o.Presets.MENTIONS ? i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, d.withChannelUnreadFlags)(n, h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }) : s === o.Presets.NOTHING && i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(n, h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }

            function N(e, t) {
                i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NULL,
                    flags: (0, d.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                })
            }

            function E(e, t, s) {
                let n = l.default.getChannelIdFlags(e, t);
                i.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, d.withChannelUnreadFlags)(n, s === c.UnreadSetting.ALL_MESSAGES ? h.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }

            function _(e, t, s) {
                i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: s
                })
            }
        },
        277796: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                withGuildUnreadFlags: function() {
                    return a
                },
                resetChannelUnreadFlags: function() {
                    return l
                },
                withChannelUnreadFlags: function() {
                    return r
                }
            });
            var n = s("568734"),
                i = s("397336");

            function a(e, t) {
                var s;
                return n.addFlag((s = e, n.removeFlags(s, i.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => n.removeFlags(e, i.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function r(e, t) {
                return n.addFlag(l(e), t)
            }
        },
        546770: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                updateGuildPreset: function() {
                    return o
                }
            }), s("65597");
            var n = s("519705"),
                i = s("282109"),
                a = s("277796"),
                l = s("507313"),
                r = s("49111"),
                d = s("397336");

            function o(e, t) {
                let s = i.default.getGuildFlags(e);
                t === l.Presets.ALL_MESSAGES ? n.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, a.withGuildUnreadFlags)(s, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }) : t === l.Presets.MENTIONS ? n.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, a.withGuildUnreadFlags)(s, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }) : t === l.Presets.NOTHING && n.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, a.withGuildUnreadFlags)(s, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }
        },
        286844: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                getPushNotificationSelectOptions: function() {
                    return l
                },
                getUnreadSelectOptions: function() {
                    return r
                }
            });
            var n = s("49111"),
                i = s("133335"),
                a = s("782340");
            let l = () => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: n.UserNotificationSettings.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: n.UserNotificationSettings.ONLY_MENTIONS
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    value: n.UserNotificationSettings.NO_MESSAGES
                }],
                r = () => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: i.UnreadSetting.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: i.UnreadSetting.ONLY_MENTIONS
                }]
        },
        507313: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Presets: function() {
                    return n
                },
                presetFromSettings: function() {
                    return o
                },
                presetName: function() {
                    return u
                }
            }), s("794252");
            var n, i, a = s("506838"),
                l = s("49111"),
                r = s("133335"),
                d = s("782340");

            function o(e, t) {
                return (0, a.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, r.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, r.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, r.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, r.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, r.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function u(e) {
                return (0, a.match)(e).with("all_messages", () => d.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => d.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(i = n || (n = {})).ALL_MESSAGES = "all_messages", i.MENTIONS = "mentions", i.NOTHING = "nothing", i.CUSTOM = "custom"
        },
        661740: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var n = s("884691");

            function i(e, t) {
                let s = n.useRef(e);
                n.useEffect(() => {
                    e.length > s.current.length && t(), s.current = e
                }, [e, t])
            }
        },
        149943: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("446674"),
                a = s("77078"),
                l = s("519705"),
                r = s("282109"),
                d = s("49111"),
                o = s("782340"),
                u = s("775247");

            function c(e) {
                let {
                    guildId: t
                } = e, s = (0, i.useStateFromStoresObject)([r.default], () => ({
                    highligths: r.default.getNotifyHighlights(t),
                    mobilePush: r.default.isMobilePushEnabled(t),
                    suppressRoles: r.default.isSuppressRolesEnabled(t),
                    suppressEveryone: r.default.isSuppressEveryoneEnabled(t),
                    muteScheduledEvents: r.default.isMuteScheduledEventsEnabled(t)
                })), a = l.default.updateGuildNotificationSettings;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(h, {
                        value: s.suppressEveryone,
                        title: o.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        })
                    }), (0, n.jsx)(h, {
                        value: s.suppressRoles,
                        title: o.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        })
                    }), (0, n.jsx)(h, {
                        subtitle: o.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: o.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: s.highligths === d.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? d.HighlightSettings.ENABLED : d.HighlightSettings.DISABLED
                        })
                    }), (0, n.jsx)(h, {
                        value: s.muteScheduledEvents,
                        title: o.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        })
                    }), (0, n.jsx)(h, {
                        value: s.mobilePush,
                        title: o.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        })
                    })]
                })
            }

            function h(e) {
                return (0, n.jsx)(a.FormSwitch, {
                    hideBorder: !0,
                    className: u.advanceSetting,
                    value: e.value,
                    onChange: e.onChange,
                    note: e.subtitle,
                    children: e.title
                })
            }
        },
        784905: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return U
                }
            }), s("222007");
            var n = s("37983"),
                i = s("884691"),
                a = s("414456"),
                l = s.n(a),
                r = s("446674"),
                d = s("669491"),
                o = s("77078"),
                u = s("519705"),
                c = s("133403"),
                h = s("679653"),
                S = s("419830"),
                g = s("42203"),
                f = s("245997"),
                N = s("27618"),
                E = s("282109"),
                _ = s("697218"),
                T = s("449008"),
                m = s("47495"),
                O = s("437756"),
                x = s("277796"),
                I = s("286844"),
                C = s("507313"),
                M = s("661740"),
                p = s("432082"),
                v = s("49111"),
                A = s("782340"),
                L = s("105346");

            function U(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: s
                } = e, i = (0, r.useStateFromStoresArray)([g.default, E.default], () => {
                    let e = (0, m.filterOverrides)(E.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => g.default.getChannel(e)).filter(T.isNotNullish)
                });
                (0, M.default)(i, () => s());
                let a = (0, r.useStateFromStores)([f.default], () => f.default.getCategories(t)),
                    l = i.map((e, t) => (0, n.jsxs)("div", {
                        className: L.channelRow,
                        children: [(0, n.jsx)(R, {
                            channel: e,
                            categories: a
                        }, e.id), t < i.length - 1 && (0, n.jsx)("div", {
                            className: L.separator
                        })]
                    }, e.id));
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(p.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != i.find(t => t.id === e)) return;
                            let s = g.default.getChannel(e);
                            null != s && u.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: E.default.resolvedMessageNotifications(s),
                                flags: (0, x.withChannelUnreadFlags)(E.default.getChannelIdFlags(s.guild_id, s.id), E.default.resolveUnreadSetting(s))
                            })
                        }
                    }), l.length > 0 && (0, n.jsxs)("div", {
                        className: L.table,
                        children: [(0, n.jsxs)("div", {
                            className: L.row,
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowName,
                                children: A.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_1
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_2
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_3
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), l.length > 0 && (0, n.jsx)("div", {
                            className: L.channels,
                            children: l
                        })]
                    })]
                })
            }

            function R(e) {
                let {
                    channel: t,
                    categories: s
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), u = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(null == t ? void 0 : t.parent_id)), f = (0, O.useChannelPresetSettings)(t), [E, T] = i.useState(!1), [m, x] = i.useState(!1);
                if (null == t) return null;
                let M = A.default.Messages.NO_CATEGORY,
                    p = (0, S.getChannelIconComponent)(t);
                t.type === v.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? M = A.default.Messages.NUM_CHANNELS.format({
                    num: null != s[t.id] ? s[t.id].length : 0
                }) : null != u && (M = A.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, h.computeChannelName)(u, _.default, N.default)
                }));
                let U = m ? C.Presets.CUSTOM : f.preset;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("div", {
                        className: l(L.row, L.channel),
                        children: [(0, n.jsxs)("div", {
                            className: l(L.rowName, L.modColor),
                            children: [null != p ? (0, n.jsx)(p, {
                                height: 20,
                                width: 20,
                                className: L.icon
                            }) : null, (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: L.modColor,
                                    children: (0, h.computeChannelName)(t, _.default, N.default)
                                }), (0, n.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: L.modColor,
                                    children: M
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: L.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: U === C.Presets.ALL_MESSAGES,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, C.Presets.ALL_MESSAGES), x(!1), T(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: L.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: U === C.Presets.MENTIONS,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, C.Presets.MENTIONS), x(!1), T(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: L.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: U === C.Presets.NOTHING,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, C.Presets.NOTHING), x(!1), T(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: L.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: U === C.Presets.CUSTOM,
                                    onChange: () => (x(!0), T(!0))
                                })
                            })
                        }), (0, n.jsx)(c.default, {
                            onClick: () => (0, O.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: L.removeButton
                        })]
                    }), (E || U === C.Presets.CUSTOM) && (0, n.jsxs)("div", {
                        className: L.customRow,
                        children: [(0, n.jsx)(o.FormSection, {
                            title: A.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE,
                            children: (0, n.jsx)(o.SingleSelect, {
                                value: f.unread,
                                options: (0, I.getUnreadSelectOptions)(),
                                onChange: e => {
                                    (0, O.updateChannelUnreadSetting)(t.guild_id, t.id, e), x(!1)
                                }
                            })
                        }), (0, n.jsx)(o.FormSection, {
                            title: A.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE,
                            children: (0, n.jsx)(o.SingleSelect, {
                                value: f.notification,
                                options: (0, I.getPushNotificationSelectOptions)(),
                                onChange: e => {
                                    (0, O.updateChannelNotificationSetting)(t.guild_id, t.id, e), x(!1)
                                }
                            })
                        })]
                    })]
                })
            }
        },
        432082: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("917351"),
                a = s.n(i),
                l = s("446674"),
                r = s("77078"),
                d = s("320954"),
                o = s("679653"),
                u = s("419830"),
                c = s("233069"),
                h = s("42203"),
                S = s("245997"),
                g = s("27618"),
                f = s("697218"),
                N = s("612434"),
                E = s("49111"),
                _ = s("782340"),
                T = s("57317");
            let m = e => {
                let {
                    channel: {
                        type: t
                    }
                } = e;
                return (0, c.isGuildSelectableChannelType)(t) || t === E.ChannelTypes.GUILD_CATEGORY
            };

            function O(e) {
                var t;
                let {
                    guildId: s,
                    onSelected: i
                } = e;
                let {
                    channels: c,
                    categories: O
                } = (t = s, (0, l.useStateFromStoresObject)([S.default], () => {
                    let e = S.default.getCategories(t);
                    return {
                        channels: (0, d.default)(e._categories, e, m),
                        categories: e
                    }
                })), x = a(c).filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type !== E.ChannelTypes.GUILD_CATEGORY || null != O[t.id] && O[t.id].length > 0
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        value: t.id,
                        label: (0, o.computeChannelName)(t, f.default, g.default)
                    }
                }).value();
                return (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        children: _.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    }), (0, n.jsx)("div", {
                        className: T.input,
                        children: (0, n.jsx)(r.SearchableSelect, {
                            value: "",
                            onChange: i,
                            options: x,
                            renderOptionLabel: e => {
                                let t = h.default.getChannel(e.value);
                                if (null == t) return e.label;
                                let s = h.default.getChannel(t.parent_id),
                                    i = null != s ? s.name : null;
                                return (0, n.jsx)(N.default, {
                                    icon: (0, u.getChannelIconComponent)(t),
                                    title: e.label,
                                    subtitle: i
                                })
                            },
                            placeholder: _.default.Messages.SELECT_CHANNEL_OR_CATEGORY
                        })
                    })]
                })
            }
        },
        348077: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            });
            var n = s("37983"),
                i = s("884691"),
                a = s("77078"),
                l = s("660279"),
                r = s("149943"),
                d = s("784905"),
                o = s("489618"),
                u = s("205382"),
                c = s("782340"),
                h = s("551040");

            function S(e) {
                return (0, n.jsx)("div", {
                    className: h.sectionHeader,
                    children: (0, n.jsx)(a.Heading, {
                        variant: "text-xs/bold",
                        className: h.sectionHeaderTitle,
                        color: "text-muted",
                        children: e.title
                    })
                })
            }

            function g(e) {
                return (0, n.jsxs)("div", {
                    children: [null != e.title && (0, n.jsx)(S, {
                        title: e.title
                    }), (0, n.jsx)("div", {
                        className: h.sectionContent,
                        children: e.children
                    })]
                })
            }

            function f(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsxs)(a.ModalHeader, {
                    className: h.header,
                    children: [(0, n.jsxs)("div", {
                        className: h.headerLeft,
                        children: [(0, n.jsx)(l.default, {
                            className: h.headerBell
                        }), (0, n.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.NOTIFICATION_SETTINGS
                        })]
                    }), (0, n.jsx)(a.ModalCloseButton, {
                        onClick: t
                    })]
                })
            }

            function N(e) {
                let t = i.useRef(null);
                return (0, n.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: e.transitionState,
                    "aria-label": c.default.Messages.NOTIFICATION_SETTINGS,
                    children: [(0, n.jsx)(f, {
                        onClose: e.onClose
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: h.content,
                        scrollerRef: t,
                        children: [(0, n.jsx)(g, {
                            children: (0, n.jsx)(o.default, {
                                guildId: e.guildId
                            })
                        }), (0, n.jsx)(g, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
                            children: (0, n.jsx)(u.default, {
                                guildId: e.guildId
                            })
                        }), (0, n.jsx)(g, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
                            children: (0, n.jsx)(r.default, {
                                guildId: e.guildId
                            })
                        }), (0, n.jsx)(S, {
                            title: c.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
                        }), (0, n.jsx)(d.default, {
                            guildId: e.guildId,
                            requestScrollToBottom: () => {
                                null != t && null != t.current && t.current.scrollToBottom({
                                    animate: !0
                                })
                            }
                        })]
                    })]
                })
            }
        },
        489618: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("866227"),
                a = s.n(i),
                l = s("65597"),
                r = s("77078"),
                d = s("519705"),
                o = s("305961"),
                u = s("282109"),
                c = s("47495"),
                h = s("468200"),
                S = s("782340"),
                g = s("518887");

            function f(e) {
                var t;
                let {
                    guildId: s
                } = e, i = (0, l.default)([o.default], () => o.default.getGuild(s)), f = (0, l.default)([u.default], () => u.default.isMuted(s)), N = (0, l.default)([u.default], () => u.default.getMuteConfig(s));
                return null == i ? null : (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: f,
                        onChange: e => {
                            d.default.updateGuildNotificationSettings(s, {
                                muted: e
                            })
                        },
                        style: {
                            marginBottom: 0
                        },
                        note: S.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                        children: S.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                            name: i.name
                        })
                    }), f && (0, n.jsxs)("div", {
                        className: g.mutedConfig,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                tag: "h3",
                                children: S.default.Messages.MUTE_UNTIL
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: function(e) {
                                    return null == e || null == e.end_time ? null : S.default.Messages.MUTED_UNTIL_TIME.format({
                                        endTime: new Date(e.end_time).toLocaleString(S.default.getLocale(), {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })
                                    })
                                }(N)
                            })]
                        }), (0, n.jsx)(r.SingleSelect, {
                            onChange: e => {
                                let t = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(s, {
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: t
                                    },
                                    muted: !0
                                })
                            },
                            options: (0, c.getMuteTimeOptions)(),
                            value: null !== (t = null == N ? void 0 : N.selected_time_window) && void 0 !== t ? t : h.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }
        },
        205382: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            }), s("222007");
            var n = s("37983"),
                i = s("884691"),
                a = s("414456"),
                l = s.n(a),
                r = s("65597"),
                d = s("77078"),
                o = s("519705"),
                u = s("282109"),
                c = s("593195"),
                h = s("956089"),
                S = s("277796"),
                g = s("546770"),
                f = s("286844"),
                N = s("507313"),
                E = s("49111"),
                _ = s("133335"),
                T = s("397336"),
                m = s("782340"),
                O = s("297697"),
                x = s("587621");
            let I = () => [{
                value: N.Presets.ALL_MESSAGES,
                name: m.default.Messages.NOTIFICATION_PRESET_1
            }, {
                value: N.Presets.MENTIONS,
                name: m.default.Messages.NOTIFICATION_PRESET_2
            }, {
                value: N.Presets.NOTHING,
                name: m.default.Messages.NOTIFICATION_PRESET_3
            }, {
                value: N.Presets.CUSTOM,
                name: m.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function C(e) {
                let {
                    guildId: t
                } = e, s = (0, r.default)([u.default], () => u.default.getGuildFlags(t)), a = (0, r.default)([u.default], () => {
                    let e = u.default.getGuildUnreadSetting(t),
                        s = u.default.getMessageNotifications(t);
                    return e === _.UnreadSetting.UNSET ? s === E.UserNotificationSettings.ALL_MESSAGES ? _.UnreadSetting.ALL_MESSAGES : _.UnreadSetting.ONLY_MENTIONS : e
                }), l = (0, r.default)([u.default], () => u.default.getMessageNotifications(t)), [c, h] = (0, i.useState)(!1), x = c ? N.Presets.CUSTOM : (0, N.presetFromSettings)(a, l), C = e => {
                    if (e === N.Presets.CUSTOM) {
                        h(!0);
                        return
                    }
                    h(!1), (0, g.updateGuildPreset)(t, e)
                };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(d.SegmentedControl, {
                        value: x,
                        options: I(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return C(t)
                        },
                        look: "pill"
                    }), (0, n.jsxs)("div", {
                        className: O.grid,
                        children: [(0, n.jsx)(M, {
                            unreadSetting: a
                        }), (0, n.jsx)(p, {
                            notificationSetting: l
                        })]
                    }), (0, n.jsxs)("div", {
                        className: O.grid,
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: O.grid,
                        children: [(0, n.jsx)(d.SingleSelect, {
                            className: O.input,
                            onChange: e => {
                                h(!1), o.default.updateGuildNotificationSettings(t, {
                                    flags: (0, S.withGuildUnreadFlags)(s, e === _.UnreadSetting.ALL_MESSAGES ? T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                })
                            },
                            options: (0, f.getUnreadSelectOptions)(),
                            value: a
                        }), (0, n.jsx)(d.SingleSelect, {
                            className: O.input,
                            value: l,
                            onChange: e => {
                                h(!1), o.default.updateGuildNotificationSettings(t, {
                                    message_notifications: e
                                })
                            },
                            options: (0, f.getPushNotificationSelectOptions)()
                        })]
                    })]
                })
            }

            function M(e) {
                let {
                    unreadSetting: t
                } = e, s = [{
                    badged: !0,
                    unread: !0,
                    muted: !1,
                    name: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
                }, {
                    badged: !1,
                    unread: !0,
                    muted: !0,
                    name: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
                }, {
                    badged: !1,
                    unread: !1,
                    muted: !0,
                    name: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
                }];
                return t === _.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, n.jsx)("div", {
                    className: O.channeList,
                    children: s.map(e => (0, n.jsxs)("div", {
                        className: O.channelListChannel,
                        children: [(0, n.jsxs)("div", {
                            className: O.channelListChannelName,
                            children: [(0, n.jsx)("div", {
                                className: l(O.unread, {
                                    [O.hidden]: !e.unread,
                                    [O.unreadMuted]: e.muted
                                })
                            }), (0, n.jsx)(c.default, {
                                height: 12,
                                width: 12,
                                className: l(O.channelListChannelIcon, {
                                    [O.muted]: e.muted
                                })
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, n.jsx)("div", {
                            className: l(O.badge, {
                                [O.hidden]: !e.badged
                            }),
                            children: (0, n.jsx)(h.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function p(e) {
                return (0, n.jsxs)("div", {
                    className: O.mockMessage,
                    children: [e.notificationSetting === E.UserNotificationSettings.NO_MESSAGES && (0, n.jsx)("div", {
                        className: O.mockMessageDisabled
                    }), (0, n.jsx)("div", {
                        children: (0, n.jsx)("img", {
                            className: O.mockMessageAvatar,
                            src: x,
                            alt: ""
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
                        }), e.notificationSetting === E.UserNotificationSettings.ALL_MESSAGES && (0, n.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== E.UserNotificationSettings.ALL_MESSAGES && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                tag: "span",
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                            })]
                        })]
                    })]
                })
            }
        },
        308305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ChannelNotificationSettings: function() {
                    return _
                }
            }), s("222007");
            var n = s("37983"),
                i = s("884691"),
                a = s("77078"),
                l = s("519705"),
                r = s("133403"),
                d = s("679653"),
                o = s("419830"),
                u = s("42203"),
                c = s("245997"),
                h = s("27618"),
                S = s("697218"),
                g = s("145131"),
                f = s("49111"),
                N = s("782340"),
                E = s("296884");
            class _ extends i.PureComponent {
                highlight() {
                    this.setState({
                        highlight: !0
                    }, () => {
                        null != this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(this.unhighlight, 1e3)
                    })
                }
                componentWillUnmount() {
                    null != this._timeout && clearTimeout(this._timeout)
                }
                setMessageNotification(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            channel: s
                        } = this.props,
                        n = s.getGuildId();
                    null != n && l.default.updateChannelOverrideSettings(n, s.id, {
                        message_notifications: e,
                        muted: t
                    })
                }
                handleRadioChange(e) {
                    this.setMessageNotification(e)
                }
                renderMessageNotificationsRadioOption(e) {
                    let {
                        messageNotifications: t,
                        guildMuted: s,
                        muted: i,
                        guildMessageNotifications: l,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === f.UserNotificationSettings.NULL) && e === l && (d = !0);
                    let o = a.Checkbox.Types.INVERTED;
                    return (i || t === f.UserNotificationSettings.NULL || null == t) && (o = a.Checkbox.Types.GHOST), (0, n.jsx)(a.Checkbox, {
                        value: !s && d,
                        disabled: s,
                        shape: a.Checkbox.Shapes.ROUND,
                        color: r,
                        type: o,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: s
                    } = this.props;
                    null != s.parent_id && (e = u.default.getChannel(s.parent_id));
                    let i = (0, o.getChannelIconComponent)(s);
                    if (s.type === f.ChannelTypes.GUILD_CATEGORY && null != s.guild_id && "" !== s.guild_id) {
                        let e = c.default.getCategories(s.guild_id);
                        t = N.default.Messages.NUM_CHANNELS.format({
                            num: null != e[s.id] ? e[s.id].length : 0
                        })
                    } else t = null != e ? N.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, S.default, h.default)
                    }) : N.default.Messages.NO_CATEGORY;
                    return (0, n.jsxs)(g.default, {
                        grow: 1,
                        className: E.nameContainer,
                        children: [null != i ? (0, n.jsx)(i, {
                            className: E.icon
                        }) : null, (0, n.jsxs)("div", {
                            className: E.channelNameContainer,
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: E.channelName,
                                children: (0, d.computeChannelName)(s, S.default, h.default)
                            }), (0, n.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: E.channelNameByline,
                                children: t
                            })]
                        })]
                    })
                }
                renderOptions() {
                    let {
                        muted: e,
                        guildMuted: t
                    } = this.props;
                    return (0, n.jsxs)(g.default, {
                        grow: 0,
                        shrink: 0,
                        className: E.checkboxGroup,
                        justify: g.default.Justify.AROUND,
                        align: g.default.Align.CENTER,
                        children: [(0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(f.UserNotificationSettings.NO_MESSAGES)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: E.checkboxMute,
                            children: (0, n.jsx)(a.Checkbox, {
                                value: e,
                                shape: a.Checkbox.Shapes.BOX,
                                type: a.Checkbox.Types.INVERTED,
                                onChange: this.handleMute
                            })
                        })]
                    })
                }
                render() {
                    let {
                        highlight: e
                    } = this.state;
                    return (0, n.jsxs)(a.Card, {
                        outline: !0,
                        editable: !0,
                        className: e ? E.overrideHighlight : E.override,
                        children: [this.renderName(), this.renderOptions(), (0, n.jsx)(r.default, {
                            className: E.removeOverride,
                            onClick: this.handleDelete
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        highlight: !1
                    }, this.unhighlight = () => {
                        this.setState({
                            highlight: !1
                        })
                    }, this.handleMute = (e, t) => {
                        let {
                            messageNotifications: s
                        } = this.props;
                        this.setMessageNotification(null != s ? s : f.UserNotificationSettings.NULL, t)
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(f.UserNotificationSettings.NULL, !1), null != e && e(t.id)
                    }
                }
            }
        },
        319165: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useMutedUntilText: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                a = s("782340");

            function l(e) {
                return null == e || null == e.end_time ? null : a.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(a.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function r(e) {
                let {
                    muteConfig: t,
                    className: s
                } = e, a = l(t);
                return null != a ? (0, n.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: s,
                    children: a
                }) : null
            }
        },
        612434: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("77078"),
                a = s("145131"),
                l = s("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: s,
                        icon: r
                    } = e;
                    return (0, n.jsxs)(a.default, {
                        className: l.wrapper,
                        align: a.default.Align.BASELINE,
                        children: [null != r && (0, n.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: l.icon
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: l.title,
                            children: t
                        }), null != s && "" !== s ? (0, n.jsx)(i.Text, {
                            variant: "text-xs/semibold",
                            className: l.subtitle,
                            children: s
                        }) : null]
                    })
                }
        },
        660279: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                a = s("524173"),
                l = s("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                        })
                    })
                }, a.BellIcon, void 0, {
                    size: 24
                })
        },
        619911: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s("37983");
            s("884691");
            var i = s("469563"),
                a = s("125094"),
                l = s("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: a,
                            fill: i
                        }), (0, n.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: a,
                            fill: i
                        })]
                    })
                }, a.ScreenArrowIcon, void 0, {
                    size: 24
                })
        }
    }
]);