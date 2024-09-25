var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(209185),
    l = n(406128),
    u = n(706454),
    c = n(229588),
    d = n(689938),
    _ = n(303432);
function E(e) {
    let { locale: t, children: n } = e,
        [r, a] = (0, o.Wu)([c.Z], () => [c.Z.isLoading(), c.Z.getError()]);
    return null != a
        ? (0, i.jsx)(l.Z, {
              title: d.Z.Messages.I18N_LOCALE_LOADING_ERROR.format({ locale: t }),
              note: (0, i.jsx)('span', { children: a.message })
          })
        : r
          ? __OVERLAY__
              ? null
              : (0, i.jsx)('div', { className: _.loading })
          : n;
}
class f extends a.Component {
    render() {
        let { locale: e, children: t } = this.props;
        return (0, i.jsx)(E, {
            locale: e,
            children: t
        });
    }
    constructor(e) {
        super(e), s.$(e.locale, !0);
    }
}
t.Z = o.ZP.connectStores([u.default], () => ({ locale: u.default.locale }))(f);
