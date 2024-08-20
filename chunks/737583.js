t.d(n, {
    J: function () {
        return i;
    },
    l: function () {
        return r;
    }
}),
    t(47120);
var a = t(693824),
    l = t(169040);
function i(e) {
    let n,
        { canvas: t, badges: i, startPosition: r, maxWidth: s } = e;
    for (let { iconPath: e, text: o } of (t.setFont({
        size: 12,
        family: l.I8,
        weight: l.Ue,
        truncate: a.GX.None
    }),
    i)) {
        let a = null != n ? n.w + n.x + l.PW : r,
            i = null != n ? n.w + n.x + l.PW + l.NC : r + l.NC;
        t.drawPath(
            e,
            {
                x: a,
                y: l.f0
            },
            !0,
            0.6
        ),
            (n = t.drawText(
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
        canvas: n,
        avatarSrcs: t,
        position: { x: l, y: i },
        avatarImageSize: r
    } = e;
    for (let e = 0; e < t.length; e++)
        e < t.length - 1 &&
            n.clipRoundedRect(
                {
                    x: l + (e + 1) * (r - 8) - 2,
                    y: i - 1,
                    w: r + 2,
                    h: r + 2
                },
                r / 2,
                !0
            ),
            n.drawRoundedImage(
                t[e],
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
            n.restoreContext();
}
