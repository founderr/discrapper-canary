r.d(t, {
    O: function () {
        return o;
    }
});
var a = r(151122),
    n = r(642112),
    _ = r(878719);
let o = (0, a._I)((e = {}) => {
    let t = e.limit || 5,
        r = e.key || 'cause';
    return {
        name: 'LinkedErrors',
        preprocessEvent(e, a, o) {
            let E = o.getOptions();
            (0, n.Z)(_.GJ, E.stackParser, E.maxValueLength, r, t, e, a);
        }
    };
});
