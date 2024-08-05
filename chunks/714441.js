t.d(n, {
  i: function() {
return o;
  }
});
var r = t(735250);
t(470079);
var i = t(481060);

function o(e) {
  let {
applicationName: n,
onConfirm: o,
onCancel: l
  } = e;
  return (0, i.openModalLazy)(async () => {
let {
  ConfirmNoSharedServerSubscribeWarningModal: e
} = await t.e('99809').then(t.bind(t, 525549));
return t => (0, r.jsx)(e, {
  ...t,
  applicationName: n,
  onConfirm: o,
  onCancel: l
});
  }, {
modalKey: 'application-user-subscribe-no-shared-server-warning'
  });
}