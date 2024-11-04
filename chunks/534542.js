n.d(t, {
    R: function () {
        return c;
    },
    g: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(118012),
    o = n(439755);
let l = {
        DEFAULT: 'default',
        INPUT_PLACEHOLDER: 'placeholder',
        DESCRIPTION: 'description',
        LABEL_BOLD: 'labelBold',
        LABEL_SELECTED: 'labelSelected',
        LABEL_DESCRIPTOR: 'labelDescriptor',
        ERROR: 'error',
        SUCCESS: 'success'
    },
    u = {
        DEFAULT: 'modeDefault',
        DISABLED: 'modeDisabled',
        SELECTABLE: 'modeSelectable'
    };
function c(e) {
    let { type: t = l.DEFAULT, className: n, disabled: i, selectable: c, children: d, style: f, ..._ } = e,
        h = u.DEFAULT;
    return (
        i ? (h = u.DISABLED) : c && (h = u.SELECTABLE),
        (0, r.jsx)(s.Z, {
            className: a()(o[t], n, o[h]),
            style: f,
            ..._,
            children: d
        })
    );
}
c.Types = l;
