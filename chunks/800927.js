var i = r(757143);
var a = r(627494);
var s = r(512722),
    o = r.n(s),
    l = r(477660),
    u = r.n(l);
let c = /\n{2,}$/,
    d = /(?:^|\n)( *)$/,
    f = '(?:[*-]|\\d+\\.)',
    _ = '(%INDENT_CAPTURE_PATTERN%)(' + f + ') +',
    h = RegExp('^' + _.replace('%INDENT_CAPTURE_PATTERN%', ' *')),
    p = _ + '[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%' + f + ' )[^\\n]*)*(\n|$)',
    m = / *\n$/,
    g = RegExp('^( *)(' + f + ') [\\s\\S]+?(?:\\n(?! )(?!\\1' + f + ' )|$)'),
    E = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    v = 10,
    I = 1,
    T = 1000000000,
    b = (e) => e.map((e) => ('text' === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, '')), e)),
    y = {
        ...u().defaultRules.list,
        requiredFirstCharacters: ' *-0123456789'.split(''),
        match: (e, n) => {
            if (!n.allowList || n._listLevel >= v + 1) return null;
            let r = null == n.prevCapture ? '' : n.prevCapture[0],
                i = d.exec(r);
            return null == i || E.test(i[0]) ? null : g.exec(e);
        },
        parse: (e, n, r) => {
            let i = e[2],
                a = i.length > 1,
                s = a ? Math.min(T, Math.max(I, +i)) : void 0,
                l = e[0].replace(c, '\n'),
                u = h.exec(l),
                d = null != u ? u[0].length : 0,
                f = null != u ? u[1].length : 0,
                _ = ' {'.concat(f, ',').concat(f + 1, '}'),
                g = RegExp(p.replaceAll('%INDENT_CAPTURE_PATTERN%', _), 'gm'),
                E = RegExp('^ {1,' + d + '}', 'gm'),
                v = l.match(g);
            o()(null != v, 'markup list items can not be parsed.');
            let y = !1;
            return {
                ordered: a,
                start: s,
                items: v.map((e, i) => {
                    let a;
                    let s = e.replace(h, '').replace(E, ''),
                        o = i === v.length - 1,
                        l = -1 !== s.indexOf('\n\n') || (o && y);
                    y = l;
                    let u = r.inline,
                        c = r._list,
                        d = r._listLevel;
                    (r._list = !0), (r._listLevel = (null != d ? d : 0) + 1), l ? ((r.inline = !1), (a = s.replace(m, '\n\n'))) : ((r.inline = !0), (a = s.replace(m, '')));
                    let f = b(
                        n(a, {
                            ...r,
                            allowHeading: !1
                        })
                    );
                    return (r.inline = u), (r._list = c), (r._listLevel = d), f;
                })
            };
        }
    };
n.Z = y;
