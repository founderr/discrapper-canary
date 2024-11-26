r.r(t),
    r.d(t, {
        BrowserClient: function () {
            return _.R;
        },
        SDK_VERSION: function () {
            return a.Jn;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_OP: function () {
            return a.$J;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function () {
            return a.S3;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function () {
            return a.TE;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function () {
            return a.Zj;
        },
        Scope: function () {
            return a.sX;
        },
        WINDOW: function () {
            return n.m9;
        },
        addBreadcrumb: function () {
            return a.n_;
        },
        addEventProcessor: function () {
            return a.Qy;
        },
        addIntegration: function () {
            return a.M5;
        },
        addTracingExtensions: function () {
            return a.Ts;
        },
        breadcrumbsIntegration: function () {
            return l.f;
        },
        browserApiErrorsIntegration: function () {
            return A.t;
        },
        browserProfilingIntegration: function () {
            return U.x;
        },
        browserTracingIntegration: function () {
            return P.E8;
        },
        captureConsoleIntegration: function () {
            return a.Xs;
        },
        captureEvent: function () {
            return a.eN;
        },
        captureException: function () {
            return a.Tb;
        },
        captureFeedback: function () {
            return a.N$;
        },
        captureMessage: function () {
            return a.uT;
        },
        captureSession: function () {
            return a.cg;
        },
        captureUserFeedback: function () {
            return s.Jd;
        },
        chromeStackLineParser: function () {
            return E.$3;
        },
        close: function () {
            return a.xv;
        },
        contextLinesIntegration: function () {
            return f.S;
        },
        continueTrace: function () {
            return a.yn;
        },
        createTransport: function () {
            return a.qv;
        },
        createUserFeedbackEnvelope: function () {
            return c.r;
        },
        debugIntegration: function () {
            return a.sC;
        },
        dedupeIntegration: function () {
            return a.RH;
        },
        defaultRequestInstrumentationOptions: function () {
            return C.k3;
        },
        defaultStackLineParsers: function () {
            return E.d8;
        },
        defaultStackParser: function () {
            return E.Dt;
        },
        endSession: function () {
            return a.TM;
        },
        eventFromException: function () {
            return i.dr;
        },
        eventFromMessage: function () {
            return i.aB;
        },
        exceptionFromError: function () {
            return i.GJ;
        },
        extraErrorDataIntegration: function () {
            return a.EY;
        },
        feedbackAsyncIntegration: function () {
            return p.Q;
        },
        feedbackIntegration: function () {
            return h.r;
        },
        feedbackSyncIntegration: function () {
            return h.r;
        },
        flush: function () {
            return a.yl;
        },
        forceLoad: function () {
            return s.Eg;
        },
        functionToStringIntegration: function () {
            return a.CP;
        },
        geckoStackLineParser: function () {
            return E.$Q;
        },
        getActiveSpan: function () {
            return a.HN;
        },
        getClient: function () {
            return a.s3;
        },
        getCurrentHub: function () {
            return a.Gd;
        },
        getCurrentScope: function () {
            return a.nZ;
        },
        getDefaultIntegrations: function () {
            return s.nV;
        },
        getFeedback: function () {
            return D.qm;
        },
        getGlobalScope: function () {
            return a.lW;
        },
        getIsolationScope: function () {
            return a.aF;
        },
        getReplay: function () {
            return O.T;
        },
        getRootSpan: function () {
            return a.Gx;
        },
        getSpanDescendants: function () {
            return a.Dp;
        },
        getSpanStatusFromHttpCode: function () {
            return a.ix;
        },
        globalHandlersIntegration: function () {
            return I.k;
        },
        httpClientIntegration: function () {
            return d.l;
        },
        httpContextIntegration: function () {
            return u.s;
        },
        inboundFiltersIntegration: function () {
            return a.SG;
        },
        init: function () {
            return s.S1;
        },
        instrumentOutgoingRequests: function () {
            return C.L7;
        },
        isInitialized: function () {
            return a.dk;
        },
        lastEventId: function () {
            return a.eW;
        },
        lazyLoadIntegration: function () {
            return T.R;
        },
        linkedErrorsIntegration: function () {
            return R.O;
        },
        makeBrowserOfflineTransport: function () {
            return g.O1;
        },
        makeFetchTransport: function () {
            return o.f;
        },
        makeMultiplexedTransport: function () {
            return a.Wq;
        },
        metrics: function () {
            return S.q;
        },
        moduleMetadataIntegration: function () {
            return a.wo;
        },
        onLoad: function () {
            return s.lA;
        },
        opera10StackLineParser: function () {
            return E.NP;
        },
        opera11StackLineParser: function () {
            return E.HH;
        },
        parameterize: function () {
            return a.XB;
        },
        registerSpanErrorInstrumentation: function () {
            return a.ar;
        },
        replayCanvasIntegration: function () {
            return L.m;
        },
        replayIntegration: function () {
            return O.G;
        },
        reportingObserverIntegration: function () {
            return N.y;
        },
        rewriteFramesIntegration: function () {
            return a.vU;
        },
        sendFeedback: function () {
            return D.fA;
        },
        sessionTimingIntegration: function () {
            return a.rE;
        },
        setContext: function () {
            return a.v;
        },
        setCurrentClient: function () {
            return a.KW;
        },
        setExtra: function () {
            return a.sU;
        },
        setExtras: function () {
            return a.rJ;
        },
        setHttpStatus: function () {
            return a.Q0;
        },
        setMeasurement: function () {
            return a.oi;
        },
        setTag: function () {
            return a.YA;
        },
        setTags: function () {
            return a.mG;
        },
        setUser: function () {
            return a.av;
        },
        showReportDialog: function () {
            return s.jp;
        },
        spanToBaggageHeader: function () {
            return a.uc;
        },
        spanToJSON: function () {
            return a.XU;
        },
        spanToTraceHeader: function () {
            return a.Hb;
        },
        startBrowserTracingNavigationSpan: function () {
            return P.og;
        },
        startBrowserTracingPageLoadSpan: function () {
            return P.Wo;
        },
        startInactiveSpan: function () {
            return a.qp;
        },
        startNewTrace: function () {
            return a.Iw;
        },
        startSession: function () {
            return a.yj;
        },
        startSpan: function () {
            return a.GK;
        },
        startSpanManual: function () {
            return a.V0;
        },
        thirdPartyErrorFilterIntegration: function () {
            return a.Lw;
        },
        winjsStackLineParser: function () {
            return E.R2;
        },
        withActiveSpan: function () {
            return a._d;
        },
        withIsolationScope: function () {
            return a.wi;
        },
        withScope: function () {
            return a.$e;
        },
        zodErrorsIntegration: function () {
            return a.id;
        }
    });
var a = r(148503),
    n = r(163162),
    _ = r(833772),
    o = r(387486),
    E = r(297117),
    i = r(878719),
    c = r(463461),
    s = r(509068),
    l = r(408720),
    I = r(804410),
    u = r(376457),
    R = r(42367),
    A = r(515737),
    T = r(27269),
    N = r(17411),
    d = r(453574),
    f = r(386797),
    O = r(616456),
    L = r(778600),
    p = r(780850),
    h = r(226483),
    D = r(185461),
    S = r(166800),
    C = r(799033),
    P = r(325124),
    g = r(281894),
    U = r(130260);
