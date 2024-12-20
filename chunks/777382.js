t(653041), t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    a = t(481060),
    o = t(355863),
    c = t(237997),
    u = t(451478),
    s = t(145597),
    d = t(830917),
    f = t(312178),
    _ = t(388627),
    h = t(892127),
    p = t(561064),
    v = t(982572);
function m(e) {
    return e.widget.id;
}
function Z(e, n, t, r) {
    return t === a.TransitionStates.YEETED
        ? null
        : (0, i.jsx)(
              h.Z,
              {
                  ...n,
                  transitionState: t,
                  cleanUp: r,
                  dragContainerClassName: v.dragContainer,
                  className: v.widget
              },
              e
          );
}
let C = [];
n.Z = r.memo(function (e) {
    let { className: n } = e,
        t = (0, p.Z)(),
        h = (0, l.e7)([u.Z], () => u.Z.windowSize((0, d.ZY)(t))),
        v = (0, l.e7)([c.Z], () => c.Z.isPreviewingInGame()),
        I = (0, l.e7)(
            [o.Z],
            () => {
                let e = o.Z.getLayout(s.qU);
                if (null == e) return C;
                let n = [];
                for (let t of e.widgets) {
                    let e = o.Z.getWidget(t);
                    if (null == e) continue;
                    let i = f.p[e.type];
                    null != i &&
                        n.push({
                            widget: e,
                            renderWidget: (n) =>
                                i({
                                    ...n,
                                    id: e.id,
                                    pinned: e.pinned,
                                    anchor: e.anchor,
                                    isPreviewingInGame: v
                                })
                        });
                }
                return n;
            },
            [v],
            _.HP
        ),
        g = r.useCallback(
            (e) =>
                (0, i.jsx)('div', {
                    className: n,
                    style: h,
                    children: e
                }),
            [n, h]
        );
    return (0, i.jsx)(a.TransitionGroup, {
        items: I,
        renderItem: Z,
        getItemKey: m,
        wrapChildren: g
    });
});
