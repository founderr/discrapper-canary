r.d(t, {
    s: function () {
        return I;
    }
});
var n = r(731889),
    a = r(573736),
    o = r(101284),
    i = r(394798),
    _ = r(622916),
    E = r(112797),
    s = r(99342);
class c {
    constructor() {
        (this._notifyingListeners = !1), (this._scopeListeners = []), (this._eventProcessors = []), (this._breadcrumbs = []), (this._attachments = []), (this._user = {}), (this._tags = {}), (this._extra = {}), (this._contexts = {}), (this._sdkProcessingMetadata = {}), (this._propagationContext = (0, n.Q)());
    }
    clone() {
        let e = new c();
        return (e._breadcrumbs = [...this._breadcrumbs]), (e._tags = { ...this._tags }), (e._extra = { ...this._extra }), (e._contexts = { ...this._contexts }), (e._user = this._user), (e._level = this._level), (e._session = this._session), (e._transactionName = this._transactionName), (e._fingerprint = this._fingerprint), (e._eventProcessors = [...this._eventProcessors]), (e._requestSession = this._requestSession), (e._attachments = [...this._attachments]), (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }), (e._propagationContext = { ...this._propagationContext }), (e._client = this._client), (e._lastEventId = this._lastEventId), (0, s.D)(e, (0, s.Y)(this)), e;
    }
    setClient(e) {
        this._client = e;
    }
    setLastEventId(e) {
        this._lastEventId = e;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(e) {
        this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e), this;
    }
    setUser(e) {
        return (
            (this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0
            }),
            this._session && (0, E.CT)(this._session, { user: e }),
            this._notifyScopeListeners(),
            this
        );
    }
    getUser() {
        return this._user;
    }
    getRequestSession() {
        return this._requestSession;
    }
    setRequestSession(e) {
        return (this._requestSession = e), this;
    }
    setTags(e) {
        return (
            (this._tags = {
                ...this._tags,
                ...e
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setTag(e, t) {
        return (
            (this._tags = {
                ...this._tags,
                [e]: t
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtras(e) {
        return (
            (this._extra = {
                ...this._extra,
                ...e
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setExtra(e, t) {
        return (
            (this._extra = {
                ...this._extra,
                [e]: t
            }),
            this._notifyScopeListeners(),
            this
        );
    }
    setFingerprint(e) {
        return (this._fingerprint = e), this._notifyScopeListeners(), this;
    }
    setLevel(e) {
        return (this._level = e), this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
        return (this._transactionName = e), this._notifyScopeListeners(), this;
    }
    setContext(e, t) {
        return null === t ? delete this._contexts[e] : (this._contexts[e] = t), this._notifyScopeListeners(), this;
    }
    setSession(e) {
        return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(e) {
        if (!e) return this;
        let t = 'function' == typeof e ? e(this) : e,
            [r, n] = t instanceof I ? [t.getScopeData(), t.getRequestSession()] : (0, a.PO)(t) ? [e, e.requestSession] : [],
            { tags: o, extra: i, user: _, contexts: E, level: s, fingerprint: c = [], propagationContext: u } = r || {};
        return (
            (this._tags = {
                ...this._tags,
                ...o
            }),
            (this._extra = {
                ...this._extra,
                ...i
            }),
            (this._contexts = {
                ...this._contexts,
                ...E
            }),
            _ && Object.keys(_).length && (this._user = _),
            s && (this._level = s),
            c.length && (this._fingerprint = c),
            u && (this._propagationContext = u),
            n && (this._requestSession = n),
            this
        );
    }
    clear() {
        return (this._breadcrumbs = []), (this._tags = {}), (this._extra = {}), (this._user = {}), (this._contexts = {}), (this._level = void 0), (this._transactionName = void 0), (this._fingerprint = void 0), (this._requestSession = void 0), (this._session = void 0), (0, s.D)(this, void 0), (this._attachments = []), (this._propagationContext = (0, n.Q)()), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(e, t) {
        let r = 'number' == typeof t ? t : 100;
        if (r <= 0) return this;
        let n = {
                timestamp: (0, o.yW)(),
                ...e
            },
            a = this._breadcrumbs;
        return a.push(n), (this._breadcrumbs = a.length > r ? a.slice(-r) : a), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
        return this._attachments.push(e), this;
    }
    clearAttachments() {
        return (this._attachments = []), this;
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, s.Y)(this)
        };
    }
    setSDKProcessingMetadata(e) {
        return (
            (this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }),
            this
        );
    }
    setPropagationContext(e) {
        return (this._propagationContext = e), this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(e, t) {
        let r = t && t.event_id ? t.event_id : (0, i.DM)();
        if (!this._client) return _.kg.warn('No client configured on scope - will not capture exception!'), r;
        let n = Error('Sentry syntheticException');
        return (
            this._client.captureException(
                e,
                {
                    originalException: e,
                    syntheticException: n,
                    ...t,
                    event_id: r
                },
                this
            ),
            r
        );
    }
    captureMessage(e, t, r) {
        let n = r && r.event_id ? r.event_id : (0, i.DM)();
        if (!this._client) return _.kg.warn('No client configured on scope - will not capture message!'), n;
        let a = Error(e);
        return (
            this._client.captureMessage(
                e,
                t,
                {
                    originalException: e,
                    syntheticException: a,
                    ...r,
                    event_id: n
                },
                this
            ),
            n
        );
    }
    captureEvent(e, t) {
        let r = t && t.event_id ? t.event_id : (0, i.DM)();
        return this._client
            ? (this._client.captureEvent(
                  e,
                  {
                      ...t,
                      event_id: r
                  },
                  this
              ),
              r)
            : (_.kg.warn('No client configured on scope - will not capture event!'), r);
    }
    _notifyScopeListeners() {
        !this._notifyingListeners &&
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((e) => {
                e(this);
            }),
            (this._notifyingListeners = !1));
    }
}
let I = c;
