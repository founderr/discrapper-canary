n.d(t, {
    E: function () {
        return y;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i,
    l = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(748780),
    c = n(442837),
    d = n(692547),
    u = n(215569),
    h = n(481060),
    p = n(812206),
    m = n(707409),
    f = n(703656),
    g = n(417363),
    C = n(941128),
    v = n(780570),
    _ = n(353042),
    x = n(981631),
    I = n(388032),
    b = n(282115);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = {
    [x.vxO.INSTALLING]: {
        [m.J6.NONE]: (e, t) => I.intl.formatToPlainString(I.t['p+2sEx'], { name: e }),
        [m.J6.SECONDS]: (e, t) =>
            I.intl.formatToPlainString(I.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [m.J6.MINUTES]: (e, t) =>
            I.intl.formatToPlainString(I.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [m.J6.HOURS]: (e, t) =>
            I.intl.formatToPlainString(I.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    },
    [x.vxO.UPDATING]: {
        [m.J6.NONE]: (e, t) => I.intl.formatToPlainString(I.t['6F9QzM'], { name: e }),
        [m.J6.SECONDS]: (e, t) =>
            I.intl.formatToPlainString(I.t['2OVgVl'], {
                name: e,
                timeRemaining: t
            }),
        [m.J6.MINUTES]: (e, t) =>
            I.intl.formatToPlainString(I.t.mgQg1N, {
                name: e,
                timeRemaining: t
            }),
        [m.J6.HOURS]: (e, t) =>
            I.intl.formatToPlainString(I.t['aTdq4+'], {
                name: e,
                timeRemaining: t
            })
    },
    [x.vxO.REPAIRING]: {
        [m.J6.NONE]: (e, t) => I.intl.formatToPlainString(I.t['p+2sEx'], { name: e }),
        [m.J6.SECONDS]: (e, t) =>
            I.intl.formatToPlainString(I.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [m.J6.MINUTES]: (e, t) =>
            I.intl.formatToPlainString(I.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [m.J6.HOURS]: (e, t) =>
            I.intl.formatToPlainString(I.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    }
};
class Z extends r.PureComponent {
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === x.vxO.UPDATING || e.type === x.vxO.REPAIRING || e.type === x.vxO.INSTALLING) {
            if (t) return I.intl.string(I.t['5oxtFR']);
            if (e.stage === x.f07.PATCHING || e.stage === x.f07.REPAIRING)
                return (0, l.jsx)(_.Z, {
                    getHistoricalTotalBytes: g.Z.getHistoricalTotalBytesWritten,
                    updateInterval: 5000,
                    children: this.renderProgressBody
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : I.intl.string(I.t.cw57am);
    }
    constructor(...e) {
        super(...e),
            E(this, 'renderProgressBody', (e, t) => {
                let { state: n, application: i } = this.props,
                    { stage: l, progress: r, total: o, type: a } = n;
                if (null == r || null == o || null == l) return null;
                let s = (e[e.length - 1] / t) * 1000,
                    c = 0 !== s ? Math.max(1, (o - r) / s) : null,
                    d = S[a],
                    u = null != d ? Object.keys(d) : [],
                    { unit: h, time: p } = (0, m.CI)(null != c ? c / 60 : null, u);
                if (null != d && null != h) {
                    let e = d[h];
                    return null != e ? e(i.name, p) : null;
                }
                return null;
            });
    }
}
class N extends (i = r.PureComponent) {
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        s.Z.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200
        }).start(e);
    }
    componentWillLeave(e) {
        s.Z.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200
        }).start(e);
    }
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? I.intl.string(I.t.cw57am)
            : (0, l.jsx)(Z, {
                  application: e,
                  state: t,
                  isPaused: n
              });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, l.jsx)(s.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, b.progressContainer),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(h.Tooltip, {
                text: this.getTooltipText(),
                position: 'right',
                'aria-label': !1,
                children: (n) =>
                    (0, l.jsx)('div', {
                        ...n,
                        children: (0, l.jsx)(h.ProgressCircle, {
                            percent: e,
                            colorOverride: t ? d.Z.unsafe_rawColors.PRIMARY_500.css : null,
                            children: (0, l.jsx)(h.DownloadIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.downloadIcon
                            })
                        })
                    })
            })
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', { animationScale: new s.Z.Value(0) }),
            E(this, 'handleOnClick', (e) => {
                let { onClick: t } = this.props;
                e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, f.uL)(x.Z5c.APPLICATION_LIBRARY);
            });
    }
}
E(N, 'defaultProps', { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
function y(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: l } = n,
            r = t.getState(i, l);
        return null != r && e.push(r), e;
    }, []);
}
t.Z = c.ZP.connectStores([C.Z, g.Z, p.Z], () => {
    let e = C.Z.activeItems,
        t = y(e, g.Z),
        { total: n, progress: i } = v.lK(t);
    return {
        percent: v.xI(i, n),
        isPaused: C.Z.paused,
        firstApplication: e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, l.jsx)(u.W, {
              component: r.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(N, { ...n }) : null
          })
        : (0, l.jsx)(N, { ...n });
});
