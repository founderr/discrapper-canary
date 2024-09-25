var r = n(757143);
var i = n(627494);
var a = n(512722),
    o = n.n(a),
    s = n(302454),
    l = n.n(s);
let u = /\n{2,}$/,
    c = /(?:^|\n)( *)$/,
    d = '(?:[*-]|\\d+\\.)',
    _ = '(%INDENT_CAPTURE_PATTERN%)(' + d + ') +',
    E = RegExp('^' + _.replace('%INDENT_CAPTURE_PATTERN%', ' *')),
    f = _ + '[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%' + d + ' )[^\\n]*)*(\n|$)',
    h = / *\n$/,
    p = RegExp('^( *)(' + d + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + d + ' )|$)'),
    m = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    I = 10,
    T = 1,
    g = 1000000000,
    S = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    A = {
        ...l().defaultRules.list,
        requiredFirstCharacters: ' *-0123456789'.split(''),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= I + 1) return null;
            let n = null == t.prevCapture ? '' : t.prevCapture[0],
                r = c.exec(n);
            return null == r || m.test(r[0]) ? null : p.exec(e);
        },
        parse: (e, t, n) => {
            let r = e[2],
                i = r.length > 1,
                a = i ? Math.min(g, Math.max(T, +r)) : void 0,
                s = e[0].replace(u, '\n'),
                l = E.exec(s),
                c = null != l ? l[0].length : 0,
                d = null != l ? l[1].length : 0,
                _ = ' {'.concat(d, ',').concat(d + 1, '}'),
                p = RegExp(f.replaceAll('%INDENT_CAPTURE_PATTERN%', _), 'gm'),
                m = RegExp('^ {1,' + c + '}', 'gm'),
                I = s.match(p);
            o()(null != I, 'markup list items can not be parsed.');
            let A = !1;
            return {
                ordered: i,
                start: a,
                items: I.map((e, r) => {
                    let i;
                    let a = e.replace(E, '').replace(m, ''),
                        o = r === I.length - 1,
                        s = -1 !== a.indexOf('\n\n') || (o && A);
                    A = s;
                    let l = n.inline,
                        u = n._list,
                        c = n._listLevel;
                    (n._list = !0), (n._listLevel = (null != c ? c : 0) + 1), s ? ((n.inline = !1), (i = a.replace(h, '\n\n'))) : ((n.inline = !0), (i = a.replace(h, '')));
                    let d = S(
                        t(i, {
                            ...n,
                            allowHeading: !1
                        })
                    );
                    return (n.inline = l), (n._list = u), (n._listLevel = c), d;
                })
            };
        }
    };
t.Z = A;
