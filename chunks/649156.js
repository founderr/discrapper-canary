var s = n(735250);
n(470079);
var i = n(3570),
  r = n(685311),
  a = n(186901);
t.Z = function(e) {
  let {
    match: t,
    location: n
  } = e, l = async (e, t) => {
    await (0, i.s)(a.jE.PICK_GUILD_SETTINGS, {
      section: e.params.section,
      subsection: e.params.subsection,
      search: t.search
    })
  };
  return (0, s.jsx)(r.Z, {
    match: t,
    location: n,
    attemptDeepLink: l
  })
}