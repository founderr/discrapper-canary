n.d(t, {
    E: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    u = n(585237),
    c = n(812206),
    d = n(55563),
    _ = n(73346),
    E = n(689938);
function f(e, t, n) {
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
let h = {
    DropdownSizes: u.Z.DropdownSizes,
    Sizes: u.Z.Sizes,
    Colors: u.Z.Colors,
    Looks: u.Z.Looks
};
class p extends a.PureComponent {
    render() {
        let { skus: e, children: t, applicationId: n, primarySKU: r, onSKUSelect: a, ...o } = this.props;
        return (0, i.jsx)(u.Z, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...o,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'renderContextMenu', () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, i.jsx)(s.Menu, {
                    onSelect: n,
                    navId: 'test-skus',
                    'aria-label': E.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: l.Zy,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            s.MenuItem,
                            {
                                id: ''.concat(e.id),
                                label: e.name,
                                action: () => {
                                    null == t || t(e);
                                }
                            },
                            ''.concat(e.id)
                        )
                    )
                });
            }),
            f(this, 'handleContextMenu', (e) => {
                e.stopPropagation(), l.vq(e, this.renderContextMenu);
            }),
            f(this, 'handleClick', () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
t.Z = o.ZP.connectStores([d.Z, c.Z], (e) => {
    var t;
    let { applicationId: n } = e,
        r = (0, _.uF)(n, c.Z, d.Z);
    return {
        skus: (null !== (t = d.Z.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => (null != r && e.id === r.id ? -1 : null != r && t.id === r.id ? 1 : e.name >= t.name ? -1 : 1)),
        primarySKU: r
    };
})(p);
