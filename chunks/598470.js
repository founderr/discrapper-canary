r.d(t, {
    x: function () {
        return _;
    }
});
var a = r(116698),
    n = r(928541);
function _(e) {
    let t = [];
    function r(e) {
        return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: t,
        add: function (_) {
            if (!(void 0 === e || t.length < e)) return (0, n.$2)(new a.b('Not adding Promise because buffer limit was reached.'));
            let o = _();
            return -1 === t.indexOf(o) && t.push(o), o.then(() => r(o)).then(null, () => r(o).then(null, () => {})), o;
        },
        drain: function (e) {
            return new n.cW((r, a) => {
                let _ = t.length;
                if (!_) return r(!0);
                let o = setTimeout(() => {
                    e && e > 0 && r(!1);
                }, e);
                t.forEach((e) => {
                    (0, n.WD)(e).then(() => {
                        !--_ && (clearTimeout(o), r(!0));
                    }, a);
                });
            });
        }
    };
}
