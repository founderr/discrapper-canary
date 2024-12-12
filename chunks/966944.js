Object.defineProperty(n, '__esModule', { value: !0 }), (n.markdownFormatter = void 0), (n.formatToMarkdownString = o);
let i = r(166827),
    a = {
        $b: (e) => '**' + e.join('') + '**',
        $i: (e) => '*' + e.join('') + '*',
        $del: (e) => '~~' + e.join('') + '~~',
        $code: (e) => '`' + e.join('') + '`',
        $link: (e, n, [r]) => '[' + e.join('') + '](' + r + ')',
        $p: (e) => e.join('') + '\n\n'
    };
class s extends i.StringBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, n, r) {
        this.result += a[e](n, '', r);
    }
}
function o(e, n, r = s) {
    return 'string' == typeof e ? e : this.bindFormatValues(r, e, n)[0];
}
n.markdownFormatter = {
    format: o,
    builder: s
};
