n.d(t, {
  c: function() {
    return l
  }
}), n(47120);
var a = n(470079),
  r = n(489863),
  o = n(828878),
  s = n(689938);

function l(e, t, n) {
  let [l, u] = a.useState(!1), [i, c] = a.useState(null), d = a.useCallback(async () => {
    try {
      u(!0);
      let n = await (0, r.tV)(e);
      u(!1), t({
        userCode: e,
        clientId: n.body.client_id,
        scopes: n.body.scopes,
        twoWayLinkCode: n.body.two_way_link_code
      })
    } catch (e) {
      var a;
      c(429 === (a = null == e ? void 0 : e.status) ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_RATE_LIMIT : 404 === a || 400 === a ? s.Z.Messages.ACTIVATE_DEVICE_ERROR_BAD_CODE : s.Z.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN), u(!1), (null == e ? void 0 : e.status) === 401 && n()
    }
  }, [e, t, n]);
  return a.useEffect(() => {
    e.length === o.A.USER_CODE_LENGTH ? d() : c(null)
  }, [e, d]), {
    manualSubmit: d,
    error: i,
    submitting: l
  }
}