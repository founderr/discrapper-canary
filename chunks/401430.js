"use strict";
n.r(t), n.d(t, {
  authorizeAndSetTestModeApplication: function() {
    return E
  },
  reset: function() {
    return f
  },
  resetError: function() {
    return _
  }
}), n("411104"), n("789020");
var s = n("570140"),
  l = n("566620"),
  a = n("728345"),
  i = n("812206"),
  r = n("973616"),
  o = n("630388"),
  u = n("591759"),
  d = n("978085"),
  c = n("981631");
async function E(e, t) {
  s.default.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, l.validateTestMode)(e)) throw Error("Do not have access!");
    let n = i.default.getApplication(e);
    null == n && (n = r.default.createFromServer(await a.default.fetchApplication(e)));
    let E = (0, o.hasFlag)(n.flags, c.ApplicationFlags.EMBEDDED);
    if (E && (null == t || !u.default.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return !E && d.createTestModeLibraryApplications(n), s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: E ? t : null
    }), n
  } catch (t) {
    return s.default.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function f() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function _() {
  s.default.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}