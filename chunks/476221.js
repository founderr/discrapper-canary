var i = e(981631),
    s = e(388032);
n.Z = {
    getStatus: function (t) {
        let n,
            e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (t) {
            case i.hes.CONNECTING:
                (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.MzW9sL));
                break;
            case i.hes.AUTHENTICATING:
                (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.GxXwEx));
                break;
            case i.hes.AWAITING_ENDPOINT:
                (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.xEbu0d));
                break;
            case i.hes.RTC_CONNECTED:
                (n = i.QKv.CONNECTED), (e = r ? s.intl.string(s.t.HtVOdX) : s.intl.string(s.t['daXg4+']));
                break;
            case i.hes.RTC_CONNECTING:
                (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.Gp51dn));
                break;
            case i.hes.ICE_CHECKING:
                (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.rdCyAw));
                break;
            case i.hes.DTLS_CONNECTING:
                (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.UvB3gY));
                break;
            case i.hes.NO_ROUTE:
                (n = i.QKv.ERROR), (e = s.intl.string(s.t.mGhOIi));
                break;
            case i.hes.RTC_DISCONNECTED:
                (n = i.QKv.ERROR), (e = s.intl.string(s.t.M7LDmJ));
                break;
            case i.hes.DISCONNECTED:
            default:
                (n = i.QKv.ERROR), (e = s.intl.string(s.t.NLKQb2));
        }
        return {
            connectionStatus: n,
            connectionStatusText: e
        };
    },
    getShortHostname: function (t) {
        return null == t ? '' : t.split('.')[0];
    }
};
