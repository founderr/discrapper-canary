var i;
Object.defineProperty(n, '__esModule', { value: !0 }), (n.astFormatter = n.RichTextNodeType = void 0), (n.formatToAst = l);
let a = r(200232);
!(function (e) {
    (e.Text = 'text'), (e.Strong = 'strong'), (e.Emphasis = 'em'), (e.Strikethrough = 's'), (e.Code = 'inlineCode'), (e.Link = 'link'), (e.Paragraph = 'paragraph');
})(i || (n.RichTextNodeType = i = {}));
let s = {
    $b: (e) => ({
        type: i.Strong,
        content: e
    }),
    $i: (e) => ({
        type: i.Emphasis,
        content: e
    }),
    $del: (e) => ({
        type: i.Strikethrough,
        content: e
    }),
    $code: (e) => ({
        type: i.Code,
        content: e
    }),
    $link: (e, n, [r]) => ({
        type: i.Link,
        target: r,
        content: e
    }),
    $p: (e) => ({
        type: i.Paragraph,
        content: e
    })
};
class o extends a.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = []);
    }
    pushRichTextTag(e, n, r) {
        if (!(e in s)) throw `${e} is not a known rich text formatting tag`;
        let i = s[e](n, '', r);
        Array.isArray(i) ? this.result.push(...i) : this.result.push(i);
    }
    pushLiteralText(e) {
        let n = this.result[this.result.length - 1];
        null != n && n.type === i.Text
            ? (n.content += e)
            : this.result.push({
                  type: i.Text,
                  content: e
              });
    }
    pushObject(e) {
        this.result.push(e);
    }
    finish() {
        return this.result;
    }
}
function l(e, n) {
    return 'string' == typeof e
        ? [
              {
                  type: i.Text,
                  content: e
              }
          ]
        : this.bindFormatValues(o, e, n);
}
n.astFormatter = {
    format: l,
    builder: o
};
