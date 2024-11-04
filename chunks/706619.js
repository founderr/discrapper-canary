e.d(n, {
    Z: function () {
        return a;
    }
}),
    e(47120);
var i = e(200651),
    s = e(192379),
    r = e(311308),
    o = e(692547),
    l = e(481060);
function a(t) {
    let n = (0, s.useRef)(null),
        [e, a] = (0, s.useState)(null),
        [c] = (0, s.useState)(() => new r.TimelineDataSeries()),
        u = (0, l.useToken)(o.Z.colors.BACKGROUND_PRIMARY).hsl(),
        E = (0, l.useToken)(o.Z.colors.TEXT_NORMAL).hsl(),
        d = (0, l.useToken)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
        N = (0, l.useToken)(o.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, s.useEffect)(() => {
        var t;
        let e = n.current;
        if (null == e) return;
        let i = new r.TimelineGraphView(e, null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1);
        (i.backgroundColor = u), (i.textColor = E), (i.gridColor = d), (i.timeOptions = { timeStyle: 'short' }), (i.fontFamily = 'gg sans'), (i.fontSize = 11), c.setColor(N), i.addDataSeries(c), i.updateEndDate(), a(i);
    }, [n, u, N, d, E, c]),
        c.setPoints(t.dataPoints),
        null == e || e.updateEndDate();
    let C = {
        width: t.width,
        height: t.height
    };
    return (0, i.jsx)(
        'canvas',
        {
            style: C,
            width: t.width,
            height: t.height,
            ref: n
        },
        'canvas'
    );
}
