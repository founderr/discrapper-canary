"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("701909"),
  a = n("171644"),
  l = n("782340");

function s(e, t, n) {
  let s = null;
  return "failed" === t ? s = function(e, t) {
    let {
      platform: n,
      name: i
    } = e;
    switch (t) {
      case a.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
        return {
          title: l.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED, body: l.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED_BODY.format({
            deviceType: n
          })
        };
      case a.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_INVALID_POWER_MODE:
        return {
          title: l.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING.format({
            deviceType: n
          }), body: l.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING_BODY.format({
            deviceName: i
          })
        };
      case a.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
        return {
          title: l.default.Messages.CONSOLE_DEVICE_IN_USE.format({
            deviceType: n
          }), body: l.default.Messages.CONSOLE_DEVICE_IN_USE_BODY.format({
            deviceName: i
          })
        };
      case a.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
        return {
          title: l.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: l.default.Messages.CONSOLE_DEVICE_RECONNECT_ACCOUNT.format({
            deviceType: n
          }), isAccountLinkError: !0
        };
      default:
        return {
          title: l.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: l.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
            deviceName: i
          })
        }
    }
  }(e, n.code) : "n/a" === t && (s = function(e, t) {
    let {
      platform: n,
      name: i
    } = e;
    if (t === a.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) return {
      title: l.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE.format({
        deviceType: n
      }),
      body: l.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE_BODY.format({
        deviceName: i
      })
    };
    return null
  }(e, n.code)), null != s && (s.errorCodeMessage = l.default.Messages.CONSOLE_ERROR_CODE_SUPPORT.format({
    supportURL: i.default.getSubmitRequestURL(),
    errorCode: n.code
  })), s
}