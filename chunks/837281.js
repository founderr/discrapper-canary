!(function (t, n) {
    e.exports = n();
})(0, function () {
    function e(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n),
            e
        );
    }
    function t(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function n(n) {
        for (var r = 1; r < arguments.length; r++) {
            var i = null != arguments[r] ? arguments[r] : {};
            r % 2
                ? t(Object(i), !0).forEach(function (t) {
                      e(n, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                  : t(Object(i)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                    });
        }
        return n;
    }
    function r(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
            })(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
    }
    function i(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) {
                    var n = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (a = e);
                    } finally {
                        try {
                            r || null == s.return || s.return();
                        } finally {
                            if (i) throw a;
                        }
                    }
                    return n;
                }
            })(e, t) ||
            (function () {
                throw TypeError('Invalid attempt to destructure non-iterable instance');
            })()
        );
    }
    function a(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            })(e) ||
            (function (e) {
                if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e);
            })(e) ||
            (function () {
                throw TypeError('Invalid attempt to spread non-iterable instance');
            })()
        );
    }
    function o(e) {
        var t,
            n = 'algoliasearch-client-js-'.concat(e.key),
            r = function () {
                return void 0 === t && (t = e.localStorage || window.localStorage), t;
            },
            a = function () {
                return JSON.parse(r().getItem(n) || '{}');
            },
            o = function (e) {
                r().setItem(n, JSON.stringify(e));
            },
            s = function () {
                var t = e.timeToLive ? 1000 * e.timeToLive : null,
                    n = Object.fromEntries(
                        Object.entries(a()).filter(function (e) {
                            return void 0 !== i(e, 2)[1].timestamp;
                        })
                    );
                o(n),
                    t &&
                        o(
                            Object.fromEntries(
                                Object.entries(n).filter(function (e) {
                                    var n = i(e, 2)[1],
                                        r = new Date().getTime();
                                    return !(n.timestamp + t < r);
                                })
                            )
                        );
            };
        return {
            get: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {
                              miss: function () {
                                  return Promise.resolve();
                              }
                          };
                return Promise.resolve()
                    .then(function () {
                        s();
                        var t = JSON.stringify(e);
                        return a()[t];
                    })
                    .then(function (e) {
                        return Promise.all([e ? e.value : t(), void 0 !== e]);
                    })
                    .then(function (e) {
                        var t = i(e, 2),
                            r = t[0];
                        return Promise.all([r, t[1] || n.miss(r)]);
                    })
                    .then(function (e) {
                        return i(e, 1)[0];
                    });
            },
            set: function (e, t) {
                return Promise.resolve().then(function () {
                    var i = a();
                    return (
                        (i[JSON.stringify(e)] = {
                            timestamp: new Date().getTime(),
                            value: t
                        }),
                        r().setItem(n, JSON.stringify(i)),
                        t
                    );
                });
            },
            delete: function (e) {
                return Promise.resolve().then(function () {
                    var t = a();
                    delete t[JSON.stringify(e)], r().setItem(n, JSON.stringify(t));
                });
            },
            clear: function () {
                return Promise.resolve().then(function () {
                    r().removeItem(n);
                });
            }
        };
    }
    function s(e) {
        var t = a(e.caches),
            n = t.shift();
        return void 0 === n
            ? {
                  get: function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {
                                    miss: function () {
                                        return Promise.resolve();
                                    }
                                };
                      return t()
                          .then(function (e) {
                              return Promise.all([e, n.miss(e)]);
                          })
                          .then(function (e) {
                              return i(e, 1)[0];
                          });
                  },
                  set: function (e, t) {
                      return Promise.resolve(t);
                  },
                  delete: function (e) {
                      return Promise.resolve();
                  },
                  clear: function () {
                      return Promise.resolve();
                  }
              }
            : {
                  get: function (e, r) {
                      var i =
                          arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {
                                    miss: function () {
                                        return Promise.resolve();
                                    }
                                };
                      return n.get(e, r, i).catch(function () {
                          return s({ caches: t }).get(e, r, i);
                      });
                  },
                  set: function (e, r) {
                      return n.set(e, r).catch(function () {
                          return s({ caches: t }).set(e, r);
                      });
                  },
                  delete: function (e) {
                      return n.delete(e).catch(function () {
                          return s({ caches: t }).delete(e);
                      });
                  },
                  clear: function () {
                      return n.clear().catch(function () {
                          return s({ caches: t }).clear();
                      });
                  }
              };
    }
    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: !0 },
            t = {};
        return {
            get: function (n, r) {
                var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {
                                  miss: function () {
                                      return Promise.resolve();
                                  }
                              },
                    a = JSON.stringify(n);
                if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
                var o = r(),
                    s =
                        (i && i.miss) ||
                        function () {
                            return Promise.resolve();
                        };
                return o
                    .then(function (e) {
                        return s(e);
                    })
                    .then(function () {
                        return o;
                    });
            },
            set: function (n, r) {
                return (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r), Promise.resolve(r);
            },
            delete: function (e) {
                return delete t[JSON.stringify(e)], Promise.resolve();
            },
            clear: function () {
                return (t = {}), Promise.resolve();
            }
        };
    }
    function u(e, t, n) {
        var r = {
            'x-algolia-api-key': n,
            'x-algolia-application-id': t
        };
        return {
            headers: function () {
                return e === h.WithinHeaders ? r : {};
            },
            queryParameters: function () {
                return e === h.WithinQueryParameters ? r : {};
            }
        };
    }
    function c(e) {
        var t = 0;
        return e(function n() {
            return (
                t++,
                new Promise(function (r) {
                    setTimeout(
                        function () {
                            r(e(n));
                        },
                        Math.min(100 * t, 1000)
                    );
                })
            );
        });
    }
    function d(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function (e, t) {
                      return Promise.resolve();
                  };
        return Object.assign(e, {
            wait: function (n) {
                return d(
                    e
                        .then(function (e) {
                            return Promise.all([t(e, n), e]);
                        })
                        .then(function (e) {
                            return e[1];
                        })
                );
            }
        });
    }
    function _(e) {
        for (var t = e.length - 1; t > 0; t--) {
            var n = Math.floor(Math.random() * (t + 1)),
                r = e[t];
            (e[t] = e[n]), (e[n] = r);
        }
        return e;
    }
    function E(e, t) {
        return (
            t &&
                Object.keys(t).forEach(function (n) {
                    e[n] = t[n](e);
                }),
            e
        );
    }
    function f(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var i = 0;
        return e.replace(/%s/g, function () {
            return encodeURIComponent(n[i++]);
        });
    }
    var h = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function p(e, t) {
        var n = e || {},
            r = n.data || {};
        return (
            Object.keys(n).forEach(function (e) {
                -1 === ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(e) && (r[e] = n[e]);
            }),
            {
                data: Object.entries(r).length > 0 ? r : void 0,
                timeout: n.timeout || t,
                headers: n.headers || {},
                queryParameters: n.queryParameters || {},
                cacheable: n.cacheable
            }
        );
    }
    var m = {
            Read: 1,
            Write: 2,
            Any: 3
        },
        I = 1,
        T = 2,
        g = 3;
    function S(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
        return n(
            n({}, e),
            {},
            {
                status: t,
                lastUpdate: Date.now()
            }
        );
    }
    function A(e) {
        return 'string' == typeof e
            ? {
                  protocol: 'https',
                  url: e,
                  accept: m.Any
              }
            : {
                  protocol: e.protocol || 'https',
                  url: e.url,
                  accept: e.accept || m.Any
              };
    }
    var v = 'DELETE',
        N = 'GET',
        O = 'POST',
        R = 'PUT';
    function C(e, t) {
        return Promise.all(
            t.map(function (t) {
                return e.get(t, function () {
                    return Promise.resolve(S(t));
                });
            })
        ).then(function (e) {
            var n = e.filter(function (e) {
                    return (function (e) {
                        return e.status === I || Date.now() - e.lastUpdate > 120000;
                    })(e);
                }),
                r = e.filter(function (e) {
                    return (function (e) {
                        return e.status === g && Date.now() - e.lastUpdate <= 120000;
                    })(e);
                }),
                i = [].concat(a(n), a(r));
            return {
                getTimeout: function (e, t) {
                    return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t;
                },
                statelessHosts:
                    i.length > 0
                        ? i.map(function (e) {
                              return A(e);
                          })
                        : t
            };
        });
    }
    function y(e, t, r, i) {
        var o = [],
            s = (function (e, t) {
                if (e.method !== N && (void 0 !== e.data || void 0 !== t.data)) {
                    var r = Array.isArray(e.data) ? e.data : n(n({}, e.data), t.data);
                    return JSON.stringify(r);
                }
            })(r, i),
            l = (function (e, t) {
                var r = n(n({}, e.headers), t.headers),
                    i = {};
                return (
                    Object.keys(r).forEach(function (e) {
                        var t = r[e];
                        i[e.toLowerCase()] = t;
                    }),
                    i
                );
            })(e, i),
            u = r.method,
            c = r.method !== N ? {} : n(n({}, r.data), i.data),
            d = n(n(n({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), c), i.queryParameters),
            _ = 0,
            E = function t(n, a) {
                var c = n.pop();
                if (void 0 === c)
                    throw {
                        name: 'RetryError',
                        message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
                        transporterStackTrace: P(o)
                    };
                var E = {
                        data: s,
                        headers: l,
                        method: u,
                        url: D(c, r.path, d),
                        connectTimeout: a(_, e.timeouts.connect),
                        responseTimeout: a(_, i.timeout)
                    },
                    f = function (e) {
                        var t = {
                            request: E,
                            response: e,
                            host: c,
                            triesLeft: n.length
                        };
                        return o.push(t), t;
                    },
                    h = {
                        onSuccess: function (e) {
                            return (function (e) {
                                try {
                                    return JSON.parse(e.content);
                                } catch (t) {
                                    throw (function (e, t) {
                                        return {
                                            name: 'DeserializationError',
                                            message: e,
                                            response: t
                                        };
                                    })(t.message, e);
                                }
                            })(e);
                        },
                        onRetry: function (r) {
                            var i = f(r);
                            return (
                                r.isTimedOut && _++,
                                Promise.all([e.logger.info('Retryable failure', U(i)), e.hostsCache.set(c, S(c, r.isTimedOut ? g : T))]).then(function () {
                                    return t(n, a);
                                })
                            );
                        },
                        onFail: function (e) {
                            throw (
                                (f(e),
                                (function (e, t) {
                                    var n = e.content,
                                        r = e.status,
                                        i = n;
                                    try {
                                        i = JSON.parse(n).message;
                                    } catch (e) {}
                                    return (function (e, t, n) {
                                        return {
                                            name: 'ApiError',
                                            message: e,
                                            status: t,
                                            transporterStackTrace: n
                                        };
                                    })(i, r, t);
                                })(e, P(o)))
                            );
                        }
                    };
                return e.requester.send(E).then(function (e) {
                    return (function (e, t) {
                        return !(function (e) {
                            var t = e.status;
                            return (
                                e.isTimedOut ||
                                (function (e) {
                                    var t = e.isTimedOut,
                                        n = e.status;
                                    return !t && 0 == ~~n;
                                })(e) ||
                                (2 != ~~(t / 100) && 4 != ~~(t / 100))
                            );
                        })(e)
                            ? 2 == ~~(e.status / 100)
                                ? t.onSuccess(e)
                                : t.onFail(e)
                            : t.onRetry(e);
                    })(e, h);
                });
            };
        return C(e.hostsCache, t).then(function (e) {
            return E(a(e.statelessHosts).reverse(), e.getTimeout);
        });
    }
    function L(e) {
        var t = e.hostsCache,
            n = e.logger,
            r = e.requester,
            a = e.requestsCache,
            o = e.responsesCache,
            s = e.timeouts,
            l = e.userAgent,
            u = e.hosts,
            c = e.queryParameters,
            d = {
                hostsCache: t,
                logger: n,
                requester: r,
                requestsCache: a,
                responsesCache: o,
                timeouts: s,
                userAgent: l,
                headers: e.headers,
                queryParameters: c,
                hosts: u.map(function (e) {
                    return A(e);
                }),
                read: function (e, t) {
                    var n = p(t, d.timeouts.read),
                        r = function () {
                            return y(
                                d,
                                d.hosts.filter(function (e) {
                                    return 0 != (e.accept & m.Read);
                                }),
                                e,
                                n
                            );
                        };
                    if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return r();
                    var a = {
                        request: e,
                        mappedRequestOptions: n,
                        transporter: {
                            queryParameters: d.queryParameters,
                            headers: d.headers
                        }
                    };
                    return d.responsesCache.get(
                        a,
                        function () {
                            return d.requestsCache.get(a, function () {
                                return d.requestsCache
                                    .set(a, r())
                                    .then(
                                        function (e) {
                                            return Promise.all([d.requestsCache.delete(a), e]);
                                        },
                                        function (e) {
                                            return Promise.all([d.requestsCache.delete(a), Promise.reject(e)]);
                                        }
                                    )
                                    .then(function (e) {
                                        var t = i(e, 2);
                                        return t[0], t[1];
                                    });
                            });
                        },
                        {
                            miss: function (e) {
                                return d.responsesCache.set(a, e);
                            }
                        }
                    );
                },
                write: function (e, t) {
                    return y(
                        d,
                        d.hosts.filter(function (e) {
                            return 0 != (e.accept & m.Write);
                        }),
                        e,
                        p(t, d.timeouts.write)
                    );
                }
            };
        return d;
    }
    function b(e) {
        var t = {
            value: 'Algolia for JavaScript ('.concat(e, ')'),
            add: function (e) {
                var n = '; '.concat(e.segment).concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '');
                return -1 === t.value.indexOf(n) && (t.value = ''.concat(t.value).concat(n)), t;
            }
        };
        return t;
    }
    function D(e, t, n) {
        var r = M(n),
            i = ''
                .concat(e.protocol, '://')
                .concat(e.url, '/')
                .concat('/' === t.charAt(0) ? t.substr(1) : t);
        return r.length && (i += '?'.concat(r)), i;
    }
    function M(e) {
        return Object.keys(e)
            .map(function (t) {
                var n;
                return f('%s=%s', t, ((n = e[t]), '[object Object]' === Object.prototype.toString.call(n) || '[object Array]' === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
            })
            .join('&');
    }
    function P(e) {
        return e.map(function (e) {
            return U(e);
        });
    }
    function U(e) {
        var t = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
        return n(n({}, e), {}, { request: n(n({}, e.request), {}, { headers: n(n({}, e.request.headers), t) }) });
    }
    var w = function (e) {
            return function (t, n) {
                return e.transporter.write(
                    {
                        method: O,
                        path: '2/abtests',
                        data: t
                    },
                    n
                );
            };
        },
        x = function (e) {
            return function (t, n) {
                return e.transporter.write(
                    {
                        method: v,
                        path: f('2/abtests/%s', t)
                    },
                    n
                );
            };
        },
        G = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('2/abtests/%s', t)
                    },
                    n
                );
            };
        },
        k = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '2/abtests'
                    },
                    t
                );
            };
        },
        B = function (e) {
            return function (t, n) {
                return e.transporter.write(
                    {
                        method: O,
                        path: f('2/abtests/%s/stop', t)
                    },
                    n
                );
            };
        },
        F = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/strategies/personalization'
                    },
                    t
                );
            };
        },
        Z = function (e) {
            return function (t, n) {
                return e.transporter.write(
                    {
                        method: O,
                        path: '1/strategies/personalization',
                        data: t
                    },
                    n
                );
            };
        };
    function V(e) {
        return (function t(n) {
            return e.request(n).then(function (r) {
                if ((void 0 !== e.batch && e.batch(r.hits), !e.shouldStop(r))) return r.cursor ? t({ cursor: r.cursor }) : t({ page: (n.page || 0) + 1 });
            });
        })({});
    }
    var H = function (e) {
            return function (t, i) {
                var a = i || {},
                    o = a.queryParameters,
                    s = r(a, ['queryParameters']),
                    l = n({ acl: t }, void 0 !== o ? { queryParameters: o } : {});
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: '1/keys',
                            data: l
                        },
                        s
                    ),
                    function (t, n) {
                        return c(function (r) {
                            return ee(e)(t.key, n).catch(function (e) {
                                if (404 !== e.status) throw e;
                                return r();
                            });
                        });
                    }
                );
            };
        },
        Y = function (e) {
            return function (t, n, r) {
                var i = p(r);
                return (
                    (i.queryParameters['X-Algolia-User-ID'] = t),
                    e.transporter.write(
                        {
                            method: O,
                            path: '1/clusters/mapping',
                            data: { cluster: n }
                        },
                        i
                    )
                );
            };
        },
        j = function (e) {
            return function (t, n, r) {
                return e.transporter.write(
                    {
                        method: O,
                        path: '1/clusters/mapping/batch',
                        data: {
                            users: t,
                            cluster: n
                        }
                    },
                    r
                );
            };
        },
        W = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('/1/dictionaries/%s/batch', t),
                            data: {
                                clearExistingDictionaryEntries: !0,
                                requests: {
                                    action: 'addEntry',
                                    body: []
                                }
                            }
                        },
                        n
                    ),
                    function (t, n) {
                        return eO(e)(t.taskID, n);
                    }
                );
            };
        },
        K = function (e) {
            return function (t, n, r) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('1/indexes/%s/operation', t),
                            data: {
                                operation: 'copy',
                                destination: n
                            }
                        },
                        r
                    ),
                    function (n, r) {
                        return es(e)(t, { methods: { waitTask: tt } }).waitTask(n.taskID, r);
                    }
                );
            };
        },
        z = function (e) {
            return function (t, r, i) {
                return K(e)(t, r, n(n({}, i), {}, { scope: [tr.Rules] }));
            };
        },
        q = function (e) {
            return function (t, r, i) {
                return K(e)(t, r, n(n({}, i), {}, { scope: [tr.Settings] }));
            };
        },
        Q = function (e) {
            return function (t, r, i) {
                return K(e)(t, r, n(n({}, i), {}, { scope: [tr.Synonyms] }));
            };
        },
        X = function (e) {
            return function (t, n) {
                return t.method === N ? e.transporter.read(t, n) : e.transporter.write(t, n);
            };
        },
        $ = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: v,
                            path: f('1/keys/%s', t)
                        },
                        n
                    ),
                    function (n, r) {
                        return c(function (n) {
                            return ee(e)(t, r)
                                .then(n)
                                .catch(function (e) {
                                    if (404 !== e.status) throw e;
                                });
                        });
                    }
                );
            };
        },
        J = function (e) {
            return function (t, n, r) {
                var i = n.map(function (e) {
                    return {
                        action: 'deleteEntry',
                        body: { objectID: e }
                    };
                });
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('/1/dictionaries/%s/batch', t),
                            data: {
                                clearExistingDictionaryEntries: !1,
                                requests: i
                            }
                        },
                        r
                    ),
                    function (t, n) {
                        return eO(e)(t.taskID, n);
                    }
                );
            };
        },
        ee = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/keys/%s', t)
                    },
                    n
                );
            };
        },
        et = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/task/%s', t.toString())
                    },
                    n
                );
            };
        },
        en = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '/1/dictionaries/*/settings'
                    },
                    t
                );
            };
        },
        er = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/logs'
                    },
                    t
                );
            };
        },
        ei = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/clusters/mapping/top'
                    },
                    t
                );
            };
        },
        ea = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/clusters/mapping/%s', t)
                    },
                    n
                );
            };
        },
        eo = function (e) {
            return function (t) {
                var n = t || {},
                    i = n.retrieveMappings,
                    a = r(n, ['retrieveMappings']);
                return (
                    !0 === i && (a.getClusters = !0),
                    e.transporter.read(
                        {
                            method: N,
                            path: '1/clusters/mapping/pending'
                        },
                        a
                    )
                );
            };
        },
        es = function (e) {
            return function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return E(
                    {
                        transporter: e.transporter,
                        appId: e.appId,
                        indexName: t
                    },
                    n.methods
                );
            };
        },
        el = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/keys'
                    },
                    t
                );
            };
        },
        eu = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/clusters'
                    },
                    t
                );
            };
        },
        ec = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/indexes'
                    },
                    t
                );
            };
        },
        ed = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: '1/clusters/mapping'
                    },
                    t
                );
            };
        },
        e_ = function (e) {
            return function (t, n, r) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('1/indexes/%s/operation', t),
                            data: {
                                operation: 'move',
                                destination: n
                            }
                        },
                        r
                    ),
                    function (n, r) {
                        return es(e)(t, { methods: { waitTask: tt } }).waitTask(n.taskID, r);
                    }
                );
            };
        },
        eE = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: '1/indexes/*/batch',
                            data: { requests: t }
                        },
                        n
                    ),
                    function (t, n) {
                        return Promise.all(
                            Object.keys(t.taskID).map(function (r) {
                                return es(e)(r, { methods: { waitTask: tt } }).waitTask(t.taskID[r], n);
                            })
                        );
                    }
                );
            };
        },
        ef = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/objects',
                        data: { requests: t }
                    },
                    n
                );
            };
        },
        eh = function (e) {
            return function (t, r) {
                var i = t.map(function (e) {
                    return n(n({}, e), {}, { params: M(e.params || {}) });
                });
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/queries',
                        data: { requests: i },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        ep = function (e) {
            return function (t, i) {
                return Promise.all(
                    t.map(function (t) {
                        var a = t.params,
                            o = a.facetName,
                            s = a.facetQuery,
                            l = r(a, ['facetName', 'facetQuery']);
                        return es(e)(t.indexName, { methods: { searchForFacetValues: e7 } }).searchForFacetValues(o, s, n(n({}, i), l));
                    })
                );
            };
        },
        em = function (e) {
            return function (t, n) {
                var r = p(n);
                return (
                    (r.queryParameters['X-Algolia-User-ID'] = t),
                    e.transporter.write(
                        {
                            method: v,
                            path: '1/clusters/mapping'
                        },
                        r
                    )
                );
            };
        },
        eI = function (e) {
            return function (t, n, r) {
                var i = n.map(function (e) {
                    return {
                        action: 'addEntry',
                        body: e
                    };
                });
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('/1/dictionaries/%s/batch', t),
                            data: {
                                clearExistingDictionaryEntries: !0,
                                requests: i
                            }
                        },
                        r
                    ),
                    function (t, n) {
                        return eO(e)(t.taskID, n);
                    }
                );
            };
        },
        eT = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('1/keys/%s/restore', t)
                        },
                        n
                    ),
                    function (n, r) {
                        return c(function (n) {
                            return ee(e)(t, r).catch(function (e) {
                                if (404 !== e.status) throw e;
                                return n();
                            });
                        });
                    }
                );
            };
        },
        eg = function (e) {
            return function (t, n, r) {
                var i = n.map(function (e) {
                    return {
                        action: 'addEntry',
                        body: e
                    };
                });
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('/1/dictionaries/%s/batch', t),
                            data: {
                                clearExistingDictionaryEntries: !1,
                                requests: i
                            }
                        },
                        r
                    ),
                    function (t, n) {
                        return eO(e)(t.taskID, n);
                    }
                );
            };
        },
        eS = function (e) {
            return function (t, n, r) {
                return e.transporter.read(
                    {
                        method: O,
                        path: f('/1/dictionaries/%s/search', t),
                        data: { query: n },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        eA = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/clusters/mapping/search',
                        data: { query: t }
                    },
                    n
                );
            };
        },
        ev = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: R,
                            path: '/1/dictionaries/*/settings',
                            data: t
                        },
                        n
                    ),
                    function (t, n) {
                        return eO(e)(t.taskID, n);
                    }
                );
            };
        },
        eN = function (e) {
            return function (t, n) {
                var i = Object.assign({}, n),
                    a = n || {},
                    o = a.queryParameters,
                    s = r(a, ['queryParameters']),
                    l = o ? { queryParameters: o } : {},
                    u = ['acl', 'indexes', 'referers', 'restrictSources', 'queryParameters', 'description', 'maxQueriesPerIPPerHour', 'maxHitsPerQuery'];
                return d(
                    e.transporter.write(
                        {
                            method: R,
                            path: f('1/keys/%s', t),
                            data: l
                        },
                        s
                    ),
                    function (n, r) {
                        return c(function (n) {
                            return ee(e)(t, r).then(function (e) {
                                return !(function (e) {
                                    return Object.keys(i)
                                        .filter(function (e) {
                                            return -1 !== u.indexOf(e);
                                        })
                                        .every(function (t) {
                                            if (Array.isArray(e[t]) && Array.isArray(i[t])) {
                                                var n = e[t];
                                                return (
                                                    n.length === i[t].length &&
                                                    n.every(function (e, n) {
                                                        return e === i[t][n];
                                                    })
                                                );
                                            }
                                            return e[t] === i[t];
                                        });
                                })(e)
                                    ? n()
                                    : Promise.resolve();
                            });
                        });
                    }
                );
            };
        },
        eO = function (e) {
            return function (t, n) {
                return c(function (r) {
                    return et(e)(t, n).then(function (e) {
                        return 'published' !== e.status ? r() : void 0;
                    });
                });
            };
        },
        eR = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('1/indexes/%s/batch', e.indexName),
                            data: { requests: t }
                        },
                        n
                    ),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        eC = function (e) {
            return function (t) {
                return V(
                    n(
                        n(
                            {
                                shouldStop: function (e) {
                                    return void 0 === e.cursor;
                                }
                            },
                            t
                        ),
                        {},
                        {
                            request: function (n) {
                                return e.transporter.read(
                                    {
                                        method: O,
                                        path: f('1/indexes/%s/browse', e.indexName),
                                        data: n
                                    },
                                    t
                                );
                            }
                        }
                    )
                );
            };
        },
        ey = function (e) {
            return function (t) {
                var r = n({ hitsPerPage: 1000 }, t);
                return V(
                    n(
                        n(
                            {
                                shouldStop: function (e) {
                                    return e.hits.length < r.hitsPerPage;
                                }
                            },
                            r
                        ),
                        {},
                        {
                            request: function (t) {
                                return e8(e)('', n(n({}, r), t)).then(function (e) {
                                    return n(
                                        n({}, e),
                                        {},
                                        {
                                            hits: e.hits.map(function (e) {
                                                return delete e._highlightResult, e;
                                            })
                                        }
                                    );
                                });
                            }
                        }
                    )
                );
            };
        },
        eL = function (e) {
            return function (t) {
                var r = n({ hitsPerPage: 1000 }, t);
                return V(
                    n(
                        n(
                            {
                                shouldStop: function (e) {
                                    return e.hits.length < r.hitsPerPage;
                                }
                            },
                            r
                        ),
                        {},
                        {
                            request: function (t) {
                                return e9(e)('', n(n({}, r), t)).then(function (e) {
                                    return n(
                                        n({}, e),
                                        {},
                                        {
                                            hits: e.hits.map(function (e) {
                                                return delete e._highlightResult, e;
                                            })
                                        }
                                    );
                                });
                            }
                        }
                    )
                );
            };
        },
        eb = function (e) {
            return function (t, n, i) {
                var a = i || {},
                    o = a.batchSize,
                    s = r(a, ['batchSize']),
                    l = {
                        taskIDs: [],
                        objectIDs: []
                    };
                return d(
                    (function r() {
                        var i,
                            a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            u = [];
                        for (i = a; i < t.length && (u.push(t[i]), u.length !== (o || 1000)); i++);
                        return 0 === u.length
                            ? Promise.resolve(l)
                            : eR(e)(
                                  u.map(function (e) {
                                      return {
                                          action: n,
                                          body: e
                                      };
                                  }),
                                  s
                              ).then(function (e) {
                                  return (l.objectIDs = l.objectIDs.concat(e.objectIDs)), l.taskIDs.push(e.taskID), r(++i);
                              });
                    })(),
                    function (t, n) {
                        return Promise.all(
                            t.taskIDs.map(function (t) {
                                return tt(e)(t, n);
                            })
                        );
                    }
                );
            };
        },
        eD = function (e) {
            return function (t) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('1/indexes/%s/clear', e.indexName)
                        },
                        t
                    ),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        eM = function (e) {
            return function (t) {
                var n = t || {},
                    i = n.forwardToReplicas,
                    a = p(r(n, ['forwardToReplicas']));
                return (
                    i && (a.queryParameters.forwardToReplicas = 1),
                    d(
                        e.transporter.write(
                            {
                                method: O,
                                path: f('1/indexes/%s/rules/clear', e.indexName)
                            },
                            a
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        eP = function (e) {
            return function (t) {
                var n = t || {},
                    i = n.forwardToReplicas,
                    a = p(r(n, ['forwardToReplicas']));
                return (
                    i && (a.queryParameters.forwardToReplicas = 1),
                    d(
                        e.transporter.write(
                            {
                                method: O,
                                path: f('1/indexes/%s/synonyms/clear', e.indexName)
                            },
                            a
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        eU = function (e) {
            return function (t, n) {
                return d(
                    e.transporter.write(
                        {
                            method: O,
                            path: f('1/indexes/%s/deleteByQuery', e.indexName),
                            data: t
                        },
                        n
                    ),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        ew = function (e) {
            return function (t) {
                return d(
                    e.transporter.write(
                        {
                            method: v,
                            path: f('1/indexes/%s', e.indexName)
                        },
                        t
                    ),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        ex = function (e) {
            return function (t, n) {
                return d(
                    eG(e)([t], n).then(function (e) {
                        return { taskID: e.taskIDs[0] };
                    }),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        eG = function (e) {
            return function (t, n) {
                var r = t.map(function (e) {
                    return { objectID: e };
                });
                return eb(e)(r, tn.DeleteObject, n);
            };
        },
        ek = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.forwardToReplicas,
                    o = p(r(i, ['forwardToReplicas']));
                return (
                    a && (o.queryParameters.forwardToReplicas = 1),
                    d(
                        e.transporter.write(
                            {
                                method: v,
                                path: f('1/indexes/%s/rules/%s', e.indexName, t)
                            },
                            o
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        eB = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.forwardToReplicas,
                    o = p(r(i, ['forwardToReplicas']));
                return (
                    a && (o.queryParameters.forwardToReplicas = 1),
                    d(
                        e.transporter.write(
                            {
                                method: v,
                                path: f('1/indexes/%s/synonyms/%s', e.indexName, t)
                            },
                            o
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        eF = function (e) {
            return function (t) {
                return eK(e)(t)
                    .then(function () {
                        return !0;
                    })
                    .catch(function (e) {
                        if (404 !== e.status) throw e;
                        return !1;
                    });
            };
        },
        eZ = function (e) {
            return function (t, n, r) {
                return e.transporter.read(
                    {
                        method: O,
                        path: f('1/answers/%s/prediction', e.indexName),
                        data: {
                            query: t,
                            queryLanguages: n
                        },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        eV = function (e) {
            return function (t, a) {
                var o = a || {},
                    s = o.query,
                    l = o.paginate,
                    u = r(o, ['query', 'paginate']),
                    c = 0;
                return (function r() {
                    return e6(e)(s || '', n(n({}, u), {}, { page: c })).then(function (e) {
                        for (var n = 0, a = Object.entries(e.hits); n < a.length; n++) {
                            var o = i(a[n], 2),
                                s = o[0],
                                u = o[1];
                            if (t(u))
                                return {
                                    object: u,
                                    position: parseInt(s, 10),
                                    page: c
                                };
                        }
                        if ((c++, !1 === l || c >= e.nbPages))
                            throw {
                                name: 'ObjectNotFoundError',
                                message: 'Object not found.'
                            };
                        return r();
                    });
                })();
            };
        },
        eH = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/indexes/%s/%s', e.indexName, t)
                    },
                    n
                );
            };
        },
        eY = function () {
            return function (e, t) {
                for (var n = 0, r = Object.entries(e.hits); n < r.length; n++) {
                    var a = i(r[n], 2),
                        o = a[0];
                    if (a[1].objectID === t) return parseInt(o, 10);
                }
                return -1;
            };
        },
        ej = function (e) {
            return function (t, i) {
                var a = i || {},
                    o = a.attributesToRetrieve,
                    s = r(a, ['attributesToRetrieve']),
                    l = t.map(function (t) {
                        return n(
                            {
                                indexName: e.indexName,
                                objectID: t
                            },
                            o ? { attributesToRetrieve: o } : {}
                        );
                    });
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/objects',
                        data: { requests: l }
                    },
                    s
                );
            };
        },
        eW = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/indexes/%s/rules/%s', e.indexName, t)
                    },
                    n
                );
            };
        },
        eK = function (e) {
            return function (t) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/indexes/%s/settings', e.indexName),
                        data: { getVersion: 2 }
                    },
                    t
                );
            };
        },
        ez = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: N,
                        path: f('1/indexes/%s/synonyms/%s', e.indexName, t)
                    },
                    n
                );
            };
        },
        eq = function (e) {
            return function (t, n) {
                return d(
                    eQ(e)([t], n).then(function (e) {
                        return {
                            objectID: e.objectIDs[0],
                            taskID: e.taskIDs[0]
                        };
                    }),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        eQ = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.createIfNotExists,
                    o = r(i, ['createIfNotExists']),
                    s = a ? tn.PartialUpdateObject : tn.PartialUpdateObjectNoCreate;
                return eb(e)(t, s, o);
            };
        },
        eX = function (e) {
            return function (t, o) {
                var s = o || {},
                    l = s.safe,
                    u = s.autoGenerateObjectIDIfNotExist,
                    c = s.batchSize,
                    _ = r(s, ['safe', 'autoGenerateObjectIDIfNotExist', 'batchSize']),
                    E = function (t, n, r, i) {
                        return d(
                            e.transporter.write(
                                {
                                    method: O,
                                    path: f('1/indexes/%s/operation', t),
                                    data: {
                                        operation: r,
                                        destination: n
                                    }
                                },
                                i
                            ),
                            function (t, n) {
                                return tt(e)(t.taskID, n);
                            }
                        );
                    },
                    h = Math.random().toString(36).substring(7),
                    p = ''.concat(e.indexName, '_tmp_').concat(h),
                    m = e1({
                        appId: e.appId,
                        transporter: e.transporter,
                        indexName: p
                    }),
                    I = [],
                    T = E(
                        e.indexName,
                        p,
                        'copy',
                        n(
                            n({}, _),
                            {},
                            {
                                scope: ['settings', 'synonyms', 'rules']
                            }
                        )
                    );
                return (
                    I.push(T),
                    d(
                        (l ? T.wait(_) : T)
                            .then(function () {
                                var e = m(
                                    t,
                                    n(
                                        n({}, _),
                                        {},
                                        {
                                            autoGenerateObjectIDIfNotExist: u,
                                            batchSize: c
                                        }
                                    )
                                );
                                return I.push(e), l ? e.wait(_) : e;
                            })
                            .then(function () {
                                var t = E(p, e.indexName, 'move', _);
                                return I.push(t), l ? t.wait(_) : t;
                            })
                            .then(function () {
                                return Promise.all(I);
                            })
                            .then(function (e) {
                                var t = i(e, 3),
                                    n = t[0],
                                    r = t[1],
                                    o = t[2];
                                return {
                                    objectIDs: r.objectIDs,
                                    taskIDs: [n.taskID].concat(a(r.taskIDs), [o.taskID])
                                };
                            }),
                        function (e, t) {
                            return Promise.all(
                                I.map(function (e) {
                                    return e.wait(t);
                                })
                            );
                        }
                    )
                );
            };
        },
        e$ = function (e) {
            return function (t, r) {
                return e3(e)(t, n(n({}, r), {}, { clearExistingRules: !0 }));
            };
        },
        eJ = function (e) {
            return function (t, r) {
                return e5(e)(t, n(n({}, r), {}, { clearExistingSynonyms: !0 }));
            };
        },
        e0 = function (e) {
            return function (t, n) {
                return d(
                    e1(e)([t], n).then(function (e) {
                        return {
                            objectID: e.objectIDs[0],
                            taskID: e.taskIDs[0]
                        };
                    }),
                    function (t, n) {
                        return tt(e)(t.taskID, n);
                    }
                );
            };
        },
        e1 = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.autoGenerateObjectIDIfNotExist,
                    o = r(i, ['autoGenerateObjectIDIfNotExist']),
                    s = a ? tn.AddObject : tn.UpdateObject;
                if (s === tn.UpdateObject) {
                    var l = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var _, E = t[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0)
                            if (void 0 === _.value.objectID)
                                return d(
                                    Promise.reject({
                                        name: 'MissingObjectIDError',
                                        message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                                    })
                                );
                    } catch (e) {
                        (u = !0), (c = e);
                    } finally {
                        try {
                            l || null == E.return || E.return();
                        } finally {
                            if (u) throw c;
                        }
                    }
                }
                return eb(e)(t, s, o);
            };
        },
        e2 = function (e) {
            return function (t, n) {
                return e3(e)([t], n);
            };
        },
        e3 = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.forwardToReplicas,
                    o = i.clearExistingRules,
                    s = p(r(i, ['forwardToReplicas', 'clearExistingRules']));
                return (
                    a && (s.queryParameters.forwardToReplicas = 1),
                    o && (s.queryParameters.clearExistingRules = 1),
                    d(
                        e.transporter.write(
                            {
                                method: O,
                                path: f('1/indexes/%s/rules/batch', e.indexName),
                                data: t
                            },
                            s
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        e4 = function (e) {
            return function (t, n) {
                return e5(e)([t], n);
            };
        },
        e5 = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.forwardToReplicas,
                    o = i.clearExistingSynonyms,
                    s = i.replaceExistingSynonyms,
                    l = p(r(i, ['forwardToReplicas', 'clearExistingSynonyms', 'replaceExistingSynonyms']));
                return (
                    a && (l.queryParameters.forwardToReplicas = 1),
                    (s || o) && (l.queryParameters.replaceExistingSynonyms = 1),
                    d(
                        e.transporter.write(
                            {
                                method: O,
                                path: f('1/indexes/%s/synonyms/batch', e.indexName),
                                data: t
                            },
                            l
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        e6 = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: O,
                        path: f('1/indexes/%s/query', e.indexName),
                        data: { query: t },
                        cacheable: !0
                    },
                    n
                );
            };
        },
        e7 = function (e) {
            return function (t, n, r) {
                return e.transporter.read(
                    {
                        method: O,
                        path: f('1/indexes/%s/facets/%s/query', e.indexName, t),
                        data: { facetQuery: n },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        e8 = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: O,
                        path: f('1/indexes/%s/rules/search', e.indexName),
                        data: { query: t }
                    },
                    n
                );
            };
        },
        e9 = function (e) {
            return function (t, n) {
                return e.transporter.read(
                    {
                        method: O,
                        path: f('1/indexes/%s/synonyms/search', e.indexName),
                        data: { query: t }
                    },
                    n
                );
            };
        },
        te = function (e) {
            return function (t, n) {
                var i = n || {},
                    a = i.forwardToReplicas,
                    o = p(r(i, ['forwardToReplicas']));
                return (
                    a && (o.queryParameters.forwardToReplicas = 1),
                    d(
                        e.transporter.write(
                            {
                                method: R,
                                path: f('1/indexes/%s/settings', e.indexName),
                                data: t
                            },
                            o
                        ),
                        function (t, n) {
                            return tt(e)(t.taskID, n);
                        }
                    )
                );
            };
        },
        tt = function (e) {
            return function (t, n) {
                return c(function (r) {
                    return (function (e) {
                        return function (t, n) {
                            return e.transporter.read(
                                {
                                    method: N,
                                    path: f('1/indexes/%s/task/%s', e.indexName, t.toString())
                                },
                                n
                            );
                        };
                    })(e)(t, n).then(function (e) {
                        return 'published' !== e.status ? r() : void 0;
                    });
                });
            };
        },
        tn = {
            AddObject: 'addObject',
            UpdateObject: 'updateObject',
            PartialUpdateObject: 'partialUpdateObject',
            PartialUpdateObjectNoCreate: 'partialUpdateObjectNoCreate',
            DeleteObject: 'deleteObject'
        },
        tr = {
            Settings: 'settings',
            Synonyms: 'synonyms',
            Rules: 'rules'
        },
        ti = 1,
        ta = 2,
        to = 3,
        ts = function (e) {
            return function (t, r) {
                var i = t.map(function (e) {
                    return n(n({}, e), {}, { threshold: e.threshold || 0 });
                });
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/recommendations',
                        data: { requests: i },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        tl = function (e) {
            return function (t, r) {
                return ts(e)(
                    t.map(function (e) {
                        return n(
                            n({}, e),
                            {},
                            {
                                fallbackParameters: {},
                                model: 'bought-together'
                            }
                        );
                    }),
                    r
                );
            };
        },
        tu = function (e) {
            return function (t, r) {
                return ts(e)(
                    t.map(function (e) {
                        return n(n({}, e), {}, { model: 'related-products' });
                    }),
                    r
                );
            };
        },
        tc = function (e) {
            return function (t, r) {
                var i = t.map(function (e) {
                    return n(
                        n({}, e),
                        {},
                        {
                            model: 'trending-facets',
                            threshold: e.threshold || 0
                        }
                    );
                });
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/recommendations',
                        data: { requests: i },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        td = function (e) {
            return function (t, r) {
                var i = t.map(function (e) {
                    return n(
                        n({}, e),
                        {},
                        {
                            model: 'trending-items',
                            threshold: e.threshold || 0
                        }
                    );
                });
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/recommendations',
                        data: { requests: i },
                        cacheable: !0
                    },
                    r
                );
            };
        },
        t_ = function (e) {
            return function (t, r) {
                return ts(e)(
                    t.map(function (e) {
                        return n(n({}, e), {}, { model: 'looking-similar' });
                    }),
                    r
                );
            };
        },
        tE = function (e) {
            return function (t, r) {
                var i = t.map(function (e) {
                    return n(
                        n({}, e),
                        {},
                        {
                            model: 'recommended-for-you',
                            threshold: e.threshold || 0
                        }
                    );
                });
                return e.transporter.read(
                    {
                        method: O,
                        path: '1/indexes/*/recommendations',
                        data: { requests: i },
                        cacheable: !0
                    },
                    r
                );
            };
        };
    function tf(e, t, r) {
        var i,
            a = {
                appId: e,
                apiKey: t,
                timeouts: {
                    connect: 1,
                    read: 2,
                    write: 30
                },
                requester: {
                    send: function (e) {
                        return new Promise(function (t) {
                            var n = new XMLHttpRequest();
                            n.open(e.method, e.url, !0),
                                Object.keys(e.headers).forEach(function (t) {
                                    return n.setRequestHeader(t, e.headers[t]);
                                });
                            var r,
                                i = function (e, r) {
                                    return setTimeout(function () {
                                        n.abort(),
                                            t({
                                                status: 0,
                                                content: r,
                                                isTimedOut: !0
                                            });
                                    }, 1000 * e);
                                },
                                a = i(e.connectTimeout, 'Connection timeout');
                            (n.onreadystatechange = function () {
                                n.readyState > n.OPENED && void 0 === r && (clearTimeout(a), (r = i(e.responseTimeout, 'Socket timeout')));
                            }),
                                (n.onerror = function () {
                                    0 === n.status &&
                                        (clearTimeout(a),
                                        clearTimeout(r),
                                        t({
                                            content: n.responseText || 'Network request failed',
                                            status: n.status,
                                            isTimedOut: !1
                                        }));
                                }),
                                (n.onload = function () {
                                    clearTimeout(a),
                                        clearTimeout(r),
                                        t({
                                            content: n.responseText,
                                            status: n.status,
                                            isTimedOut: !1
                                        });
                                }),
                                n.send(e.data);
                        });
                    }
                },
                logger:
                    ((i = to),
                    {
                        debug: function (e, t) {
                            return ti >= i && console.debug(e, t), Promise.resolve();
                        },
                        info: function (e, t) {
                            return ta >= i && console.info(e, t), Promise.resolve();
                        },
                        error: function (e, t) {
                            return console.error(e, t), Promise.resolve();
                        }
                    }),
                responsesCache: l(),
                requestsCache: l({ serializable: !1 }),
                hostsCache: s({
                    caches: [o({ key: ''.concat('4.23.3', '-').concat(e) }), l()]
                }),
                userAgent: b('4.23.3').add({ segment: 'Browser' })
            },
            c = n(n({}, a), r),
            d = function () {
                return function (e) {
                    return (function (e) {
                        var t = e.region || 'us',
                            r = u(h.WithinHeaders, e.appId, e.apiKey),
                            i = L(
                                n(
                                    n({ hosts: [{ url: 'personalization.'.concat(t, '.algolia.com') }] }, e),
                                    {},
                                    {
                                        headers: n(n(n({}, r.headers()), { 'content-type': 'application/json' }), e.headers),
                                        queryParameters: n(n({}, r.queryParameters()), e.queryParameters)
                                    }
                                )
                            );
                        return E(
                            {
                                appId: e.appId,
                                transporter: i
                            },
                            e.methods
                        );
                    })(
                        n(
                            n(n({}, a), e),
                            {},
                            {
                                methods: {
                                    getPersonalizationStrategy: F,
                                    setPersonalizationStrategy: Z
                                }
                            }
                        )
                    );
                };
            };
        return (function (e) {
            var t = e.appId,
                r = u(void 0 !== e.authMode ? e.authMode : h.WithinHeaders, t, e.apiKey),
                i = L(
                    n(
                        n(
                            {
                                hosts: [
                                    {
                                        url: ''.concat(t, '-dsn.algolia.net'),
                                        accept: m.Read
                                    },
                                    {
                                        url: ''.concat(t, '.algolia.net'),
                                        accept: m.Write
                                    }
                                ].concat(_([{ url: ''.concat(t, '-1.algolianet.com') }, { url: ''.concat(t, '-2.algolianet.com') }, { url: ''.concat(t, '-3.algolianet.com') }]))
                            },
                            e
                        ),
                        {},
                        {
                            headers: n(n(n({}, r.headers()), { 'content-type': 'application/x-www-form-urlencoded' }), e.headers),
                            queryParameters: n(n({}, r.queryParameters()), e.queryParameters)
                        }
                    )
                );
            return E(
                {
                    transporter: i,
                    appId: t,
                    addAlgoliaAgent: function (e, t) {
                        i.userAgent.add({
                            segment: e,
                            version: t
                        });
                    },
                    clearCache: function () {
                        return Promise.all([i.requestsCache.clear(), i.responsesCache.clear()]).then(function () {});
                    }
                },
                e.methods
            );
        })(
            n(
                n({}, c),
                {},
                {
                    methods: {
                        search: eh,
                        searchForFacetValues: ep,
                        multipleBatch: eE,
                        multipleGetObjects: ef,
                        multipleQueries: eh,
                        copyIndex: K,
                        copySettings: q,
                        copySynonyms: Q,
                        copyRules: z,
                        moveIndex: e_,
                        listIndices: ec,
                        getLogs: er,
                        listClusters: eu,
                        multipleSearchForFacetValues: ep,
                        getApiKey: ee,
                        addApiKey: H,
                        listApiKeys: el,
                        updateApiKey: eN,
                        deleteApiKey: $,
                        restoreApiKey: eT,
                        assignUserID: Y,
                        assignUserIDs: j,
                        getUserID: ea,
                        searchUserIDs: eA,
                        listUserIDs: ed,
                        getTopUserIDs: ei,
                        removeUserID: em,
                        hasPendingMappings: eo,
                        clearDictionaryEntries: W,
                        deleteDictionaryEntries: J,
                        getDictionarySettings: en,
                        getAppTask: et,
                        replaceDictionaryEntries: eI,
                        saveDictionaryEntries: eg,
                        searchDictionaryEntries: eS,
                        setDictionarySettings: ev,
                        waitAppTask: eO,
                        customRequest: X,
                        initIndex: function (e) {
                            return function (t) {
                                return es(e)(t, {
                                    methods: {
                                        batch: eR,
                                        delete: ew,
                                        findAnswers: eZ,
                                        getObject: eH,
                                        getObjects: ej,
                                        saveObject: e0,
                                        saveObjects: e1,
                                        search: e6,
                                        searchForFacetValues: e7,
                                        waitTask: tt,
                                        setSettings: te,
                                        getSettings: eK,
                                        partialUpdateObject: eq,
                                        partialUpdateObjects: eQ,
                                        deleteObject: ex,
                                        deleteObjects: eG,
                                        deleteBy: eU,
                                        clearObjects: eD,
                                        browseObjects: eC,
                                        getObjectPosition: eY,
                                        findObject: eV,
                                        exists: eF,
                                        saveSynonym: e4,
                                        saveSynonyms: e5,
                                        getSynonym: ez,
                                        searchSynonyms: e9,
                                        browseSynonyms: eL,
                                        deleteSynonym: eB,
                                        clearSynonyms: eP,
                                        replaceAllObjects: eX,
                                        replaceAllSynonyms: eJ,
                                        searchRules: e8,
                                        getRule: eW,
                                        deleteRule: ek,
                                        saveRule: e2,
                                        saveRules: e3,
                                        replaceAllRules: e$,
                                        browseRules: ey,
                                        clearRules: eM
                                    }
                                });
                            };
                        },
                        initAnalytics: function () {
                            return function (e) {
                                return (function (e) {
                                    var t = e.region || 'us',
                                        r = u(h.WithinHeaders, e.appId, e.apiKey),
                                        i = L(
                                            n(
                                                n({ hosts: [{ url: 'analytics.'.concat(t, '.algolia.com') }] }, e),
                                                {},
                                                {
                                                    headers: n(n(n({}, r.headers()), { 'content-type': 'application/json' }), e.headers),
                                                    queryParameters: n(n({}, r.queryParameters()), e.queryParameters)
                                                }
                                            )
                                        );
                                    return E(
                                        {
                                            appId: e.appId,
                                            transporter: i
                                        },
                                        e.methods
                                    );
                                })(
                                    n(
                                        n(n({}, a), e),
                                        {},
                                        {
                                            methods: {
                                                addABTest: w,
                                                getABTest: G,
                                                getABTests: k,
                                                stopABTest: B,
                                                deleteABTest: x
                                            }
                                        }
                                    )
                                );
                            };
                        },
                        initPersonalization: d,
                        initRecommendation: function () {
                            return function (e) {
                                return c.logger.info('The `initRecommendation` method is deprecated. Use `initPersonalization` instead.'), d()(e);
                            };
                        },
                        getRecommendations: ts,
                        getFrequentlyBoughtTogether: tl,
                        getLookingSimilar: t_,
                        getRecommendedForYou: tE,
                        getRelatedProducts: tu,
                        getTrendingFacets: tc,
                        getTrendingItems: td
                    }
                }
            )
        );
    }
    return (tf.version = '4.23.3'), tf;
});
