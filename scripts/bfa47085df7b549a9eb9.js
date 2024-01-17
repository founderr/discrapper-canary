(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21356"], {
        445356: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, l) {
            "use strict";
            e.exports = l.p + "08e581a604e6635d1424.svg"
        },
        137223: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                RichTagTypes: function() {
                    return a
                },
                SearchBarIcon: function() {
                    return T
                },
                default: function() {
                    return _
                }
            }), l("424973"), l("222007");
            var a, n, s = l("37983"),
                r = l("884691"),
                o = l("414456"),
                i = l.n(o),
                u = l("77078"),
                d = l("476263"),
                c = l("945330"),
                f = l("229915"),
                S = l("439932"),
                h = l("49111"),
                A = l("782340"),
                g = l("515315");
            let E = Object.freeze({
                SMALL: g.small,
                MEDIUM: g.medium,
                LARGE: g.large
            });
            (n = a || (a = {})).MEMBER = "MEMBER", n.ROLE = "ROLE", n.CHANNEL = "CHANNEL", n.GUILD = "GUILD", n.USER = "USER";
            let T = e => {
                let {
                    hasContent: t,
                    onClear: l,
                    className: a,
                    themeOverride: n,
                    size: r = E.SMALL
                } = e;
                return (0, s.jsx)(u.Clickable, {
                    className: i(a, g.iconLayout, r, (0, S.getThemeClass)(n), {
                        [g.clear]: t
                    }),
                    onClick: e => {
                        e.stopPropagation(), null != l && l(e)
                    },
                    onMouseDown: e => {
                        e.preventDefault(), e.stopPropagation()
                    },
                    tabIndex: t ? 0 : -1,
                    "aria-hidden": !t,
                    "aria-label": A.default.Messages.SEARCH_CLEAR,
                    focusProps: {
                        offset: 4
                    },
                    children: (0, s.jsxs)("div", {
                        className: g.iconContainer,
                        children: [(0, s.jsx)(f.default, {
                            className: i({
                                [g.icon]: !0,
                                [g.visible]: !t
                            })
                        }), (0, s.jsx)(c.default, {
                            className: i({
                                [g.icon]: !0,
                                [g.visible]: t
                            })
                        })]
                    })
                })
            };
            class R extends r.Component {
                componentDidUpdate(e) {
                    let {
                        focusAfterReady: t,
                        isReady: l
                    } = this.props;
                    t && !e.isReady && l && this.focus()
                }
                handleKeyDownGrid(e) {
                    let {
                        selectedRow: t,
                        selectedColumn: l,
                        sections: a,
                        query: n,
                        tags: s,
                        onSelectionChange: r,
                        onSelect: o,
                        onRemoveTag: i,
                        preventEscapePropagation: u
                    } = this.props;
                    if (0 !== a.length) {
                        switch (e.keyCode) {
                            case h.KeyboardKeys.BACKSPACE:
                                (null == n || 0 === n.length) && null != s && s.length > 0 && (e.preventDefault(), e.stopPropagation(), null == i || i(s.length - 1));
                                break;
                            case h.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, l = 0) : ((t += 1) >= a.length && (t = a.length - 1), l >= a[t] && (l = a[t] - 1));
                                break;
                            case h.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, l = 0) : l >= a[t] && (l = a[t] - 1);
                                break;
                            case h.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l -= 1) < 0 && ((t -= 1) >= 0 ? l = a[t] - 1 : t < 0 && (t = 0, l = 0));
                                break;
                            case h.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (l += 1) >= a[t] && (l = 0, (t += 1) >= a.length && (t = a.length - 1, l = a[t] - 1));
                                break;
                            case h.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === l && (l = 0), t >= a.length || l >= a[t]) return;
                                null != o && o(t, l, e);
                                return;
                            case h.KeyboardKeys.ESCAPE:
                                e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != r && r(t, l)
                    }
                }
                handleKeyDownList(e) {
                    let {
                        sections: t,
                        selectedSection: l,
                        selectedRow: a,
                        onSelect: n,
                        onSelectionChange: s,
                        query: r,
                        tags: o,
                        preventEscapePropagation: i
                    } = this.props, {
                        current: u
                    } = this.ref;
                    if (null != u) switch (e.keyCode) {
                        case h.KeyboardKeys.BACKSPACE:
                            if ((null == r || 0 === r.length) && null != o && o.length > 0) {
                                var d, c;
                                e.preventDefault(), e.stopPropagation(), null === (d = (c = this.props).onRemoveTag) || void 0 === d || d.call(c, o.length - 1)
                            }
                            break;
                        case h.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), t.length > l && ++a >= t[l] && (++l >= t.length && (l = 0), a = 0), null == s || s(l, a);
                            break;
                        case h.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --a < 0 && (--l < 0 && (l = t.length - 1), a = t[l] - 1), null == s || s(l, a);
                            break;
                        case h.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), t.length > l && t[l] > a && (null == n || n(l, a, e));
                            break;
                        case h.KeyboardKeys.ESCAPE:
                            e.preventDefault(), i && e.stopPropagation(), null == n || n(null, null, e), u.blur()
                    }
                }
                render() {
                    let {
                        autoFocus: e,
                        query: t,
                        placeholder: l = A.default.Messages.DM_SEARCH_PLACEHOLDER,
                        themeOverride: a,
                        disabled: n,
                        onClear: r,
                        size: o,
                        maxHeight: f,
                        tags: h,
                        onActivate: E,
                        className: R,
                        inputProps: _,
                        focusAfterReady: p
                    } = this.props, v = null != t && t.length > 0, I = !1, m = [];
                    return null != h && h.length > 0 && ("string" == typeof h[0] ? h.forEach((e, t) => m.push((0, s.jsxs)(u.Anchor, {
                        focusProps: {
                            offset: 4
                        },
                        className: g.tag,
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [e, (0, s.jsx)(c.default, {
                            className: g.close,
                            "aria-label": A.default.Messages.REMOVE
                        })]
                    }, t))) : (I = !0, h.forEach((e, t) => m.push((0, s.jsxs)(u.Anchor, {
                        className: i(g.tag, g.richTag),
                        onClick: this.handleRemoveTag.bind(this, t),
                        children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, s.jsx)(u.Avatar, {
                            src: e.avatar,
                            "aria-hidden": !0,
                            size: u.AvatarSizes.SIZE_16
                        }), "ROLE" === e.type && null != e.color && (0, s.jsx)("span", {
                            className: g.tagRoleColor,
                            style: {
                                backgroundColor: e.color
                            }
                        }), "GUILD" === e.type && null != e.guild && (0, s.jsx)(d.default, {
                            guild: e.guild,
                            active: !0,
                            size: d.default.Sizes.SMOL
                        }), (0, s.jsx)("span", {
                            className: g.tagLabel,
                            children: e.label
                        }), (0, s.jsx)(c.default, {
                            className: g.close,
                            "aria-label": A.default.Messages.REMOVE
                        })]
                    }, t))))), (0, s.jsx)(u.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef,
                        children: (0, s.jsx)("div", {
                            ref: this.containerRef,
                            className: i(R, g.container, o, (0, S.getThemeClass)(a), {
                                [g.disabled]: n
                            }),
                            children: (0, s.jsxs)(u.ScrollerThin, {
                                className: g.inner,
                                style: {
                                    maxHeight: f
                                },
                                children: [m, (0, s.jsx)("input", {
                                    className: i(g.input, {
                                        [g.richTagInput]: I
                                    }),
                                    type: "text",
                                    ref: this.ref,
                                    spellCheck: "false",
                                    placeholder: l,
                                    value: t,
                                    onChange: this.handleChange,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleFocus,
                                    disabled: n,
                                    "aria-disabled": n,
                                    autoFocus: !p && e,
                                    onMouseDown: E,
                                    ...this.defaultInputProps,
                                    ..._
                                }), null != r ? (0, s.jsx)(T, {
                                    size: o,
                                    themeOverride: a,
                                    hasContent: v,
                                    onClear: this.handleClear
                                }) : null]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.defaultInputProps = {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list"
                    }, this.ref = r.createRef(), this.containerRef = r.createRef(), this.handleKeyDown = e => {
                        let {
                            onActivate: t,
                            onKeyDown: l,
                            onQueryChange: a,
                            useKeyboardNavigation: n
                        } = this.props;
                        null != l && l(e);
                        let {
                            current: s
                        } = this.ref;
                        if (null == s || null != t) {
                            e.keyCode !== h.KeyboardKeys.TAB && null != t && t(e);
                            return
                        }
                        if (e.keyCode === h.KeyboardKeys.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                            s.value = "", null != a && a("");
                            return
                        }
                        n && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
                    }, this.handleChange = e => {
                        let {
                            onQueryChange: t
                        } = this.props;
                        null != t && t(e.currentTarget.value)
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleClear = () => {
                        let {
                            onClear: e
                        } = this.props, {
                            current: t
                        } = this.ref;
                        null != e && e(), null != t && t.focus()
                    }, this.handleRemoveTag = e => {
                        let {
                            onRemoveTag: t
                        } = this.props;
                        null == t || t(e)
                    }, this.focus = () => {
                        let {
                            current: e
                        } = this.ref;
                        null != e && e.focus()
                    }
                }
            }
            R.Sizes = E, R.defaultProps = {
                size: E.SMALL,
                query: "",
                sections: [],
                selectedSection: 0,
                selectedRow: -1,
                selectedColumn: -1,
                gridResults: !1,
                disabled: !1,
                autoFocus: !1,
                preventEscapePropagation: !0,
                useKeyboardNavigation: !0
            };
            var _ = R
        },
        305861: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShieldUserIcon: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M3.47 5.18c.27-.4.64-.74 1.1-.96l6.09-3.05a3 3 0 0 1 2.68 0l6.1 3.05A2.83 2.83 0 0 1 21 6.75v3.5a14.17 14.17 0 0 1-8.42 12.5c-.37.16-.79.16-1.16 0A14.18 14.18 0 0 1 3 9.77V6.75c0-.57.17-1.11.47-1.57Zm2.95 10.3A12.18 12.18 0 0 0 12 20.82a12.18 12.18 0 0 0 5.58-5.32A9.49 9.49 0 0 0 12.47 14h-.94c-1.88 0-3.63.55-5.11 1.49ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        844153: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BROADCASTING_GUILDS_MAX_MEMBER_COUNT: function() {
                    return a
                },
                BROADCASTING_MAX_ALLOWED_GUILD_IDS: function() {
                    return n
                },
                BROADCASTING_MAX_ALLOWED_USER_IDS: function() {
                    return s
                }
            });
            let a = 200,
                n = 10,
                s = 10
        },
        194051: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            }), l("222007");
            var a, n, s = l("917351"),
                r = l("446674"),
                o = l("407846"),
                i = l("913144"),
                u = l("766274"),
                d = l("271938"),
                c = l("9759"),
                f = l("837374");
            (n = a || (a = {}))[n.INVALID = 0] = "INVALID", n[n.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", n[n.VALID = 2] = "VALID";
            let S = new Set,
                h = new Set,
                A = new Set,
                g = [],
                E = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                T = new o.default(function(e) {
                    let t = S.has(e.userId) ? 1 : 0;
                    return null != e.viewers && (t = 2), [E.BROADCASTS_BY_USER_ID(e.userId), E.BROADCASTS_BY_CHANNEL_ID(e.channelId), E.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function R(e, t, l) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = T.get(e);
                    return !!(null != t && (0, s.isEqual)(t.source, l)) && (T.delete(e), void 0)
                }!S.has(e) && !h.has(e) && (A.add(e), g = [...A]);
                let a = (0, f.broadcastFromServer)(t, e, l);
                T.set(e, a)
            }

            function _(e) {
                return null != e ? {
                    type: f.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: f.BroadcastSourceType.GLOBAL
                }
            }
            class p extends r.default.Store {
                getBroadcasts() {
                    return T.values(E.BROADCASTS_BY_VALIDITY(2))
                }
                getBroadcastsToValidateChannels() {
                    return T.values(E.BROADCASTS_BY_VALIDITY(1))
                }
                getBroadcastByChannel(e) {
                    return T.values(E.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return T.get(e)
                }
                getUserIdsToValidate() {
                    return g
                }
            }
            p.displayName = "BroadcastingStore";
            var v = new p(i.default, {
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: l,
                            guildId: a
                        } = e;
                        R(t.id, l, _(a))
                    })
                },
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: l,
                            guildId: a
                        } = e;
                        R(t.id, l, _(a))
                    })
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        presences: t,
                        guilds: l
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            broadcast: l,
                            guildId: a
                        } = e;
                        R(t.id, l, _(a))
                    }), l.forEach(e => {
                        let {
                            presences: t,
                            id: l
                        } = e;
                        t.forEach(e => {
                            let {
                                user: t,
                                broadcast: a
                            } = e;
                            R(t.id, a, _(l))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? S.add(e) : h.add(e), A.clear(), g = [...A];
                        let l = T.get(e);
                        null != l && (T.delete(e), T.set(e, l))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, l] = e, a = T.get(t);
                        null != a && T.set(t, {
                            ...a,
                            viewers: l
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: l
                    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === l.id)) return !1;
                    T.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new u.default(l)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: l
                    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    T.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== l.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: l
                    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(l.id))[0];
                    if (null == a) return !1;
                    let n = null !== (t = l.rawRecipients) && void 0 !== t ? t : [];
                    T.set(a.userId, {
                        ...a,
                        viewers: n.filter(e => e.id !== a.userId).map(e => new u.default(e))
                    })
                },
                LOGOUT: function() {
                    S.clear(), h.clear(), A.clear(), g = [], T.clear()
                }
            })
        },
        882278: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("884691"),
                n = l("446674"),
                s = l("42203"),
                r = l("697218"),
                o = l("194051"),
                i = l("754493");

            function u(e) {
                var t;
                let l = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
                    u = (0, n.useStateFromStores)([s.default], () => s.default.getChannel(e)),
                    d = (0, n.useStateFromStores)([o.default], () => null != e ? o.default.getBroadcastByChannel(e) : null),
                    c = (0, i.default)(),
                    f = a.useMemo(() => {
                        var e, t;
                        return null !== (t = null == u ? void 0 : null === (e = u.recipients) || void 0 === e ? void 0 : e.map(e => r.default.getUser(e)).filter(e => null != e && e.id !== (null == d ? void 0 : d.userId))) && void 0 !== t ? t : []
                    }, [null == d ? void 0 : d.userId, null == u ? void 0 : u.recipients]);
                return null == l ? [] : c ? f : null !== (t = f.length > 0 ? [l].concat(f) : null == d ? void 0 : d.viewers) && void 0 !== t ? t : []
            }
        },
        754493: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useSelfBroadcast: function() {
                    return u
                },
                default: function() {
                    return d
                },
                useIsBroadcastingInChannel: function() {
                    return c
                },
                isBroadcastingInChannel: function() {
                    return f
                },
                getIsBroadcastingToAnyone: function() {
                    return S
                }
            });
            var a = l("446674"),
                n = l("845579");
            l("373469");
            var s = l("271938"),
                r = l("42203");
            l("18494");
            var o = l("101125"),
                i = l("9759");

            function u() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
                    {
                        canBroadcast: t
                    } = i.default.useExperiment({
                        location: "use_self_broadcast"
                    }, {
                        autoTrackExposure: !1
                    }),
                    l = (0, a.useStateFromStores)([o.default], () => o.default.getBroadcast());
                return t && (null == l ? void 0 : l.userId) === e ? l : null
            }

            function d() {
                let e = u();
                return null != e
            }

            function c(e) {
                let t = u(),
                    l = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(e));
                return null != t && null != l && l.ownerId === t.userId && l.isBroadcastChannel()
            }

            function f(e) {
                let t = s.default.getId(),
                    {
                        canBroadcast: l
                    } = i.default.getCurrentConfig({
                        location: "is_broadcasting_in_channel"
                    }, {
                        autoTrackExposure: !1
                    }),
                    a = o.default.getBroadcast();
                if (!l || null == a || a.userId !== t) return !1;
                let n = r.default.getChannel(e);
                return null != n && n.ownerId === a.userId && n.isBroadcastChannel()
            }

            function S() {
                let e = n.BroadcastAllowedGuildIds.getSetting(),
                    t = n.BroadcastAllowedUserIds.getSetting(),
                    l = n.BroadcastAllowFriends.getSetting();
                return l || e.length > 0 || t.length > 0
            }
            l("194051")
        },
        5920: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                selectedTagFromRowData: function() {
                    return v
                },
                useFilteredGuilds: function() {
                    return I
                },
                useBroadcastingPrivacyAudience: function() {
                    return D
                },
                useBroadcastingStoredSelectedTags: function() {
                    return x
                },
                sanitizeAllowedGuildIds: function() {
                    return N
                },
                sanitizeAllowedUserIds: function() {
                    return y
                }
            }), l("424973"), l("222007");
            var a = l("884691"),
                n = l("627445"),
                s = l.n(n),
                r = l("249654"),
                o = l("446674"),
                i = l("137223"),
                u = l("355313"),
                d = l("845579"),
                c = l("271938"),
                f = l("42203"),
                S = l("525065"),
                h = l("26989"),
                A = l("305961"),
                g = l("27618"),
                E = l("677099"),
                T = l("697218"),
                R = l("158998"),
                _ = l("844153"),
                p = l("606762");

            function v(e) {
                let t;
                return e.rowType === p.RowType.USER ? t = {
                    type: i.RichTagTypes.USER,
                    label: e.name,
                    avatar: e.avatarURL
                } : e.rowType === p.RowType.GUILD && (t = {
                    type: i.RichTagTypes.GUILD,
                    label: e.name,
                    guild: e.guild
                }), s(null != t, "RowData must be a guild or a user"), {
                    display: t,
                    row: e
                }
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = (0, o.useStateFromStoresArray)([A.default, S.default], () => {
                        let l = [];
                        return e.forEach(e => {
                            var a;
                            let n = A.default.getGuild(e),
                                s = null !== (a = S.default.getMemberCount(e)) && void 0 !== a ? a : _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT;
                            null != n && s < _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT && (null == t ? void 0 : t(n.name)) && l.push(n)
                        }), l
                    }, [e, t]);
                return l
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = I(e, t),
                    n = a.useMemo(() => l.map(e => ({
                        rowType: p.RowType.GUILD,
                        name: e.name,
                        id: e.id,
                        disabled: !1,
                        guild: e,
                        key: "".concat(p.RowType.GUILD, ":").concat(e.id)
                    })), [l]);
                return n
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e.filter(e => null != e && (null == t ? void 0 : t(e.username))).map(e => ({
                    rowType: p.RowType.USER,
                    name: R.default.getUserTag(e),
                    id: e.id,
                    disabled: l && g.default.isFriend(e.id),
                    avatarURL: e.getAvatarURL(null, 24),
                    key: "".concat(p.RowType.USER, ":").concat(e.id)
                }))
            }

            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    n = (0, o.useStateFromStores)([E.default], () => E.default.getFlattenedGuildIds()),
                    s = m(n, t),
                    i = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            l = arguments.length > 2 ? arguments[2] : void 0,
                            n = (0, o.useStateFromStoresArray)([g.default], () => g.default.getFriendIDs()),
                            s = I(t),
                            i = (0, o.useStateFromStores)([c.default], () => c.default.getId()),
                            u = (0, o.useStateFromStores)([h.default], () => h.default.getMemberVersion()),
                            d = a.useMemo(() => {
                                let e = new Set(n);
                                return s.forEach(t => {
                                    let l = h.default.getMemberIds(t.id);
                                    l.forEach(t => {
                                        !e.has(t) && !g.default.isBlocked(t) && e.add(t)
                                    })
                                }), e
                            }, [s, n, u]),
                            S = (0, o.useStateFromStoresArray)([T.default], () => [...d].map(e => T.default.getUser(e)), [d]),
                            A = S.filter(e => null != e && !e.bot && e.id !== i).sort((e, t) => {
                                let l = f.default.getChannel(f.default.getDMFromUserId(null == e ? void 0 : e.id)),
                                    a = f.default.getChannel(f.default.getDMFromUserId(null == t ? void 0 : t.id));
                                return r.default.compare(null == l ? void 0 : l.lastMessageId, null == a ? void 0 : a.lastMessageId) > 0 ? -1 : 1
                            });
                        return C(A, e, l)
                    }(t, n, l);
                return [i, e ? [] : s]
            }

            function x() {
                let e = d.BroadcastAllowedGuildIds.useSetting(),
                    t = d.BroadcastAllowedUserIds.useSetting(),
                    l = {},
                    a = {};
                if (m(e).forEach(e => {
                        let t = (0, u.getFullRowId)(e);
                        l[t] = v(e)
                    }), t.length > 0) {
                    let e = t.map(e => T.default.getUser(e)).filter(e => null != e);
                    C(e).map(e => {
                        let t = (0, u.getFullRowId)(e);
                        a[t] = v(e)
                    })
                }
                return {
                    [p.RowType.GUILD]: l,
                    [p.RowType.USER]: a
                }
            }

            function N(e) {
                let t = c.default.getId(),
                    l = e;
                return l.length > _.BROADCASTING_MAX_ALLOWED_GUILD_IDS && (l = l.slice(0, _.BROADCASTING_MAX_ALLOWED_GUILD_IDS)), l = l.filter(e => {
                    var l;
                    return h.default.isMember(e, t) && (null !== (l = S.default.getMemberCount(e)) && void 0 !== l ? l : _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT) < _.BROADCASTING_GUILDS_MAX_MEMBER_COUNT
                })
            }

            function y(e) {
                let t = e;
                return t.length > _.BROADCASTING_MAX_ALLOWED_USER_IDS && (t = t.slice(0, _.BROADCASTING_MAX_ALLOWED_USER_IDS)), t
            }
        },
        835236: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                o = l("355313"),
                i = l("837899"),
                u = l("425190"),
                d = l("782340"),
                c = l("960320");

            function f(e) {
                let {
                    selectedTags: t,
                    title: l,
                    hintText: n,
                    placeholderText: f,
                    expanded: S,
                    setExpanded: h,
                    users: A,
                    guilds: g,
                    query: E,
                    maxCount: T,
                    onQueryChange: R,
                    onClickRow: _,
                    onRemoveTag: p
                } = e;
                return (0, a.jsx)(r.Collapsible, {
                    className: c.collapsible,
                    isExpanded: S,
                    collapsibleContent: (0, a.jsx)("div", {
                        className: s(c.collapsibleContent, {
                            [c.visible]: S
                        }),
                        children: (0, a.jsx)(o.default, {
                            listClassName: c.list,
                            pendingAdditions: t,
                            query: E,
                            onQueryChange: R,
                            onClickRow: _,
                            onRemovePendingAddition: p,
                            users: A,
                            guilds: g,
                            renderEmptyText: e => d.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({
                                query: e
                            }),
                            hintText: n,
                            placeholderText: f,
                            disabledText: d.default.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,
                            maxCount: T,
                            hideRowLabel: !0
                        })
                    }),
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, a.jsxs)(r.Clickable, {
                            className: c.content,
                            onClick: e => {
                                h(!S), t(e)
                            },
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "text-sm/normal",
                                children: l
                            }), S ? (0, a.jsx)(u.default, {}) : (0, a.jsx)(i.default, {})]
                        })
                    }
                })
            }
        },
        725420: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("917351"),
                r = l("446674"),
                o = l("750028"),
                i = l("77078"),
                u = l("716241"),
                d = l("355313"),
                c = l("845579"),
                f = l("872173"),
                S = l("305961"),
                h = l("651879"),
                A = l("655518"),
                g = l("882278"),
                E = l("754493"),
                T = l("5920"),
                R = l("835236"),
                _ = l("844153"),
                p = l("49111"),
                v = l("606762"),
                I = l("782340"),
                m = l("147594");

            function C(e) {
                let {
                    headerText: t = I.default.Messages.BROADCASTING_SETTINGS,
                    buttonCTA: l = I.default.Messages.BROADCAST_SETTINGS_SAVE,
                    transitionState: C,
                    onClose: D,
                    onSave: x
                } = e, N = (0, T.useBroadcastingStoredSelectedTags)(), [y, L] = n.useState(N), [b, w] = n.useState(""), M = c.BroadcastAllowFriends.useSetting(), [O, B] = n.useState(null == M || M), U = c.BroadcastAutoBroadcast.useSetting(), [j, G] = n.useState(U), [k, P] = n.useState(!1), [F, K] = n.useState(!1), H = (0, E.useSelfBroadcast)(), V = (0, g.default)(null == H ? void 0 : H.channelId), z = n.useMemo(() => M !== O || !(0, s.isEqual)(N, y) || U !== j, [M, O, N, y, U, j]), W = null != x, Y = n.useMemo(() => O || Object.keys(y[v.RowType.USER]).length > 0 || Object.keys(y[v.RowType.GUILD]).length > 0, [O, y]), X = !Y && null != H || !Y && W || !z && !W, q = n.useMemo(() => "@" === b.trim().charAt(0), [b]), Z = (0, r.useStateFromStoresArray)([S.default], () => S.default.getGuildIds()), Q = (0, T.useFilteredGuilds)(Z), J = n.useMemo(() => Q.map(e => e.id), [Q]), [$, ee] = (0, T.useBroadcastingPrivacyAudience)(q, function(e) {
                    var t;
                    let l = (t = b.trim(), q ? t.slice(1) : t),
                        a = RegExp("".concat(A.default.escape(l)), "i");
                    return a.test(e)
                }, O);

                function et() {
                    var e;
                    null == x || x();
                    let [t, l] = es();
                    u.default.trackWithMetadata(p.AnalyticEvents.BROADCAST_SETTINGS_UPDATED, {
                        auto_broadcast: j,
                        broadcast_to_all_friends: O,
                        num_allowed_users_in_broadcast: l.length,
                        allowed_users: l,
                        num_guilds_in_broadcast: t.length,
                        guilds: t,
                        num_viewers_in_broadcast: V.length,
                        current_viewers: null !== (e = V.map(e => e.id)) && void 0 !== e ? e : [],
                        started_broadcast: W
                    })
                }

                function el(e) {
                    w(e)
                }

                function ea(e, t) {
                    let l = (0, d.getFullRowId)(t);
                    L(a => {
                        let n = {
                            ...a
                        };
                        return n[e] = {
                            ...n[e]
                        }, l in n[e] ? delete n[e][l] : n[e][l] = (0, T.selectedTagFromRowData)(t), n
                    })
                }

                function en(e, t) {
                    L(l => {
                        let a = {
                            ...l
                        };
                        return a[e] = {
                            ...a[e]
                        }, delete a[e][t], a
                    })
                }

                function es() {
                    let e = new Set,
                        t = new Set;
                    Object.values(y[v.RowType.USER]).forEach(e => {
                        let {
                            row: l
                        } = e;
                        return t.add(l.id)
                    }), Object.values(y[v.RowType.GUILD]).forEach(t => {
                        let {
                            row: l
                        } = t;
                        return e.add(l.id)
                    });
                    let l = (0, T.sanitizeAllowedGuildIds)(Array.from(e)),
                        a = (0, T.sanitizeAllowedUserIds)(Array.from(t));
                    return [l, a]
                }
                return n.useEffect(() => {
                    u.default.trackWithMetadata(p.AnalyticEvents.OPEN_MODAL, {
                        type: W ? "Start Broadcast" : "Update Broadcast"
                    })
                }, [W]), n.useEffect(() => {
                    let e = (0, s.chunk)(J, 100);
                    e.forEach(e => {
                        h.default.requestMembers(e, b.trim())
                    })
                }, [J, b]), (0, a.jsxs)(i.ModalRoot, {
                    transitionState: C,
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        className: m.header,
                        children: t
                    }), (0, a.jsx)(i.ModalCloseButton, {
                        onClick: D,
                        className: m.close
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: m.content,
                        paddingFix: !1,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: m.description,
                            children: I.default.Messages.BROADCASTING_DESCRIPTION
                        }), (0, a.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            className: m.title,
                            children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE
                        }), (0, a.jsxs)("div", {
                            className: m.switch,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS
                            }), (0, a.jsx)(i.Switch, {
                                checked: O,
                                onChange: e => {
                                    B(e)
                                }
                            })]
                        }), (0, a.jsx)(R.default, {
                            selectedTags: y[v.RowType.USER],
                            query: b,
                            onQueryChange: el,
                            onClickRow: e => ea(v.RowType.USER, e),
                            onRemoveTag: e => en(v.RowType.USER, e),
                            title: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,
                            hintText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({
                                count: _.BROADCASTING_MAX_ALLOWED_USER_IDS
                            }),
                            placeholderText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,
                            users: $,
                            expanded: k,
                            setExpanded: e => {
                                el(""), P(e), K(!1)
                            },
                            maxCount: _.BROADCASTING_MAX_ALLOWED_USER_IDS
                        }), (0, a.jsx)(R.default, {
                            selectedTags: y[v.RowType.GUILD],
                            query: b,
                            onQueryChange: el,
                            onClickRow: e => ea(v.RowType.GUILD, e),
                            onRemoveTag: e => en(v.RowType.GUILD, e),
                            title: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,
                            hintText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({
                                count: _.BROADCASTING_MAX_ALLOWED_GUILD_IDS
                            }),
                            placeholderText: I.default.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,
                            guilds: ee,
                            expanded: F,
                            setExpanded: e => {
                                el(""), K(e), P(!1)
                            },
                            maxCount: _.BROADCASTING_MAX_ALLOWED_GUILD_IDS
                        }), (0, a.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            className: m.title,
                            children: I.default.Messages.BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE
                        }), (0, a.jsxs)("div", {
                            className: m.switch,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: I.default.Messages.AUTO_BROADCAST_TOGGLE
                            }), (0, a.jsx)(i.Switch, {
                                checked: j,
                                onChange: G
                            })]
                        })]
                    }), (0, a.jsx)(i.ModalFooter, {
                        children: (0, a.jsx)(i.Button, {
                            disabled: X,
                            onClick: function() {
                                if (!X) {
                                    if (z) {
                                        let [e, t] = es();
                                        f.PreloadedUserSettingsActionCreators.updateAsync("broadcast", l => {
                                            l.allowedGuildIds = e, l.allowedUserIds = t, l.allowFriends = o.BoolValue.create({
                                                value: O
                                            }), l.autoBroadcast = o.BoolValue.create({
                                                value: j
                                            }), et(), D()
                                        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION);
                                        return
                                    }
                                    et(), D()
                                }
                            },
                            children: l
                        })
                    })]
                })
            }
        },
        355313: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getFullRowId: function() {
                    return v
                },
                default: function() {
                    return C
                }
            }), l("222007"), l("808653");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                r = l.n(s),
                o = l("974667"),
                i = l("77078"),
                u = l("507453"),
                d = l("79798"),
                c = l("145131"),
                f = l("476263"),
                S = l("476765"),
                h = l("682344"),
                A = l("454273"),
                g = l("191458"),
                E = l("606762"),
                T = l("782340"),
                R = l("265821");
            let _ = (0, S.uid)(),
                p = (0, S.uid)();

            function v(e) {
                return "".concat(e.rowType, ":").concat(e.id)
            }

            function I(e) {
                return (0, a.jsx)(i.FormTitle, {
                    tag: "h5",
                    className: r(R.sectionTitle, R.rowHeight),
                    children: e
                }, e)
            }

            function m(e) {
                let {
                    id: t,
                    children: l,
                    rowLabel: n,
                    checked: s,
                    onSelect: u,
                    disabled: d,
                    showCheckbox: f,
                    selected: S,
                    onMouseEnter: h,
                    "aria-posinset": A,
                    "aria-setsize": g
                } = e, E = (0, o.useListItem)(t);
                return (0, a.jsx)(i.Clickable, {
                    ...E,
                    id: t,
                    className: r(R.addMemberRow, {
                        [R.selectedRow]: S
                    }),
                    onClick: e => {
                        !d && (e.preventDefault(), u())
                    },
                    onMouseEnter: h,
                    role: "option",
                    "aria-disabled": d,
                    "aria-selected": s,
                    "aria-setsize": g,
                    "aria-posinset": A,
                    children: (0, a.jsxs)(c.default, {
                        justify: c.default.Justify.BETWEEN,
                        align: c.default.Align.CENTER,
                        children: [f ? (0, a.jsx)(i.Checkbox, {
                            displayOnly: !0,
                            size: 18,
                            value: s,
                            type: i.Checkbox.Types.INVERTED,
                            disabled: d,
                            children: (0, a.jsx)("div", {
                                className: R.checkboxLabel,
                                children: l
                            })
                        }) : l, null != n ? (0, a.jsx)(i.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: n
                        }) : null]
                    })
                })
            }

            function C(e) {
                let {
                    listClassName: t,
                    pendingAdditions: l,
                    query: s,
                    onQueryChange: o,
                    onClickRow: S,
                    onRemovePendingAddition: C,
                    roles: D = [],
                    members: x = [],
                    users: N = [],
                    guilds: y = [],
                    placeholderText: L,
                    disabledText: b,
                    hintText: w,
                    searchTitleText: M,
                    renderEmptyText: O,
                    focusSearchAfterReady: B,
                    isReady: U,
                    maxCount: j,
                    hideRowLabel: G = !1
                } = e, k = n.useRef(null), P = n.useRef(null), F = [D.length, x.length, N.length, y.length], [K, H] = n.useState(!1), [V, z] = n.useState(0), [W, Y] = n.useState(-1);
                n.useEffect(() => {
                    var e;
                    null === (e = k.current) || void 0 === e || e.focus()
                }, []);
                let X = n.useCallback(function(e, t) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (z(e), Y(t), l) {
                            var a;
                            null === (a = P.current) || void 0 === a || a.scrollToIndex({
                                section: null != e ? e : 0,
                                row: null != t ? t : 0,
                                padding: 8
                            })
                        }
                    }, []),
                    q = n.useCallback((e, t) => {
                        if (null == t) return;
                        o("");
                        let l = e === E.AudienceSelectorSections.ROLES ? D : [],
                            a = l[t];
                        a.rowType !== E.RowType.EMPTY_STATE && S(a)
                    }, [D, S, o]),
                    Z = n.useCallback(e => {
                        var t;
                        null != e && e.rowType !== E.RowType.EMPTY_STATE && (S(e), o(""), null === (t = k.current) || void 0 === t || t.focus())
                    }, [S, o]),
                    Q = n.useMemo(() => Object.keys(l), [l]),
                    J = n.useMemo(() => x.some(e => !e.disabled) || D.some(e => !e.disabled) || N.some(e => !e.disabled) || y.some(e => !e.disabled), [x, D, N, y]),
                    $ = J || "" === s.trim();

                function ee() {
                    var e;
                    H(!(null === (e = P.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && $)
                }
                return n.useEffect(() => {
                    ee()
                }), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r(R.searchBox, {
                            [R.scrollSeparator]: K
                        }),
                        children: [null != M && (0, a.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H5,
                            children: M
                        }), (0, a.jsx)(g.default, {
                            ref: k,
                            query: s,
                            onQueryChange: o,
                            selectedSection: V,
                            selectedRow: W,
                            onSelectionChange: X,
                            onSelect: q,
                            tags: Q.map(e => l[e].display),
                            sections: F,
                            onRemoveTag: function(e) {
                                C(Q[e])
                            },
                            placeholder: L,
                            focusAfterReady: B,
                            isReady: U,
                            "aria-labelledby": _,
                            "aria-controls": p
                        }), null != w ? (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: w
                        }) : null]
                    }), $ ? (0, a.jsx)(i.List, {
                        ref: P,
                        className: r(R.roleMemberList, t),
                        sections: F,
                        renderRow: e => {
                            let t, n, {
                                    section: s,
                                    row: o
                                } = e,
                                u = null,
                                c = !1,
                                S = !1,
                                g = !1,
                                T = !c && null != j && Object.keys(l).length >= j;
                            switch (s) {
                                case E.AudienceSelectorSections.ROLES:
                                    c = (n = v(u = D[o])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.ROLES && W === o, t = (0, a.jsxs)("div", {
                                        className: R.rowBody,
                                        children: [(0, a.jsx)("div", {
                                            className: r(R.rowHeight, R.alignCenter),
                                            children: (0, a.jsx)(h.default, {
                                                color: u.colorString,
                                                height: 20
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: R.rowLabel,
                                            children: [(0, a.jsx)(i.Text, {
                                                variant: "text-sm/medium",
                                                className: R.rowTitle,
                                                color: u.rowType === E.RowType.EMPTY_STATE ? "text-muted" : "text-normal",
                                                children: u.name
                                            }), u.disabled && null != b ? (0, a.jsx)(i.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: b
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.MEMBERS:
                                    c = (n = v(u = x[o])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.MEMBERS && W === o, t = (0, a.jsxs)("div", {
                                        className: R.rowBody,
                                        children: [(0, a.jsx)(i.Avatar, {
                                            src: u.avatarURL,
                                            size: i.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, a.jsx)(i.Text, {
                                            className: R.rowLabel,
                                            variant: "text-sm/normal",
                                            children: u.name
                                        }), null != u.nickname ? (0, a.jsx)(i.Text, {
                                            color: "text-muted",
                                            className: R.rowLabelSubText,
                                            variant: "text-sm/normal",
                                            "aria-hidden": !0,
                                            children: u.username
                                        }) : null, u.bot && (0, a.jsx)(d.default, {
                                            verified: u.verifiedBot
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.USERS:
                                    c = (n = v(u = N[o])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.USERS && W === o, t = (0, a.jsxs)("div", {
                                        className: R.rowBody,
                                        children: [(0, a.jsx)(i.Avatar, {
                                            src: u.avatarURL,
                                            size: i.AvatarSizes.SIZE_24,
                                            "aria-label": ""
                                        }), (0, a.jsxs)("div", {
                                            className: R.rowLabel,
                                            children: [(0, a.jsx)(i.Text, {
                                                variant: "text-sm/normal",
                                                children: u.name
                                            }), u.disabled && null != b ? (0, a.jsx)(i.Text, {
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                children: b
                                            }) : null]
                                        })]
                                    });
                                    break;
                                case E.AudienceSelectorSections.GUILDS:
                                    c = (n = v(u = y[o])) in l || u.disabled, S = u.disabled || T, g = V === E.AudienceSelectorSections.GUILDS && W === o, t = (0, a.jsxs)("div", {
                                        className: R.rowBody,
                                        children: [(0, a.jsx)(f.default, {
                                            guild: u.guild,
                                            active: !0,
                                            size: f.default.Sizes.SMALLER
                                        }), (0, a.jsx)("div", {
                                            className: R.rowLabel,
                                            children: (0, a.jsx)(i.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-normal",
                                                children: u.name
                                            })
                                        })]
                                    })
                            }
                            return null == u ? null : (0, a.jsx)(m, {
                                id: "user-row-".concat(o),
                                rowLabel: G ? null : A.getRowTypeLabel(u.rowType),
                                checked: c,
                                disabled: S,
                                onSelect: () => Z(u),
                                showCheckbox: u.rowType !== E.RowType.EMPTY_STATE,
                                onMouseEnter: () => X(s, o, !1),
                                selected: g,
                                "aria-posinset": o + 1,
                                "aria-setsize": F.reduce((e, t) => e + t, 0),
                                children: t
                            }, n)
                        },
                        rowHeight: 40,
                        renderSection: e => {
                            let {
                                section: t
                            } = e;
                            switch (t) {
                                case E.AudienceSelectorSections.ROLES:
                                    return I(T.default.Messages.ROLES);
                                case E.AudienceSelectorSections.MEMBERS:
                                    return I(T.default.Messages.MEMBERS);
                                case E.AudienceSelectorSections.USERS:
                                    return I(T.default.Messages.USERS);
                                case E.AudienceSelectorSections.GUILDS:
                                    return I(T.default.Messages.SERVERS)
                            }
                        },
                        sectionHeight: 32,
                        onScroll: ee,
                        role: void 0,
                        innerRole: "listbox",
                        innerId: p,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: "vertical"
                    }) : (0, a.jsxs)(c.default, {
                        className: t,
                        align: c.default.Align.CENTER,
                        justify: c.default.Justify.CENTER,
                        direction: c.default.Direction.VERTICAL,
                        children: [(0, a.jsx)(u.default, {
                            className: R.noResultIcon
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: O(s)
                        })]
                    })]
                })
            }
        },
        191458: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("137223"),
                r = l("520479");
            let o = n.forwardRef(function(e, t) {
                let {
                    query: l,
                    onQueryChange: n,
                    onRemoveTag: o,
                    onSelect: i,
                    onSelectionChange: u,
                    selectedSection: d,
                    selectedRow: c,
                    tags: f,
                    sections: S,
                    placeholder: h = "",
                    focusAfterReady: A,
                    isReady: g,
                    "aria-labelledby": E,
                    "aria-controls": T
                } = e;
                return (0, a.jsx)(s.default, {
                    autoFocus: !0,
                    className: r.searchBar,
                    maxHeight: 100,
                    onQueryChange: n,
                    onRemoveTag: o,
                    selectedSection: d,
                    selectedRow: c,
                    onSelect: i,
                    onSelectionChange: u,
                    placeholder: 0 === f.length ? h : "",
                    query: l,
                    ref: t,
                    size: s.default.Sizes.MEDIUM,
                    tags: f,
                    sections: S,
                    focusAfterReady: A,
                    isReady: g,
                    inputProps: {
                        "aria-labelledby": E,
                        "aria-controls": T,
                        "aria-expanded": !0,
                        "aria-activedescendant": "user-row-".concat(c)
                    }
                })
            });
            var i = o
        },
        507453: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                s = l.n(n),
                r = l("598532");

            function o(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: s(r.image, t)
                })
            }
        },
        682344: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                s = l("305861"),
                r = l("75196"),
                o = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: l = 23,
                        color: n = "currentColor",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: l,
                        viewBox: "0 0 20 23",
                        children: (0, a.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, a.jsx)("path", {
                                className: s,
                                fill: n,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, s.ShieldUserIcon, void 0, {
                    size: 23
                })
        }
    }
]);