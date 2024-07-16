t.d(s, {
  Z: function() {
return S;
  }
}), t(47120), t(653041);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(570140),
  d = t(622414),
  _ = t(171156),
  E = t(399002),
  u = t(369541),
  T = t(549856);
class I extends a.Component {
  renderTestCase(e, s, t, a, i) {
let o = null == s ? void 0 : s.summary;
return (0, n.jsxs)(l.FormText, {
  className: T.marginBottom20,
  children: [
    !0 === a ? '\u2705' : !0 === i ? '\u274C' : !0 === t ? '\uD83C\uDFCE️' : '',
    'speed test, bitrate = ',
    ((0, E.Hm)(e) / 1000).toFixed(0),
    ' kbps, framerate =',
    ' ',
    (0, E.vW)(e).toFixed(0),
    ' fps, duration = ',
    (0, E.tn)(e).toFixed(1),
    's, direction =',
    ' ',
    (0, E.K4)(e),
    void 0 !== o && (0, n.jsxs)('div', {
      children: [
        (0, n.jsxs)('div', {
          className: r()(T.marginTop8, T.marginBottom8),
          children: [
            'Loss ',
            100 * o.loss.toFixed(2),
            '%, Payload Bandwidth ',
            o.payloadBandwidth.toFixed(0),
            ' kbps, Network Bandwidth ',
            o.networkBandwidth.toFixed(0),
            ' kbps'
          ]
        }),
        (0, n.jsxs)('div', {
          className: r()(T.marginTop8, T.marginBottom8),
          children: [
            'IAT p50=',
            o.iatP50.toFixed(2),
            'ms, p95=',
            o.iatP95.toFixed(2),
            'ms, max=',
            o.iatMax.toFixed(2),
            'ms'
          ]
        })
      ]
    }),
    !1 === a && !0 === t && !1 === i && (0, n.jsx)('div', {
      children: (0, n.jsx)('div', {
        className: r()(T.marginTop8, T.marginBottom8),
        children: 'Test in progress. Results will appear when test completes.'
      })
    }),
    !1 === a && !0 === i && (0, n.jsx)('div', {
      children: (0, n.jsx)('div', {
        className: r()(T.marginTop8, T.marginBottom8),
        children: 'Test skipped.'
      })
    })
  ]
});
  }
  renderTestCases(e, s, t, n, a) {
if (!1 === e)
  return;
let i = [];
for (let [e, r] of t.entries()) {
  let t = e === a,
    o = null != a && e < a;
  i.push(this.renderTestCase(r, n[e], t, o, s));
}
return i;
  }
  renderPing(e, s, t) {
if (!1 === e)
  return;
let a = t.length > 0 ? (0, E.B9)(t) : null;
return (0, n.jsxs)(l.FormText, {
  className: T.marginBottom20,
  children: [
    s > u.N7.PINGING ? '\u2705' : s === u.N7.PINGING ? '\uD83C\uDFCE️' : '',
    'Ping endpoint',
    null !== a && (0, n.jsxs)('div', {
      className: r()(T.marginTop8, T.marginBottom8),
      children: [
        'Pinged ',
        a.count,
        ' time(s), min=',
        a.min,
        'ms, p50=',
        a.p50,
        'ms, max=',
        a.max,
        'ms'
      ]
    })
  ]
});
  }
  renderConnect(e, s, t) {
if (!1 !== e)
  return (0, n.jsxs)(l.FormText, {
    className: T.marginBottom20,
    children: [
      s > u.N7.CONNECTING ? '\u2705' : s === u.N7.CONNECTING ? '\uD83C\uDFCE️' : '',
      'Connect to ',
      null != t ? t : 'endpoint'
    ]
  });
  }
  renderNotes() {
return (0, n.jsx)(l.TextArea, {
  className: T.marginBottom20,
  value: this.state.notes,
  onChange: e => {
    _.Z.setNotes(e), this.setState({
      notes: e
    });
  },
  placeholder: 'Anything we should know about this test? Enter any relevant information about location, connection strength, or recent call quality here.'
});
  }
  renderAwaitingEndpoint(e, s) {
if (!1 !== e)
  return (0, n.jsxs)(l.FormText, {
    className: T.marginBottom20,
    children: [
      s > u.N7.AWAITING_ENDPOINT ? '\u2705' : s === u.N7.AWAITING_ENDPOINT ? '\uD83C\uDFCE️' : '',
      'Select endpoint'
    ]
  });
  }
  renderUpload(e, s) {
if (!1 !== e)
  return (0, n.jsxs)(l.FormText, {
    className: T.marginBottom20,
    children: [
      s > u.N7.UPLOADING ? '\u2705' : s === u.N7.UPLOADING ? '\uD83C\uDFCE️' : '',
      'Upload results'
    ]
  });
  }
  renderComplete(e, s) {
if (!1 !== e && s === u.N7.COMPLETED)
  return (0, n.jsx)(l.FormText, {
    className: T.marginBottom20,
    children: 'Your Speed Test is completed and the results have been uploaded. You may safely close this page.'
  });
  }
  render() {
let e = this.props.available,
  s = this.props.active,
  t = this.props.failed,
  a = this.props.endpoint,
  i = this.props.lifecycle,
  r = this.props.testCases,
  o = this.props.currentTest,
  c = this.props.testResults,
  _ = this.props.pings,
  E = s ? d.Z.stopSpeedTest : d.Z.startSpeedTest,
  I = i >= u.N7.AWAITING_ENDPOINT;
return !1 === e ? (0, n.jsx)(l.FormSection, {
  tag: l.FormTitleTags.H1,
  title: 'Speed Test',
  children: (0, n.jsx)(l.FormText, {
    className: T.marginBottom20,
    children: 'Sorry! The Speed Test is not currently available. Disconnect from any existing calls and try again.'
  })
}) : (0, n.jsxs)(l.FormSection, {
  tag: l.FormTitleTags.H1,
  title: 'Speed Test',
  children: [
    this.renderNotes(),
    (0, n.jsx)(l.FormItem, {
      className: T.marginBottom20,
      children: (0, n.jsx)('div', {
        children: (0, n.jsx)(l.Button, {
          onClick: () => E(),
          children: s ? 'Stop Speed Test' : 'Start Speed Test'
        })
      })
    }),
    this.renderAwaitingEndpoint(I, i),
    this.renderConnect(I, i, a),
    this.renderPing(I, i, _),
    this.renderTestCases(I, t, r, c, o),
    this.renderUpload(I, i),
    this.renderComplete(I, i)
  ]
});
  }
  constructor(...e) {
var s, t, n;
super(...e), s = this, t = 'state', n = {
  notes: this.props.notes
}, t in s ? Object.defineProperty(s, t, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[t] = n;
  }
}

function S() {
  let e = (0, o.cj)([_.Z], () => ({
  available: _.Z.getAvailable(),
  active: _.Z.getActive(),
  failed: _.Z.getFailed(),
  endpoint: _.Z.getEndpoint(),
  lifecycle: _.Z.getLifecycle(),
  testCases: _.Z.getTestCases(),
  testResults: _.Z.getTestResults(),
  currentTest: _.Z.getCurrentTest(),
  pings: _.Z.getPings(),
  notes: _.Z.getNotes()
})),
[s, t] = a.useState(0),
i = a.useCallback(e => {
  let {} = e;
  t(s + 1);
}, [s]);
  return a.useEffect(() => (c.Z.subscribe('RTC_SPEED_TEST_STATE_UPDATE', i), () => {
c.Z.unsubscribe('RTC_SPEED_TEST_STATE_UPDATE', i);
  }), [i]), (0, n.jsx)(I, {
...e
  });
}