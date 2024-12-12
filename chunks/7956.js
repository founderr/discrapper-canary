r.d(n, {
    i: function () {
        return s;
    }
});
var i = r(804739),
    a = r(981631);
function s(e, n, r) {
    let s = n.getState(e.id, e.branchId),
        o = r.getQueuePosition(e.id, e.branchId),
        l = r.paused;
    if (null != s) {
        if (null == o || -1 === o)
            switch (s.type) {
                case a.vxO.INSTALLING:
                    return a.apO.INSTALL;
                case a.vxO.UPDATING:
                case a.vxO.UPDATE_REQUIRED:
                    return a.apO.UPDATE;
            }
        switch (s.type) {
            case a.vxO.INSTALLING:
            case a.vxO.UPDATING:
            case a.vxO.UPDATE_REQUIRED:
            case a.vxO.REPAIRING:
                if (o > 0) return a.apO.MOVE_UP;
                if (l) return a.apO.RESUME;
                return a.apO.PAUSE;
            case a.vxO.UP_TO_DATE:
                return a.apO.PLAY;
            case a.vxO.UNINSTALLING:
                return null;
        }
    }
    return null != o && o > 0 ? a.apO.MOVE_UP : (0, i.Q)() ? a.apO.INSTALL : null;
}
