(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36685"], {
        856670: function(e, t, i) {
            "use strict";
            e.exports = i.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, i) {
            "use strict";
            e.exports = i.p + "7e5dd7f59f96cc264184.svg"
        },
        587621: function(e, t, i) {
            "use strict";
            e.exports = i.p + "85d73a66b814f4f52563.png"
        },
        133403: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("414456"),
                a = i.n(s),
                l = i("77078"),
                r = i("782340"),
                d = i("239636");
            let o = Object.freeze({
                DEFAULT: d.default,
                FILLED: d.filled
            });

            function u(e) {
                let {
                    className: t,
                    onClick: i,
                    "aria-label": s,
                    look: u = o.DEFAULT
                } = e;
                return (0, n.jsx)(l.Clickable, {
                    "aria-label": null != s ? s : r.default.Messages.REMOVE,
                    className: a(d.button, u, t),
                    onClick: i
                })
            }
            u.Looks = o
        },
        747593: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return Y
                }
            }), i("222007"), i("424973");
            var n, s, a = i("37983"),
                l = i("884691"),
                r = i("917351"),
                d = i.n(r),
                o = i("866227"),
                u = i.n(o),
                c = i("817736"),
                h = i("118810"),
                S = i("446674"),
                g = i("669491"),
                f = i("77078"),
                N = i("519705"),
                E = i("668597"),
                _ = i("320954"),
                m = i("679653"),
                T = i("419830"),
                O = i("47495"),
                x = i("348077"),
                I = i("308305"),
                C = i("319165"),
                M = i("233069"),
                p = i("42203"),
                v = i("245997"),
                L = i("525065"),
                A = i("305961"),
                U = i("27618"),
                R = i("282109"),
                j = i("697218"),
                b = i("145131"),
                F = i("612434"),
                G = i("449008"),
                P = i("701909"),
                D = i("34676"),
                w = i("49111"),
                H = i("468200"),
                y = i("782340"),
                k = i("296884");
            (s = n || (n = {})).MUTED = "muted", s.MESSAGE_NOTIFICATIONS = "message_notifications", s.SUPPRESS_EVERYONE = "suppress_everyone", s.SUPPRESS_ROLES = "suppress_roles", s.MOBILE_PUSH = "mobile_push", s.MUTE_EVENTS = "mute_scheduled_events", s.NOTIFY_HIGHLIGHTS = "notify_highlights";
            class B extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        overrides: i,
                        channelOverridesProp: n
                    } = t;
                    return e.channelOverrides !== n ? (i = new Set(i), (0, O.filterOverrides)(e.channelOverrides).forEach(e => i.add(e)), {
                        overrides: i,
                        channelOverridesProp: e.channelOverrides
                    }) : null
                }
                componentDidUpdate(e, t) {
                    let {
                        lastSelected: i
                    } = this.state, n = null != i ? this._channelRefs[i] : null;
                    if (null != this._scroller && null != n && i !== t.lastSelected) {
                        let e = (0, c.findDOMNode)(n);
                        if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
                            var s;
                            null === (s = this._scroller) || void 0 === s || s.scrollIntoViewNode({
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
                handleCheckboxChange(e, t, i) {
                    N.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    }, i)
                }
                handleRadioChange(e, t, i) {
                    let {
                        value: n
                    } = t;
                    N.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: n
                    }, i)
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(f.ModalHeader, {
                        children: [(0, a.jsxs)(b.default.Child, {
                            children: [(0, a.jsx)(f.Heading, {
                                variant: "heading-lg/semibold",
                                children: y.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(f.Text, {
                                variant: "text-md/normal",
                                className: k.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(b.default.Child, {
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
                            children: y.default.Messages.DONE
                        })
                    })
                }
                renderMute() {
                    var e;
                    let {
                        muted: t,
                        muteConfig: i,
                        guild: n
                    } = this.props, s = null !== (e = null == i ? void 0 : i.selected_time_window) && void 0 !== e ? e : H.MuteUntilSeconds.ALWAYS;
                    return null == n ? null : (0, a.jsxs)(f.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(f.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: e => this.handleCheckboxChange("muted", e, D.NotificationLabel.muted(e)),
                            note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: n.name
                            })
                        }), t ? (0, a.jsxs)(b.default, {
                            className: k.spacing,
                            align: b.default.Align.CENTER,
                            children: [(0, a.jsxs)(b.default, {
                                direction: b.default.Direction.VERTICAL,
                                className: k.muteUntilTextWrapper,
                                children: [(0, a.jsx)(f.FormTitle, {
                                    tag: "h3",
                                    className: k.muteUntilTitle,
                                    children: y.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(C.default, {
                                    className: k.muteUntilText,
                                    muteConfig: i
                                })]
                            }), (0, a.jsx)(f.SingleSelect, {
                                className: k.muteTimeSelector,
                                options: (0, O.getMuteTimeOptions)(),
                                value: s,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(f.FormDivider, {})]
                    })
                }
                renderServerSettings() {
                    var e;
                    let {
                        messageNotifications: t,
                        muted: i,
                        memberCount: n
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: k.spacing,
                        children: [(0, a.jsx)(f.FormItem, {
                            title: y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: k.largeSpacing,
                            children: (0, a.jsx)(f.RadioGroup, {
                                disabled: i,
                                value: t,
                                onChange: e => this.handleRadioChange("message_notifications", e, D.NotificationLabel.notifications(e.value)),
                                options: (e = n, [{
                                    name: y.default.Messages.FORM_LABEL_ALL_MESSAGES,
                                    value: w.UserNotificationSettings.ALL_MESSAGES,
                                    desc: null != e && e >= w.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? y.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                                }, {
                                    name: y.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                                    value: w.UserNotificationSettings.ONLY_MENTIONS
                                }, {
                                    name: y.default.Messages.FORM_LABEL_NOTHING,
                                    value: w.UserNotificationSettings.NO_MESSAGES
                                }])
                            })
                        }), (0, a.jsx)(f.FormDivider, {})]
                    })
                }
                renderNotificationOptions() {
                    let {
                        suppressEveryone: e,
                        suppressRoles: t,
                        mobilePush: i,
                        muted: n,
                        muteEvents: s,
                        notifyHighlights: l,
                        guildId: r
                    } = this.props;
                    return (0, a.jsxs)(f.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(f.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_everyone", e, D.NotificationLabel.suppressEveryone(e)),
                            value: e,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(f.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_roles", e, D.NotificationLabel.suppressRoles(e)),
                            value: t,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(f.FormSwitch, {
                            onChange: e => {
                                N.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? w.HighlightSettings.DISABLED : w.HighlightSettings.ENABLED
                                }, D.NotificationLabel.highlights(!e))
                            },
                            value: n || l === w.HighlightSettings.DISABLED,
                            disabled: n,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: k.highlightsLink,
                                    children: (0, a.jsx)(f.Anchor, {
                                        href: P.default.getArticleURL(w.HelpdeskArticles.HIGHLIGHTS),
                                        children: y.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(f.FormSwitch, {
                            value: s,
                            onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, D.NotificationLabel.mutedEvents(e)),
                            children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(f.FormSwitch, {
                            value: !n && i,
                            disabled: n,
                            onChange: e => this.handleCheckboxChange("mobile_push", e, D.NotificationLabel.mobilePush(e)),
                            children: y.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                }
                renderOverrideSelect() {
                    let {
                        channels: e,
                        categories: t
                    } = this.props, i = d(e).filter(e => {
                        let {
                            channel: i
                        } = e;
                        return i.type !== w.ChannelTypes.GUILD_CATEGORY || null != t[i.id] && t[i.id].length > 0
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return {
                            value: t.id,
                            label: (0, m.computeChannelName)(t, j.default, U.default)
                        }
                    }).value();
                    return (0, a.jsxs)(f.FormItem, {
                        title: y.default.Messages.NOTIFICATION_OVERRIDES,
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(f.FormText, {
                            type: f.FormText.Types.DESCRIPTION,
                            className: k.smallSpacing,
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(f.SearchableSelect, {
                            value: "",
                            placeholder: y.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: i,
                            onChange: this.handleSelectChange
                        })]
                    })
                }
                renderChannelNotifications() {
                    let {
                        channelOverrides: e,
                        muted: t,
                        channels: i,
                        messageNotifications: n,
                        categories: s,
                        checkboxColor: l
                    } = this.props, {
                        overrides: r
                    } = this.state, d = i.map(i => {
                        let {
                            channel: d
                        } = i;
                        if (!r.has(d.id) || null != s[d.id] && 0 === s[d.id].length) return null;
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
                    }).filter(G.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: k.overridePlaceholder,
                        children: (0, a.jsx)(f.Text, {
                            className: k.overrideHeader,
                            variant: "text-sm/semibold",
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: k.overrideList,
                        children: [(0, a.jsxs)(b.default, {
                            children: [(0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: k.headerName,
                                children: y.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: (0, a.jsx)(f.Tooltip, {
                                    text: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: e => (0, a.jsx)("span", {
                                        ...e,
                                        children: y.default.Messages.SOUND_MUTE
                                    })
                                })
                            })]
                        }), d]
                    })
                }
                render() {
                    return (0, a.jsxs)(f.ModalRoot, {
                        "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
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
                        }, D.NotificationLabels.Muted)
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
                        let i = p.default.getChannel(t.parent_id),
                            n = null != i ? i.name : null;
                        return (0, a.jsx)(F.default, {
                            icon: (0, T.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: n
                        })
                    }
                }
            }

            function V(e) {
                let {
                    guildId: t,
                    ...i
                } = e, n = (0, S.useStateFromStoresObject)([v.default, A.default, L.default, R.default], () => {
                    let e = v.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: A.default.getGuild(t),
                        memberCount: L.default.getMemberCount(t),
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
                            return (0, M.isGuildSelectableChannelType)(t) || t === w.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: R.default.getNotifyHighlights(t)
                    }
                }), s = (0, f.useToken)(g.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(B, {
                    ...n,
                    ...i,
                    checkboxColor: s
                })
            }

            function Y(e) {
                let t = (0, O.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    i = t ? x.default : V;
                return (0, a.jsx)(i, {
                    ...e
                })
            }
        },
        524173: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                BellIcon: function() {
                    return l
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("669491"),
                a = i("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
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
        47495: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getMuteTimeOptions: function() {
                    return h
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return f
                }
            }), i("702976");
            var n = i("446674"),
                s = i("668597"),
                a = i("282109"),
                l = i("568734"),
                r = i("640497"),
                d = i("49111"),
                o = i("468200"),
                u = i("397336"),
                c = i("782340");

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
                return Object.keys(e).filter(i => {
                    var n, a;
                    let r = e[i].message_notifications !== d.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (n = e[i].flags) && void 0 !== n ? n : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[i].flags) && void 0 !== a ? a : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, s.computeIsMuted)(e[i])
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
        437756: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useChannelPresetSettings: function() {
                    return g
                },
                useChannelPresetInheritance: function() {
                    return f
                },
                updateChannelPreset: function() {
                    return N
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return _
                },
                updateChannelNotificationSetting: function() {
                    return m
                }
            }), i("222007");
            var n = i("65597"),
                s = i("519705"),
                a = i("42203"),
                l = i("282109"),
                r = i("34676"),
                d = i("47495"),
                o = i("277796"),
                u = i("507313"),
                c = i("49111"),
                h = i("133335"),
                S = i("397336");

            function g(e) {
                let t = (0, n.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    i = (0, n.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: i,
                    preset: (0, u.presetFromSettings)(t, i)
                }
            }

            function f(e) {
                let t = (0, n.useStateFromStoresArray)([l.default], () => (0, d.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [i, s] = (0, n.useStateFromStoresArray)([l.default, a.default], () => {
                        let i = a.default.getChannel(e.parent_id);
                        return null != i && t.includes(i.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(l.default.resolveUnreadSetting(i), l.default.resolvedMessageNotifications(i)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: i,
                    inheritedPreset: s
                }
            }

            function N(e, t, i) {
                let n = l.default.getChannelIdFlags(e, t);
                i === u.Presets.ALL_MESSAGES ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(n, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, r.NotificationLabels.PresetAll) : i === u.Presets.MENTIONS ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, o.withChannelUnreadFlags)(n, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, r.NotificationLabels.PresetMentions) : i === u.Presets.NOTHING && s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(n, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, r.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.NULL,
                    flags: (0, o.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                }, r.NotificationLabels.PresetDefault)
            }

            function _(e, t, i) {
                let n = l.default.getChannelIdFlags(e, t);
                s.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, o.withChannelUnreadFlags)(n, i === h.UnreadSetting.ALL_MESSAGES ? S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, r.NotificationLabel.unreads(i))
            }

            function m(e, t, i) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: i
                }, r.NotificationLabel.notifications(i))
            }
        },
        277796: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
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
            var n = i("568734"),
                s = i("397336");

            function a(e, t) {
                var i;
                return n.addFlag((i = e, n.removeFlags(i, s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => n.removeFlags(e, s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function r(e, t) {
                return n.addFlag(l(e), t)
            }
        },
        546770: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                updateGuildPreset: function() {
                    return u
                }
            }), i("65597");
            var n = i("519705"),
                s = i("282109"),
                a = i("34676"),
                l = i("277796"),
                r = i("507313"),
                d = i("49111"),
                o = i("397336");

            function u(e, t) {
                let i = s.default.getGuildFlags(e);
                t === r.Presets.ALL_MESSAGES ? n.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(i, o.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, a.NotificationLabels.PresetAll) : t === r.Presets.MENTIONS ? n.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, l.withGuildUnreadFlags)(i, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetMentions) : t === r.Presets.NOTHING && n.default.updateGuildNotificationSettings(e, {
                    message_notifications: d.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(i, o.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetNothing)
            }
        },
        286844: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getPushNotificationSelectOptions: function() {
                    return l
                },
                getUnreadSelectOptions: function() {
                    return r
                }
            });
            var n = i("49111"),
                s = i("133335"),
                a = i("782340");
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
                    value: s.UnreadSetting.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: s.UnreadSetting.ONLY_MENTIONS
                }]
        },
        507313: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Presets: function() {
                    return n
                },
                presetFromSettings: function() {
                    return o
                },
                presetName: function() {
                    return u
                }
            }), i("794252");
            var n, s, a = i("506838"),
                l = i("49111"),
                r = i("133335"),
                d = i("782340");

            function o(e, t) {
                return (0, a.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, r.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, r.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, r.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, r.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, r.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function u(e) {
                return (0, a.match)(e).with("all_messages", () => d.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => d.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(s = n || (n = {})).ALL_MESSAGES = "all_messages", s.MENTIONS = "mentions", s.NOTHING = "nothing", s.CUSTOM = "custom"
        },
        661740: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return s
                }
            });
            var n = i("884691");

            function s(e, t) {
                let i = n.useRef(e);
                n.useEffect(() => {
                    e.length > i.current.length && t(), i.current = e
                }, [e, t])
            }
        },
        149943: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("446674"),
                a = i("77078"),
                l = i("519705"),
                r = i("282109"),
                d = i("34676"),
                o = i("49111"),
                u = i("782340"),
                c = i("775247");

            function h(e) {
                let {
                    guildId: t
                } = e, i = (0, s.useStateFromStoresObject)([r.default], () => ({
                    highligths: r.default.getNotifyHighlights(t),
                    mobilePush: r.default.isMobilePushEnabled(t),
                    suppressRoles: r.default.isSuppressRolesEnabled(t),
                    suppressEveryone: r.default.isSuppressEveryoneEnabled(t),
                    muteScheduledEvents: r.default.isMuteScheduledEventsEnabled(t)
                })), a = l.default.updateGuildNotificationSettings;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(S, {
                        value: i.suppressEveryone,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        }, d.NotificationLabel.suppressEveryone(e))
                    }), (0, n.jsx)(S, {
                        value: i.suppressRoles,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        }, d.NotificationLabel.suppressRoles(e))
                    }), (0, n.jsx)(S, {
                        subtitle: u.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: i.highligths === o.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED
                        }, d.NotificationLabel.highlights(e))
                    }), (0, n.jsx)(S, {
                        value: i.muteScheduledEvents,
                        title: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        }, d.NotificationLabel.mutedEvents(e))
                    }), (0, n.jsx)(S, {
                        value: i.mobilePush,
                        title: u.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        }, d.NotificationLabel.mobilePush(e))
                    })]
                })
            }

            function S(e) {
                return (0, n.jsx)(a.FormSwitch, {
                    hideBorder: !0,
                    className: c.advanceSetting,
                    value: e.value,
                    onChange: e.onChange,
                    note: e.subtitle,
                    children: e.title
                })
            }
        },
        784905: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return R
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("446674"),
                d = i("669491"),
                o = i("77078"),
                u = i("519705"),
                c = i("133403"),
                h = i("679653"),
                S = i("419830"),
                g = i("42203"),
                f = i("245997"),
                N = i("27618"),
                E = i("282109"),
                _ = i("697218"),
                m = i("449008"),
                T = i("34676"),
                O = i("47495"),
                x = i("437756"),
                I = i("277796"),
                C = i("286844"),
                M = i("507313"),
                p = i("661740"),
                v = i("432082"),
                L = i("49111"),
                A = i("782340"),
                U = i("105346");

            function R(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: i
                } = e, s = (0, r.useStateFromStoresArray)([g.default, E.default], () => {
                    let e = (0, O.filterOverrides)(E.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => g.default.getChannel(e)).filter(m.isNotNullish)
                });
                (0, p.default)(s, () => i());
                let a = (0, r.useStateFromStores)([f.default], () => f.default.getCategories(t)),
                    l = s.map((e, t) => (0, n.jsxs)("div", {
                        className: U.channelRow,
                        children: [(0, n.jsx)(j, {
                            channel: e,
                            categories: a
                        }, e.id), t < s.length - 1 && (0, n.jsx)("div", {
                            className: U.separator
                        })]
                    }, e.id));
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(v.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != s.find(t => t.id === e)) return;
                            let i = g.default.getChannel(e);
                            null != i && u.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: E.default.resolvedMessageNotifications(i),
                                flags: (0, I.withChannelUnreadFlags)(E.default.getChannelIdFlags(i.guild_id, i.id), E.default.resolveUnreadSetting(i))
                            }, T.NotificationLabels.OverrideCreated)
                        }
                    }), l.length > 0 && (0, n.jsxs)("div", {
                        className: U.table,
                        children: [(0, n.jsxs)("div", {
                            className: U.row,
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: U.rowName,
                                children: A.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: U.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_1
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: U.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_2
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: U.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_3
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: U.rowOption,
                                children: A.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), l.length > 0 && (0, n.jsx)("div", {
                            className: U.channels,
                            children: l
                        })]
                    })]
                })
            }

            function j(e) {
                let {
                    channel: t,
                    categories: i
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), u = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(null == t ? void 0 : t.parent_id)), f = (0, x.useChannelPresetSettings)(t), [E, m] = s.useState(!1), [T, O] = s.useState(!1);
                if (null == t) return null;
                let I = A.default.Messages.NO_CATEGORY,
                    p = (0, S.getChannelIconComponent)(t);
                t.type === L.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? I = A.default.Messages.NUM_CHANNELS.format({
                    num: null != i[t.id] ? i[t.id].length : 0
                }) : null != u && (I = A.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, h.computeChannelName)(u, _.default, N.default)
                }));
                let v = T ? M.Presets.CUSTOM : f.preset;
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("div", {
                        className: l(U.row, U.channel),
                        children: [(0, n.jsxs)("div", {
                            className: l(U.rowName, U.modColor),
                            children: [null != p ? (0, n.jsx)(p, {
                                height: 20,
                                width: 20,
                                className: U.icon
                            }) : null, (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: U.modColor,
                                    children: (0, h.computeChannelName)(t, _.default, N.default)
                                }), (0, n.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: U.modColor,
                                    children: I
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: U.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: v === M.Presets.ALL_MESSAGES,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, M.Presets.ALL_MESSAGES), O(!1), m(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: U.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: v === M.Presets.MENTIONS,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, M.Presets.MENTIONS), O(!1), m(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: U.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: v === M.Presets.NOTHING,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, M.Presets.NOTHING), O(!1), m(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: U.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: v === M.Presets.CUSTOM,
                                    onChange: () => (O(!0), m(!0))
                                })
                            })
                        }), (0, n.jsx)(c.default, {
                            onClick: () => (0, x.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: U.removeButton
                        })]
                    }), (E || v === M.Presets.CUSTOM) && (0, n.jsxs)("div", {
                        className: U.customRow,
                        children: [(0, n.jsx)(o.FormSection, {
                            title: A.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE,
                            children: (0, n.jsx)(o.SingleSelect, {
                                value: f.unread,
                                options: (0, C.getUnreadSelectOptions)(),
                                onChange: e => {
                                    (0, x.updateChannelUnreadSetting)(t.guild_id, t.id, e), O(!1)
                                }
                            })
                        }), (0, n.jsx)(o.FormSection, {
                            title: A.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE,
                            children: (0, n.jsx)(o.SingleSelect, {
                                value: f.notification,
                                options: (0, C.getPushNotificationSelectOptions)(),
                                onChange: e => {
                                    (0, x.updateChannelNotificationSetting)(t.guild_id, t.id, e), O(!1)
                                }
                            })
                        })]
                    })]
                })
            }
        },
        432082: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return O
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("917351"),
                a = i.n(s),
                l = i("446674"),
                r = i("77078"),
                d = i("320954"),
                o = i("679653"),
                u = i("419830"),
                c = i("233069"),
                h = i("42203"),
                S = i("245997"),
                g = i("27618"),
                f = i("697218"),
                N = i("612434"),
                E = i("49111"),
                _ = i("782340"),
                m = i("57317");
            let T = e => {
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
                    guildId: i,
                    onSelected: s
                } = e;
                let {
                    channels: c,
                    categories: O
                } = (t = i, (0, l.useStateFromStoresObject)([S.default], () => {
                    let e = S.default.getCategories(t);
                    return {
                        channels: (0, d.default)(e._categories, e, T),
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
                        className: m.input,
                        children: (0, n.jsx)(r.SearchableSelect, {
                            value: "",
                            onChange: s,
                            options: x,
                            renderOptionLabel: e => {
                                let t = h.default.getChannel(e.value);
                                if (null == t) return e.label;
                                let i = h.default.getChannel(t.parent_id),
                                    s = null != i ? i.name : null;
                                return (0, n.jsx)(N.default, {
                                    icon: (0, u.getChannelIconComponent)(t),
                                    title: e.label,
                                    subtitle: s
                                })
                            },
                            placeholder: _.default.Messages.SELECT_CHANNEL_OR_CATEGORY
                        })
                    })]
                })
            }
        },
        348077: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i("37983"),
                s = i("884691"),
                a = i("77078"),
                l = i("660279"),
                r = i("149943"),
                d = i("784905"),
                o = i("489618"),
                u = i("205382"),
                c = i("782340"),
                h = i("551040");

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
                let t = s.useRef(null);
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
        489618: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("866227"),
                a = i.n(s),
                l = i("65597"),
                r = i("77078"),
                d = i("519705"),
                o = i("305961"),
                u = i("282109"),
                c = i("34676"),
                h = i("47495"),
                S = i("468200"),
                g = i("782340"),
                f = i("518887");

            function N(e) {
                var t;
                let {
                    guildId: i
                } = e, s = (0, l.default)([o.default], () => o.default.getGuild(i)), N = (0, l.default)([u.default], () => u.default.isMuted(i)), E = (0, l.default)([u.default], () => u.default.getMuteConfig(i));
                return null == s ? null : (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: N,
                        onChange: e => {
                            d.default.updateGuildNotificationSettings(i, {
                                muted: e
                            }, c.NotificationLabel.muted(e))
                        },
                        style: {
                            marginBottom: 0
                        },
                        note: g.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
                        children: g.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                            name: s.name
                        })
                    }), N && (0, n.jsxs)("div", {
                        className: f.mutedConfig,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)(r.FormTitle, {
                                tag: "h3",
                                children: g.default.Messages.MUTE_UNTIL
                            }), (0, n.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: function(e) {
                                    return null == e || null == e.end_time ? null : g.default.Messages.MUTED_UNTIL_TIME.format({
                                        endTime: new Date(e.end_time).toLocaleString(g.default.getLocale(), {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit"
                                        })
                                    })
                                }(E)
                            })]
                        }), (0, n.jsx)(r.SingleSelect, {
                            onChange: e => {
                                let t = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(i, {
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: t
                                    },
                                    muted: !0
                                }, c.NotificationLabels.Muted)
                            },
                            options: (0, h.getMuteTimeOptions)(),
                            value: null !== (t = null == E ? void 0 : E.selected_time_window) && void 0 !== t ? t : S.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }
        },
        205382: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return M
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("65597"),
                d = i("77078"),
                o = i("519705"),
                u = i("282109"),
                c = i("593195"),
                h = i("956089"),
                S = i("34676"),
                g = i("277796"),
                f = i("546770"),
                N = i("286844"),
                E = i("507313"),
                _ = i("49111"),
                m = i("133335"),
                T = i("397336"),
                O = i("782340"),
                x = i("297697"),
                I = i("587621");
            let C = () => [{
                value: E.Presets.ALL_MESSAGES,
                name: O.default.Messages.NOTIFICATION_PRESET_1
            }, {
                value: E.Presets.MENTIONS,
                name: O.default.Messages.NOTIFICATION_PRESET_2
            }, {
                value: E.Presets.NOTHING,
                name: O.default.Messages.NOTIFICATION_PRESET_3
            }, {
                value: E.Presets.CUSTOM,
                name: O.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function M(e) {
                let {
                    guildId: t
                } = e, i = (0, r.default)([u.default], () => u.default.getGuildFlags(t)), a = (0, r.default)([u.default], () => {
                    let e = u.default.getGuildUnreadSetting(t),
                        i = u.default.getMessageNotifications(t);
                    return e === m.UnreadSetting.UNSET ? i === _.UserNotificationSettings.ALL_MESSAGES ? m.UnreadSetting.ALL_MESSAGES : m.UnreadSetting.ONLY_MENTIONS : e
                }), l = (0, r.default)([u.default], () => u.default.getMessageNotifications(t)), [c, h] = (0, s.useState)(!1), I = c ? E.Presets.CUSTOM : (0, E.presetFromSettings)(a, l), M = e => {
                    if (e === E.Presets.CUSTOM) {
                        h(!0);
                        return
                    }
                    h(!1), (0, f.updateGuildPreset)(t, e)
                };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(d.SegmentedControl, {
                        value: I,
                        options: C(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return M(t)
                        },
                        look: "pill"
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        children: [(0, n.jsx)(p, {
                            unreadSetting: a
                        }), (0, n.jsx)(v, {
                            notificationSetting: l
                        })]
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
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
                                children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(d.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        children: [(0, n.jsx)(d.SingleSelect, {
                            className: x.input,
                            onChange: e => {
                                h(!1), o.default.updateGuildNotificationSettings(t, {
                                    flags: (0, g.withGuildUnreadFlags)(i, e === m.UnreadSetting.ALL_MESSAGES ? T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                }, S.NotificationLabel.unreads(e))
                            },
                            options: (0, N.getUnreadSelectOptions)(),
                            value: a
                        }), (0, n.jsx)(d.SingleSelect, {
                            className: x.input,
                            value: l,
                            onChange: e => {
                                h(!1), o.default.updateGuildNotificationSettings(t, {
                                    message_notifications: e
                                }, S.NotificationLabel.notifications(e))
                            },
                            options: (0, N.getPushNotificationSelectOptions)()
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    unreadSetting: t
                } = e, i = [{
                    badged: !0,
                    unread: !0,
                    muted: !1,
                    name: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
                }, {
                    badged: !1,
                    unread: !0,
                    muted: !0,
                    name: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
                }, {
                    badged: !1,
                    unread: !1,
                    muted: !0,
                    name: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
                }];
                return t === m.UnreadSetting.ALL_MESSAGES && (i[1].muted = !1), (0, n.jsx)("div", {
                    className: x.channeList,
                    children: i.map(e => (0, n.jsxs)("div", {
                        className: x.channelListChannel,
                        children: [(0, n.jsxs)("div", {
                            className: x.channelListChannelName,
                            children: [(0, n.jsx)("div", {
                                className: l(x.unread, {
                                    [x.hidden]: !e.unread,
                                    [x.unreadMuted]: e.muted
                                })
                            }), (0, n.jsx)(c.default, {
                                height: 12,
                                width: 12,
                                className: l(x.channelListChannelIcon, {
                                    [x.muted]: e.muted
                                })
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, n.jsx)("div", {
                            className: l(x.badge, {
                                [x.hidden]: !e.badged
                            }),
                            children: (0, n.jsx)(h.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function v(e) {
                return (0, n.jsxs)("div", {
                    className: x.mockMessage,
                    children: [e.notificationSetting === _.UserNotificationSettings.NO_MESSAGES && (0, n.jsx)("div", {
                        className: x.mockMessageDisabled
                    }), (0, n.jsx)("div", {
                        children: (0, n.jsx)("img", {
                            className: x.mockMessageAvatar,
                            src: I,
                            alt: ""
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
                        }), e.notificationSetting === _.UserNotificationSettings.ALL_MESSAGES && (0, n.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== _.UserNotificationSettings.ALL_MESSAGES && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                tag: "span",
                                children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                            })]
                        })]
                    })]
                })
            }
        },
        308305: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ChannelNotificationSettings: function() {
                    return m
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("77078"),
                l = i("519705"),
                r = i("133403"),
                d = i("679653"),
                o = i("419830"),
                u = i("42203"),
                c = i("245997"),
                h = i("27618"),
                S = i("697218"),
                g = i("145131"),
                f = i("34676"),
                N = i("49111"),
                E = i("782340"),
                _ = i("296884");
            class m extends s.PureComponent {
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
                setMessageNotification(e, t, i) {
                    let {
                        channel: n
                    } = this.props, s = n.getGuildId();
                    null != s && l.default.updateChannelOverrideSettings(s, n.id, {
                        message_notifications: e,
                        muted: null != t && t
                    }, i)
                }
                handleRadioChange(e) {
                    this.setMessageNotification(e, void 0, f.NotificationLabel.notifications(e))
                }
                renderMessageNotificationsRadioOption(e) {
                    let {
                        messageNotifications: t,
                        guildMuted: i,
                        muted: s,
                        guildMessageNotifications: l,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === N.UserNotificationSettings.NULL) && e === l && (d = !0);
                    let o = a.Checkbox.Types.INVERTED;
                    return (s || t === N.UserNotificationSettings.NULL || null == t) && (o = a.Checkbox.Types.GHOST), (0, n.jsx)(a.Checkbox, {
                        value: !i && d,
                        disabled: i,
                        shape: a.Checkbox.Shapes.ROUND,
                        color: r,
                        type: o,
                        onChange: this.handleRadioChange.bind(this, e)
                    })
                }
                renderName() {
                    let e, t;
                    let {
                        channel: i
                    } = this.props;
                    null != i.parent_id && (e = u.default.getChannel(i.parent_id));
                    let s = (0, o.getChannelIconComponent)(i);
                    if (i.type === N.ChannelTypes.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
                        let e = c.default.getCategories(i.guild_id);
                        t = E.default.Messages.NUM_CHANNELS.format({
                            num: null != e[i.id] ? e[i.id].length : 0
                        })
                    } else t = null != e ? E.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, S.default, h.default)
                    }) : E.default.Messages.NO_CATEGORY;
                    return (0, n.jsxs)(g.default, {
                        grow: 1,
                        className: _.nameContainer,
                        children: [null != s ? (0, n.jsx)(s, {
                            className: _.icon
                        }) : null, (0, n.jsxs)("div", {
                            className: _.channelNameContainer,
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: _.channelName,
                                children: (0, d.computeChannelName)(i, S.default, h.default)
                            }), (0, n.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: _.channelNameByline,
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
                        className: _.checkboxGroup,
                        justify: g.default.Justify.AROUND,
                        align: g.default.Align.CENTER,
                        children: [(0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? _.checkboxContainerMuted : _.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(N.UserNotificationSettings.ALL_MESSAGES)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? _.checkboxContainerMuted : _.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(N.UserNotificationSettings.ONLY_MENTIONS)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: t ? _.checkboxContainerMuted : _.checkboxContainer,
                            children: this.renderMessageNotificationsRadioOption(N.UserNotificationSettings.NO_MESSAGES)
                        }), (0, n.jsx)(g.default.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: _.checkboxMute,
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
                        className: e ? _.overrideHighlight : _.override,
                        children: [this.renderName(), this.renderOptions(), (0, n.jsx)(r.default, {
                            className: _.removeOverride,
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
                            messageNotifications: i
                        } = this.props;
                        this.setMessageNotification(null != i ? i : N.UserNotificationSettings.NULL, t, f.NotificationLabel.muted(t))
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(N.UserNotificationSettings.NULL, !1, f.NotificationLabels.OverrideDeleted), null != e && e(t.id)
                    }
                }
            }
        },
        319165: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useMutedUntilText: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("77078"),
                a = i("782340");

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
                    className: i
                } = e, a = l(t);
                return null != a ? (0, n.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: i,
                    children: a
                }) : null
            }
        },
        612434: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("77078"),
                a = i("145131"),
                l = i("997324"),
                r = e => {
                    let {
                        title: t,
                        subtitle: i,
                        icon: r
                    } = e;
                    return (0, n.jsxs)(a.default, {
                        className: l.wrapper,
                        align: a.default.Align.BASELINE,
                        children: [null != r && (0, n.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: l.icon
                        }), (0, n.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: l.title,
                            children: t
                        }), null != i && "" !== i ? (0, n.jsx)(s.Text, {
                            variant: "text-xs/semibold",
                            className: l.subtitle,
                            children: i
                        }) : null]
                    })
                }
        },
        660279: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("469563"),
                a = i("524173"),
                l = i("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                        })
                    })
                }, a.BellIcon, void 0, {
                    size: 24
                })
        },
        619911: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var n = i("37983");
            i("884691");
            var s = i("469563"),
                a = i("125094"),
                l = i("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M19 1C19.552 1 20 1.447 20 2V3L23 2V6L20 5V6C20 6.553 19.552 7 19 7H15C14.448 7 14 6.553 14 6V2C14 1.447 14.448 1 15 1H19Z",
                            className: a,
                            fill: s
                        }), (0, n.jsx)("path", {
                            d: "M20 13.5V9H22V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5C2 3.397 2.897 2.5 4 2.5H12V4.5H4V13.5H20Z",
                            className: a,
                            fill: s
                        })]
                    })
                }, a.ScreenArrowIcon, void 0, {
                    size: 24
                })
        }
    }
]);