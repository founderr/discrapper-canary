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
                    return V
                }
            }), i("222007"), i("424973");
            var n, s, a = i("37983"),
                l = i("884691"),
                r = i("917351"),
                d = i.n(r),
                o = i("866227"),
                u = i.n(o),
                c = i("817736"),
                S = i("118810"),
                h = i("446674"),
                g = i("669491"),
                N = i("77078"),
                f = i("519705"),
                _ = i("668597"),
                E = i("320954"),
                T = i("679653"),
                m = i("419830"),
                I = i("47495"),
                O = i("348077"),
                M = i("308305"),
                x = i("319165"),
                C = i("233069"),
                p = i("42203"),
                L = i("245997"),
                A = i("525065"),
                v = i("305961"),
                U = i("27618"),
                R = i("282109"),
                j = i("697218"),
                G = i("145131"),
                b = i("612434"),
                F = i("449008"),
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
                    return e.channelOverrides !== n ? (i = new Set(i), (0, I.filterOverrides)(e.channelOverrides).forEach(e => i.add(e)), {
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
                        if (null != this._scroller && (0, S.isElement)(e, HTMLElement)) {
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
                        e = new Set(e), (0, I.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
                            overrides: e
                        })
                    }
                }
                handleCheckboxChange(e, t, i) {
                    f.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: t
                    }, i)
                }
                handleRadioChange(e, t, i) {
                    let {
                        value: n
                    } = t;
                    f.default.updateGuildNotificationSettings(this.props.guildId, {
                        [e]: n
                    }, i)
                }
                renderHeader() {
                    let {
                        guild: e
                    } = this.props;
                    return null == e ? null : (0, a.jsxs)(N.ModalHeader, {
                        children: [(0, a.jsxs)(G.default.Child, {
                            children: [(0, a.jsx)(N.Heading, {
                                variant: "heading-lg/semibold",
                                children: y.default.Messages.NOTIFICATION_SETTINGS
                            }), (0, a.jsx)(N.Text, {
                                variant: "text-md/normal",
                                className: k.guildName,
                                children: e.name
                            })]
                        }), (0, a.jsx)(G.default.Child, {
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
                    return null == n ? null : (0, a.jsxs)(N.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(N.FormSwitch, {
                            hideBorder: !0,
                            value: t,
                            onChange: e => this.handleCheckboxChange("muted", e, D.NotificationLabel.muted(e)),
                            note: y.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: y.default.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: n.name
                            })
                        }), t ? (0, a.jsxs)(G.default, {
                            className: k.spacing,
                            align: G.default.Align.CENTER,
                            children: [(0, a.jsxs)(G.default, {
                                direction: G.default.Direction.VERTICAL,
                                className: k.muteUntilTextWrapper,
                                children: [(0, a.jsx)(N.FormTitle, {
                                    tag: "h3",
                                    className: k.muteUntilTitle,
                                    children: y.default.Messages.MUTE_UNTIL
                                }), (0, a.jsx)(x.default, {
                                    className: k.muteUntilText,
                                    muteConfig: i
                                })]
                            }), (0, a.jsx)(N.SingleSelect, {
                                className: k.muteTimeSelector,
                                options: (0, I.getMuteTimeOptions)(),
                                value: s,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, a.jsx)(N.FormDivider, {})]
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
                        children: [(0, a.jsx)(N.FormItem, {
                            title: y.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: k.largeSpacing,
                            children: (0, a.jsx)(N.RadioGroup, {
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
                        }), (0, a.jsx)(N.FormDivider, {})]
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
                    return (0, a.jsxs)(N.FormItem, {
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(N.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_everyone", e, D.NotificationLabel.suppressEveryone(e)),
                            value: e,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, a.jsx)(N.FormSwitch, {
                            onChange: e => this.handleCheckboxChange("suppress_roles", e, D.NotificationLabel.suppressRoles(e)),
                            value: t,
                            children: y.default.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, a.jsx)(N.FormSwitch, {
                            onChange: e => {
                                f.default.updateGuildNotificationSettings(r, {
                                    notify_highlights: e ? w.HighlightSettings.DISABLED : w.HighlightSettings.ENABLED
                                }, D.NotificationLabel.highlights(!e))
                            },
                            value: n || l === w.HighlightSettings.DISABLED,
                            disabled: n,
                            note: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N.Text, {
                                    variant: "text-sm/normal",
                                    children: y.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, a.jsx)("div", {
                                    className: k.highlightsLink,
                                    children: (0, a.jsx)(N.Anchor, {
                                        href: P.default.getArticleURL(w.HelpdeskArticles.HIGHLIGHTS),
                                        children: y.default.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0, a.jsx)(a.Fragment, {
                                children: y.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, a.jsx)(N.FormSwitch, {
                            value: s,
                            onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, D.NotificationLabel.mutedEvents(e)),
                            children: y.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, a.jsx)(N.FormSwitch, {
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
                            label: (0, T.computeChannelName)(t, j.default, U.default)
                        }
                    }).value();
                    return (0, a.jsxs)(N.FormItem, {
                        title: y.default.Messages.NOTIFICATION_OVERRIDES,
                        className: k.largeSpacing,
                        children: [(0, a.jsx)(N.FormText, {
                            type: N.FormText.Types.DESCRIPTION,
                            className: k.smallSpacing,
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, a.jsx)(N.SearchableSelect, {
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
                        return (0, a.jsx)(M.ChannelNotificationSettings, {
                            ref: e => {
                                this._channelRefs[d.id] = e
                            },
                            channel: d,
                            guildMuted: t,
                            muted: null != o && (0, _.computeIsMuted)(o),
                            messageNotifications: null != o ? o.message_notifications : null,
                            guildMessageNotifications: n,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: l
                        }, d.id)
                    }).filter(F.isNotNullish);
                    return (0 === r.size || 0 === d.length) && d.push((0, a.jsx)("div", {
                        className: k.overridePlaceholder,
                        children: (0, a.jsx)(N.Text, {
                            className: k.overrideHeader,
                            variant: "text-sm/semibold",
                            children: y.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder")), (0, a.jsxs)("div", {
                        className: k.overrideList,
                        children: [(0, a.jsxs)(G.default, {
                            children: [(0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerName,
                                children: y.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_ALL
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_MENTIONS
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: y.default.Messages.FORM_LABEL_NOTHING
                            }), (0, a.jsx)(N.Heading, {
                                variant: "eyebrow",
                                className: k.headerOption,
                                children: (0, a.jsx)(N.Tooltip, {
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
                    return (0, a.jsxs)(N.ModalRoot, {
                        "aria-label": y.default.Messages.NOTIFICATION_SETTINGS,
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
                        overrides: new Set((0, I.filterOverrides)(this.props.channelOverrides)),
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
                        return (0, a.jsx)(b.default, {
                            icon: (0, m.getChannelIconComponent)(t),
                            title: e.label,
                            subtitle: n
                        })
                    }
                }
            }

            function Y(e) {
                let {
                    guildId: t,
                    ...i
                } = e, n = (0, h.useStateFromStoresObject)([L.default, v.default, A.default, R.default], () => {
                    let e = L.default.getCategories(t);
                    return {
                        guildId: t,
                        categories: e,
                        guild: v.default.getGuild(t),
                        memberCount: A.default.getMemberCount(t),
                        suppressEveryone: R.default.isSuppressEveryoneEnabled(t),
                        suppressRoles: R.default.isSuppressRolesEnabled(t),
                        muteEvents: R.default.isMuteScheduledEventsEnabled(t),
                        mobilePush: R.default.isMobilePushEnabled(t),
                        muted: R.default.isMuted(t),
                        muteConfig: R.default.getMuteConfig(t),
                        messageNotifications: R.default.getMessageNotifications(t),
                        channelOverrides: R.default.getChannelOverrides(t),
                        channels: (0, E.default)(e._categories, e, e => {
                            let {
                                channel: {
                                    type: t
                                }
                            } = e;
                            return (0, C.isGuildSelectableChannelType)(t) || t === w.ChannelTypes.GUILD_CATEGORY
                        }),
                        notifyHighlights: R.default.getNotifyHighlights(t)
                    }
                }), s = (0, N.useToken)(g.default.unsafe_rawColors.GREEN_360).hex();
                return (0, a.jsx)(B, {
                    ...n,
                    ...i,
                    checkboxColor: s
                })
            }

            function V(e) {
                let t = (0, I.useShouldUseNewNotificationSystem)("NotificationSettingsModal"),
                    i = t ? O.default : Y;
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
        225389: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                CircleInformationIcon: function() {
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
                    secondaryColor: l = "transparent",
                    secondaryColorClass: r = "",
                    color: d = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        833222: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                DenyIcon: function() {
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
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        625399: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return _
                }
            }), i("222007"), i("702976");
            var n = i("37983"),
                s = i("884691"),
                a = i("77078"),
                l = i("519705"),
                r = i("437756"),
                d = i("277796"),
                o = i("507313"),
                u = i("282109"),
                c = i("34676"),
                S = i("49111"),
                h = i("133335"),
                g = i("397336"),
                N = i("782340");

            function f(e) {
                let t = (0, r.useChannelPresetSettings)(e),
                    i = (0, r.useChannelPresetInheritance)(e),
                    l = t.preset === o.Presets.CUSTOM && !i.inherited,
                    [d, u] = s.useState(l),
                    [c, h] = s.useState(!1),
                    g = c ? o.Presets.CUSTOM : t.preset,
                    f = _(e, () => h(!1));
                if (e.type === S.ChannelTypes.GUILD_VOICE) return null;
                let E = "parent" === i.inheritedFrom ? N.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === S.ChannelTypes.GUILD_STAGE_VOICE ? (0, n.jsxs)(a.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: [(0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_default",
                        label: E,
                        checked: i.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === S.UserNotificationSettings.NO_MESSAGES ? N.default.Messages.FORM_LABEL_NOTHING : N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, r.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !i.inherited && t.notification !== S.UserNotificationSettings.NO_MESSAGES,
                        label: N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, r.updateChannelNotificationSetting)(e.guild_id, e.id, S.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: N.default.Messages.FORM_LABEL_NOTHING,
                        checked: !i.inherited && t.notification === S.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, r.updateChannelNotificationSetting)(e.guild_id, e.id, S.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, n.jsxs)(a.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: [(0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_default",
                        label: E,
                        group: "channel_notification_settings",
                        checked: i.inherited && !c,
                        subtext: i.inheritedPreset,
                        action: () => ((0, r.updateChannelToGuildDefault)(e.guild_id, e.id), h(!1))
                    }), (0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !i.inherited && g === o.Presets.ALL_MESSAGES,
                        action: () => ((0, r.updateChannelPreset)(e.guild_id, e.id, o.Presets.ALL_MESSAGES), h(!1))
                    }), (0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !i.inherited && g === o.Presets.MENTIONS,
                        action: () => ((0, r.updateChannelPreset)(e.guild_id, e.id, o.Presets.MENTIONS), h(!1))
                    }), (0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !i.inherited && g === o.Presets.NOTHING,
                        action: () => ((0, r.updateChannelPreset)(e.guild_id, e.id, o.Presets.NOTHING), h(!1))
                    }), (0, n.jsx)(a.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: c || !i.inherited && g === o.Presets.CUSTOM,
                        action: () => (u(!0), h(!0))
                    }), (d || l) && f]
                })
            }

            function _(e, t) {
                let {
                    notification: i,
                    unread: s
                } = (0, r.useChannelPresetSettings)(e), o = e => {
                    e(), t()
                }, f = t => {
                    let i = {
                        message_notifications: t
                    };
                    t === S.UserNotificationSettings.ALL_MESSAGES && s !== h.UnreadSetting.ALL_MESSAGES && (i.flags = (0, d.withChannelUnreadFlags)(u.default.getChannelIdFlags(e.guild_id, e.id), g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), l.default.updateChannelOverrideSettings(e.guild_id, e.id, i, c.NotificationLabel.notifications(t))
                };
                return (0, n.jsxs)(a.MenuGroup, {
                    children: [(0, n.jsxs)(a.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, n.jsx)(a.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: s === h.UnreadSetting.ALL_MESSAGES,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => o(() => (0, r.updateChannelUnreadSetting)(e.guild_id, e.id, h.UnreadSetting.ALL_MESSAGES))
                        }), (0, n.jsx)(a.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: s === h.UnreadSetting.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: s !== h.UnreadSetting.ONLY_MENTIONS && i === S.UserNotificationSettings.ALL_MESSAGES,
                            subtext: s !== h.UnreadSetting.ONLY_MENTIONS && i === S.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => o(() => (0, r.updateChannelUnreadSetting)(e.guild_id, e.id, h.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, n.jsxs)(a.MenuItem, {
                        id: "push_settings",
                        label: N.default.Messages.NOTIFICATIONS,
                        children: [(0, n.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: i === S.UserNotificationSettings.ALL_MESSAGES,
                            subtext: s !== h.UnreadSetting.ALL_MESSAGES && i !== S.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => o(() => f(S.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, n.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: i === S.UserNotificationSettings.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => o(() => f(S.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, n.jsx)(a.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: i === S.UserNotificationSettings.NO_MESSAGES,
                            action: () => o(() => f(S.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }
        },
        47495: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getMuteTimeOptions: function() {
                    return S
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return N
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

            function S() {
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
            let h = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return Object.keys(e).filter(i => {
                    var n, a;
                    let r = e[i].message_notifications !== d.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (n = e[i].flags) && void 0 !== n ? n : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[i].flags) && void 0 !== a ? a : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, s.computeIsMuted)(e[i])
                })
            }

            function N(e) {
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
                    return N
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return _
                },
                updateChannelUnreadSetting: function() {
                    return E
                },
                updateChannelNotificationSetting: function() {
                    return T
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
                S = i("133335"),
                h = i("397336");

            function g(e) {
                let t = (0, n.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    i = (0, n.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: i,
                    preset: (0, u.presetFromSettings)(t, i)
                }
            }

            function N(e) {
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

            function f(e, t, i) {
                let n = l.default.getChannelIdFlags(e, t);
                i === u.Presets.ALL_MESSAGES ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(n, h.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, r.NotificationLabels.PresetAll) : i === u.Presets.MENTIONS ? s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, o.withChannelUnreadFlags)(n, h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, r.NotificationLabels.PresetMentions) : i === u.Presets.NOTHING && s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(n, h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, r.NotificationLabels.PresetNothing)
            }

            function _(e, t) {
                s.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: c.UserNotificationSettings.NULL,
                    flags: (0, o.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                }, r.NotificationLabels.PresetDefault)
            }

            function E(e, t, i) {
                let n = l.default.getChannelIdFlags(e, t);
                s.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, o.withChannelUnreadFlags)(n, i === S.UnreadSetting.ALL_MESSAGES ? h.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : h.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, r.NotificationLabel.unreads(i))
            }

            function T(e, t, i) {
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
            let l = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: n.UserNotificationSettings.ALL_MESSAGES
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    value: n.UserNotificationSettings.ONLY_MENTIONS
                }, {
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    value: n.UserNotificationSettings.NO_MESSAGES
                }],
                r = e => [{
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    value: s.UnreadSetting.ALL_MESSAGES
                }, {
                    value: s.UnreadSetting.ONLY_MENTIONS,
                    label: a.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled: (null == e ? void 0 : e.notificationSetting) === n.UserNotificationSettings.ALL_MESSAGES
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
                    return S
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

            function S(e) {
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
                    children: [(0, n.jsx)(h, {
                        value: i.suppressEveryone,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                        onChange: e => a(t, {
                            suppress_everyone: e
                        }, d.NotificationLabel.suppressEveryone(e))
                    }), (0, n.jsx)(h, {
                        value: i.suppressRoles,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                        onChange: e => a(t, {
                            suppress_roles: e
                        }, d.NotificationLabel.suppressRoles(e))
                    }), (0, n.jsx)(h, {
                        subtitle: u.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
                        title: u.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                        value: i.highligths === o.HighlightSettings.ENABLED,
                        onChange: e => a(t, {
                            notify_highlights: e ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED
                        }, d.NotificationLabel.highlights(e))
                    }), (0, n.jsx)(h, {
                        value: i.muteScheduledEvents,
                        title: u.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                        onChange: e => a(t, {
                            mute_scheduled_events: e
                        }, d.NotificationLabel.mutedEvents(e))
                    }), (0, n.jsx)(h, {
                        value: i.mobilePush,
                        title: u.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                        onChange: e => a(t, {
                            mobile_push: e
                        }, d.NotificationLabel.mobilePush(e))
                    })]
                })
            }

            function h(e) {
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
                    return j
                }
            }), i("222007");
            var n = i("37983"),
                s = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("446674"),
                d = i("669491"),
                o = i("77078"),
                u = i("272030"),
                c = i("519705"),
                S = i("133403"),
                h = i("679653"),
                g = i("625399"),
                N = i("419830"),
                f = i("42203"),
                _ = i("245997"),
                E = i("27618"),
                T = i("282109"),
                m = i("697218"),
                I = i("449008"),
                O = i("34676"),
                M = i("47495"),
                x = i("437756"),
                C = i("277796"),
                p = i("507313"),
                L = i("661740"),
                A = i("432082"),
                v = i("49111"),
                U = i("782340"),
                R = i("105346");

            function j(e) {
                let {
                    guildId: t,
                    requestScrollToBottom: i
                } = e, s = (0, r.useStateFromStoresArray)([f.default, T.default], () => {
                    let e = (0, M.filterOverrides)(T.default.getChannelOverrides(t), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    });
                    return e.map(e => f.default.getChannel(e)).filter(I.isNotNullish)
                });
                (0, L.default)(s, () => i());
                let a = (0, r.useStateFromStores)([_.default], () => _.default.getCategories(t)),
                    l = s.map((e, t) => (0, n.jsxs)("div", {
                        className: R.channelRow,
                        children: [(0, n.jsx)(G, {
                            channel: e,
                            categories: a
                        }, e.id), t < s.length - 1 && (0, n.jsx)("div", {
                            className: R.separator
                        })]
                    }, e.id));
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(A.default, {
                        guildId: t,
                        onSelected: e => {
                            if (null != s.find(t => t.id === e)) return;
                            let i = f.default.getChannel(e);
                            null != i && c.default.updateChannelOverrideSettings(t, e, {
                                muted: !1,
                                message_notifications: T.default.resolvedMessageNotifications(i),
                                flags: (0, C.withChannelUnreadFlags)(T.default.getChannelIdFlags(i.guild_id, i.id), T.default.resolveUnreadSetting(i))
                            }, O.NotificationLabels.OverrideCreated)
                        }
                    }), l.length > 0 && (0, n.jsxs)("div", {
                        className: R.table,
                        children: [(0, n.jsxs)("div", {
                            className: R.row,
                            children: [(0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowName,
                                children: U.default.Messages.CHANNEL_OR_CATEGORY
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_1
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_2
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_3
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                className: R.rowOption,
                                children: U.default.Messages.NOTIFICATION_PRESET_CUSTOM
                            })]
                        }), l.length > 0 && (0, n.jsx)("div", {
                            className: R.channels,
                            children: l
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    channel: t,
                    categories: i
                } = e, a = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), c = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(null == t ? void 0 : t.parent_id)), _ = (0, x.useChannelPresetSettings)(t), [T, I] = s.useState(!1);
                if (null == t) return null;
                let O = U.default.Messages.NO_CATEGORY,
                    M = (0, N.getChannelIconComponent)(t);
                t.type === v.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? O = U.default.Messages.NUM_CHANNELS.format({
                    num: null != i[t.id] ? i[t.id].length : 0
                }) : null != c && (O = U.default.Messages.IN_CATEGORY.format({
                    categoryName: (0, h.computeChannelName)(c, m.default, E.default)
                }));
                let C = T ? p.Presets.CUSTOM : _.preset;
                return (0, n.jsx)("div", {
                    children: (0, n.jsxs)("div", {
                        className: l(R.row, R.channel),
                        children: [(0, n.jsxs)("div", {
                            className: l(R.rowName, R.modColor),
                            children: [null != M ? (0, n.jsx)(M, {
                                height: 20,
                                width: 20,
                                className: R.icon
                            }) : null, (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-md/semibold",
                                    className: R.modColor,
                                    children: (0, h.computeChannelName)(t, m.default, E.default)
                                }), (0, n.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    className: R.modColor,
                                    children: O
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.ALL_MESSAGES,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, p.Presets.ALL_MESSAGES), I(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.MENTIONS,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, p.Presets.MENTIONS), I(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.NOTHING,
                                    onChange: () => ((0, x.updateChannelPreset)(t.guild_id, t.id, p.Presets.NOTHING), I(!1))
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: R.rowOption,
                            children: (0, n.jsx)("div", {
                                children: (0, n.jsx)(o.Checkbox, {
                                    onClick: e => {
                                        (0, u.openContextMenu)(e, () => (0, n.jsx)(o.Menu, {
                                            navId: "ChannelNotificationCustomSettingsItems",
                                            "aria-label": U.default.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                                            onClose: () => {},
                                            onSelect: () => {},
                                            children: (0, g.useChannelNotificationCustomSettingsItem)(t, () => I(!1))
                                        }))
                                    },
                                    color: a,
                                    shape: o.Checkbox.Shapes.ROUND,
                                    type: o.Checkbox.Types.INVERTED,
                                    value: C === p.Presets.CUSTOM,
                                    onChange: () => I(!0)
                                })
                            })
                        }), (0, n.jsx)(S.default, {
                            onClick: () => (0, x.updateChannelToGuildDefault)(t.guild_id, t.id),
                            className: R.removeButton
                        })]
                    })
                })
            }
        },
        432082: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return I
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
                S = i("42203"),
                h = i("245997"),
                g = i("27618"),
                N = i("697218"),
                f = i("612434"),
                _ = i("49111"),
                E = i("782340"),
                T = i("57317");
            let m = e => {
                let {
                    channel: {
                        type: t
                    }
                } = e;
                return (0, c.isGuildSelectableChannelType)(t) || t === _.ChannelTypes.GUILD_CATEGORY
            };

            function I(e) {
                var t;
                let {
                    guildId: i,
                    onSelected: s
                } = e;
                let {
                    channels: c,
                    categories: I
                } = (t = i, (0, l.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.getCategories(t);
                    return {
                        channels: (0, d.default)(e._categories, e, m),
                        categories: e
                    }
                })), O = a(c).filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type !== _.ChannelTypes.GUILD_CATEGORY || null != I[t.id] && I[t.id].length > 0
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        value: t.id,
                        label: (0, o.computeChannelName)(t, N.default, g.default)
                    }
                }).value();
                return (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormText, {
                        type: r.FormText.Types.DESCRIPTION,
                        children: E.default.Messages.ADD_CHANNEL_TO_OVERRIDE
                    }), (0, n.jsx)("div", {
                        className: T.input,
                        children: (0, n.jsx)(r.SearchableSelect, {
                            value: "",
                            onChange: s,
                            options: O,
                            renderOptionLabel: e => {
                                let t = S.default.getChannel(e.value);
                                if (null == t) return e.label;
                                let i = S.default.getChannel(t.parent_id),
                                    s = null != i ? i.name : null;
                                return (0, n.jsx)(f.default, {
                                    icon: (0, u.getChannelIconComponent)(t),
                                    title: e.label,
                                    subtitle: s
                                })
                            },
                            placeholder: E.default.Messages.SELECT_CHANNEL_OR_CATEGORY
                        })
                    })]
                })
            }
        },
        348077: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
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
                S = i("551040");

            function h(e) {
                return (0, n.jsx)("div", {
                    className: S.sectionHeader,
                    children: (0, n.jsx)(a.Heading, {
                        variant: "text-xs/bold",
                        className: S.sectionHeaderTitle,
                        color: "text-muted",
                        children: e.title
                    })
                })
            }

            function g(e) {
                return (0, n.jsxs)("div", {
                    children: [null != e.title && (0, n.jsx)(h, {
                        title: e.title
                    }), (0, n.jsx)("div", {
                        className: S.sectionContent,
                        children: e.children
                    })]
                })
            }

            function N(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsxs)(a.ModalHeader, {
                    className: S.header,
                    children: [(0, n.jsxs)("div", {
                        className: S.headerLeft,
                        children: [(0, n.jsx)(l.default, {
                            className: S.headerBell
                        }), (0, n.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.NOTIFICATION_SETTINGS
                        })]
                    }), (0, n.jsx)(a.ModalCloseButton, {
                        onClick: t
                    })]
                })
            }

            function f(e) {
                let t = s.useRef(null);
                return (0, n.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: e.transitionState,
                    "aria-label": c.default.Messages.NOTIFICATION_SETTINGS,
                    children: [(0, n.jsx)(N, {
                        onClose: e.onClose
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: S.content,
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
                        }), (0, n.jsx)(h, {
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
                    return f
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
                S = i("47495"),
                h = i("468200"),
                g = i("782340"),
                N = i("518887");

            function f(e) {
                var t;
                let {
                    guildId: i
                } = e, s = (0, l.default)([o.default], () => o.default.getGuild(i)), f = (0, l.default)([u.default], () => u.default.isMuted(i)), _ = (0, l.default)([u.default], () => u.default.getMuteConfig(i));
                return null == s ? null : (0, n.jsxs)(r.FormItem, {
                    children: [(0, n.jsx)(r.FormSwitch, {
                        hideBorder: !0,
                        value: f,
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
                    }), f && (0, n.jsxs)("div", {
                        className: N.mutedConfig,
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
                                }(_)
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
                            options: (0, S.getMuteTimeOptions)(),
                            value: null !== (t = null == _ ? void 0 : _.selected_time_window) && void 0 !== t ? t : h.MuteUntilSeconds.ALWAYS
                        })]
                    })]
                })
            }
        },
        205382: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            }), i("222007"), i("702976");
            var n = i("37983"),
                s = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("65597"),
                d = i("225389"),
                o = i("833222"),
                u = i("77078"),
                c = i("519705"),
                S = i("282109"),
                h = i("593195"),
                g = i("956089"),
                N = i("34676"),
                f = i("277796"),
                _ = i("546770"),
                E = i("286844"),
                T = i("507313"),
                m = i("49111"),
                I = i("133335"),
                O = i("397336"),
                M = i("782340"),
                x = i("297697"),
                C = i("587621");
            let p = () => [{
                value: T.Presets.ALL_MESSAGES,
                name: M.default.Messages.NOTIFICATION_PRESET_1
            }, {
                value: T.Presets.MENTIONS,
                name: M.default.Messages.NOTIFICATION_PRESET_2
            }, {
                value: T.Presets.NOTHING,
                name: M.default.Messages.NOTIFICATION_PRESET_3
            }, {
                value: T.Presets.CUSTOM,
                name: M.default.Messages.NOTIFICATION_PRESET_CUSTOM
            }];

            function L(e) {
                let {
                    guildId: t
                } = e, i = (0, r.default)([S.default], () => S.default.getGuildFlags(t)), a = (0, r.default)([S.default], () => {
                    let e = S.default.getGuildUnreadSetting(t),
                        i = S.default.getMessageNotifications(t);
                    return e === I.UnreadSetting.UNSET ? i === m.UserNotificationSettings.ALL_MESSAGES ? I.UnreadSetting.ALL_MESSAGES : I.UnreadSetting.ONLY_MENTIONS : e
                }), l = (0, r.default)([S.default], () => S.default.getMessageNotifications(t)), [h, g] = (0, s.useState)(!1), C = h ? T.Presets.CUSTOM : (0, T.presetFromSettings)(a, l), L = e => {
                    if (e === T.Presets.CUSTOM) {
                        g(!0);
                        return
                    }
                    g(!1), (0, _.updateGuildPreset)(t, e)
                };
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(u.SegmentedControl, {
                        value: C,
                        options: p(),
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            return L(t)
                        },
                        look: "pill"
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        children: [(0, n.jsx)(A, {
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
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-xs/bold",
                                color: "text-muted",
                                style: {
                                    textTransform: "uppercase"
                                },
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: x.grid,
                        children: [(0, n.jsx)(u.SingleSelect, {
                            value: a,
                            className: x.input,
                            onChange: e => {
                                g(!1), c.default.updateGuildNotificationSettings(t, {
                                    flags: (0, f.withGuildUnreadFlags)(i, e === I.UnreadSetting.ALL_MESSAGES ? O.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : O.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                                }, N.NotificationLabel.unreads(e))
                            },
                            options: (0, E.getUnreadSelectOptions)({
                                notificationSetting: l
                            }),
                            renderOptionLabel: e => {
                                let t = e.disabled && e.value === I.UnreadSetting.ONLY_MENTIONS && a !== I.UnreadSetting.ONLY_MENTIONS;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        children: (0, n.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            color: e.disabled ? "text-muted" : void 0,
                                            children: e.label
                                        })
                                    }), t && (0, n.jsx)(u.Tooltip, {
                                        text: M.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                                        children: e => (0, n.jsx)(o.DenyIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: x.muted
                                        })
                                    })]
                                })
                            }
                        }), (0, n.jsx)(u.SingleSelect, {
                            className: x.input,
                            value: l,
                            onChange: e => {
                                g(!1);
                                let i = {
                                    message_notifications: e
                                };
                                e === m.UserNotificationSettings.ALL_MESSAGES && a !== I.UnreadSetting.ALL_MESSAGES && (i.flags = (0, f.withGuildUnreadFlags)(S.default.getGuildFlags(t), O.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, i, N.NotificationLabel.notifications(e))
                            },
                            options: (0, E.getPushNotificationSelectOptions)({
                                notificationSetting: l
                            }),
                            renderOptionLabel: e => {
                                let t = e.value === m.UserNotificationSettings.ALL_MESSAGES && a !== I.UnreadSetting.ALL_MESSAGES && l !== m.UserNotificationSettings.ALL_MESSAGES;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(u.Text, {
                                        variant: "text-md/normal",
                                        children: e.label
                                    }), t && (0, n.jsx)(u.Tooltip, {
                                        text: M.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                                        children: e => (0, n.jsx)(d.CircleInformationIcon, {
                                            ...e,
                                            width: 20,
                                            height: 20,
                                            className: x.muted
                                        })
                                    })]
                                })
                            }
                        })]
                    })]
                })
            }

            function A(e) {
                let {
                    unreadSetting: t
                } = e, i = [{
                    badged: !0,
                    unread: !0,
                    muted: !1,
                    name: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
                }, {
                    badged: !1,
                    unread: !0,
                    muted: !0,
                    name: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
                }, {
                    badged: !1,
                    unread: !1,
                    muted: !0,
                    name: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
                }];
                return t === I.UnreadSetting.ALL_MESSAGES && (i[1].muted = !1), (0, n.jsx)("div", {
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
                            }), (0, n.jsx)(h.default, {
                                height: 12,
                                width: 12,
                                className: l(x.channelListChannelIcon, {
                                    [x.muted]: e.muted
                                })
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: e.muted ? "text-muted" : void 0,
                                children: e.name
                            })]
                        }), (0, n.jsx)("div", {
                            className: l(x.badge, {
                                [x.hidden]: !e.badged
                            }),
                            children: (0, n.jsx)(g.NumberBadge, {
                                count: 1
                            })
                        })]
                    }, e.name))
                })
            }

            function v(e) {
                return (0, n.jsxs)("div", {
                    className: x.mockMessage,
                    children: [e.notificationSetting === m.UserNotificationSettings.NO_MESSAGES && (0, n.jsx)("div", {
                        className: x.mockMessageDisabled
                    }), (0, n.jsx)("div", {
                        children: (0, n.jsx)("img", {
                            className: x.mockMessageAvatar,
                            src: C,
                            alt: ""
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
                        }), e.notificationSetting === m.UserNotificationSettings.ALL_MESSAGES && (0, n.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
                        }), e.notificationSetting !== m.UserNotificationSettings.ALL_MESSAGES && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: ["@Roka", " "]
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                tag: "span",
                                children: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
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
                    return T
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
                S = i("27618"),
                h = i("697218"),
                g = i("145131"),
                N = i("34676"),
                f = i("49111"),
                _ = i("782340"),
                E = i("296884");
            class T extends s.PureComponent {
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
                    this.setMessageNotification(e, void 0, N.NotificationLabel.notifications(e))
                }
                renderMessageNotificationsRadioOption(e) {
                    let {
                        messageNotifications: t,
                        guildMuted: i,
                        muted: s,
                        guildMessageNotifications: l,
                        checkboxColor: r
                    } = this.props, d = t === e;
                    (null == t || t === f.UserNotificationSettings.NULL) && e === l && (d = !0);
                    let o = a.Checkbox.Types.INVERTED;
                    return (s || t === f.UserNotificationSettings.NULL || null == t) && (o = a.Checkbox.Types.GHOST), (0, n.jsx)(a.Checkbox, {
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
                    if (i.type === f.ChannelTypes.GUILD_CATEGORY && null != i.guild_id && "" !== i.guild_id) {
                        let e = c.default.getCategories(i.guild_id);
                        t = _.default.Messages.NUM_CHANNELS.format({
                            num: null != e[i.id] ? e[i.id].length : 0
                        })
                    } else t = null != e ? _.default.Messages.IN_CATEGORY.format({
                        categoryName: (0, d.computeChannelName)(e, h.default, S.default)
                    }) : _.default.Messages.NO_CATEGORY;
                    return (0, n.jsxs)(g.default, {
                        grow: 1,
                        className: E.nameContainer,
                        children: [null != s ? (0, n.jsx)(s, {
                            className: E.icon
                        }) : null, (0, n.jsxs)("div", {
                            className: E.channelNameContainer,
                            children: [(0, n.jsx)(a.Text, {
                                variant: "text-md/semibold",
                                className: E.channelName,
                                children: (0, d.computeChannelName)(i, h.default, S.default)
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
                            messageNotifications: i
                        } = this.props;
                        this.setMessageNotification(null != i ? i : f.UserNotificationSettings.NULL, t, N.NotificationLabel.muted(t))
                    }, this.handleDelete = () => {
                        let {
                            onDelete: e,
                            channel: t
                        } = this.props;
                        this.setMessageNotification(f.UserNotificationSettings.NULL, !1, N.NotificationLabels.OverrideDeleted), null != e && e(t.id)
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