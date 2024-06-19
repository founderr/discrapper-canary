n.r(s), n.d(s, {
  ActivityAgeGateModal: function() {
    return r
  }
});
var t = n(735250);
n(470079);
var i = n(481060),
  o = n(499371),
  a = n(689938),
  c = n(735134);

function r(e) {
  let {
    application: s,
    onAgree: n,
    onClose: r,
    onDisagree: l,
    ...d
  } = e;
  return (0, t.jsx)(i.ModalRoot, {
    ...d,
    children: (0, t.jsx)("div", {
      children: (0, t.jsx)(o.Z, {
        onAgree: () => {
          n(), r()
        },
        onDisagree: () => {
          l(), r()
        },
        title: a.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
        description: a.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
          applicationName: s.name
        }),
        agreement: a.Z.Messages.NSFW_ACCEPT,
        disagreement: a.Z.Messages.NSFW_DECLINE,
        imageClassName: c.image
      })
    })
  })
}