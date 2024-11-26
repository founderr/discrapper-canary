r.d(t, {
    R: function () {
        return a;
    }
});
let a = (e) => {
    let t = !1;
    return (r) => {
        !t && (e(r), (t = !0));
    };
};
