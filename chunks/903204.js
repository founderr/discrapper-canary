n.d(e, {
  R: function() {
    return _
  }
});
var r = n(861579),
  i = n(139782),
  a = n(468391),
  s = n(529866),
  o = n(854569),
  l = n(177668),
  u = n(590171),
  c = n(643487),
  d = n(124969),
  h = n(184612);
class _ extends r.W {
  constructor(t) {
    let e = c.m9.SENTRY_SDK_SOURCE || (0, a.S)();
    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: `${e}:@sentry/browser`,
        version: i.J
      }],
      version: i.J
    }, super(t), t.sendClientReports && c.m9.document && c.m9.document.addEventListener("visibilitychange", () => {
      "hidden" === c.m9.document.visibilityState && this._flushOutcomes()
    })
  }
  eventFromException(t, e) {
    return (0, u.dr)(this._options.stackParser, t, e, this._options.attachStacktrace)
  }
  eventFromMessage(t, e = "info", n) {
    return (0, u.aB)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
  }
  sendEvent(t, e) {
    let n = this.getIntegrationById(d.p);
    n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn("SDK not enabled, will not capture user feedback.");
      return
    }
    let e = (0, h.r)(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this._sendEnvelope(e)
  }
  _prepareEvent(t, e, n) {
    return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
  }
  _flushOutcomes() {
    let t = this._clearOutcomes();
    if (0 === t.length) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log("No outcomes to send");
      return
    }
    if (!this._dsn) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log("No dsn provided, will not send outcomes");
      return
    }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.log("Sending outcomes:", t);
    let e = (0, o.y)(t, this._options.tunnel && (0, l.RA)(this._dsn));
    this._sendEnvelope(e)
  }
}