n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(72416),
    c = n(476221),
    u = n(873596),
    d = n(423516),
    h = n(981631),
    p = n(700883);
let f = {
        [h.IE4.UNKNOWN]: o.Tooltip.Colors.BLACK,
        [h.IE4.BAD]: o.Tooltip.Colors.RED,
        [h.IE4.AVERAGE]: o.Tooltip.Colors.YELLOW,
        [h.IE4.FINE]: o.Tooltip.Colors.GREEN
    },
    m = {
        [h.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
        [h.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
        [h.QKv.ERROR]: p.rtcConnectionStatusError
    },
    g = {
        [h.IE4.FINE]: p.rtcConnectionQualityFine,
        [h.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
        [h.IE4.BAD]: p.rtcConnectionQualityBad,
        [h.IE4.UNKNOWN]: null
    };
class C extends l.PureComponent {
    renderPopoutTarget(e) {
        return (0, i.jsx)(o.Popout, {
            renderPopout: this.renderPopout,
            position: 'top',
            children: e
        });
    }
    renderStatus() {
        let { hasVideo: e, state: t } = this.props,
            { connectionStatus: n, connectionStatusText: l } = c.Z.getStatus(t, e);
        return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(o.Button, {
                look: o.Button.Looks.BLANK,
                size: o.Button.Sizes.NONE,
                onClick: t,
                children: (0, i.jsx)(d.Z, {
                    text: l,
                    hasVideo: this.props.hasVideo,
                    className: m[n]
                })
            });
        });
    }
    render() {
        let e;
        let { quality: t, smallPing: n, lastPing: l, state: r, className: s, children: c } = this.props;
        return (
            r === h.hes.RTC_CONNECTED &&
                (e = (0, i.jsx)(o.Tooltip, {
                    text: t !== h.IE4.UNKNOWN && null != l ? ''.concat(l.toFixed(0), ' ms') : null,
                    color: f[t],
                    children: (e) =>
                        (0, i.jsx)(_, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                })),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(p.rtcConnectionStatus, g[t], s),
                        children: [
                            e,
                            (0, i.jsx)('div', {
                                className: p.labelWrapper,
                                children: this.renderStatus()
                            })
                        ]
                    }),
                    c
                ]
            })
        );
    }
    constructor(...e) {
        var t, n, l;
        super(...e),
            (t = this),
            (n = 'renderPopout'),
            (l = (e) =>
                (0, i.jsx)(u.Z, {
                    channelId: this.props.channelId,
                    ...e
                })),
            n in t
                ? Object.defineProperty(t, n, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = l);
    }
}
function _(e) {
    let { quality: t, smallPing: n, ...l } = e;
    if (!(0, o.useRedesignIconContext)().enabled)
        return (0, i.jsx)(s.Z, {
            className: a()(p.ping, { [p.smallPing]: n }),
            foreground: p.pingForeground
        });
    {
        let e = {
            [h.IE4.FINE]: o.ConnectionFineIcon,
            [h.IE4.AVERAGE]: o.ConnectionAverageIcon,
            [h.IE4.BAD]: o.ConnectionBadIcon,
            [h.IE4.UNKNOWN]: o.ConnectionUnknownIcon
        }[t];
        return (0, i.jsx)(e, {
            className: a()(p.ping, { [p.smallPing]: n }),
            ...l
        });
    }
}
t.Z = C;
