var t, n;
(t = 0),
    (n = function () {
        var e,
            t,
            n,
            r,
            i,
            a,
            s,
            o,
            l = /\r\n?/g,
            u = /\t/g,
            c = /\f/g,
            d = function (e) {
                return e.replace(l, '\n').replace(c, '').replace(u, '    ');
            },
            f = function (e, t) {
                var n = e || {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n;
            },
            _ = function (e, t) {
                var n,
                    r = Object.keys(e).filter(function (t) {
                        var n = e[t];
                        if (null == n || null == n.match) return !1;
                        var r = n.order;
                        return ('number' != typeof r || !isFinite(r)) && 'undefined' != typeof console && console.warn('simple-markdown: Invalid order for rule `' + t + '`: ' + String(r)), !0;
                    });
                r.sort(function (t, n) {
                    var r = e[t],
                        i = e[n],
                        a = r.order,
                        s = i.order;
                    if (a !== s) return a - s;
                    var o = r.quality ? 0 : 1,
                        l = i.quality ? 0 : 1;
                    if (o !== l) return o - l;
                    if (t < n) return -1;
                    if (t > n) return 1;
                    else return 0;
                });
                for (var i = new Map(), a = [], s = 0; s < r.length; s++) {
                    var o = r[s],
                        l = e[o].requiredFirstCharacters;
                    null == l
                        ? a.push(o)
                        : l.map((e) => {
                              let t = e.charCodeAt(0);
                              !i.has(t) && i.set(t, []), i.get(t).push(o);
                          });
                }
                var u = function (t, s) {
                        var o = [];
                        for (n = s = s || n; t; ) {
                            for (var l = null, c = null, d = null, f = -100000, _ = 100000, h = [i.get(t.charCodeAt(0)), a], p = 0; p < h.length; p++) {
                                var m = h[p];
                                if (null != m)
                                    for (var g = 0; g < m.length; g++) {
                                        var E = m[g],
                                            v = e[E],
                                            I = v.order;
                                        if (I > _) break;
                                        var S = null == s.prevCapture ? '' : s.prevCapture[0],
                                            b = v.match(t, s, S);
                                        if (b) {
                                            var T = v.quality ? v.quality(b, s, S) : 0;
                                            (I < _ || T > f) && ((l = E), (c = v), (d = b), (f = T), (_ = I));
                                        }
                                    }
                            }
                            if (null == c || null == d) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + r[r.length - 1] + "'. It seems to not match the following source:\n" + t);
                            if (d.index) throw Error('`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?');
                            var y = c.parse(d, u, s);
                            Array.isArray(y) ? Array.prototype.push.apply(o, y) : (null == y.type && (y.type = l), o.push(y)), (s.prevCapture = d), (t = t.substring(s.prevCapture[0].length));
                        }
                        return o;
                    },
                    c = function (e, r) {
                        return !(n = f(r, t)).inline && !n.disableAutoBlockNewlines && (e += '\n\n'), (n.prevCapture = null), u(d(e), n);
                    };
                return (u.rules = e), (c.rules = e), c;
            },
            h = function (e) {
                var t = function (t, n) {
                    return n.inline ? e.exec(t) : null;
                };
                return (t.regex = e), t;
            },
            p = function (e) {
                var t = function (t, n) {
                    return n.inline ? null : e.exec(t);
                };
                return (t.regex = e), t;
            },
            m = function (e) {
                var t = function (t, n) {
                    return e.exec(t);
                };
                return (t.regex = e), t;
            },
            g = ('function' == typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
            E = function (e, t, n) {
                return {
                    $$typeof: g,
                    type: e,
                    key: null == t ? void 0 : t,
                    ref: null,
                    props: n,
                    _owner: null
                };
            },
            v = function (e, t, n, r) {
                r = void 0 === r || r;
                var i = '';
                for (var a in (n = n || {})) {
                    var s = n[a];
                    Object.prototype.hasOwnProperty.call(n, a) && s && (i += ' ' + y(a) + '="' + y(s) + '"');
                }
                var o = '<' + e + i + '>';
                return r ? o + t + '</' + e + '>' : o;
            },
            I = {},
            S = function (e) {
                if (null == e) return null;
                try {
                    var t = new URL(e, 'https://localhost').protocol;
                    if (0 === t.indexOf('javascript:') || 0 === t.indexOf('vbscript:') || 0 === t.indexOf('data:')) return null;
                } catch (e) {
                    return null;
                }
                return e;
            },
            b = /[<>&"']/g,
            T = {
                '<': '&lt;',
                '>': '&gt;',
                '&': '&amp;',
                '"': '&quot;',
                "'": '&#x27;',
                '/': '&#x2F;',
                '`': '&#96;'
            },
            y = function (e) {
                return String(e).replace(b, function (e) {
                    return T[e];
                });
            },
            A = /\\([^0-9A-Za-z\s])/g,
            N = function (e) {
                return e.replace(A, '$1');
            },
            C = function (e, t, n) {
                var r = n.inline || !1;
                n.inline = !0;
                var i = e(t, n);
                return (n.inline = r), i;
            },
            R = function (e, t, n) {
                return { content: C(t, e[1], n) };
            },
            O = function () {
                return {};
            },
            D = '(?:[*+-]|\\d+\\.)',
            L = '( *)(' + D + ') +',
            x = RegExp('^' + L),
            w = RegExp(L + '[^\\n]*(?:\\n(?!\\1' + D + ' )[^\\n]*)*(\n|$)', 'gm'),
            M = /\n{2,}$/,
            P = /^ (?= *`)|(` *) $/g,
            k = / *\n+$/,
            U = RegExp('^( *)(' + D + ') [\\s\\S]+?(?:\n{2,}(?! )(?!\\1' + D + ' )\\n*|\\s*\n*$)'),
            G = /(?:^|\n)( *)$/;
        var B =
                ((e = /^ *\| *| *\| *$/g),
                (t = / *$/),
                (n = /^ *-+: *$/),
                (r = /^ *:-+: *$/),
                (i = /^ *:-+ *$/),
                (a = function (e) {
                    if (n.test(e)) return 'right';
                    if (r.test(e)) return 'center';
                    if (i.test(e)) return 'left';
                    else return null;
                }),
                (s = function (e, n, r, i) {
                    var a = r.inTable;
                    r.inTable = !0;
                    var s = n(e.trim(), r);
                    r.inTable = a;
                    var o = [[]];
                    return (
                        s.forEach(function (e, n) {
                            'tableSeparator' === e.type ? (!i || (0 !== n && n !== s.length - 1)) && o.push([]) : ('text' === e.type && (null == s[n + 1] || 'tableSeparator' === s[n + 1].type) && (e.content = e.content.replace(t, '')), o[o.length - 1].push(e));
                        }),
                        o
                    );
                }),
                {
                    parseTable: (o = function (t) {
                        return function (n, r, i) {
                            i.inline = !0;
                            var o,
                                l,
                                u,
                                c,
                                d,
                                f,
                                _,
                                h = s(n[1], r, i, t);
                            var p = ((o = n[2]), (l = 0), (u = 0), t && (o = o.replace(e, '')), o.trim().split('|').map(a));
                            var m =
                                ((c = n[3]),
                                (d = r),
                                (f = i),
                                (_ = t),
                                c
                                    .trim()
                                    .split('\n')
                                    .map(function (e) {
                                        return s(e, d, f, _);
                                    }));
                            return (
                                (i.inline = !1),
                                {
                                    type: 'table',
                                    header: h,
                                    align: p,
                                    cells: m
                                }
                            );
                        };
                    })(!0),
                    parseNpTable: o(!1),
                    TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                    NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
                }),
            Z = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
            F = '\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*',
            V = /mailto:/i,
            H = function (e, t, n) {
                var r = (e[2] || e[1]).replace(/\s+/g, ' ').toLowerCase();
                if (t._defs && t._defs[r]) {
                    var i = t._defs[r];
                    (n.target = i.target), (n.title = i.title);
                }
                return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
            },
            j = !1;
        try {
            RegExp('(?<=a)'), RegExp('(?<!a)'), (j = !0);
        } catch (e) {}
        var Y = 0,
            W = {
                Array: {
                    react: function (e, t, n) {
                        for (var r = n.key, i = [], a = 0, s = 0; a < e.length; a++, s++) {
                            n.key = '' + a;
                            var o = e[a];
                            if ('text' === o.type)
                                for (
                                    o = {
                                        type: 'text',
                                        content: o.content
                                    };
                                    a + 1 < e.length && 'text' === e[a + 1].type;
                                    a++
                                )
                                    o.content += e[a + 1].content;
                            i.push(t(o, n));
                        }
                        return (n.key = r), i;
                    },
                    html: function (e, t, n) {
                        for (var r = '', i = 0; i < e.length; i++) {
                            var a = e[i];
                            if ('text' === a.type)
                                for (
                                    a = {
                                        type: 'text',
                                        content: a.content
                                    };
                                    i + 1 < e.length && 'text' === e[i + 1].type;
                                    i++
                                )
                                    a.content += e[i + 1].content;
                            r += t(a, n);
                        }
                        return r;
                    }
                },
                heading: {
                    order: Y++,
                    match: p(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            level: e[1].length,
                            content: C(t, e[2].trim(), n)
                        };
                    },
                    react: function (e, t, n) {
                        return E('h' + e.level, n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return v('h' + e.level, t(e.content, n));
                    }
                },
                nptable: {
                    order: Y++,
                    match: p(B.NPTABLE_REGEX),
                    parse: B.parseNpTable,
                    react: null,
                    html: null
                },
                lheading: {
                    order: Y++,
                    match: p(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            type: 'heading',
                            level: '=' === e[2] ? 1 : 2,
                            content: C(t, e[1], n)
                        };
                    },
                    react: null,
                    html: null
                },
                hr: {
                    order: Y++,
                    match: p(/^( *[-*_]){3,} *(?:\n *)+\n/),
                    parse: O,
                    react: function (e, t, n) {
                        return E('hr', n.key, I);
                    },
                    html: function (e, t, n) {
                        return '<hr>';
                    }
                },
                codeBlock: {
                    order: Y++,
                    match: p(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            lang: void 0,
                            content: e[0].replace(/^    /gm, '').replace(/\n+$/, '')
                        };
                    },
                    react: function (e, t, n) {
                        var r = e.lang ? 'markdown-code-' + e.lang : void 0;
                        return E('pre', n.key, {
                            children: E('code', null, {
                                className: r,
                                children: e.content
                            })
                        });
                    },
                    html: function (e, t, n) {
                        var r = e.lang ? 'markdown-code-' + e.lang : void 0,
                            i = v('code', y(e.content), { class: r });
                        return v('pre', i);
                    }
                },
                fence: {
                    order: Y++,
                    match: p(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
                    parse: function (e, t, n) {
                        return {
                            type: 'codeBlock',
                            lang: e[2] || void 0,
                            content: e[3]
                        };
                    },
                    react: null,
                    html: null
                },
                blockQuote: {
                    order: Y++,
                    match: p(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                    parse: function (e, t, n) {
                        return { content: t(e[0].replace(/^ *> ?/gm, ''), n) };
                    },
                    react: function (e, t, n) {
                        return E('blockquote', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return v('blockquote', t(e.content, n));
                    }
                },
                list: {
                    order: Y++,
                    match: function (e, t) {
                        var n = null == t.prevCapture ? '' : t.prevCapture[0],
                            r = G.exec(n),
                            i = t._list || !t.inline;
                        return r && i ? ((e = r[1] + e), U.exec(e)) : null;
                    },
                    parse: function (e, t, n) {
                        var r = e[2],
                            i = r.length > 1,
                            a = i ? +r : void 0,
                            s = e[0].replace(M, '\n').match(w),
                            o = !1;
                        return {
                            ordered: i,
                            start: a,
                            items: s.map(function (e, r) {
                                var i,
                                    a = x.exec(e),
                                    l = RegExp('^ {1,' + (a ? a[0].length : 0) + '}', 'gm'),
                                    u = e.replace(l, '').replace(x, ''),
                                    c = r === s.length - 1,
                                    d = -1 !== u.indexOf('\n\n') || (c && o);
                                o = d;
                                var f = n.inline,
                                    _ = n._list;
                                (n._list = !0), d ? ((n.inline = !1), (i = u.replace(k, '\n\n'))) : ((n.inline = !0), (i = u.replace(k, '')));
                                var h = t(i, n);
                                return (n.inline = f), (n._list = _), h;
                            })
                        };
                    },
                    react: function (e, t, n) {
                        return E(e.ordered ? 'ol' : 'ul', n.key, {
                            start: e.start,
                            children: e.items.map(function (e, r) {
                                return E('li', '' + r, { children: t(e, n) });
                            })
                        });
                    },
                    html: function (e, t, n) {
                        var r = e.items
                            .map(function (e) {
                                return v('li', t(e, n));
                            })
                            .join('');
                        return v(e.ordered ? 'ol' : 'ul', r, { start: e.start });
                    }
                },
                def: {
                    order: Y++,
                    match: p(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
                    parse: function (e, t, n) {
                        var r = e[1].replace(/\s+/g, ' ').toLowerCase(),
                            i = e[2],
                            a = e[3];
                        return (
                            n._refs &&
                                n._refs[r] &&
                                n._refs[r].forEach(function (e) {
                                    (e.target = i), (e.title = a);
                                }),
                            (n._defs = n._defs || {}),
                            (n._defs[r] = {
                                target: i,
                                title: a
                            }),
                            {
                                def: r,
                                target: i,
                                title: a
                            }
                        );
                    },
                    react: function () {
                        return null;
                    },
                    html: function () {
                        return '';
                    }
                },
                table: {
                    order: Y++,
                    match: p(B.TABLE_REGEX),
                    parse: B.parseTable,
                    react: function (e, t, n) {
                        var r = function (t) {
                                return null == e.align[t] ? {} : { textAlign: e.align[t] };
                            },
                            i = e.header.map(function (e, i) {
                                return E('th', '' + i, {
                                    style: r(i),
                                    scope: 'col',
                                    children: t(e, n)
                                });
                            }),
                            a = e.cells.map(function (e, i) {
                                return E('tr', '' + i, {
                                    children: e.map(function (e, i) {
                                        return E('td', '' + i, {
                                            style: r(i),
                                            children: t(e, n)
                                        });
                                    })
                                });
                            });
                        return E('table', n.key, {
                            children: [E('thead', 'thead', { children: E('tr', null, { children: i }) }), E('tbody', 'tbody', { children: a })]
                        });
                    },
                    html: function (e, t, n) {
                        var r = function (t) {
                                return null == e.align[t] ? '' : 'text-align:' + e.align[t] + ';';
                            },
                            i = e.header
                                .map(function (e, i) {
                                    return v('th', t(e, n), {
                                        style: r(i),
                                        scope: 'col'
                                    });
                                })
                                .join(''),
                            a = e.cells
                                .map(function (e) {
                                    var i = e
                                        .map(function (e, i) {
                                            return v('td', t(e, n), { style: r(i) });
                                        })
                                        .join('');
                                    return v('tr', i);
                                })
                                .join(''),
                            s = v('thead', v('tr', i)),
                            o = v('tbody', a);
                        return v('table', s + o);
                    }
                },
                newline: {
                    order: Y++,
                    requiredFirstCharacters: ['\n'],
                    match: p(/^(?:\n *)*\n/),
                    parse: O,
                    react: function (e, t, n) {
                        return '\n';
                    },
                    html: function (e, t, n) {
                        return '\n';
                    }
                },
                paragraph: {
                    order: Y++,
                    match: p(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                    parse: R,
                    react: function (e, t, n) {
                        return E('div', n.key, {
                            className: 'paragraph',
                            children: t(e.content, n)
                        });
                    },
                    html: function (e, t, n) {
                        return v('div', t(e.content, n), { class: 'paragraph' });
                    }
                },
                escape: {
                    order: Y++,
                    requiredFirstCharacters: ['\\'],
                    match: h(/^\\([^0-9A-Za-z\s])/),
                    parse: function (e, t, n) {
                        return {
                            type: 'text',
                            content: e[1]
                        };
                    },
                    react: null,
                    html: null
                },
                tableSeparator: {
                    order: Y++,
                    match: function (e, t) {
                        return t.inTable ? /^ *\| */.exec(e) : null;
                    },
                    parse: function () {
                        return { type: 'tableSeparator' };
                    },
                    react: function () {
                        return ' | ';
                    },
                    html: function () {
                        return ' &vert; ';
                    }
                },
                autolink: {
                    order: Y++,
                    requiredFirstCharacters: ['<'],
                    match: h(/^<([^: >]+:\/[^ >]+)>/),
                    parse: function (e, t, n) {
                        return {
                            type: 'link',
                            content: [
                                {
                                    type: 'text',
                                    content: e[1]
                                }
                            ],
                            target: e[1]
                        };
                    },
                    react: null,
                    html: null
                },
                mailto: {
                    order: Y++,
                    match: h(/^<([^ >]+@[^ >]+)>/),
                    parse: function (e, t, n) {
                        var r = e[1],
                            i = e[1];
                        return (
                            !V.test(i) && (i = 'mailto:' + i),
                            {
                                type: 'link',
                                content: [
                                    {
                                        type: 'text',
                                        content: r
                                    }
                                ],
                                target: i
                            }
                        );
                    },
                    react: null,
                    html: null
                },
                url: {
                    order: Y++,
                    requiredFirstCharacters: ['h'],
                    match: h(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
                    parse: function (e, t, n) {
                        return {
                            type: 'link',
                            content: [
                                {
                                    type: 'text',
                                    content: e[1]
                                }
                            ],
                            target: e[1],
                            title: void 0
                        };
                    },
                    react: null,
                    html: null
                },
                link: {
                    order: Y++,
                    requiredFirstCharacters: ['['],
                    match: h(RegExp('^\\[(' + Z + ')\\]\\(' + F + '\\)')),
                    parse: function (e, t, n) {
                        return {
                            content: t(e[1], n),
                            target: N(e[2]),
                            title: e[3]
                        };
                    },
                    react: function (e, t, n) {
                        return E('a', n.key, {
                            href: S(e.target),
                            title: e.title,
                            children: t(e.content, n)
                        });
                    },
                    html: function (e, t, n) {
                        var r = {
                            href: S(e.target),
                            title: e.title
                        };
                        return v('a', t(e.content, n), r);
                    }
                },
                image: {
                    order: Y++,
                    match: h(RegExp('^!\\[(' + Z + ')\\]\\(' + F + '\\)')),
                    parse: function (e, t, n) {
                        return {
                            alt: e[1],
                            target: N(e[2]),
                            title: e[3]
                        };
                    },
                    react: function (e, t, n) {
                        return E('img', n.key, {
                            src: S(e.target),
                            alt: e.alt,
                            title: e.title
                        });
                    },
                    html: function (e, t, n) {
                        return v(
                            'img',
                            '',
                            {
                                src: S(e.target),
                                alt: e.alt,
                                title: e.title
                            },
                            !1
                        );
                    }
                },
                reflink: {
                    order: Y++,
                    match: h(RegExp('^\\[(' + Z + ')\\]\\s*\\[([^\\]]*)\\]')),
                    parse: function (e, t, n) {
                        return H(e, n, {
                            type: 'link',
                            content: t(e[1], n)
                        });
                    },
                    react: null,
                    html: null
                },
                refimage: {
                    order: Y++,
                    match: h(RegExp('^!\\[(' + Z + ')\\]\\s*\\[([^\\]]*)\\]')),
                    parse: function (e, t, n) {
                        return H(e, n, {
                            type: 'image',
                            alt: e[1]
                        });
                    },
                    react: null,
                    html: null
                },
                em: {
                    order: Y,
                    match: h(RegExp((j ? '^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b' : '^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b') + '|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)')),
                    quality: function (e) {
                        return e[0].length + 0.2;
                    },
                    parse: function (e, t, n) {
                        return { content: t(e[2] || e[1], n) };
                    },
                    react: function (e, t, n) {
                        return E('em', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return v('em', t(e.content, n));
                    }
                },
                strong: {
                    order: Y,
                    requiredFirstCharacters: ['*'],
                    match: h(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                    quality: function (e) {
                        return e[0].length + 0.1;
                    },
                    parse: R,
                    react: function (e, t, n) {
                        return E('strong', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return v('strong', t(e.content, n));
                    }
                },
                u: {
                    order: Y++,
                    requiredFirstCharacters: ['_'],
                    match: h(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                    quality: function (e) {
                        return e[0].length;
                    },
                    parse: R,
                    react: function (e, t, n) {
                        return E('u', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return v('u', t(e.content, n));
                    }
                },
                del: {
                    order: Y++,
                    requiredFirstCharacters: ['~'],
                    match: h(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                    parse: R,
                    react: function (e, t, n) {
                        return E('del', n.key, { children: t(e.content, n) });
                    },
                    html: function (e, t, n) {
                        return v('del', t(e.content, n));
                    }
                },
                inlineCode: {
                    order: Y++,
                    requiredFirstCharacters: ['`'],
                    match: h(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                    parse: function (e, t, n) {
                        return { content: e[2].replace(P, '$1') };
                    },
                    react: function (e, t, n) {
                        return E('code', n.key, { children: e.content });
                    },
                    html: function (e, t, n) {
                        return v('code', y(e.content));
                    }
                },
                br: {
                    order: Y++,
                    requiredFirstCharacters: [' '],
                    match: m(/^ {2,}\n/),
                    parse: O,
                    react: function (e, t, n) {
                        return E('br', n.key, I);
                    },
                    html: function (e, t, n) {
                        return '<br>';
                    }
                },
                text: {
                    order: Y++,
                    match: m(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                    parse: function (e, t, n) {
                        return { content: e[0] };
                    },
                    react: function (e, t, n) {
                        return e.content;
                    },
                    html: function (e, t, n) {
                        return y(e.content);
                    }
                }
            },
            K = function (e, t, n) {
                if (!t) throw Error('simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`');
                var r,
                    i = (e.Array || W.Array)[t];
                if (!i) throw Error('simple-markdown: outputFor: to join nodes of type `' + t + '` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.');
                var a = function (n, s) {
                    return ((r = s = s || r), Array.isArray(n)) ? i(n, a, s) : e[n.type][t](n, a, s);
                };
                return function (e, t) {
                    return a(e, (r = f(t, n)));
                };
            },
            z = _(W),
            q = function (e, t) {
                return ((t = t || {}).inline = !1), z(e, t);
            },
            Q = function (e, t) {
                var n = M.test(e);
                return ((t = t || {}).inline = !n), z(e, t);
            },
            X = K(W, 'react'),
            J = K(W, 'html'),
            $ = function (e, t) {
                return X(q(e, t), t);
            };
        return {
            defaultRules: W,
            parserFor: _,
            outputFor: K,
            inlineRegex: h,
            blockRegex: p,
            anyScopeRegex: m,
            parseInline: C,
            parseBlock: function (e, t, n) {
                var r = n.inline || !1;
                n.inline = !1;
                var i = e(t + '\n\n', n);
                return (n.inline = r), i;
            },
            markdownToReact: $,
            markdownToHtml: function (e, t) {
                return J(q(e, t), t);
            },
            ReactMarkdown: function (e) {
                var t = {};
                for (var n in e) 'source' !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.children = $(e.source)), E('div', null, t);
            },
            defaultBlockParse: q,
            defaultInlineParse: function (e, t) {
                return ((t = t || {}).inline = !0), z(e, t);
            },
            defaultImplicitParse: Q,
            defaultReactOutput: X,
            defaultHtmlOutput: J,
            preprocess: d,
            sanitizeText: y,
            sanitizeUrl: S,
            unescapeUrl: N,
            htmlTag: v,
            reactElement: E,
            defaultRawParse: z,
            ruleOutput: function (e, t) {
                return (
                    !t && 'undefined' != typeof console && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                    function (n, r, i) {
                        return e[n.type][t](n, r, i);
                    }
                );
            },
            reactFor: function (e) {
                var t = function (n, r) {
                    if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                    for (var i = r.key, a = [], s = null, o = 0; o < n.length; o++) {
                        r.key = '' + o;
                        var l = t(n[o], r);
                        'string' == typeof l && 'string' == typeof s ? ((s += l), (a[a.length - 1] = s)) : (a.push(l), (s = l));
                    }
                    return (r.key = i), a;
                };
                return t;
            },
            htmlFor: function (e) {
                var t = function (n, r) {
                    return ((r = r || {}), Array.isArray(n))
                        ? n
                              .map(function (e) {
                                  return t(e, r);
                              })
                              .join('')
                        : e(n, t, r);
                };
                return t;
            },
            defaultParse: function () {
                return 'undefined' != typeof console && console.warn('defaultParse is deprecated, please use `defaultImplicitParse`'), Q.apply(null, arguments);
            },
            defaultOutput: function () {
                return 'undefined' != typeof console && console.warn('defaultOutput is deprecated, please use `defaultReactOutput`'), X.apply(null, arguments);
            }
        };
    }),
    (e.exports = n());
