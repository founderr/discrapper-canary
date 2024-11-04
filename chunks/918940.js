n(47120);
var i = n(570140),
    r = n(996106),
    a = n(452426),
    l = n(701488),
    s = n(231338);
t.Z = {
    [s.Et.SET_ORIENTATION_LOCK_STATE]: {
        validation: (e) =>
            (0, a.Z)(e)
                .required()
                .keys({
                    lock_state: e.number().valid(l.xK.UNLOCKED, l.xK.PORTRAIT, l.xK.LANDSCAPE).required(),
                    picture_in_picture_lock_state: e.number().valid(l.xK.UNLOCKED, l.xK.PORTRAIT, l.xK.LANDSCAPE).allow(null).optional(),
                    grid_lock_state: e.number().valid(l.xK.UNLOCKED, l.xK.PORTRAIT, l.xK.LANDSCAPE).allow(null).optional()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { lock_state: n, picture_in_picture_lock_state: a, grid_lock_state: l }
                } = e,
                o = t.application.id;
            if (null != o)
                i.Z.dispatch({
                    type: 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
                    applicationId: o,
                    lockState: n,
                    pictureInPictureLockState: a,
                    gridLockState: l
                });
            else throw new r.Z({ errorCode: s.lT.INVALID_COMMAND }, 'No application.');
        }
    }
};
