Object.defineProperty(t, '__esModule', { value: !0 }), (t.markdownFormatter = void 0), (t.formatToMarkdownString = s);
let r = n(671024),
    i = {
        $_: () => '',
        $b: (e) => '**' + e.join('') + '**',
        $i: (e) => '*' + e.join('') + '*',
        $del: (e) => '~~' + e.join('') + '~~',
        $code: (e) => '`' + e.join('') + '`',
        $link: ([e, ...t]) => '[' + t.join('') + '](' + e + ')',
        $p: (e) => e.join('') + '\n\n'
    };
class a extends r.StringBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, t) {
        this.result += i[e](t, '');
    }
}
function s(e, t, n = a) {
    return 'string' == typeof e ? e : this.bindFormatValues(n, e, t)[0];
}
t.markdownFormatter = {
    format: s,
    builder: a
};
