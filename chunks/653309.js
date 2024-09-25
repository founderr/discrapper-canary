n.d(t, {
    U: function () {
        return E;
    },
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(390547);
var a = n(411104);
var o = n(735250);
n(470079);
var s = n(120356),
    l = n.n(s),
    u = n(887490),
    c = n(631853),
    d = n(896061),
    _ = n(705418);
let E = {
    strong: c.bold,
    em: c.italics,
    u: c.underline,
    s: c.strikethrough,
    inlineCode: c.inlineCode,
    link: c.fakeLink,
    url: c.fakeLink,
    autolink: c.fakeLink,
    spoiler: l()(_.spoilerContent, _.spoilerMarkdownContent, _.obscuredTextContent, c.spoiler),
    staticRouteLink: c.fakeLink,
    syntaxBefore: c.syntaxBefore,
    syntaxAfter: c.syntaxAfter,
    codeBlockText: c.codeBlockText,
    codeBlockSyntax: c.codeBlockSyntax,
    codeBlockLang: c.codeBlockLang,
    subtext: c.subtext
};
function f(e, t) {
    let n;
    let { attributes: r, children: i, leaf: a, text: s } = t,
        _ = !1,
        [f] = u.bN.node(e, u.C0.parent(u.bN.findPath(e, s)));
    switch (u.bN.isEditor(f) ? 'editor' : f.type) {
        case 'line':
        case 'blockQuote': {
            _ = void 0;
            let e = Object.entries(a)
                .filter((e) => {
                    let [t] = e;
                    return 'text' !== t;
                })
                .flatMap((e) => {
                    let [t, n] = e;
                    if ('hljsTypes' === t) return n;
                    if (!0 === n) {
                        if ((('codeBlockLang' === t || 'codeBlockSyntax' === t) && (_ = !1), t.startsWith('before_') || t.startsWith('after_'))) return [c[t]];
                        if (t in E) return [E[t]];
                        throw Error('Slate: Unknown decoration attribute: '.concat(t));
                    }
                })
                .filter((e) => null != e)
                .join(' ');
            n = l()(e, { [c.syntaxOverride]: '||' === a.text || '\\' === a.text });
        }
    }
    return (
        (n = l()(n, { [d.emptyText]: '' === s.text })),
        (0, o.jsx)('span', {
            ...r,
            className: n,
            spellCheck: _,
            children: i
        })
    );
}
