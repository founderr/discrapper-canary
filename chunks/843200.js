var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(600164),
    m = n(594174),
    h = n(418632),
    g = n(388032),
    p = n(167836);
class x extends s.Component {
    renderNotice() {
        let { isClaimed: e, unclaimedNotice: t, unverifiedNotice: n } = this.props;
        return e ? (null != n ? n : g.intl.string(g.t.WuyBbG)) : null != t ? t : g.intl.string(g.t['f+Zaoq']);
    }
    renderPrimaryAction() {
        return this.props.isClaimed
            ? this.props.hasEmail
                ? (0, i.jsx)(u.Z.Child, {
                      grow: 0,
                      shrink: 0,
                      children: (0, i.jsx)(h.Z, {})
                  })
                : (0, i.jsx)(d.Button, {
                      size: d.Button.Sizes.MEDIUM,
                      color: d.Button.Colors.BRAND,
                      onClick: this.openChangeEmailModal,
                      children: g.intl.string(g.t.ydw5nZ)
                  })
            : (0, i.jsx)(u.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(d.Button, {
                      size: d.Button.Sizes.MEDIUM,
                      color: d.Button.Colors.BRAND,
                      onClick: this.openClaimAccountModal,
                      children: g.intl.string(g.t.fiNVio)
                  })
              });
    }
    renderSecondaryAction() {
        return this.props.isClaimed && this.props.hasEmail
            ? (0, i.jsx)(u.Z.Child, {
                  grow: 0,
                  shrink: 0,
                  children: (0, i.jsx)(d.Button, {
                      color: d.Button.Colors.PRIMARY,
                      look: d.Button.Looks.LINK,
                      onClick: this.openChangeEmailModal,
                      children: g.intl.string(g.t.Vm8akJ)
                  })
              })
            : null;
    }
    openClaimAccountModal() {
        (0, d.openModalLazy)(async () => {
            let { default: e } = await n.e('60827').then(n.bind(n, 324239));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    openChangeEmailModal() {
        (0, d.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('9343'), n.e('1861')]).then(n.bind(n, 642298));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    render() {
        let { className: e, isClaimed: t, isVerified: n } = this.props;
        return t && n
            ? null
            : (0, i.jsx)(d.Card, {
                  className: l()(p.wrapper, e),
                  children: (0, i.jsxs)(u.Z, {
                      align: u.Z.Align.CENTER,
                      children: [
                          (0, i.jsx)(u.Z.Child, {
                              className: p.image,
                              grow: 0,
                              shrink: 0
                          }),
                          (0, i.jsxs)(u.Z.Child, {
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: 'text-sm/normal',
                                      children: this.renderNotice()
                                  }),
                                  (0, i.jsxs)(u.Z, {
                                      justify: u.Z.Justify.CENTER,
                                      className: p.content,
                                      children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
                                  })
                              ]
                          })
                      ]
                  })
              });
    }
}
t.Z = c.ZP.connectStores([m.default], () => {
    let e = m.default.getCurrentUser();
    return (
        o()(null != e, 'EmailNotice: currentUser cannot be undefined'),
        {
            isClaimed: e.isClaimed(),
            isVerified: e.verified,
            hasEmail: null != e.email
        }
    );
})(x);
