var l = n(981631),
  i = n(689938);
t.Z = {
  getStatus: function(e) {
    let t, n, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
      case l.hes.CONNECTING:
        t = l.QKv.CONNECTING, n = i.Z.Messages.CONNECTION_STATUS_CONNECTING;
        break;
      case l.hes.AUTHENTICATING:
        t = l.QKv.CONNECTING, n = i.Z.Messages.CONNECTION_STATUS_AUTHENTICATING;
        break;
      case l.hes.AWAITING_ENDPOINT:
        t = l.QKv.CONNECTING, n = i.Z.Messages.CONNECTION_STATUS_AWAITING_ENDPOINT;
        break;
      case l.hes.RTC_CONNECTED:
        t = l.QKv.CONNECTED, n = s ? i.Z.Messages.CONNECTION_STATUS_VIDEO_CONNECTED : i.Z.Messages.CONNECTION_STATUS_VOICE_CONNECTED;
        break;
      case l.hes.RTC_CONNECTING:
        t = l.QKv.CONNECTING, n = i.Z.Messages.CONNECTION_STATUS_RTC_CONNECTING;
        break;
      case l.hes.ICE_CHECKING:
        t = l.QKv.CONNECTING, n = i.Z.Messages.CONNECTION_STATUS_ICE_CHECKING;
        break;
      case l.hes.DTLS_CONNECTING:
        t = l.QKv.CONNECTING, n = i.Z.Messages.CONNECTION_STATUS_DTLS_CONNECTING;
        break;
      case l.hes.NO_ROUTE:
        t = l.QKv.ERROR, n = i.Z.Messages.CONNECTION_STATUS_NO_ROUTE;
        break;
      case l.hes.RTC_DISCONNECTED:
        t = l.QKv.ERROR, n = i.Z.Messages.CONNECTION_STATUS_RTC_DISCONNECTED;
        break;
      case l.hes.DISCONNECTED:
      default:
        t = l.QKv.ERROR, n = i.Z.Messages.CONNECTION_STATUS_DISCONNECTED
    }
    return {
      connectionStatus: t,
      connectionStatusText: n
    }
  },
  getShortHostname: function(e) {
    return null == e ? "" : e.split(".")[0]
  }
}