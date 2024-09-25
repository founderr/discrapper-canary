n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(53529),
    a = n(436660),
    o = n(887490);
let s = ['applicationCommand'];
function l(e) {
    let { insertBreak: t, insertText: n } = e;
    return (
        (e.insertBreak = () => {
            u(e) && t();
        }),
        (e.insertSoftBreak = () => {
            e.insertBreak();
        }),
        (e.insertText = (t) => {
            if (0 > t.indexOf('\r') && 0 > t.indexOf('\n')) {
                n(t);
                return;
            }
            let r = t.split(/\r\n|\r|\n/);
            if (!u(e)) {
                n(r.join(' '));
                return;
            }
            i.T.withSingleEntry(e, () => {
                let t = !1;
                for (let i of r) t && a.Q.splitNodes(e, { always: !0 }), n(i), (t = !0);
            });
        }),
        e
    );
}
function u(e) {
    let t = o.bN.getCurrentBlock(e);
    return null != t && !s.includes(t[0].type);
}
