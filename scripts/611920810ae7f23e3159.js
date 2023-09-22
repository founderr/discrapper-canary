"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [47701, 88110], {
        919244: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                a = n.n(o),
                l = n(882723),
                u = n(473708),
                s = n(775823),
                c = n.n(s);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function E(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    d(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    };
                    e.setRef = function(t) {
                        e._input = t
                    };
                    e.getLabelText = function() {
                        var t;
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.Z.Messages.TWO_FA_AUTH_CODE
                    };
                    e.getPlaceholder = function() {
                        return e.props.forceNoPlaceholder ? null : null !== (t = e.props.placeholder) && void 0 !== t ? t : e.getSupportedCodeTypes();
                        var t
                    };
                    e.errorPresent = function() {
                        return null != e.props.error && "" !== e.props.error || null != e.state.errorMessage && "" !== e.state.errorMessage
                    };
                    e.handleRetry = function() {
                        var t = e.props.onRetry;
                        null == t || t().then((function() {
                            return e.setState({
                                retrySuccess: !0
                            })
                        }))
                    };
                    e.handleSubmit = function(t) {
                        t.preventDefault();
                        var n = e.props,
                            r = n.handleSubmit,
                            i = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == i || i(t.body);
                                t.body.message && e.setState({
                                    errorMessage: t.body.message
                                })
                            }
                        }))
                    };
                    e.handleCancel = function() {
                        var t = e.props,
                            n = t.onClose,
                            r = t.handleEarlyClose;
                        n();
                        null == r || r()
                    };
                    e.handleCodeChange = function(t) {
                        e.setState({
                            code: t
                        })
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e, t = this.props,
                        n = t.title,
                        o = t.actionText,
                        s = t.children,
                        d = t.error,
                        f = t.isLoading,
                        E = t.maxLength,
                        p = t.transitionState,
                        m = t.helpMessage,
                        _ = t.retryPrompt,
                        h = t.retrySuccessMessage,
                        O = this.state,
                        g = O.code,
                        y = O.errorMessage,
                        j = O.retrySuccess,
                        b = i.Children.count(s) > 0 ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.WARNING,
                            className: c().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: s
                            })
                        }) : null,
                        v = null != _ ? (0, r.jsxs)(l.Text, {
                            className: a()(c().submitText, c().spacing),
                            variant: "text-sm/normal",
                            children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                                className: a()(c().spacing, c().link),
                                onClick: this.handleRetry,
                                children: (0, r.jsx)(l.Anchor, {
                                    children: _
                                })
                            })]
                        }) : null,
                        I = j ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.SUCCESS,
                            className: c().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: h
                            })
                        }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: p,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: n
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != m ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: c().spacing,
                                    children: m
                                }) : null, b, I, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: c().spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: g,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: c().error,
                                        children: null != d ? d : y
                                    }) : null, v]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: f || 0 === g.length,
                                    children: null != o ? o : u.Z.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: f,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: u.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(i.PureComponent);
            h.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const O = h
        },
        589503: (e, t, n) => {
            n.d(t, {
                s5: () => Y,
                VS: () => ne,
                Nf: () => B,
                IP: () => ee,
                Y1: () => W,
                QJ: () => te,
                J1: () => J,
                Gn: () => U,
                to: () => w,
                jA: () => k,
                y$: () => D,
                PC: () => Z,
                fe: () => L,
                A3: () => N,
                kI: () => R,
                MZ: () => V,
                DV: () => H,
                NJ: () => X,
                wC: () => K,
                C1: () => q,
                _m: () => $,
                a2: () => Q
            });
            var r = n(667294),
                i = (n(369983), n(202351)),
                o = n(396043),
                a = n(245353),
                l = n(420881),
                u = n(760014),
                s = n(897436),
                c = n(690296),
                d = n(833589),
                f = n(917019),
                E = n(61209),
                p = n(567403),
                m = n(715107),
                _ = n(107218),
                h = n(652591),
                O = n(38004);
            const g = (0, n(260561).B)({
                kind: "user",
                id: "2023-01_emoji_discovery_backfill",
                label: "Emoji Hotrail Backfill",
                defaultConfig: {
                    shouldBackfillEmojis: !1
                },
                treatments: [{
                    id: 1,
                    label: "Backfills Hotrail With Emojis",
                    config: {
                        shouldBackfillEmojis: !0
                    }
                }]
            });
            var y = n(230343),
                j = n(936957),
                b = n(2590),
                v = n(213424),
                I = n(940581),
                C = n(203600),
                M = n(473708);

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || x(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || x(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                if (e) {
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
                }
            }
            var R = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, u.O)(n);
                    var o = (0, v.Gt)(e),
                        l = K(n),
                        d = X(n),
                        f = (0, i.Wu)([c.Z], (function() {
                            return c.Z.getSortedPackIds()
                        }), []),
                        E = $(n, e),
                        m = E.topEmojis,
                        h = E.newlyAddedEmojis,
                        g = E.backfillEmojis,
                        y = te(m, h, g),
                        b = y.allEmojis,
                        I = (0, s.Xx)({
                            autoTrackExposure: !1
                        }),
                        C = I.viewAndUseEnabled,
                        T = (0, i.e7)([a.Z], (function() {
                            return a.Z.getDisambiguatedEmojiContext(n)
                        })),
                        P = (0, i.e7)([p.Z], (function() {
                            var e;
                            return null === (e = p.Z.getGuild(n)) || void 0 === e ? void 0 : e.name
                        })),
                        A = r.useMemo((function() {
                            var r = T.getGroupedCustomEmoji(),
                                i = _.Z.getFlattenedGuildIds(),
                                u = [],
                                s = function(i, o) {
                                    var a = !0,
                                        l = !1,
                                        s = void 0;
                                    try {
                                        for (var d, f = i[Symbol.iterator](); !(a = (d = f.next()).done); a = !0) {
                                            var E = d.value,
                                                m = void 0;
                                            o === j.En.PACK ? m = c.Z.getPackByPackId(E) : o === j.En.GUILD && (m = p.Z.getGuild(E));
                                            if (null != m) {
                                                var _ = null == r ? void 0 : r[m.id];
                                                if (!(null == _ || 0 === _.length || null != t && _.every((function(n) {
                                                        return O.ZP.isEmojiFiltered({
                                                            emoji: n,
                                                            channel: t,
                                                            intention: e,
                                                            canViewAndUsePackEmoji: C
                                                        })
                                                    })))) {
                                                    var h = null;
                                                    if (o === j.En.PACK) {
                                                        var g = m;
                                                        h = {
                                                            type: j.En.PACK,
                                                            pack: g,
                                                            id: g.id
                                                        }
                                                    } else o === j.En.GUILD && (h = {
                                                        type: j.En.GUILD,
                                                        guild: m
                                                    });
                                                    null != h && (m.id === n ? u.unshift(h) : u.push(h))
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        l = !0;
                                        s = e
                                    } finally {
                                        try {
                                            a || null == f.return || f.return()
                                        } finally {
                                            if (l) throw s
                                        }
                                    }
                                };
                            s(f, j.En.PACK);
                            s(i, j.En.GUILD);
                            return a.Z.categories.reduce((function(t, r) {
                                if (r === j.UX.TOP_GUILD_EMOJI) {
                                    if (0 === b.length) return t;
                                    t.push({
                                        type: j.En.TOP_GUILD_EMOJI,
                                        id: r,
                                        name: M.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: P
                                        })
                                    })
                                } else if (r === j.UX.RECENT) {
                                    if (0 === l.length) return t;
                                    t.push({
                                        type: j.En.RECENT,
                                        id: r,
                                        name: M.Z.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (r === j.UX.FAVORITES) {
                                    if (0 === d.length) return t;
                                    t.push({
                                        type: j.En.FAVORITES,
                                        id: r,
                                        name: M.Z.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (r === j.UX.CUSTOM) {
                                    var i, a = u;
                                    o || (a = u.filter((function(e) {
                                        return e.type === j.En.GUILD && e.guild.id === n
                                    })));
                                    (i = t).push.apply(i, S(a))
                                } else Y(e) && t.push({
                                    type: j.En.UNICODE,
                                    id: r,
                                    name: r
                                });
                                return t
                            }), [])
                        }), [T, t, n, e, b.length, P, f, l.length, d.length, o, C]);
                    return A
                },
                N = function(e) {
                    var t = null != (null == e ? void 0 : e.getGuildId());
                    h.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? b.ZY5.GUILD_CHANNEL : b.ZY5.DM_CHANNEL,
                        location_section: null != e ? b.jXE.EMOJI_PICKER_POPOUT : b.jXE.CUSTOM_STATUS_MODAL
                    })
                },
                Z = function(e, t) {
                    o.ZP.trackWithMetadata(b.rMx.SEARCH_STARTED, {
                        search_type: null != t && t === v.Hz.REACTION ? b.aib.EMOJI_REACTION : b.aib.EMOJI,
                        location: e
                    })
                },
                k = function(e, t, n, r, i) {
                    o.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_VIEWED, {
                        search_type: null != i && i === v.Hz.REACTION ? b.aib.EMOJI_REACTION : b.aib.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: r,
                        location: n
                    })
                },
                D = function(e, t, n, r) {
                    var i, a = null !== (i = e.uniqueName) && void 0 !== i ? i : e.name;
                    o.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_SELECTED, {
                        search_type: null != r && r === v.Hz.REACTION ? b.aib.EMOJI_REACTION : b.aib.EMOJI,
                        location: t,
                        expression_guild_id: G(e),
                        expression_pack_id: e.type === l.B.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: a,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: n
                    })
                },
                w = function(e, t) {
                    o.ZP.trackWithMetadata(b.rMx.SEARCH_RESULT_EMPTY, {
                        search_type: b.aib.EMOJI,
                        query: t,
                        location: e
                    })
                },
                U = function(e) {
                    var t = e.emoji,
                        n = e.subCategory,
                        r = e.position,
                        i = e.backfillEmoji,
                        a = e.newlyAddedHighlight;
                    o.ZP.trackWithMetadata(b.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == n ? void 0 : n.toString(),
                        newly_added_highlight: a,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_backfilled: i,
                        emoji_position: r
                    })
                },
                L = function(e) {
                    var t, n, r = e.emoji,
                        i = e.location,
                        a = e.pickerIntention,
                        u = e.category,
                        s = e.subCategory,
                        c = void 0 === s ? j.t0.NONE : s,
                        d = e.position,
                        f = e.backfillEmoji,
                        E = e.newlyAddedHighlight,
                        p = e.isBurstReaction;
                    switch (a) {
                        case v.Hz.REACTION:
                            t = p ? C.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case v.Hz.STATUS:
                            t = C.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            t = C.cd.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    var m = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name;
                    o.ZP.trackWithMetadata(b.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: t,
                        location: i,
                        expression_id: r.id,
                        expression_name: m,
                        expression_guild_id: G(r),
                        expression_pack_id: r.type === l.B.PACK ? r.packId : void 0,
                        is_custom: null != r.id,
                        is_animated: r.animated,
                        expression_picker_section: u,
                        expression_section: null == c ? void 0 : c.toString(),
                        emoji_position: d,
                        emoji_backfilled: f,
                        newly_added_highlight: E,
                        is_burst: p
                    })
                },
                J = function(e) {
                    var t, n = e.emoji,
                        r = e.location,
                        i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    o.ZP.trackWithMetadata(b.rMx.EXPRESSION_FAVORITED, {
                        location: r,
                        expression_type: I.X1.EMOJI,
                        expression_id: n.id,
                        expression_name: i,
                        expression_guild_id: G(n),
                        expression_pack_id: n.type === l.B.PACK ? n.packId : void 0,
                        is_custom: null != n.id,
                        is_animated: n.animated
                    })
                };

            function G(e) {
                return e.type !== l.B.PACK ? e.guildId : void 0
            }
            var F = function(e) {
                    var t = e.containerWidth,
                        n = e.favoriteEmojis,
                        r = e.frequentlyUsedEmoji,
                        i = e.guildEmoji,
                        a = e.packEmoji,
                        l = e.emojisTotal,
                        u = e.topEmojis,
                        s = e.newlyAddedEmojis,
                        c = e.backfillEmojis,
                        f = e.pickerIntention,
                        E = e.isBurstReaction,
                        p = void 0 !== E && E,
                        m = e.analyticsObject,
                        _ = d.Z.remainingBurstCurrency;
                    o.ZP.trackWithMetadata(f === v.Hz.REACTION ? b.rMx.REACTION_PICKER_OPENED : b.rMx.EXPRESSION_PICKER_OPENED, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                P(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        width: t,
                        tab: I.X1.EMOJI,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter((function(e) {
                            return null == e ? void 0 : e.animated
                        })).length,
                        num_custom_expressions_favorites: n.filter(O.ZP.isCustomEmoji).length,
                        num_standard_expressions_favorites: n.filter((function(e) {
                            return null == e.id
                        })).length,
                        num_expressions_frecent: r.length,
                        num_animated_expressions_frecent: r.filter((function(e) {
                            return null == e ? void 0 : e.animated
                        })).length,
                        num_custom_expressions_frecent: r.filter(O.ZP.isCustomEmoji).length,
                        num_standard_expressions_frecent: r.filter((function(e) {
                            return null == e.id
                        })).length,
                        num_current_guild_expressions: i.length,
                        num_current_pack_expressions: a.length,
                        num_custom_expressions_total: l,
                        num_expressions_top_server: u.length,
                        num_animated_expressions_top_server: u.filter((function(e) {
                            return e.animated
                        })).length,
                        num_expressions_newly_added: s.length,
                        num_animated_expressions_newly_added: s.filter((function(e) {
                            return e.animated
                        })).length,
                        num_expressions_backfilled: c.length,
                        num_animated_expressions_backfilled: c.filter((function(e) {
                            return e.animated
                        })).length
                    }, f === v.Hz.REACTION && {
                        is_burst: p,
                        burst_reaction_balance: _
                    }, null != m && {
                        location_object: m
                    }))
                },
                B = function(e, t, n) {
                    switch (e.type) {
                        case j.En.GUILD:
                            return null != t ? t.toString() : "";
                        case j.En.PACK:
                            return null != n ? n.name : e.id;
                        default:
                            return e.id
                    }
                },
                W = function(e, t, n) {
                    switch (e) {
                        case j.UX.TOP_GUILD_EMOJI:
                            return M.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case j.UX.RECENT:
                            return M.Z.Messages.EMOJI_CATEGORY_RECENT;
                        case j.UX.FAVORITES:
                            return M.Z.Messages.CATEGORY_FAVORITE;
                        case j.UX.ACTIVITY:
                            return M.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case j.UX.FLAGS:
                            return M.Z.Messages.EMOJI_CATEGORY_FLAGS;
                        case j.UX.FOOD:
                            return M.Z.Messages.EMOJI_CATEGORY_FOOD;
                        case j.UX.NATURE:
                            return M.Z.Messages.EMOJI_CATEGORY_NATURE;
                        case j.UX.OBJECTS:
                            return M.Z.Messages.EMOJI_CATEGORY_OBJECTS;
                        case j.UX.PEOPLE:
                            return M.Z.Messages.EMOJI_CATEGORY_PEOPLE;
                        case j.UX.SYMBOLS:
                            return M.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case j.UX.TRAVEL:
                            return M.Z.Messages.EMOJI_CATEGORY_TRAVEL;
                        case j.UX.PREMIUM_UPSELL:
                            return M.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != n ? M.Z.Messages.EMOJI_CATEGORY_PACK.format({
                                packName: n
                            }) : null != t ? t : e
                    }
                },
                Y = function(e) {
                    return e !== v.Hz.COMMUNITY_CONTENT_ONLY
                };

            function H(e, t, n) {
                var o = (0, s.Xx)({
                    autoTrackExposure: !1
                }).viewAndUseEnabled;
                r.useEffect((function() {
                    f.DZ.loadIfNecessary()
                }), []);
                var l = (0, v.Gt)(n);
                return (0, i.e7)([a.Z], (function() {
                    var r = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === r ? null : a.Z.searchWithoutFetchingLatest({
                        channel: t,
                        query: r,
                        count: 0,
                        intention: n,
                        includeExternalGuilds: l,
                        canViewAndUsePackEmoji: o
                    })
                }), [t, n, e, l, o], i.pF)
            }

            function K(e) {
                r.useEffect((function() {
                    f.DZ.loadIfNecessary()
                }), []);
                return (0, i.Wu)([a.Z], (function() {
                    return a.Z.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest()
                }))
            }

            function X(e) {
                r.useEffect((function() {
                    f.DZ.loadIfNecessary()
                }), []);
                return (0, i.Wu)([a.Z], (function() {
                    return a.Z.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest
                }))
            }

            function q(e, t) {
                r.useEffect((function() {
                    f.DZ.loadIfNecessary()
                }), []);
                return (0, i.e7)([a.Z], (function() {
                    return null != t && a.Z.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t)
                }))
            }

            function V(e) {
                r.useEffect((function() {
                    f.DZ.loadIfNecessary()
                }), []);
                return (0, i.Wu)([a.Z], (function() {
                    return a.Z.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest()
                }))
            }
            var z = [];

            function $(e, t) {
                var n = A((0, i.Wu)([a.Z], (function() {
                        return [a.Z.getTopEmoji(e), a.Z.getNewlyAddedEmoji(e), a.Z.getBackfillTopEmojis(e)]
                    })), 3),
                    r = n[0],
                    o = n[1],
                    l = n[2],
                    u = (0, y.R)(!0),
                    s = u.shouldSeeNewlyAddedEmoji,
                    c = u.shouldSeeTopEmojiBar,
                    d = g.useExperiment({
                        location: "fe926e_1"
                    }, {
                        autoTrackExposure: !1
                    }).shouldBackfillEmojis;
                return t === v.Hz.REACTION ? {
                    topEmojis: z,
                    newlyAddedEmojis: z,
                    backfillEmojis: z
                } : {
                    topEmojis: c ? r : z,
                    newlyAddedEmojis: s ? o : z,
                    backfillEmojis: c && d ? l : z
                }
            }

            function Q(e) {
                var t = e.intention,
                    n = e.rowSize,
                    o = e.isBurstReaction,
                    l = e.analyticsObject,
                    u = (0, i.Wu)([a.Z], (function() {
                        return a.Z.emojiFrecencyWithoutFetchingLatest.frequently.slice()
                    })),
                    s = (0, i.e7)([a.Z], (function() {
                        return a.Z.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems
                    })),
                    d = (0, i.e7)([E.Z, m.Z], (function() {
                        return E.Z.getChannel(m.Z.getChannelId())
                    })),
                    f = (0, i.Wu)([a.Z], (function() {
                        return null != d ? a.Z.getDisambiguatedEmojiContext(d.getGuildId()).favoriteEmojisWithoutFetchingLatest : []
                    })),
                    p = u.slice(0, s),
                    _ = (0, i.cj)([a.Z], (function() {
                        var e;
                        return null !== (e = a.Z.getDisambiguatedEmojiContext(null == d ? void 0 : d.getGuildId()).groupedCustomEmojis) && void 0 !== e ? e : {}
                    })),
                    h = r.useMemo((function() {
                        var e = null == d ? void 0 : d.getGuildId();
                        return null != e ? a.Z.getGuildEmoji(e) : []
                    }), [d]),
                    O = (0, i.Wu)([c.Z], (function() {
                        return c.Z.getPacksForUser().map((function(e) {
                            return e.content.emojis
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), [])
                    })),
                    g = Object.values(_).reduce((function(e, t) {
                        return e += t.length
                    }), 0),
                    y = $(null == d ? void 0 : d.getGuildId(), t),
                    j = te(y.topEmojis, y.newlyAddedEmojis, y.backfillEmojis, n),
                    b = j.visibleTopEmojis,
                    I = j.visibleNewlyAddedEmojis,
                    C = j.visibleBackfillEmojis,
                    M = r.useCallback((function() {
                        F({
                            favoriteEmojis: f,
                            frequentlyUsedEmoji: p,
                            guildEmoji: h,
                            packEmoji: O,
                            emojisTotal: g,
                            backfillEmojis: C,
                            topEmojis: b,
                            newlyAddedEmojis: I,
                            pickerIntention: t,
                            isBurstReaction: o,
                            analyticsObject: l
                        })
                    }), [f, p, h, O, g, C, b, I, t, o, l]);
                r.useEffect((function() {
                    t === v.Hz.REACTION && M()
                }), []);
                return {
                    trackOnPickerOpen: M
                }
            }

            function ee(e, t, n) {
                if (null == n) return j.t0.NONE;
                var r, i, o = e.map((function(e) {
                        return null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name
                    })),
                    a = t.map((function(e) {
                        return e.id
                    }));
                return o.includes(n) ? j.t0.TOP_GUILD_EMOJI : a.includes(n) ? j.t0.NEWLY_ADDED_EMOJI : j.t0.NONE
            }

            function te(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : j.N6,
                    i = e.slice(0, r - t.length),
                    o = [];
                i.length + t.length < r && (o = n.slice(0, r - e.length - t.length));
                var a = i.concat(o).concat(t);
                return {
                    visibleTopEmojis: i,
                    visibleNewlyAddedEmojis: t,
                    visibleBackfillEmojis: o,
                    allEmojis: a
                }
            }

            function ne(e) {
                var t = new Set;
                return e.filter((function(e) {
                    if (null == e.uniqueName) return !0;
                    if (!t.has(e.optionallyDiverseSequence)) {
                        t.add(e.optionallyDiverseSequence);
                        return !0
                    }
                }))
            }
        },
        953375: (e, t, n) => {
            n.d(t, {
                pj: () => a,
                pr: () => l,
                Zg: () => u
            });
            var r = n(281110),
                i = n(744564),
                o = n(2590);

            function a(e) {
                i.Z.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                });
                r.ZP.get({
                    url: o.ANM.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    return i.Z.dispatch({
                        type: "TOP_EMOJIS_FETCH_SUCCESS",
                        guildId: e,
                        topEmojisMetadata: t.body.items.map((function(e) {
                            return {
                                emojiId: e.emoji_id,
                                rank: e.emoji_rank
                            }
                        })).sort((function(e, t) {
                            return e.rank - t.rank
                        }))
                    })
                }), (function() {
                    return i.Z.dispatch({
                        type: "TOP_EMOJIS_FETCH_FAILURE",
                        guildId: e
                    })
                }))
            }

            function l(e, t) {
                i.Z.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                });
                null != e && null != t && i.Z.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function u(e, t) {
                null != e && null != t && i.Z.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
                    guildId: e,
                    emojiId: t
                })
            }
        },
        760014: (e, t, n) => {
            n.d(t, {
                O: () => u
            });
            var r = n(230343),
                i = n(473903),
                o = n(245353),
                a = n(37763),
                l = n(953375);

            function u(e) {
                if (null != e) {
                    if (null != i.default.getCurrentUser()) {
                        if ((0, r.Y)().shouldSeeTopEmojiBar) {
                            var t = o.Z.getTopEmojisMetadata(e);
                            if (null != t) {
                                var n = t.topEmojisTTL;
                                if (null == n || Date.now() < n) return
                            }
                            a.Z.getIsFetching(e) || (0, l.pj)(e)
                        }
                    }
                }
            }
        },
        488110: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(473903),
                i = n(496486),
                o = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(i)().curry((function(e, t, n) {
                return o(t) ? e(n) : n({})
            }));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            var c, d, f = function() {
                    throw new Error("updateModal has not been implemented.")
                },
                E = n(680918);
            c = E.showModal;
            f = E.updateModalProps;
            d = n(264817).Mr;

            function p(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.modalProps,
                    o = void 0 === i ? {} : i,
                    a = e.hooks,
                    s = (void 0 === a ? {} : a).onEarlyClose,
                    E = function() {
                        null == s || s()
                    },
                    p = function(e) {
                        d(O);
                        n(e)
                    },
                    _ = function(e) {
                        d(O);
                        r(e)
                    },
                    h = function(e) {
                        var t = e.res;
                        f(O, g, E, u(l({}, o), {
                            error: t.body.message
                        }))
                    };
                if (null != c) var O = c(g, E, o);
                else null == s || s();

                function g(e) {
                    f(O, g, E, u(l({}, o), {
                        isLoading: !0
                    }));
                    return m({
                        promiseFn: t,
                        resolve: p,
                        reject: _,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }
            }

            function m(e) {
                var t = e.promiseFn,
                    n = e.resolve,
                    r = e.reject,
                    i = e.code,
                    o = e.mfaCodeHandler,
                    a = void 0 === o ? p : o,
                    u = e.isModalOpen,
                    c = void 0 !== u && u,
                    d = s(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != i ? {
                    code: i
                } : {}).then(n, (function(e) {
                    if (function(e, t) {
                            return e.body && 60008 === e.body.code || t && 429 === e.status
                        }(e, c)) return a(l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e
                    }, d));
                    r(e)
                }))
            }

            function _(e, t) {
                var n, i, a = null != t ? t : {},
                    u = a.checkEnabled,
                    c = void 0 === u ? null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i : u,
                    d = s(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (o(c) ? p : m)(l({
                        promiseFn: e,
                        resolve: t,
                        reject: n
                    }, d))
                }))
            }
        },
        680918: (e, t, n) => {
            n.r(t);
            n.d(t, {
                showModal: () => u,
                updateModalProps: () => s
            });
            var r = n(785893),
                i = (n(667294), n(264817)),
                o = n(919244);

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var l = function(e, t, n) {
                return function(i) {
                    return (0, r.jsx)(o.Z, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                a(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        handleSubmit: e,
                        handleEarlyClose: t
                    }, n, i))
                }
            };

            function u(e, t, n) {
                return (0, i.h7)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function s(e, t, n, r) {
                return (0, i.o)(e, l(t, n, r))
            }
        }
    }
]);