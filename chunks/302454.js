!(function (t, n) {
    e.exports = n();
})(0, function () {
    var e = /\r\n?/g,
        t = /\t/g,
        n = /\f/g,
        r = function (r) {
            return r.replace(e, '\n').replace(n, '').replace(t, '    ');
        },
        i = function (e, t) {
            var n = e || {};
            if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n;
        },
        a = function (e, t) {
            var n,
                a = Object.keys(e).filter(function (t) {
                    var n = e[t];
                    if (null == n || null == n.match) return !1;
                    var r = n.order;
                    return ('number' != typeof r || !isFinite(r)) && 'undefined' != typeof console && console.warn('simple-markdown: Invalid order for rule `' + t + '`: ' + String(r)), !0;
                });
            a.sort(function (t, n) {
                var r = e[t],
                    i = e[n],
                    a = r.order,
                    o = i.order;
                if (a !== o) return a - o;
                var s = r.quality ? 0 : 1,
                    l = i.quality ? 0 : 1;
                if (s !== l) return s - l;
                if (t < n) return -1;
                if (t > n) return 1;
                else return 0;
            });
            for (var o = new Map(), s = [], l = 0; l < a.length; l++) {
                var u = a[l],
                    c = e[u].requiredFirstCharacters;
                null == c
                    ? s.push(u)
                    : c.map((e) => {
                          let t = e.charCodeAt(0);
                          !o.has(t) && o.set(t, []), o.get(t).push(u);
                      });
            }
            var d = function (t, r) {
                    var i = [];
                    for (n = r = r || n; t; ) {
                        for (var l = null, u = null, c = null, _ = -100000, E = 100000, f = [o.get(t.charCodeAt(0)), s], h = 0; h < f.length; h++) {
                            var p = f[h];
                            if (null != p)
                                for (var m = 0; m < p.length; m++) {
                                    var I = p[m],
                                        T = e[I],
                                        g = T.order;
                                    if (g > E) break;
                                    var S = null == r.prevCapture ? '' : r.prevCapture[0],
                                        A = T.match(t, r, S);
                                    if (A) {
                                        var v = T.quality ? T.quality(A, r, S) : 0;
                                        (g < E || v > _) && ((l = I), (u = T), (c = A), (_ = v), (E = g));
                                    }
                                }
                        }
                        if (null == u || null == c) throw Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + a[a.length - 1] + "'. It seems to not match the following source:\n" + t);
                        if (c.index) throw Error('`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?');
                        var N = u.parse(c, d, r);
                        Array.isArray(N) ? Array.prototype.push.apply(i, N) : (null == N.type && (N.type = l), i.push(N)), (r.prevCapture = c), (t = t.substring(r.prevCapture[0].length));
                    }
                    return i;
                },
                _ = function (e, a) {
                    return !(n = i(a, t)).inline && !n.disableAutoBlockNewlines && (e += '\n\n'), (n.prevCapture = null), d(r(e), n);
                };
            return (d.rules = e), (_.rules = e), _;
        },
        o = function (e) {
            var t = function (t, n) {
                return n.inline ? e.exec(t) : null;
            };
            return (t.regex = e), t;
        },
        s = function (e) {
            var t = function (t, n) {
                return n.inline ? null : e.exec(t);
            };
            return (t.regex = e), t;
        },
        l = function (e) {
            var t = function (t, n) {
                return e.exec(t);
            };
            return (t.regex = e), t;
        },
        u = ('function' == typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
        c = function (e, t, n) {
            return {
                $$typeof: u,
                type: e,
                key: null == t ? void 0 : t,
                ref: null,
                props: n,
                _owner: null
            };
        },
        d = function (e, t, n, r) {
            r = void 0 === r || r;
            var i = '';
            for (var a in (n = n || {})) {
                var o = n[a];
                Object.prototype.hasOwnProperty.call(n, a) && o && (i += ' ' + p(a) + '="' + p(o) + '"');
            }
            var s = '<' + e + i + '>';
            return r ? s + t + '</' + e + '>' : s;
        },
        _ = {},
        E = function (e) {
            if (null == e) return null;
            try {
                var t = new URL(e, 'https://localhost').protocol;
                if (0 === t.indexOf('javascript:') || 0 === t.indexOf('vbscript:') || 0 === t.indexOf('data:')) return null;
            } catch (e) {
                return null;
            }
            return e;
        },
        f = /[<>&"']/g,
        h = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
            '`': '&#96;'
        },
        p = function (e) {
            return String(e).replace(f, function (e) {
                return h[e];
            });
        },
        m = /\\([^0-9A-Za-z\s])/g,
        I = function (e) {
            return e.replace(m, '$1');
        },
        T = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !0;
            var i = e(t, n);
            return (n.inline = r), i;
        },
        g = function (e, t, n) {
            var r = n.inline || !1;
            n.inline = !1;
            var i = e(t + '\n\n', n);
            return (n.inline = r), i;
        },
        S = function (e, t, n) {
            return { content: T(t, e[1], n) };
        },
        A = function () {
            return {};
        },
        v = '(?:[*+-]|\\d+\\.)',
        N = '( *)(' + v + ') +',
        O = RegExp('^' + N),
        R = RegExp(N + '[^\\n]*(?:\\n(?!\\1' + v + ' )[^\\n]*)*(\n|$)', 'gm'),
        C = /\n{2,}$/,
        y = /^ (?= *`)|(` *) $/g,
        b = C,
        L = / *\n+$/,
        D = RegExp('^( *)(' + v + ') [\\s\\S]+?(?:\n{2,}(?! )(?!\\1' + v + ' )\\n*|\\s*\n*$)'),
        M = /(?:^|\n)( *)$/,
        P = (function () {
            var e = /^ *\| *| *\| *$/g,
                t = / *$/,
                n = /^ *-+: *$/,
                r = /^ *:-+: *$/,
                i = /^ *:-+ *$/,
                a = function (e) {
                    if (n.test(e)) return 'right';
                    if (r.test(e)) return 'center';
                    if (i.test(e)) return 'left';
                    else return null;
                },
                o = function (t, n, r, i) {
                    return i && (t = t.replace(e, '')), t.trim().split('|').map(a);
                },
                s = function (e, n, r, i) {
                    var a = r.inTable;
                    r.inTable = !0;
                    var o = n(e.trim(), r);
                    r.inTable = a;
                    var s = [[]];
                    return (
                        o.forEach(function (e, n) {
                            'tableSeparator' === e.type ? (!i || (0 !== n && n !== o.length - 1)) && s.push([]) : ('text' === e.type && (null == o[n + 1] || 'tableSeparator' === o[n + 1].type) && (e.content = e.content.replace(t, '')), s[s.length - 1].push(e));
                        }),
                        s
                    );
                },
                l = function (e, t, n, r) {
                    return e
                        .trim()
                        .split('\n')
                        .map(function (e) {
                            return s(e, t, n, r);
                        });
                },
                u = function (e) {
                    return function (t, n, r) {
                        r.inline = !0;
                        var i = s(t[1], n, r, e),
                            a = o(t[2], n, r, e),
                            u = l(t[3], n, r, e);
                        return (
                            (r.inline = !1),
                            {
                                type: 'table',
                                header: i,
                                align: a,
                                cells: u
                            }
                        );
                    };
                };
            return {
                parseTable: u(!0),
                parseNpTable: u(!1),
                TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
                NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/
            };
        })(),
        U = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
        w = '\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*',
        x = /mailto:/i,
        G = function (e, t, n) {
            var r = (e[2] || e[1]).replace(/\s+/g, ' ').toLowerCase();
            if (t._defs && t._defs[r]) {
                var i = t._defs[r];
                (n.target = i.target), (n.title = i.title);
            }
            return (t._refs = t._refs || {}), (t._refs[r] = t._refs[r] || []), t._refs[r].push(n), n;
        },
        k = !1;
    try {
        RegExp('(?<=a)'), RegExp('(?<!a)'), (k = !0);
    } catch (e) {}
    var B = 0,
        F = {
            Array: {
                react: function (e, t, n) {
                    for (var r = n.key, i = [], a = 0, o = 0; a < e.length; a++, o++) {
                        n.key = '' + a;
                        var s = e[a];
                        if ('text' === s.type)
                            for (
                                s = {
                                    type: 'text',
                                    content: s.content
                                };
                                a + 1 < e.length && 'text' === e[a + 1].type;
                                a++
                            )
                                s.content += e[a + 1].content;
                        i.push(t(s, n));
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
                order: B++,
                match: s(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        level: e[1].length,
                        content: T(t, e[2].trim(), n)
                    };
                },
                react: function (e, t, n) {
                    return c('h' + e.level, n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('h' + e.level, t(e.content, n));
                }
            },
            nptable: {
                order: B++,
                match: s(P.NPTABLE_REGEX),
                parse: P.parseNpTable,
                react: null,
                html: null
            },
            lheading: {
                order: B++,
                match: s(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        type: 'heading',
                        level: '=' === e[2] ? 1 : 2,
                        content: T(t, e[1], n)
                    };
                },
                react: null,
                html: null
            },
            hr: {
                order: B++,
                match: s(/^( *[-*_]){3,} *(?:\n *)+\n/),
                parse: A,
                react: function (e, t, n) {
                    return c('hr', n.key, _);
                },
                html: function (e, t, n) {
                    return '<hr>';
                }
            },
            codeBlock: {
                order: B++,
                match: s(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),
                parse: function (e, t, n) {
                    return {
                        lang: void 0,
                        content: e[0].replace(/^    /gm, '').replace(/\n+$/, '')
                    };
                },
                react: function (e, t, n) {
                    var r = e.lang ? 'markdown-code-' + e.lang : void 0;
                    return c('pre', n.key, {
                        children: c('code', null, {
                            className: r,
                            children: e.content
                        })
                    });
                },
                html: function (e, t, n) {
                    var r = e.lang ? 'markdown-code-' + e.lang : void 0,
                        i = d('code', p(e.content), { class: r });
                    return d('pre', i);
                }
            },
            fence: {
                order: B++,
                match: s(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),
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
                order: B++,
                match: s(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),
                parse: function (e, t, n) {
                    return { content: t(e[0].replace(/^ *> ?/gm, ''), n) };
                },
                react: function (e, t, n) {
                    return c('blockquote', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('blockquote', t(e.content, n));
                }
            },
            list: {
                order: B++,
                match: function (e, t) {
                    var n = null == t.prevCapture ? '' : t.prevCapture[0],
                        r = M.exec(n),
                        i = t._list || !t.inline;
                    return r && i ? ((e = r[1] + e), D.exec(e)) : null;
                },
                parse: function (e, t, n) {
                    var r = e[2],
                        i = r.length > 1,
                        a = i ? +r : void 0,
                        o = e[0].replace(b, '\n').match(R),
                        s = !1;
                    return {
                        ordered: i,
                        start: a,
                        items: o.map(function (e, r) {
                            var i,
                                a = O.exec(e),
                                l = RegExp('^ {1,' + (a ? a[0].length : 0) + '}', 'gm'),
                                u = e.replace(l, '').replace(O, ''),
                                c = r === o.length - 1,
                                d = -1 !== u.indexOf('\n\n') || (c && s);
                            s = d;
                            var _ = n.inline,
                                E = n._list;
                            (n._list = !0), d ? ((n.inline = !1), (i = u.replace(L, '\n\n'))) : ((n.inline = !0), (i = u.replace(L, '')));
                            var f = t(i, n);
                            return (n.inline = _), (n._list = E), f;
                        })
                    };
                },
                react: function (e, t, n) {
                    return c(e.ordered ? 'ol' : 'ul', n.key, {
                        start: e.start,
                        children: e.items.map(function (e, r) {
                            return c('li', '' + r, { children: t(e, n) });
                        })
                    });
                },
                html: function (e, t, n) {
                    var r = e.items
                        .map(function (e) {
                            return d('li', t(e, n));
                        })
                        .join('');
                    return d(e.ordered ? 'ol' : 'ul', r, { start: e.start });
                }
            },
            def: {
                order: B++,
                match: s(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),
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
                order: B++,
                match: s(P.TABLE_REGEX),
                parse: P.parseTable,
                react: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? {} : { textAlign: e.align[t] };
                        },
                        i = e.header.map(function (e, i) {
                            return c('th', '' + i, {
                                style: r(i),
                                scope: 'col',
                                children: t(e, n)
                            });
                        }),
                        a = e.cells.map(function (e, i) {
                            return c('tr', '' + i, {
                                children: e.map(function (e, i) {
                                    return c('td', '' + i, {
                                        style: r(i),
                                        children: t(e, n)
                                    });
                                })
                            });
                        });
                    return c('table', n.key, {
                        children: [c('thead', 'thead', { children: c('tr', null, { children: i }) }), c('tbody', 'tbody', { children: a })]
                    });
                },
                html: function (e, t, n) {
                    var r = function (t) {
                            return null == e.align[t] ? '' : 'text-align:' + e.align[t] + ';';
                        },
                        i = e.header
                            .map(function (e, i) {
                                return d('th', t(e, n), {
                                    style: r(i),
                                    scope: 'col'
                                });
                            })
                            .join(''),
                        a = e.cells
                            .map(function (e) {
                                var i = e
                                    .map(function (e, i) {
                                        return d('td', t(e, n), { style: r(i) });
                                    })
                                    .join('');
                                return d('tr', i);
                            })
                            .join(''),
                        o = d('thead', d('tr', i)),
                        s = d('tbody', a);
                    return d('table', o + s);
                }
            },
            newline: {
                order: B++,
                requiredFirstCharacters: ['\n'],
                match: s(/^(?:\n *)*\n/),
                parse: A,
                react: function (e, t, n) {
                    return '\n';
                },
                html: function (e, t, n) {
                    return '\n';
                }
            },
            paragraph: {
                order: B++,
                match: s(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),
                parse: S,
                react: function (e, t, n) {
                    return c('div', n.key, {
                        className: 'paragraph',
                        children: t(e.content, n)
                    });
                },
                html: function (e, t, n) {
                    var r = { class: 'paragraph' };
                    return d('div', t(e.content, n), r);
                }
            },
            escape: {
                order: B++,
                requiredFirstCharacters: ['\\'],
                match: o(/^\\([^0-9A-Za-z\s])/),
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
                order: B++,
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
                order: B++,
                requiredFirstCharacters: ['<'],
                match: o(/^<([^: >]+:\/[^ >]+)>/),
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
                order: B++,
                match: o(/^<([^ >]+@[^ >]+)>/),
                parse: function (e, t, n) {
                    var r = e[1],
                        i = e[1];
                    return (
                        !x.test(i) && (i = 'mailto:' + i),
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
                order: B++,
                requiredFirstCharacters: ['h'],
                match: o(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),
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
                order: B++,
                requiredFirstCharacters: ['['],
                match: o(RegExp('^\\[(' + U + ')\\]\\(' + w + '\\)')),
                parse: function (e, t, n) {
                    return {
                        content: t(e[1], n),
                        target: I(e[2]),
                        title: e[3]
                    };
                },
                react: function (e, t, n) {
                    return c('a', n.key, {
                        href: E(e.target),
                        title: e.title,
                        children: t(e.content, n)
                    });
                },
                html: function (e, t, n) {
                    var r = {
                        href: E(e.target),
                        title: e.title
                    };
                    return d('a', t(e.content, n), r);
                }
            },
            image: {
                order: B++,
                match: o(RegExp('^!\\[(' + U + ')\\]\\(' + w + '\\)')),
                parse: function (e, t, n) {
                    return {
                        alt: e[1],
                        target: I(e[2]),
                        title: e[3]
                    };
                },
                react: function (e, t, n) {
                    return c('img', n.key, {
                        src: E(e.target),
                        alt: e.alt,
                        title: e.title
                    });
                },
                html: function (e, t, n) {
                    return d(
                        'img',
                        '',
                        {
                            src: E(e.target),
                            alt: e.alt,
                            title: e.title
                        },
                        !1
                    );
                }
            },
            reflink: {
                order: B++,
                match: o(RegExp('^\\[(' + U + ')\\]\\s*\\[([^\\]]*)\\]')),
                parse: function (e, t, n) {
                    return G(e, n, {
                        type: 'link',
                        content: t(e[1], n)
                    });
                },
                react: null,
                html: null
            },
            refimage: {
                order: B++,
                match: o(RegExp('^!\\[(' + U + ')\\]\\s*\\[([^\\]]*)\\]')),
                parse: function (e, t, n) {
                    return G(e, n, {
                        type: 'image',
                        alt: e[1]
                    });
                },
                react: null,
                html: null
            },
            em: {
                order: B,
                match: o(RegExp((k ? '^\\b_((?:_[_(]|\\\\[\\s\\S]|(?<!_)\\B_\\B|[^\\\\_])+?)_(?![(])\\b' : '^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b') + '|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)')),
                quality: function (e) {
                    return e[0].length + 0.2;
                },
                parse: function (e, t, n) {
                    return { content: t(e[2] || e[1], n) };
                },
                react: function (e, t, n) {
                    return c('em', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('em', t(e.content, n));
                }
            },
            strong: {
                order: B,
                requiredFirstCharacters: ['*'],
                match: o(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),
                quality: function (e) {
                    return e[0].length + 0.1;
                },
                parse: S,
                react: function (e, t, n) {
                    return c('strong', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('strong', t(e.content, n));
                }
            },
            u: {
                order: B++,
                requiredFirstCharacters: ['_'],
                match: o(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),
                quality: function (e) {
                    return e[0].length;
                },
                parse: S,
                react: function (e, t, n) {
                    return c('u', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('u', t(e.content, n));
                }
            },
            del: {
                order: B++,
                requiredFirstCharacters: ['~'],
                match: o(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/),
                parse: S,
                react: function (e, t, n) {
                    return c('del', n.key, { children: t(e.content, n) });
                },
                html: function (e, t, n) {
                    return d('del', t(e.content, n));
                }
            },
            inlineCode: {
                order: B++,
                requiredFirstCharacters: ['`'],
                match: o(/^(`+)([\s\S]*?[^`])\1(?!`)/),
                parse: function (e, t, n) {
                    return { content: e[2].replace(y, '$1') };
                },
                react: function (e, t, n) {
                    return c('code', n.key, { children: e.content });
                },
                html: function (e, t, n) {
                    return d('code', p(e.content));
                }
            },
            br: {
                order: B++,
                requiredFirstCharacters: [' '],
                match: l(/^ {2,}\n/),
                parse: A,
                react: function (e, t, n) {
                    return c('br', n.key, _);
                },
                html: function (e, t, n) {
                    return '<br>';
                }
            },
            text: {
                order: B++,
                match: l(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),
                parse: function (e, t, n) {
                    return { content: e[0] };
                },
                react: function (e, t, n) {
                    return e.content;
                },
                html: function (e, t, n) {
                    return p(e.content);
                }
            }
        },
        Z = function (e, t) {
            return (
                !t && 'undefined' != typeof console && console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument."),
                function (n, r, i) {
                    return e[n.type][t](n, r, i);
                }
            );
        },
        V = function (e) {
            var t = function (n, r) {
                if (((r = r || {}), !Array.isArray(n))) return e(n, t, r);
                for (var i = r.key, a = [], o = null, s = 0; s < n.length; s++) {
                    r.key = '' + s;
                    var l = t(n[s], r);
                    'string' == typeof l && 'string' == typeof o ? ((o += l), (a[a.length - 1] = o)) : (a.push(l), (o = l));
                }
                return (r.key = i), a;
            };
            return t;
        },
        H = function (e) {
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
        Y = function (e, t, n) {
            if (!t) throw Error('simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`');
            var r,
                a = (e.Array || F.Array)[t];
            if (!a) throw Error('simple-markdown: outputFor: to join nodes of type `' + t + '` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.');
            var o = a,
                s = function (n, i) {
                    return ((r = i = i || r), Array.isArray(n)) ? o(n, s, i) : e[n.type][t](n, s, i);
                };
            return function (e, t) {
                return s(e, (r = i(t, n)));
            };
        },
        j = a(F),
        W = function (e, t) {
            return ((t = t || {}).inline = !1), j(e, t);
        },
        K = function (e, t) {
            return ((t = t || {}).inline = !0), j(e, t);
        },
        z = function (e, t) {
            var n = C.test(e);
            return ((t = t || {}).inline = !n), j(e, t);
        },
        q = Y(F, 'react'),
        Q = Y(F, 'html'),
        X = function (e, t) {
            return q(W(e, t), t);
        },
        $ = function (e) {
            var t = {};
            for (var n in e) 'source' !== n && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.children = X(e.source)), c('div', null, t);
        };
    return {
        defaultRules: F,
        parserFor: a,
        outputFor: Y,
        inlineRegex: o,
        blockRegex: s,
        anyScopeRegex: l,
        parseInline: T,
        parseBlock: g,
        markdownToReact: X,
        markdownToHtml: function (e, t) {
            return Q(W(e, t), t);
        },
        ReactMarkdown: $,
        defaultBlockParse: W,
        defaultInlineParse: K,
        defaultImplicitParse: z,
        defaultReactOutput: q,
        defaultHtmlOutput: Q,
        preprocess: r,
        sanitizeText: p,
        sanitizeUrl: E,
        unescapeUrl: I,
        htmlTag: d,
        reactElement: c,
        defaultRawParse: j,
        ruleOutput: Z,
        reactFor: V,
        htmlFor: H,
        defaultParse: function () {
            return 'undefined' != typeof console && console.warn('defaultParse is deprecated, please use `defaultImplicitParse`'), z.apply(null, arguments);
        },
        defaultOutput: function () {
            return 'undefined' != typeof console && console.warn('defaultOutput is deprecated, please use `defaultReactOutput`'), q.apply(null, arguments);
        }
    };
});
