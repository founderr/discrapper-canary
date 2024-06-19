n.d(t, {
  t: function() {
    return I
  }
}), n(411104);
var a = n(470079),
  r = n(512722),
  o = n.n(r),
  s = n(478677),
  l = n(457330),
  u = n(275759),
  i = n(489863),
  c = n(497350);
async function d(e, t, n) {
  var a, r, i, d;
  let I = (0, c.B)(e);
  if (null == I) throw await E(n, 1, "authorize"), Error("Unsupported client_id for two way link");
  let C = null;
  try {
    let {
      body: e
    } = await l.Z.authorize(I, {
      twoWayLinkType: s.g.DEVICE_CODE,
      userCode: n
    });
    C = e.url
  } catch (e) {
    throw await E(n, null !== (r = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.code) && void 0 !== r ? r : 0, "authorize"), Error("error during two way authorize")
  }
  let _ = null;
  try {
    o()(null != C, "No URL in authorize response");
    let {
      state: e
    } = (0, u.xp)(C);
    o()(null != e, "Authorize URL state query parameter must be present"), _ = e
  } catch (e) {
    throw await E(n, 2, "authorize"), Error("error parsing callback params")
  }
  try {
    await l.Z.callback(I, {
      code: t,
      state: _
    })
  } catch (e) {
    throw await E(n, null !== (d = null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.code) && void 0 !== d ? d : 0, "callback"), Error("error during two way callback")
  }
}
async function E(e, t, n) {
  try {
    await (0, i.i2)(e, t, n)
  } catch (e) {}
}

function I(e, t, n, r) {
  return a.useCallback(async a => {
    if (!a) {
      try {
        await (0, i.tR)(e.userCode, "denied")
      } catch (e) {}
      t();
      return
    }
    if (null == e.twoWayLinkCode) try {
      await (0, i.tR)(e.userCode, "granted"), r(e)
    } catch (t) {
      n(e)
    } else try {
      await d(e.clientId, e.twoWayLinkCode, e.userCode), r(e)
    } catch (t) {
      n(e)
    }
  }, [e, t, n, r])
}