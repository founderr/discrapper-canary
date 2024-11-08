r.r(t),
    r.d(t, {
        BrowserClient: function () {
            return _.R;
        },
        SDK_VERSION: function () {
            return n.Jn;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_OP: function () {
            return n.$J;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function () {
            return n.S3;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function () {
            return n.TE;
        },
        SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function () {
            return n.Zj;
        },
        Scope: function () {
            return n.sX;
        },
        WINDOW: function () {
            return a.m9;
        },
        addBreadcrumb: function () {
            return n.n_;
        },
        addEventProcessor: function () {
            return n.Qy;
        },
        addIntegration: function () {
            return n.M5;
        },
        addTracingExtensions: function () {
            return n.Ts;
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
            return g.E8;
        },
        captureConsoleIntegration: function () {
            return n.Xs;
        },
        captureEvent: function () {
            return n.eN;
        },
        captureException: function () {
            return n.Tb;
        },
        captureFeedback: function () {
            return n.N$;
        },
        captureMessage: function () {
            return n.uT;
        },
        captureSession: function () {
            return n.cg;
        },
        captureUserFeedback: function () {
            return s.Jd;
        },
        chromeStackLineParser: function () {
            return i.$3;
        },
        close: function () {
            return n.xv;
        },
        contextLinesIntegration: function () {
            return f.S;
        },
        continueTrace: function () {
            return n.yn;
        },
        createTransport: function () {
            return n.qv;
        },
        createUserFeedbackEnvelope: function () {
            return c.r;
        },
        debugIntegration: function () {
            return n.sC;
        },
        dedupeIntegration: function () {
            return n.RH;
        },
        defaultRequestInstrumentationOptions: function () {
            return C.k3;
        },
        defaultStackLineParsers: function () {
            return i.d8;
        },
        defaultStackParser: function () {
            return i.Dt;
        },
        endSession: function () {
            return n.TM;
        },
        eventFromException: function () {
            return E.dr;
        },
        eventFromMessage: function () {
            return E.aB;
        },
        exceptionFromError: function () {
            return E.GJ;
        },
        extraErrorDataIntegration: function () {
            return n.EY;
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
            return n.yl;
        },
        forceLoad: function () {
            return s.Eg;
        },
        functionToStringIntegration: function () {
            return n.CP;
        },
        geckoStackLineParser: function () {
            return i.$Q;
        },
        getActiveSpan: function () {
            return n.HN;
        },
        getClient: function () {
            return n.s3;
        },
        getCurrentHub: function () {
            return n.Gd;
        },
        getCurrentScope: function () {
            return n.nZ;
        },
        getDefaultIntegrations: function () {
            return s.nV;
        },
        getFeedback: function () {
            return S.qm;
        },
        getGlobalScope: function () {
            return n.lW;
        },
        getIsolationScope: function () {
            return n.aF;
        },
        getReplay: function () {
            return L.T;
        },
        getRootSpan: function () {
            return n.Gx;
        },
        getSpanDescendants: function () {
            return n.Dp;
        },
        getSpanStatusFromHttpCode: function () {
            return n.ix;
        },
        globalHandlersIntegration: function () {
            return u.k;
        },
        httpClientIntegration: function () {
            return d.l;
        },
        httpContextIntegration: function () {
            return I.s;
        },
        inboundFiltersIntegration: function () {
            return n.SG;
        },
        init: function () {
            return s.S1;
        },
        instrumentOutgoingRequests: function () {
            return C.L7;
        },
        isInitialized: function () {
            return n.dk;
        },
        lastEventId: function () {
            return n.eW;
        },
        lazyLoadIntegration: function () {
            return N.R;
        },
        linkedErrorsIntegration: function () {
            return R.O;
        },
        makeBrowserOfflineTransport: function () {
            return P.O1;
        },
        makeFetchTransport: function () {
            return o.f;
        },
        makeMultiplexedTransport: function () {
            return n.Wq;
        },
        metrics: function () {
            return D.q;
        },
        moduleMetadataIntegration: function () {
            return n.wo;
        },
        onLoad: function () {
            return s.lA;
        },
        opera10StackLineParser: function () {
            return i.NP;
        },
        opera11StackLineParser: function () {
            return i.HH;
        },
        parameterize: function () {
            return n.XB;
        },
        registerSpanErrorInstrumentation: function () {
            return n.ar;
        },
        replayCanvasIntegration: function () {
            return O.m;
        },
        replayIntegration: function () {
            return L.G;
        },
        reportingObserverIntegration: function () {
            return T.y;
        },
        rewriteFramesIntegration: function () {
            return n.vU;
        },
        sendFeedback: function () {
            return S.fA;
        },
        sessionTimingIntegration: function () {
            return n.rE;
        },
        setContext: function () {
            return n.v;
        },
        setCurrentClient: function () {
            return n.KW;
        },
        setExtra: function () {
            return n.sU;
        },
        setExtras: function () {
            return n.rJ;
        },
        setHttpStatus: function () {
            return n.Q0;
        },
        setMeasurement: function () {
            return n.oi;
        },
        setTag: function () {
            return n.YA;
        },
        setTags: function () {
            return n.mG;
        },
        setUser: function () {
            return n.av;
        },
        showReportDialog: function () {
            return s.jp;
        },
        spanToBaggageHeader: function () {
            return n.uc;
        },
        spanToJSON: function () {
            return n.XU;
        },
        spanToTraceHeader: function () {
            return n.Hb;
        },
        startBrowserTracingNavigationSpan: function () {
            return g.og;
        },
        startBrowserTracingPageLoadSpan: function () {
            return g.Wo;
        },
        startInactiveSpan: function () {
            return n.qp;
        },
        startNewTrace: function () {
            return n.Iw;
        },
        startSession: function () {
            return n.yj;
        },
        startSpan: function () {
            return n.GK;
        },
        startSpanManual: function () {
            return n.V0;
        },
        thirdPartyErrorFilterIntegration: function () {
            return n.Lw;
        },
        winjsStackLineParser: function () {
            return i.R2;
        },
        withActiveSpan: function () {
            return n._d;
        },
        withIsolationScope: function () {
            return n.wi;
        },
        withScope: function () {
            return n.$e;
        },
        zodErrorsIntegration: function () {
            return n.id;
        }
    });
var n = r(148503),
    a = r(163162),
    _ = r(833772),
    o = r(387486),
    i = r(297117),
    E = r(878719),
    c = r(463461),
    s = r(509068),
    l = r(408720),
    u = r(804410),
    I = r(376457),
    R = r(42367),
    A = r(515737),
    N = r(27269),
    T = r(17411),
    d = r(453574),
    f = r(386797),
    L = r(616456),
    O = r(778600),
    p = r(780850),
    h = r(226483),
    S = r(185461),
    D = r(166800),
    C = r(799033),
    g = r(325124),
    P = r(281894),
    U = r(130260);
