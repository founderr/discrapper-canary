"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [36952, 88110], {
        919244: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(304548),
                s = n(473708),
                u = n(949095),
                c = n.n(u);

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
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
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
                        return null !== (t = e.props.label) && void 0 !== t ? t : e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : s.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    };
                    e.getSupportedCodeTypes = function() {
                        return e.props.disallowBackupCodes ? s.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : s.Z.Messages.TWO_FA_AUTH_CODE
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
                            o = n.onError;
                        r(e.state.code).catch((function(t) {
                            if (null != t.body) {
                                null == o || o(t.body);
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
                        i = t.actionText,
                        u = t.children,
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
                        I = o.Children.count(u) > 0 ? (0, r.jsx)(l.Card, {
                            type: l.Card.Types.WARNING,
                            className: c().card,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: u
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
                        C = j ? (0, r.jsx)(l.Card, {
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
                                }) : null, I, C, (0, r.jsxs)(l.FormItem, {
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
                                    children: null != i ? i : s.Z.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: f,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: s.Z.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                };
                return n
            }(o.PureComponent);
            h.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            const O = h
        },
        22990: (e, t, n) => {
            n.d(t, {
                s5: () => B,
                VS: () => q,
                Nf: () => G,
                IP: () => V,
                Y1: () => F,
                J1: () => U,
                Gn: () => D,
                to: () => w,
                jA: () => k,
                y$: () => Z,
                PC: () => R,
                fe: () => L,
                A3: () => N,
                kI: () => x,
                MZ: () => X,
                DV: () => Y,
                NJ: () => H,
                wC: () => W,
                C1: () => K,
                a2: () => z
            });
            var r = n(667294),
                o = (n(369983), n(202351)),
                i = n(396043),
                a = n(245353),
                l = n(420881),
                s = n(760014),
                u = n(897436),
                c = n(690296),
                d = n(917019),
                f = n(567403),
                E = n(107218),
                p = n(652591),
                m = n(38004),
                _ = n(833589),
                h = n(61209),
                O = n(715107),
                g = n(263483),
                y = n(391939),
                j = n(2590),
                I = n(213424),
                v = n(940581);

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
                var t, n = e.intention,
                    r = e.containerWidth,
                    o = e.rowSize,
                    l = e.isBurstReaction,
                    s = e.analyticsObject,
                    u = h.Z.getChannel(O.Z.getChannelId()),
                    d = null == u ? void 0 : u.getGuildId(),
                    f = a.Z.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
                    E = null != u ? a.Z.getDisambiguatedEmojiContext(u.getGuildId()).favoriteEmojisWithoutFetchingLatest : [],
                    p = f.slice(0, a.Z.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems),
                    b = null != d ? a.Z.getGuildEmoji(d) : [],
                    M = c.Z.getPacksForUser().map((function(e) {
                        return e.content.emojis
                    })).reduce((function(e, t) {
                        return e.concat(t)
                    }), []),
                    T = null !== (t = a.Z.getDisambiguatedEmojiContext(null == u ? void 0 : u.getGuildId()).groupedCustomEmojis) && void 0 !== t ? t : {},
                    P = Object.values(T).reduce((function(e, t) {
                        return e += t.length
                    }), 0),
                    A = (0, y._)({
                        guildId: null == u ? void 0 : u.getGuildId(),
                        pickerIntention: n
                    }),
                    S = A.topEmojis,
                    x = A.newlyAddedEmojis,
                    N = A.backfillEmojis,
                    R = (0, g.J)({
                        topEmojis: S,
                        newlyAddedEmojis: x,
                        backfillEmojis: N,
                        rowSize: o
                    }),
                    k = R.visibleTopEmojis,
                    Z = R.visibleNewlyAddedEmojis,
                    w = R.visibleBackfillEmojis,
                    D = _.Z.remainingBurstCurrency;
                i.ZP.trackWithMetadata(n === I.Hz.REACTION ? j.rMx.REACTION_PICKER_OPENED : j.rMx.EXPRESSION_PICKER_OPENED, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            C(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: r,
                    tab: v.X1.EMOJI,
                    badged: !1,
                    num_expressions_favorites: E.length,
                    num_animated_expressions_favorites: E.filter((function(e) {
                        return null == e ? void 0 : e.animated
                    })).length,
                    num_custom_expressions_favorites: E.filter(m.ZP.isCustomEmoji).length,
                    num_standard_expressions_favorites: E.filter((function(e) {
                        return null == e.id
                    })).length,
                    num_expressions_frecent: p.length,
                    num_animated_expressions_frecent: p.filter((function(e) {
                        return null == e ? void 0 : e.animated
                    })).length,
                    num_custom_expressions_frecent: p.filter(m.ZP.isCustomEmoji).length,
                    num_standard_expressions_frecent: p.filter((function(e) {
                        return null == e.id
                    })).length,
                    num_current_guild_expressions: b.length,
                    num_current_pack_expressions: M.length,
                    num_custom_expressions_total: P,
                    num_expressions_top_server: k.length,
                    num_animated_expressions_top_server: k.filter((function(e) {
                        return e.animated
                    })).length,
                    num_expressions_newly_added: Z.length,
                    num_animated_expressions_newly_added: Z.filter((function(e) {
                        return e.animated
                    })).length,
                    num_expressions_backfilled: w.length,
                    num_animated_expressions_backfilled: w.filter((function(e) {
                        return e.animated
                    })).length
                }, n === I.Hz.REACTION && {
                    is_burst: l,
                    burst_reaction_balance: D
                }, null != s && {
                    location_object: s
                }))
            }
            var M = n(936957),
                T = n(203600),
                P = n(473708);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return A(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var x = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
                    (0, s.O)(n);
                    var i = (0, I.Gt)(e),
                        l = W(n),
                        d = H(n),
                        p = (0, o.Wu)([c.Z], (function() {
                            return c.Z.getSortedPackIds()
                        }), []),
                        _ = (0, y.Z)(n, e),
                        h = _.topEmojis,
                        O = _.newlyAddedEmojis,
                        j = _.backfillEmojis,
                        v = (0, g.Z)({
                            topEmojis: h,
                            newlyAddedEmojis: O,
                            backfillEmojis: j
                        }),
                        C = v.allEmojis,
                        b = (0, u.Xx)({
                            autoTrackExposure: !1
                        }),
                        T = b.viewAndUseEnabled,
                        A = (0, o.e7)([a.Z], (function() {
                            return a.Z.getDisambiguatedEmojiContext(n)
                        })),
                        x = (0, o.e7)([f.Z], (function() {
                            var e;
                            return null === (e = f.Z.getGuild(n)) || void 0 === e ? void 0 : e.name
                        })),
                        N = r.useMemo((function() {
                            var r = A.getGroupedCustomEmoji(),
                                o = E.Z.getFlattenedGuildIds(),
                                s = [],
                                u = function(o, i) {
                                    var a = !0,
                                        l = !1,
                                        u = void 0;
                                    try {
                                        for (var d, E = o[Symbol.iterator](); !(a = (d = E.next()).done); a = !0) {
                                            var p = d.value,
                                                _ = void 0;
                                            i === M.En.PACK ? _ = c.Z.getPackByPackId({
                                                packId: p
                                            }) : i === M.En.GUILD && (_ = f.Z.getGuild(p));
                                            if (null != _) {
                                                var h = null == r ? void 0 : r[_.id];
                                                if (!(null == h || 0 === h.length || null != t && h.every((function(n) {
                                                        return m.ZP.isEmojiFiltered({
                                                            emoji: n,
                                                            channel: t,
                                                            intention: e,
                                                            canViewAndUsePackEmoji: T
                                                        })
                                                    })))) {
                                                    var O = null;
                                                    if (i === M.En.PACK) {
                                                        var g = _;
                                                        O = {
                                                            type: M.En.PACK,
                                                            pack: g,
                                                            id: g.id
                                                        }
                                                    } else i === M.En.GUILD && (O = {
                                                        type: M.En.GUILD,
                                                        guild: _
                                                    });
                                                    null != O && (_.id === n ? s.unshift(O) : s.push(O))
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        l = !0;
                                        u = e
                                    } finally {
                                        try {
                                            a || null == E.return || E.return()
                                        } finally {
                                            if (l) throw u
                                        }
                                    }
                                };
                            u(p, M.En.PACK);
                            u(o, M.En.GUILD);
                            return a.Z.categories.reduce((function(t, r) {
                                if (r === M.UX.TOP_GUILD_EMOJI) {
                                    if (0 === C.length) return t;
                                    t.push({
                                        type: M.En.TOP_GUILD_EMOJI,
                                        id: r,
                                        name: P.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                            guildName: x
                                        })
                                    })
                                } else if (r === M.UX.RECENT) {
                                    if (0 === l.length) return t;
                                    t.push({
                                        type: M.En.RECENT,
                                        id: r,
                                        name: P.Z.Messages.EMOJI_CATEGORY_RECENT
                                    })
                                } else if (r === M.UX.FAVORITES) {
                                    if (0 === d.length) return t;
                                    t.push({
                                        type: M.En.FAVORITES,
                                        id: r,
                                        name: P.Z.Messages.CATEGORY_FAVORITE
                                    })
                                } else if (r === M.UX.CUSTOM) {
                                    var o, a = s;
                                    i || (a = s.filter((function(e) {
                                        return e.type === M.En.GUILD && e.guild.id === n
                                    })));
                                    (o = t).push.apply(o, S(a))
                                } else B(e) && t.push({
                                    type: M.En.UNICODE,
                                    id: r,
                                    name: r
                                });
                                return t
                            }), [])
                        }), [A, t, n, e, C.length, x, p, l.length, d.length, i, T]);
                    return N
                },
                N = function(e) {
                    var t = null != (null == e ? void 0 : e.getGuildId());
                    p.default.track(j.rMx.PREMIUM_PROMOTION_OPENED, {
                        location_page: t ? j.ZY5.GUILD_CHANNEL : j.ZY5.DM_CHANNEL,
                        location_section: null != e ? j.jXE.EMOJI_PICKER_POPOUT : j.jXE.CUSTOM_STATUS_MODAL
                    })
                },
                R = function(e, t) {
                    i.ZP.trackWithMetadata(j.rMx.SEARCH_STARTED, {
                        search_type: null != t && t === I.Hz.REACTION ? j.aib.EMOJI_REACTION : j.aib.EMOJI,
                        location: e
                    })
                },
                k = function(e, t, n, r, o) {
                    i.ZP.trackWithMetadata(j.rMx.SEARCH_RESULT_VIEWED, {
                        search_type: null != o && o === I.Hz.REACTION ? j.aib.EMOJI_REACTION : j.aib.EMOJI,
                        total_results: e,
                        num_results_locked: t,
                        query: r,
                        location: n
                    })
                },
                Z = function(e, t, n, r) {
                    var o, a = null !== (o = e.uniqueName) && void 0 !== o ? o : e.name;
                    i.ZP.trackWithMetadata(j.rMx.SEARCH_RESULT_SELECTED, {
                        search_type: null != r && r === I.Hz.REACTION ? j.aib.EMOJI_REACTION : j.aib.EMOJI,
                        location: t,
                        expression_guild_id: J(e),
                        expression_pack_id: e.type === l.B.PACK ? e.packId : void 0,
                        emoji_id: e.id,
                        emoji_name: a,
                        is_custom: null != e.id,
                        is_animated: e.animated,
                        query: n
                    })
                },
                w = function(e, t) {
                    i.ZP.trackWithMetadata(j.rMx.SEARCH_RESULT_EMPTY, {
                        search_type: j.aib.EMOJI,
                        query: t,
                        location: e
                    })
                },
                D = function(e) {
                    var t = e.emoji,
                        n = e.subCategory,
                        r = e.position,
                        o = e.backfillEmoji,
                        a = e.newlyAddedHighlight;
                    i.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
                        expression_section: null == n ? void 0 : n.toString(),
                        newly_added_highlight: a,
                        emoji_id: t.id,
                        emoji_name: t.name,
                        emoji_animated: t.animated,
                        emoji_backfilled: o,
                        emoji_position: r
                    })
                },
                L = function(e) {
                    var t, n, r = e.emoji,
                        o = e.location,
                        a = e.pickerIntention,
                        s = e.category,
                        u = e.subCategory,
                        c = void 0 === u ? M.t0.NONE : u,
                        d = e.position,
                        f = e.backfillEmoji,
                        E = e.newlyAddedHighlight,
                        p = e.isBurstReaction;
                    switch (a) {
                        case I.Hz.REACTION:
                            t = p ? T.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : T.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                            break;
                        case I.Hz.STATUS:
                            t = T.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
                            break;
                        default:
                            t = T.cd.EMOJI_PICKER_EMOJI_CLICKED
                    }
                    var m = null !== (n = r.uniqueName) && void 0 !== n ? n : r.name;
                    i.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: t,
                        location: o,
                        expression_id: r.id,
                        expression_name: m,
                        expression_guild_id: J(r),
                        expression_pack_id: r.type === l.B.PACK ? r.packId : void 0,
                        is_custom: null != r.id,
                        is_animated: r.animated,
                        expression_picker_section: s,
                        expression_section: null == c ? void 0 : c.toString(),
                        emoji_position: d,
                        emoji_backfilled: f,
                        newly_added_highlight: E,
                        is_burst: p
                    })
                },
                U = function(e) {
                    var t, n = e.emoji,
                        r = e.location,
                        o = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
                    i.ZP.trackWithMetadata(j.rMx.EXPRESSION_FAVORITED, {
                        location: r,
                        expression_type: v.X1.EMOJI,
                        expression_id: n.id,
                        expression_name: o,
                        expression_guild_id: J(n),
                        expression_pack_id: n.type === l.B.PACK ? n.packId : void 0,
                        is_custom: null != n.id,
                        is_animated: n.animated
                    })
                };

            function J(e) {
                return e.type !== l.B.PACK ? e.guildId : void 0
            }
            var G = function(e, t, n) {
                    switch (e.type) {
                        case M.En.GUILD:
                            return null != t ? t.toString() : "";
                        case M.En.PACK:
                            return null != n ? n.name : e.id;
                        default:
                            return e.id
                    }
                },
                F = function(e, t, n) {
                    switch (e) {
                        case M.UX.TOP_GUILD_EMOJI:
                            return P.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
                                guildName: t
                            });
                        case M.UX.RECENT:
                            return P.Z.Messages.EMOJI_CATEGORY_RECENT;
                        case M.UX.FAVORITES:
                            return P.Z.Messages.CATEGORY_FAVORITE;
                        case M.UX.ACTIVITY:
                            return P.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
                        case M.UX.FLAGS:
                            return P.Z.Messages.EMOJI_CATEGORY_FLAGS;
                        case M.UX.FOOD:
                            return P.Z.Messages.EMOJI_CATEGORY_FOOD;
                        case M.UX.NATURE:
                            return P.Z.Messages.EMOJI_CATEGORY_NATURE;
                        case M.UX.OBJECTS:
                            return P.Z.Messages.EMOJI_CATEGORY_OBJECTS;
                        case M.UX.PEOPLE:
                            return P.Z.Messages.EMOJI_CATEGORY_PEOPLE;
                        case M.UX.SYMBOLS:
                            return P.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
                        case M.UX.TRAVEL:
                            return P.Z.Messages.EMOJI_CATEGORY_TRAVEL;
                        case M.UX.PREMIUM_UPSELL:
                            return P.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
                        default:
                            return null != n ? P.Z.Messages.EMOJI_CATEGORY_PACK.format({
                                packName: n
                            }) : null != t ? t : e
                    }
                },
                B = function(e) {
                    return e !== I.Hz.COMMUNITY_CONTENT_ONLY
                };

            function Y(e, t, n) {
                var i = (0, u.Xx)({
                    autoTrackExposure: !1
                }).viewAndUseEnabled;
                r.useEffect((function() {
                    d.DZ.loadIfNecessary()
                }), []);
                var l = (0, I.Gt)(n);
                return (0, o.e7)([a.Z], (function() {
                    var r = e.replace(/^:/, "").replace(/:$/, "");
                    return "" === r ? null : a.Z.searchWithoutFetchingLatest({
                        channel: t,
                        query: r,
                        count: 0,
                        intention: n,
                        includeExternalGuilds: l,
                        canViewAndUsePackEmoji: i
                    })
                }), [t, n, e, l, i], o.pF)
            }

            function W(e) {
                r.useEffect((function() {
                    d.DZ.loadIfNecessary()
                }), []);
                return (0, o.Wu)([a.Z], (function() {
                    return a.Z.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest()
                }))
            }

            function H(e) {
                r.useEffect((function() {
                    d.DZ.loadIfNecessary()
                }), []);
                return (0, o.Wu)([a.Z], (function() {
                    return a.Z.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest
                }))
            }

            function K(e, t) {
                r.useEffect((function() {
                    d.DZ.loadIfNecessary()
                }), []);
                return (0, o.e7)([a.Z], (function() {
                    return null != t && a.Z.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t)
                }))
            }

            function X(e) {
                r.useEffect((function() {
                    d.DZ.loadIfNecessary()
                }), []);
                return (0, o.Wu)([a.Z], (function() {
                    return a.Z.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest()
                }))
            }

            function z(e) {
                var t = r.useCallback((function() {
                    b(e)
                }), [e]);
                r.useEffect((function() {
                    e.intention === I.Hz.REACTION && t()
                }), []);
                return {
                    trackOnPickerOpen: t
                }
            }

            function V(e, t, n) {
                if (null == n) return M.t0.NONE;
                var r, o, i = e.map((function(e) {
                        return null !== (o = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== o ? o : e.name
                    })),
                    a = t.map((function(e) {
                        return e.id
                    }));
                return i.includes(n) ? M.t0.TOP_GUILD_EMOJI : a.includes(n) ? M.t0.NEWLY_ADDED_EMOJI : M.t0.NONE
            }

            function q(e) {
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
        263483: (e, t, n) => {
            n.d(t, {
                J: () => i,
                Z: () => a
            });
            var r = n(667294),
                o = n(936957);

            function i(e) {
                var t = e.topEmojis,
                    n = e.newlyAddedEmojis,
                    r = e.backfillEmojis,
                    i = e.rowSize,
                    a = void 0 === i ? o.N6 : i,
                    l = t.slice(0, a - n.length),
                    s = [];
                l.length + n.length < a && (s = r.slice(0, a - t.length - n.length));
                return {
                    visibleTopEmojis: l,
                    visibleNewlyAddedEmojis: n,
                    visibleBackfillEmojis: s,
                    allEmojis: l.concat(s).concat(n)
                }
            }

            function a(e) {
                return r.useMemo((function() {
                    return i(e)
                }), [e])
            }
        },
        391939: (e, t, n) => {
            n.d(t, {
                Z: () => c,
                _: () => u
            });
            var r = n(318715),
                o = n(245353);
            const i = (0, n(260561).B)({
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
            var a = n(230343),
                l = n(213424),
                s = [];

            function u(e) {
                var t = e.emojiStoreInstance,
                    n = void 0 === t ? o.Z : t,
                    r = e.guildId,
                    u = e.pickerIntention,
                    c = e.shouldSeeTopEmojis,
                    d = void 0 === c ? (0, a.Y)().shouldSeeTopEmojiBar : c,
                    f = e.shouldSeeNewlyAddedEmoji,
                    E = void 0 === f ? (0, a.Y)().shouldSeeNewlyAddedEmoji : f,
                    p = e.shouldSeeBackfillEmojis,
                    m = void 0 === p ? i.getCurrentConfig({
                        location: "fe926e_1"
                    }, {
                        autoTrackExposure: !1
                    }).shouldBackfillEmojis : p;
                return {
                    topEmojis: u !== l.Hz.REACTION && d ? n.getTopEmoji(r) : s,
                    newlyAddedEmojis: u !== l.Hz.REACTION && E ? n.getNewlyAddedEmoji(r) : s,
                    backfillEmojis: u !== l.Hz.REACTION && d && m ? n.getBackfillTopEmojis(r) : s
                }
            }

            function c(e, t) {
                var n = (0, a.R)(!0),
                    l = n.shouldSeeNewlyAddedEmoji,
                    s = n.shouldSeeTopEmojiBar,
                    c = i.useExperiment({
                        location: "fe926e_1"
                    }, {
                        autoTrackExposure: !1
                    }).shouldBackfillEmojis;
                return (0, r.cj)([o.Z], (function() {
                    return u({
                        emojiStoreInstance: o.Z,
                        guildId: e,
                        pickerIntention: t,
                        shouldSeeTopEmojis: s,
                        shouldSeeNewlyAddedEmoji: l,
                        shouldSeeBackfillEmojis: c
                    })
                }), [e, t, s, l, c])
            }
        },
        953375: (e, t, n) => {
            n.d(t, {
                pj: () => a,
                pr: () => l,
                Zg: () => s
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function a(e) {
                o.Z.dispatch({
                    type: "TOP_EMOJIS_FETCH",
                    guildId: e
                });
                r.ZP.get({
                    url: i.ANM.TOP_EMOJIS_FOR_GUILD(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    return o.Z.dispatch({
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
                    return o.Z.dispatch({
                        type: "TOP_EMOJIS_FETCH_FAILURE",
                        guildId: e
                    })
                }))
            }

            function l(e, t) {
                o.Z.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_UPDATED"
                });
                null != e && null != t && o.Z.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_PENDING",
                    guildId: e,
                    emojiId: t
                })
            }

            function s(e, t) {
                null != e && null != t && o.Z.dispatch({
                    type: "NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED",
                    guildId: e,
                    emojiId: t
                })
            }
        },
        760014: (e, t, n) => {
            n.d(t, {
                O: () => s
            });
            var r = n(230343),
                o = n(473903),
                i = n(245353),
                a = n(37763),
                l = n(953375);

            function s(e) {
                if (null != e) {
                    if (null != o.default.getCurrentUser()) {
                        if ((0, r.Y)().shouldSeeTopEmojiBar) {
                            var t = i.Z.getTopEmojisMetadata(e);
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
                o = n(496486),
                i = function(e) {
                    return "function" == typeof e ? e() : e
                };
            n.n(o)().curry((function(e, t, n) {
                return i(t) ? e(n) : n({})
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

            function s(e, t) {
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

            function u(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
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
                    o = e.modalProps,
                    i = void 0 === o ? {} : o,
                    a = e.hooks,
                    u = (void 0 === a ? {} : a).onEarlyClose,
                    E = function() {
                        null == u || u()
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
                        f(O, g, E, s(l({}, i), {
                            error: t.body.message
                        }))
                    };
                if (null != c) var O = c(g, E, i);
                else null == u || u();

                function g(e) {
                    f(O, g, E, s(l({}, i), {
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
                    o = e.code,
                    i = e.mfaCodeHandler,
                    a = void 0 === i ? p : i,
                    s = e.isModalOpen,
                    c = void 0 !== s && s,
                    d = u(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
                return t(null != o ? {
                    code: o
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
                var n, o, a = null != t ? t : {},
                    s = a.checkEnabled,
                    c = void 0 === s ? null !== (o = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== o && o : s,
                    d = u(a, ["checkEnabled"]);
                return new Promise((function(t, n) {
                    (i(c) ? p : m)(l({
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
                showModal: () => s,
                updateModalProps: () => u
            });
            var r = n(785893),
                o = (n(667294), n(264817)),
                i = n(919244);

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
                return function(o) {
                    return (0, r.jsx)(i.Z, function(e) {
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
                    }, n, o))
                }
            };

            function s(e, t, n) {
                return (0, o.h7)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, o.o)(e, l(t, n, r))
            }
        }
    }
]);