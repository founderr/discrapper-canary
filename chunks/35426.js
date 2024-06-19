t.d(s, {
  Z: function() {
    return I
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  E = t(622414),
  d = t(171156),
  _ = t(399002),
  T = t(369541),
  S = t(331651);
class u extends i.Component {
  renderTestCase(e, s, t, i, a) {
    let r = null == s ? void 0 : s.summary;
    return (0, n.jsxs)(o.FormText, {
      className: S.marginBottom20,
      children: [!0 === i ? "✅" : !0 === a ? "❌" : !0 === t ? "\uD83C\uDFCE️" : "", "speed test, bitrate = ", ((0, _.Hm)(e) / 1e3).toFixed(0), " kbps, framerate =", " ", (0, _.vW)(e).toFixed(0), " fps, duration = ", (0, _.tn)(e).toFixed(1), "s, direction =", " ", (0, _.K4)(e), void 0 !== r && (0, n.jsxs)("div", {
        children: [(0, n.jsxs)("div", {
          className: l()(S.marginTop8, S.marginBottom8),
          children: ["Loss ", 100 * r.loss.toFixed(2), "%, Payload Bandwidth ", r.payloadBandwidth.toFixed(0), " kbps, Network Bandwidth ", r.networkBandwidth.toFixed(0), " kbps"]
        }), (0, n.jsxs)("div", {
          className: l()(S.marginTop8, S.marginBottom8),
          children: ["IAT p50=", r.iatP50.toFixed(2), "ms, p95=", r.iatP95.toFixed(2), "ms, max=", r.iatMax.toFixed(2), "ms"]
        })]
      }), !1 === i && !0 === t && !1 === a && (0, n.jsx)("div", {
        children: (0, n.jsx)("div", {
          className: l()(S.marginTop8, S.marginBottom8),
          children: "Test in progress. Results will appear when test completes."
        })
      }), !1 === i && !0 === a && (0, n.jsx)("div", {
        children: (0, n.jsx)("div", {
          className: l()(S.marginTop8, S.marginBottom8),
          children: "Test skipped."
        })
      })]
    })
  }
  renderTestCases(e, s, t, n, i) {
    if (!1 === e) return;
    let a = [];
    for (let [e, l] of t.entries()) {
      let t = e === i,
        r = null != i && e < i;
      a.push(this.renderTestCase(l, n[e], t, r, s))
    }
    return a
  }
  renderPing(e, s, t) {
    if (!1 === e) return;
    let i = t.length > 0 ? (0, _.B9)(t) : null;
    return (0, n.jsxs)(o.FormText, {
      className: S.marginBottom20,
      children: [s > T.N7.PINGING ? "✅" : s === T.N7.PINGING ? "\uD83C\uDFCE️" : "", "Ping endpoint", null !== i && (0, n.jsxs)("div", {
        className: l()(S.marginTop8, S.marginBottom8),
        children: ["Pinged ", i.count, " time(s), min=", i.min, "ms, p50=", i.p50, "ms, max=", i.max, "ms"]
      })]
    })
  }
  renderConnect(e, s, t) {
    if (!1 !== e) return (0, n.jsxs)(o.FormText, {
      className: S.marginBottom20,
      children: [s > T.N7.CONNECTING ? "✅" : s === T.N7.CONNECTING ? "\uD83C\uDFCE️" : "", "Connect to ", null != t ? t : "endpoint"]
    })
  }
  renderNotes() {
    return (0, n.jsx)(o.TextArea, {
      className: S.marginBottom20,
      value: this.state.notes,
      onChange: e => {
        d.Z.setNotes(e), this.setState({
          notes: e
        })
      },
      placeholder: "Anything we should know about this test? Enter any relevant information about location, connection strength, or recent call quality here."
    })
  }
  renderAwaitingEndpoint(e, s) {
    if (!1 !== e) return (0, n.jsxs)(o.FormText, {
      className: S.marginBottom20,
      children: [s > T.N7.AWAITING_ENDPOINT ? "✅" : s === T.N7.AWAITING_ENDPOINT ? "\uD83C\uDFCE️" : "", "Select endpoint"]
    })
  }
  renderUpload(e, s) {
    if (!1 !== e) return (0, n.jsxs)(o.FormText, {
      className: S.marginBottom20,
      children: [s > T.N7.UPLOADING ? "✅" : s === T.N7.UPLOADING ? "\uD83C\uDFCE️" : "", "Upload results"]
    })
  }
  renderComplete(e, s) {
    if (!1 !== e && s === T.N7.COMPLETED) return (0, n.jsx)(o.FormText, {
      className: S.marginBottom20,
      children: "Your Speed Test is completed and the results have been uploaded. You may safely close this page."
    })
  }
  render() {
    let e = this.props.available,
      s = this.props.active,
      t = this.props.failed,
      i = this.props.endpoint,
      a = this.props.lifecycle,
      l = this.props.testCases,
      r = this.props.currentTest,
      c = this.props.testResults,
      d = this.props.pings,
      _ = s ? E.Z.stopSpeedTest : E.Z.startSpeedTest,
      u = a >= T.N7.AWAITING_ENDPOINT;
    return !1 === e ? (0, n.jsx)(o.FormSection, {
      tag: o.FormTitleTags.H1,
      title: "Speed Test",
      children: (0, n.jsx)(o.FormText, {
        className: S.marginBottom20,
        children: "Sorry! The Speed Test is not currently available. Disconnect from any existing calls and try again."
      })
    }) : (0, n.jsxs)(o.FormSection, {
      tag: o.FormTitleTags.H1,
      title: "Speed Test",
      children: [this.renderNotes(), (0, n.jsx)(o.FormItem, {
        className: S.marginBottom20,
        children: (0, n.jsx)("div", {
          children: (0, n.jsx)(o.Button, {
            onClick: () => _(),
            children: s ? "Stop Speed Test" : "Start Speed Test"
          })
        })
      }), this.renderAwaitingEndpoint(u, a), this.renderConnect(u, a, i), this.renderPing(u, a, d), this.renderTestCases(u, t, l, c, r), this.renderUpload(u, a), this.renderComplete(u, a)]
    })
  }
  constructor(...e) {
    var s, t, n;
    super(...e), s = this, t = "state", n = {
      notes: this.props.notes
    }, t in s ? Object.defineProperty(s, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : s[t] = n
  }
}

function I() {
  let e = (0, r.cj)([d.Z], () => ({
      available: d.Z.getAvailable(),
      active: d.Z.getActive(),
      failed: d.Z.getFailed(),
      endpoint: d.Z.getEndpoint(),
      lifecycle: d.Z.getLifecycle(),
      testCases: d.Z.getTestCases(),
      testResults: d.Z.getTestResults(),
      currentTest: d.Z.getCurrentTest(),
      pings: d.Z.getPings(),
      notes: d.Z.getNotes()
    })),
    [s, t] = i.useState(0),
    a = i.useCallback(e => {
      let {} = e;
      t(s + 1)
    }, [s]);
  return i.useEffect(() => (c.Z.subscribe("RTC_SPEED_TEST_STATE_UPDATE", a), () => {
    c.Z.unsubscribe("RTC_SPEED_TEST_STATE_UPDATE", a)
  }), [a]), (0, n.jsx)(u, {
    ...e
  })
}