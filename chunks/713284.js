n.d(t, {
    D: function () {
        return r;
    }
}),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140);
((a = r || (r = {}))[(a.DC_SHOWN = 0)] = 'DC_SHOWN'), (a[(a.DC_SHOW_REQUEST = 1)] = 'DC_SHOW_REQUEST'), (a[(a.DC_DISMISSED = 2)] = 'DC_DISMISSED');
let d = [],
    f = (e) => {
        let { eventType: t, dismissibleContent: n } = e;
    };
class _ extends (i = u.ZP.Store) {
    getDCFEvents() {
        return d;
    }
}
(l = 'DCFEventStore'),
    (o = 'displayName') in (s = _)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new _(c.Z, {
        LOGOUT: () => {
            d = [];
        },
        DCF_EVENT_LOGGED: (e) => {
            let { eventType: t, dismissibleContent: n } = e;
            f({
                eventType: t,
                dismissibleContent: n
            });
        },
        DCF_HANDLE_DC_DISMISSED: (e) => {
            let { dismissibleContent: t } = e;
            f({
                eventType: 2,
                dismissibleContent: t
            });
        },
        DCF_HANDLE_DC_SHOWN: (e) => {
            let { dismissibleContent: t } = e;
            f({
                eventType: 0,
                dismissibleContent: t
            });
        }
    }));
