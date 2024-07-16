i.r(t), i.d(t, {
  ActivityAgeGateModal: function() {
return r;
  }
});
var n = i(735250);
i(470079);
var s = i(481060),
  o = i(986035),
  a = i(689938),
  c = i(231490);

function r(e) {
  let {
application: t,
onAgree: i,
onClose: r,
onDisagree: l,
...d
  } = e;
  return (0, n.jsx)(s.ModalRoot, {
...d,
children: (0, n.jsx)('div', {
  children: (0, n.jsx)(o.Z, {
    onAgree: () => {
      i(), r();
    },
    onDisagree: () => {
      l(), r();
    },
    title: a.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
    description: a.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
      applicationName: t.name
    }),
    agreement: a.Z.Messages.NSFW_ACCEPT,
    disagreement: a.Z.Messages.NSFW_DECLINE,
    imageClassName: c.image
  })
})
  });
}