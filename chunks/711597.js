Object.defineProperty(t, '__esModule', { value: !0 }), (t.InternalIntlMessage = void 0);
let r = n(464549);
function i(e, t) {
    for (let n of e) {
        if ('string' == typeof n[0]) {
            t.value += n[0];
            return;
        }
        switch (n[r.AstNodeIndices.Type]) {
            case r.FormatJsNodeType.Argument:
                if ('$_' === t.value) return;
                t.value += '{' + n[r.AstNodeIndices.Value] + '}';
                return;
            case r.FormatJsNodeType.Date:
                (t.value += '{' + n[r.AstNodeIndices.Value] + ', date'), null != n[r.AstNodeIndices.Style] && (t.value += ', ' + n[r.AstNodeIndices.Style]), (t.value += '}');
                return;
            case r.FormatJsNodeType.Time:
                (t.value += '{' + n[r.AstNodeIndices.Value] + ', time'), null != n[r.AstNodeIndices.Style] && (t.value += ', ' + n[r.AstNodeIndices.Style]), (t.value += '}');
                return;
            case r.FormatJsNodeType.Number:
                (t.value += '{' + n[r.AstNodeIndices.Value] + ', number'), null != n[r.AstNodeIndices.Style] && (t.value += ', ' + n[r.AstNodeIndices.Style]), (t.value += '}');
                return;
            case r.FormatJsNodeType.Plural: {
                let e = 'ordinal' == n[r.AstNodeIndices.PluralType] ? 'selectordinal' : 'plural';
                for (let [a, s] of ((t.value += '{' + n[r.AstNodeIndices.Value] + ', ' + e + ', '), n[r.AstNodeIndices.Offset] && (t.value += 'offset:' + n[r.AstNodeIndices.Offset]), Object.entries(n[r.AstNodeIndices.Options]))) (t.value += ' ' + a + ' {'), i(s, t), (t.value += '}');
                return;
            }
            case r.FormatJsNodeType.Pound:
                t.value += '#';
                return;
            case r.FormatJsNodeType.Select:
                for (let [e, a] of ((t.value += '{' + n[r.AstNodeIndices.Value] + ', select, '), Object.entries(n[r.AstNodeIndices.Options]))) (t.value += ' ' + e + ' {'), i(a, t), (t.value += '}');
                return;
            case r.FormatJsNodeType.Tag:
                (function (e, t) {
                    switch (e[r.AstNodeIndices.Value]) {
                        case '$b':
                            (t.value += '**'), i(e[r.AstNodeIndices.Children], t), (t.value += '**');
                            return;
                        case '$i':
                            (t.value += '*'), i(e[r.AstNodeIndices.Children], t), (t.value += '*');
                            return;
                        case '$code':
                            (t.value += '`'), i(e[r.AstNodeIndices.Children], t), (t.value += '`');
                            return;
                        case '$p':
                            i(e[r.AstNodeIndices.Children], t), (t.value += '\n\n');
                            return;
                        case '$link':
                            let [n, ...a] = e[r.AstNodeIndices.Children];
                            (t.value += '['), i(a, t), (t.value += ']('), null != n && i([n], t), (t.value += ')');
                            return;
                        default:
                            (t.value += '$['), i(e[r.AstNodeIndices.Children], t), (t.value += '](' + e[r.AstNodeIndices.Value] + ')');
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
        let e = { value: '' };
        return i(this.ast, e), e.value;
    }
};
