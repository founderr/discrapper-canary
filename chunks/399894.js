var a = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(913527),
    i = n.n(l),
    o = n(481060),
    c = n(70956),
    d = n(689938),
    u = n(229361);
t.Z = (e) => {
    let t,
        n,
        { rateLimitPerUser: s, slowmodeCooldownGuess: l, isBypassSlowmode: m, leadingIcon: h = !1 } = e;
    if (s >= c.Z.Seconds.HOUR) {
        let e = Math.floor(s / c.Z.Seconds.HOUR),
            t = Math.floor((s - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
            a = s - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
        n = d.Z.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
            hours: e,
            minutes: t,
            seconds: a
        });
    } else if (s >= 60) {
        let e = Math.floor(s / 60);
        n = d.Z.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
            minutes: e,
            seconds: s - 60 * e
        });
    } else n = d.Z.Messages.FORUM_SLOWMODE_DESC.format({ seconds: s });
    if (!m && l > 0) {
        let e = i().duration(l);
        if (l > c.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                a = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(a);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = m ? d.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : d.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
    let _ = (0, a.jsx)(o.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: t
        }),
        g = (0, a.jsx)(o.TimerIcon, {
            size: 'xs',
            color: 'currentColor',
            className: r()(u.slowModeIcon, { [u.leadingIcon]: h })
        });
    return (0, a.jsx)(o.Tooltip, {
        text: n,
        children: (e) =>
            (0, a.jsx)('div', {
                className: u.cooldownWrapper,
                ...e,
                children: h
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [g, _]
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [_, g]
                      })
            })
    });
};
