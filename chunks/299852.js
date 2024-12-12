n(47120);
var i,
    r = n(200651),
    s = n(192379),
    l = n(593473),
    a = n(442837),
    o = n(544891),
    c = n(481060),
    u = n(129293),
    d = n(388905),
    h = n(108427),
    g = n(598077),
    m = n(896797),
    p = n(981631),
    f = n(930441),
    _ = n(388032),
    x = n(232186);
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
a.ZP.initialize();
class I extends (i = s.PureComponent) {
    componentDidMount() {
        let e = (0, u.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        o.tn
            .post({
                url: p.ANM.DISABLE_EMAIL_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    category: t.category,
                    email_type: t.email_type
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) => {
                    let {
                            body: { user: n }
                        } = e,
                        i = new g.Z(n);
                    this.setState({
                        success: !0,
                        busy: !1,
                        user: i,
                        category: t.category
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1
                    })
            ),
            (0, h.e)('disable_email_notifications');
    }
    renderBusy() {
        return (0, r.jsx)(d.ZP, { children: (0, r.jsx)(d.Hh, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            s = _.intl.formatToPlainString(_.t.YDAohI, { category: t });
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Dx, {
                    className: x.marginBottom8,
                    children: _.intl.string(_.t.f6rdLi)
                }),
                (0, r.jsx)(d.DK, { children: s }),
                (0, r.jsx)(d.zx, {
                    className: x.marginTop20,
                    onClick: () => i(n),
                    children: _.intl.string(_.t.fIv16O)
                }),
                (0, r.jsx)(d.zx, {
                    className: x.marginTop8,
                    color: d.zx.Colors.LINK,
                    look: d.zx.Looks.LINK,
                    onClick: () => i(p.Z5c.SETTINGS('notifications', f.vG)),
                    children: _.intl.string(_.t.YYTira)
                })
            ]
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = f.Od.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.qE, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c.AvatarSizes.DEPRECATED_SIZE_100,
                    className: x.marginBottom20
                }),
                (0, r.jsx)(d.Dx, {
                    className: x.marginBottom8,
                    children: _.intl.string(_.t['6U6OMT'])
                }),
                (0, r.jsx)(d.DK, { children: _.intl.string(_.t['yaDJ4+']) }),
                (0, r.jsx)(d.zx, {
                    className: x.marginTop40,
                    onClick: () => t(e),
                    children: _.intl.string(_.t.fIv16O)
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(105020),
                    className: x.marginBottom20
                }),
                (0, r.jsx)(d.Dx, {
                    className: x.marginBottom8,
                    children: _.intl.string(_.t.ox9hIS)
                }),
                (0, r.jsx)(d.DK, { children: _.intl.string(_.t['/dcuR0']) }),
                (0, r.jsx)(d.zx, {
                    className: x.marginTop40,
                    onClick: () => t(e),
                    children: _.intl.string(_.t.fIv16O)
                })
            ]
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                busy: !0,
                success: !1,
                user: null,
                category: null
            });
    }
}
E(I, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }), (t.Z = a.ZP.connectStores([m.Z], () => ({ defaultRoute: m.Z.defaultRoute }))(I));
