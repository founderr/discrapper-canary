t.d(n, {
  i: function() {
return a;
  }
});
var i = t(735250);
t(470079);
var o = t(481060);

function a(e) {
  let {
applicationName: n,
onConfirm: a,
onCancel: l
  } = e;
  return (0, o.openModalLazy)(async () => {
let {
  ConfirmNoSharedServerSubscribeWarningModal: e
} = await t.e('99809').then(t.bind(t, 525549));
return t => (0, i.jsx)(e, {
  ...t,
  applicationName: n,
  onConfirm: a,
  onCancel: l
});
  }, {
modalKey: 'application-user-subscribe-no-shared-server-warning'
  });
}