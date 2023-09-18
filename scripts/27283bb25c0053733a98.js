"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64466], {
        579344: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(993231),
                o = n(72190),
                a = n(281110),
                i = n(744564),
                u = n(53645),
                l = n(296602),
                c = n(652591),
                s = n(391438),
                f = n(2590);

            function E(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function _(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            E(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            E(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
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
            var p = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                N = new l.Z("ConnectedAccounts");

            function y(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return a.ZP.post({
                    url: f.ANM.CONNECTIONS_CALLBACK(e),
                    body: d(T({}, t), {
                        insecure: n,
                        friend_sync: f.BFP.has(e)
                    }),
                    oldFormErrors: !0
                })
            }
            const A = {
                fetch: function() {
                    return a.ZP.get({
                        url: f.ANM.CONNECTIONS,
                        oldFormErrors: !0
                    }).then((function(e) {
                        return i.Z.dispatch({
                            type: "USER_CONNECTIONS_UPDATE",
                            local: !0,
                            accounts: e.body
                        })
                    }), (function() {
                        return i.Z.dispatch({
                            type: "USER_CONNECTIONS_UPDATE",
                            local: !0,
                            accounts: []
                        })
                    }))
                },
                authorize: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.location,
                        i = n.twoWayLinkType,
                        u = n.userCode;
                    c.default.track(f.rMx.CONNECTED_ACCOUNT_INITIATED, {
                        platform_type: e,
                        location: r
                    });
                    t = i === o.g.DEVICE_CODE && null != u ? f.ANM.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, u) : null != i ? f.ANM.CONNECTIONS_AUTHORIZE_LINK(e, i) : f.ANM.CONNECTIONS_AUTHORIZE(e);
                    return a.ZP.get({
                        url: t,
                        oldFormErrors: !0
                    })
                },
                callback: y,
                connect: function(e, t, n, o, a) {
                    var i;
                    return s.Z.put({
                        url: f.ANM.CONNECTION(e, t),
                        body: {
                            name: n,
                            friend_sync: null !== (i = null == a ? void 0 : a.friend_sync) && void 0 !== i ? i : f.BFP.has(e)
                        },
                        context: {
                            location: o
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_CONNECTIONS_UPDATE,
                            properties: {
                                name: n,
                                friend_sync: f.BFP.has(e)
                            }
                        }
                    })
                },
                disconnect: function(e, t) {
                    return a.ZP.delete({
                        url: f.ANM.CONNECTION(e, t),
                        oldFormErrors: !0
                    })
                },
                refresh: function(e, t) {
                    return a.ZP.post({
                        url: f.ANM.CONNECTION_REFRESH(e, t),
                        oldFormErrors: !0
                    })
                },
                submitPinCode: function(e, t) {
                    return a.ZP.get({
                        url: f.ANM.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
                        oldFormErrors: !0
                    }).then((function(e) {
                        var n = e.body;
                        c.default.track(f.rMx.ACCOUNT_LINK_STEP, {
                            previous_step: "PIN code entry",
                            current_step: "PIN success",
                            session_id: n.state,
                            platform_type: t
                        });
                        return y(t, d(T({}, n), {
                            from_continuation: !0
                        }), !0)
                    }))
                },
                setVisibility: function(e, t, n) {
                    return this.update(e, t, {
                        visibility: 1 === n
                    })
                },
                setMetadataVisibility: function(e, t, n) {
                    return this.update(e, t, {
                        metadata_visibility: 1 === n
                    })
                },
                setFriendSync: function(e, t, n) {
                    return this.update(e, t, {
                        friend_sync: n
                    })
                },
                setShowActivity: function(e, t, n) {
                    return this.update(e, t, {
                        show_activity: n
                    })
                },
                update: function(e, t, n) {
                    return s.Z.patch({
                        url: f.ANM.CONNECTION(e, t),
                        body: n,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.a9.USER_CONNECTIONS_UPDATE,
                            properties: T({}, n)
                        }
                    })
                },
                joinServer: function(e, t) {
                    i.Z.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !0
                    });
                    a.ZP.post({
                        url: f.ANM.INTEGRATION_JOIN(e),
                        oldFormErrors: !0
                    }, (function(n) {
                        i.Z.dispatch({
                            type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                            integrationId: e,
                            joining: !1
                        });
                        n.ok || null == t || t()
                    }))
                },
                refreshAccessToken: function(e, t) {
                    return _((function() {
                        var n, r, o, u;
                        return p(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    l.trys.push([0, 2, , 3]);
                                    return [4, a.ZP.get({
                                        url: f.ANM.CONNECTION_ACCESS_TOKEN(e, t),
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    n = l.sent(), r = n.body, o = r.access_token;
                                    i.Z.dispatch({
                                        type: "USER_CONNECTION_UPDATE",
                                        platformType: e,
                                        id: t,
                                        accessToken: o
                                    });
                                    return [2, o];
                                case 2:
                                    (u = l.sent()).body.code === f.evJ.CONNECTION_REVOKED && i.Z.dispatch({
                                        type: "USER_CONNECTION_UPDATE",
                                        platformType: e,
                                        id: t,
                                        revoked: !0
                                    });
                                    throw u;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                linkDispatchAuthCallback: function(e, t) {
                    return a.ZP.post({
                        url: f.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                        body: T({}, t),
                        oldFormErrors: !0
                    })
                },
                completeTwoWayLink: function(e, t, n, r, o) {
                    return _((function() {
                        var a, i, l, c;
                        return p(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (null == t) {
                                        N.error("Two-way link: missing authorize location");
                                        return [2]
                                    }
                                    a = (0, u.xp)(t), i = a.code,
                                        l = a.error, c = a.errorDescription;
                                    if (null != l) {
                                        N.error("Two-way link: missing authorize code", {
                                            error: l,
                                            errorDescription: c
                                        });
                                        return [2]
                                    }
                                    return [4, y(e, {
                                        code: n,
                                        state: r,
                                        two_way_link_code: i,
                                        token_redirect_uri: o
                                    })];
                                case 1:
                                    return [2, s.sent()]
                            }
                        }))
                    }))()
                }
            }
        },
        318277: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(940060),
                o = n(567403),
                a = n(2590),
                i = [a.d4z.GUILD_TEXT, a.d4z.GUILD_VOICE, a.d4z.GUILD_ANNOUNCEMENT, a.d4z.GUILD_FORUM, a.d4z.PUBLIC_THREAD, a.d4z.PRIVATE_THREAD],
                u = r.Z.combine(a.Plq.VIEW_CHANNEL, a.Plq.SEND_MESSAGES);

            function l(e) {
                if (null == e || !i.includes(e.type)) return [];
                var t = o.Z.getGuild(e.guild_id);
                return null == t ? [] : Object.values(e.permissionOverwrites).filter((function(e) {
                    var n, o;
                    return 0 === e.type && null === (null === (n = t.roles[e.id]) || void 0 === n || null === (o = n.tags) || void 0 === o ? void 0 : o.guild_connections) && !r.Z.hasAny(e.deny, u)
                })).map((function(e) {
                    return t.roles[e.id]
                })).filter((function(e) {
                    return null != e
                }))
            }
        },
        53645: (e, t, n) => {
            n.d(t, {
                SJ: () => T,
                O1: () => r,
                xp: () => d,
                n_: () => p,
                kQ: () => N,
                Ur: () => y,
                FI: () => A
            });
            var r, o = n(441143),
                a = n.n(o),
                i = n(496486),
                u = n.n(i),
                l = n(608575),
                c = n(131868),
                s = (n(418705), n(318277)),
                f = (n(896490), n(567403)),
                E = (n(682776), n(678005)),
                _ = n(2590),
                O = n(473708),
                T = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];
            ! function(e) {
                e[e.AND = 0] = "AND";
                e[e.OR = 1] = "OR"
            }(r || (r = {}));

            function d(e) {
                var t = l.parse(e, !0).query,
                    n = t.code,
                    r = t.state,
                    o = t.error,
                    i = t.error_description;
                a()(!Array.isArray(n), "Received multiple query param values for code");
                a()(!Array.isArray(r), "Received multiple query param values for state");
                a()(!Array.isArray(o), "Received multiple query param values for error");
                a()(!Array.isArray(i), "Received multiple query param values for error_description");
                return {
                    code: n,
                    state: r,
                    error: o,
                    errorDescription: i
                }
            }

            function p(e) {
                var t = e.connectionType,
                    n = e.connectionMetadataField,
                    r = e.operator,
                    o = e.operatorText,
                    a = e.value,
                    i = null,
                    u = Math.round(Number(a));
                switch (r) {
                    case E.iO.EQUAL:
                        i = O.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE;
                        t === _.ABu.PAYPAL && n === E.PC.PAYPAL_VERIFIED && (i = O.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                        break;
                    case E.iO.NOT_EQUAL:
                        i = O.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                        break;
                    case E.iO.LESS_THAN:
                        i = O.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST;
                        u = Math.max(0, u - 1);
                        break;
                    case E.iO.GREATER_THAN:
                        i = O.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST;
                        u = Math.max(0, u + 1);
                        break;
                    case void 0:
                    case null:
                        return null
                }
                null != o && (i = o);
                if (i instanceof c._H && null != r) switch (t) {
                    case _.ABu.REDDIT:
                        switch (n) {
                            case E.PC.CREATED_AT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.REDDIT_TOTAL_KARMA:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                            karma: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.REDDIT_GOLD:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                                    }
                                });
                                break;
                            case E.PC.REDDIT_MOD:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case _.ABu.STEAM:
                        switch (n) {
                            case E.PC.CREATED_AT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.STEAM_GAME_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.STEAM_ITEM_COUNT_TF2:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.STEAM_ITEM_COUNT_DOTA2:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case _.ABu.TWITTER:
                        switch (n) {
                            case E.PC.CREATED_AT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.TWITTER_VERIFIED:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                                    }
                                });
                                break;
                            case E.PC.TWITTER_FOLLOWERS_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.TWITTER_STATUSES_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case _.ABu.PAYPAL:
                        switch (n) {
                            case E.PC.CREATED_AT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.PAYPAL_VERIFIED:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case _.ABu.EBAY:
                        switch (n) {
                            case E.PC.CREATED_AT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                            days: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.EBAY_TOP_RATED_SELLER:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                                    }
                                });
                                break;
                            case E.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                            value: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case _.ABu.TIKTOK:
                        switch (n) {
                            case E.PC.TIKTOK_VERIFIED:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                                    }
                                });
                                break;
                            case E.PC.TIKTOK_FOLLOWER_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.TIKTOK_FOLLOWING_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            case E.PC.TIKTOK_LIKES_COUNT:
                                i = i.format({
                                    platformQuantityHook: function() {
                                        return O.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                            count: u
                                        })
                                    }
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    default:
                        return null
                }
                return i
            }

            function N(e) {
                return Object.values(e.roles).some((function(e) {
                    var t;
                    return null === (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections)
                }))
            }

            function y(e) {
                var t = e.guildMember,
                    n = e.guild,
                    r = e.channel,
                    o = e.onlyChannelConnectionRoles,
                    i = void 0 !== o && o;
                if (null == t) return null;
                null == n && null != r && (n = f.Z.getGuild(r.getGuildId()));
                if (null == n) return null;
                var l, c = t.roles.map((function(e) {
                        var t;
                        return null == n || null === (t = n.roles) || void 0 === t ? void 0 : t[e]
                    })).filter((function(e) {
                        var t;
                        return null === (null == e || null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections)
                    })).sort((function(e, t) {
                        a()(null != e && null != t, "roleA or roleB is null");
                        return t.position - e.position
                    })),
                    E = u().intersection(c, (0, s.Z)(r));
                if (E.length > 0) {
                    var _;
                    return null !== (_ = E[0]) && void 0 !== _ ? _ : null
                }
                return i ? null : null !== (l = c[0]) && void 0 !== l ? l : null
            }

            function A(e, t) {
                if (null == e || "" === e) return null;
                var n = new Date(e);
                return n instanceof Date && !isNaN(n.getTime()) ? n.toLocaleDateString(t, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                }) : null
            }
        },
        678005: (e, t, n) => {
            n.d(t, {
                iO: () => r,
                PC: () => o,
                Kt: () => i,
                xn: () => a
            });
            var r, o;
            ! function(e) {
                e[e.EQUAL = 1] = "EQUAL";
                e[e.NOT_EQUAL = 2] = "NOT_EQUAL";
                e[e.LESS_THAN = 3] = "LESS_THAN";
                e[e.GREATER_THAN = 4] = "GREATER_THAN"
            }(r || (r = {}));
            ! function(e) {
                e.CREATED_AT = "created_at";
                e.REDDIT_TOTAL_KARMA = "total_karma";
                e.REDDIT_GOLD = "gold";
                e.REDDIT_MOD = "mod";
                e.STEAM_GAME_COUNT = "game_count";
                e.STEAM_ITEM_COUNT_TF2 = "item_count_tf2";
                e.STEAM_ITEM_COUNT_DOTA2 = "item_count_dota2";
                e.TWITTER_VERIFIED = "verified";
                e.TWITTER_FOLLOWERS_COUNT = "followers_count";
                e.TWITTER_STATUSES_COUNT = "statuses_count";
                e.PAYPAL_VERIFIED = "verified";
                e.EBAY_POSITIVE_FEEDBACK_PERCENTAGE = "positive_feedback_percentage";
                e.EBAY_TOP_RATED_SELLER = "top_rated_seller";
                e.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT = "unique_negative_feedback_count";
                e.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT = "unique_positive_feedback_count";
                e.TIKTOK_VERIFIED = "verified";
                e.TIKTOK_FOLLOWER_COUNT = "follower_count";
                e.TIKTOK_FOLLOWING_COUNT = "following_count";
                e.TIKTOK_LIKES_COUNT = "likes_count"
            }(o || (o = {}));
            var a, i = "application";
            ! function(e) {
                e[e.INTEGER_LESS_THAN_EQUAL = 1] = "INTEGER_LESS_THAN_EQUAL";
                e[e.INTEGER_GREATER_THAN_EQUAL = 2] = "INTEGER_GREATER_THAN_EQUAL";
                e[e.INTEGER_EQUAL = 3] = "INTEGER_EQUAL";
                e[e.INTEGER_NOT_EQUAL = 4] = "INTEGER_NOT_EQUAL";
                e[e.DATETIME_LESS_THAN_EQUAL = 5] = "DATETIME_LESS_THAN_EQUAL";
                e[e.DATETIME_GREATER_THAN_EQUAL = 6] = "DATETIME_GREATER_THAN_EQUAL";
                e[e.BOOLEAN_EQUAL = 7] = "BOOLEAN_EQUAL";
                e[e.BOOLEAN_NOT_EQUAL = 8] = "BOOLEAN_NOT_EQUAL"
            }(a || (a = {}))
        },
        497842: (e, t, n) => {
            n.d(t, {
                Z: () => w,
                H: () => S
            });
            var r = n(785893),
                o = (n(667294), n(882723)),
                a = n(579344);

            function i(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var c = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0,
                                    o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function s(e) {
                (0, o.openModalLazy)(u((function() {
                    var t, o;
                    return c(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(14606), n.e(42643), n.e(39527), n.e(70462)]).then(n.bind(n, 170462))];
                            case 1:
                                t = a.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                l(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e
                                    }, t))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function E(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            f(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            f(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var O = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function T(e, t) {
                (0, o.openModalLazy)(E((function() {
                    var o, a;
                    return O(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(84441), n.e(14606), n.e(42643), n.e(39527), n.e(75309)]).then(n.bind(n, 775309))];
                            case 1:
                                o = i.sent(), a = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(a, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                _(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e,
                                        platformType: t
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function d(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            d(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            d(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var y = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function A(e) {
                (0, o.openModalLazy)(p((function() {
                    var t, o;
                    return y(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(1653), n.e(84441), n.e(14606), n.e(42643), n.e(39527), n.e(70245)]).then(n.bind(n, 670245))];
                            case 1:
                                t = a.sent(), o = t.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                N(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: e
                                    }, t))
                                }]
                        }
                    }))
                })))
            }
            var b = n(955121),
                C = n(120415),
                h = n(678005),
                I = n(2590);

            function v(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            v(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            v(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var L = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            };

            function S(e) {
                return g.apply(this, arguments)
            }

            function g() {
                g = m((function(e) {
                    var t, n, r, o, i, u, l, c, s, f, E, _ = arguments;
                    return L(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                t = _.length > 1 && void 0 !== _[1] ? _[1] : {}, n = t.location, r = t.twoWayLinkType, o = _.length > 2 ? _[2] : void 0;
                                i = 700;
                                u = 640;
                                l = Math.round(screen.width / 2 - i / 2);
                                c = screen.height > u ? Math.round(screen.height / 2 - u / 2) : 0;
                                s = null;
                                (0, C.nI)() || (s = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(I.Z5c.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(c, ",left=").concat(l, ",width=").concat(i, ",height=").concat(u)));
                                return null != (f = o) || e === h.Kt ? [3, 2] : [4, a.Z.authorize(e, {
                                    location: n,
                                    twoWayLinkType: r
                                })];
                            case 1:
                                E = O.sent().body;
                                f = E.url;
                                O.label = 2;
                            case 2:
                                if (null == f) return [2];
                                null != s ? s.location.href = f : window.open(f);
                                return [2, f]
                        }
                    }))
                }));
                return g.apply(this, arguments)
            }

            function w(e, t, a) {
                e === I.ABu.LEAGUE_OF_LEGENDS && (e = I.ABu.RIOT_GAMES);
                e !== I.ABu.CRUNCHYROLL ? e !== I.ABu.XBOX ? e !== I.ABu.PLAYSTATION && e !== I.ABu.PLAYSTATION_STAGING ? e !== I.ABu.DOMAIN ? null == a ? S(e, {
                    location: t
                }) : (0, b.q)({
                    shouldConfirm: !0,
                    href: a,
                    onConfirm: function() {
                        S(e, {
                            location: t
                        }, a)
                    }
                }) : (0, o.openModalLazy)(m((function() {
                    var e, o;
                    return L(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(39814)]).then(n.bind(n, 839814))];
                            case 1:
                                e = a.sent(), o = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(o, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))));
                                            r.forEach((function(t) {
                                                R(e, t, n[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        analyticsLocation: [null != t ? t : "unknown"]
                                    }, e))
                                }]
                        }
                    }))
                }))) : T([null != t ? t : "unknown"], e) : A([null != t ? t : "unknown"]) : s([null != t ? t : "unknown"])
            }
        },
        716371: (e, t, n) => {
            n.d(t, {
                n: () => s,
                J: () => f
            });
            var r = n(202351),
                o = n(21372),
                a = n(567403),
                i = n(746477),
                u = n(473903);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = c(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, i.Z, u.default, o.ZP], 4),
                    n = t[0],
                    r = t[1],
                    l = t[2],
                    s = t[3];
                if (null == e) return !1;
                var f = n.getGuild(e),
                    E = r.getCheck(e).notClaimed,
                    _ = l.getCurrentUser(),
                    O = !1;
                if (null != _) {
                    var T, d;
                    O = null !== (d = null === (T = s.getMember(e, _.id)) || void 0 === T ? void 0 : T.isPending) && void 0 !== d && d
                }
                var p = O || E;
                return p && !!(null == f ? void 0 : f.hasVerificationGate())
            }

            function f(e) {
                return (0, r.e7)([a.Z, i.Z, u.default, o.ZP], (function() {
                    return null != e && s(e, [a.Z, i.Z, u.default, o.ZP])
                }), [e])
            }
        },
        746477: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(744564),
                a = n(661123),
                i = n(21372),
                u = n(567403),
                l = n(473903),
                c = n(2590),
                s = n(589677);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function O(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var y = {
                    notClaimed: !1,
                    notEmailVerified: !1,
                    notPhoneVerified: !1,
                    newAccount: !1,
                    newMember: !1,
                    canChat: !0
                },
                A = new Set,
                b = {};

            function C(e) {
                h(e);
                A.add(e);
                var t = u.Z.getGuild(e),
                    n = l.default.getCurrentUser();
                if (null != t && t.verificationLevel !== c.sFg.NONE && null != n && !t.isOwner(n) && !n.isPhoneVerified()) {
                    var r = i.ZP.getMember(t.id, n.id);
                    if (null != r) {
                        var f;
                        if ((0, a.yE)(null !== (f = r.flags) && void 0 !== f ? f : 0, s.q.BYPASSES_VERIFICATION)) return;
                        var E = new Set,
                            _ = !0,
                            O = !1,
                            T = void 0;
                        try {
                            for (var p, N = r.roles[Symbol.iterator](); !(_ = (p = N.next()).done); _ = !0) {
                                var y = p.value,
                                    C = t.getRole(y);
                                null == C || C.managed || E.add(y)
                            }
                        } catch (e) {
                            O = !0;
                            T = e
                        } finally {
                            try {
                                _ || null == N.return || N.return()
                            } finally {
                                if (O) throw T
                            }
                        }
                        var I = new Date("2022-12-02 00:00:00"),
                            v = null == r.joinedAt || new Date(r.joinedAt) < I;
                        if (!(t.hasFeature(c.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !v) && E.size > 0) return
                    }
                    var m = +n.createdAt + 6e4 * c.YeM.ACCOUNT_AGE - Date.now(),
                        R = +t.joinedAt + 6e4 * c.YeM.MEMBER_AGE - Date.now(),
                        L = t.verificationLevel >= c.sFg.LOW && !n.isClaimed(),
                        S = !1,
                        g = !1,
                        w = !1,
                        P = !1;
                    if (!n.isPhoneVerified() && !n.isStaff()) {
                        S = t.verificationLevel >= c.sFg.LOW && !n.verified;
                        g = t.verificationLevel >= c.sFg.VERY_HIGH;
                        w = t.verificationLevel >= c.sFg.MEDIUM && m > 0;
                        P = t.verificationLevel >= c.sFg.HIGH && R > 0
                    }
                    var U, D = [];
                    P && D.push(R);
                    w && D.push(m);
                    if (D.length > 0) {
                        var k;
                        U = setTimeout((function() {
                            return o.Z.dispatch({
                                type: "GUILD_VERIFICATION_CHECK",
                                guildId: e
                            })
                        }), (k = Math).max.apply(k, d(D)))
                    }
                    b[e] = {
                        notClaimed: L,
                        notEmailVerified: S,
                        notPhoneVerified: g,
                        newAccount: w,
                        newMember: P,
                        canChat: !(L || S || g || w || P),
                        accountDeadline: new Date(Date.now() + m),
                        memberDeadline: new Date(Date.now() + R),
                        timeoutRef: U
                    }
                }
            }

            function h(e) {
                var t = b[e];
                null != t && clearTimeout(t.timeoutRef);
                delete b[e]
            }

            function I(e) {
                A.delete(e.guild.id);
                C(e.guild.id)
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && T(e, t)
                }(n, e);
                var t = N(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, l.default)
                };
                r.getCheck = function(e) {
                    A.has(e) || C(e);
                    var t;
                    return null !== (t = b[e]) && void 0 !== t ? t : y
                };
                r.canChatInGuild = function(e) {
                    return this.getCheck(e).canChat
                };
                r.__getLocalVars = function() {
                    return {
                        DEFAULT_CHECK: y,
                        guildIdsComputed: A,
                        checks: b
                    }
                };
                return n
            }(r.ZP.Store);
            v.displayName = "GuildVerificationStore";
            const m = new v(o.Z, {
                CONNECTION_OPEN: function() {
                    A.clear();
                    for (var e in b) h(e)
                },
                CONNECTION_CLOSED: function() {
                    Object.keys(b).forEach(h)
                },
                CURRENT_USER_UPDATE: function() {
                    A.clear()
                },
                GUILD_CREATE: I,
                GUILD_UPDATE: I,
                GUILD_DELETE: function(e) {
                    h(e.guild.id)
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t, n = e.guildId;
                    if (e.user.id !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    A.delete(n)
                },
                GUILD_VERIFICATION_CHECK: function(e) {
                    C(e.guildId)
                }
            })
        }
    }
]);
//# sourceMappingURL=27283bb25c0053733a98.js.map