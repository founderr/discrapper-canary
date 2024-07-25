t.d(n, {
  i: function() {
return l;
  }
});
var i = t(735250);
t(470079);
var o = t(481060);

function l(e) {
  let {
applicationName: n,
onConfirm: l,
onCancel: a
  } = e;
  return (0, o.openModalLazy)(async () => {
let {
  ConfirmNoSharedServerSubscribeWarningModal: e
} = await t.e('99809').then(t.bind(t, 525549));
return t => (0, i.jsx)(e, {
  ...t,
  applicationName: n,
  onConfirm: l,
  onCancel: a
});
  }, {
modalKey: 'application-user-subscribe-no-shared-server-warning'
  });
}