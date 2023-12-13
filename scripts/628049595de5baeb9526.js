(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36685"], {
        856670: function(e, t, n) {
            "use strict";
            e.exports = n.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7e5dd7f59f96cc264184.svg"
        },
        587621: function(e, t, n) {
            "use strict";
            e.exports = n.p + "85d73a66b814f4f52563.png"
        },
        133403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("77078"),
                r = n("782340"),
                d = n("239636");
            let o = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: n,
                    "aria-label": i,
                    look: u = o.DEFAULT
                } = e;
                return (0, s.jsx)(l.Clickable, {
                    "aria-label": null != i ? i : r.default.Messages.REMOVE,
                    className: a(d.button, u, t),
                    onClick: n
                })
            }
            u.Looks = o
        },
        747593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("222007"), n("424973");
            var s, i, a = n("37983"),
                l = n("884691"),
                r = n("917351"),
                d = n.n(r),
                o = n("866227"),
                u = n.n(o),
                c = n("817736"),
                h = n("118810"),
                S = n("446674"),
                g = n("669491"),
                N = n("77078"),
                f = n("519705"),
                E = n("668597"),
                _ = n("320954"),
                T = n("679653"),
                m = n("419830"),
                O = n("47495"),
                x = n("348077"),
                I = n("308305"),
                C = n("319165"),
                p = n("233069"),
                M = n("42203"),
                v = n("245997"),
                A = n("525065"),
                L = n("305961"),
                R = n("27618"),
                U = n("282109"),
                j = n("697218"),
                F = n("145131"),
                G = n("612434"),
                b = n("449008"),
                H = n("701909"),
                D = n("49111"),
                P = n("468200"),
                w = n("782340"),
                y = n("296884");
            (i = s || (s = {})).MUTED = "muted", i.MESSAGE_NOTIFICATIONS = "message_notifications", i.SUPPRESS_EVERYONE = "suppress_everyone", i.SUPPRESS_ROLES = "suppress_roles", i.MOBILE_PUSH = "mobile_push", i.MUTE_EVENTS = "mute_scheduled_events", i.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class k extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: n,
                        channelOverridesProp: s
                    } = t;
                    return e.channelOverrides !== s ? (n = new Set(n), (0, O.filterOverrides)(e.channelOverrides).forEach(e => n.add(e)), {
                        overrides: n,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: n
                    } = this.state, s = null != n ? this._channelRefs[n] : null;
                    if (null != this._scroller && null != s && n !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(s);
                        if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
                            var i;
                            null === (i = this._scroller) || void 0 === i || i.scrollIntoViewNode({
                                node: e,
                                animate: !0,
                                padding: 20,
                                callback: () => this.setState({
                                    lastSelected: null
                                })
                            }), s.highlight()
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
                    f.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    })
                }
                handleRadioChange(e, t) {
                    let {
                        value: n
                    } = t;
                    f.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: n
                    })
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(N.ModalHeader, {
                        children: [(0, a.jsxs)(F.default.Child, {
                            children: [(0, a.jsx)(N.Heading, {
                                variant: "heading-lg/semibold",
                                children: w.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(N.Text, {
                                variant: "text-md/normal",
                                className: y.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(F.default.Child, {
                            grow: 0,
                            children: (0, a.jsx)(N.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                }
                renderFooter() {
                    return (0, a.jsx)(N.ModalFooter, {
                        children: (0, a.jsx)(N.Button, {
                            onClick: this.props.onClose,
                            children: w.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: n,
                        guild: s
                    } = this.props, i = null !== (e = null == n ? void 0 : n.selected_time_window) && void 0 !== e ? e : P.MuteUntilSeconds.ALWAYS;
                    return null == s ? null : (0, a.jsxs)(N.FormItem, {
                        className: y.largeSpacing,
                        children: [(0, a.jsx)(N.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: this.handleCheckboxChange.bind(this, "muted"),
                            note: w.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: w.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: s.name
                            })
                        }), t ? (0, a.jsxs)(F.default, {
                            className: y.spacing,
                            align: F.default.Align.CENTER,
                            children: [(0, a.jsxs)(F.default, {
                                direction: F.default.Direction.VERTICAL,
                                className: y.muteUntilTextWrapper,
                                children: [(0, a.jsx)(N.FormTitle, {
                                    tag: "h3",
                                    className: y.muteUntilTitle,
                                    children: w.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(C.default, {
                                    className: y.muteUntilText,
                                    muteConfig: n
                                })]
                            }), (0, a.jsx)(N.SingleSelect, {
                                className: y.muteTimeSelector,
                                options: (0, O.getMuteTimeOptions)(),
                                value: i,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(N.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: n,
                        memberCount: s
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: y.spacing,
                        children: [(0, a.jsx)(N.FormItem, {
                            title: w.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: y.largeSpacing,
                            children: (0, a.jsx)(N.RadioGroup, {
                                disabled: n,
                                value: t,
                                onChange: this.handleRadioChange.bind(this, "message_notifications"),
                                options: (e = s, [{
                                    name: w.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: D.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= D.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? w.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: w.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: D.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: w.default.Messages.FORM_LABEL_NOTHING,
                                    value: D.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(N.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: n,
                        muted: s,
                        muteEvents: i,
                        notifyHighlights: l,
                        guildId: r
                    } = this.props;
                    return (0, a.jsxs)(N.FormItem, {
                        className: y.largeSpacing,
                        children: [(0, a.jsx)(N.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, "suppress_everyone"),
                            value: e,
                            children: w.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(N.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, "suppress_roles"),
                            value: t,
                            children: w.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(N.FormSwitch, {
                            onChange: e => {
                                f.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? D.HighlightSettings.DISABLED : D.HighlightSettings.ENABLED
                                })
                            },
                            value: s || l === D.HighlightSettings.DISABLED,
                            disabled: s,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N.Text, {
                                    variant: "text-sm/normal",
                                    children: w.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: y.highlightsLink,
                                    children: (0, a.jsx)(N.Anchor, {
                                        href: H.default.getArticleURL(D.HelpdeskArticles.HIGHLIGHTS),
                                        children: w.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: w.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(N.FormSwitch, {
                            value: i,
                            onChange: this.handleCheckboxChange.bind(this, "mute_scheduled_events"),
                            children: w.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(N.FormSwitch, {
                            value: !s && n,
                            disabled: s,
                            onChange: this.handleCheckboxChange.bind(this, "mobile_push"),
                            children: w.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, n = d(e).filter(e => {
                        let {
                            channel: n
                        } = e;
                        return n.type !== D.ChannelTypes.GUILD_CATEGORY || null != t[n.id] && t[n.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, T.computeChannelName)(t, j.default, R.default)
                        }
                    }).value();
                    return (0, a.jsxs)(N.FormItem, {
                        title: w.default.Messages.NOTIFICATION_OVERRIDES,
                        className: y.largeSpacing,
                        children: [(0, a.jsx)(N.FormText, {
                            type: N.FormText.Types.DESCRIPTION,
                            className: y.smallSpacing,
                            children: w.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(N.SearchableSelect, {
                            value: "",
                            placeholder: w.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: n,
                            onChange: this.handleSelectChange
                        })]
                    })
                }
                renderChannelNotifications() {
                    let {
                        channelOverrides: e,
                        muted: t,
                        channels: n,
                        messageNotifications: s,
                        categories: i,
                        checkboxColor: l
                    } = this.props, {
                        overrides: r
                    } = this.state, d = n.map(n => {
                        let {
                            channel: d
                        } = n;
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
                            guildMessageNotifications: s,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: l
                        }, d.id)
                    }).filter(b.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: y.overridePlaceholder,
                        children: (0, a.jsx)(N.Text, {
                            className: y.overrideHeader,
                            variant: "text-sm/semibold",
                            children: w.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: y.overrideList,
                        children: [(0, a.jsxs)(F.default, {
                            children: [(0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: y.headerName,
                                children: w.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: w.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: w.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: w.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: y.headerOption,
                                children: (0, a.jsx)(N.Tooltip, {
                                    text: w.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        children: w.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    return (0, a.jsxs)(N.ModalRoot, {
                        "aria-label": w.default.Messages.NOTIFICATION_SETTINGS,
                        size: N.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0, a.jsxs)(N.ModalContent, {
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
                        f.default.updateGuildNotificationSettings(this.props.guildId, {
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
                        let t = M.default.getChannel(e.value);
                        if (null == t) return e.label;
                        let n = M.default.getChannel(t.parent_id),
                            s = null != n ? n.name : null;
                        return (0, a.jsx)(G.default, {
                            icon: (0, m.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: s
                        })
                    }
                }
            }

            function B(e) {
                let {
                    guildId: t,
                    ...n
                } = e, s = (0, S.useStateFromStoresObject)([v.default, L.default, A.default, U.default], () => {
                    let e = v.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: L.default.getGuild(t),
                        memberCount: A.default.getMemberCount(t),
                        suppressEveryone: U.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: U.default.isSuppressRolesEnabled(t),
                        muteEvents: U.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: U.default.isMobilePushEnabled(t),
                        muted: U.default.isMuted(t),
                        muteConfig: U.default.getMuteConfig(t),
                        messageNotifications: U.default.getMessageNotifications(t),
                        channelOverrides: U.default.getChannelOverrides(t),
                        channels: (0, _.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, p.isGuildSelectableChannelType)(t) || t === D.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: U.default.getNotifyHighlights(t)
                    }
                }), i = (0, N.useToken)(g.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(k, {
                    ...s,
                    ...n,
                    checkboxColor: i
                })
            }

            function V(e) {
                let t = (0, O.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    n = t ? x.default : B;
                return (0, a.jsx)(n, {
                    ...e
                })
            }
        },
        524173: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BellIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
                        className: r
                    })
                })
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return h
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return N
                }
            }), n("702976");
            var s = n("446674"),
                i = n("668597"),
                a = n("282109"),
                l = n("568734"),
                r = n("640497"),
                d = n("49111"),
                o = n("468200"),
                u = n("397336"),
                c = n("782340");

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
                return Object.keys(e).filter(n => {
                    var s, a;
                    let r = e[n].message_notifications !== d.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, i.computeIsMuted)(e[n])
                })
            }

            function N(e) {
                let t = (0, s.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return r.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        437756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return S
                },
                useChannelPresetInheritance: function() {
                    return g
                },
                updateChannelPreset: function() {
                    return N
                },
                updateChannelToGuildDefault: function() {
                    return f
                },
                updateChannelUnreadSetting: function() {
                    return E
                },
                updateChannelNotificationSetting: function() {
                    return _
                }
            }), n("222007");
            var s = n("65597"),
                i = n("519705"),
                a = n("42203"),
                l = n("282109"),
                r = n("47495"),
                d = n("277796"),
                o = n("507313"),
                u = n("49111"),
                c = n("133335"),
                h = n("397336");

            function S(e) {
                let t = (0, s.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    n = (0, s.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, o.presetFromSettings)(t, n)
                }
            }

            function g(e) {
                let t = (0, s.useStateFromStoresArray)([l.default], () => (0, r.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, i] = (0, s.useStateFromStoresArray)([l.default, a.default], () => {
                        let n = a.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, o.presetName)((0, o.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, o.presetName)((0, o.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: i
                }
            }

            function N(e, t, n) {
                let s = l.default.getChannelIdFlags(e, t);
                n === o.Presets.EVERYTHING ? i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(s, h.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }) : n === o.Presets.ESSENTIALS ? i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, d.withChannelUnreadFlags)(s, h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }) : n === o.Presets.NOTHING && i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(s, h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }

            function f(e, t) {
                i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NULL,
                    flags: (0, d.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                })
            }

            function E(e, t, n) {
                let s = l.default.getChannelIdFlags(e, t);
                i.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, d.withChannelUnreadFlags)(s, n === c.UnreadSetting.ALL_MESSAGES ? h.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }

            function _(e, t, n) {
                i.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                })
            }
        },
        277796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
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
            var s = n("568734"),
                i = n("397336");

            function a(e, t) {
                var n;
                return s.addFlag((n = e, s.removeFlags(n, i.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => s.removeFlags(e, i.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function r(e, t) {
                return s.addFlag(l(e), t)
            }
        },
        546770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateGuildPreset: function() {
                    return o
                }
            }), n("65597");
            var s = n("519705"),
                i = n("282109"),
                a = n("277796"),
                l = n("507313"),
                r = n("49111"),
                d = n("397336");

            function o(e, t) {
                let n = i.default.getGuildFlags(e);
                t === l.Presets.EVERYTHING ? s.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, a.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }) : t === l.Presets.ESSENTIALS ? s.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, a.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }) : t === l.Presets.NOTHING && s.default.updateGuildNotificationSettings(e, {
                    message_notifications: r.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, a.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }
        },
        286844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPushNotificationSelectOptions: function() {
                    return l
                },
                getUnreadSelectOptions: function() {
                    return r
                }
            });
            var s = n("49111"),
                i = n("133335"),
                a = n("782340");
            let l = () => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: s.UserNotificationSettings.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: s.UserNotificationSettings.ONLY_MENTIONS
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    value: s.UserNotificationSettings.NO_MESSAGES
                }],
                r = () => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: i.UnreadSetting.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: i.UnreadSetting.ONLY_MENTIONS
                }]
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return s
                },
                presetFromSettings: function() {
                    return o
                },
                presetName: function() {
                    return u
                }
            }), n("794252");
            var s, i, a = n("506838"),
                l = n("49111"),
                r = n("133335"),
                d = n("782340");

            function o(e, t) {
                return (0, a.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, r.UnreadSetting.ALL_MESSAGES], () => "everything").with([l.UserNotificationSettings.ONLY_MENTIONS, r.UnreadSetting.UNSET], () => "essentials").with([l.UserNotificationSettings.ONLY_MENTIONS, r.UnreadSetting.ONLY_MENTIONS], () => "essentials").with([l.UserNotificationSettings.NO_MESSAGES, r.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, r.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function u(e) {
                return (0, a.match)(e).with("everything", () => d.default.Messages.NOTIFICATION_PRESET_EVERYTHING).with("essentials", () => d.default.Messages.NOTIFICATION_PRESET_ESSENTIALS).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_NOTHING).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(i = s || (s = {})).EVERYTHING = "everything", i.ESSENTIALS = "essentials", i.NOTHING = "nothing", i.CUSTOM = "custom"
        },
        661740: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("884691");

            function i(e, t) {
                let n = s.useRef(e);
                s.useEffect(() => {
                    e.length > n.current.length && t(), n.current = e
                }, [e, t])
            }
        },
        149943: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("519705"),
                r = n("282109"),
                d = n("49111"),
                o = n("782340"),
                u = n("775247");

            function c(e) {
                let {
                    guildId: t
                } = e, n = (0, i.useStateFromStoresObject)([r.default], () => ({
                    highligths: r.default.getNotifyHighlights(t),
                    mobilePush: r.default.isMobilePushEnabled(t),
                    suppressRoles: r.default.isSuppressRolesEnabled(t),
                    suppressEveryone: r.default.isSuppressEveryoneEnabled(t),
                    muteScheduledEvents: r.default.isMuteScheduledEventsEnabled(t)
                })), a = l.default.updateGuildNotificationSettings;
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(h, {
                        value: n.suppressEveryone,
                        title: o.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        })
                    }), (0, s.jsx)(h, {
                        value: n.suppressRoles,
                        title: o.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        })
                    }), (0, s.jsx)(h, {
                        subtitle: o.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: o.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: n.highligths === d.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? d.HighlightSettings.ENABLED : d.HighlightSettings.DISABLED
                        })
                    }), (0, s.jsx)(h, {
                        value: n.muteScheduledEvents,
                        title: o.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        })
                    }), (0, s.jsx)(h, {
                        value: n.mobilePush,
                        title: o.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        })
                    })]
                })
            }

            function h(e) {
                return (0, s.jsx)(a.FormSwitch, {
                    hideBorder: !0,
                    className: u.advanceSetting,
                    value: e.value,
                    onChange: e.onChange,
                    note: e.subtitle,
                    children: e.title
                })
            }
        },
        784905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                r = n("446674"),
                d = n("669491"),
                o = n("77078"),
                u = n("519705"),
                c = n("133403"),
                h = n("679653"),
                S = n("419830"),
                g = n("42203"),
                N = n("245997"),
                f = n("27618"),
                E = n("282109"),
                _ = n("697218"),
                T = n("449008"),
                m = n("47495"),
                O = n("437756"),
                x = n("277796"),
                I = n("286844"),
                C = n("507313"),
                p = n("661740"),
                M = n("432082"),
                v = n("49111"),
                A = n("782340"),
                L = n("105346");

            function R(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: n
                } = e, i = (0, r.useStateFromStoresArray)([g.default, E.default], () => {
                    let e = (0, m.filterOverrides)(E.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => g.default.getChannel(e)).filter(T.isNotNullish)
                });
                (0, p.default)(i, () => n());
                let a = (0, r.useStateFromStores)([N.default], () => N.default.getCategories(t)),
                    l = i.map((e, t) => (0, s.jsxs)("div", {
                        className: L.channelRow,
                        children: [(0, s.jsx)(U, {
                            channel: e,
                            categories: a
                        }, e.id), t < i.length - 1 && (0, s.jsx)("div", {
                            className: L.separator
                        })]
                    }, e.id));
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(M.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != i.find(t => t.id === e)) return;
                            let n = g.default.getChannel(e);
                            null != n && u.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: E.default.resolvedMessageNotifications(n),
                                flags: (0, x.withChannelUnreadFlags)(E.default.getChannelIdFlags(n.guild_id, n.id), E.default.resolveUnreadSetting(n))
                            })
                        }
                    }), l.length > 0 && (0, s.jsxs)("div", {
                        className: L.table,
                        children: [(0, s.jsxs)("div", {
                            className: L.row,
                            children: [(0, s.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowName,
                                children: A.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_EVERYTHING
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_ESSENTIALS
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_NOTHING
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: L.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), l.length > 0 && (0, s.jsx)("div", {
                            className: L.channels,
                            children: l
                        })]
                    })]
                })
            }

            function U(e) {
                let {
                    channel: t,
                    categories: n
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), u = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(null == t ? void 0 : t.parent_id)), N = (0, O.useChannelPresetSettings)(t), [E, T] = i.useState(!1), [m, x] = i.useState(!1);
                if (null == t) return null;
                let p = A.default.Messages.NO_CATEGORY,
                    M = (0, S.getChannelIconComponent)(t);
                t.type === v.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? p = A.default.Messages.NUM_CHANNELS.format({
                    num: null != n[t.id] ? n[t.id].length : 0
                }) : null != u && (p = A.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, h.computeChannelName)(u, _.default, f.default)
                }));
                let R = m ? C.Presets.CUSTOM : N.preset;
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)("div", {
                        className: l(L.row, L.channel),
                        children: [(0, s.jsxs)("div", {
                            className: l(L.rowName, L.modColor),
                            children: [null != M ? (0, s.jsx)(M, {
                                height: 20,
                                width: 20,
                                className: L.icon
                            }) : null, (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: L.modColor,
                                    children: (0, h.computeChannelName)(t, _.default, f.default)
                                }), (0, s.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: L.modColor,
                                    children: p
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: L.rowOption,
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: R === C.Presets.EVERYTHING,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, C.Presets.EVERYTHING), x(!1), T(!1))
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: L.rowOption,
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: R === C.Presets.ESSENTIALS,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, C.Presets.ESSENTIALS), x(!1), T(!1))
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: L.rowOption,
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: R === C.Presets.NOTHING,
                                    onChange: () => ((0, O.updateChannelPreset)(t.guild_id, t.id, C.Presets.NOTHING), x(!1), T(!1))
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: L.rowOption,
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: R === C.Presets.CUSTOM,
                                    onChange: () => (x(!0), T(!0))
                                })
                            })
                        }), (0, s.jsx)(c.default, {
                            onClick: () => (0, O.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: L.removeButton
                        })]
                    }), (E || R === C.Presets.CUSTOM) && (0, s.jsxs)("div", {
                        className: L.customRow,
                        children: [(0, s.jsx)(o.FormSection, {
                            title: A.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE,
                            children: (0, s.jsx)(o.SingleSelect, {
                                value: N.unread,
                                options: (0, I.getUnreadSelectOptions)(),
                                onChange: e => {
                                    (0, O.updateChannelUnreadSetting)(t.guild_id, t.id, e), x(!1)
                                }
                            })
                        }), (0, s.jsx)(o.FormSection, {
                            title: A.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE,
                            children: (0, s.jsx)(o.SingleSelect, {
                                value: N.notification,
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
        432082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                r = n("77078"),
                d = n("320954"),
                o = n("679653"),
                u = n("419830"),
                c = n("233069"),
                h = n("42203"),
                S = n("245997"),
                g = n("27618"),
                N = n("697218"),
                f = n("612434"),
                E = n("49111"),
                _ = n("782340"),
                T = n("57317");
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
                    guildId: n,
                    onSelected: i
                } = e;
                let {
                    channels: c,
                    categories: O
                } = (t = n, (0, l.useStateFromStoresObject)([S.default], () => {
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
                        label: (0, o.computeChannelName)(t, N.default, g.default)
                    }
                }).value();
                return (0, s.jsxs)(r.FormItem, {
                    children: [(0, s.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        children: _.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    }), (0, s.jsx)("div", {
                        className: T.input,
                        children: (0, s.jsx)(r.SearchableSelect, {
                            value: "",
                            onChange: i,
                            options: x,
                            renderOptionLabel: e => {
                                let t = h.default.getChannel(e.value);
                                if (null == t) return e.label;
                                let n = h.default.getChannel(t.parent_id),
                                    i = null != n ? n.name : null;
                                return (0, s.jsx)(f.default, {
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
        348077: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                i = n("884691"),
                a = n("77078"),
                l = n("660279"),
                r = n("149943"),
                d = n("784905"),
                o = n("489618"),
                u = n("205382"),
                c = n("782340"),
                h = n("551040");

            function S(e) {
                return (0, s.jsx)("div", {
                    className: h.sectionHeader,
                    children: (0, s.jsx)(a.Heading, {
                        variant: "text-xs/bold",
                        className: h.sectionHeaderTitle,
                        color: "text-muted",
                        children: e.title
                    })
                })
            }

            function g(e) {
                return (0, s.jsxs)("div", {
                    children: [null != e.title && (0, s.jsx)(S, {
                        title: e.title
                    }), (0, s.jsx)("div", {
                        className: h.sectionContent,
                        children: e.children
                    })]
                })
            }

            function N(e) {
                let {
                    onClose: t
                } = e;
                return (0, s.jsxs)(a.ModalHeader, {
                    className: h.header,
                    children: [(0, s.jsxs)("div", {
                        className: h.headerLeft,
                        children: [(0, s.jsx)(l.default, {
                            className: h.headerBell
                        }), (0, s.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.NOTIFICATION_SETTINGS
                        })]
                    }), (0, s.jsx)(a.ModalCloseButton, {
                        onClick: t
                    })]
                })
            }

            function f(e) {
                let t = i.useRef(null);
                return (0, s.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: e.transitionState,
                    "aria-label": c.default.Messages.NOTIFICATION_SETTINGS,
                    children: [(0, s.jsx)(N, {
                        onClose: e.onClose
                    }), (0, s.jsxs)(a.ModalContent, {
                        className: h.content,
                        scrollerRef: t,
                        children: [(0, s.jsx)(g, {
                            children: (0, s.jsx)(o.default, {
                                guildId: e.guildId
                            })
                        }), (0, s.jsx)(g, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
                            children: (0, s.jsx)(u.default, {
                                guildId: e.guildId
                            })
                        }), (0, s.jsx)(g, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
                            children: (0, s.jsx)(r.default, {
                                guildId: e.guildId
                            })
                        }), (0, s.jsx)(S, {
                            title: c.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
                        }), (0, s.jsx)(d.default, {
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
        489618: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("866227"),
                a = n.n(i),
                l = n("65597"),
                r = n("77078"),
                d = n("519705"),
                o = n("305961"),
                u = n("282109"),
                c = n("47495"),
                h = n("468200"),
                S = n("782340"),
                g = n("518887");

            function N(e) {
                var t;
                let {
                    guildId: n
                } = e, i = (0, l.default)([o.default], () => o.default.getGuild(n)), N = (0, l.default)([u.default], () => u.default.isMuted(n)), f = (0, l.default)([u.default], () => u.default.getMuteConfig(n));
                return null == i ? null : (0, s.jsxs)(r.FormItem, {
                    children: [(0, s.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: N,
                        onChange: e => {
                            d.default.updateGuildNotificationSettings(n, {
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
                    }), N && (0, s.jsxs)("div", {
                        className: g.mutedConfig,
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(r.FormTitle, {
                                tag: "h3",
                                children: S.default.Messages.MUTE_UNTIL
                            }), (0, s.jsx)(r.Text, {
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
                                }(f)
                            })]
                        }), (0, s.jsx)(r.SingleSelect, {
                            onChange: e => {
                                let t = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(n, {
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: t
                                    },
                                    muted: !0
                                })
                            },
                            options: (0, c.getMuteTimeOptions)(),
                            value: null !== (t = null == f ? void 0 : f.selected_time_window) && void 0 !== t ? t : h.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }
        },
        205382: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                r = n("65597"),
                d = n("77078"),
                o = n("519705"),
                u = n("282109"),
                c = n("593195"),
                h = n("956089"),
                S = n("277796"),
                g = n("546770"),
                N = n("286844"),
                f = n("507313"),
                E = n("49111"),
                _ = n("133335"),
                T = n("397336"),
                m = n("782340"),
                O = n("297697"),
                x = n("587621");
            let I = () => [{
                value: f.Presets.EVERYTHING,
                name: m.default.Messages.NOTIFICATION_PRESET_EVERYTHING
            }, {
                value: f.Presets.ESSENTIALS,
                name: m.default.Messages.NOTIFICATION_PRESET_ESSENTIALS
            }, {
                value: f.Presets.NOTHING,
                name: m.default.Messages.NOTIFICATION_PRESET_NOTHING
            }, {
                value: f.Presets.CUSTOM,
                name: m.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function C(e) {
                let {
                    guildId: t
                } = e, n = (0, r.default)([u.default], () => u.default.getGuildFlags(t)), a = (0, r.default)([u.default], () => {
                    let e = u.default.getGuildUnreadSetting(t),
                        n = u.default.getMessageNotifications(t);
                    return e === _.UnreadSetting.UNSET ? n === E.UserNotificationSettings.ALL_MESSAGES ? _.UnreadSetting.ALL_MESSAGES : _.UnreadSetting.ONLY_MENTIONS : e
                }), l = (0, r.default)([u.default], () => u.default.getMessageNotifications(t)), [c, h] = (0, i.useState)(!1), x = c ? f.Presets.CUSTOM : (0, f.presetFromSettings)(a, l), C = e => {
                    if (e === f.Presets.CUSTOM) {
                        h(!0);
                        return
                    }
                    h(!1), (0, g.updateGuildPreset)(t, e)
                };
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(d.SegmentedControl, {
                        value: x,
                        options: I(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return C(t)
                        },
                        look: "pill"
                    }), (0, s.jsxs)("div", {
                        className: O.grid,
                        children: [(0, s.jsx)(p, {
                            unreadSetting: a
                        }), (0, s.jsx)(M, {
                            notificationSetting: l
                        })]
                    }), (0, s.jsxs)("div", {
                        className: O.grid,
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, s.jsxs)("div", {
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: O.grid,
                        children: [(0, s.jsx)(d.SingleSelect, {
                            className: O.input,
                            onChange: e => {
                                h(!1), o.default.updateGuildNotificationSettings(t, {
                                    flags: (0, S.withGuildUnreadFlags)(n, e === _.UnreadSetting.ALL_MESSAGES ? T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                })
                            },
                            options: (0, N.getUnreadSelectOptions)(),
                            value: a
                        }), (0, s.jsx)(d.SingleSelect, {
                            className: O.input,
                            value: l,
                            onChange: e => {
                                h(!1), o.default.updateGuildNotificationSettings(t, {
                                    message_notifications: e
                                })
                            },
                            options: (0, N.getPushNotificationSelectOptions)()
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    unreadSetting: t
                } = e, n = [{
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
                return t === _.UnreadSetting.ALL_MESSAGES && (n[1].muted = !1), (0, s.jsx)("div", {
                    className: O.channeList,
                    children: n.map(e => (0, s.jsxs)("div", {
                        className: O.channelListChannel,
                        children: [(0, s.jsxs)("div", {
                            className: O.channelListChannelName,
                            children: [(0, s.jsx)("div", {
                                className: l(O.unread, {
                                    [O.hidden]: !e.unread,
                                    [O.unreadMuted]: e.muted
                                })
                            }), (0, s.jsx)(c.default, {
                                height: 12,
                                width: 12,
                                className: l(O.channelListChannelIcon, {
                                    [O.muted]: e.muted
                                })
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, s.jsx)("div", {
                            className: l(O.badge, {
                                [O.hidden]: !e.badged
                            }),
                            children: (0, s.jsx)(h.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function M(e) {
                return (0, s.jsxs)("div", {
                    className: O.mockMessage,
                    children: [e.notificationSetting === E.UserNotificationSettings.NO_MESSAGES && (0, s.jsx)("div", {
                        className: O.mockMessageDisabled
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsx)("img", {
                            className: O.mockMessageAvatar,
                            src: x,
                            alt: ""
                        })
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            children: "Lone Wanderer"
                        }), e.notificationSetting === E.UserNotificationSettings.ALL_MESSAGES && (0, s.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: m.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== E.UserNotificationSettings.ALL_MESSAGES && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, s.jsx)(d.Text, {
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
        308305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelNotificationSettings: function() {
                    return _
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("77078"),
                l = n("519705"),
                r = n("133403"),
                d = n("679653"),
                o = n("419830"),
                u = n("42203"),
                c = n("245997"),
                h = n("27618"),
                S = n("697218"),
                g = n("145131"),
                N = n("49111"),
                f = n("782340"),
                E = n("296884");
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
                            channel: n
                        } = this.props,
                        s = n.getGuildId();
                    null != s && l.default.updateChannelOverrideSettings(s, n.id, {
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
                        guildMuted: n,
                        muted: i,
                        guildMessageNotifications: l,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === N.UserNotificationSettings.NULL) && e === l && (d = !0);
                    let o = a.Checkbox.Types.INVERTED;
                    return (i || t === N.UserNotificationSettings.NULL || null == t) && (o = a.Checkbox.Types.GHOST), (0, s.jsx)(a.Checkbox, {
                        value: !n && d,
                        disabled: n,
                        shape: a.Checkbox.Shapes.ROUND,
                        color: r,
                        type: o,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: n
                    } = this.props;
                    null != n.parent_id && (e = u.default.getChannel(n.parent_id));
                    let i = (0, o.getChannelIconComponent)(n);
                    if (n.type === N.ChannelTypes.GUILD_CATEGORY && null != n.guild_id && "" !== n.guild_id) {
                        let e = c.default.getCategories(n.guild_id);
                        t = f.default.Messages.NUM_CHANNELS.format({
                            num: null != e[n.id] ? e[n.id].length : 0
                        })
                    } else t = null != e ? f.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, S.default, h.default)
                    }) : f.default.Messages.NO_CATEGORY;
                    return (0, s.jsxs)(g.default, {
                        grow: 1,
                        className: E.nameContainer,
                        children: [null != i ? (0, s.jsx)(i, {
                            className: E.icon
                        }) : null, (0, s.jsxs)("div", {
                            className: E.channelNameContainer,
                            children: [(0, s.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: E.channelName,
                                children: (0, d.computeChannelName)(n, S.default, h.default)
                            }), (0, s.jsx)(a.Text, {
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
                    return (0, s.jsxs)(g.default, {
                        grow: 0,
                        shrink: 0,
                        className: E.checkboxGroup,
                        justify: g.default.Justify.AROUND,
                        align: g.default.Align.CENTER,
                        children: [(0, s.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(N.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, s.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(N.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, s.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? E.checkboxContainerMuted : E.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(N.UserNotificationSettings.NO_MESSAGES)
                        }), (0, s.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: E.checkboxMute,
                            children: (0, s.jsx)(a.Checkbox, {
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
                    return (0, s.jsxs)(a.Card, {
                        outline: !0,
                        editable: !0,
                        className: e ? E.overrideHighlight : E.override,
                        children: [this.renderName(), this.renderOptions(), (0, s.jsx)(r.default, {
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
                            messageNotifications: n
                        } = this.props;
                        this.setMessageNotification(null != n ? n : N.UserNotificationSettings.NULL, t)
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(N.UserNotificationSettings.NULL, !1), null != e && e(t.id)
                    }
                }
            }
        },
        319165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("782340");

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
                    className: n
                } = e, a = l(t);
                return null != a ? (0, s.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: a
                }) : null
            }
        },
        612434: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("145131"),
                l = n("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: n,
                        icon: r
                    } = e;
                    return (0, s.jsxs)(a.default, {
                        className: l.wrapper,
                        align: a.default.Align.BASELINE,
                        children: [null != r && (0, s.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: l.icon
                        }), (0, s.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: l.title,
                            children: t
                        }), null != n && "" !== n ? (0, s.jsx)(i.Text, {
                            variant: "text-xs/semibold",
                            className: l.subtitle,
                            children: n
                        }) : null]
                    })
                }
        },
        660279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("524173"),
                l = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, s.jsx)("path", {
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
        619911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("125094"),
                l = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: a,
                            fill: i
                        }), (0, s.jsx)("path", {
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