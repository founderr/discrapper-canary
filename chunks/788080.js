n.d(t, {
  FB: function() {
return h;
  },
  Pu: function() {
return f;
  },
  Vt: function() {
return m;
  },
  XX: function() {
return u;
  },
  Zs: function() {
return N;
  },
  c7: function() {
return T;
  },
  eS: function() {
return _;
  },
  fr: function() {
return E;
  },
  ox: function() {
return I;
  }
}), n(724458);
var i = n(913527),
  a = n.n(i),
  s = n(406432),
  r = n(531441),
  l = n(800530),
  o = n(981631),
  c = n(959517),
  d = n(689938);

function u(e) {
  return a()().to(a()(e));
}

function _(e) {
  var t, n;
  return (0, s.CO)(e.filename) || (0, s.NU)(e.filename) ? ''.concat(c._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}

function E(e) {
  var t, n, i, a;
  if (null == e.fields)
return;
  let s = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
  return {
header: null !== (t = s[l.I5.HEADER]) && void 0 !== t ? t : '',
icon: s[l.I5.ICON_TYPE],
body: null !== (n = s[l.I5.BODY]) && void 0 !== n ? n : '',
ctas: (null !== (i = s[l.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter(e => '' !== e),
timestamp: parseFloat(null !== (a = s[l.I5.TIMESTAMP]) && void 0 !== a ? a : 0),
theme: s[l.I5.THEME],
learn_more_link: s[l.I5.LEARN_MORE_LINK],
classification_id: s[l.I5.CLASSIFICATION_ID]
  };
}

function m(e) {
  if (e.type === r.lK.MESSAGE)
return '' === e.content && 0 === e.attachments.length;
  return !0;
}
let I = e => ({
[l.bK.DIDNT_VIOLATE_POLICY]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
[l.bK.TOO_STRICT_UNFAIR]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
[l.bK.DONT_AGREE_PENALTY]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
[l.bK.SOMETHING_ELSE]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
  } [e]),
  T = e => null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1));

function h(e) {
  return null != e && null != e.guild_metadata;
}
let N = e => {
  if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION)
return d.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
  return d.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
};

function f(e) {
  let t = e.max_expiration_time;
  if (null == t)
return null;
  try {
return new Date(t);
  } catch {
return null;
  }
}