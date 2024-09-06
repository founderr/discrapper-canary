n.d(t, {
    G: function () {
        return s;
    },
    Z: function () {
        return l;
    }
});
var i,
    s,
    a = n(536895);
((i = s || (s = {})).UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT'), (i.SET_FOCUSED_INDEX = 'SET_FOCUSED_INDEX');
function l(e, t) {
    var n, i, s, l, r, o, c;
    switch (t.type) {
        case a.Us.NAVIGATE_UP:
            return (
                (i = 0),
                {
                    ...(n = e),
                    focusedIndex: Math.max(0, n.focusedIndex - 1)
                }
            );
        case a.Us.NAVIGATE_DOWN:
            return (
                (l = 0),
                {
                    ...(s = e),
                    focusedIndex: Math.min(s.focusedIndex + 1, s.itemCount - 1)
                }
            );
        case a.Us.NAVIGATE_START:
            return (
                (r = 0),
                {
                    ...e,
                    focusedIndex: 0
                }
            );
        case a.Us.NAVIGATE_END:
            return (
                (c = 0),
                {
                    ...(o = e),
                    focusedIndex: o.itemCount - 1
                }
            );
        case 'UPDATE_ITEM_COUNT':
            return (function (e, t) {
                let { itemCount: n } = t;
                return {
                    ...e,
                    itemCount: n,
                    focusedIndex: Math.min(n - 1, e.focusedIndex)
                };
            })(e, t);
        case 'SET_FOCUSED_INDEX':
            return (function (e, t) {
                let { index: n } = t;
                return {
                    ...e,
                    focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1))
                };
            })(e, t);
        case a.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Listbox navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
