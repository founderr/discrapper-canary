n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(479099),
    a = n(854586);
function l(e) {
    let { appliedTags: t, setAppliedTags: n } = e,
        l =
            null != n
                ? (e) => {
                      t.has(e) && (t.delete(e), n(new Set(t)));
                  }
                : void 0;
    return (0, i.jsx)('div', {
        className: a.tags,
        children: Array.from(t).map((e) =>
            (0, i.jsx)(
                s.Z,
                {
                    tag: e,
                    onRemove: l,
                    size: null == l ? s.Z.Sizes.SMALL : s.Z.Sizes.MEDIUM
                },
                e.id
            )
        )
    });
}
