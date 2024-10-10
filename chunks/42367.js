r.d(t, {
    O: function () {
        return o;
    }
});
var n = r(151122),
    a = r(642112),
    _ = r(878719);
let o = (0, n._I)((e = {}) => {
    let t = e.limit || 5,
        r = e.key || 'cause';
    return {
        name: 'LinkedErrors',
        preprocessEvent(e, n, o) {
            let i = o.getOptions();
            (0, a.Z)(_.GJ, i.stackParser, i.maxValueLength, r, t, e, n);
        }
    };
});
