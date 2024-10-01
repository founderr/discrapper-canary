n.d(t, {
    J: function () {
        return i;
    },
    l: function () {
        return r;
    }
}),
    n(47120);
var a = n(693824),
    l = n(169040);
function i(e) {
    let t,
        { canvas: n, badges: i, startPosition: r, maxWidth: s } = e;
    for (let { iconPath: e, text: o } of (n.setFont({
        size: 12,
        family: l.I8,
        weight: l.Ue,
        truncate: a.GX.None
    }),
    i)) {
        let a = null != t ? t.w + t.x + l.PW : r,
            i = null != t ? t.w + t.x + l.PW + l.NC : r + l.NC;
        n.drawPath(
            e,
            {
                x: a,
                y: l.f0
            },
            !0,
            0.6
        ),
            (t = n.drawText(
                o,
                {
                    x: i,
                    y: l.m2,
                    w: s
                },
                !0
            ));
    }
}
function r(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: l, y: i },
        avatarImageSize: r
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect(
                {
                    x: l + (e + 1) * (r - 8) - 2,
                    y: i - 1,
                    w: r + 2,
                    h: r + 2
                },
                r / 2,
                !0
            ),
            t.drawRoundedImage(
                n[e],
                {
                    x: l + e * (r - 8),
                    y: i
                },
                {
                    w: r,
                    h: r
                },
                50,
                { fillMode: a.JU.Cover }
            ),
            t.restoreContext();
}
