var r, i;
Object.defineProperty(t, '__esModule', { value: !0 }), (t.astFormatter = t.RichTextNodeType = void 0), (t.formatToAst = l);
let a = n(203723);
((i = r || (t.RichTextNodeType = r = {})).Text = 'text'), (i.Strong = 'strong'), (i.Emphasis = 'em'), (i.Strikethrough = 's'), (i.Code = 'inlineCode'), (i.Link = 'link'), (i.Paragraph = 'paragraph'), (i.Object = 'object');
let s = {
    $_: () => ({
        type: r.Text,
        content: ''
    }),
    $b: (e) => ({
        type: r.Strong,
        content: e
    }),
    $i: (e) => ({
        type: r.Emphasis,
        content: e
    }),
    $del: (e) => ({
        type: r.Strikethrough,
        content: e
    }),
    $code: (e) => ({
        type: r.Code,
        content: e
    }),
    $link: ([e, ...t]) => ({
        type: r.Link,
        target: e.content,
        content: t
    }),
    $p: (e) => ({
        type: r.Paragraph,
        content: e
    })
};
class o extends a.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = []);
    }
    pushRichTextTag(e, t) {
        if (!(e in s)) throw `${e} is not a known rich text formatting tag`;
        let n = s[e](t, '');
        Array.isArray(n) ? this.result.push(...n) : this.result.push(n);
    }
    pushLiteralText(e) {
        let t = this.result[this.result.length - 1];
        null != t && t.type === r.Text
            ? (t.content += e)
            : this.result.push({
                  type: r.Text,
                  content: e
              });
    }
    pushObject(e) {
        this.result.push({
            type: r.Object,
            content: e
        });
    }
    finish() {
        return this.result;
    }
}
function l(e, t) {
    return 'string' == typeof e
        ? [
              {
                  type: r.Text,
                  content: e
              }
          ]
        : this.bindFormatValues(o, e, t);
}
t.astFormatter = {
    format: l,
    builder: o
};
