n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(355863),
    s = n(451478),
    u = n(830917),
    c = n(388627),
    d = n(892127),
    h = n(84346),
    f = n(561064),
    p = n(501787);
function m(e) {
    return e.widget.id;
}
function E(e, t, n, r) {
    return n === o.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              d.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: r
              },
              e
          );
}
let v = [];
t.Z = r.memo(function (e) {
    let { className: t } = e,
        n = (0, f.Z)(),
        d = (0, l.e7)([s.Z], () => s.Z.windowSize((0, u.ZY)(n))),
        g = (0, l.e7)(
            [a.Z],
            () => {
                let e = a.Z.getLayout(p.$S);
                if (null == e) return v;
                let t = [];
                for (let n of e.widgets) {
                    let e = a.Z.getWidget(n);
                    if (null == e) continue;
                    let i = h.Z[e.type];
                    null != i &&
                        t.push({
                            widget: e,
                            ...i
                        });
                }
                return t;
            },
            [],
            c.HP
        ),
        _ = r.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: t,
                    style: d,
                    children: e
                }),
            [t, d]
        );
    return (0, i.jsx)(o.TransitionGroup, {
        items: g,
        renderItem: E,
        getItemKey: m,
        wrapChildren: _
    });
});
