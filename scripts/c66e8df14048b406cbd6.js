(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58628"], {
        685073: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                loadInviteSuggestions: function() {
                    return s
                },
                searchInviteSuggestions: function() {
                    return l
                }
            });
            var i = n("913144"),
                a = n("777273");

            function s(e) {
                let {
                    omitUserIds: t,
                    guild: n,
                    channel: s,
                    applicationId: l,
                    inviteTargetType: r
                } = e;
                return (0, a.fetchUserAffinities)().then(() => {
                    i.default.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != t ? t : new Set,
                        guild: n,
                        channel: s,
                        applicationId: l,
                        inviteTargetType: r
                    })
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return r
                }
            });
            var i = n("872717"),
                a = n("913144"),
                s = n("843823"),
                l = n("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (a.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    a.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    a.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: r = "",
                    color: o = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        159747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("759843"),
                l = n("446674"),
                r = n("77078"),
                o = n("450911"),
                u = n("685073"),
                c = n("819689"),
                d = n("812204"),
                f = n("685665"),
                p = n("428958"),
                m = n("843962"),
                h = n("679653"),
                I = n("305961"),
                g = n("705955"),
                y = n("27618"),
                C = n("697218"),
                S = n("646240"),
                v = n("578706"),
                A = n("83900"),
                x = n("599110"),
                T = n("315102"),
                E = n("306160"),
                N = n("354023"),
                R = n("159885"),
                _ = n("158998"),
                w = n("969380"),
                L = n("49111"),
                U = n("91366"),
                j = n("782340"),
                D = n("764786");

            function O(e) {
                let {
                    activityItem: t,
                    analyticsLocations: n,
                    ...m
                } = e, h = (0, l.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
                    analyticsLocations: I
                } = (0, f.default)(n);
                (0, p.default)({
                    type: s.ImpressionTypes.MODAL,
                    name: s.ImpressionNames.ACTIVITY_BOOKMARK_SHARE_MODAL,
                    properties: {
                        application_id: t.application.id,
                        location_stack: I
                    }
                });
                let [y, v] = a.useState(""), [A, T] = a.useState([]), E = (0, w.default)({
                    applicationId: t.application.id,
                    size: 256
                }), R = "".concat(window.location.origin).concat(L.Routes.ACTIVITY_DETAILS(t.application.id)), _ = (0, l.useStateFromStoresArray)([g.default], () => g.default.getInviteSuggestionRows());
                a.useEffect(() => {
                    (0, u.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: U.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), a.useEffect(() => (0, u.searchInviteSuggestions)(y), [y]);
                let O = a.useCallback(async () => {
                    let e = 0,
                        n = 0,
                        i = 0,
                        a = g.default.getInviteSuggestionRows().filter(e => A.includes(e.item.id)).map(t => (function(t, a) {
                            switch (t.type) {
                                case N.RowTypes.DM:
                                case N.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case N.RowTypes.GROUP_DM:
                                    n++;
                                    break;
                                case N.RowTypes.CHANNEL:
                                    i++
                            }
                            return t.type === N.RowTypes.GROUP_DM || t.type === N.RowTypes.CHANNEL ? c.default.sendActivityBookmark(t.item.id, a, d.default.ACTIVITY_DETAIL_PAGE, null) : t.type === N.RowTypes.DM || t.type === N.RowTypes.FRIEND ? o.default.ensurePrivateChannel(t.item.id).then(e => c.default.sendActivityBookmark(e, R, d.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, R));
                    await a, x.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == h ? void 0 : h.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: n,
                        n_channels: i
                    }), m.onClose()
                }, [t, A, m, R, h]);
                return (0, i.jsxs)(r.ModalRoot, {
                    ...m,
                    className: D.modalRoot,
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: D.header,
                        children: [(0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: j.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: D.modalContent,
                        children: [(0, i.jsx)(S.default, {
                            className: D.searchBar,
                            placeholder: j.default.Messages.SEARCH,
                            label: j.default.Messages.SEARCH,
                            searchTerm: y,
                            onChange: e => v(e),
                            onClear: () => v("")
                        }), _.map((e, t) => (0, i.jsxs)(a.Fragment, {
                            children: [0 === t ? null : (0, i.jsx)("div", {
                                className: D.rowDivider
                            }), (0, i.jsx)(M, {
                                row: e,
                                onClick: () => {
                                    let t = [...A];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), T(t)
                                },
                                checked: A.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, i.jsxs)(r.ModalFooter, {
                        className: D.footer,
                        children: [(0, i.jsx)("div", {
                            className: D.activityInfoOuterContainer,
                            children: (0, i.jsxs)("div", {
                                className: D.activityInfoInnerContainer,
                                children: [(0, i.jsx)("img", {
                                    src: E.url,
                                    className: D.activityInfoImage,
                                    alt: t.application.name
                                }), (0, i.jsxs)("div", {
                                    className: D.activityInfoText,
                                    children: [(0, i.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: D.ellipsis,
                                        children: t.application.name
                                    }), (0, i.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: D.ellipsis,
                                        children: t.application.description
                                    }), (0, i.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: D.ellipsis,
                                        children: (0, i.jsx)(r.Anchor, {
                                            href: R,
                                            children: R
                                        })
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: D.footerDivider
                        }), (0, i.jsxs)("div", {
                            className: D.copySendBar,
                            children: [(0, i.jsx)(F, {
                                link: R,
                                applicationId: t.application.id
                            }), (0, i.jsx)(r.Button, {
                                onClick: O,
                                disabled: A.length <= 0,
                                children: j.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function M(e) {
                let {
                    row: t,
                    onClick: n,
                    checked: a
                } = e, s = null, l = null, o = null;
                switch (t.type) {
                    case N.RowTypes.DM:
                    case N.RowTypes.FRIEND:
                        s = (0, i.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), l = _.default.getName(t.item), o = _.default.getUserTag(t.item);
                        break;
                    case N.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            n = (0, h.computeChannelName)(t.item, C.default, y.default);
                        s = (0, i.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": n,
                            size: r.AvatarSizes.SIZE_40
                        }), l = (0, h.computeChannelName)(t.item, C.default, y.default);
                        break
                    }
                    case N.RowTypes.CHANNEL: {
                        let e = t.item,
                            n = I.default.getGuild(e.guild_id);
                        if (null == n) return null;
                        if (l = "#".concat((0, h.computeChannelName)(e, C.default, y.default)), o = n.name, null != n.icon) {
                            let t = T.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: n.icon,
                                size: 40
                            });
                            s = (0, i.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": l,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, R.getAcronym)(n.name);
                            s = (0, i.jsx)("div", {
                                className: D.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, i.jsxs)(r.Clickable, {
                    onClick: n,
                    className: D.rowContainer,
                    children: [(0, i.jsxs)("div", {
                        className: D.rowLeft,
                        children: [(0, i.jsx)("div", {
                            className: D.rowAvatar,
                            children: s
                        }), (0, i.jsxs)("div", {
                            className: D.rowNameContainer,
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: D.rowName,
                                children: l
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: D.rowSubName,
                                children: o
                            })]
                        })]
                    }), (0, i.jsx)(r.Checkbox, {
                        value: a,
                        type: r.Checkbox.Types.INVERTED,
                        displayOnly: !0,
                        className: D.rowRight
                    })]
                })
            }

            function F(e) {
                let {
                    applicationId: t,
                    link: n
                } = e, s = (0, l.useStateFromStores)([C.default], () => C.default.getCurrentUser()), [o, u] = a.useState(!1);
                return a.useEffect(() => {
                    let e;
                    return o && (e = setTimeout(() => {
                        u(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [o]), (0, i.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        x.default.track(L.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == s ? void 0 : s.id,
                            application_id: t
                        }), (0, E.copy)(n), u(!0)
                    },
                    innerClassName: D.copyButton,
                    children: [o ? (0, i.jsx)(v.default, {}) : (0, i.jsx)(A.default, {}), o ? j.default.Messages.COPIED : j.default.Messages.COPY_LINK]
                })
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return r
                }
            });
            var i = n("697218"),
                a = n("315102"),
                s = n("449008"),
                l = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(i.default.getUser).filter(s.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        705955: function(e, t, n) {
            "use strict";
            let i, a, s, l, r, o, u;
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var c = n("446674"),
                d = n("913144"),
                f = n("116460"),
                p = n("449008"),
                m = n("354023"),
                h = n("42203"),
                I = n("27618"),
                g = n("843823"),
                y = n("49111"),
                C = n("91366");
            let S = new Set,
                v = [],
                A = new Map;

            function x(e) {
                let t = new Set,
                    n = null == l || u === C.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
                    i = (0, m.getMostRecentDMedUser)(S, n);
                for (let e of (null != i && !I.default.isBlocked(i.id) && t.add(i.id), g.default.getUserAffinitiesUserIds())) t.add(e);
                let a = new Set;
                if (u === C.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => h.default.getChannel(e)).filter(p.isNotNullish).filter(e => e.type === y.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => a.add(e.id))
                }
                return (0, m.generateRowsForQuery)({
                    query: e,
                    omitUserIds: S,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: a,
                    inviteTargetType: u
                })
            }

            function T(e) {
                v = e, A = new Map, e.forEach((e, t) => {
                    A.set(e, {
                        index: t
                    })
                })
            }
            class E extends c.default.Store {
                initialize() {
                    this.waitFor(I.default, g.default)
                }
                getInviteSuggestionRows() {
                    return v
                }
                getTotalSuggestionsCount() {
                    return a
                }
                getInitialCounts() {
                    return i
                }
                getSelectedInviteMetadata(e) {
                    let t = A.get(e),
                        n = g.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: v.length,
                        numAffinityConnections: n.size,
                        isFiltered: s
                    } : null
                }
            }
            E.displayName = "InviteSuggestionsStore";
            var N = new E(d.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: n,
                        channel: c,
                        applicationId: d,
                        inviteTargetType: f
                    } = e;
                    l = null != c ? n : null, r = c, o = d, u = f;
                    let p = I.default.getRelationships(),
                        h = Object.keys(p).filter(e => p[e] === y.RelationshipTypes.BLOCKED),
                        g = (0, m.getUsersAlreadyJoined)({
                            channel: r,
                            applicationId: o,
                            inviteTargetType: f
                        });
                    S = new Set([...t, ...h, ...g]), s = !1;
                    let {
                        rows: C,
                        counts: A
                    } = x("");
                    T(C), i = A, a = v.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    s = "" !== t;
                    let {
                        rows: n
                    } = x(t);
                    T(n)
                }
            })
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("913144"),
                s = n("27618");
            let l = !1,
                r = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...r
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class c extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([s.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            c.displayName = "UserAffinitiesStore", c.persistKey = "UserAffinitiesStore", c.migrations = [e => null];
            var d = new c(a.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    o = {
                        ...r
                    }
                }
            })
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("77078"),
                o = n("381546"),
                u = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends a.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: a,
                        inputClassName: s,
                        className: f,
                        onChange: p,
                        onFocus: m,
                        onBlur: h,
                        onKeyPress: I,
                        autoComplete: g,
                        forwardedRef: y,
                        closeIconClassName: C,
                        searchIconClassName: S,
                        cta: v
                    } = this.props, A = null != a && a.length > 0, x = null != y ? y : this._textInputRef;
                    return (0, i.jsx)(r.FocusRing, {
                        focusTarget: x,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: l(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(r.TextInput, {
                                inputRef: x,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: l(d.searchBoxInput, s),
                                onChange: p,
                                onFocus: m,
                                onBlur: h,
                                onKeyPress: I,
                                value: A ? a : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: g ? "on" : "off"
                            }), null != v ? (0, i.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: v
                            }) : null, A ? (0, i.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(o.default, {
                                    className: l(d.clearIcon, C)
                                })
                            }) : (0, i.jsx)(u.default, {
                                className: l(d.searchIcon, S),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = a.createRef(), this._containerRef = a.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var p = a.forwardRef((e, t) => (0, i.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("505088"),
                l = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, i.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return r
                }
            });
            var i = n("281071"),
                a = n("773336"),
                s = n("50885");
            let l = (() => {
                if (a.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!l && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : i.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == i || i.removeAllRanges(), null == i || i.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(a), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            })
        }
    }
]);