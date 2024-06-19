n.d(t, {
  Z: function() {
    return _
  }
}), n(47120), n(653041);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(812206),
  r = n(82950),
  o = n(434404),
  c = n(106976),
  u = n(270144),
  d = n(981631),
  E = n(689938),
  h = n(466389);

function _(e) {
  let {
    guild: t
  } = e, n = (0, u.h6)(t), _ = () => (0, c.sB)(t.id), I = s.useMemo(() => new Set(n.map(e => e.applicationId)), [n]), m = (0, l.Wu)([a.Z], () => {
    let e = [];
    for (let t of I) {
      let n = a.Z.getApplication(t);
      null != n && e.push(n)
    }
    return e
  }, [I]);
  if (0 === m.length) return null;
  let g = "";
  return g = 1 === m.length ? E.Z.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: m[0].name
  }) : 2 === m.length ? E.Z.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: m[0].name,
    b: m[1].name
  }) : 3 === m.length ? E.Z.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: m[0].name,
    b: m[1].name,
    c: m[2].name
  }) : E.Z.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, i.jsx)(r.Z, {
    guild: t,
    onDismissed: _,
    message: g,
    type: d.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: h,
    onClick: () => {
      _(), o.Z.open(t.id, d.pNK.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: E.Z.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  })
}