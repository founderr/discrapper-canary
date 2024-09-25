n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(327432),
    a = n(772096),
    o = n(925994),
    s = n(436660),
    l = n(887490);
function u(e) {
    return (
        (e.setFragmentData = (t) => {
            if (null != e.selection) {
                let n = (0, o.sk)(l.bN.richValue(e), {
                    mode: 'plain',
                    range: e.selection,
                    preventEmojiSurrogates: !0
                });
                t.setData('text/plain', n);
            }
        }),
        (e.insertData = (t) => {
            e.insertTextData(t);
        }),
        (e.insertFragmentData = (e) => !1),
        (e.insertTextData = (t) => {
            let n = t.getData('text/plain');
            if (0 === n.length) return !1;
            if (null != e.selection && l.M8.isExpanded(e.selection)) {
                let t = i.ML.string(e, e.selection),
                    r = (0, a.yw)(n),
                    o = (0, a.yw)(t);
                if (null != r && null == o) {
                    let [t, n] = l.M8.edges(e.selection);
                    return (
                        l.bN.withoutNormalizing(e, () => {
                            s.Q.select(e, t), e.insertText('['), s.Q.select(e, n), 0 === l.C0.compare(t.path, n.path) && s.Q.move(e, { distance: 1 }), e.insertText(']('.concat(r.target, ')'));
                        }),
                        !0
                    );
                }
                if (null != r && null != o) return s.Q.delete(e, { at: e.selection }), e.insertText(r.target), !0;
                s.Q.delete(e, { at: e.selection });
            }
            return e.insertText(n), !0;
        }),
        e
    );
}
