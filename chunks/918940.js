"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("996106"),
  l = a("452426"),
  i = a("701488"),
  r = a("231338");
t.default = {
  [r.RPCCommands.SET_ORIENTATION_LOCK_STATE]: {
    validation: e => (0, l.default)(e).required().keys({
      lock_state: e.number().valid(i.OrientationLockState.UNLOCKED, i.OrientationLockState.PORTRAIT, i.OrientationLockState.LANDSCAPE).required(),
      picture_in_picture_lock_state: e.number().valid(i.OrientationLockState.UNLOCKED, i.OrientationLockState.PORTRAIT, i.OrientationLockState.LANDSCAPE).allow(null).optional(),
      grid_lock_state: e.number().valid(i.OrientationLockState.UNLOCKED, i.OrientationLockState.PORTRAIT, i.OrientationLockState.LANDSCAPE).allow(null).optional()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          lock_state: a,
          picture_in_picture_lock_state: l,
          grid_lock_state: i
        }
      } = e, o = t.application.id;
      if (null != o) n.default.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
        applicationId: o,
        lockState: a,
        pictureInPictureLockState: l,
        gridLockState: i
      });
      else throw new s.default({
        errorCode: r.RPCErrors.INVALID_COMMAND
      }, "No application.")
    }
  }
}