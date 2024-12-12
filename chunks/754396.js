r.d(n, {
    Y: function () {
        return p;
    }
});
var i = r(961742),
    a = r(27273),
    s = r(262068);
let o = {};
async function l(e) {
    let n = o[e];
    if (null != n) return n;
    let r = await fetch(e);
    return (
        (n = {
            url: e,
            cssText: await r.text()
        }),
        (o[e] = n),
        n
    );
}
async function u(e, n) {
    let r = e.cssText,
        i = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (r.match(/url\([^)]+\)/g) || []).map(async (s) => {
            let o = s.replace(i, '$1');
            return !o.startsWith('https://') && (o = new URL(o, e.url).href), (0, a.cd)(o, n.fetchRequestInit, ({ result: e }) => ((r = r.replace(s, `url(${e})`)), [s, e]));
        })
    ).then(() => r);
}
function c(e) {
    if (null == e) return [];
    let n = [],
        r = /(\/\*[\s\S]*?\*\/)/gi,
        i = e.replace(r, ''),
        a = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    for (;;) {
        let e = a.exec(i);
        if (null === e) break;
        n.push(e[0]);
    }
    i = i.replace(a, '');
    let s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        o = RegExp('((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})', 'gi');
    for (;;) {
        let e = s.exec(i);
        if (null === e) {
            if (null === (e = o.exec(i))) break;
            s.lastIndex = o.lastIndex;
        } else o.lastIndex = s.lastIndex;
        n.push(e[0]);
    }
    return n;
}
async function d(e, n) {
    let r = [],
        a = [];
    return (
        e.forEach((r) => {
            if ('cssRules' in r)
                try {
                    (0, i.qo)(r.cssRules || []).forEach((e, i) => {
                        if (e.type === CSSRule.IMPORT_RULE) {
                            let s = i + 1,
                                o = e.href,
                                d = l(o)
                                    .then((e) => u(e, n))
                                    .then((e) =>
                                        c(e).forEach((e) => {
                                            try {
                                                r.insertRule(e, e.startsWith('@import') ? (s += 1) : r.cssRules.length);
                                            } catch (n) {
                                                console.error('Error inserting rule from remote css', {
                                                    rule: e,
                                                    error: n
                                                });
                                            }
                                        })
                                    )
                                    .catch((e) => {
                                        console.error('Error loading remote css', e.toString());
                                    });
                            a.push(d);
                        }
                    });
                } catch (s) {
                    let i = e.find((e) => null == e.href) || document.styleSheets[0];
                    null != r.href &&
                        a.push(
                            l(r.href)
                                .then((e) => u(e, n))
                                .then((e) =>
                                    c(e).forEach((e) => {
                                        i.insertRule(e, r.cssRules.length);
                                    })
                                )
                                .catch((e) => {
                                    console.error('Error loading remote stylesheet', e);
                                })
                        ),
                        console.error('Error inlining remote css file', s);
                }
        }),
        Promise.all(a).then(
            () => (
                e.forEach((e) => {
                    if ('cssRules' in e)
                        try {
                            (0, i.qo)(e.cssRules || []).forEach((e) => {
                                r.push(e);
                            });
                        } catch (n) {
                            console.error(`Error while reading CSS rules from ${e.href}`, n);
                        }
                }),
                r
            )
        )
    );
}
function f(e) {
    return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => (0, s.w7)(e.style.getPropertyValue('src')));
}
async function _(e, n) {
    if (null == e.ownerDocument) throw Error('Provided element is not within a Document');
    let r = (0, i.qo)(e.ownerDocument.styleSheets);
    return f(await d(r, n));
}
async function h(e, n) {
    let r = await _(e, n);
    return (
        await Promise.all(
            r.map((e) => {
                let r = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return (0, s.vg)(e.cssText, r, n);
            })
        )
    ).join('\n');
}
async function p(e, n) {
    let r = null != n.fontEmbedCSS ? n.fontEmbedCSS : n.skipFonts ? null : await h(e, n);
    if (r) {
        let n = document.createElement('style'),
            i = document.createTextNode(r);
        n.appendChild(i), e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n);
    }
}
