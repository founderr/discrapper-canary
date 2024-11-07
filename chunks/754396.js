n.d(t, {
    Y: function () {
        return _;
    }
});
var r = n(961742),
    i = n(27273),
    a = n(262068);
let s = {};
async function o(e) {
    let t = s[e];
    if (null != t) return t;
    let n = await fetch(e);
    return (
        (t = {
            url: e,
            cssText: await n.text()
        }),
        (s[e] = t),
        t
    );
}
async function l(e, t) {
    let n = e.cssText,
        r = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (n.match(/url\([^)]+\)/g) || []).map(async (a) => {
            let s = a.replace(r, '$1');
            return !s.startsWith('https://') && (s = new URL(s, e.url).href), (0, i.cd)(s, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(a, `url(${e})`)), [a, e]));
        })
    ).then(() => n);
}
function u(e) {
    if (null == e) return [];
    let t = [],
        n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ''),
        r = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    for (;;) {
        let e = r.exec(n);
        if (null === e) break;
        t.push(e[0]);
    }
    n = n.replace(r, '');
    let i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        a = RegExp('((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})', 'gi');
    for (;;) {
        let e = i.exec(n);
        if (null === e) {
            if (null === (e = a.exec(n))) break;
            i.lastIndex = a.lastIndex;
        } else a.lastIndex = i.lastIndex;
        t.push(e[0]);
    }
    return t;
}
async function c(e, t) {
    let n = [],
        i = [];
    return (
        e.forEach((n) => {
            if ('cssRules' in n)
                try {
                    (0, r.qo)(n.cssRules || []).forEach((e, r) => {
                        if (e.type === CSSRule.IMPORT_RULE) {
                            let a = r + 1,
                                s = e.href,
                                c = o(s)
                                    .then((e) => l(e, t))
                                    .then((e) =>
                                        u(e).forEach((e) => {
                                            try {
                                                n.insertRule(e, e.startsWith('@import') ? (a += 1) : n.cssRules.length);
                                            } catch (t) {
                                                console.error('Error inserting rule from remote css', {
                                                    rule: e,
                                                    error: t
                                                });
                                            }
                                        })
                                    )
                                    .catch((e) => {
                                        console.error('Error loading remote css', e.toString());
                                    });
                            i.push(c);
                        }
                    });
                } catch (a) {
                    let r = e.find((e) => null == e.href) || document.styleSheets[0];
                    null != n.href &&
                        i.push(
                            o(n.href)
                                .then((e) => l(e, t))
                                .then((e) =>
                                    u(e).forEach((e) => {
                                        r.insertRule(e, n.cssRules.length);
                                    })
                                )
                                .catch((e) => {
                                    console.error('Error loading remote stylesheet', e);
                                })
                        ),
                        console.error('Error inlining remote css file', a);
                }
        }),
        Promise.all(i).then(
            () => (
                e.forEach((e) => {
                    if ('cssRules' in e)
                        try {
                            (0, r.qo)(e.cssRules || []).forEach((e) => {
                                n.push(e);
                            });
                        } catch (t) {
                            console.error(`Error while reading CSS rules from ${e.href}`, t);
                        }
                }),
                n
            )
        )
    );
}
async function d(e, t) {
    if (null == e.ownerDocument) throw Error('Provided element is not within a Document');
    let n = (0, r.qo)(e.ownerDocument.styleSheets);
    return (await c(n, t)).filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => (0, a.w7)(e.style.getPropertyValue('src')));
}
async function f(e, t) {
    let n = await d(e, t);
    return (
        await Promise.all(
            n.map((e) => {
                let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return (0, a.vg)(e.cssText, n, t);
            })
        )
    ).join('\n');
}
async function _(e, t) {
    let n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await f(e, t);
    if (n) {
        let t = document.createElement('style'),
            r = document.createTextNode(n);
        t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
    }
}
