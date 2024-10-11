Object.defineProperty(t, '__esModule', { value: !0 }), (t.stringFormatter = t.StringBuilder = void 0), (t.formatToPlainString = a);
let r = n(203723);
class i extends r.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, t) {
        if ('$link' === e) {
            this.result += t.slice(1).join('');
            return;
        }
        this.result += t.join('');
    }
    pushLiteralText(e) {
        this.result += e;
    }
    pushObject(e) {
        null != e && 'toString' in e && (this.result += e.toString());
    }
    finish() {
        return [this.result];
    }
}
function a(e, t) {
    return 'string' == typeof e ? e : this.bindFormatValues(i, e, t)[0];
}
(t.StringBuilder = i),
    (t.stringFormatter = {
        format: a,
        builder: i
    });
