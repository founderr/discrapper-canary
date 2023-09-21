"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [61953], {
        997244: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(281110),
                o = t(744564),
                i = t(610773),
                u = t(840922),
                a = t(473903),
                l = t(652591),
                c = t(105783),
                s = t(560923),
                f = t(116404),
                E = t(2590),
                d = t(473708);
            const _ = {
                call: function(e, n, t, o, i) {
                    var _ = this,
                        h = function(t) {
                            f.default.selectVoiceChannel(e, n);
                            t && _.ring(e);
                            null == i || i(e)
                        };
                    if (null != o) {
                        if (u.Z.isBlocked(o)) return;
                        var p = a.default.getUser(o);
                        r.ZP.get({
                            url: E.ANM.CALL(e),
                            oldFormErrors: !0
                        }).then((function(e) {
                            h(t && e.body.ringable)
                        }), (function() {
                            l.default.track(E.rMx.OPEN_POPOUT, {
                                type: "Not Friend",
                                source: "Call"
                            });
                            c.Z.show({
                                title: d.Z.Messages.START_CALL,
                                body: d.Z.Messages.CALL_INVITE_NOT_FRIENDS.format({
                                    username: null != p ? p.username : ""
                                }),
                                confirmText: d.Z.Messages.ADD_FRIEND_BUTTON,
                                cancelText: d.Z.Messages.OKAY,
                                onConfirm: function() {
                                    s.Z.addRelationship({
                                        userId: o,
                                        context: {
                                            location: "Call"
                                        }
                                    })
                                }
                            })
                        }))
                    } else h(t)
                },
                ring: function(e, n) {
                    var t = i.Z.getCall(e);
                    null == t || null == t.messageId || i.Z.isCallUnavailable(e) ? o.Z.dispatch({
                        type: "CALL_ENQUEUE_RING",
                        channelId: e,
                        recipients: n
                    }) : r.ZP.post({
                        url: E.ANM.CALL_RING(e),
                        body: {
                            recipients: n
                        },
                        oldFormErrors: !0
                    })
                },
                stopRinging: function(e, n) {
                    return r.ZP.post({
                        url: E.ANM.CALL_STOP_RINGING(e),
                        body: {
                            recipients: n
                        },
                        oldFormErrors: !0
                    })
                }
            }
        },
        761953: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(281110),
                o = t(575945),
                i = t(744564),
                u = t(10390),
                a = t(339432),
                l = t(3930),
                c = t(784426),
                s = t(382060),
                f = t(61209),
                E = t(534681),
                d = t(997244),
                _ = t(116404),
                h = t(2590),
                p = t(473708);

            function N(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function A(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            A(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            A(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function v(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return N(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var R = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            const b = {
                openPrivateChannel: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    return y((function() {
                        var u, a, c, s, f, E, _, p, N;
                        return R(this, (function(A) {
                            switch (A.label) {
                                case 0:
                                    u = this._getRecipients(e);
                                    a = function(e) {
                                        n && d.Z.call(e.id, t, !0, e.isDM() ? e.getRecipientId() : null)
                                    };
                                    if (1 === u.length) {
                                        c = v(u, 1), s = c[0];
                                        if (null != (f = this._openCachedDMChannel(s, i))) {
                                            a(f);
                                            return [2, Promise.resolve(f.id)]
                                        }
                                    }
                                    A.label = 1;
                                case 1:
                                    A.trys.push([1, 3, , 4]);
                                    return [4, r.ZP.post({
                                        url: h.ANM.USER_CHANNELS,
                                        body: {
                                            recipients: u
                                        },
                                        context: {
                                            location: o
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 2:
                                    E = A.sent();
                                    null == i || i();
                                    _ = this._openPrivateChannel(E.body);
                                    a(_);
                                    return [2, E.body.id];
                                case 3:
                                    (null == (p = A.sent()) || null === (N = p.body) || void 0 === N ? void 0 : N.code) === h.evJ.QUARANTINED && (0, l.default)();
                                    throw p;
                                case 4:
                                    return [2]
                            }
                        }))
                    })).apply(this)
                },
                createBroadcastPrivateChannel: function() {
                    return y((function() {
                        var e, n, t, o;
                        return R(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, , 3]);
                                    return [4, r.ZP.post({
                                        url: h.ANM.BROADCAST_PRIVATE_CHANNEL
                                    })];
                                case 1:
                                    e = i.sent();
                                    n = (0, s.q_)(e.body);
                                    d.Z.call(n.id, !1, !1, null);
                                    return [2, e.body.id];
                                case 2:
                                    (null == (t = i.sent()) || null === (o = t.body) || void 0 === o ? void 0 : o.code) === h.evJ.QUARANTINED && (0, l.default)();
                                    throw t;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                _openCachedDMChannel: function(e, n) {
                    var t = f.Z.getDMFromUserId(e),
                        r = null != t ? f.Z.getChannel(t) : null;
                    if (null != r) {
                        null == n || n();
                        null != (0, a.PP)() ? (0, c.uL)(h.Z5c.CHANNEL(h.ME, r.id), {
                            navigationReplace: !0
                        }) : _.default.selectPrivateChannel(r.id);
                        return r
                    }
                    return null
                },
                ensurePrivateChannel: function(e) {
                    return y((function() {
                        var n, t, o;
                        return R(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    n = this._getRecipients(e);
                                    return [4, r.ZP.post({
                                        url: h.ANM.USER_CHANNELS,
                                        body: {
                                            recipients: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    t = u.sent();
                                    o = (0, s.q_)(t.body);
                                    i.Z.dispatch({
                                        type: "CHANNEL_CREATE",
                                        channel: o
                                    });
                                    return [2, o.id]
                            }
                        }))
                    })).apply(this)
                },
                getOrEnsurePrivateChannel: function(e) {
                    return y((function() {
                        var n;
                        return R(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return null != (n = f.Z.getDMFromUserId(e)) ? [2, n] : [4, this.ensurePrivateChannel(e)];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    })).apply(this)
                },
                getDMChannel: function(e) {
                    return y((function() {
                        var n, t;
                        return R(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, r.ZP.get(h.ANM.DM_CHANNEL(e))];
                                case 1:
                                    n = o.sent();
                                    t = (0, s.q_)(n.body);
                                    i.Z.dispatch({
                                        type: "CHANNEL_CREATE",
                                        channel: t
                                    });
                                    return [2, t.id]
                            }
                        }))
                    }))()
                },
                _getRecipients: function(e) {
                    return null != e ? Array.isArray(e) ? e : [e] : []
                },
                _openPrivateChannel: function(e) {
                    var n = (0, s.q_)(e);
                    i.Z.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: n
                    });
                    null != (0, a.PP)() ? (0, c.uL)(h.Z5c.CHANNEL(h.ME, n.id), {
                        navigationReplace: !0
                    }) : _.default.selectPrivateChannel(n.id);
                    return n
                },
                closePrivateChannel: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    i.Z.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: {
                            id: e,
                            guild_id: null,
                            parent_id: null
                        },
                        silent: t
                    });
                    n && !__OVERLAY__ && (0,
                        c.uL)(h.Z5c.FRIENDS);
                    return r.ZP.delete({
                        url: h.ANM.CHANNEL(e),
                        query: {
                            silent: t
                        },
                        oldFormErrors: !0
                    }).then((function() {
                        o.uv.announce(p.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
                    })).catch((function() {
                        o.uv.announce(p.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
                    }))
                },
                updatePermissionOverwrite: function(e, n) {
                    return r.ZP.put({
                        url: h.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, n.id),
                        body: n,
                        oldFormErrors: !0
                    })
                },
                clearPermissionOverwrite: function(e, n) {
                    return r.ZP.delete({
                        url: h.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, n),
                        oldFormErrors: !0
                    })
                },
                addRecipient: function(e, n, t, i) {
                    var u = this;
                    return r.ZP.put({
                        url: h.ANM.CHANNEL_RECIPIENT(e, n),
                        context: {
                            location: t
                        },
                        oldFormErrors: !0
                    }).then((function(n) {
                        o.uv.announce(p.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM);
                        null == i || i();
                        return 201 === n.status ? u._openPrivateChannel(n.body).id : e
                    })).catch((function() {
                        o.uv.announce(p.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED);
                        return e
                    }))
                },
                addRecipients: function(e, n, t, r) {
                    var o = this;
                    return this.addRecipient(e, n[0], t, r).then((function(e) {
                        return Promise.all(n.slice(1).map((function(n) {
                            return o.addRecipient(e, n, t)
                        }))).then((function() {
                            return e
                        }))
                    }))
                },
                removeRecipient: function(e, n) {
                    return r.ZP.delete({
                        url: h.ANM.CHANNEL_RECIPIENT(e, n),
                        oldFormErrors: !0
                    })
                },
                setDMOwner: function(e, n) {
                    return r.ZP.patch({
                        url: h.ANM.CHANNEL(e),
                        body: {
                            owner: n
                        },
                        oldFormErrors: !0
                    })
                },
                setName: function(e, n) {
                    return y((function() {
                        var t, o, i;
                        return R(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    t = f.Z.getChannel(e);
                                    return [4, r.ZP.patch({
                                        url: h.ANM.CHANNEL(e),
                                        body: {
                                            name: n
                                        },
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    o = a.sent();
                                    null == (i = null == t ? void 0 : t.getGuildId()) || (null == t ? void 0 : t.isThread()) || u.Z.checkGuildTemplateDirty(i);
                                    return [2, o]
                            }
                        }))
                    }))()
                },
                setIcon: function(e, n) {
                    var t = f.Z.getChannel(e);
                    r.ZP.patch({
                        url: h.ANM.CHANNEL(e),
                        body: {
                            icon: n
                        },
                        oldFormErrors: !0
                    }).then((function() {
                        var e = null == t ? void 0 : t.getGuildId();
                        null == e || (null == t ? void 0 : t.isThread()) || u.Z.checkGuildTemplateDirty(e)
                    }))
                },
                convertToGuild: function(e) {
                    return r.ZP.post({
                        url: h.ANM.CHANNEL_CONVERT(e),
                        oldFormErrors: !0
                    })
                },
                preload: function(e, n, t) {
                    i.Z.dispatch({
                        type: "CHANNEL_PRELOAD",
                        guildId: e === h.ME ? null : e,
                        channelId: n,
                        isHighlight: t,
                        context: h.e3s
                    })
                },
                fetchChannelStoreListing: function(e, n) {
                    var t = null != n ? h.ANM.CHANNEL_STORE_LISTING_SKU(e, n) : h.ANM.CHANNEL_STORE_LISTING(e);
                    return (0, E.Kb)(t).then((function(n) {
                        i.Z.dispatch({
                            type: "STORE_LISTING_FETCH_SUCCESS",
                            channelId: e,
                            storeListing: n.body
                        })
                    }))
                },
                createTextChannel: function(e, n, t, o) {
                    return y((function() {
                        var i, a;
                        return R(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    i = {
                                        type: h.d4z.GUILD_TEXT,
                                        name: n,
                                        permission_overwrites: []
                                    };
                                    null != t && (i.parent_id = t);
                                    null != o && (i.topic = o);
                                    return [4, r.ZP.post({
                                        url: h.ANM.GUILD_CHANNELS(e),
                                        body: i,
                                        oldFormErrors: !0
                                    })];
                                case 1:
                                    a = l.sent();
                                    u.Z.checkGuildTemplateDirty(e);
                                    return [2, a]
                            }
                        }))
                    }))()
                }
            }
        },
        560923: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(281110),
                o = t(575945),
                i = t(744564),
                u = t(852626);
            var a = t(3930),
                l = t(625183),
                c = t(473903),
                s = t(908478),
                f = t(749565),
                E = t(105783),
                d = t(971402),
                _ = t(2590),
                h = t(473708);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }

            function y(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e) {
                (0, d.Zy)();
                E.Z.show(e)
            }

            function R(e, n) {
                var t = e.status,
                    r = e.body,
                    o = r && r.code;
                switch (t) {
                    case 429:
                        v({
                            title: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
                            body: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
                            confirmText: h.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
                        });
                        break;
                    case 403:
                        if (o === _.evJ.EMAIL_VERIFICATION_REQUIRED) {
                            v({
                                title: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
                                body: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
                                confirmText: h.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
                                onConfirm: function() {
                                    u.j()
                                }
                            });
                            break
                        }
                    default:
                        if (o === _.evJ.USER_QUARANTINED) ! function() {
                            (0, d.Zy)();
                            (0, a.default)()
                        }();
                        else {
                            if ((0, l.b)(t, o)) break;
                            var i = null != n ? (0, s.N)(o || 0, n) : h.Z.Messages.POMELO_ADD_FRIEND_ERROR;
                            v({
                                title: h.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
                                body: i,
                                confirmText: h.Z.Messages.OKAY
                            })
                        }
                }
                throw e
            }
            var b = {
                sendRequest: function(e, n, t) {
                    var o = y(e.split("#"), 2),
                        i = o[0],
                        u = o[1];
                    return r.ZP.post({
                        url: _.ANM.USER_RELATIONSHIPS(),
                        body: A({
                            username: i,
                            discriminator: parseInt(u)
                        }, t),
                        context: n,
                        oldFormErrors: !0
                    }).catch((function(n) {
                        R(n, e)
                    }))
                },
                addRelationship: function(e, n) {
                    var t = e.userId,
                        o = e.context,
                        i = e.type,
                        u = e.friendToken,
                        a = e.fromFriendSuggestion,
                        l = e.captchaPayload,
                        s = c.default.getUser(t);
                    return r.ZP.put({
                        url: _.ANM.USER_RELATIONSHIP(t),
                        body: A({
                            type: i,
                            friend_token: u,
                            from_friend_suggestion: a
                        }, l),
                        context: o,
                        oldFormErrors: !0
                    }).then((function() {
                        null == n || n()
                    })).catch((function(e) {
                        R(e, f.ZP.getUserTag(s))
                    }))
                },
                acceptFriendRequest: function(e) {
                    return b.addRelationship(e, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST)
                    }))
                },
                cancelFriendRequest: function(e, n) {
                    return b.removeRelationship(e, n, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST)
                    }))
                },
                removeFriend: function(e, n) {
                    b.removeRelationship(e, n, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED)
                    }))
                },
                unblockUser: function(e, n) {
                    b.removeRelationship(e, n, (function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED)
                    }))
                },
                removeRelationship: function(e, n, t) {
                    return r.ZP.delete({
                        url: _.ANM.USER_RELATIONSHIP(e),
                        context: n,
                        oldFormErrors: !0
                    }).then((function() {
                        null == t || t()
                    })).catch((function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                    }))
                },
                updateRelationship: function(e, n) {
                    return r.ZP.patch({
                        url: _.ANM.USER_RELATIONSHIP(e),
                        body: {
                            nickname: n
                        }
                    })
                },
                fetchRelationships: function() {
                    r.ZP.get({
                        url: _.ANM.USER_RELATIONSHIPS(),
                        oldFormErrors: !0
                    }).then((function(e) {
                        return i.Z.dispatch({
                            type: "LOAD_RELATIONSHIPS_SUCCESS",
                            relationships: e.body
                        })
                    }), (function() {
                        return i.Z.dispatch({
                            type: "LOAD_RELATIONSHIPS_FAILURE"
                        })
                    }))
                },
                confirmClearPendingRelationships: function(e) {
                    ! function(e) {
                        (0, t(577657).Z)(e)
                    }(e)
                },
                clearPendingRelationships: function() {
                    return r.ZP.delete({
                        url: _.ANM.USER_RELATIONSHIPS(),
                        query: {
                            relationship_type: _.OGo.PENDING_INCOMING
                        }
                    }).then((function() {
                        i.Z.dispatch({
                            type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
                        })
                    })).catch((function() {
                        o.uv.announce(h.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL)
                    }))
                }
            };
            const I = b
        },
        852626: (e, n, t) => {
            t.d(n, {
                i: () => E,
                j: () => d
            });
            var r = t(785893),
                o = (t(667294), t(264817)),
                i = t(561210),
                u = t(520453);

            function a(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function l(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function u(e) {
                            a(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            a(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        c(e, n, t[n])
                    }))
                }
                return e
            }
            var f = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function E(e) {
                (0, o.ZD)(l((function() {
                    var e, n;
                    return f(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(92224), t.e(21859), t.e(62593)]).then(t.bind(t, 321859))];
                            case 1:
                                e = o.sent(), n = e.default;
                                return [2, function(e) {
                                    return (0, r.jsx)(n, s({}, e))
                                }]
                        }
                    }))
                })), {
                    modalKey: i.$$,
                    onCloseRequest: u.dG,
                    onCloseCallback: e
                })
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = arguments.length > 1 ? arguments[1] : void 0;
                (0, o.ZD)(l((function() {
                    var n, o;
                    return f(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(84441), t.e(88110), t.e(16273)]).then(t.bind(t, 854104))];
                            case 1:
                                n = i.sent(), o = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(o, s({
                                        claimRequired: e
                                    }, n))
                                }]
                        }
                    }))
                })), {
                    onCloseRequest: e ? u.dG : null,
                    onCloseCallback: n
                })
            }
        },
        577657: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(264817));

            function i(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function u(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(n, t);

                        function a(e) {
                            i(u, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            i(u, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var c = function(e, n) {
                var t, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function s(e) {
                (0, o.ZD)(u((function() {
                    var n, o;
                    return c(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, t.e(72591).then(t.bind(t, 672591))];
                            case 1:
                                n = i.sent(), o = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(o, l(function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {},
                                                r = Object.keys(t);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                                            }))));
                                            r.forEach((function(n) {
                                                a(e, n, t[n])
                                            }))
                                        }
                                        return e
                                    }({}, n), {
                                        incomingRequestCount: e
                                    }))
                                }]
                        }
                    }))
                })))
            }
        },
        625183: (e, n, t) => {
            t.d(n, {
                b: () => o
            });
            var r = t(2590);

            function o(e, n) {
                return e >= 400 && e < 500 && null != n && n >= r.evJ.USER_LIMITED_ACCESS_DEFAULT && n <= r.evJ.USER_LIMITED_ACCESS_MAX
            }
        },
        908478: (e, n, t) => {
            t.d(n, {
                Z: () => E,
                N: () => d
            });
            var r = t(652591),
                o = t(322500),
                i = t(2590),
                u = t(473708);

            function a(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function l(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var c = /^\d+$/,
                s = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                f = /^[a-zA-Z0-9_\\.]+$/;

            function E(e) {
                if (f.test(e)) return null;
                if (e.includes("#") && s.test(e)) return null;
                ! function(e) {
                    var n = l(e.split("#"), 2),
                        t = n[0],
                        u = n[1];
                    r.default.track(i.rMx.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != u ? u : "").length,
                        username_len: t.length,
                        is_email_like: o.Z.isEmail(e),
                        is_invite_like: o.Z.isInvite(e),
                        is_num_only: c.test(e)
                    })
                }(e);
                return u.Z.Messages.POMELO_ADD_FRIEND_ERROR
            }

            function d(e, n) {
                switch (e) {
                    case i.evJ.RELATIONSHIP_INCOMING_DISABLED:
                        return u.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: n
                        });
                    case i.evJ.TOO_MANY_FRIENDS:
                        return u.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case i.evJ.RELATIONSHIP_ALREADY_FRIENDS:
                        return u.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case i.evJ.USER_QUARANTINED:
                    case i.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return u.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case i.evJ.TOO_MANY_BLOCKED_USERS:
                        return u.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case i.evJ.RELATIONSHIP_INCOMING_BLOCKED:
                    case i.evJ.RELATIONSHIP_INVALID_SELF:
                    case i.evJ.RELATIONSHIP_INVALUD_USER_BOT:
                    case i.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return u.Z.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
        }
    }
]);