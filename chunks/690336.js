n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
    s = n(355863),
    a = n(451478),
    u = n(830917),
    d = n(388627),
    c = n(892127),
    h = n(84346),
    f = n(561064),
    p = n(501787);
function m(e) {
    return e.widget.id;
}
function v(e, t, n, l) {
    return n === r.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              c.Z,
              {
                  ...t,
                  transitionState: n,
                  cleanUp: l
              },
              e
          );
}
let g = [];
t.Z = l.memo(function (e) {
    let { className: t } = e,
        n = (0, f.Z)(),
        c = (0, o.e7)([a.Z], () => a.Z.windowSize((0, u.ZY)(n))),
        E = (0, o.e7)(
            [s.Z],
            () => {
                let e = s.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
                if (null == e) return g;
                let t = [];
                for (let n of e.widgets) {
                    let e = s.Z.getWidget(n);
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
            d.HP
        ),
        Z = l.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: t,
                    style: c,
                    children: e
                }),
            [t, c]
        );
    return (0, i.jsx)(r.TransitionGroup, {
        items: E,
        renderItem: v,
        getItemKey: m,
        wrapChildren: Z
    });
});
