var i = r(411104);
var a = r(710845),
    s = r(358085),
    o = r(579806);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new a.Z('ProgressBarManager');
class c {
    setProgress(e, n) {
        if (!(0, s.isDesktop)()) throw Error('cannot set progress from non-native');
        if (null != this.taskID && this.taskID !== e) {
            u.warn(''.concat(this.taskID, ' is already running. cannot set ').concat(e));
            return;
        }
        (this.taskID = e), o.Z.window.setProgressBar(n);
    }
    clearProgress(e) {
        if (!(0, s.isDesktop)()) throw Error('cannot clear progress from non-native');
        if (null == this.taskID) {
            u.warn('cannot clear progress. No current progress running.');
            return;
        }
        if (this.taskID !== e) {
            u.warn('cannot clear progress of '.concat(e, ' when ').concat(this.taskID, ' is running'));
            return;
        }
        (this.taskID = null), o.Z.window.setProgressBar(-1);
    }
    constructor() {
        l(this, 'taskID', void 0);
    }
}
n.Z = new c();
