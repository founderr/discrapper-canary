n.d(t, {
  Wt: function() {
    return E
  },
  mc: function() {
    return _
  },
  q$: function() {
    return I
  }
}), n(411104), n(789020);
var s = n(570140),
  i = n(566620),
  l = n(728345),
  a = n(812206),
  r = n(973616),
  o = n(630388),
  c = n(591759),
  u = n(978085),
  d = n(981631);
async function E(e, t) {
  s.Z.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, i.W5)(e)) throw Error("Do not have access!");
    let n = a.Z.getApplication(e);
    null == n && (n = r.Z.createFromServer(await l.Z.fetchApplication(e)));
    let E = (0, o.yE)(n.flags, d.udG.EMBEDDED);
    if (E && (null == t || !c.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return !E && u.GR(n), s.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: E ? t : null
    }), n
  } catch (t) {
    return s.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function _() {
  s.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function I() {
  s.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}