"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7528], {
        207528: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => dt
            });
            var r = n(785893),
                s = n(667294),
                i = n(496486),
                o = n.n(i),
                a = n(730381),
                l = n.n(a),
                c = n(973935),
                u = n(809784),
                d = n(202351),
                h = n(795308),
                f = n(304548),
                g = n(201459),
                p = n(836009),
                S = n(777158),
                E = n(773011),
                m = n(344832),
                O = n(873936),
                N = n(998918),
                v = n(202958),
                _ = n(2590),
                b = n(247530),
                M = n(473708);

            function y() {
                return [{
                    label: M.Z.Messages.MUTE_DURATION_15_MINUTES,
                    value: b.Oe.MINUTES_15
                }, {
                    label: M.Z.Messages.MUTE_DURATION_1_HOUR,
                    value: b.Oe.HOURS_1
                }, {
                    label: M.Z.Messages.MUTE_DURATION_3_HOURS,
                    value: b.Oe.HOURS_3
                }, {
                    label: M.Z.Messages.MUTE_DURATION_8_HOURS,
                    value: b.Oe.HOURS_8
                }, {
                    label: M.Z.Messages.MUTE_DURATION_24_HOURS,
                    value: b.Oe.HOURS_24
                }, {
                    label: M.Z.Messages.MUTE_DURATION_ALWAYS,
                    value: b.Oe.ALWAYS
                }]
            }

            function T(e) {
                return Object.keys(e).filter((function(t) {
                    return !(!(0, p.m)(e[t]) && e[t].message_notifications === _.bL.NULL)
                }))
            }
            var L = n(441394),
                I = n(61209),
                x = n(877475),
                R = n(840922),
                C = n(473903),
                j = n(107364),
                A = n(936531),
                Z = n.n(A);

            function U(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function P(e) {
                P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return P(e)
            }

            function w(e, t) {
                return !t || "object" !== H(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }
            var H = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = P(e);
                    if (t) {
                        var s = P(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }
            var F = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && D(e, t)
                    }(n, e);
                    var t = G(n);

                    function n() {
                        U(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            highlight: !1
                        };
                        e.unhighlight = function() {
                            e.setState({
                                highlight: !1
                            })
                        };
                        e.handleMute = function(t, n) {
                            var r = e.props.messageNotifications;
                            e.setMessageNotification(null != r ? r : _.bL.NULL, n)
                        };
                        e.handleDelete = function() {
                            var t = e.props,
                                n = t.onDelete,
                                r = t.channel;
                            e.setMessageNotification(_.bL.NULL, !1);
                            null != n && n(r.id)
                        };
                        return e
                    }
                    var s = n.prototype;
                    s.highlight = function() {
                        var e = this;
                        this.setState({
                            highlight: !0
                        }, (function() {
                            null != e._timeout && clearTimeout(e._timeout);
                            e._timeout = setTimeout(e.unhighlight, 1e3)
                        }))
                    };
                    s.componentWillUnmount = function() {
                        null != this._timeout && clearTimeout(this._timeout)
                    };
                    s.setMessageNotification = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.props.channel,
                            r = n.getGuildId();
                        null != r && g.Z.updateChannelOverrideSettings(r, n.id, {
                            message_notifications: e,
                            muted: t
                        })
                    };
                    s.handleRadioChange = function(e) {
                        this.setMessageNotification(e)
                    };
                    s.renderMessageNotificationsRadioOption = function(e) {
                        var t = this.props,
                            n = t.messageNotifications,
                            s = t.guildMuted,
                            i = t.muted,
                            o = t.guildMessageNotifications,
                            a = t.checkboxColor,
                            l = n === e;
                        null != n && n !== _.bL.NULL || e !== o || (l = !0);
                        var c = f.Checkbox.Types.INVERTED;
                        (i || n === _.bL.NULL || null == n) && (c = f.Checkbox.Types.GHOST);
                        return (0, r.jsx)(f.Checkbox, {
                            value: !s && l,
                            disabled: s,
                            shape: f.Checkbox.Shapes.ROUND,
                            color: a,
                            type: c,
                            onChange: this.handleRadioChange.bind(this, e)
                        })
                    };
                    s.renderName = function() {
                        var e, t = this.props.channel;
                        null != t.parent_id && (e = I.Z.getChannel(t.parent_id));
                        var n, s = (0, m.KS)(t);
                        if (t.type === _.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id) {
                            var i = x.Z.getCategories(t.guild_id);
                            n = M.Z.Messages.NUM_CHANNELS.format({
                                num: null != i[t.id] ? i[t.id].length : 0
                            })
                        } else n = null != e ? M.Z.Messages.IN_CATEGORY.format({
                            categoryName: (0, E.F6)(e, C.default, R.Z)
                        }) : M.Z.Messages.NO_CATEGORY;
                        return (0, r.jsxs)(j.Z, {
                            grow: 1,
                            className: Z().nameContainer,
                            children: [null != s ? (0, r.jsx)(s, {
                                className: Z().icon
                            }) : null, (0, r.jsxs)("div", {
                                className: Z().channelNameContainer,
                                children: [(0, r.jsx)(f.Text, {
                                    variant: "text-md/semibold",
                                    className: Z().channelName,
                                    children: (0, E.F6)(t, C.default, R.Z)
                                }), (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    className: Z().channelNameByline,
                                    children: n
                                })]
                            })]
                        })
                    };
                    s.renderOptions = function() {
                        var e = this.props,
                            t = e.muted,
                            n = e.guildMuted;
                        return (0, r.jsxs)(j.Z, {
                            grow: 0,
                            shrink: 0,
                            className: Z().checkboxGroup,
                            justify: j.Z.Justify.AROUND,
                            align: j.Z.Align.CENTER,
                            children: [(0, r.jsx)(j.Z.Child, {
                                wrap: !0,
                                grow: 0,
                                shrink: 0,
                                className: n ? Z().checkboxContainerMuted : Z().checkboxContainer,
                                children: this.renderMessageNotificationsRadioOption(_.bL.ALL_MESSAGES)
                            }), (0, r.jsx)(j.Z.Child, {
                                wrap: !0,
                                grow: 0,
                                shrink: 0,
                                className: n ? Z().checkboxContainerMuted : Z().checkboxContainer,
                                children: this.renderMessageNotificationsRadioOption(_.bL.ONLY_MENTIONS)
                            }), (0, r.jsx)(j.Z.Child, {
                                wrap: !0,
                                grow: 0,
                                shrink: 0,
                                className: n ? Z().checkboxContainerMuted : Z().checkboxContainer,
                                children: this.renderMessageNotificationsRadioOption(_.bL.NO_MESSAGES)
                            }), (0, r.jsx)(j.Z.Child, {
                                wrap: !0,
                                grow: 0,
                                shrink: 0,
                                className: Z().checkboxMute,
                                children: (0, r.jsx)(f.Checkbox, {
                                    value: t,
                                    shape: f.Checkbox.Shapes.BOX,
                                    type: f.Checkbox.Types.INVERTED,
                                    onChange: this.handleMute
                                })
                            })]
                        })
                    };
                    s.render = function() {
                        var e = this.state.highlight;
                        return (0, r.jsxs)(f.Card, {
                            outline: !0,
                            editable: !0,
                            className: e ? Z().overrideHighlight : Z().override,
                            children: [this.renderName(), this.renderOptions(), (0, r.jsx)(L.Z, {
                                className: Z().removeOverride,
                                onClick: this.handleDelete
                            })]
                        })
                    };
                    return n
                }(s.PureComponent),
                B = n(382060),
                k = n(27851),
                Y = n(567403),
                V = n(9430),
                z = n(744564);

            function W(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function K(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function X(e) {
                X = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return X(e)
            }

            function $(e, t) {
                return !t || "object" !== J(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function q(e, t) {
                q = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return q(e, t)
            }
            var J = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Q(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = X(e);
                    if (t) {
                        var s = X(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return $(this, n)
                }
            }
            var ee = {
                    ALL: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: _.gLR.ENABLED,
                        mobilePushNotifications: _.bL.ALL_MESSAGES,
                        inAppNotifications: _.bL.ALL_MESSAGES,
                        serverUnreads: _.bL.ALL_MESSAGES,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    },
                    ESSENTIALS: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: _.gLR.ENABLED,
                        mobilePushNotifications: _.bL.ONLY_MENTIONS,
                        inAppNotifications: _.bL.ONLY_MENTIONS,
                        serverUnreads: _.bL.ONLY_MENTIONS,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    },
                    MUTED: {
                        suppressEveryone: !0,
                        suppressAllRoleMentions: !0,
                        notifyHighlights: _.gLR.DISABLED,
                        mobilePushNotifications: _.bL.NO_MESSAGES,
                        inAppNotifications: _.bL.NO_MESSAGES,
                        serverUnreads: _.bL.NO_MESSAGES,
                        muteScheduledEvents: !0,
                        muted: !0,
                        muteConfig: {
                            end_time: null
                        }
                    },
                    CUSTOM: {
                        suppressEveryone: !1,
                        suppressAllRoleMentions: !1,
                        notifyHighlights: _.gLR.ENABLED,
                        mobilePushNotifications: _.bL.ONLY_MENTIONS,
                        inAppNotifications: _.bL.ONLY_MENTIONS,
                        serverUnreads: _.bL.ONLY_MENTIONS,
                        muteScheduledEvents: !1,
                        muted: !1,
                        muteConfig: void 0
                    }
                },
                te = ee,
                ne = {},
                re = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && q(e, t)
                    }(n, e);
                    var t = Q(n);

                    function n() {
                        W(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.getState = function() {
                        return {
                            userNotificationProfiles: te,
                            selectedProfiles: ne
                        }
                    };
                    r.initialize = function(e) {
                        null != e && (te = e.userNotificationProfiles)
                    };
                    r.getNotificationProfiles = function() {
                        return te
                    };
                    r.getSelectedProfile = function(e, t, n) {
                        null == ne[e] && (ne[e] = ie(t, n));
                        return {
                            selectedOption: ne[e],
                            profile: te[ne[e]]
                        }
                    };
                    return n
                }(d.ZP.PersistedStore);
            re.displayName = "NotificationProfilesStore";
            re.persistKey = "NotificationProfilesStore";
            var se = function(e) {
                    return {
                        muted: e.muted,
                        mute_config: e.muteConfig,
                        message_notifications: e.serverUnreads,
                        mobile_push: e.mobilePushNotifications !== _.bL.NO_MESSAGES,
                        suppress_everyone: e.suppressEveryone,
                        suppress_roles: e.suppressAllRoleMentions,
                        mute_scheduled_events: e.muteScheduledEvents,
                        notify_highlights: e.notifyHighlights
                    }
                },
                ie = function(e, t) {
                    if (e.muted) return "MUTED";
                    if (e.message_notifications === _.bL.ALL_MESSAGES) return "ALL";
                    if (t) {
                        var n, r, s, i, o, a, l, c = (te = ee).CUSTOM.mobilePushNotifications;
                        null === e.mobile_push || void 0 === e.mobile_push || e.mobile_push || (c = _.bL.NO_MESSAGES);
                        te.CUSTOM = {
                            muted: null !== (n = e.muted) && void 0 !== n ? n : te.CUSTOM.muted,
                            muteConfig: null !== (r = e.mute_config) && void 0 !== r ? r : te.CUSTOM.muteConfig,
                            serverUnreads: null !== (s = e.message_notifications) && void 0 !== s ? s : te.CUSTOM.serverUnreads,
                            mobilePushNotifications: c,
                            suppressEveryone: null !== (i = e.suppress_everyone) && void 0 !== i ? i : te.CUSTOM.suppressEveryone,
                            suppressAllRoleMentions: null !== (o = e.suppress_roles) && void 0 !== o ? o : te.CUSTOM.suppressAllRoleMentions,
                            muteScheduledEvents: null !== (a = e.mute_scheduled_events) && void 0 !== a ? a : te.CUSTOM.muteScheduledEvents,
                            notifyHighlights: null !== (l = e.notify_highlights) && void 0 !== l ? l : te.CUSTOM.notifyHighlights,
                            inAppNotifications: te.CUSTOM.inAppNotifications
                        }
                    }
                    return "CUSTOM"
                },
                oe = new re(z.Z, {
                    GUILD_SET_NOTIFICATION_PROFILE: function(e) {
                        ne[e.guildId] = e.profile;
                        e.handleUpdate(e.guildId, se(te[ne[e.guildId]]))
                    },
                    GUILD_UPDATE_NOTIFICATION_PROFILE: function(e) {
                        te[e.profile] = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    K(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, te[e.profile], e.updatedSettings);
                        e.handleUpdate(e.guildId, se(te[e.profile]))
                    }
                });
            const ae = oe;
            var le = n(563221),
                ce = n(72580),
                ue = n(666812),
                de = n.n(ue);

            function he(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function fe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ge(e, t) {
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

            function pe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, i = [],
                            o = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return he(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return he(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Se = function(e) {
                var t = I.Z.getChannel(e.value);
                if (null == t) return e.label;
                var n = I.Z.getChannel(t.parent_id),
                    s = null != n ? n.name : null;
                return (0, r.jsx)(le.Z, {
                    icon: (0, m.KS)(t),
                    title: e.label,
                    subtitle: s
                })
            };

            function Ee(e) {
                var t = e.channelOverrides,
                    n = e.guildMuted,
                    i = e.channels,
                    a = e.messageNotifications,
                    l = e.categories,
                    c = pe(s.useState(new Set(T(t))), 2),
                    u = c[0],
                    d = c[1],
                    g = function(e) {
                        var t = new Set(u);
                        t.delete(e);
                        d(t)
                    },
                    S = (0, f.useToken)(h.Z.unsafe_rawColors.GREEN_360).hex(),
                    m = o()(i).filter((function(e) {
                        var t = e.channel;
                        return t.type !== _.d4z.GUILD_CATEGORY || null != l[t.id] && l[t.id].length > 0
                    })).map((function(e) {
                        var t = e.channel;
                        return {
                            value: t.id,
                            label: (0, E.F6)(t, C.default, R.Z)
                        }
                    })).value(),
                    O = i.map((function(e) {
                        var s = e.channel;
                        if (!u.has(s.id) || null != l[s.id] && 0 === l[s.id].length) return null;
                        var i = t[s.id];
                        return (0, r.jsx)(F, {
                            channel: s,
                            guildMuted: n,
                            muted: null != i && (0, p.m)(i),
                            messageNotifications: null != i ? i.message_notifications : null,
                            guildMessageNotifications: a,
                            onDelete: g,
                            checkboxColor: S
                        }, s.id)
                    })).filter(ce.lm);
                0 !== u.size && 0 !== O.length || O.push((0, r.jsx)("div", {
                    className: de().overridePlaceholder,
                    children: (0, r.jsx)(f.Text, {
                        className: de().overrideHeader,
                        variant: "text-sm/semibold",
                        children: M.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
                    })
                }, "placeholder"));
                return (0, r.jsxs)("div", {
                    className: de().container,
                    children: [(0, r.jsxs)(f.FormItem, {
                        title: M.Z.Messages.NOTIFICATION_OVERRIDES,
                        className: de().largeSpacing,
                        children: [(0, r.jsx)(f.FormText, {
                            type: f.FormText.Types.DESCRIPTION,
                            className: de().smallSpacing,
                            children: M.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, r.jsx)(f.SearchableSelect, {
                            value: "",
                            placeholder: M.Z.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: Se,
                            options: m,
                            onChange: function(e) {
                                if (null != e) {
                                    var t = new Set(u);
                                    t.add(e);
                                    d(t)
                                }
                            }
                        })]
                    }), (0, r.jsxs)("div", {
                        className: de().overrideList,
                        children: [(0, r.jsxs)(j.Z, {
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: de().headerName,
                                children: M.Z.Messages.CHANNEL_OR_CATEGORY
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: de().headerOption,
                                children: M.Z.Messages.FORM_LABEL_ALL
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: de().headerOption,
                                children: M.Z.Messages.FORM_LABEL_MENTIONS
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: de().headerOption,
                                children: M.Z.Messages.FORM_LABEL_NOTHING
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: de().headerOption,
                                children: (0, r.jsx)(f.Tooltip, {
                                    text: M.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: function(e) {
                                        return (0, r.jsx)("span", ge(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                }))));
                                                r.forEach((function(t) {
                                                    fe(e, t, n[t])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            children: M.Z.Messages.SOUND_MUTE
                                        }))
                                    }
                                })
                            })]
                        }), O]
                    })]
                })
            }
            var me, Oe = n(414392),
                Ne = n(159310),
                ve = n(714320),
                _e = n(883559),
                be = n(294184),
                Me = n.n(be),
                ye = n(737797);
            ! function(e) {
                e.MUTED = "muted";
                e.SERVER_UNREADS = "serverUnreads";
                e.SUPPRESS_EVERYONE = "suppressEveryone";
                e.SUPPRESS_ROLES = "suppressAllRoleMentions";
                e.MOBILE_PUSH = "mobilePushNotifications";
                e.MUTE_EVENTS = "muteScheduledEvents";
                e.NOTIFY_HIGHLIGHTS = "notifyHighlights";
                e.MUTE_CONFIG = "muteConfig"
            }(me || (me = {}));
            var Te = n(925714),
                Le = n.n(Te);

            function Ie(e) {
                var t = e.guild,
                    n = e.suppressEveryone,
                    i = e.suppressRoles,
                    o = e.mobilePush,
                    a = e.serverUnreads,
                    l = e.notifyHighlights,
                    c = s.useMemo((function() {
                        return [{
                            value: _.bL.ALL_MESSAGES,
                            label: M.Z.Messages.USER_UNREADS_ALL_MESSAGES
                        }, {
                            value: _.bL.ONLY_MENTIONS,
                            label: M.Z.Messages.USER_UNREADS_MENTIONS_AND_HIGHLIGHTS
                        }, {
                            value: _.bL.NO_MESSAGES,
                            label: M.Z.Messages.USER_UNREADS_NULL
                        }]
                    }), []);
                return (0, r.jsx)("div", {
                    className: Me()(Le().largeSpacing, Le().container),
                    children: (0, r.jsxs)(f.FormItem, {
                        children: [(0, r.jsxs)("div", {
                            className: Le().dropDownContainer,
                            children: [(0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                children: M.Z.Messages.MOBILE_PUSH
                            }), (0, r.jsx)(ye.Z, {
                                value: o,
                                className: Le().dropDown,
                                options: c,
                                onChange: function(e) {
                                    g.Z.handleSelectChange("CUSTOM", me.MOBILE_PUSH, e.value, t)
                                }
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Le().dropDownContainer,
                            children: [(0, r.jsxs)(f.Text, {
                                variant: "text-md/medium",
                                children: [" ", M.Z.Messages.SERVER_UNREADS]
                            }), (0, r.jsx)(ye.Z, {
                                value: a,
                                className: Le().dropDown,
                                options: c,
                                onChange: function(e) {
                                    g.Z.handleSelectChange("CUSTOM", me.SERVER_UNREADS, e.value, t)
                                }
                            })]
                        }), (0, r.jsx)(f.FormSwitch, {
                            className: Le().switchItemContainer,
                            onChange: function(e) {
                                return g.Z.handleCheckboxChange("CUSTOM", me.SUPPRESS_EVERYONE, !e, t)
                            },
                            hideBorder: !0,
                            value: !n,
                            children: M.Z.Messages.NOTIFY_AT_EVERYONE
                        }), (0, r.jsx)(f.FormSwitch, {
                            className: Le().switchItemContainer,
                            onChange: function(e) {
                                return g.Z.handleCheckboxChange("CUSTOM", me.SUPPRESS_ROLES, !e, t)
                            },
                            hideBorder: !0,
                            value: !i,
                            children: M.Z.Messages.NOTIFY_ROLES
                        }), (0, r.jsx)(f.FormSwitch, {
                            className: Le().switchItemContainer,
                            onChange: function(e) {
                                return g.Z.handleHighlightsChange("CUSTOM", e ? _.gLR.ENABLED : _.gLR.DISABLED, t)
                            },
                            hideBorder: !0,
                            value: l === _.gLR.ENABLED,
                            children: M.Z.Messages.NOTIFY_HIGHLIGHTS
                        }), (0, r.jsx)(f.Text, {
                            className: Le().highlightsText,
                            variant: "text-xs/normal",
                            children: M.Z.Messages.NOTIFY_HIGHLIGHTS_DESC
                        })]
                    })
                })
            }
            var xe = n(124251),
                Re = n(819162),
                Ce = n(255061),
                je = n.n(Ce);

            function Ae(e) {
                var t = e.setting,
                    n = e.guild,
                    s = function(e) {
                        switch (e) {
                            case _.bL.ALL_MESSAGES:
                                return M.Z.Messages.USER_UNREADS_ALL_MESSAGES;
                            case _.bL.ONLY_MENTIONS:
                                return M.Z.Messages.USER_UNREADS_MENTIONS_AND_HIGHLIGHTS;
                            case _.bL.NO_MESSAGES:
                                return M.Z.Messages.USER_UNREADS_NULL
                        }
                    }(t),
                    i = (0, f.useToken)(h.Z.unsafe_rawColors.WHITE_500).hex();
                return (0, r.jsxs)("div", {
                    className: je().container,
                    children: [(0, r.jsxs)("div", {
                        className: je().settingContainer,
                        children: [(0, r.jsxs)("div", {
                            className: je().guildIconContainer,
                            children: [t !== _.bL.NO_MESSAGES && (0, r.jsx)("div", {
                                className: je().semiCircle
                            }), (0, r.jsx)(xe.Z, {
                                guild: n,
                                size: xe.Z.Sizes.SMALLER
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                children: M.Z.Messages.SERVER_UNREAD_BADGE
                            }), (0, r.jsx)(f.Text, {
                                variant: "text-sm/medium",
                                children: s
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: je().settingContainer,
                        children: [(0, r.jsxs)("div", {
                            className: je().discordIconContainer,
                            children: [(0, r.jsx)(Re.Z, {
                                width: 24,
                                height: 24,
                                color: i
                            }), t !== _.bL.NO_MESSAGES && (0, r.jsx)("div", {
                                className: je().notificationBadge,
                                children: (0, r.jsx)(f.Text, {
                                    className: je().messageCount,
                                    variant: "text-xs/bold",
                                    children: "3"
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(f.Text, {
                                variant: "text-xs/normal",
                                children: M.Z.Messages.MOBILE_PUSH
                            }), (0, r.jsx)(f.Text, {
                                variant: "text-sm/medium",
                                children: s
                            })]
                        })]
                    })]
                })
            }

            function Ze(e) {
                var t = e.guild,
                    n = e.suppressEveryone,
                    s = e.suppressRoles,
                    i = e.notifyHighlights;
                return (0, r.jsxs)("div", {
                    className: Le().container,
                    children: [(0, r.jsx)(Ae, {
                        setting: _.bL.ONLY_MENTIONS,
                        guild: t
                    }), (0, r.jsx)("div", {
                        className: Le().divider
                    }), (0, r.jsx)("div", {
                        className: Le().largeSpacing,
                        children: (0, r.jsxs)(f.FormItem, {
                            children: [(0, r.jsx)(f.FormSwitch, {
                                onChange: function(e) {
                                    return g.Z.handleCheckboxChange("ESSENTIALS", me.SUPPRESS_EVERYONE, !e, t)
                                },
                                hideBorder: !0,
                                value: !n,
                                children: M.Z.Messages.NOTIFY_AT_EVERYONE
                            }), (0, r.jsx)(f.FormSwitch, {
                                onChange: function(e) {
                                    return g.Z.handleCheckboxChange("ESSENTIALS", me.SUPPRESS_ROLES, !e, t)
                                },
                                hideBorder: !0,
                                value: !s,
                                children: M.Z.Messages.NOTIFY_ROLES
                            }), (0, r.jsx)(f.FormSwitch, {
                                className: Le().switchItemContainer,
                                onChange: function(e) {
                                    return g.Z.handleHighlightsChange("ESSENTIALS", e ? _.gLR.ENABLED : _.gLR.DISABLED, t)
                                },
                                hideBorder: !0,
                                value: i === _.gLR.ENABLED,
                                children: M.Z.Messages.NOTIFY_HIGHLIGHTS
                            }), (0, r.jsx)(f.Text, {
                                className: Le().highlightsText,
                                variant: "text-xs/normal",
                                children: M.Z.Messages.NOTIFY_HIGHLIGHTS_DESC
                            })]
                        })
                    })]
                })
            }

            function Ue(e) {
                var t, n = e.guild,
                    s = e.muteConfig,
                    i = null !== (t = null == s ? void 0 : s.selected_time_window) && void 0 !== t ? t : b.Oe.ALWAYS;
                return (0, r.jsxs)("div", {
                    className: Le().container,
                    children: [(0, r.jsx)(Ae, {
                        setting: _.bL.NO_MESSAGES,
                        guild: n
                    }), (0, r.jsx)("div", {
                        className: Le().divider
                    }), (0, r.jsx)("div", {
                        className: Le().largeSpacing,
                        children: (0, r.jsx)(f.FormItem, {
                            children: (0, r.jsxs)("div", {
                                className: Le().dropDownContainer,
                                children: [(0, r.jsxs)(f.Text, {
                                    variant: "text-md/medium",
                                    children: [" ", M.Z.Messages.MUTE_DURATION]
                                }), (0, r.jsx)(ye.Z, {
                                    value: i,
                                    className: Le().dropDown,
                                    options: y(),
                                    onChange: function(e) {
                                        g.Z.handleMuteConfigChange(me.MUTE_CONFIG, e.value, n)
                                    }
                                })]
                            })
                        })
                    })]
                })
            }
            var Pe = n(21053),
                we = n.n(Pe);

            function De(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function He(e, t) {
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

            function Ge(e) {
                var t = e.selectedProfile,
                    n = e.userNotificationProfiles,
                    s = e.guild,
                    i = Object.entries(n);
                if (null == s) return null;
                var o = i.map((function(e) {
                    var t = e[0],
                        n = e[1],
                        i = function(e) {
                            switch (e) {
                                case "ALL":
                                    return {
                                        name: M.Z.Messages.ALL_PROFILE_TITLE, desc: M.Z.Messages.ALL_PROFILE_DESC, icon: Oe.Z
                                    };
                                case "ESSENTIALS":
                                    return {
                                        name: M.Z.Messages.ESSENTIALS_PROFILE_TITLE, desc: M.Z.Messages.ESSENTIALS_PROFILE_DESC, icon: ve.Z
                                    };
                                case "MUTED":
                                    return {
                                        name: M.Z.Messages.MUTED_PROFILE_NAME, desc: M.Z.Messages.MUTED_PROFILE_DESC, icon: Ne.Z
                                    };
                                case "CUSTOM":
                                    return {
                                        name: M.Z.Messages.CUSTOM_PROFILE_NAME, desc: M.Z.Messages.CUSTOM_PROFILE_DESC, icon: _e.Z
                                    }
                            }
                        }(t),
                        o = function(e, t, n) {
                            switch (e) {
                                case "ALL":
                                    return (0, r.jsx)(Ae, {
                                        setting: _.bL.ALL_MESSAGES,
                                        guild: n
                                    });
                                case "ESSENTIALS":
                                    return (0, r.jsx)(Ze, {
                                        guild: n,
                                        suppressEveryone: t.suppressEveryone,
                                        suppressRoles: t.suppressAllRoleMentions,
                                        notifyHighlights: t.notifyHighlights
                                    });
                                case "MUTED":
                                    return (0, r.jsx)(Ue, {
                                        guild: n,
                                        muteConfig: t.muteConfig
                                    });
                                case "CUSTOM":
                                    return (0, r.jsx)(Ie, {
                                        guild: n,
                                        suppressEveryone: t.suppressEveryone,
                                        suppressRoles: t.suppressAllRoleMentions,
                                        mobilePush: t.mobilePushNotifications,
                                        serverUnreads: t.serverUnreads,
                                        notifyHighlights: t.notifyHighlights
                                    })
                            }
                        }(t, n, s);
                    return He(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                De(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, i), {
                        value: t,
                        radioItemIconClassName: we().radioIcon,
                        collapsibleContent: o
                    })
                }));
                return (0, r.jsx)(f.RadioGroup, {
                    options: o,
                    value: t,
                    onChange: function(e) {
                        g.Z.handleProfileChange(e, s)
                    },
                    radioItemClassName: we().radioItem
                })
            }
            var Fe = n(704166),
                Be = n.n(Fe);

            function ke(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ye(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ve(e, t) {
                if (null == e) return {};
                var n, r, s = function(e, t) {
                    if (null == e) return {};
                    var n, r, s = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (s[n] = e[n])
                    }
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                    }
                }
                return s
            }

            function ze(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, s, i = [],
                            o = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ke(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ke(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var We = function(e) {
                var t, n = e.guildId,
                    i = e.guild,
                    o = e.muted,
                    a = e.muteConfig,
                    l = e.messageNotifications,
                    c = e.mobilePush,
                    u = e.suppressEveryone,
                    h = e.suppressRoles,
                    g = e.notifyHighlights,
                    p = e.muteEvents,
                    S = e.channelOverrides,
                    E = e.categories,
                    m = e.channels,
                    O = e.transitionState,
                    N = e.onClose,
                    v = ze(s.useState("SERVER_NOTIFICATIONS"), 2),
                    _ = v[0],
                    b = v[1],
                    y = (0, d.cj)([ae], (function() {
                        return {
                            userNotificationProfiles: ae.getNotificationProfiles(),
                            selectedProfile: ae.getSelectedProfile(n, {
                                muted: o,
                                mute_config: a,
                                message_notifications: l,
                                mobile_push: c,
                                suppress_everyone: u,
                                suppress_roles: h,
                                notify_highlights: g
                            }, !0)
                        }
                    }), [n, l, c, a, o, g, u, h]),
                    T = y.userNotificationProfiles,
                    L = y.selectedProfile;
                if (null == i || null == T || null == L) return null;
                switch (_) {
                    case "SERVER_NOTIFICATIONS":
                        t = (0, r.jsx)(Ge, {
                            guildId: n,
                            guild: i,
                            muted: o,
                            muteConfig: a,
                            messageNotifications: l,
                            mobilePush: c,
                            suppressEveryone: u,
                            suppressRoles: h,
                            selectedProfile: L.selectedOption,
                            userNotificationProfiles: T,
                            muteEvents: p
                        });
                        break;
                    case "CHANNEL_OVERRIDES":
                        t = (0, r.jsx)(Ee, {
                            guildMuted: o,
                            messageNotifications: l,
                            channelOverrides: S,
                            categories: E,
                            channels: m
                        })
                }
                return (0, r.jsxs)(f.ModalRoot, {
                    className: Be().modal,
                    "aria-label": M.Z.Messages.NOTIFICATION_SETTINGS,
                    size: f.ModalSize.MEDIUM,
                    transitionState: O,
                    children: [(0, r.jsxs)(f.ModalHeader, {
                        children: [(0, r.jsxs)(j.Z.Child, {
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "heading-lg/semibold",
                                children: M.Z.Messages.NOTIFICATION_SETTINGS
                            }), (0, r.jsx)(f.Text, {
                                className: Be().subtitleText,
                                variant: "text-xs/normal",
                                children: i.name
                            })]
                        }), (0, r.jsx)(j.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(f.ModalCloseButton, {
                                onClick: N
                            })
                        })]
                    }), (0, r.jsxs)(f.ModalContent, {
                        className: Be().content,
                        children: [(0, r.jsxs)(f.TabBar, {
                            className: Be().tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: _,
                            onItemSelect: b,
                            children: [(0, r.jsx)(f.TabBar.Item, {
                                className: Be().tabBarItem,
                                id: "SERVER_NOTIFICATIONS",
                                children: M.Z.Messages.SERVER_NOTIFICATIONS_TAB
                            }, "SERVER_NOTIFICATIONS"), (0, r.jsx)(f.TabBar.Item, {
                                className: Be().tabBarItem,
                                id: "CHANNEL_OVERRIDES",
                                children: M.Z.Messages.CHANNEL_OVERRIDES_TAB
                            }, "CHANNEL_OVERRIDES")]
                        }), t]
                    })]
                })
            };

            function Ke(e) {
                var t = e.guildId,
                    n = Ve(e, ["guildId"]),
                    s = (0, N.RX)(),
                    i = (0, d.cj)([x.Z, Y.Z, k.Z, V.Z], (function() {
                        var e = x.Z.getCategories(t);
                        return {
                            guildId: t,
                            categories: e,
                            guild: Y.Z.getGuild(t),
                            memberCount: k.Z.getMemberCount(t),
                            suppressEveryone: V.Z.isSuppressEveryoneEnabled(t),
                            suppressRoles: V.Z.isSuppressRolesEnabled(t),
                            muteEvents: V.Z.isMuteScheduledEventsEnabled(t),
                            mobilePush: V.Z.isMobilePushEnabled(t),
                            muted: V.Z.isMuted(t),
                            muteConfig: V.Z.getMuteConfig(t),
                            messageNotifications: V.Z.getMessageNotifications(t),
                            channelOverrides: V.Z.getChannelOverrides(t),
                            channels: (0, S.Z)(e._categories, e, (function(e) {
                                var t = e.channel.type;
                                return (0, B.r8)(t) || t === _.d4z.GUILD_CATEGORY
                            })),
                            notifyHighlights: V.Z.getNotifyHighlights(t),
                            showUnreadsSettings: s,
                            isGuildUnreadsEnabled: V.Z.isGuildUnreadSettingEnabled(t)
                        }
                    }));
                return (0, r.jsx)(We, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ye(e, t, n[t])
                        }))
                    }
                    return e
                }({}, i, n))
            }
            var Xe = n(70983),
                $e = n(531441),
                qe = n(348592);

            function Je(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Qe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function et(e) {
                et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return et(e)
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Qe(e, t, n[t])
                    }))
                }
                return e
            }

            function nt(e, t) {
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

            function rt(e, t) {
                if (null == e) return {};
                var n, r, s = function(e, t) {
                    if (null == e) return {};
                    var n, r, s = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (s[n] = e[n])
                    }
                    return s
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
                    }
                }
                return s
            }

            function st(e, t) {
                return !t || "object" !== at(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function it(e, t) {
                it = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return it(e, t)
            }
            var ot, at = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function lt(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = et(e);
                    if (t) {
                        var s = et(this).constructor;
                        n = Reflect.construct(r, arguments, s)
                    } else n = r.apply(this, arguments);
                    return st(this, n)
                }
            }! function(e) {
                e.MUTED = "muted";
                e.MESSAGE_NOTIFICATIONS = "message_notifications";
                e.SUPPRESS_EVERYONE = "suppress_everyone";
                e.SUPPRESS_ROLES = "suppress_roles";
                e.MOBILE_PUSH = "mobile_push";
                e.MUTE_EVENTS = "mute_scheduled_events";
                e.NOTIFY_HIGHLIGHTS = "notify_highlights"
            }(ot || (ot = {}));

            function ct(e) {
                return [{
                    name: M.Z.Messages.FORM_LABEL_ALL_MESSAGES,
                    value: _.bL.ALL_MESSAGES,
                    desc: null != e && e >= _.qWG ? M.Z.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
                }, {
                    name: M.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                    value: _.bL.ONLY_MENTIONS
                }, {
                    name: M.Z.Messages.FORM_LABEL_NOTHING,
                    value: _.bL.NO_MESSAGES
                }]
            }
            var ut = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && it(e, t)
                }(n, e);
                var t = lt(n);

                function n() {
                    Je(this, n);
                    var e;
                    (e = t.apply(this, arguments))._scroller = null;
                    e._channelRefs = {};
                    e.state = {
                        overrides: new Set(T(e.props.channelOverrides)),
                        channelOverridesProp: e.props.channelOverrides,
                        lastSelected: null
                    };
                    e.setScrollerRef = function(t) {
                        e._scroller = t
                    };
                    e.handleSelectChange = function(t) {
                        if (null != t) {
                            var n = e.state.overrides;
                            (n = new Set(n)).add(t);
                            e.setState({
                                overrides: n,
                                lastSelected: t
                            })
                        }
                    };
                    e.handleSelectMuteTime = function(t) {
                        var n = t > 0 ? l()().add(t, "second").toISOString() : null;
                        g.Z.updateGuildNotificationSettings(e.props.guildId, {
                            muted: !0,
                            mute_config: {
                                selected_time_window: t,
                                end_time: n
                            }
                        })
                    };
                    e.handleDeleteOverride = function(t) {
                        var n = e.state.overrides;
                        (n = new Set(n)).delete(t);
                        e.setState({
                            overrides: n
                        })
                    };
                    e.renderOptionLabel = function(e) {
                        var t = I.Z.getChannel(e.value);
                        if (null == t) return e.label;
                        var n = I.Z.getChannel(t.parent_id),
                            s = null != n ? n.name : null;
                        return (0, r.jsx)(le.Z, {
                            icon: (0, m.KS)(t),
                            title: e.label,
                            subtitle: s
                        })
                    };
                    return e
                }
                var s = n.prototype;
                s.componentDidUpdate = function(e, t) {
                    var n = this,
                        r = this.state.lastSelected,
                        s = null != r ? this._channelRefs[r] : null;
                    if (null != this._scroller && null != s && r !== t.lastSelected) {
                        var i = (0, c.findDOMNode)(s);
                        if (null != this._scroller && (0, u.k)(i, HTMLElement)) {
                            var o;
                            null === (o = this._scroller) || void 0 === o || o.scrollIntoViewNode({
                                node: i,
                                animate: !0,
                                padding: 20,
                                callback: function() {
                                    return n.setState({
                                        lastSelected: null
                                    })
                                }
                            });
                            s.highlight()
                        }
                    }
                    if (this.props.channelOverrides !== e.channelOverrides) {
                        var a = this.state.overrides;
                        a = new Set(a);
                        T(this.props.channelOverrides).forEach((function(e) {
                            return a.add(e)
                        }));
                        this.setState({
                            overrides: a
                        })
                    }
                };
                s.handleCheckboxChange = function(e, t) {
                    g.Z.updateGuildNotificationSettings(this.props.guildId, Qe({}, e, t))
                };
                s.handleRadioChange = function(e, t) {
                    var n = t.value;
                    g.Z.updateGuildNotificationSettings(this.props.guildId, Qe({}, e, n))
                };
                s.renderHeader = function() {
                    var e = this.props.guild;
                    return null == e ? null : (0, r.jsxs)(f.ModalHeader, {
                        children: [(0, r.jsxs)(j.Z.Child, {
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "heading-lg/semibold",
                                children: M.Z.Messages.NOTIFICATION_SETTINGS
                            }), (0, r.jsx)(f.Text, {
                                variant: "text-md/normal",
                                className: Z().guildName,
                                children: e.name
                            })]
                        }), (0, r.jsx)(j.Z.Child, {
                            grow: 0,
                            children: (0, r.jsx)(f.ModalCloseButton, {
                                onClick: this.props.onClose
                            })
                        })]
                    })
                };
                s.renderFooter = function() {
                    return (0, r.jsx)(f.ModalFooter, {
                        children: (0, r.jsx)(f.Button, {
                            onClick: this.props.onClose,
                            children: M.Z.Messages.DONE
                        })
                    })
                };
                s.renderMute = function() {
                    var e, t = this.props,
                        n = t.muted,
                        s = t.muteConfig,
                        i = t.guild,
                        o = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : b.Oe.ALWAYS;
                    return null == i ? null : (0, r.jsxs)(f.FormItem, {
                        className: Z().largeSpacing,
                        children: [(0, r.jsx)(f.FormSwitch, {
                            hideBorder: !0,
                            value: n,
                            onChange: this.handleCheckboxChange.bind(this, ot.MUTED),
                            note: M.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                            children: M.Z.Messages.FORM_LABEL_MUTE_SERVER.format({
                                name: i.name
                            })
                        }), n ? (0, r.jsxs)(j.Z, {
                            className: Z().spacing,
                            align: j.Z.Align.CENTER,
                            children: [(0, r.jsxs)(j.Z, {
                                direction: j.Z.Direction.VERTICAL,
                                className: Z().muteUntilTextWrapper,
                                children: [(0, r.jsx)(f.FormTitle, {
                                    tag: "h3",
                                    className: Z().muteUntilTitle,
                                    children: M.Z.Messages.MUTE_UNTIL
                                }), (0, r.jsx)(Xe.Z, {
                                    className: Z().muteUntilText,
                                    muteConfig: s
                                })]
                            }), (0, r.jsx)(f.SingleSelect, {
                                className: Z().muteTimeSelector,
                                options: y(),
                                value: o,
                                onChange: this.handleSelectMuteTime
                            })]
                        }) : null, (0, r.jsx)(f.FormDivider, {})]
                    })
                };
                s.renderServerSettings = function() {
                    var e = this.props,
                        t = e.messageNotifications,
                        n = e.muted,
                        s = e.memberCount;
                    return (0, r.jsxs)("div", {
                        className: Z().spacing,
                        children: [(0, r.jsx)(f.FormItem, {
                            title: M.Z.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
                            className: Z().largeSpacing,
                            children: (0, r.jsx)(f.RadioGroup, {
                                disabled: n,
                                value: t,
                                onChange: this.handleRadioChange.bind(this, ot.MESSAGE_NOTIFICATIONS),
                                options: ct(s)
                            })
                        }), (0, r.jsx)(f.FormDivider, {})]
                    })
                };
                s.renderUnreadsOptions = function() {
                    var e = this.props,
                        t = e.isGuildUnreadsEnabled,
                        n = e.muted,
                        s = e.guildId;
                    return (0, r.jsx)(f.FormItem, {
                        children: (0, r.jsx)(f.FormSwitch, {
                            onChange: function(e) {
                                (0, O.EQ)(s, e)
                            },
                            value: !n && t,
                            disabled: n,
                            note: (0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                children: M.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN_NOTE
                            }),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [M.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, r.jsx)($e.IG, {
                                    text: M.Z.Messages.BETA,
                                    color: h.Z.unsafe_rawColors.BRAND_500.css,
                                    className: Z().betaTag
                                })]
                            })
                        })
                    })
                };
                s.renderNotificationOptions = function() {
                    var e = this.props,
                        t = e.suppressEveryone,
                        n = e.suppressRoles,
                        s = e.mobilePush,
                        i = e.muted,
                        o = e.muteEvents,
                        a = e.notifyHighlights,
                        l = e.guildId;
                    return (0, r.jsxs)(f.FormItem, {
                        className: Z().largeSpacing,
                        children: [(0, r.jsx)(f.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, ot.SUPPRESS_EVERYONE),
                            value: t,
                            children: M.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
                        }), (0, r.jsx)(f.FormSwitch, {
                            onChange: this.handleCheckboxChange.bind(this, ot.SUPPRESS_ROLES),
                            value: n,
                            children: M.Z.Messages.FORM_LABEL_SUPPRESS_ROLES
                        }), (0, r.jsx)(f.FormSwitch, {
                            onChange: function(e) {
                                g.Z.updateGuildNotificationSettings(l, Qe({}, ot.NOTIFY_HIGHLIGHTS, e ? _.gLR.DISABLED : _.gLR.ENABLED))
                            },
                            value: i || a === _.gLR.DISABLED,
                            disabled: i,
                            note: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    children: M.Z.Messages.HIGHLIGHTS_NOTE_SUBTEXT
                                }), (0, r.jsx)("div", {
                                    className: Z().highlightsLink,
                                    children: (0, r.jsx)(f.Anchor, {
                                        href: qe.Z.getArticleURL(_.BhN.HIGHLIGHTS),
                                        children: M.Z.Messages.HIGHLIGHTS_LEARN_MORE
                                    })
                                })]
                            }),
                            children: (0,
                                r.jsx)(r.Fragment, {
                                children: M.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
                            })
                        }), (0, r.jsx)(f.FormSwitch, {
                            value: o,
                            onChange: this.handleCheckboxChange.bind(this, ot.MUTE_EVENTS),
                            children: M.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
                        }), (0, r.jsx)(f.FormSwitch, {
                            value: !i && s,
                            disabled: i,
                            onChange: this.handleCheckboxChange.bind(this, ot.MOBILE_PUSH),
                            children: M.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
                        })]
                    })
                };
                s.renderOverrideSelect = function() {
                    var e = this.props,
                        t = e.channels,
                        n = e.categories,
                        s = o()(t).filter((function(e) {
                            var t = e.channel;
                            return t.type !== _.d4z.GUILD_CATEGORY || null != n[t.id] && n[t.id].length > 0
                        })).map((function(e) {
                            var t = e.channel;
                            return {
                                value: t.id,
                                label: (0, E.F6)(t, C.default, R.Z)
                            }
                        })).value();
                    return (0, r.jsxs)(f.FormItem, {
                        title: M.Z.Messages.NOTIFICATION_OVERRIDES,
                        className: Z().largeSpacing,
                        children: [(0, r.jsx)(f.FormText, {
                            type: f.FormText.Types.DESCRIPTION,
                            className: Z().smallSpacing,
                            children: M.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
                        }), (0, r.jsx)(f.SearchableSelect, {
                            value: "",
                            placeholder: M.Z.Messages.SELECT_CHANNEL_OR_CATEGORY,
                            renderOptionLabel: this.renderOptionLabel,
                            options: s,
                            onChange: this.handleSelectChange
                        })]
                    })
                };
                s.renderChannelNotifications = function() {
                    var e = this,
                        t = this.props,
                        n = t.channelOverrides,
                        s = t.muted,
                        i = t.channels,
                        o = t.messageNotifications,
                        a = t.categories,
                        l = t.checkboxColor,
                        c = this.state.overrides,
                        u = i.map((function(t) {
                            var i = t.channel;
                            if (!c.has(i.id) || null != a[i.id] && 0 === a[i.id].length) return null;
                            var u = n[i.id];
                            return (0, r.jsx)(F, {
                                ref: function(t) {
                                    e._channelRefs[i.id] = t
                                },
                                channel: i,
                                guildMuted: s,
                                muted: null != u && (0, p.m)(u),
                                messageNotifications: null != u ? u.message_notifications : null,
                                guildMessageNotifications: o,
                                onDelete: e.handleDeleteOverride,
                                checkboxColor: l
                            }, i.id)
                        })).filter(ce.lm);
                    0 !== c.size && 0 !== u.length || u.push((0, r.jsx)("div", {
                        className: Z().overridePlaceholder,
                        children: (0, r.jsx)(f.Text, {
                            className: Z().overrideHeader,
                            variant: "text-sm/semibold",
                            children: M.Z.Messages.ADD_CHANNEL_TO_OVERRIDE
                        })
                    }, "placeholder"));
                    return (0, r.jsxs)("div", {
                        className: Z().overrideList,
                        children: [(0, r.jsxs)(j.Z, {
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: Z().headerName,
                                children: M.Z.Messages.CHANNEL_OR_CATEGORY
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: Z().headerOption,
                                children: M.Z.Messages.FORM_LABEL_ALL
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: Z().headerOption,
                                children: M.Z.Messages.FORM_LABEL_MENTIONS
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: Z().headerOption,
                                children: M.Z.Messages.FORM_LABEL_NOTHING
                            }), (0, r.jsx)(f.Heading, {
                                variant: "eyebrow",
                                className: Z().headerOption,
                                children: (0, r.jsx)(f.Tooltip, {
                                    text: M.Z.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
                                    position: "bottom",
                                    children: function(e) {
                                        return (0, r.jsx)("span", nt(tt({}, e), {
                                            children: M.Z.Messages.SOUND_MUTE
                                        }))
                                    }
                                })
                            })]
                        }), u]
                    })
                };
                s.render = function() {
                    var e = this.props.showUnreadsSettings;
                    return (0, r.jsxs)(f.ModalRoot, {
                        "aria-label": M.Z.Messages.NOTIFICATION_SETTINGS,
                        size: f.ModalSize.MEDIUM,
                        transitionState: this.props.transitionState,
                        children: [this.renderHeader(), (0,
                            r.jsxs)(f.ModalContent, {
                            scrollerRef: this.setScrollerRef,
                            children: [this.renderMute(), this.renderServerSettings(), e && this.renderUnreadsOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                        }), this.renderFooter()]
                    })
                };
                n.getDerivedStateFromProps = function(e, t) {
                    var n = t.overrides,
                        r = t.channelOverridesProp;
                    if (e.channelOverrides !== r) {
                        n = new Set(n);
                        T(e.channelOverrides).forEach((function(e) {
                            return n.add(e)
                        }));
                        return {
                            overrides: n,
                            channelOverridesProp: e.channelOverrides
                        }
                    }
                    return null
                };
                return n
            }(s.PureComponent);

            function dt(e) {
                var t = e.guildId,
                    n = rt(e, ["guildId"]),
                    s = (0, N.RX)(),
                    i = (0, v.ln)(),
                    o = (0, d.cj)([x.Z, Y.Z, k.Z, V.Z], (function() {
                        var e = x.Z.getCategories(t);
                        return {
                            guildId: t,
                            categories: e,
                            guild: Y.Z.getGuild(t),
                            memberCount: k.Z.getMemberCount(t),
                            suppressEveryone: V.Z.isSuppressEveryoneEnabled(t),
                            suppressRoles: V.Z.isSuppressRolesEnabled(t),
                            muteEvents: V.Z.isMuteScheduledEventsEnabled(t),
                            mobilePush: V.Z.isMobilePushEnabled(t),
                            muted: V.Z.isMuted(t),
                            muteConfig: V.Z.getMuteConfig(t),
                            messageNotifications: V.Z.getMessageNotifications(t),
                            channelOverrides: V.Z.getChannelOverrides(t),
                            channels: (0, S.Z)(e._categories, e, (function(e) {
                                var t = e.channel.type;
                                return (0, B.r8)(t) || t === _.d4z.GUILD_CATEGORY
                            })),
                            notifyHighlights: V.Z.getNotifyHighlights(t),
                            showUnreadsSettings: s,
                            isGuildUnreadsEnabled: V.Z.isGuildUnreadSettingEnabled(t)
                        }
                    })),
                    a = (0, f.useToken)(h.Z.unsafe_rawColors.GREEN_360).hex(),
                    l = i ? Ke : ut;
                return (0, r.jsx)(l, nt(tt({}, o, n), {
                    checkboxColor: a
                }))
            }
        }
    }
]);