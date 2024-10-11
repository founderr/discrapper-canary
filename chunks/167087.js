Object.defineProperty(t, '__esModule', { value: !0 }), (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (t.formatReact = s), (t.makeReactFormatter = o);
let r = n(470079),
    i = n(203723),
    a = r.createElement;
t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $_: () => '',
    $b: (e, t) => a('strong', { key: t }, e),
    $i: (e, t) => a('em', { key: t }, e),
    $del: (e, t) => a('del', { key: t }, e),
    $code: (e, t) => a('code', { key: t }, e),
    $link: ([e, ...t], n) =>
        a(
            'a',
            {
                href: e,
                key: n
            },
            t
        ),
    $p: (e, t) => a('p', { key: t }, e)
};
function s(e, t, n) {
    return 'string' == typeof e ? [e] : this.bindFormatValues(n, e, t);
}
function o(e) {
    var t;
    return {
        format: s,
        builder:
            ((t = e),
            class extends i.FormatBuilder {
                constructor() {
                    super(...arguments), (this._nodeKey = 0), (this.result = []);
                }
                pushRichTextTag(e, n) {
                    this.result.push(t[e](n, `${this._nodeKey++}`));
                }
                pushLiteralText(e) {
                    this.result.push(e);
                }
                pushObject(e) {
                    this.result.push(e);
                }
                finish() {
                    return this.result;
                }
            })
    };
}
t.reactFormatter = o(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
