n.d(t, {
    J: function () {
        return l;
    }
});
var i = n(442837),
    r = n(375954),
    a = n(594174);
let l = (e) =>
    (0, i.e7)([r.Z, a.default], () => {
        if (null == e) return !1;
        let t = a.default.getCurrentUser();
        return null != r.Z.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    });
