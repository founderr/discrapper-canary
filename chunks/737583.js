n.d(t, {
    J: function () {
        return a;
    },
    l: function () {
        return r;
    }
}),
    n(47120);
var i = n(693824),
    l = n(169040);
function a(e) {
    let t,
        { canvas: n, badges: a, startPosition: r, maxWidth: o } = e;
    for (let { iconPath: e, text: s } of (n.setFont({
        size: 12,
        family: l.I8,
        weight: l.Ue,
        truncate: i.GX.None
    }),
    a)) {
        let i = null != t ? t.w + t.x + l.PW : r,
            a = null != t ? t.w + t.x + l.PW + l.NC : r + l.NC;
        n.drawPath(
            e,
            {
                x: i,
                y: l.f0
            },
            !0,
            0.6
        ),
            (t = n.drawText(
                s,
                {
                    x: a,
                    y: l.m2,
                    w: o
                },
                !0
            ));
    }
}
function r(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: l, y: a },
        avatarImageSize: r
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect(
                {
                    x: l + (e + 1) * (r - 8) - 2,
                    y: a - 1,
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
                    y: a
                },
                {
                    w: r,
                    h: r
                },
                50,
                { fillMode: i.JU.Cover }
            ),
            t.restoreContext();
}
