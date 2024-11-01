Object.defineProperty(t, '__esModule', { value: !0 }), (t.InternalIntlMessage = void 0);
let r = n(653027);
function i(e, t) {
    for (let n of e) {
        if ('string' == typeof n[0]) {
            t.value += n[0];
            return;
        }
        switch (n[0]) {
            case r.FormatJsNodeType.Argument:
                t.value += '{' + n[1] + '}';
                return;
            case r.FormatJsNodeType.Date:
                (t.value += '{' + n[1] + ', date'), null != n[2] && (t.value += ', ' + n[2]), (t.value += '}');
                return;
            case r.FormatJsNodeType.Time:
                (t.value += '{' + n[1] + ', time'), null != n[2] && (t.value += ', ' + n[2]), (t.value += '}');
                return;
            case r.FormatJsNodeType.Number:
                (t.value += '{' + n[1] + ', number'), null != n[2] && (t.value += ', ' + n[2]), (t.value += '}');
                return;
            case r.FormatJsNodeType.Plural: {
                let e = 'ordinal' == n[4] ? 'selectordinal' : 'plural';
                for (let [r, a] of ((t.value += '{' + n[1] + ', ' + e + ', '), n[3] && (t.value += 'offset:' + n[3]), Object.entries(n[2]))) (t.value += ' ' + r + ' {'), i(a, t), (t.value += '}');
                return;
            }
            case r.FormatJsNodeType.Pound:
                t.value += '#';
                return;
            case r.FormatJsNodeType.Select:
                for (let [e, r] of ((t.value += '{' + n[1] + ', select, '), Object.entries(n[2]))) (t.value += ' ' + e + ' {'), i(r, t), (t.value += '}');
                return;
            case r.FormatJsNodeType.Tag:
                (function (e, t) {
                    switch (e[1]) {
                        case '$b':
                            (t.value += '**'), i(e[2], t), (t.value += '**');
                            return;
                        case '$i':
                            (t.value += '*'), i(e[2], t), (t.value += '*');
                            return;
                        case '$code':
                            (t.value += '`'), i(e[2], t), (t.value += '`');
                            return;
                        case '$p':
                            i(e[2], t), (t.value += '\n\n');
                            return;
                        case '$link':
                            let [n, ...r] = e[2];
                            (t.value += '['), i(r, t), (t.value += ']('), null != n && i([n], t), (t.value += ')');
                            return;
                        default:
                            (t.value += '$['), i(e[2], t), (t.value += '](' + e[1] + ')');
                            return;
                    }
                })(n, t);
                return;
        }
    }
}
t.InternalIntlMessage = class e {
    constructor(e, t) {
        (this.locale = t), (this.ast = (0, r.isCompressedAst)(e) ? e : (0, r.compressFormatJsToAst)(e));
    }
    reserialize() {
        if ('string' == typeof this.ast) return this.ast;
        let e = { value: '' };
        return i(this.ast, e), e.value;
    }
};
