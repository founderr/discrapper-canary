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
            var a = n("913144"),
                i = n("777273");

            function s(e) {
                let {
                    omitUserIds: t,
                    guild: n,
                    channel: s,
                    applicationId: l,
                    inviteTargetType: r
                } = e;
                return (0, i.fetchUserAffinities)().then(() => {
                    a.default.dispatch({
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
                a.default.dispatch({
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
            var a = n("872717"),
                i = n("913144"),
                s = n("843823"),
                l = n("49111");

            function r() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (i.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), a.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    i.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    i.default.dispatch({
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
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: r = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...u
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: c
                    })]
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 1 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 1 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 0 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Z",
                        className: r
                    }), (0, a.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.707 10.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        className: r
                    })]
                })
            }
        },
        159747: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                i = n("884691"),
                s = n("759843"),
                l = n("446674"),
                r = n("77078"),
                o = n("450911"),
                c = n("685073"),
                u = n("819689"),
                d = n("812204"),
                f = n("685665"),
                p = n("428958"),
                m = n("843962"),
                h = n("679653"),
                I = n("305961"),
                g = n("705955"),
                v = n("27618"),
                x = n("697218"),
                y = n("646240"),
                C = n("578706"),
                S = n("83900"),
                A = n("599110"),
                T = n("315102"),
                N = n("306160"),
                E = n("354023"),
                R = n("159885"),
                _ = n("158998"),
                w = n("969380"),
                j = n("49111"),
                L = n("91366"),
                U = n("782340"),
                D = n("764786");

            function M(e) {
                let {
                    activityItem: t,
                    analyticsLocations: n,
                    ...m
                } = e, h = (0, l.useStateFromStores)([x.default], () => x.default.getCurrentUser()), {
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
                let [v, C] = i.useState(""), [S, T] = i.useState([]), N = (0, w.default)({
                    applicationId: t.application.id,
                    size: 256
                }), R = "".concat(window.location.origin).concat(j.Routes.ACTIVITY_DETAILS(t.application.id)), _ = (0, l.useStateFromStoresArray)([g.default], () => g.default.getInviteSuggestionRows());
                i.useEffect(() => {
                    (0, c.loadInviteSuggestions)({
                        omitUserIds: new Set,
                        applicationId: t.application.id,
                        inviteTargetType: L.InviteTargetTypes.EMBEDDED_APPLICATION
                    })
                }, [t.application.id]), i.useEffect(() => (0, c.searchInviteSuggestions)(v), [v]);
                let M = i.useCallback(async () => {
                    let e = 0,
                        n = 0,
                        a = 0,
                        i = g.default.getInviteSuggestionRows().filter(e => S.includes(e.item.id)).map(t => (function(t, i) {
                            switch (t.type) {
                                case E.RowTypes.DM:
                                case E.RowTypes.FRIEND:
                                    e++;
                                    break;
                                case E.RowTypes.GROUP_DM:
                                    n++;
                                    break;
                                case E.RowTypes.CHANNEL:
                                    a++
                            }
                            return t.type === E.RowTypes.GROUP_DM || t.type === E.RowTypes.CHANNEL ? u.default.sendActivityBookmark(t.item.id, i, d.default.ACTIVITY_DETAIL_PAGE, null) : t.type === E.RowTypes.DM || t.type === E.RowTypes.FRIEND ? o.default.ensurePrivateChannel(t.item.id).then(e => u.default.sendActivityBookmark(e, R, d.default.ACTIVITY_DETAIL_PAGE, null)) : Promise.resolve()
                        })(t, R));
                    await i, A.default.track(j.AnalyticEvents.ACTIVITY_BOOKMARK_SHARED, {
                        user_id: null == h ? void 0 : h.id,
                        application_id: t.application.id,
                        n_users: e,
                        n_gdms: n,
                        n_channels: a
                    }), m.onClose()
                }, [t, S, m, R, h]);
                return (0, a.jsxs)(r.ModalRoot, {
                    ...m,
                    className: D.modalRoot,
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        className: D.header,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            children: U.default.Messages.EMBEDDED_ACTIVITIES_SHARE_ACTIVITY_WITH.format({
                                activityName: t.application.name
                            })
                        }), (0, a.jsx)(r.ModalCloseButton, {
                            onClick: m.onClose
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: D.modalContent,
                        children: [(0, a.jsx)(y.default, {
                            className: D.searchBar,
                            placeholder: U.default.Messages.SEARCH,
                            label: U.default.Messages.SEARCH,
                            searchTerm: v,
                            onChange: e => C(e),
                            onClear: () => C("")
                        }), _.map((e, t) => (0, a.jsxs)(i.Fragment, {
                            children: [0 === t ? null : (0, a.jsx)("div", {
                                className: D.rowDivider
                            }), (0, a.jsx)(O, {
                                row: e,
                                onClick: () => {
                                    let t = [...S];
                                    t.includes(e.item.id) ? t = t.filter(t => t !== e.item.id) : t.push(e.item.id), T(t)
                                },
                                checked: S.includes(e.item.id)
                            })]
                        }, e.item.id))]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: D.footer,
                        children: [(0, a.jsx)("div", {
                            className: D.activityInfoOuterContainer,
                            children: (0, a.jsxs)("div", {
                                className: D.activityInfoInnerContainer,
                                children: [(0, a.jsx)("img", {
                                    src: N.url,
                                    className: D.activityInfoImage,
                                    alt: t.application.name
                                }), (0, a.jsxs)("div", {
                                    className: D.activityInfoText,
                                    children: [(0, a.jsx)(r.Text, {
                                        variant: "text-md/semibold",
                                        className: D.ellipsis,
                                        children: t.application.name
                                    }), (0, a.jsx)(r.Text, {
                                        variant: "text-sm/medium",
                                        className: D.ellipsis,
                                        children: t.application.description
                                    }), (0, a.jsx)(r.Text, {
                                        variant: "text-xs/medium",
                                        className: D.ellipsis,
                                        children: (0, a.jsx)(r.Anchor, {
                                            href: R,
                                            children: R
                                        })
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: D.footerDivider
                        }), (0, a.jsxs)("div", {
                            className: D.copySendBar,
                            children: [(0, a.jsx)(F, {
                                link: R,
                                applicationId: t.application.id
                            }), (0, a.jsx)(r.Button, {
                                onClick: M,
                                disabled: S.length <= 0,
                                children: U.default.Messages.SEND
                            })]
                        })]
                    })]
                })
            }

            function O(e) {
                let {
                    row: t,
                    onClick: n,
                    checked: i
                } = e, s = null, l = null, o = null;
                switch (t.type) {
                    case E.RowTypes.DM:
                    case E.RowTypes.FRIEND:
                        s = (0, a.jsx)(r.Avatar, {
                            size: r.AvatarSizes.SIZE_40,
                            src: t.item.getAvatarURL(null, 128, !1),
                            "aria-label": t.item.username
                        }), l = _.default.getName(t.item), o = _.default.getUserTag(t.item);
                        break;
                    case E.RowTypes.GROUP_DM: {
                        let e = (0, m.getChannelIconURL)(t.item),
                            n = (0, h.computeChannelName)(t.item, x.default, v.default);
                        s = (0, a.jsx)(r.Avatar, {
                            src: e,
                            "aria-label": n,
                            size: r.AvatarSizes.SIZE_40
                        }), l = (0, h.computeChannelName)(t.item, x.default, v.default);
                        break
                    }
                    case E.RowTypes.CHANNEL: {
                        let e = t.item,
                            n = I.default.getGuild(e.guild_id);
                        if (null == n) return null;
                        if (l = "#".concat((0, h.computeChannelName)(e, x.default, v.default)), o = n.name, null != n.icon) {
                            let t = T.default.getGuildIconURL({
                                id: e.guild_id,
                                icon: n.icon,
                                size: 40
                            });
                            s = (0, a.jsx)(r.Avatar, {
                                src: t,
                                "aria-label": l,
                                size: r.AvatarSizes.SIZE_40
                            })
                        } else {
                            let e = (0, R.getAcronym)(n.name);
                            s = (0, a.jsx)("div", {
                                className: D.acronym,
                                "aria-hidden": !0,
                                children: e
                            })
                        }
                    }
                }
                return (0, a.jsxs)(r.Clickable, {
                    onClick: n,
                    className: D.rowContainer,
                    children: [(0, a.jsxs)("div", {
                        className: D.rowLeft,
                        children: [(0, a.jsx)("div", {
                            className: D.rowAvatar,
                            children: s
                        }), (0, a.jsxs)("div", {
                            className: D.rowNameContainer,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                className: D.rowName,
                                children: l
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                className: D.rowSubName,
                                children: o
                            })]
                        })]
                    }), (0, a.jsx)(r.Checkbox, {
                        value: i,
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
                } = e, s = (0, l.useStateFromStores)([x.default], () => x.default.getCurrentUser()), [o, c] = i.useState(!1);
                return i.useEffect(() => {
                    let e;
                    return o && (e = setTimeout(() => {
                        c(!1)
                    }, 1e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [o]), (0, a.jsxs)(r.Button, {
                    look: r.Button.Looks.LINK,
                    color: r.Button.Colors.LINK,
                    onClick: function() {
                        A.default.track(j.AnalyticEvents.ACTIVITY_BOOKMARK_COPY_URL, {
                            user_id: null == s ? void 0 : s.id,
                            application_id: t
                        }), (0, N.copy)(n), c(!0)
                    },
                    innerClassName: D.copyButton,
                    children: [o ? (0, a.jsx)(C.default, {}) : (0, a.jsx)(S.default, {}), o ? U.default.Messages.COPIED : U.default.Messages.COPY_LINK]
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
            var a = n("697218"),
                i = n("315102"),
                s = n("449008"),
                l = n("49111");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case l.ChannelTypes.DM:
                        let [r] = e.recipients.map(a.default.getUser).filter(s.isNotNullish);
                        if (null == r) return null;
                        return r.getAvatarURL(void 0, t, n);
                    case l.ChannelTypes.GROUP_DM:
                        return i.default.getChannelIconURL({
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
            let a, i, s, l, r, o, c;
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u = n("446674"),
                d = n("913144"),
                f = n("116460"),
                p = n("449008"),
                m = n("354023"),
                h = n("42203"),
                I = n("27618"),
                g = n("843823"),
                v = n("49111"),
                x = n("91366");
            let y = new Set,
                C = [],
                S = new Map;

            function A(e) {
                let t = new Set,
                    n = null == l || c === x.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
                    a = (0, m.getMostRecentDMedUser)(y, n);
                for (let e of (null != a && !I.default.isBlocked(a.id) && t.add(a.id), g.default.getUserAffinitiesUserIds())) t.add(e);
                let i = new Set;
                if (c === x.InviteTargetTypes.EMBEDDED_APPLICATION) {
                    let e = f.default.getChannelHistory();
                    e.map(e => h.default.getChannel(e)).filter(p.isNotNullish).filter(e => e.type === v.ChannelTypes.GUILD_TEXT).slice(0, 3).forEach(e => i.add(e.id))
                }
                return (0, m.generateRowsForQuery)({
                    query: e,
                    omitUserIds: y,
                    suggestedUserIds: t,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: n,
                    suggestedChannelIds: i,
                    inviteTargetType: c
                })
            }

            function T(e) {
                C = e, S = new Map, e.forEach((e, t) => {
                    S.set(e, {
                        index: t
                    })
                })
            }
            class N extends u.default.Store {
                initialize() {
                    this.waitFor(I.default, g.default)
                }
                getInviteSuggestionRows() {
                    return C
                }
                getTotalSuggestionsCount() {
                    return i
                }
                getInitialCounts() {
                    return a
                }
                getSelectedInviteMetadata(e) {
                    let t = S.get(e),
                        n = g.default.getUserAffinitiesUserIds();
                    return null != t ? {
                        rowNum: t.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: C.length,
                        numAffinityConnections: n.size,
                        isFiltered: s
                    } : null
                }
            }
            N.displayName = "InviteSuggestionsStore";
            var E = new N(d.default, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    let {
                        omitUserIds: t,
                        guild: n,
                        channel: u,
                        applicationId: d,
                        inviteTargetType: f
                    } = e;
                    l = null != u ? n : null, r = u, o = d, c = f;
                    let p = I.default.getRelationships(),
                        h = Object.keys(p).filter(e => p[e] === v.RelationshipTypes.BLOCKED),
                        g = (0, m.getUsersAlreadyJoined)({
                            channel: r,
                            applicationId: o,
                            inviteTargetType: f
                        });
                    y = new Set([...t, ...h, ...g]), s = !1;
                    let {
                        rows: x,
                        counts: S
                    } = A("");
                    T(x), a = S, i = C.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    let {
                        query: t
                    } = e;
                    s = "" !== t;
                    let {
                        rows: n
                    } = A(t);
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
            var a = n("446674"),
                i = n("913144"),
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

            function c() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class u extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([s.default], c)
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
            u.displayName = "UserAffinitiesStore", u.persistKey = "UserAffinitiesStore", u.migrations = [e => null];
            var d = new u(i.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    o.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), c(), l = !1
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
            var a = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("77078"),
                o = n("381546"),
                c = n("229915"),
                u = n("782340"),
                d = n("913893");
            class f extends i.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: i,
                        inputClassName: s,
                        className: f,
                        onChange: p,
                        onFocus: m,
                        onBlur: h,
                        onKeyPress: I,
                        autoComplete: g,
                        forwardedRef: v,
                        closeIconClassName: x,
                        searchIconClassName: y,
                        cta: C
                    } = this.props, S = null != i && i.length > 0, A = null != v ? v : this._textInputRef;
                    return (0, a.jsx)(r.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, a.jsxs)("div", {
                            className: l(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, a.jsx)(r.TextInput, {
                                inputRef: A,
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
                                value: S ? i : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: g ? "on" : "off"
                            }), null != C ? (0, a.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: C
                            }) : null, S ? (0, a.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": u.default.Messages.SEARCH_CLEAR,
                                children: (0, a.jsx)(o.default, {
                                    className: l(d.clearIcon, x)
                                })
                            }) : (0, a.jsx)(c.default, {
                                className: l(d.searchIcon, y),
                                "aria-label": u.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = i.createRef(), this._containerRef = i.createRef(), this.handleClear = () => {
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
            var p = i.forwardRef((e, t) => (0, a.jsx)(f, {
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
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("505088"),
                l = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        backgroundColor: r,
                        ...o
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != r ? (0, a.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: r
                        }) : null, (0, a.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon)
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("753809"),
                l = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, a.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, a.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, s.LinkIcon)
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
            var a = n("281071"),
                i = n("773336"),
                s = n("50885");
            let l = (() => {
                if (i.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!l && (i.isPlatformEmbedded ? (s.default.copy(e), !0) : a.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function a(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    a = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == a || a.removeAllRanges(), null == a || a.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
                let s = document.execCommand("copy");
                return t.removeChild(i), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return a
                }
            })
        }
    }
]);