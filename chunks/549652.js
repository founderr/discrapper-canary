n.r(t),
    n.d(t, {
        default: function () {
            return v;
        }
    });
var s = n(200651),
    i = n(192379),
    a = n(593473),
    r = n(442837),
    l = n(544891),
    o = n(536285),
    c = n(388905),
    d = n(600164),
    u = n(703656),
    p = n(314897),
    m = n(981631),
    x = n(388032),
    h = n(472585),
    f = n(113207);
function b(e, t, n) {
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
r.ZP.initialize();
let g = {
    HANDOFF: 'handoff',
    DONE: 'done',
    FAILED: 'failed'
};
function j() {
    try {
        window.close();
    } catch (e) {}
}
class v extends i.PureComponent {
    componentDidMount() {
        let { stage: e, key: t } = this.state;
        e === g.DONE
            ? j()
            : p.default.isAuthenticated()
              ? l.tn
                    .post({
                        url: m.ANM.HANDOFF,
                        body: { key: t },
                        oldFormErrors: !0
                    })
                    .then(
                        (e) => this.handoff(e.body.handoff_token),
                        () => this.handoff()
                    )
              : this.handoff();
    }
    handoff(e) {
        o.default
            .requestRedirect(m.Etm.BROWSER_HANDOFF, {
                handoffToken: e,
                fingerprint: p.default.getFingerprint()
            })
            .then(this.done, this.failed);
    }
    renderDone() {
        return (0, s.jsxs)(c.ZP, {
            children: [
                (0, s.jsx)(c.Ee, {
                    src: n(69008),
                    className: f.marginBottom20
                }),
                (0, s.jsx)(c.Dx, {
                    className: f.marginBottom8,
                    children: x.intl.string(x.t.YsLqvr)
                }),
                (0, s.jsx)(c.DK, {
                    className: f.marginBottom40,
                    children: x.intl.string(x.t.CSBYDg)
                }),
                (0, s.jsx)(c.zx, {
                    onClick: this.handleOpenApp,
                    children: x.intl.string(x.t.fIv16O)
                })
            ]
        });
    }
    renderFailed() {
        return (0, s.jsxs)(c.ZP, {
            children: [
                (0, s.jsx)(c.Ee, {
                    src: n(69008),
                    className: f.marginBottom20
                }),
                (0, s.jsx)(c.Dx, {
                    className: f.marginBottom8,
                    children: x.intl.string(x.t.hsLIsb)
                }),
                (0, s.jsx)(c.DK, {
                    className: f.marginBottom40,
                    children: x.intl.string(x.t.CSBYDg)
                }),
                (0, s.jsx)(c.zx, {
                    onClick: this.handleOpenApp,
                    children: x.intl.string(x.t.fIv16O)
                })
            ]
        });
    }
    renderHandoff() {
        return (0, s.jsxs)(c.ZP, {
            children: [
                (0, s.jsx)(c.Hh, {}),
                (0, s.jsx)(c.Dx, {
                    className: f.marginBottom8,
                    children: x.intl.string(x.t['ctWa6+'])
                }),
                (0, s.jsx)(c.DK, { children: x.intl.string(x.t['53IHoq']) })
            ]
        });
    }
    render() {
        let e;
        let { stage: t } = this.state;
        switch (t) {
            case g.DONE:
                e = this.renderDone();
                break;
            case g.FAILED:
                e = this.renderFailed();
                break;
            case g.HANDOFF:
            default:
                e = this.renderHandoff();
        }
        return (0, s.jsx)(d.Z, {
            justify: d.Z.Justify.CENTER,
            align: d.Z.Align.CENTER,
            className: h.wrapper,
            children: e
        });
    }
    constructor(e) {
        var t;
        super(e),
            b(this, 'done', () => {
                j(), this.setState({ stage: g.DONE });
            }),
            b(this, 'failed', () => {
                this.setState({ stage: g.FAILED }), j();
            }),
            b(this, 'handleOpenApp', () => {
                (0, u.uL)(m.Z5c.ME);
            });
        let { search: n } = e.location,
            s = null != n && '' !== n ? (0, a.parse)(n) : {};
        this.state = {
            key: null !== (t = s.key) && void 0 !== t ? t : '',
            stage: 'true' === s.done ? g.DONE : g.HANDOFF
        };
    }
}
