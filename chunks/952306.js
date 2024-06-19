var n = t(735250);
t(470079);
var i = t(481060),
  a = t(723359),
  l = t(231338);
s.Z = {
  openNewUserAgeGateModal: e => {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("20727")]).then(t.bind(t, 298237));
      return s => (0, n.jsx)(e, {
        ...s
      })
    }, {
      modalKey: a.$$,
      onCloseRequest: l.dG,
      onCloseCallback: e
    })
  },
  openClaimAccountModal: function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      s = arguments.length > 1 ? arguments[1] : void 0;
    (0, i.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([t.e("99387"), t.e("69495")]).then(t.bind(t, 324239));
      return t => (0, n.jsx)(s, {
        claimRequired: e,
        ...t
      })
    }, {
      onCloseRequest: e ? l.dG : null,
      onCloseCallback: s
    })
  }
}